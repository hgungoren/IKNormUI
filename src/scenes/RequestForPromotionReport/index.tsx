/*eslint-disable*/
import * as React from 'react';
import AppComponentBase from '../../components/AppComponentBase';
import { Button, Card, Col, Row, Table, Select, Form, DatePicker, Space, Tag } from 'antd';
import { FormInstance } from 'antd/lib/form';
import { SearchOutlined } from '@ant-design/icons';
import { L } from '../../lib/abpUtility';
import 'moment/locale/tr';
import locale from 'antd/es/date-picker/locale/tr_TR';
import PromotionStore from '../../stores/promotionStore';
import { inject, observer } from 'mobx-react';
import Stores from '../../stores/storeIdentifier';

const { Option } = Select;
export interface Props {
  promotionStore: PromotionStore;
}

export interface State {
  modalVisible: boolean;
  maxResultCount: number;
  skipCount: number;
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

function onChange(date, dateString) {
  console.log(date, dateString);
}

const dateFormat = 'DD.MM.YYYY';

@inject(Stores.PromotionStore)
@observer
class RequestForPromotionReport extends AppComponentBase<Props, State> {
  formRef = React.createRef<FormInstance>();

  state = {
    modalVisible: false,
    maxResultCount: 10000,
    skipCount: 0,
  };

  componentDidMount = async () => {
    await this.getAllStatus();
    await this.getAllTitles();
    await this.getAllUnits();
    await this.getAll();
    console.log('data =>', this.props.promotionStore.promotions);
  };

  getAllStatus = async () => {
    await this.props.promotionStore.getIKPromotionStatus();
  };

  getAllTitles = async () => {
    await this.props.promotionStore.getIKPromotionTitles();
  };

  getAllRequestTitle = async (title: string) => {
    await this.props.promotionStore.getIKPromotionRequestTitles(title);
  };

  getAllUnits = async () => {
    await this.props.promotionStore.getIKPromotionUnits();
  };

  getAll = async () => {
    await this.props.promotionStore.getAll({
      maxResultCount: this.state.maxResultCount,
      skipCount: this.state.skipCount,
      keyword: '',
    });

    // setTimeout(() => this.setState({ tableloding: false }), 500);
  };
  public render() {
    const { promotionStatus, promotionTitles, promotionRequestTitles, promotionUnits, promotions } =
      this.props.promotionStore;

    function converToShortDate(dateString) {
        const shortDate = new Date(dateString).toLocaleDateString('tr-TR');
        return shortDate;
      }

    const handleChangeTitle = async (value: string) => {
      await this.getAllRequestTitle(value);
    };
    const onSearchTitle = (value) => {};

    const handleChangeRequestTitle = async (value: string) => {};
    const onSearchRequestTitle = (value) => {};

    const handleChangeUnit = async (value: string) => {};
    const onSearchUnit = (value) => {};

    //Sayfada oluşacak olan tablonun kolon isimlerini belirtir.
    const columns = [
      {
        title: L('promotion.report.table.registrationnumber'),
        dataIndex: 'registrationNumber',
        key: 'registrationNumber',
        width: 100,
        render: (text: string) => <div>{text}</div>,
      },
      {
        title: L('promotion.report.table.firstname'),
        dataIndex: 'firstName',
        key: 'firstName',
        width: 100,
        render: (text: string) => <div>{text}</div>,
      },
      {
        title: L('promotion.report.table.lastname'),
        dataIndex: 'lastName',
        key: 'lastName',
        width: 150,
        render: (text: string) => <div>{text}</div>,
      },
      {
        title: L('promotion.report.table.unit'),
        dataIndex: 'unit',
        key: 'unit',
        width: 150,
        render: (text: string) => <div>{text}</div>,
      },
      {
        title: L('promotion.report.table.title'),
        dataIndex: 'title',
        key: 'title',
        width: 200,
        render: (text: string) => <div>{text}</div>,
      },
      {
        title: L('promotion.report.table.promationrequest'),
        dataIndex: 'promotionRequestTitle',
        key: 'promotionRequestTitle',
        width: 200,
        render: (text: string) => <div>{text}</div>,
      },
      {
        title: L('promotion.report.table.requestdate'),
        dataIndex: 'requestDate',
        key: 'requestDate',
        width: 100,
        render: (text: string) => <div>{converToShortDate(text)}</div>,
      },
      {
        title: L('promotion.report.table.statu'),
        dataIndex: 'statu',
        key: 'statu',
        width: 150,
        render: (text: string, item: any) => (
          <div>
            {item.statu === 0 ? (
              <Tag color="warning">Onaya Gönderildi</Tag>
            ) : '' || item.statu === 1 ? (
              <Tag color="warning">Onaya Gönderildi</Tag>
            ) : '' || item.statu === 2 ? (
              <Tag color="success">Onaylandı</Tag>
            ) : '' || item.statu === 3 ? (
              <Tag color="error">Reddedildi</Tag>
            ) : (
              ''
            )}
          </div>
        ),
      },
    ];

    return (
      <Card>
        <h2 style={{ width: '360px' }}>{L('ReportForPromotion')}</h2>
        <Form initialValues={{ remember: false }}>
          <Row>
            <Col span={12}>
              <Form.Item
                name="durum"
                label={
                  <label style={{ maxWidth: 160, minWidth: 70 }}>
                    {L('promotion.report.statu')}
                  </label>
                }
              >
                <Select style={{ width: 180 }} placeholder={L('Choose')} onChange={handleChange}>
                  {promotionStatus !== undefined
                    ? promotionStatus.status.map((item, index) => (
                        <Option value={`${Number(item) === 0 ? '' : item}`} key={index}>
                          {Number(item) === 0
                            ? ''
                            : '' || Number(item) === 1
                            ? 'Onaya Gönderildi'
                            : '' || Number(item) === 2
                            ? 'Onaylandı'
                            : '' || Number(item) === 3
                            ? 'Reddedildi'
                            : ''}
                        </Option>
                      ))
                    : ''}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item
                name="gorev"
                label={
                  <label style={{ maxWidth: 160, minWidth: 70 }}>
                    {L('promotion.report.title')}
                  </label>
                }
              >
                <Select
                  showSearch
                  style={{ width: 180 }}
                  placeholder={L('Choose')}
                  onChange={handleChangeTitle}
                  onSearch={onSearchTitle}
                  filterOption={(input, option) =>
                    (option?.children &&
                      option?.children?.toString().toLowerCase().indexOf(input.toLowerCase()) >=
                        0) ||
                    option?.props.value.toString().toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {promotionTitles !== undefined
                    ? promotionTitles.titles.map((item, index) => (
                        <Option value={`${item}`} key={index}>
                          {item}
                        </Option>
                      ))
                    : ''}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item
                name="terfitalebi"
                label={
                  <label style={{ maxWidth: 160, minWidth: 70 }}>
                    {L('promotion.report.promationrequest')}
                  </label>
                }
              >
                <Select
                  showSearch
                  style={{ width: 180 }}
                  placeholder={L('Choose')}
                  onChange={handleChangeRequestTitle}
                  onSearch={onSearchRequestTitle}
                  filterOption={(input, option) =>
                    (option?.children &&
                      option?.children?.toString().toLowerCase().indexOf(input.toLowerCase()) >=
                        0) ||
                    option?.props.value.toString().toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {promotionRequestTitles !== undefined
                    ? promotionRequestTitles.promotionRequestTitles.map((item, index) => (
                        <Option value={`${item}`} key={index}>
                          {item}
                        </Option>
                      ))
                    : ''}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item
                name="birim"
                label={
                  <label style={{ maxWidth: 160, minWidth: 70 }}>
                    {L('promotion.report.unit')}
                  </label>
                }
              >
                <Select
                  showSearch
                  style={{ width: 180 }}
                  placeholder={L('Choose')}
                  onChange={handleChangeUnit}
                  onSearch={onSearchUnit}
                  filterOption={(input, option) =>
                    (option?.children &&
                      option?.children?.toString().toLowerCase().indexOf(input.toLowerCase()) >=
                        0) ||
                    option?.props.value.toString().toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {promotionUnits !== undefined
                    ? promotionUnits.unitNames.map((item, index) => (
                        <Option value={`${item}`} key={index}>
                          {item}
                        </Option>
                      ))
                    : ''}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={5}>
              <Form.Item
                name="taleptarihi"
                label={
                  <label style={{ maxWidth: 160, minWidth: 70 }}>
                    {L('promotion.report.requestdate')}
                  </label>
                }
              >
                <Space direction="vertical">
                  <DatePicker
                    style={{ width: 180 }}
                    onChange={onChange}
                    format={dateFormat}
                    placeholder={L('Choose')}
                    locale={locale}
                  />
                </Space>
              </Form.Item>
            </Col>
            <Col span={5}>
              <Form.Item
                name="taleptarihi"
                label={
                  <label style={{ maxWidth: 160, minWidth: 70 }}>
                    {L('promotion.report.requestdate')}
                  </label>
                }
              >
                <Space direction="vertical">
                  <DatePicker
                    style={{ width: 180 }}
                    onChange={onChange}
                    format={dateFormat}
                    placeholder={L('Choose')}
                    locale={locale}
                  />
                </Space>
              </Form.Item>
            </Col>
            <Col span={4}>
              <Space style={{ width: '100%' }}>
                <Button type="primary" icon={<SearchOutlined />}>
                  {L('promotion.report.button')}
                </Button>
              </Space>
            </Col>
          </Row>
        </Form>
        <Row>
          <Col
            xs={{ span: 4, offset: 0 }}
            sm={{ span: 4, offset: 0 }}
            md={{ span: 4, offset: 0 }}
            lg={{ span: 2, offset: 0 }}
            xl={{ span: 2, offset: 0 }}
            xxl={{ span: 2, offset: 0 }}
          ></Col>
          <Col
            xs={{ span: 14, offset: 0 }}
            sm={{ span: 15, offset: 0 }}
            md={{ span: 15, offset: 0 }}
            lg={{ span: 1, offset: 21 }}
            xl={{ span: 1, offset: 21 }}
            xxl={{ span: 1, offset: 21 }}
          ></Col>
        </Row>
        <Row style={{ marginTop: 20 }}>
          <Col
            xs={{ span: 24, offset: 0 }}
            sm={{ span: 24, offset: 0 }}
            md={{ span: 24, offset: 0 }}
            lg={{ span: 24, offset: 0 }}
            xl={{ span: 24, offset: 0 }}
            xxl={{ span: 24, offset: 0 }}
          >
            <Table
              rowKey={'1'}
              bordered={true}
              columns={columns}
              pagination={{
                pageSize: 5,
                defaultCurrent: 1,
              }}
              dataSource={promotions !== undefined ? promotions.items : []}
            />
          </Col>
        </Row>
      </Card>
    );
  }
}
export default RequestForPromotionReport;
