import * as React from 'react';
import { Row, Col, Card } from 'antd';
import './index.less';
import TinyLineChartExample from './components/TinyLineChartExample';
import BarChartExample from './components/BarChartExample';
import PieChartExample from './components/PieChartExample';
import LineChartExample from './components/LineChartExample';
import ListExample from './components/ListExample';
import KCart from '../../components/KCart';
import { L } from '../../lib/abpUtility';
import KPersonelStore from '../../stores/kPersonelStore';
import Stores from '../../stores/storeIdentifier';
import { inject, observer } from 'mobx-react';
import KSubeNormStore from '../../stores/kSubeNormStore'; 


export interface IDashboardProps {
  kPersonelStore: KPersonelStore;
  kSubeNormStore: KSubeNormStore;
}

export interface IBolgeState { }

@inject(Stores.KPersonelStore)
@inject(Stores.KSubeNormStore)

@observer
export class Dashboard extends React.Component<IDashboardProps, IBolgeState> {

  async getEmployeeCount() {
    await this.props.kPersonelStore.getEmployeeCount();
  }

  async getNormCount() {
    await this.props.kSubeNormStore.getNormCount();
  }


  componentDidMount() {
    setTimeout(() => this.setState({ cardLoading: false }), 1000);
    setTimeout(() => this.setState({ lineChartLoading: false }), 1500);
    setTimeout(() => this.setState({ barChartLoading: false }), 2000);
    setTimeout(() => this.setState({ pieChartLoading: false }), 1000);
    this.getEmployeeCount();
    this.getNormCount();
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


    const visitorStatisticList = [
      { title: 'TODAY', body: '1.200 user' },
      { title: 'YESTERDAY', body: '3.872 user' },
      { title: 'LAST WEEK', body: '26.582 user' },
    ];

    return (
      <React.Fragment>
        <Row gutter={16}>
          <KCart cardLoading={cardLoading} color='#00bcd4' title={L('NormCount')} icon='UsergroupAddOutlined' number={normCount} />
          <KCart cardLoading={cardLoading} color='#8884d8' title={L('EmployeeCount')} icon='UserAddOutlined' number={kPersonelCount} />
          <KCart cardLoading={cardLoading} color='#ff9800' title={L('NormIncreaseRequest')} icon='ClockCircleOutlined' number={0} />
          <KCart cardLoading={cardLoading} color='#ff9800' title={L('NormFillRequest')} icon='ClockCircleOutlined' number={0} />
          <KCart cardLoading={cardLoading} color='#cf1322' title={L('CanceledNormRequest')} icon='CloseOutlined' number={0} />
          <KCart cardLoading={cardLoading} color='#7cb305' title={L('PendingNormIncrease')} icon='PlusOutlined' number={0} />
          <KCart cardLoading={cardLoading} color='#69c0ff' title={L('AcceptedNormIncreasing')} icon='QuestionCircleOutlined' number={0} />
        </Row>

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
