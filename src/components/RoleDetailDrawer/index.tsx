/*eslint-disable  @typescript-eslint/no-unused-expressions*/
import React from 'react';
import { Drawer, Button, Col, Row, Tree } from 'antd';
import { L } from '../../lib/abpUtility'; 

const RoleDetailDrawer = ({ visible, showOrHideDrawer, permissionsList, id, formRef }) => {

    const getData = () => {
        var modules = [] as any;


        if (permissionsList !== undefined) {
            let set = new Set<string>();
            for (const permission of permissionsList) {
                if (permission.name.startsWith('Pages')) {
                    set.add(permission.name.split('.')[1].toLowerCase())
                }
            }

            for (let item of set) {
                let text = L(item);
                let data = {
                    title: text,
                    key: item,
                    children: []
                }

                let child = permissionsList.filter(_ => _.name.startsWith(item))
                data.children = child.map(_ => ({ title: _.name.split('.'), key: _.name }));

                modules.push(data)
            }
        }

        modules = modules.sort()
        return modules;
    }


    const onCheck = (x) => { console.log(x) }
    const onSelect = () => { }

    const content = () => {

        return <Tree
            checkable
            defaultExpandedKeys={['0-0-0', '0-0-1']}
            defaultSelectedKeys={['0-0-0', '0-0-2']}
            defaultCheckedKeys={['0-0-0', '0-0-3']}
            onCheck={(x) => onCheck(x)}
            onSelect={onSelect}
            treeData={getData()} />

    }


    return (<>
        <Drawer width={600}
            footer={
                <Row align="middle">
                    <Col span={4}>
                        <Button form='roleForm' key="submit" htmlType="submit">  Test Button </Button>
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

