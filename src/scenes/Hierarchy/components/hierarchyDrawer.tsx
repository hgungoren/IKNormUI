/* eslint-disable */
import React, { useState } from 'react';
//import React from 'react';
import { Alert, Checkbox, Col, Drawer, Row, Space } from 'antd';
import './index.less';
import KHierarchyStore from '../../../stores/kHierarchyStore';

export interface Props {
  onClose: () => void;
  onSwitchChange: (node) => void;
  visible: boolean;
  node: any;
  alertTyp: any;
  kHierarchyStore: KHierarchyStore;
}

export function HierarchyDrawer(props: Props) {

<<<<<<< HEAD


=======
>>>>>>> 0ae10280567259e509be6b403455be0d9b08b21b
  const [defaultVisiblePushNotificationPhoneStatusChange, setDefaultVisiblePushNotificationPhoneStatusChange] = useState(props.node.pushNotificationPhoneStatusChange);
  const [defaultVisiblePushNotificationWebStatusChange, setDefaultVisiblePushNotificationWebStatusChange] = useState(props.node.pushNotificationWebStatusChange);
  const [defaultVisiblePushNotificationPhone, setDefaultVisiblePushNotificationPhone] = useState(props.node.pushNotificationPhone);
  const [defaultVisiblePushNotificationWeb, setDefaultVisiblePushNotificationWeb] = useState(props.node.pushNotificationWeb);
  const [defaultVisibleCanTerminate, setDefaultVisibleCanTerminate] = useState(props.node.canTerminate);
  const [defaultVisibleMailStatusChange, setDefaultVisibleMailStatusChange] = useState(props.node.mailStatusChange);
  const [defaultVisibleMail, setDefaultVisibleMail] = useState(props.node.mail);

  return (
    <>
      <Drawer
        title={`Norm Bildirim Paneli`}
        placement="right"
        width={600}
        onClose={props.onClose}
        visible={props.visible}
      > 
        <Row gutter={16} justify="start" align="middle">
          <Col
            xs={{ offset: 0, span: 24 }}
            sm={{ offset: 0, span: 24 }}
            md={{ offset: 0, span: 24 }}
            lg={{ offset: 0, span: 24 }}
            xl={{ offset: 0, span: 24 }}
            xxl={{ offset: 0, span: 24 }}
          >
            <div style={{ marginBottom: '10px' }}>
              <Alert
                message=" Mail Bildirimi"
                description="Yeni Bir Norm Talebi Geldiğinde, Kullanıcıya Mail Olarak Bildirim Gider"
                type={defaultVisibleMail ? 'info' : 'error'}
                closable={false}
                action={
                  <Space direction="vertical">
                    <Checkbox
                      defaultChecked={props.node.mail}
                      disabled={false}
<<<<<<< HEAD
                      //    onChange={(x) => props.onSwitchChange({ id: props.node.id, status: x.target.checked, type: 'Mail' })}
                      onChange={(e) => {
                        props.onSwitchChange({ id: props.node.id, status: e.target.checked, type: 'Mail' })
                      setDefaultVisibleMail(!defaultVisibleMail)}}
=======
                      // onChange={(x) => props.onSwitchChange({ id: props.node.id, status: x.target.checked, type: 'Mail' })}
                      onChange={(e) => {
                        props.onSwitchChange({ id: props.node.id, status: e.target.checked, type: 'Mail' })
                        setDefaultVisibleMail(!defaultVisibleMail)
                      }}
>>>>>>> 0ae10280567259e509be6b403455be0d9b08b21b

                    >
                      Bildirim
                    </Checkbox>
                  </Space>
                }
              />
            </div>
          </Col>
        </Row>


        <Row gutter={16} justify="start" align="middle">
          <Col
            xs={{ offset: 0, span: 24 }}
            sm={{ offset: 0, span: 24 }}
            md={{ offset: 0, span: 24 }}
            lg={{ offset: 0, span: 24 }}
            xl={{ offset: 0, span: 24 }}
            xxl={{ offset: 0, span: 24 }}
          >
            <div style={{ marginBottom: '10px' }}>
              <Alert
                message="Mail Bildirimi - Durum Değişikliği"
                description="Var Olan Norm Üzerinde Bir Değişiklik Olduğunda, Kullanıcıya Bildirim Maili Gider"
<<<<<<< HEAD
           
=======

>>>>>>> 0ae10280567259e509be6b403455be0d9b08b21b
                type={defaultVisibleMailStatusChange ? 'info' : 'error'}
                closable={false}
                action={
                  <Space direction="vertical">
                    <Checkbox
                      defaultChecked={props.node.mailStatusChange}
                      disabled={false}
                      // onChange={(x) =>
                      // props.onSwitchChange({
                      // id: props.node.id,
                      // status: x.target.checked,
                      // type: 'MailStatusChange',
                      // })
                      // }

<<<<<<< HEAD
                      onChange={(e) =>{
                        props.onSwitchChange({ id: props.node.id, status: e.target.checked, type: 'MailStatusChange' })
                        setDefaultVisibleMailStatusChange(!defaultVisibleMailStatusChange)}}
=======
                      onChange={(e) => {
                        props.onSwitchChange({ id: props.node.id, status: e.target.checked, type: 'MailStatusChange' })
                        setDefaultVisibleMailStatusChange(!defaultVisibleMailStatusChange)
                      }}
>>>>>>> 0ae10280567259e509be6b403455be0d9b08b21b

                    >
                      Bildirim
                    </Checkbox>
                  </Space>
                }
              />
            </div>
          </Col>
        </Row>

        <Row gutter={16} justify="start" align="middle">
          <Col
            xs={{ offset: 0, span: 24 }}
            sm={{ offset: 0, span: 24 }}
            md={{ offset: 0, span: 24 }}
            lg={{ offset: 0, span: 24 }}
            xl={{ offset: 0, span: 24 }}
            xxl={{ offset: 0, span: 24 }}
          >
            <div style={{ marginBottom: '10px' }}>
              <Alert
                message="Cep Telefonu Bildirimi"
                description="Yeni Bir Norm Talebi Geldiğinde, Kullanıcının Cep Telefonuna Bildirim Gider"
                type={defaultVisiblePushNotificationPhone ? 'info' : 'error'}
                closable={false}
                action={
                  <Space direction="vertical">
                    <Checkbox
                      defaultChecked={props.node.pushNotificationPhone}
                      disabled={false}
                      // onChange={(x) =>
                      // props.onSwitchChange({
                      // id: props.node.id,
                      // status: x.target.checked,
                      // type: 'PushNotificationPhone',
                      // })
                      // }

                      onChange={(e) => {
                        props.onSwitchChange({ id: props.node.id, status: e.target.checked, type: 'PushNotificationPhone' })
<<<<<<< HEAD
                        setDefaultVisiblePushNotificationPhone(!defaultVisiblePushNotificationPhone)}}
=======
                        setDefaultVisiblePushNotificationPhone(!defaultVisiblePushNotificationPhone)
                      }}
>>>>>>> 0ae10280567259e509be6b403455be0d9b08b21b

                    >
                      Bildirim
                    </Checkbox>
                  </Space>
                }
              />
            </div>
          </Col>
          <Col
            xs={{ offset: 0, span: 24 }}
            sm={{ offset: 0, span: 24 }}
            md={{ offset: 0, span: 24 }}
            lg={{ offset: 0, span: 24 }}
            xl={{ offset: 0, span: 24 }}
            xxl={{ offset: 0, span: 24 }}
          >
            <div style={{ marginBottom: '10px' }}>
              <Alert
                message="Cep Telefonu Bildirimi - Durum Değişikliği"
                description="Var Olan Norm Üzerinde Bir Değişiklik Olduğunda, Kullanıcının Cep Telefonuna Bildirim Gider"
<<<<<<< HEAD
=======



>>>>>>> 0ae10280567259e509be6b403455be0d9b08b21b
                type={defaultVisiblePushNotificationPhoneStatusChange ? 'info' : 'error'}
                closable={false}
                action={
                  <Space direction="vertical">
                    <Checkbox
                      defaultChecked={props.node.pushNotificationPhoneStatusChange}
                      disabled={false}
<<<<<<< HEAD
                      //   onChange={(x) =>
                      //     props.onSwitchChange({
                      //       id: props.node.id,
                      //       status: x.target.checked,
                      //       type: 'PushNotificationPhoneStatusChange',
                      //     })
                      //   }

                      onChange={(e) => {
                        props.onSwitchChange({ id: props.node.id, status: e.target.checked, type: 'PushNotificationPhoneStatusChange' })

                        setDefaultVisiblePushNotificationPhoneStatusChange(!defaultVisiblePushNotificationPhoneStatusChange)}
                      }

=======
                      onChange={(e) => {
                        props.onSwitchChange({ id: props.node.id, status: e.target.checked, type: 'PushNotificationPhoneStatusChange' })
                        setDefaultVisiblePushNotificationPhoneStatusChange(!defaultVisiblePushNotificationPhoneStatusChange)
                      }}
>>>>>>> 0ae10280567259e509be6b403455be0d9b08b21b
                    >
                      Bildirim
                    </Checkbox>
                  </Space>
                }
              />
            </div>
          </Col>
        </Row>

        <Row gutter={16} justify="start" align="middle">
          <Col
            xs={{ offset: 0, span: 24 }}
            sm={{ offset: 0, span: 24 }}
            md={{ offset: 0, span: 24 }}
            lg={{ offset: 0, span: 24 }}
            xl={{ offset: 0, span: 24 }}
            xxl={{ offset: 0, span: 24 }}
          >
            <div style={{ marginBottom: '10px' }}>
              <Alert
                message="Browser Bildirimi"
                description="Yeni Bir Norm Talebi Geldiğinde, Kullanıcıya Browser Üzerinden Bildirim Gider"
                type={defaultVisiblePushNotificationWeb ? 'info' : 'error'}
                closable={false}
                action={
                  <Space direction="vertical">
                    <Checkbox
                      defaultChecked={props.node.pushNotificationWeb}
                      disabled={false}
<<<<<<< HEAD
                      //   onChange={(x) =>
                      //     props.onSwitchChange({
                      //       id: props.node.id,
                      //       status: x.target.checked,
                      //       type: 'PushNotificationWeb',
                      //     })
                      //   }

                      onChange={(e) => {
                        props.onSwitchChange({ id: props.node.id, status: e.target.checked, type: 'PushNotificationWeb' })

                        setDefaultVisiblePushNotificationWeb(!defaultVisiblePushNotificationWeb)}
                      }
                   
=======
                      onChange={(e) => {
                        props.onSwitchChange({ id: props.node.id, status: e.target.checked, type: 'PushNotificationWeb' })
                        setDefaultVisiblePushNotificationWeb(!defaultVisiblePushNotificationWeb)
                      }}
>>>>>>> 0ae10280567259e509be6b403455be0d9b08b21b
                    >
                      Bildirim
                    </Checkbox>
                  </Space>
                }
              />
            </div>
          </Col>
          <Col
            xs={{ offset: 0, span: 24 }}
            sm={{ offset: 0, span: 24 }}
            md={{ offset: 0, span: 24 }}
            lg={{ offset: 0, span: 24 }}
            xl={{ offset: 0, span: 24 }}
            xxl={{ offset: 0, span: 24 }}
          >
            <div style={{ marginBottom: '10px' }}>
              <Alert
                message="Browser Bildirimi - Durum Değişikliği"
                description="Var Olan Norm Üzerinde Bir Değişiklik Olduğunda, Kullanıcıya Browser Üzerinden Bildirim Gider"
                type={defaultVisiblePushNotificationWebStatusChange ? 'info' : 'error'}
                closable={false}
                action={
                  <Space direction="vertical">
                    <Checkbox
                      defaultChecked={props.node.pushNotificationWebStatusChange}
                      disabled={false}
<<<<<<< HEAD
                      //   onChange={(x) =>
                      //     props.onSwitchChange({
                      //       id: props.node.id,
                      //       status: x.target.checked,
                      //       type: 'PushNotificationWebStatusChange',
                      //     })
                      //   }
                      onChange={(e) => {
                        props.onSwitchChange({ id: props.node.id, status: e.target.checked, type: 'PushNotificationWebStatusChange' })

                        setDefaultVisiblePushNotificationWebStatusChange(!defaultVisiblePushNotificationWebStatusChange)}
=======
                      // onChange={(x) =>
                      // props.onSwitchChange({
                      // id: props.node.id,
                      // status: x.target.checked,
                      // type: 'PushNotificationWebStatusChange',
                      // })
                      // }
                      onChange={(e) => {
                        props.onSwitchChange({ id: props.node.id, status: e.target.checked, type: 'PushNotificationWebStatusChange' })

                        setDefaultVisiblePushNotificationWebStatusChange(!defaultVisiblePushNotificationWebStatusChange)
                      }
>>>>>>> 0ae10280567259e509be6b403455be0d9b08b21b
                      }

                    >
                      Bildirim
                    </Checkbox>
                  </Space>
                }
              />
            </div>
          </Col>
        </Row>
        <Row gutter={16} justify="start" align="middle">
          <Col
            xs={{ offset: 0, span: 24 }}
            sm={{ offset: 0, span: 24 }}
            md={{ offset: 0, span: 24 }}
            lg={{ offset: 0, span: 24 }}
            xl={{ offset: 0, span: 24 }}
            xxl={{ offset: 0, span: 24 }}
          >
            <div style={{ marginBottom: '10px' }}>
              <Alert
                message="Sonlandır"
                description="Yeni Bir Norm Talebi Geldiğinde veya Var Olan Norm Üzerinde Bir Değişiklik Olduğunda Onay Akışını Sonlardırma"
                type={defaultVisibleCanTerminate ? 'info' : 'error'}
                closable={false}
                action={
                  <Space direction="vertical">
                    <Checkbox
                      defaultChecked={props.node.canTerminate}
<<<<<<< HEAD
                      disabled={false} 
                      onChange={(e) => {
                        props.onSwitchChange({ id: props.node.id, status: e.target.checked, type: 'CanTerminate' })

                        setDefaultVisibleCanTerminate(!defaultVisibleCanTerminate)}
=======
                      disabled={false}
                      onChange={(e) => {
                        props.onSwitchChange({ id: props.node.id, status: e.target.checked, type: 'CanTerminate' })

                        setDefaultVisibleCanTerminate(!defaultVisibleCanTerminate)
                      }
>>>>>>> 0ae10280567259e509be6b403455be0d9b08b21b
                      }
                    >
                      Bildirim
                    </Checkbox>
                  </Space>
                }
              />
            </div>
          </Col>
        </Row>
      </Drawer>
    </>
  );
}