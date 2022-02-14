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
} from 'antd';
import { FormInstance } from 'antd/lib/form';
import { SearchOutlined, SettingOutlined } from '@ant-design/icons';
import { L } from '../../lib/abpUtility';
import 'moment/locale/tr';
import locale from 'antd/es/date-picker/locale/tr_TR';

const { Option } = Select;
export interface Props {}

export interface State {
  modalVisible: boolean;
  maxResultCount: number;
  skipCount: number;
  filter: string;
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

function onChange(date, dateString) {
  console.log(date, dateString);
}

const dateFormat = 'DD.MM.YYYY';

class RequestForPromotionFilter extends AppComponentBase<Props, State> {
  formRef = React.createRef<FormInstance>();
  public render() {
    //Sayfada oluşacak olan tablonun kolon isimlerini belirtir.
    const columns = [
      {
        title: L('promotion.filter.table.registrationnumber'),
        dataIndex: 'headerText',
        key: 'headerText',
        width: 100,
        render: (text: string) => <div>{text}</div>,
      },
      {
        title: L('promotion.filter.table.firstname'),
        dataIndex: 'descriptionText',
        key: 'descriptionText',
        width: 100,
        render: (text: string) => <div>{text}</div>,
      },
      {
        title: L('promotion.filter.table.lastname'),
        dataIndex: 'buttonOneText',
        key: 'buttonOneText',
        width: 150,
        render: (text: string) => <div>{text}</div>,
      },
      {
        title: L('promotion.filter.table.title'),
        dataIndex: 'buttonTwoText',
        key: 'buttonTwoText',
        width: 200,
        render: (text: string) => <div>{text}</div>,
      },
      {
        title: L('promotion.filter.table.promationrequest'),
        dataIndex: 'headerText',
        key: 'headerText',
        width: 200,
        render: (text: string) => <div>{text}</div>,
      },
      {
        title: L('promotion.filter.table.requestdate'),
        dataIndex: 'headerText',
        key: 'headerText',
        width: 100,
        render: (text: string) => <div>{text}</div>,
      },
      {
        title: L('promotion.filter.table.statu'),
        dataIndex: 'headerText',
        key: 'headerText',
        width: 150,
        render: (text: string) => <div>{text}</div>,
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
                  <Menu.Item>{L('Edit')}</Menu.Item>
                  <Menu.Item></Menu.Item>
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
        <Form initialValues={{ remember: false }}>
          <Row>
            <Col span={12}>
              <Form.Item
                name="durum"
                label={
                  <label style={{ maxWidth: 160, minWidth: 70 }}>
                    {L('promotion.filter.table.statu')}
                  </label>
                }
              >
                <Select style={{ width: 180 }} placeholder={L('Choose')} onChange={handleChange}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
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
                    {L('promotion.filter.table.title')}
                  </label>
                }
              >
                <Select style={{ width: 180 }}  placeholder={L('Choose')} onChange={handleChange}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
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
                    {L('promotion.filter.table.promationrequest')}
                  </label>
                }
              >
                <Select style={{ width: 180 }}  placeholder={L('Choose')} onChange={handleChange}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
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
                name="taleptarihi"
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
            <Col span={4}>
              <Space style={{ width: '100%' }}>
                <Button type="primary" icon={<SearchOutlined />}>
                  {L('promotion.filter.button')}
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
                pageSize: 10,

                defaultCurrent: 1,
              }}
            />
          </Col>
        </Row>
      </Card>
    );
  }
}
export default RequestForPromotionFilter;
