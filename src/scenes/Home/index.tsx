/*eslint-disable */

import * as React from 'react';

import { Card, Col, Row } from 'antd';
//  import InformationCart from '../../components/InformationCard'
export class Home extends React.Component<any> {
  render() {
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
            {/* <InformationCart /> */}
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
