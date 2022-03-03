/*eslint-disable*/
import * as React from 'react';
import AppComponentBase from '../../components/AppComponentBase';
import {
  Button,
  Card,
  Col,
  Dropdown,
  Menu,
  Row,
  Table,
  Select,
  Form,
  DatePicker,
  Space,
  Tag,
} from 'antd';
import { FormInstance } from 'antd/lib/form';
import { ReloadOutlined, SearchOutlined, SettingOutlined } from '@ant-design/icons';
import { L } from '../../lib/abpUtility';
import 'moment/locale/tr';
import locale from 'antd/es/date-picker/locale/tr_TR';
import SessionStore from '../../stores/sessionStore';
import { inject, observer } from 'mobx-react';
import Stores from '../../stores/storeIdentifier';
import InkaStore from '../../stores/inkaStore';
import UserStore from '../../stores/userStore';
import PromotionStore from '../../stores/promotionStore';

const { Option } = Select;
export interface Props {
  sessionStore: SessionStore;
  inkaStore: InkaStore;
  userStore: UserStore;
  promotionStore: PromotionStore;
}

export interface State {
  modalVisible: boolean;
  maxResultCount: number;
  skipCount: number;
  filter: string;
  departmentObjId: string;
  unitObjId: string;
}

function onChange(date, dateString) {
  console.log(date, dateString);
}

const dateFormat = 'DD.MM.YYYY';

@inject(Stores.SessionStore)
@inject(Stores.InkaStore)
@inject(Stores.UserStore)
@inject(Stores.PromotionStore)
@observer
class RequestForPromotionFilter extends AppComponentBase<Props, State> {
  formRef = React.createRef<FormInstance>();

  state = {
    modalVisible: false,
    maxResultCount: 10,
    skipCount: 0,
    filter: '',
    unitObjId: '0',
    departmentObjId: '0',
  };
  
  componentDidMount = async () => {
    this.props.sessionStore && (await this.props.sessionStore.getCurrentLoginInformations());
    await this.getInkaPersonelByTcNo(await this.props.sessionStore.currentLogin.user.tcKimlikNo);
    await this.props.userStore.get({ id: this.props.sessionStore.currentLogin.user.id });
    await this.getAllPromotionFilter();
    await this.getAllStatus();
    await this.getAllTitles();
  };

  getInkaPersonelByTcNo = async (tcNo: string) => {
    if (this.props.inkaStore !== undefined) {
      await this.props.inkaStore.getInkaEmployeeByTcNo(tcNo).then(() => {
        this.setState({
          unitObjId: this.props.inkaStore.inkaUser && this.props.inkaStore.inkaUser.birimObjId,
          departmentObjId:
            this.props.inkaStore.inkaUser && this.props.inkaStore.inkaUser.departmanObjId,
        });
      });
    }
  };

  getAllPromotionFilter = async () => {
    this.formRef.current?.resetFields();
    if ((await this.props.userStore.editUser.roleNames.includes('DEPARTMENTMANAGER')) === true) {
      this.props.promotionStore.getIKPromotionFilterByDepartment(this.state.departmentObjId);
      this.props.promotionStore.getIKPromotionFilterByDepartmentCount(this.state.departmentObjId);
    } else if ((await this.props.userStore.editUser.roleNames.includes('UNITMANAGER')) === true) {
      this.props.promotionStore.getIKPromotionFilterByUnit(this.state.unitObjId);
      this.props.promotionStore.getIKPromotionFilterByUnitCount(this.state.unitObjId);
    }
  };

  handleFilter = async () => {
    const form = this.formRef.current;
    form!.validateFields().then(async (values: any) => {
      await this.props.promotionStore.filterPromotionData({
        statu: values.durum !== undefined ? values.durum : undefined,
        title: values.title !== undefined ? values.title : undefined,
        promotionRequestTitle:
          values.promationRequest !== undefined ? values.promationRequest : undefined,
        firstRequestDate:
          values.firstRequestDate !== undefined ? values.firstRequestDate : undefined,
        secondRequestDate:
          values.secondRequestDate !== undefined ? values.secondRequestDate : undefined,
      });
    });
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

  public render() {
    function converToShortDate(dateString) {
      const shortDate = new Date(dateString).toLocaleDateString('tr-TR');
      return shortDate;
    }

    const handleChangeStatu = async (value: string) => {};
    const handleChangeTitle = async (value: string) => {
      await this.getAllRequestTitle(value);
    };
    const onSearchTitle = (value) => {};
    const handleChangeRequestTitle = async (value: string) => {};
    const onSearchRequestTitle = (value) => {};
    const {
      filterPromotion,
      filterPromotionCount,
      promotionStatus,
      promotionTitles,
      promotionRequestTitles,
    } = this.props.promotionStore;
    //Sayfada oluşacak olan tablonun kolon isimlerini belirtir.
    const columns = [
      {
        title: L('promotion.filter.table.registrationnumber'),
        dataIndex: 'registrationNumber',
        key: 'registrationNumber',
        width: 100,
        render: (text: string) => <div>{text}</div>,
      },
      {
        title: L('promotion.filter.table.firstname'),
        dataIndex: 'firstName',
        key: 'firstName',
        width: 100,
        render: (text: string) => <div>{text}</div>,
      },
      {
        title: L('promotion.filter.table.lastname'),
        dataIndex: 'lastName',
        key: 'lastName',
        width: 150,
        render: (text: string) => <div>{text}</div>,
      },
      {
        title: L('promotion.filter.table.title'),
        dataIndex: 'title',
        key: 'title',
        width: 200,
        render: (text: string) => <div>{text}</div>,
      },
      {
        title: L('promotion.filter.table.promationrequest'),
        dataIndex: 'promotionRequestTitle',
        key: 'promotionRequestTitle',
        width: 200,
        render: (text: string) => <div>{text}</div>,
      },
      {
        title: L('promotion.filter.table.requestdate'),
        dataIndex: 'requestDate',
        key: 'requestDate',
        width: 100,
        render: (text: string) => <div>{converToShortDate(text)}</div>,
      },
      {
        title: L('promotion.filter.table.statu'),
        dataIndex: 'statu',
        key: 'statu',
        width: 150,
        render: (text: string, item: any) => (
          <div>
            {item.statu === 1 ? (
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
      {
        title: L('promotion.filter.table.actions'),
        width: 100,
        render: (text: string, item: any) => (
          <div>
            <Dropdown
              trigger={['click']}
              overlay={
                <Menu>
                  <Menu.Item>Değerlendir</Menu.Item>
                  <Menu.Item>Detay</Menu.Item>
                  {/* <Menu.Item onClick={() => this.createOrUpdateModalOpen({ id: item.id })}>{L('Edit')}</Menu.Item>
                  <Menu.Item onClick={() => this.delete({ id: item.id })}>{L('Delete')}</Menu.Item> */}
                </Menu>
              }
              placement="bottomLeft"
            >
              <Button type="primary" icon={<SettingOutlined />}>
                {L('promotion.filter.table.actions')}
              </Button>
            </Dropdown>
          </div>
        ),
      },
    ];

    return (
      <Card>
        <h2 style={{ width: '360px' }}>{L('FilterForPromotion')}</h2>
        <Form ref={this.formRef} initialValues={{ remember: false }}>
          <Row>
            <Col span={12}>
              <Form.Item
                name="statu"
                label={
                  <label style={{ maxWidth: 160, minWidth: 70 }}>
                    {L('promotion.filter.table.statu')}
                  </label>
                }
              >
                <Select
                  style={{ width: 180 }}
                  placeholder={L('Choose')}
                  onChange={handleChangeStatu}
                >
                  {promotionStatus !== undefined
                    ? promotionStatus.status.map((item, index) => (
                        <Option value={`${item}`} key={index}>
                          {Number(item) === 1
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
                name="title"
                label={
                  <label style={{ maxWidth: 160, minWidth: 70 }}>
                    {L('promotion.filter.table.title')}
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
                name="promationRequest"
                label={
                  <label style={{ maxWidth: 160, minWidth: 70 }}>
                    {L('promotion.filter.table.promationrequest')}
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
            <Col span={5}>
              <Form.Item
                name="firstRequestDate"
                label={
                  <label style={{ maxWidth: 160, minWidth: 70 }}>
                    {L('promotion.filter.table.requestdate')}
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
                name="secondRequestDate"
                label={
                  <label style={{ maxWidth: 160, minWidth: 70 }}>
                    {L('promotion.filter.table.requestdate')}
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
            <Col span={2}>
              <Space style={{ width: '100%' }}>
                <Button type="primary" icon={<SearchOutlined />} onClick={this.handleFilter}>
                  {L('promotion.filter.button')}
                </Button>
              </Space>
            </Col>
            <Col span={2}>
              <Space style={{ width: '100%' }}>
                <Button
                  type="primary"
                  icon={<ReloadOutlined />}
                  onClick={this.getAllPromotionFilter}
                >
                  Yenile
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
              loading={filterPromotion === undefined ? true : false}
              pagination={{
                pageSize: 5,
                total: filterPromotionCount > 0 ? filterPromotionCount : 0,
                defaultCurrent: 1,
              }}
              dataSource={filterPromotion === undefined ? [] : filterPromotion}
            />
          </Col>
        </Row>
      </Card>
    );
  }
}
export default RequestForPromotionFilter;
