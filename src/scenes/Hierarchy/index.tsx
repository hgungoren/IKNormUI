/* eslint-disable */
import 'react-sortable-tree/style.css';
import './index.less';
import React from 'react';
import uuid from 'react-uuid';
import { Switch, Tooltip } from 'antd'; 
import { inject, observer } from 'mobx-react';
import SortableTree from 'react-sortable-tree';
import Stores from '../../stores/storeIdentifier';
import KHierarchyStore from '../../stores/kHierarchyStore';
import AppComponentBase from '../../components/AppComponentBase'; 

export interface IUnitProps {
    kHierarchyStore: KHierarchyStore
}

export interface IUnitState {
    treeData: any[]
}

@inject(Stores.KHierarchyStore)
@observer
class Hierarchy extends AppComponentBase<IUnitProps, IUnitState>{

    state = { treeData: [] }

    componentDidMount = async () => {
        await this.props.kHierarchyStore.getUnit();
        setTimeout(() => {
            let treeData = this.props.kHierarchyStore.units.items.map((x) => ({
                id: x.id,
                title: x.name,
                expanded: false,
                subtitle:'unit',
                children: x.positions.map(p => ({
                    id: p.id,
                    title: p.name,
                    subtitle:'position',
                    children: p.nodes.map(n => ({
                        id: n.id,
                        title: n.title,
                        subtitle: 'title',
                        mail: n.mail,
                        active: n.active,
                        pushNotificationPhone: n.pushNotificationPhone,
                        pushNotificationWeb: n.pushNotificationWeb,
                        mailStatusChange: n.mailStatusChange,
                        canTerminate: n.canTerminate
                    }))
                }))
            }))

            this.setState({ treeData })
        }, 500);
    } 

    onSwitchChange = async (data: any) => {

        this.props.kHierarchyStore.update(data)
    }
  
    render() {
        return (
            <div style={{ height: 700 }}>
                <SortableTree
                    key={uuid()}
                    onChange={treeData => this.setState({ treeData })}
                    treeData={this.state.treeData}
                    generateNodeProps={({ node, path }) => ({
                        canDrag: node.subtitle === "unit" ? false: node.subtitle === "position" ?  false : true , 
                        buttons: node.subtitle === "title" ? [
                            <Tooltip placement="topLeft" title={"Talep İsteği Geldiğinde Mail Gelsinmi"}            arrowPointAtCenter> <Switch onChange={(x) => this.onSwitchChange({ id: node.id, status: x, type: 'Mail' })}                  defaultChecked={node.mail}                   checkedChildren="Mail"       unCheckedChildren="Mail"       className={'switch-btn'} /></Tooltip>,
                            <Tooltip placement="topLeft" title="Talep İsteği Geldiğinde Telefona Bildirim Gelsinmi" arrowPointAtCenter> <Switch onChange={(x) => this.onSwitchChange({ id: node.id, status: x, type: 'PushNotificationPhone' })} defaultChecked={node.pushNotificationPhone}  checkedChildren="Telefon"    unCheckedChildren="Telefon"    className={'switch-btn'} /></Tooltip>,
                            <Tooltip placement="topLeft" title="Talep İsteği Geldiğinde Web Bildirimi Gelsinmi"     arrowPointAtCenter> <Switch onChange={(x) => this.onSwitchChange({ id: node.id, status: x, type: 'PushNotificationWeb' })}   defaultChecked={node.pushNotificationWeb}    checkedChildren="Web"        unCheckedChildren="Web"        className={'switch-btn'} /></Tooltip>,
                            <Tooltip placement="topLeft" title="Talep Durumu Değiştiğinde Mail Gelsinmi"            arrowPointAtCenter> <Switch onChange={(x) => this.onSwitchChange({ id: node.id, status: x, type: 'MailStatusChange' })}      defaultChecked={node.mailStatusChange}       checkedChildren="Değişiklik" unCheckedChildren="Değişiklik" className={'switch-btn'} /></Tooltip>,
                            <Tooltip placement="topLeft" title="Talebi Sonlandırabilirmi"                           arrowPointAtCenter> <Switch onChange={(x) => this.onSwitchChange({ id: node.id, status: x, type: 'CanTerminate' })}          defaultChecked={node.canTerminate}           checkedChildren="Sonlandır"  unCheckedChildren="Sonlandır"  className={'switch-btn'} /></Tooltip>,
                            <Tooltip placement="topLeft" title="Hiyerarşi Listesine Dahil Edilsinmi"                arrowPointAtCenter> <Switch onChange={(x) => this.onSwitchChange({ id: node.id, status: x, type: 'Active' })}                defaultChecked={node.active}                 checkedChildren="Aktif"      unCheckedChildren="Pasif"      className={'switch-btn'} /></Tooltip>,
                        ] : []
                    })}
                />
            </div>
        );
    }

}

export default Hierarchy;



