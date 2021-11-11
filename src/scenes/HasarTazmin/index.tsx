import React from 'react';
import 'antd/dist/antd.css';
import './index.less';
import AppComponentBase from '../../components/AppComponentBase';
import {
  Breadcrumb,
  Button,
  Card,
  Col,
<<<<<<< HEAD
=======

>>>>>>> a19dbbfed692d03985988ba38ef1101b61455d1d
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
  Upload
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
import { AlertOutlined, FileAddTwoTone, SendOutlined, SwitcherOutlined } from '@ant-design/icons';
import KDamageCompensationStore from '../../stores/kDamageCompensationStore';
//import { GetCariListDamage } from '../../services/kDamageCompensations/dto/getCariListDamage';
import { Label } from 'recharts';
//import { getSubeList } from '../../services/kDamageCompensations/dto/getSubeList';
//import uuid from 'react-uuid';


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
  cariList: any;
  gonderiUnvanInput: string;
  aliciUnvanInput: string;
  subeList: any;
  birimList: any;
  bolgeList:any;
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
<<<<<<< HEAD
    Ktno: 999,
    cariList: [],
    gonderiUnvanInput: '',
    aliciUnvanInput: '',
    subeList: [],
    birimList: [],
    bolgeList:[]
=======
    Ktno: 0,


>>>>>>> a19dbbfed692d03985988ba38ef1101b61455d1d
  };

  getdamage = async (id: number) => {
    try {
      await this.props.kDamageCompensationStore
        .getDamageComppensation({ id: id })
        .then((response) => {

<<<<<<< HEAD
=======
          setTimeout(() => {
            this.formRef.current?.setFieldsValue({
              ...this.props.kDamageCompensationStore.getCreateDamageInput,
            });
          }, 500)
>>>>>>> a19dbbfed692d03985988ba38ef1101b61455d1d

        }).catch((err) => console.log(err));
    } catch (e) {
      console.log(e);
    }
  };


  getcarilistdamageCompensation = async (id: number) => {
    try {
      await this.props.kDamageCompensationStore
        .getCariListDamageComppensation({ id: id })
    } catch (e) {
      console.log(e);
    }
  };


  //sube listesi
  getsubelistdamageCompensation = async () => {
    try {
      await this.props.kDamageCompensationStore.getSubeListDamageComppensation();
    } catch (e) {
      console.log(e);
    }
  };

    //Bolge listesi
    getbolgelistdamageCompensation = async () => {
      try {
        await this.props.kDamageCompensationStore.getBolgeListDamageComppensation();
      } catch (e) {
        console.log(e);
      }
    };


  //Birim listesi
  getbirimlistdamageCompensation = async () => {
    try {
      await this.props.kDamageCompensationStore.getBirimListDamageComppensation();
    } catch (e) {
      console.log(e);
    }
  };



  async componentDidMount() {
    await this.getsubelistdamageCompensation();
    await this.getbirimlistdamageCompensation();
    await this.getbolgelistdamageCompensation();
  }





  public render() {
    const { Option } = Select;
    const { TabPane } = Tabs
<<<<<<< HEAD
=======
    //bugunün tarihi
    const today = Date.now();
    const test = new Intl.DateTimeFormat('tr-TR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(today);
>>>>>>> a19dbbfed692d03985988ba38ef1101b61455d1d


    const onChangeRadio = (e) => {
      let changeRadio = e.target.value;
      this.setState({ setradioValue: changeRadio })
      if (changeRadio === 1) {
        this.setState({ setformreadonly: true });
        this.setState({ setformselectdisable: true });
        this.setState({ setsorgulama: true });
        this.setState({ settazminmusteriGonderici: false });
        this.setState({ settazminmusteriAlici: false });
        this.setState({ settazminmusteriFarkli: false });
        this.formRef?.current?.resetFields();
      } else {
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
<<<<<<< HEAD
=======

>>>>>>> a19dbbfed692d03985988ba38ef1101b61455d1d
    };


    const onSearch = (val) => {
      if (val.length > 3) {
        this.getcarilistdamageCompensation(val)
        this.setState({
          cariList: this.props.kDamageCompensationStore.getCariListDamage !== undefined && this.props.kDamageCompensationStore.getCariListDamage.map((value, index) =>
            <Option key={'cari' + value.kodu} value={value.kodu}> {value.unvan} </Option>
          )
        })
      }
    }



    const onChangeGondericiSelect = (res) => {

      this.setState({ gonderiUnvanInput: res })
      setTimeout(() => { console.log(this.state.gonderiUnvanInput) }, 100)

    }
    
    const onChangeAliciSelect = (res) => {

      this.setState({ aliciUnvanInput: res })
      setTimeout(() => { console.log(this.state.aliciUnvanInput) }, 100)
    }








    //onDropdownVisibleChangeCikis cikis selectin tıklandıgında
    const onDropdownVisibleChangeCikis = () => {

      this.setState({
        subeList: this.props.kDamageCompensationStore.getSubeListDamage !== undefined && this.props.kDamageCompensationStore.getSubeListDamage.map((value, index) =>
          <Option key={value.objId+'-'+index} value={value.objId+'-'+index}> {value.adi} </Option>
        )
      })

    }


    //onDropdownVisibleChangeVaris varis selectin tıklandıgında
const onDropdownVisibleChangeVaris=()=>{
  this.setState({
   subeList: this.props.kDamageCompensationStore.getSubeListDamage !== undefined && this.props.kDamageCompensationStore.getSubeListDamage.map((value, index) =>
      <Option  key={value.objId+'-'+index} value={value.objId+'-'+index}> {value.adi} </Option>
      )
   })
  }


    //onDropdownVisibleChangeBrim birim selectin tıklandıgında
     const onDropdownVisibleChangeBirim=()=>{
      this.setState({
        birimList: this.props.kDamageCompensationStore.getBirimListDamage !== undefined && this.props.kDamageCompensationStore.getBirimListDamage.map((value, index) =>
          <Option  key={value.objId+'-'+index} value={value.objId+'-'+index}> {value.adi} </Option>
         )
      })
      }


      
    //onDropdownVisibleChangeBolge ödeme bolge selectin tıklandıgında
     const onDropdownVisibleChangeBolge=()=>{
      this.setState({
        bolgeList: this.props.kDamageCompensationStore.getBolgeListDamage !== undefined && this.props.kDamageCompensationStore.getBolgeListDamage.map((value, index) =>
          <Option  key={value.objId+'-'+index} value={value.objId+'-'+index}> {value.adi} </Option>
         )
      })
      }













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
              // type="card"
              tabPosition="top"
              size="large"
            >
              <TabPane
                tab={
                  <span>
                    <SwitcherOutlined />
                    Tanzim Bilgileri
                  </span>
                }
                key="1"
              >
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
<<<<<<< HEAD
                      <Form.Item label="Kargo Takip No" name='kargotakipNoRadio'>
=======
                      <Form.Item label="Kargo Takip No">
>>>>>>> a19dbbfed692d03985988ba38ef1101b61455d1d

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
                          onSearch={onSearch}
                          onChange={onChangeGondericiSelect}
                        >
                          {
                            this.state.cariList
                          }
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        rules={rules.gonderenUnvan}
                        name="gonderenUnvan"
                        label={<label style={{ maxWidth: 150, minWidth: 150 }}>Gönderici</label>}
                      >
                        <Label>
                          {this.state.gonderiUnvanInput}
                        </Label>
                        <Input
                          className="formInput"
                          placeholder="Gönderici"
                          value={this.state.gonderiUnvanInput}
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
                          placeholder="Seçiniz"
                          allowClear
                          showSearch
                          disabled={this.state.setformselectdisable}
                          // options={options}
                          onSearch={onSearch}
                          onChange={onChangeAliciSelect}
                        >

                          {this.state.cariList}

                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        rules={rules.aliciUnvan}
                        name="aliciUnvan"
                        label={<label style={{ maxWidth: 150, minWidth: 150 }}>Alıcı</label>}
                      >
                        <Label>{this.state.aliciUnvanInput}</Label>
                        <Input
                          readOnly
                          className="formInput"
                          placeholder="Alıcı"
                          value={this.state.aliciUnvanInput}
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
                        disabled={this.state.setformselectdisable}
                        onDropdownVisibleChange={onDropdownVisibleChangeCikis}
                        placeholder="Seçiniz"
                        allowClear
                        showSearch
                        >
                          {
                            this.state.subeList

                          }
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
                          onDropdownVisibleChange={onDropdownVisibleChangeVaris}

                        >

                          {
                            this.state.subeList

                          }

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
                          onDropdownVisibleChange={onDropdownVisibleChangeBirim}

                        >
                          {this.state.birimList}



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
                        <Input className="formInput" readOnly />
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

                      {this.state.settazminmusteriGonderici ? <GonderenCariSelect  kDamageCompensationStore={this.props.kDamageCompensationStore}/> : ''}
                      {this.state.settazminmusteriAlici ? <AliciCariSelect  kDamageCompensationStore={this.props.kDamageCompensationStore} /> : ''}
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
                        <Select className="formInput" showSearch placeholder="Seçiniz" allowClear
                        onDropdownVisibleChange={onDropdownVisibleChangeBolge}>
                          {this.state.bolgeList}
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
