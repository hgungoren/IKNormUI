import React from 'react';
import 'antd/dist/antd.css';
import './index.less';
import AppComponentBase from '../../components/AppComponentBase';
import {
  Breadcrumb,
  Button,
  Card,
  Col,
  
  Divider,
  Form,
  Input,
  notification,
  PageHeader,
  Radio,
  Row,
  Select,
  Space,
  Tabs,
  Upload,
} from 'antd';
import { FormInstance } from 'antd/lib/form';
import { inject, observer } from 'mobx-react';
import rules from './HasarTazmin.validation';
import { Link } from 'react-router-dom';
import { isGranted, L } from '../../lib/abpUtility';
import GonderenCariSelect from './components/GonderenCariSelect';
import AliciCariSelect from './components/AliciCariSelect';
import FarkliCari from './components/FarkliCari';
import Stores from '../../stores/storeIdentifier';
import { AlertOutlined, FileAddTwoTone, SendOutlined } from '@ant-design/icons';
import KDamageCompensationStore from '../../stores/kDamageCompensationStore';

export interface IProps {
  kDamageCompensationStore: KDamageCompensationStore;
}

export interface IState {
  setsorgulama: boolean;
  setradioValue: number;
  setformreadonly: boolean;
  setformselectdisable: boolean;
  settazminmusteriAlici: boolean;
  settazminmusteriFarkli: boolean;
  setradioValueTazminMusteri: number;
  settazminmusteriGonderici: boolean;
  Ktno: number;


}

@inject(Stores.KDamageCompensationStore)
@observer
class DamageCompensation extends AppComponentBase<IProps, IState> {
  formRef = React.createRef<FormInstance>();

  state = {
    setradioValue: 1,
    setsorgulama: true,
    setformreadonly: true,
    setformselectdisable: true,
    settazminmusteriAlici: false,
    settazminmusteriFarkli: false,
    setradioValueTazminMusteri: 4,
    settazminmusteriGonderici: false,
    Ktno: 0,
    
  
  };

  getdamage = async (id: number) => {
    try {    
      await this.props.kDamageCompensationStore
        .getDamageComppensation({ id: id })
        .then((response) => {
          
          setTimeout(()=>{
            this.formRef.current?.setFieldsValue({
              ...this.props.kDamageCompensationStore.getCreateDamageInput,
            });    
          },500)
                          
        }).catch((err) => console.log(err));
    } catch (e) {
      console.log(e);
    }
  };

  async componentDidMount() {
    //console.log('Respon=>',  await this.getdamage(12153892013889));
  }





  public render() {
    const { Option } = Select;
    const { TabPane } = Tabs    
    //bugunün tarihi
    const today = Date.now();
    const test = new Intl.DateTimeFormat('tr-TR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(today);


    const onChangeRadio = (e) => {
      let changeRadio=e.target.value;
      this.setState({setradioValue:changeRadio})     
      if(changeRadio===1){
        this.setState({ setformreadonly: true });
        this.setState({ setformselectdisable: true });
        this.setState({ setsorgulama: true });
        this.setState({ settazminmusteriGonderici: false });
        this.setState({ settazminmusteriAlici: false });
        this.setState({ settazminmusteriFarkli: false });
        this.formRef?.current?.resetFields();
      }else{
        this.setState({ setformreadonly: false });  
        this.setState({ setformselectdisable: false });
        this.setState({ setsorgulama: false });       
        this.setState({ settazminmusteriGonderici: false });
        this.setState({ settazminmusteriAlici: false });
        this.setState({ settazminmusteriFarkli: false });
        this.formRef?.current?.resetFields();
      }   
    };

    const onChangeRadioTazminMusteri = (e) => {
      this.setState({ setradioValueTazminMusteri: e.target.value });
      if (e.target.value === 0) {
        this.setState({ settazminmusteriGonderici: true });
        this.setState({ settazminmusteriAlici: false });
        this.setState({ settazminmusteriFarkli: false });
      } else if (e.target.value === 1) {
        this.setState({ settazminmusteriGonderici: false });
        this.setState({ settazminmusteriAlici: true });
        this.setState({ settazminmusteriFarkli: false });
      } else {
        console.log(this.state.setsorgulama);

        if (this.state.setsorgulama === false) {
          this.setState({ settazminmusteriGonderici: false });
          this.setState({ settazminmusteriAlici: false });
          this.setState({ settazminmusteriFarkli: true });
        } else {
          notification.open({
            icon: <AlertOutlined style={{ color: 'red' }} />,
            message: 'Uyarı',
            description:
              'Farklı cari girilmesi için kargo takip numarasının bilinmiyor olması gerekiyor.',
          });

          this.setState({ setradioValueTazminMusteri: 4 });
          this.setState({ settazminmusteriGonderici: false });
          this.setState({ settazminmusteriAlici: false });
        }
      }
    };

    const onFinish = (values: any) => {
      console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };

    //tab callback
    function callback(key) {
      console.log(key);
    }

    const handleChange = (e) => {
      this.setState({ Ktno: e.target.value });
    };

    const handleClick = (e) => {
      this.getdamage(this.state.Ktno);
    
    };



    return (
      <>
        <React.Fragment>
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
                  <Breadcrumb.Item> {L('DamageCompensation')} </Breadcrumb.Item>
                  <Breadcrumb.Item>Hasar Tazmin Formu </Breadcrumb.Item>
                </Breadcrumb>
              }
            ></PageHeader>
          </Card>

          <Card>
            <Tabs
              defaultActiveKey="1"
              onChange={callback}
              tabBarGutter={50}
              type="card"
              tabPosition="top"
              size="large"
            >
              <TabPane tab="Tanzim Bilgileri" key="1">
                <Row>
                  <Col span={24}>
                    <Form layout="inline">
                      <Form.Item
                        name="coders"
                        label={<label style={{ fontWeight: 'bold' }}>Tanzim No</label>}
                        labelCol={{ span: 10 }}
                        wrapperCol={{ span: 16 }}
                      >
                        <Input readOnly defaultValue="001"></Input>
                      </Form.Item>

                      <Form.Item
                        name="coders"
                        label={<label style={{ fontWeight: 'bold' }}>Tanzim Statüsü</label>}
                        labelCol={{ span: 10 }}
                        wrapperCol={{ span: 16 }}
                      >
                        <Input readOnly defaultValue="Yeni Tazmin"></Input>
                      </Form.Item>
                    </Form>
                  </Col>
                </Row>

                <Divider orientation="left">Sorgulama</Divider>

                <Row>
                  <Col span={12}>
                    <Form layout="inline">
                      <Form.Item label="Kargo Takip No">
                        
                        <Radio.Group onChange={onChangeRadio} value={this.state.setradioValue}>
                          <Radio value={1}>Biliniyor</Radio>
                          <Radio value={2}>Bilinmiyor</Radio>
                        </Radio.Group>
                      </Form.Item>

                      {this.state.setsorgulama ? (
                        <>
                          <Form.Item
                            label="Takip No"
                            labelCol={{ span: 10 }}
                            wrapperCol={{ span: 16 }}
                          >
                            <Input
                              placeholder="Kargo Takip Numarası"
                              name="ktno"
                              onChange={handleChange}
                            />
                          </Form.Item>
                          <Form.Item label="" labelCol={{ span: 10 }} wrapperCol={{ span: 16 }}>
                            <Button type="primary" onClick={handleClick}>
                              Getir
                            </Button>
                          </Form.Item>
                        </>
                      ) : (
                        <Form.Item
                          label="Kargo Kabul Fiş No"
                          labelCol={{ span: 15 }}
                          wrapperCol={{ span: 20 }}
                        >
                          <Input placeholder="Kargo Kabul Fiş No" />
                        </Form.Item>
                      )}
                    </Form>
                  </Col>
                </Row>

                <Divider orientation="left">Gönderi Bilgileri</Divider>

                <Form
                  ref={this.formRef}
                  initialValues={{ remember: false }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Row>
                    <Col span={12}>
                      <Form.Item
                        rules={rules.sistem_InsertTime}
                        name="sistem_InsertTime"
                        label={
                          <label style={{ maxWidth: 150, minWidth: 150 }}>
                            Evrak Oluşturma Tarihi
                          </label>
                        }
                      >
                        <Input
                           //readOnly={this.state.setformreadonly}
                          className="formInput"
                          type="date"
                        />


                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item 
                        rules={rules.evrakSeriNo}
                        name="evrakSeriNo"
                        label={
                          <label style={{ maxWidth: 150, minWidth: 150 }}>Evrak Seri Sıra No</label>
                        }
                      >
                        <Input
                          readOnly={this.state.setformreadonly}
                          className="formInput"
                          placeholder="Evrak Seri Sıra No"
                        />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row>
                    <Col span={12}>
                      <Form.Item
                        rules={rules.gonderenKodu}
                        name="gonderenKodu"
                        label={
                          <label style={{ maxWidth: 150, minWidth: 150 }}>Gönderici Kodu</label>
                        }
                      >
                        <Select
                          className="formInput"
                          showSearch
                          placeholder="Seçiniz"
                          allowClear
                          disabled={this.state.setformselectdisable}
                        >
                          <Option value="1000011">1000011</Option>
                          <Option value="1000012">1000012</Option>
                          <Option value="1000013">1000013</Option>
                          <Option value="1000014">1000014</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        rules={rules.gonderenUnvan}
                        name="gonderenUnvan"
                        label={<label style={{ maxWidth: 150, minWidth: 150 }}>Gönderici</label>}
                      >
                        <Input
                          readOnly={this.state.setformreadonly}
                          className="formInput"
                          placeholder="Gönderici"
                        />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row>
                    <Col span={12}>
                      <Form.Item
                        rules={rules.aliciKodu}
                        name="aliciKodu"
                        label={<label style={{ maxWidth: 150, minWidth: 150 }}>Alıcı Kodu</label>}
                      >
                        <Select
                          className="formInput"
                          showSearch
                          placeholder="Seçiniz"
                          allowClear
                          disabled={this.state.setformselectdisable}
                        >
                          <Option value="1000011">1000011</Option>
                          <Option value="1000012">1000012</Option>
                          <Option value="1000013">1000013</Option>
                          <Option value="1000014">1000014</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        rules={rules.aliciUnvan}
                        name="aliciUnvan"
                        label={<label style={{ maxWidth: 150, minWidth: 150 }}>Alıcı</label>}
                      >
                        <Input
                          readOnly={this.state.setformreadonly}
                          className="formInput"
                          placeholder="Alıcı"
                        />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row>
                    <Col span={12}>
                      <Form.Item
                        rules={rules.cikis_Sube_Unvan}
                        name="cikis_Sube_Unvan"
                        label={
                          <label style={{ maxWidth: 150, minWidth: 150 }}>Çıkış Şube Adı</label>
                        }
                      >
                        <Select
                          className="formInput"
                          showSearch
                          placeholder="Seçiniz"
                          allowClear
                          disabled={this.state.setformselectdisable}
                        >
                          <Option value="incirli">incirli</Option>
                          <Option value="ikitelli aktarma">ikitelli aktarma</Option>
                          <Option value="mikro bağcılar">mikro bağcılar</Option>
                          <Option value="ataşehir">ataşehir</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        rules={rules.varis_Sube_Unvan}
                        name="varis_Sube_Unvan"
                        label={
                          <label style={{ maxWidth: 150, minWidth: 150 }}>Varış Şube Adı</label>
                        }
                      >
                        <Select
                          className="formInput"
                          showSearch
                          placeholder="Seçiniz"
                          allowClear
                          disabled={this.state.setformselectdisable}
                        >
                          <Option value="incirli">incirli</Option>
                          <Option value="ikitelli aktarma">ikitelli aktarma</Option>
                          <Option value="mikro bağcılar">mikro bağcılar</Option>
                          <Option value="ataşehir">ataşehir</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row>
                    <Col span={12}>
                      <Form.Item
                        rules={rules.birimi}
                        name="birimi"
                        label={<label style={{ maxWidth: 150, minWidth: 150 }}>Kargo Tipi</label>}
                      >
                        <Select
                          className="formInput"
                          showSearch
                          placeholder="Seçiniz"
                          allowClear
                          disabled={this.state.setformselectdisable}
                        >
                          <Option value="Mi">Mi</Option>
                          <Option value="Paket">Paket</Option>
                          <Option value="Koli">Koli</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        rules={rules.adet}
                        name="adet"
                        label={<label style={{ maxWidth: 150, minWidth: 150 }}>Parça Adedi</label>}
                      >
                        <Input
                          readOnly={this.state.setformreadonly}
                          className="formInput"
                          type="number"
                          min={1}
                          max={1000}
                          placeholder="Parça Adedi"
                        />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Divider orientation="left">Tazmin Bilgileri</Divider>

                  <Row>
                    <Col span={12}>
                      <Form.Item
                        rules={rules.tazminTalepTarihi}
                        name="tazminTalepTarihi"
                        label={
                          <label style={{ maxWidth: 150, minWidth: 150 }}>
                            Tazmin Talep Tarihi
                          </label>
                        }
                      >
                        <Input className="formInput" readOnly defaultValue={test} />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        rules={rules.tazminTipi}
                        name="tazminTipi"
                        label={<label style={{ maxWidth: 150, minWidth: 150 }}>Tazmin Tipi</label>}
                      >
                        <Select className="formInput" showSearch placeholder="Seçiniz" allowClear>
                          <Option value="Hasar">Hasar</Option>
                          <Option value="Kayıp">Kayıp</Option>
                          <Option value="Geç Teslimat">Geç Teslimat</Option>
                          <Option value="Müşteri Memnuniyeti">Müşteri Memnuniyeti</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row>
                    <Col span={12}>
                      <Form.Item
                        label={
                          <label style={{ maxWidth: 150, minWidth: 150 }}>Tazmin Müşterisi</label>
                        }
                      >
                        <Radio.Group
                          onChange={onChangeRadioTazminMusteri}
                          value={this.state.setradioValueTazminMusteri}
                        >
                          <Radio value={0}>Gönderen Cari</Radio>
                          <Radio value={1}>Alıcı Cari</Radio>
                          <Radio value={2}>Farklı Cari</Radio>
                        </Radio.Group>
                      </Form.Item>

                      {this.state.settazminmusteriGonderici ? <GonderenCariSelect /> : ''}
                      {this.state.settazminmusteriAlici ? <AliciCariSelect /> : ''}
                      {this.state.settazminmusteriFarkli ? <FarkliCari /> : ''}
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        rules={rules.odemeSekli}
                        name="odemeSekli"
                        label={
                          <label style={{ maxWidth: 150, minWidth: 150 }}>
                            Ödenecek Müşteri Tipi
                          </label>
                        }
                      >
                        <Select className="formInput" showSearch placeholder="Seçiniz" allowClear>
                          <Option value="Bireysel">Bireysel</Option>
                          <Option value="Kurumsal">Kurumsal</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row>
                    <Col span={12}>
                      <Form.Item
                        rules={rules.tckno}
                        name="tckno"
                        label={<label style={{ maxWidth: 150, minWidth: 150 }}>TC Kimlik No</label>}
                      >
                        <Input className="formInput" placeholder="TC Kimlik No" />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        rules={rules.vergiKimlik}
                        name="vergiKimlik"
                        label={
                          <label style={{ maxWidth: 150, minWidth: 150 }}>Vergi Kimlik No</label>
                        }
                      >
                        <Input className="formInput" placeholder="Vergi Kimlik No" />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row>
                    <Col span={12}>
                      <Form.Item
                        rules={rules.odemeBirimiBolge}
                        name="odemeBirimiBolge"
                        label={
                          <label style={{ maxWidth: 150, minWidth: 150 }}>Ödeme Birimi/Bölge</label>
                        }
                      >
                        <Select className="formInput" showSearch placeholder="Seçiniz" allowClear>
                          <Option value="İkitelli Bölge">İkitelli Bölge</Option>
                          <Option value="Genel Müdürlük">Genel Müdürlük</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        rules={rules.talepEdilenTutar}
                        name="talepEdilenTutar"
                        tooltip="KDV TUTAR HARİÇ"
                        label={
                          <label style={{ maxWidth: 150, minWidth: 150 }}>Talep Edilen Tutar</label>
                        }
                      >
                        <Input
                          className="formInput"
                          type="number"
                          placeholder="Talep Edilen Tutar KDV Hariç"
                        />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row>
                    <Col span={12}>
                      <Form.Item
                        rules={rules.surecSahibiniBolgeyeAta}
                        name="surecSahibiniBolgeyeAta"
                        label={
                          <label style={{ maxWidth: 150, minWidth: 150 }}>
                            Süreç Sahibi Birim/Bölge
                          </label>
                        }
                      >
                        <Select className="formInput" showSearch placeholder="Seçiniz" allowClear>
                          <Option value="İkitelli Bölge">İkitelli Bölge</Option>
                          <Option value="Genel Müdürlük">Genel Müdürlük</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row>
                    <Col span={12}>
                      <Form.Item
                        name="SMS"
                        rules={rules.SMS}
                        label={
                          <label style={{ maxWidth: 150, minWidth: 150 }}>Bilgilendirme(SMS)</label>
                        }
                      >
                        <Input className="formInput" placeholder="SMS" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={12}>
                      <Form.Item
                        name="email"
                        rules={rules.email}
                        label={
                          <label style={{ maxWidth: 150, minWidth: 150 }}>
                            Bilgilendirme(Email)
                          </label>
                        }
                      >
                        <Input className="formInput" placeholder="Email" />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Divider orientation="left">Tazmin Belgeleri</Divider>

                  <Row>
                    <Col span={12}>
                      <Form.Item
                        label={<label style={{ maxWidth: 150, minWidth: 150 }}>Belgeler</label>}
                      >
                        <Upload maxCount={4} multiple listType="picture">
                          <Button icon={<FileAddTwoTone />}>Max(4)</Button>
                        </Upload>
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row>
                    <Col span={12}>
                      <Form.Item
                        label={<label style={{ maxWidth: 150, minWidth: 150 }}>Belgeler</label>}
                      >
                        <Upload maxCount={4} multiple listType="picture">
                          <Button icon={<FileAddTwoTone />}>Max(4)</Button>
                        </Upload>
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row style={{ float: 'right' }}>
                    <Col span={12}>
                      <Space style={{ width: '100%' }}>
                        <Button type="primary" icon={<SendOutlined />} htmlType="submit">
                          Onaya Gönder
                        </Button>
                      </Space>
                    </Col>
                  </Row>
                </Form>
              </TabPane>
              <TabPane tab="Değerlendirme" key="2">
                Content of Tab Pane 2
              </TabPane>
              <TabPane tab="Tarihçe" key="3">
                Content of Tab Pane 3
              </TabPane>
            </Tabs>
          </Card>
        </React.Fragment>
      </>
    );
  }
}

export default DamageCompensation;
