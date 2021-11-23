/* eslint-disable */
import { Col, Card } from 'antd';
import Row from 'antd/lib/row';
import React from 'react';
import AppComponentBase from '../../components/AppComponentBase';
import HiearchyTransfer from './components/HiearchyTransfer';
import HiearchySortable from './components/HiearchySortable';
 
export interface Props {
    sayi: number;
}
 
export interface State {
    sayi: number;
}

class Transfer extends AppComponentBase<Props, State> {
    render() {
        return (
            < React.Fragment>
                <Row gutter={[16, 16]}>
                    <Col
                        xs={{ span: 12, offset: 0 }}
                        sm={{ span: 12, offset: 0 }}
                        md={{ span: 12, offset: 0 }}
                        lg={{ span: 12, offset: 0 }}
                        xl={{ span: 12, offset: 0 }}
                        xxl={{ span: 12, offset: 0 }}
                    >
                        <Card hoverable>
                            <HiearchyTransfer />
                        </Card>
                    </Col> 
                    <Col
                        xs={{ span: 12, offset: 0 }}
                        sm={{ span: 12, offset: 0 }}
                        md={{ span: 12, offset: 0 }}
                        lg={{ span: 12, offset: 0 }}
                        xl={{ span: 12, offset: 0 }}
                        xxl={{ span: 12, offset: 0 }}
                    >
                        <Card hoverable>
                            <HiearchySortable />
                        </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}
export default Transfer;