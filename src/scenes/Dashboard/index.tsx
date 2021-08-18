/*eslint-disable */
import './index.less';
import * as React from 'react';
import { Row, Col, Card } from 'antd';
import { inject, observer } from 'mobx-react';
import KNormStore from '../../stores/kNormStore';
import Stores from '../../stores/storeIdentifier';
import KCartList from '../../components/KCartList';
import { isGranted, L } from '../../lib/abpUtility';
import AccountStore from '../../stores/accountStore';
import SessionStore from '../../stores/sessionStore';
import KPersonelStore from '../../stores/kPersonelStore';
import KSubeNormStore from '../../stores/kSubeNormStore';
import LineChartExample from './components/LineChartExample';
import KNormDetailStore from '../../stores/kNormDetailStore';
import KLineChartModel from '../../models/KLineChart/kLineChart';
import AuthenticationStore from '../../stores/authenticationStore';
import { GetAllKNormOutput } from '../../services/kNorm/dto/getAllKNormOutput';


export interface IDashboardProps {
  kNormStore: KNormStore;
  sessionStore?: SessionStore;
  accountStore?: AccountStore;
  kPersonelStore: KPersonelStore;
  kSubeNormStore: KSubeNormStore;
  kNormDetailStore: KNormDetailStore;
  authenticationStore?: AuthenticationStore;
}


export interface IBolgeState {
  totalFill: KLineChartModel[];
  totalUpdate: KLineChartModel[];
  cardLoading: boolean;
  lineFillLoading: boolean;
  lineUpdateLoading: boolean;
  barChartLoading: boolean;
  pieChartLoading: boolean;

}

@inject(Stores.KNormStore)
@inject(Stores.KPersonelStore)
@inject(Stores.KSubeNormStore)
@inject(Stores.KNormDetailStore)
@inject(Stores.AuthenticationStore, Stores.SessionStore, Stores.AccountStore)
@observer
export class Dashboard extends React.Component<IDashboardProps, IBolgeState> {

  state = {
    totalFill: [] as KLineChartModel[],
    totalUpdate: [] as KLineChartModel[],
    cardLoading: true,
    lineFillLoading: true,
    lineUpdateLoading: true,
    barChartLoading: true,
    pieChartLoading: true
  }



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
      bolgeId: '0',
      type: ''
    });

    await this.props.kNormStore.getMaxAllCount({
      maxResultCount: 100000,
      skipCount: 0,
      keyword: '',
      id: '0',
      bolgeId: '0',
      type: ''
    });
    // await this.lineChartModel(this.props.kNormStore.getTotalNormFillingRequest);
  }

  async componentDidMount() {

    setTimeout(() => this.setState({ cardLoading: false }), 1000);
    setTimeout(() => this.setState({ barChartLoading: false }), 2000);
    setTimeout(() => this.setState({ pieChartLoading: false }), 1000);

    if (
      isGranted('knorm.gettotalnormfillingrequest') ||
      isGranted('knorm.getpendingnormfillrequest') ||
      isGranted('knorm.getacceptednormfillrequest') ||
      isGranted('knorm.getcancelednormfillrequest') ||
      isGranted('knorm.gettotalnormupdaterequest') ||
      isGranted('knorm.getpendingnormupdaterequest') ||
      isGranted('knorm.getacceptednormupdaterequest') ||
      isGranted('knorm.getcancelednormupdaterequest')) {
      await this.getNormRequests();
    }

    await this.getEmployeeCount();
    await this.getNormCount();
    let resultFill = await this.lineChartModel(this.props.kNormStore.getTotalNormFillingRequest);
    let resultUpdate = await this.lineChartModel(this.props.kNormStore.getTotalNormUpdateRequest);



    this.setState({ totalFill: resultFill, lineFillLoading: false })
    this.setState({ totalUpdate: resultUpdate, lineUpdateLoading: false })
  }

  parseDate(input) {
    var parts = input.match(/(\d+)/g);
    return new Date(parts[0], parts[1] - 1, parts[2]);
  }




  lineChartModel = async (data: GetAllKNormOutput[]): Promise<KLineChartModel[]> => {

    if (data === undefined) [];

    let date = new Date();
    let currentDate = new Date(date.getFullYear(), date.getMonth(), date.getDate())

    var week = new Array();

    currentDate.setDate((currentDate.getDate() - currentDate.getDay() + 1));

    for (var i = 0; i < 7; i++) {
      week.push(
        new Date(currentDate)
      );
      currentDate.setDate(currentDate.getDate() + 1);
    }

    let result = data.filter((item: GetAllKNormOutput) =>
      this.parseDate(item.creationTime).getTime() >= week[0].getTime() &&
      this.parseDate(item.creationTime).getTime() <= week[week.length - 1].getTime()
    );

    let retVal = result.reduce((result, currentValue) => {
      (result[currentValue['normStatusValue']] = result[currentValue['normStatusValue']] || [])
        .push(
          currentValue
        );
      return result;
    }, {});

    let iptalWeek1 = 0;
    let iptalWeek2 = 0;
    let iptalWeek3 = 0;
    let iptalWeek4 = 0;
    let iptalWeek5 = 0;
    let iptalWeek6 = 0;
    let iptalWeek7 = 0;
    let iptal = retVal['Iptal'] as GetAllKNormOutput[];
    if (iptal !== undefined) {

      iptalWeek1 = iptal.filter(x => this.parseDate(x.creationTime).getDate() === week[0].getDate()).length
      iptalWeek2 = iptal.filter(x => this.parseDate(x.creationTime).getDate() === week[1].getDate()).length
      iptalWeek3 = iptal.filter(x => this.parseDate(x.creationTime).getDate() === week[2].getDate()).length
      iptalWeek4 = iptal.filter(x => this.parseDate(x.creationTime).getDate() === week[3].getDate()).length
      iptalWeek5 = iptal.filter(x => this.parseDate(x.creationTime).getDate() === week[4].getDate()).length
      iptalWeek6 = iptal.filter(x => this.parseDate(x.creationTime).getDate() === week[5].getDate()).length
      iptalWeek7 = iptal.filter(x => this.parseDate(x.creationTime).getDate() === week[6].getDate()).length
    }




    let onaylandi = retVal['Onaylandi'] as GetAllKNormOutput[];
    let onaylandiWeek1 = 0;
    let onaylandiWeek2 = 0;
    let onaylandiWeek3 = 0;
    let onaylandiWeek4 = 0;
    let onaylandiWeek5 = 0;
    let onaylandiWeek6 = 0;
    let onaylandiWeek7 = 0;

    if (onaylandi !== undefined) {
      onaylandiWeek1 = onaylandi.filter(x => this.parseDate(x.creationTime).getDate() === week[0].getDate()).length
      onaylandiWeek2 = onaylandi.filter(x => this.parseDate(x.creationTime).getDate() === week[1].getDate()).length
      onaylandiWeek3 = onaylandi.filter(x => this.parseDate(x.creationTime).getDate() === week[2].getDate()).length
      onaylandiWeek4 = onaylandi.filter(x => this.parseDate(x.creationTime).getDate() === week[3].getDate()).length
      onaylandiWeek5 = onaylandi.filter(x => this.parseDate(x.creationTime).getDate() === week[4].getDate()).length
      onaylandiWeek6 = onaylandi.filter(x => this.parseDate(x.creationTime).getDate() === week[5].getDate()).length
      onaylandiWeek7 = onaylandi.filter(x => this.parseDate(x.creationTime).getDate() === week[6].getDate()).length
    }


    let beklemede = retVal['Beklemede'] as GetAllKNormOutput[];
    let beklemedeWeek1 = 0;
    let beklemedeWeek2 = 0;
    let beklemedeWeek3 = 0;
    let beklemedeWeek4 = 0;
    let beklemedeWeek5 = 0;
    let beklemedeWeek6 = 0;
    let beklemedeWeek7 = 0;

    if (beklemede !== undefined) {

      beklemedeWeek1 = beklemede.filter(x => this.parseDate(x.creationTime).getDate() === week[0].getDate()).length
      beklemedeWeek2 = beklemede.filter(x => this.parseDate(x.creationTime).getDate() === week[1].getDate()).length
      beklemedeWeek3 = beklemede.filter(x => this.parseDate(x.creationTime).getDate() === week[2].getDate()).length
      beklemedeWeek4 = beklemede.filter(x => this.parseDate(x.creationTime).getDate() === week[3].getDate()).length
      beklemedeWeek5 = beklemede.filter(x => this.parseDate(x.creationTime).getDate() === week[4].getDate()).length
      beklemedeWeek6 = beklemede.filter(x => this.parseDate(x.creationTime).getDate() === week[5].getDate()).length
      beklemedeWeek7 = beklemede.filter(x => this.parseDate(x.creationTime).getDate() === week[6].getDate()).length
    }


    let toplamWeek1 = 0;
    let toplamWeek2 = 0;
    let toplamWeek3 = 0;
    let toplamWeek4 = 0;
    let toplamWeek5 = 0;
    let toplamWeek6 = 0;
    let toplamWeek7 = 0;

    if (beklemede !== undefined) {
      toplamWeek1 = data.filter(x => this.parseDate(x.creationTime).getDate() === week[0].getDate()).length
      toplamWeek2 = data.filter(x => this.parseDate(x.creationTime).getDate() === week[1].getDate()).length
      toplamWeek3 = data.filter(x => this.parseDate(x.creationTime).getDate() === week[2].getDate()).length
      toplamWeek4 = data.filter(x => this.parseDate(x.creationTime).getDate() === week[3].getDate()).length
      toplamWeek5 = data.filter(x => this.parseDate(x.creationTime).getDate() === week[4].getDate()).length
      toplamWeek6 = data.filter(x => this.parseDate(x.creationTime).getDate() === week[5].getDate()).length
      toplamWeek7 = data.filter(x => this.parseDate(x.creationTime).getDate() === week[6].getDate()).length
    }

    const model: KLineChartModel[] = [
      { name: L('Monday'), talep: toplamWeek1, bekleyen: beklemedeWeek1, amt: 0, onaylanan: onaylandiWeek1, iptal: iptalWeek1 },
      { name: L('Tuesday'), talep: toplamWeek2, bekleyen: beklemedeWeek2, amt: 0, onaylanan: onaylandiWeek2, iptal: iptalWeek2 },
      { name: L('Wednesday'), talep: toplamWeek3, bekleyen: beklemedeWeek3, amt: 0, onaylanan: onaylandiWeek3, iptal: iptalWeek3 },
      { name: L('Thursday'), talep: toplamWeek4, bekleyen: beklemedeWeek4, amt: 0, onaylanan: onaylandiWeek4, iptal: iptalWeek4 },
      { name: L('Friday'), talep: toplamWeek5, bekleyen: beklemedeWeek5, amt: 0, onaylanan: onaylandiWeek5, iptal: iptalWeek5 },
      { name: L('Saturday'), talep: toplamWeek6, bekleyen: beklemedeWeek6, amt: 0, onaylanan: onaylandiWeek6, iptal: iptalWeek6 },
      { name: L('Sunday'), talep: toplamWeek7, bekleyen: beklemedeWeek7, amt: 0, onaylanan: onaylandiWeek7, iptal: iptalWeek7 }
    ]

    return model;
  }

  addDays(days: number): Date {
    var futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + days);
    return futureDate;
  }

  render() {

    const { cardLoading, lineFillLoading, lineUpdateLoading } = this.state;
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

    // const data: KLineChartModel[] = [
    //   { name: 'Pazartesi', talep: 1000, bekleyen: 2000, amt: 0, onaylanan: 4000, iptal: 5000 },
    //   { name: 'Salı', talep: 2000, bekleyen: 2000, amt: 0, onaylanan: 4000, iptal: 5000 },
    //   { name: 'Çarşamba', talep: 3000, bekleyen: 2000, amt: 0, onaylanan: 4000, iptal: 5000 },
    //   { name: 'Perşembe', talep: 1000, bekleyen: 2000, amt: 0, onaylanan: 4000, iptal: 5000 },
    //   { name: 'Cuma', talep: 2000, bekleyen: 2000, amt: 0, onaylanan: 4000, iptal: 5000 },
    //   { name: 'Cumartesi', talep: 3000, bekleyen: 2000, amt: 0, onaylanan: 4000, iptal: 5000 },
    //   { name: 'Pazar', talep: 1000, bekleyen: 2000, amt: 0, onaylanan: 4000, iptal: 5000 }
    // ];


    return (
      <React.Fragment>

        <KCartList
          type={""}
          subeObjId={0}
          normCount={normCount}
          cardLoading={cardLoading}
          kPersonelCount={kPersonelCount}
          kNormStore={this.props.kNormStore}
          kNormDetailStore={this.props.kNormDetailStore}
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
            <Card hoverable className={'dashboardBox'} title={L('TotalNormFillingRequestWeeklyStatistics')} loading={lineFillLoading} bordered={false}>
              <LineChartExample data={this.state.totalFill} />
            </Card>
          </Col>

          <Col span={12}>
            <Card hoverable className={'dashboardBox'} title={L('TotalNormUpdateRequestWeeklyStatistics')} loading={lineUpdateLoading} bordered={false}>
              <LineChartExample data={this.state.totalUpdate} />
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
