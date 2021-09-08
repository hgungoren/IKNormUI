/* eslint-disable */
import React from 'react';
import { Alert, Checkbox, Col, Drawer, Row, Space } from 'antd';
import './index.less';
export interface Props {
    onClose: () => void;
    onSwitchChange: (node) => void;
    visible: boolean,
    node: any,
}

export function HierarchyDrawer(props: Props) {


    return (
        <>
            <Drawer
                title={`Norm Bildirim Paneli`}
                placement="right"
                width={600}
                onClose={props.onClose}
                visible={props.visible}>

                <Row gutter={16} justify="start" align="middle">
                    <Col xs={{ offset: 0, span: 24 }} sm={{ offset: 0, span: 24 }} md={{ offset: 0, span: 24 }} lg={{ offset: 0, span: 24 }} xl={{ offset: 0, span: 24 }} xxl={{ offset: 0, span: 24 }} >
                        <p style={{ marginBottom: '10px' }}>
                            <Alert
                                message=" Mail Bildirimi"
                                description="Yeni Bir Norm Talebi Geldiğinde, Kullanıcıya Mail Olarak Bildirim Gider"
                                type="info"
                                closable={false}
                                action={
                                    <Space direction="vertical">
                                        <Checkbox
                                            defaultChecked={props.node.mail}
                                            disabled={false}
                                            onChange={(x) => props.onSwitchChange({ id: props.node.id, status: x.target.checked, type: 'Mail' })}>
                                            Bildirim
                                        </Checkbox>
                                    </Space>
                                }
                            />
                        </p>
                    </Col>
                </Row>
                <Row gutter={16} justify="start" align="middle">

                    <Col xs={{ offset: 0, span: 24 }} sm={{ offset: 0, span: 24 }} md={{ offset: 0, span: 24 }} lg={{ offset: 0, span: 24 }} xl={{ offset: 0, span: 24 }} xxl={{ offset: 0, span: 24 }} >
                        <p style={{ marginBottom: '10px' }}>
                            <Alert
                                message="Mail Bildirimi - Durum Değişikliği"
                                description="Var Olan Norm Üzerinde Bir Değişiklik Olduğunda, Kullanıcıya Bildirim Maili Gider"
                                type="info"
                                closable={false}
                                action={
                                    <Space direction="vertical">
                                        <Checkbox
                                            defaultChecked={props.node.mailStatusChange}
                                            disabled={false}
                                            onChange={(x) => props.onSwitchChange({ id: props.node.id, status: x.target.checked, type: 'MailStatusChange' })}>
                                            Bildirim
                                        </Checkbox>
                                    </Space>
                                }
                            />
                        </p>
                    </Col>
                </Row>

                <Row gutter={16} justify="start" align="middle">
                    <Col xs={{ offset: 0, span: 24 }} sm={{ offset: 0, span: 24 }} md={{ offset: 0, span: 24 }} lg={{ offset: 0, span: 24 }} xl={{ offset: 0, span: 24 }} xxl={{ offset: 0, span: 24 }} >
                        <p style={{ marginBottom: '10px' }}>
                            <Alert
                                message="Cep Telefonu Bildirimi"
                                description="Yeni Bir Norm Talebi Geldiğinde, Kullanıcının Cep Telefonuna Bildirim Gider"
                                type="info"
                                closable={false}
                                action={
                                    <Space direction="vertical">
                                        <Checkbox
                                            defaultChecked={props.node.pushNotificationPhone}
                                            disabled={false}
                                            onChange={(x) => props.onSwitchChange({ id: props.node.id, status: x.target.checked, type: 'PushNotificationPhone' })}>
                                            Bildirim
                                        </Checkbox>
                                    </Space>
                                }
                            />
                        </p>
                    </Col>
                    <Col xs={{ offset: 0, span: 24 }} sm={{ offset: 0, span: 24 }} md={{ offset: 0, span: 24 }} lg={{ offset: 0, span: 24 }} xl={{ offset: 0, span: 24 }} xxl={{ offset: 0, span: 24 }} >
                        <p style={{ marginBottom: '10px' }}>
                            <Alert
                                message="Cep Telefonu Bildirimi - Durum Değişikliği"
                                description="Var Olan Norm Üzerinde Bir Değişiklik Olduğunda, Kullanıcının Cep Telefonuna Bildirim Gider"
                                type="info"
                                closable={false}
                                action={
                                    <Space direction="vertical">
                                        <Checkbox
                                            defaultChecked={props.node.pushNotificationPhoneStatusChange}
                                            disabled={false}
                                            onChange={(x) => props.onSwitchChange({ id: props.node.id, status: x.target.checked, type: 'PushNotificationPhoneStatusChange' })}>
                                            Bildirim
                                        </Checkbox>
                                    </Space>
                                }
                            />
                        </p>
                    </Col>
                </Row>

                <Row gutter={16} justify="start" align="middle">
                    <Col xs={{ offset: 0, span: 24 }} sm={{ offset: 0, span: 24 }} md={{ offset: 0, span: 24 }} lg={{ offset: 0, span: 24 }} xl={{ offset: 0, span: 24 }} xxl={{ offset: 0, span: 24 }} >
                        <p style={{ marginBottom: '10px' }}>
                            <Alert
                                message="Browser Bildirimi"
                                description="Yeni Bir Norm Talebi Geldiğinde, Kullanıcıya Browser Üzerinden Bildirim Gider"
                                type="info"
                                closable={false}
                                action={
                                    <Space direction="vertical">
                                        <Checkbox
                                            defaultChecked={props.node.pushNotificationWeb}
                                            disabled={false}
                                            onChange={(x) => props.onSwitchChange({ id: props.node.id, status: x.target.checked, type: 'PushNotificationWeb' })}>
                                            Bildirim
                                        </Checkbox>
                                    </Space>
                                }
                            />
                        </p>
                    </Col>
                    <Col xs={{ offset: 0, span: 24 }} sm={{ offset: 0, span: 24 }} md={{ offset: 0, span: 24 }} lg={{ offset: 0, span: 24 }} xl={{ offset: 0, span: 24 }} xxl={{ offset: 0, span: 24 }} >
                        <p style={{ marginBottom: '10px' }}>
                            <Alert
                                message="Browser Bildirimi - Durum Değişikliği"
                                description="Var Olan Norm Üzerinde Bir Değişiklik Olduğunda, Kullanıcıya Browser Üzerinden Bildirim Gider"
                                type="info"
                                closable={false}
                                action={
                                    <Space direction="vertical">
                                        <Checkbox
                                            defaultChecked={props.node.pushNotificationWebStatusChange}
                                            disabled={false}
                                            onChange={(x) => props.onSwitchChange({ id: props.node.id, status: x.target.checked, type: 'PushNotificationWebStatusChange' })}>
                                            Bildirim
                                        </Checkbox>
                                    </Space>
                                }
                            />
                        </p>
                    </Col>
                </Row>
                <Row gutter={16} justify="start" align="middle">
                    <Col xs={{ offset: 0, span: 24 }} sm={{ offset: 0, span: 24 }} md={{ offset: 0, span: 24 }} lg={{ offset: 0, span: 24 }} xl={{ offset: 0, span: 24 }} xxl={{ offset: 0, span: 24 }} >
                        <p style={{ marginBottom: '10px' }}>
                            <Alert
                                message="Sonlandır"
                                description="Yeni Bir Norm Talebi Geldiğinde veya Var Olan Norm Üzerinde Bir Değişiklik Olduğunda Onay Akışını Sonlardırma"
                                type="info"
                                closable={false}
                                action={
                                    <Space direction="vertical">
                                        <Checkbox
                                            defaultChecked={props.node.pushNotificationWebStatusChange}
                                            disabled={false}
                                            onChange={(x) => props.onSwitchChange({ id: props.node.id, status: x.target.checked, type: 'CanTerminate' })}>
                                            Bildirim
                                        </Checkbox>
                                    </Space>
                                }
                            />
                        </p>
                    </Col>
                </Row>
            </Drawer>
        </>
    );
}