/*eslint-disable */

import * as React from 'react';

import { Card, Col, Row } from 'antd';
import Stores from '../../stores/storeIdentifier';
import { inject, observer } from 'mobx-react';
import AuthenticationStore from '../../stores/authenticationStore';
import SessionStore from '../../stores/sessionStore';
import AccountStore from '../../stores/accountStore';
import NotificationStore from '../../stores/notificationStore';
import InformationCart from '../../components/InformationCard'; 

interface IHomeProps {
  sessionStore?: SessionStore;
  accountStore?: AccountStore;
  notificationStore: NotificationStore;
  authenticationStore?: AuthenticationStore;
}

interface IHomeState { }



@inject(Stores.NotificationStore)
@inject(Stores.AuthenticationStore, Stores.SessionStore, Stores.AccountStore)
@observer
export class Home extends React.Component<IHomeProps, IHomeState> {


  getNotifications = async () => {
    await this.props.notificationStore.getAll({
      userId: '3',
      userNotificationState: 0
    });
  }


  componentDidMount = async () => {
    await this.getNotifications()
    // setTimeout(() => {
    //   if (this.props.notificationStore.notifications !== undefined) {

    //     // console.log(this.props.notificationStore.notifications)
    //   //   this.props.notificationStore.notifications.items.map(x =>
    //   // console.log(x.notification.data.properties.detail)
    //   //   )
    //   }
    // }, 5000);
  }

  render() {

    // const { notifications } = this.props.notificationStore;

    return (
      <Row gutter={16}>

        <Col
          xs={{ span: 10, offset: 0 }}
          sm={{ span: 10, offset: 0 }}
          md={{ span: 10, offset: 0 }}
          lg={{ span: 10, offset: 0 }}
          xl={{ span: 10, offset: 0 }}
          xxl={{ span: 10, offset: 0 }}>
          <Card hoverable>
            <InformationCart />
          </Card>
        </Col>

        <Col
          xs={{ span: 14, offset: 0 }}
          sm={{ span: 14, offset: 0 }}
          md={{ span: 14, offset: 0 }}
          lg={{ span: 14, offset: 0 }}
          xl={{ span: 14, offset: 0 }}
          xxl={{ span: 14, offset: 0 }}>
          <Card hoverable>

          </Card>
        </Col>
      </Row>
    );
  }
}
export default Home;
