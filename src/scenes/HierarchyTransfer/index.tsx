/* eslint-disable */
import React from 'react';
import Row from 'antd/lib/row';
import { Link } from 'react-router-dom';
import { L } from '../../lib/abpUtility';
import { inject, observer } from 'mobx-react';
import Stores from '../../stores/storeIdentifier';
import { Col, Card, PageHeader, Breadcrumb } from 'antd';
import KHierarchyStore from '../../stores/kHierarchyStore';
import HiearchyTransfer from './components/HiearchyTransfer';
import HiearchySortable from './components/HiearchySortable';
import AppComponentBase from '../../components/AppComponentBase';

export interface IProps {
  kHierarchyStore: KHierarchyStore;
}

export interface IState {
  nodes: []
}

@inject(Stores.KHierarchyStore)
@observer

class Transfer extends AppComponentBase<IProps, IState> {


  setSeletedItems(value) {

    this.setState({
      nodes: value
    })
  }

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
                setSeletedItems={this.setSeletedItems}
                kHierarchyStore={this.props.kHierarchyStore}
                sourceTitle={L('Positions')}
                targetTitle={L('SelectedPositions')}
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
              <HiearchySortable nodes={this.state.nodes} />
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
export default Transfer;
