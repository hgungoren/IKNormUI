import './index.less';
import * as React from 'react';
import { Row, Col, Card } from 'antd';
import { L } from '../../lib/abpUtility';
import { inject, observer } from 'mobx-react';
import KNormStore from '../../stores/kNormStore';
import Stores from '../../stores/storeIdentifier';
import KCartList from '../../components/KCartList';
import AccountStore from '../../stores/accountStore';
import SessionStore from '../../stores/sessionStore';
import KPersonelStore from '../../stores/kPersonelStore';
import KSubeNormStore from '../../stores/kSubeNormStore';
import LineChartExample from './components/LineChartExample';
import KNormDetailStore from '../../stores/kNormDetailStore';
import KLineChartModel from '../../models/KLineChart/kLineChart';
import AuthenticationStore from '../../stores/authenticationStore';


export interface IDashboardProps {
  kNormStore: KNormStore;
  sessionStore?: SessionStore;
  accountStore?: AccountStore;
  kPersonelStore: KPersonelStore;
  kSubeNormStore: KSubeNormStore;
  kNormDetailStore: KNormDetailStore;
  authenticationStore?: AuthenticationStore;
}


export interface IBolgeState { }
@inject(Stores.KNormStore)
@inject(Stores.KPersonelStore)
@inject(Stores.KSubeNormStore)
@inject(Stores.KNormDetailStore)
@inject(Stores.AuthenticationStore, Stores.SessionStore, Stores.AccountStore)
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
      id: '0',
      bolgeId: '0'
    });

    await this.props.kNormStore.getMaxAllCount({
      maxResultCount: 100000,
      skipCount: 0,
      keyword: '',
      id: '0',
      bolgeId: '0'
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


  addDays(days: number): Date {
    var futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + days);
    return futureDate;
  }


  render() {

    // const { cardLoading, lineChartLoading, barChartLoading, pieChartLoading } = this.state;
    const { cardLoading, lineChartLoading } = this.state;
    const { kPersonelCount } = this.props.kPersonelStore;
    const { normCount } = this.props.kSubeNormStore;
    const {
      getTotalNormUpdateRequestCount,
      getPendingNormFillRequestCount,
      getTotalNormFillingRequestCount,
      getAcceptedNormFillRequestCount,
      getCanceledNormFillRequestCount,
      getPendingNormUpdateRequestCount,
      getAcceptedNormUpdateRequestCount,
      getCanceledNormUpdateRequestCount
    } = this.props.kNormStore;

    const data: KLineChartModel[] = [
      { name: L('Monday'), talep: 1000, bekleyen: 2000, amt: 0, onaylanan: 4000, iptal: 5000 },
      { name: L('Tuesday'), talep: 2000, bekleyen: 2000, amt: 0, onaylanan: 4000, iptal: 5000 },
      { name: L('Wednesday'), talep: 3000, bekleyen: 2000, amt: 0, onaylanan: 4000, iptal: 5000 },
      { name: L('Thursday'), talep: 1000, bekleyen: 2000, amt: 0, onaylanan: 4000, iptal: 5000 },
      { name: L('Friday'), talep: 2000, bekleyen: 2000, amt: 0, onaylanan: 4000, iptal: 5000 },
      { name: L('Saturday'), talep: 3000, bekleyen: 2000, amt: 0, onaylanan: 4000, iptal: 5000 },
      { name: L('Sunday'), talep: 1000, bekleyen: 2000, amt: 0, onaylanan: 4000, iptal: 5000 }
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
          userId={this.props.sessionStore?.currentLogin.user.id}
          getTotalNormUpdateRequestCount={getTotalNormUpdateRequestCount}
          getPendingNormFillRequestCount={getPendingNormFillRequestCount}
          getTotalNormFillingRequestCount={getTotalNormFillingRequestCount}
          getAcceptedNormFillRequestCount={getAcceptedNormFillRequestCount}
          getCanceledNormFillRequestCount={getCanceledNormFillRequestCount}
          getPendingNormUpdateRequestCount={getPendingNormUpdateRequestCount}
          getAcceptedNormUpdateRequestCount={getAcceptedNormUpdateRequestCount}
          getCanceledNormUpdateRequestCount={getCanceledNormUpdateRequestCount}

        />

        <Row gutter={16}>

          <Col span={12}>
            <Card hoverable className={'dashboardBox'} title={L('TotalNormFillingRequestWeeklyStatistics')} loading={lineChartLoading} bordered={false}>
              <LineChartExample data={data} />
            </Card>
          </Col>

          <Col span={12}>
            <Card hoverable className={'dashboardBox'} title={L('TotalNormUpdateRequestWeeklyStatistics')} loading={lineChartLoading} bordered={false}>
              <LineChartExample data={data} />
            </Card>
          </Col>

        </Row>

        {/* <Row gutter={16}>
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
        </Row> */}

        {/* <Row gutter={16}>
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
        </Row> */}
      </React.Fragment>
    );
  }
}

export default Dashboard;
