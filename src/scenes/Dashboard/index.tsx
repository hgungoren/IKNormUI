import './index.less';
import * as React from 'react';
import { Row, Col, Card } from 'antd';
import { L } from '../../lib/abpUtility';
import { inject, observer } from 'mobx-react';
import KNormStore from '../../stores/kNormStore';
import Stores from '../../stores/storeIdentifier';
import ListExample from './components/ListExample';
import KCartList from '../../components/KCartList';
import KPersonelStore from '../../stores/kPersonelStore';
import KSubeNormStore from '../../stores/kSubeNormStore';
import BarChartExample from './components/BarChartExample';
import PieChartExample from './components/PieChartExample';
import LineChartExample from './components/LineChartExample';
import KNormDetailStore from '../../stores/kNormDetailStore';
import TinyLineChartExample from './components/TinyLineChartExample';


export interface IDashboardProps {
  kNormStore: KNormStore;
  kPersonelStore: KPersonelStore;
  kSubeNormStore: KSubeNormStore;
  kNormDetailStore: KNormDetailStore;
}


export interface IBolgeState { }
@inject(Stores.KNormStore)
@inject(Stores.KPersonelStore)
@inject(Stores.KSubeNormStore)
@inject(Stores.KNormDetailStore)

@observer
export class Dashboard extends React.Component<IDashboardProps, IBolgeState> {

  async getEmployeeCount() {
    await this.props.kPersonelStore.getEmployeeCount();
  }

  async getNormCount() {
    await this.props.kSubeNormStore.getNormCount();
  }

  async getNormRequests() {
    await this.props.kNormStore.getMaxAll({
      maxResultCount: 100000,
      skipCount: 0,
      keyword: '',
      id: 0,
    });
  }

  async componentDidMount() {
    setTimeout(() => this.setState({ cardLoading: false }), 1000);
    setTimeout(() => this.setState({ lineChartLoading: false }), 1500);
    setTimeout(() => this.setState({ barChartLoading: false }), 2000);
    setTimeout(() => this.setState({ pieChartLoading: false }), 1000);

    await this.getEmployeeCount();
    await this.getNormCount();
    await this.getNormRequests();
  }

  state = {
    cardLoading: true,
    lineChartLoading: true,
    barChartLoading: true,
    pieChartLoading: true,
  };

  render() {
    const { cardLoading, lineChartLoading, barChartLoading, pieChartLoading } = this.state;
    const { kPersonelCount } = this.props.kPersonelStore;
    const { normCount } = this.props.kSubeNormStore;
    const {
      getTotalNormFillingRequest,
      getTotalNormUpdateRequest,
      getPendingNormFillRequest,
      getPendingNormUpdateRequest,
      getAcceptedNormFillRequest,
      getAcceptedNormUpdateRequest,
      getCanceledNormFillRequest,
      getCanceledNormUpdateRequest
    } = this.props.kNormStore;


    const visitorStatisticList = [
      { title: 'TODAY', body: '1.200 user' },
      { title: 'YESTERDAY', body: '3.872 user' },
      { title: 'LAST WEEK', body: '26.582 user' },
    ];

    return (
      <React.Fragment>
        <KCartList
          subeObjId={0}
          normCount={normCount}
          cardLoading={cardLoading}
          kPersonelCount={kPersonelCount}
          kNormStore={this.props.kNormStore}
          kNormDetailStore={this.props.kNormDetailStore}
          getTotalNormUpdateRequest={getTotalNormUpdateRequest}
          getPendingNormFillRequest={getPendingNormFillRequest}
          getTotalNormFillingRequest={getTotalNormFillingRequest}
          getAcceptedNormFillRequest={getAcceptedNormFillRequest}
          getCanceledNormFillRequest={getCanceledNormFillRequest}
          getPendingNormUpdateRequest={getPendingNormUpdateRequest}
          getAcceptedNormUpdateRequest={getAcceptedNormUpdateRequest}
          getCanceledNormUpdateRequest={getCanceledNormUpdateRequest}
        />

        <Row>
          <Col span={24}>
            <Card hoverable className={'dashboardBox'} title={L('WeeklyStatistics')} loading={lineChartLoading} bordered={false}>
              <LineChartExample />
            </Card>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col
            xs={{ offset: 1, span: 22 }}
            sm={{ offset: 1, span: 22 }}
            md={{ offset: 1, span: 22 }}
            lg={{ offset: 0, span: 8 }}
            xl={{ offset: 0, span: 8 }}
            xxl={{ offset: 0, span: 8 }}
          >
            <Card className={'dashboardCardTinyLine'} loading={barChartLoading} bordered={false}>
              <TinyLineChartExample />
              <ListExample value={visitorStatisticList} />
            </Card>
          </Col>
          <Col
            xs={{ offset: 1, span: 22 }}
            sm={{ offset: 1, span: 22 }}
            md={{ offset: 1, span: 22 }}
            lg={{ offset: 0, span: 8 }}
            xl={{ offset: 0, span: 8 }}
            xxl={{ offset: 0, span: 8 }}
          >
            <Card className={'latestSocialTrendsList'} loading={barChartLoading} bordered={false}>
              <TinyLineChartExample />
              <ListExample value={visitorStatisticList} />
            </Card>
          </Col>
          <Col
            xs={{ offset: 1, span: 22 }}
            sm={{ offset: 1, span: 22 }}
            md={{ offset: 1, span: 22 }}
            lg={{ offset: 0, span: 8 }}
            xl={{ offset: 0, span: 8 }}
            xxl={{ offset: 0, span: 8 }}
          >
            <Card className={'answeredTickeds'} loading={barChartLoading} bordered={false}>
              <TinyLineChartExample />
              <ListExample value={visitorStatisticList} />
            </Card>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={16}>
            <Card title="Payment Statistics" className={'dashboardBox'} loading={barChartLoading} bordered={false}>
              <BarChartExample />
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Browser Usage" className={'dashboardBox'} loading={pieChartLoading} bordered={false}>
              <PieChartExample />
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Dashboard;
