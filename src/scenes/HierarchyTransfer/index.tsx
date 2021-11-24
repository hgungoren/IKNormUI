/* eslint-disable */
import { Col, Card, PageHeader, Breadcrumb } from 'antd';
import Row from 'antd/lib/row';
import React from 'react';
import AppComponentBase from '../../components/AppComponentBase';
import HiearchyTransfer from './components/HiearchyTransfer';
import HiearchySortable from './components/HiearchySortable';
import { inject, observer } from 'mobx-react';
import Stores from '../../stores/storeIdentifier';
import KHierarchyStore from '../../stores/kHierarchyStore';
import { Link } from 'react-router-dom';
import { L } from '../../lib/abpUtility';

export interface IProps {
  kHierarchyStore: KHierarchyStore;
}

export interface State {
  sayi: number;
}

@inject(Stores.KHierarchyStore)
@observer
class Transfer extends AppComponentBase<IProps, State> {
  render() {
    return (
      <React.Fragment>
        <Card style={{ marginBottom: 20 }}>
          <PageHeader
            ghost={false}
            onBack={() => window.history.back()}
            title={
              <Breadcrumb>
                <Breadcrumb.Item>
                  {this.isGranted('items.dashboard.view') ? (
                    <Link to="/dashboard">{L('Dashboard')}</Link>
                  ) : (
                    <Link to="/home">{L('Dashboard')}</Link>
                  )}{' '}
                </Breadcrumb.Item>
                <Breadcrumb.Item> {L('pages.hierarchy')} </Breadcrumb.Item>
              </Breadcrumb>
            }
          ></PageHeader>
        </Card>

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
              <HiearchyTransfer
                kHierarchyStore={this.props.kHierarchyStore}
                sourceTitle={'Pozisyonlar'}
                targetTitle={'Aktif Pozisyonlar'}
              />
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
