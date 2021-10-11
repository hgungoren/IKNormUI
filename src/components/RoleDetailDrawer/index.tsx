/* eslint-disable  @typescript-eslint/no-unused-expressions*/
import React, { useState } from 'react';
import { L } from '../../lib/abpUtility';
import { DataNode } from 'antd/lib/tree';
import { Drawer, Button, Col, Row, Tree } from 'antd';
import { GetAllPermissionsOutput } from '../../services/role/dto/getAllPermissionsOutput';

const RoleDetailDrawer = ({ visible, showOrHideDrawer, permissions, roleStore }) => {


    const getChildItems = (prefix: string, suffix: string, key: string) => {

        let children = permissions.filter(y => y.name
            .startsWith(prefix + '.' + suffix))
            .map((c: GetAllPermissionsOutput, i: number) => {

                let names = c.name.split('.');
                let name = names[names.length - 1];
                console.log(c.displayName)
                return {
                    title: L(c.displayName.replace('[', '').replace(']', '')),
                    key: `${key}-0-0-${i}`,
                    value: c.name,
                    children: getChildItems('subitems' + '.' + suffix, name, name)
                }
            });

        return children;
    }

    const [grantedPermissions, setGrantedPermissions] = useState([''])

    const options = [...new Set(permissions.filter(x => x.name.startsWith('pages')).map((x: GetAllPermissionsOutput, y: number) => {
        let name = x.name.split('.')[1];
        return {
            title: L(x.displayName),
            key: `${y}-0-0`,
            value: x.displayName,
            children: getChildItems('items', name, name)
        };
    }))] as DataNode[];

    const getSelectedItems = () => {
        let items = [] as DataNode[];
        let d = options.map(x => x.children);
        if (d.length > 0) {
            let dd = d.map((x: any) => x.map(f => ({ key: f.key, title: f.title, value: f.value })))
            let dfs = dd.filter(x => x.length > 0).map(x => x)
            let permission = roleStore.roleEdit.grantedPermissionNames;
            for (let i of dfs) {
                for (let k of i) {
                    if (permission.includes(k.value)) {
                        items.push(k)
                    }
                }
            }
        }
        return items;
    }

    const getItems = () => {
        let items = [] as DataNode[];
        let d = options.map(x => x.children);
        if (d.length > 0) {
            let dd = d.map((x: any) => x.map(f => ({ key: f.key, title: f.title, value: f.value })))
            let dfs = dd.filter(x => x.length > 0).map(x => x)
            for (let i of dfs) {
                for (let k of i) {
                    items.push(k)
                }
            }
        }
        return items;
    }

    const onCheck = (selected) => {

        let permissions = [] as string[];
        permissions = getItems().filter(x => selected.includes(x.key)).map((x: any) => x.value);



        let norms = [
            'knorm.getpendingnormfillrequest',
            'knorm.gettotalnormupdaterequest',
            'knorm.getacceptednormfillrequest',
            'knorm.gettotalnormfillingrequest',
            'knorm.getcancelednormfillrequest',
            'knorm.getpendingnormupdaterequest',
            'knorm.getacceptednormupdaterequest',
            'knorm.getcancelednormupdaterequest',
        ];

        if (permissions.filter((x) => norms.includes(x)).length > 0) {

            permissions = [...permissions, 'knorm.view']
        }

        let bolgeDetail = ['kbolge.detail'];

        if (permissions.filter((x) => bolgeDetail.includes(x)).length > 0) {
            permissions = [...permissions, 'ksube.detail']
        }

        let bolgeList = ['kbolge.branches'];

        if (permissions.filter((x) => bolgeList.includes(x)).length > 0) {
            permissions = [...permissions, 'ksube.view']
        }

        setGrantedPermissions(permissions)
    }

    const handleSubmit = () => {
        let role = roleStore.roleEdit.role
        role.grantedPermissions = grantedPermissions;
        roleStore.update(role)
        setTimeout(() => { showOrHideDrawer() }, 500)
    }

    const onSelect = (x) => {



    }

    const content = () => {
        return <Tree
            checkable
            defaultExpandedKeys={getSelectedItems().map(x => x.key)}
            defaultSelectedKeys={getSelectedItems().map(x => x.key)}
            defaultCheckedKeys={getSelectedItems().map(x => x.key)}
            onCheck={(x) => onCheck(x)}
            onSelect={onSelect}
            treeData={options} />
    }

    return (<>
        <Drawer width={1000}
            footer={
                <Row align="middle">
                    <Col span={4}>
                        <Button form='roleForm' key="submit" htmlType="submit" type="primary" onClick={handleSubmit}> {L('Save')} </Button>
                    </Col>
                </Row>
            }
            title={L('UserRoleDetail')}
            visible={visible}
            onClose={showOrHideDrawer}
            destroyOnClose={true}>
            {content()}
        </Drawer>

    </>);
}

export default RoleDetailDrawer;

