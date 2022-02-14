/*eslint-disable*/
import * as React from 'react';
import AppComponentBase from '../../components/AppComponentBase';
import { Button, Card, Col, Row, Table, Select, Form, DatePicker, Space } from 'antd';
import { FormInstance } from 'antd/lib/form';
import { SearchOutlined } from '@ant-design/icons';
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

class RequestForPromotionReport extends AppComponentBase<Props, State> {
  formRef = React.createRef<FormInstance>();
  public render() {
    //Sayfada oluşacak olan tablonun kolon isimlerini belirtir.
    const columns = [
      {
        title: L('promotion.report.table.registrationnumber'),
        dataIndex: 'headerText',
        key: 'headerText',
        width: 100,
        render: (text: string) => <div>{text}</div>,
      },
      {
        title: L('promotion.report.table.firstname'),
        dataIndex: 'descriptionText',
        key: 'descriptionText',
        width: 100,
        render: (text: string) => <div>{text}</div>,
      },
      {
        title: L('promotion.report.table.lastname'),
        dataIndex: 'buttonOneText',
        key: 'buttonOneText',
        width: 150,
        render: (text: string) => <div>{text}</div>,
      },
      {
        title: L('promotion.report.table.unit'),
        dataIndex: 'buttonOneText',
        key: 'buttonOneText',
        width: 150,
        render: (text: string) => <div>{text}</div>,
      },
      {
        title: L('promotion.report.table.title'),
        dataIndex: 'buttonTwoText',
        key: 'buttonTwoText',
        width: 200,
        render: (text: string) => <div>{text}</div>,
      },
      {
        title: L('promotion.report.table.promationrequest'),
        dataIndex: 'headerText',
        key: 'headerText',
        width: 200,
        render: (text: string) => <div>{text}</div>,
      },
      {
        title: L('promotion.report.table.requestdate'),
        dataIndex: 'headerText',
        key: 'headerText',
        width: 100,
        render: (text: string) => <div>{text}</div>,
      },
      {
        title: L('promotion.report.table.statu'),
        dataIndex: 'headerText',
        key: 'headerText',
        width: 150,
        render: (text: string) => <div>{text}</div>,
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
                label={<label style={{ maxWidth: 160, minWidth: 70 }}>{L('promotion.report.statu')}</label>}
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
                label={<label style={{ maxWidth: 160, minWidth: 70 }}>{L('promotion.report.title')}</label>}
              >
                <Select style={{ width: 180 }} placeholder={L('Choose')}onChange={handleChange}>
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
                label={<label style={{ maxWidth: 160, minWidth: 70 }}>{L('promotion.report.promationrequest')}</label>}
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
                name="birim"
                label={<label style={{ maxWidth: 160, minWidth: 70 }}>{L('promotion.report.unit')}</label>}
              >
                <Select style={{ width: 180 }} placeholder={L('Choose')} onChange={handleChange}>
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
                label={<label style={{ maxWidth: 160, minWidth: 70 }}>{L('promotion.report.requestdate')}</label>}
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
                label={<label style={{ maxWidth: 160, minWidth: 70 }}>{L('promotion.report.requestdate')}</label>}
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
export default RequestForPromotionReport;
