/*eslint-disable*/

import * as React from 'react';
import AppComponentBase from '../../components/AppComponentBase';
import ApprovalHierarchy from './components/approvalHierarchy';
import { isGranted, L } from '../../lib/abpUtility';
import { FormInstance } from 'antd/lib/form';
import {
  Breadcrumb,
  Button,
  Card,
  Col,
  Divider,
  Form,
  Input,
  PageHeader,
  Row,
  Select,
  Space,
} from 'antd';
import { Link } from 'react-router-dom';
import { CheckOutlined, CloseOutlined, SendOutlined } from '@ant-design/icons';
import KPersonelStore from '../../stores/kPersonelStore';
import Stores from '../../stores/storeIdentifier';
import { inject, observer } from 'mobx-react';
import QueueAnim from 'rc-queue-anim';
import './index.less';

export interface Props {
  kPersonelStore: KPersonelStore;
}

export interface State {
  id: string;
  locationId: number;
  modalVisible: boolean;
  maxResultCount: number;
  skipCount: number;
  filter: string;
  isLoading: boolean;
  personelDivideVisible: boolean;
}

const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}



function onChange2(value) {
  console.log(`selected ${value}`);
}

function onSearch2(val) {
  console.log('search:', val);
}

@inject(Stores.KPersonelStore)
@observer
class RequestForPromotion extends AppComponentBase<Props, State> {
  formRef = React.createRef<FormInstance>();

  state = {
    id: '',
    modalVisible: false,
    maxResultCount: 10,
    skipCount: 0,
    filter: '',
    locationId: 0,
    isLoading: true,
    personelDivideVisible: false,
  };

  Modal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible,
    });
  };

  componentDidMount() {
    this.setState({ locationId: this.props['match'].params['id'] });
    this.getAllEmployeesForGroupBy();
  }

  getAllEmployeesForGroupBy = async () => {
    await this.props.kPersonelStore
      .getAllEmployees({
        maxResultCount: 10000,
        skipCount: 0,
        keyword: '',
        id: this.state.id,
      })
      .then(() => {
        this.setState({ isLoading: false });
      });
  };

  getEmployeeDetail = async (id: number) => {
    await this.props.kPersonelStore.getByObjId(id);
    setTimeout(() => {
      this.formRef.current?.setFieldsValue({ ...this.props.kPersonelStore.kPersonel });
    }, 100);
  };

  handleCreate = async () => {
    // const form = this.formRef.current;
  };

  async createOrUpdateModalOpen() {
    this.Modal();
  }

  public render() {
    const { kAllPersonels } = this.props.kPersonelStore;

    const onChangePersonel = (value) => {
      this.getEmployeeDetail(value);
      this.setState({
        personelDivideVisible: true,
      });
    };

    const onSearchPersonel = (value)=>{

    }

    return !this.state.isLoading === true ? (
      <>
        <Card style={{ marginBottom: 20 }}>
          <PageHeader
            ghost={false}
            onBack={() => window.history.back()}
            title={
              <Breadcrumb>
                <Breadcrumb.Item>
                  {isGranted('items.dashboard.view') ? (
                    <Link to="/dashboard">{L('Dashboard')}</Link>
                  ) : (
                    <Link to="/home">{L('Dashboard')}</Link>
                  )}{' '}
                </Breadcrumb.Item>
                <Breadcrumb.Item> {L('pages.home')} </Breadcrumb.Item>
              </Breadcrumb>
            }
          ></PageHeader>
        </Card>

        <Card>
          <Divider orientation="left">{L('promotion.request.header')}</Divider>

          <Form ref={this.formRef}>
            {this.state.locationId != undefined ? (
              <Row>
                <Col span={12}>
                  <Form.Item
                    name="gonderenKodu"
                    label={
                      <label style={{ maxWidth: 160, minWidth: 160 }}>
                        {L('promotion.request.personel')}
                      </label>
                    }
                  >
                    <Select
                      showSearch
                      disabled
                      placeholder={L('Choose')}
                      optionFilterProp="children"
                      onChange={onChange}
                      onSearch={onSearch2}
                      filterOption={(input, option) =>
                        option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      <Option value="lucy">Lucy</Option>
                      <Option value="tom">Tom</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
            ) : (
              <Row>
                <Col span={12}>
                  <Form.Item
                    name="gonderenKodu"
                    label={
                      <label style={{ maxWidth: 160, minWidth: 160 }}>
                        {L('promotion.request.personel')}
                      </label>
                    }
                  >
                    <Form.Item>
                      {' '}
                      <Select
                        showSearch
                        placeholder={L('Choose')}
                        optionFilterProp="children"
                        onChange={onChangePersonel}
                        onSearch={onSearchPersonel}
                        filterOption={(input, option) =>
                          option?.children.toString().toLowerCase().indexOf(input.toLowerCase()) >=
                            0 ||
                          option?.props.value
                            .toString()
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        {kAllPersonels !== undefined
                          ? kAllPersonels.items.map((item) => (
                              <Option value={item.objId}>
                                {item.ad} {item.soyad}
                              </Option>
                            ))
                          : ''}
                      </Select>
                    </Form.Item>
                  </Form.Item>
                </Col>
              </Row>
            )}

            {this.state.personelDivideVisible === true ? (
              <>
                {' '}
                <QueueAnim delay={300} className="queue-simple">
                  <div key="personel-info">
                    <Divider orientation="left">Personel Bilgileri</Divider>
                    <Row>
                      <Col span={12}>
                        <Form.Item
                          name="sicilNo"
                          label={
                            <label style={{ maxWidth: 160, minWidth: 160 }}>
                              {' '}
                              {L('promotion.request.personel.registrationnumber')}
                            </label>
                          }
                        >
                          <Input
                            type="text"
                            disabled
                            className="formInput"
                            placeholder={L('promotion.request.personel.registrationnumber')}
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={12}>
                        <Form.Item
                          name="gorevi"
                          label={
                            <label style={{ maxWidth: 160, minWidth: 160 }}>
                              {L('promotion.request.personel.title')}
                            </label>
                          }
                        >
                          <Input
                            disabled
                            className="formInput"
                            placeholder={L('promotion.request.personel.title')}
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={12}>
                        <Form.Item
                          name="iseBaslamaTarihi"
                          label={
                            <label style={{ maxWidth: 160, minWidth: 160 }}>
                              {L('promotion.request.personel.dateofstart')}
                            </label>
                          }
                        >
                          <Input
                            disabled
                            className="formInput"
                            placeholder={L('promotion.request.personel.dateofstart')}
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={12}>
                        <Form.Item
                          name="sonTerfiTarihi"
                          label={
                            <label style={{ maxWidth: 160, minWidth: 160 }}>
                              {L('promotion.request.personel.lastpromotindate')}
                            </label>
                          }
                        >
                          <Input
                            disabled
                            className="formInput"
                            placeholder={L('promotion.request.personel.lastpromotindate')}
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={12}>
                        <Form.Item
                          name="ogrenimDurumu"
                          label={
                            <label style={{ maxWidth: 160, minWidth: 160 }}>
                              {L('promotion.request.personel.educationlevel')}
                            </label>
                          }
                        >
                          <Input
                            disabled
                            className="formInput"
                            placeholder={L('promotion.request.personel.educationlevel')}
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={12}>
                        <Form.Item
                          name="askerlikDurumu"
                          label={
                            <label style={{ maxWidth: 160, minWidth: 160 }}>
                              {L('promotion.request.personel.militarystatus')}
                            </label>
                          }
                        >
                          <Input
                            disabled
                            className="formInput"
                            placeholder={L('promotion.request.personel.militarystatus')}
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                  </div>
                </QueueAnim>
              </>
            ) : (
              ''
            )}

            <Divider orientation="left">{L('promotion.request.promotion.information')}</Divider>

            {this.state.locationId !== undefined ? (
              <>
                <Row>
                  <Col span={12}>
                    <Form.Item
                      name="gonderenKodu"
                      label={
                        <label style={{ maxWidth: 160, minWidth: 160 }}>
                          {L('promotion.request.promotion.title')}
                        </label>
                      }
                    >
                      <Select
                        disabled
                        showSearch
                        placeholder={L('Choose')}
                        optionFilterProp="children"
                        onChange={onChange2}
                        onSearch={onSearch2}
                        filterOption={(input, option) =>
                          option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <Form.Item
                      name="personelRegistirationNumber"
                      label={
                        <label style={{ maxWidth: 160, minWidth: 160 }}>
                          {L('promotion.request.promotion.description')}
                        </label>
                      }
                    >
                      <Input.TextArea disabled />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <Form.Item
                      name="personelRegistirationNumber"
                      label={
                        <label style={{ maxWidth: 160, minWidth: 160 }}>
                          {L('promotion.request.promotion.unit')}
                        </label>
                      }
                    >
                      <Input disabled />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <Form.Item
                      name="personelRegistirationNumber"
                      label={
                        <label style={{ maxWidth: 160, minWidth: 160 }}>
                          {L('promotion.request.promotion.department')}
                        </label>
                      }
                    >
                      <Input disabled />
                    </Form.Item>
                  </Col>
                </Row>
              </>
            ) : (
              <>
                <Row>
                  <Col span={12}>
                    <Form.Item
                      name="gonderenKodu2"
                      label={
                        <label style={{ maxWidth: 160, minWidth: 160 }}>
                          {L('promotion.request.promotion.title')}
                        </label>
                      }
                    >
                      <Select
                        showSearch
                        placeholder={L('Choose')}
                        optionFilterProp="children"
                        onChange={onChange2}
                        onSearch={onSearch2}
                        filterOption={(input, option) =>
                          option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <Form.Item
                      name="personelRegistirationNumber"
                      label={
                        <label style={{ maxWidth: 160, minWidth: 160 }}>
                          {L('promotion.request.promotion.description')}
                        </label>
                      }
                    >
                      <Input.TextArea />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <Form.Item
                      name="personelRegistirationNumber"
                      label={
                        <label style={{ maxWidth: 160, minWidth: 160 }}>
                          {L('promotion.request.promotion.unit')}
                        </label>
                      }
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <Form.Item
                      name="personelRegistirationNumber"
                      label={
                        <label style={{ maxWidth: 160, minWidth: 160 }}>
                          {L('promotion.request.promotion.department')}
                        </label>
                      }
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
              </>
            )}

            {this.state.locationId != undefined ? (
              <Row style={{ float: 'right' }}>
                <Col span={6}>
                  <Space style={{ width: '100%' }}>
                    <Button
                      type="primary"
                      icon={<CheckOutlined />}
                      onClick={() => this.createOrUpdateModalOpen()}
                      style={{ background: 'green' }}
                    >
                      {L('promotion.request.header.information.approvedbutton')}
                    </Button>
                    <Button
                      type="primary"
                      icon={<CloseOutlined />}
                      onClick={() => this.createOrUpdateModalOpen()}
                      style={{ background: 'red' }}
                    >
                      {L('promotion.request.header.information.rejectbutton')}
                    </Button>
                  </Space>
                </Col>
              </Row>
            ) : (
              <Row style={{ float: 'right' }}>
                <Col span={12}>
                  <Space style={{ width: '100%' }}>
                    <Button
                      type="primary"
                      icon={<SendOutlined />}
                      onClick={() => this.createOrUpdateModalOpen()}
                    >
                      {L('Save')}
                    </Button>
                  </Space>
                </Col>
              </Row>
            )}
          </Form>
          <ApprovalHierarchy
            visible={this.state.modalVisible}
            modalType="View"
            onCancel={() => {
              this.setState({
                modalVisible: false,
              });
              this.formRef.current?.resetFields();
            }}
          ></ApprovalHierarchy>
        </Card>
      </>
    ) : (
      ''
    );
  }
}
export default RequestForPromotion;
