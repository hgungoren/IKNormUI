import './index.less';
import React from 'react';
import 'moment/locale/tr';
import { Link } from 'react-router-dom';
import { L } from '../../../lib/abpUtility';
import { inject, observer } from 'mobx-react';
import Stores from '../../../stores/storeIdentifier';
import { EntityDto } from '../../../services/dto/entityDto';
import AppComponentBase from '../../../components/AppComponentBase';
import KDamageCompensationStore from '../../../stores/kDamageCompensationStore';
import { FilterOutlined, OrderedListOutlined, SettingOutlined } from '@ant-design/icons';
import {
  Breadcrumb,
  Button,
  Card,
  Col,
  Divider,
  Dropdown,
  Form,
  FormInstance,
  Input,
  Menu, 
  PageHeader,
  Radio,
  Row,
  Space,
  Table,
  Tag,
} from 'antd';
import { GetAllDamageCompensation } from '../../../services/kDamageCompensations/dto/GetAllDamageCompensation';

export interface IProps {
  kDamageCompensationStore: KDamageCompensationStore;
}

export interface IState {
  listdata: GetAllDamageCompensation[];
  modalVisible: boolean;
  tazminid: number;
}

@inject(Stores.KDamageCompensationStore)
@observer
class DamageCompensationList extends AppComponentBase<IProps, IState> {
  formRef = React.createRef<FormInstance>();
  formReffilter = React.createRef<FormInstance>();

  state = {
    listdata: this.props.kDamageCompensationStore.getAllDamageCompensationStoreClass,
    modalVisible: false,
    tazminid: 0,
  };

  //tazmin listesi
  getalldamagecompensaation = async () => {
    try {
      await this.props.kDamageCompensationStore.StoregetAllDamageCompansation();
      this.setState({
        listdata: this.props.kDamageCompensationStore.getAllDamageCompensationStoreClass,
      });
    } catch (e) {
      console.log(e);
    }
  };

  //tazmin listesi Filtre
  getFilterdamagecompensaation = async () => {
    const form = this.formReffilter.current;
    form!.validateFields().then(async (values: any) => {
      console.log('values=>', values);

      if (values.start === undefined) {
        values.start = '';
      }
      if (values.finish === undefined) {
        values.finish = '';
      }

      let tazminno = false;
      let tazminid = false;
      if (values.raidocheck === 2) {
        tazminno = true;
      }
      if (values.raidocheck === 1) {
        tazminid = true;
      }

      if (values.searchtxt == undefined) {
        values.searchtxt = '';
      }

      await this.props.kDamageCompensationStore.StoregetFilterDamageCompansation(
        tazminno,
        tazminid,
        values.searchtxt,
        values.start,
        values.finish
      );
      this.setState({
        listdata: this.props.kDamageCompensationStore.getAllDamageCompensationStoreClass,
      });
      form!.resetFields();
    });
  };

  //tazmin tüm listesi Filtre
  getFilterdamagecompensaationAll = async () => {
    const form = this.formReffilter.current;
    form!.validateFields().then(async (values: any) => {
      values.start = '';
      values.finish = '';

      let tazminno = false;
      let tazminid = false;
      values.searchtxt = '';

      await this.props.kDamageCompensationStore.StoregetFilterDamageCompansation(
        tazminno,
        tazminid,
        values.searchtxt,
        values.start,
        values.finish
      );
      this.setState({
        listdata: this.props.kDamageCompensationStore.getAllDamageCompensationStoreClass,
      });
      form!.resetFields();
    });
  };

  async componentDidMount() {
    await this.getalldamagecompensaation();
  }

  Modal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible,
    });
  };

  async UpdateModalOpen(entityDto: EntityDto) {
    console.log('entityDto.id=>', entityDto.id);

    this.setState({ tazminid: entityDto.id });
    this.Modal();

    setTimeout(() => {
      this.formRef.current?.setFieldsValue({
        ...this.props.kDamageCompensationStore.getCreateDamageInput,
      });
    }, 100);
  }

  public render() {
    const { getAllDamageCompensationStoreClass } = this.props.kDamageCompensationStore;
    const columns = [
      {
        title: 'Tazmin No',
        dataIndex: 'tazminNo',
        key: 'tazminNo',
        sorter: (a, b) => a.tazminNo - b.tazminNo,
      },

      {
        title: 'Takip No',
        dataIndex: 'takipNo',
        key: 'takipNo',
        sorter: (a, b) => a.takipNo - b.takipNo,
      },
      {
        title: 'Tazmin Tipi',
        dataIndex: 'tazminTipi',
        key: 'tazminTipi',
        filters: [
          { text: 'Hasar', value: 'Hasar' },
          { text: 'Kayıp', value: 'Kayıp' },
          { text: 'Geç Teslimat', value: 'Geç Teslimat' },
          { text: 'Müşteri Memnuniyeti', value: 'Müşteri Memnuniyeti' },
        ],
        onFilter: (value, record) => record.tazminTipi.includes(value),
        ellipsis: true,
      },

      {
        title: 'Tazmin Statüsü',
        dataIndex: 'tazminStatusu',
        key: 'tazminStatusu',
        render: (text: string) =>
          text === 'Taslak' ? (
            <Tag color="#2db7f5">Taslak</Tag>
          ) : text == 'TazminEksikEvrak' ? (
            <Tag color="red">Tazmin Eksik Evrak</Tag>
          ) : text == 'TazminOlusturuldu' ? (
            <Tag color="green">Tazmin Olusturuldu</Tag>
          ) : text == 'BolgeIslemde' ? (
            <Tag color="orange">Bolge Islemde</Tag>
          ) : text == 'OperasyonBolgeMudurYardımcısıOnayında' ? (
            <Tag color="blue">Operasyon Bolge Mudur Yardımcısı Onayında</Tag>
          ) : text == 'BolgeMuduruOnayında' ? (
            <Tag color="gold">Bolge Muduru Onayında</Tag>
          ) : text == 'OperasyonGMYOnayında' ? (
            <Tag color="purple">Operasyon GMY Onayında</Tag>
          ) : text == 'GmSatisMuduruOnayında' ? (
            <Tag color="red">Gm Satis Muduru Onayında</Tag>
          ) : text == 'GmMusteriIliskileriMuduruOnayında' ? (
            <Tag color="processing">Gm MusteriIliskileri Muduru Onayında</Tag>
          ) : text == 'SatisGMYOnayında' ? (
            <Tag color="cyan">Satis GMY Onayında</Tag>
          ) : (
            <Tag color="yellow">Bilinmiyor</Tag>
          ),
      },
      {
        title: 'Tazmin Tarihi',
        dataIndex: 'tazminTarihi',
        key: 'tazminTarihi',
      },
      {
        title: 'Süreç Sahibi Bölge',
        dataIndex: 'surecSahibiBolge',
        key: 'surecSahibiBolge',
        filters: [
          { text: 'Konya Bölge Md.', value: 'Konya Bölge Md.' },
          { text: 'Erzurum Bölge Md.', value: 'Erzurum Bölge Md.' },
          { text: 'Antalya Bölge Md.', value: 'Antalya Bölge Md.' },
          { text: 'Eskişehir Bölge Md.', value: 'Eskişehir Bölge Md.' },
          { text: 'Bursa Bölge Md.', value: 'Bursa Bölge Md.' },
          { text: 'Batı Karadeniz Bölge Md.', value: 'Batı Karadeniz Bölge Md.' },
          { text: 'Kayseri Bölge Md.', value: 'Kayseri Bölge Md.' },
          { text: 'Denizli Bölge Md.', value: 'Denizli Bölge Md.' },
          { text: 'İst. Surdışı Bölge Md.', value: 'İst. Surdışı Bölge Md.' },
          { text: 'Trakya Bölge Md.', value: 'Trakya Bölge Md.' },
          { text: 'İst. Boğaziçi Bölge Md.', value: 'İst. Boğaziçi Bölge Md.' },
          { text: 'İzmir Bölge Md.', value: 'İzmir Bölge Md.' },
          { text: 'Ankara Bölge Md.', value: 'Ankara Bölge Md.' },
          { text: 'Karadeniz Bölge Md.', value: 'Karadeniz Bölge Md.' },
          { text: 'Gaziantep Bölge Md.', value: 'Gaziantep Bölge Md.' },
          { text: 'Diyarbakır Bölge Md.', value: 'Diyarbakır Bölge Md.' },
          { text: 'Çukurova Bölge Md.', value: 'Çukurova Bölge Md.' },
          { text: 'İst. Anadolu (1) Bölge Md.', value: 'İst. Anadolu (1) Bölge Md.' },
          { text: 'İst. Anadolu (2) Bölge Md.', value: 'İst. Anadolu (2) Bölge Md.' },
          { text: 'Merkez', value: 'Merkez' },
        ],
        onFilter: (value, record) => record.surecSahibiBolge.includes(value),
        ellipsis: true,
      },

      {
        title: 'Ekleyen Kullanıcı',
        dataIndex: 'eklyenKullanici',
        key: 'eklyenKullanici',
      },

      {
        title: 'İşlemler',
        key: 'islemler',
        render: (text: string, item: any) => (
          <div>
            {console.log('item=>', item)}
            <Dropdown
              trigger={['click']}
              overlay={
                <Menu>
                  <Menu.Item>
                    <Link to={{ pathname: `/damageupdate/${item.tazminNo}` }}>Düzenle</Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to={{ pathname: `/damageevalutaion/${item.tazminNo}` }}>Değerlendir</Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to={{ pathname: `/damageconmpensationview/${item.tazminNo}` }}>
                      Görüntüle
                    </Link>
                  </Menu.Item>
                </Menu>
              }
              placement="bottomLeft"
            >
              <Button type="primary" icon={<SettingOutlined />}>
                İşlemler
              </Button>
            </Dropdown>
          </div>
        ),
      },
    ];

    return (
      <>
        <React.Fragment>
          <Space direction="vertical">
            {/* <Card hoverable>
              <Row>
                <Col
                  xs={{ span: 6, offset: 0 }}
                  sm={{ span: 6, offset: 0 }}
                  md={{ span: 6, offset: 0 }}
                  lg={{ span: 4, offset: 0 }}
                  xl={{ span: 4, offset: 0 }}
                  xxl={{ span: 4, offset: 0 }}
                ></Col>
              </Row>
            </Card> */}

            <Card hoverable>
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
                      )}
                    </Breadcrumb.Item>
                    <Breadcrumb.Item> {L('DamageCompensation')} </Breadcrumb.Item>
                    <Breadcrumb.Item>Hasar Tazmin Listesi </Breadcrumb.Item>
                  </Breadcrumb>
                }
              ></PageHeader>
            </Card>

            <Card hoverable title={L('DamageCompensationFilterCardHeader')}>
              <Form ref={this.formReffilter} initialValues={{ remember: false }}>
                <Row gutter={[16, 16]}>
                  <Col
                    xs={{ span: 6, offset: 0 }}
                    sm={{ span: 6, offset: 0 }}
                    md={{ span: 6, offset: 0 }}
                    lg={{ span: 6, offset: 0 }}
                    xl={{ span: 6, offset: 0 }}
                    xxl={{ span: 6, offset: 0 }}
                  >
                    <Form.Item label={<label>Seçim</label>} name="raidocheck">
                      <Radio.Group>
                        <Space direction="horizontal">
                          <Radio value={1}>Tazmin No</Radio>
                          <Radio value={2}>Takip No</Radio>
                        </Space>
                      </Radio.Group>
                    </Form.Item>

                    <Form.Item
                      label={<label>Arama</label>}
                      rules={[
                        {
                          pattern: /^(?:\d*)$/,
                          message: 'Sadece sayısal değerler girilebilir',
                        },
                      ]}
                      name="searchtxt"
                    >
                      <Input className="formInput" />
                    </Form.Item>
                  </Col>

                  <Col
                    xs={{ span: 18, offset: 0 }}
                    sm={{ span: 18, offset: 0 }}
                    md={{ span: 18, offset: 0 }}
                    lg={{ span: 18, offset: 0 }}
                    xl={{ span: 18, offset: 0 }}
                    xxl={{ span: 18, offset: 0 }}
                  >
                    <Row>
                      <Col
                        xs={{ span: 6, offset: 0 }}
                        sm={{ span: 6, offset: 0 }}
                        md={{ span: 6, offset: 0 }}
                        lg={{ span: 6, offset: 0 }}
                        xl={{ span: 6, offset: 0 }}
                        xxl={{ span: 6, offset: 0 }}
                      >
                        <Form.Item name="start" label={<label>Başlangıç Tarihi</label>}>
                          <Input type="date" className="formInput" style={{ float: 'left' }} />
                        </Form.Item>
                      </Col>
                      <Col
                        xs={{ span: 6, offset: 0 }}
                        sm={{ span: 6, offset: 0 }}
                        md={{ span: 6, offset: 0 }}
                        lg={{ span: 6, offset: 0 }}
                        xl={{ span: 6, offset: 0 }}
                        xxl={{ span: 6, offset: 0 }}
                      >
                        <Form.Item name="finish" label={<label>Bitiş Tarihi</label>}>
                          <Input type="date" className="formInput" style={{ float: 'left' }} />
                        </Form.Item>
                      </Col>
                      <Col
                        xs={{ span: 24, offset: 0 }}
                        sm={{ span: 24, offset: 0 }}
                        md={{ span: 24, offset: 0 }}
                        lg={{ span: 24, offset: 0 }}
                        xl={{ span: 24, offset: 0 }}
                        xxl={{ span: 24, offset: 0 }}
                      >
                        <Button
                          type="primary"
                          icon={<FilterOutlined />}
                          onClick={this.getFilterdamagecompensaation}
                          htmlType="submit"
                        >
                          Filtrele
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Divider />
                <Row>
                  <Col
                    xs={{ span: 24, offset: 0 }}
                    sm={{ span: 24, offset: 0 }}
                    md={{ span: 24, offset: 0 }}
                    lg={{ span: 24, offset: 0 }}
                    xl={{ span: 24, offset: 0 }}
                    xxl={{ span: 24, offset: 0 }}
                  >
                    <Button
                      style={{ float: 'right' }}
                      type="primary"
                      icon={<OrderedListOutlined />}
                      onClick={this.getFilterdamagecompensaation}
                      htmlType="submit"
                    >
                      Tüm Liste
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card>

            <Card hoverable title={L('DamageCompensationCardHeader')}>
              <Table
                loading={getAllDamageCompensationStoreClass === undefined ? true : false}
                columns={columns}
                dataSource={getAllDamageCompensationStoreClass}
                locale={{ emptyText: L('NoData'), sortTitle: 'test' }}
              />
            </Card>
          </Space>
        </React.Fragment>
      </>
    );
  }
}

export default DamageCompensationList;
