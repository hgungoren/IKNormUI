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
  Upload
} from 'antd';
import { FormInstance } from 'antd/lib/form';
import { inject, observer } from 'mobx-react';
import rules from './HasarTazmin.validation';
import { Link } from 'react-router-dom';
import { isGranted, L } from '../../lib/abpUtility';
// import GonderenCariSelect from './components/GonderenCariSelect';
// import AliciCariSelect from './components/AliciCariSelect';
// import FarkliCari from './components/FarkliCari';
import EditableTagGroup from './components/LinkTag';
import Stores from '../../stores/storeIdentifier';
import { AlertOutlined, SendOutlined, SwitcherOutlined, UploadOutlined } from '@ant-design/icons';
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
  cariList: any;
  gonderiUnvanInput: string;
  aliciUnvanInput: string;
  subeList: any;
  birimList: any;
  bolgeList: any;
  lastId: number;
  SurecSahibibolgeList:any;
  tagLink:string;
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
    cariList: [],
    gonderiUnvanInput: '',
    aliciUnvanInput: '',
    subeList: [],
    birimList: [],
    bolgeList: [],
    lastId: 0,
    SurecSahibibolgeList:[],
    tagLink:'cengiz'
  };

  getdamage = async (id: number) => {
    try {
      await this.props.kDamageCompensationStore
        .getDamageComppensation({ id: id })
        .then((response) => {
          setTimeout(() => {
            this.formRef.current?.setFieldsValue({
              ...this.props.kDamageCompensationStore.getCreateDamageInput,
            });
          }, 500)
          // console.log('gelenform',this.props.kDamageCompensationStore.getCreateDamageInput)
        }).catch(() => notification.open({
          icon: <AlertOutlined style={{ color: 'red' }} />,
          message: 'Uyarı',
          description:'Kayıt Bulunamadı.Takip Numarası Hatalı',
        }));
    } catch (e) {
      alert(e)
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


  //sonıd cekme 
  getlastiddamageCompensation = async () => {
    await this.props.kDamageCompensationStore.GetDamageComppensationLastId();
    this.setState({ lastId: this.props.kDamageCompensationStore.lastIdDamage })
  }



  async componentDidMount() {
    await this.getsubelistdamageCompensation();
    await this.getbirimlistdamageCompensation();
    await this.getbolgelistdamageCompensation();
    await this.getlastiddamageCompensation();

  }




  // Tanzim  için  Oluşturma Metodu
  kDamageCompensationCreate = () => {
    const form = this.formRef.current;
    form!.validateFields().then(async (values: any) => {

      await this.props.kDamageCompensationStore.create(values)
      this.openNotificationWithIcon('success')
      form!.resetFields();
      await this.getlastiddamageCompensation();


    });
  };

  openNotificationWithIcon = type => {
    notification[type]({
      message: type === "success" ? 'Tazmin Başarıyla Kaydedildi' : L('NormRejectNotificationMessageTitle'),
      description: type === "success" ? '' : L('NormCreateNotificationMessageDescription'),
      duration: 3
    });
  };



  


  public render() {
    const { Option } = Select;
    const { TabPane } = Tabs



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
     
       if(this.state.Ktno !=0 ){
        this.getdamage(this.state.Ktno);
       }else {
        notification.open({
          icon: <AlertOutlined style={{ color: 'red' }} />,
          message: 'Uyarı',
          description:
            'Takip No Numarası Giriniz.',
        });
       }



    };


    const onSearch = (val) => {
      if (val.length > 3) {
        this.getcarilistdamageCompensation(val)
        this.setState({
          cariList: this.props.kDamageCompensationStore.getCariListDamage !== undefined && this.props.kDamageCompensationStore.getCariListDamage.map((value, index) =>
            <Option key={'cari' + value.kodu} value={value.unvan}> {value.kodu} </Option>
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
          <Option key={value.objId + '-' + index} value={value.objId + '-' + index}> {value.adi} </Option>
        )
      })

    }


    //onDropdownVisibleChangeVaris varis selectin tıklandıgında
    const onDropdownVisibleChangeVaris = () => {
      this.setState({
        subeList: this.props.kDamageCompensationStore.getSubeListDamage !== undefined && this.props.kDamageCompensationStore.getSubeListDamage.map((value, index) =>
          <Option key={value.objId + '-' + index} value={value.objId + '-' + index}> {value.adi} </Option>
        )
      })
    }


    //onDropdownVisibleChangeBrim birim selectin tıklandıgında
    const onDropdownVisibleChangeBirim = () => {
      this.setState({
        birimList: this.props.kDamageCompensationStore.getBirimListDamage !== undefined && this.props.kDamageCompensationStore.getBirimListDamage.map((value, index) =>
          <Option key={value.objId + '-' + index} value={value.objId + '-' + index}> {value.adi} </Option>
        )
      })
    }



    //onDropdownVisibleChangeBolge ödeme bolge selectin tıklandıgında
    const onDropdownVisibleChangeBolge = () => {
      this.setState({
        bolgeList: this.props.kDamageCompensationStore.getBolgeListDamage !== undefined && this.props.kDamageCompensationStore.getBolgeListDamage.map((value, index) =>
          <Option key={value.objId + '-' + index} value={value.objId+ '-'+index}> {value.adi} </Option>
        )
      })
    }


    
    //onDropdownVisibleChange SurecSahibiBolge ödeme bolge selectin tıklandıgında
    const onDropdownVisibleChangeSurecSahibiBolge = () => {
      this.setState({
        SurecSahibibolgeList: this.props.kDamageCompensationStore.getBolgeListDamage !== undefined && this.props.kDamageCompensationStore.getBolgeListDamage.map((value, index) =>
          <Option key={value.objId + '-' + index} value={value.objId+ '-' + index}> {value.adi} </Option>
        )
      })
    }



    const normFile = (e: any) => {
      console.log('Upload event:', e);
    
      if (Array.isArray(e)) {
        
        return e;
      }  
      
      return e && e.fileList;
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
                         {console.log(this.state.lastId)}
                        <Input readOnly value={this.state.lastId}></Input>
                      </Form.Item>

                      <Form.Item
                        name="coders"
                        label={<label style={{ fontWeight: 'bold' }}>Tanzim Statüsü</label>}
                        labelCol={{ span: 10 }}
                        wrapperCol={{ span: 16 }}
                      >
                        <Input readOnly defaultValue="Taslak"></Input>
                      </Form.Item>
                    </Form>
                  </Col>
                </Row>

                <Divider orientation="left">Sorgulama</Divider>

                <Row>
                  <Col span={12}>
                    <Form layout="inline">

                      <Form.Item label="Kargo Takip No" name='kargotakipNoRadio'>
                        <Radio.Group onChange={onChangeRadio}   defaultValue={this.state.setradioValue}>
                          <Radio  value={1}>Biliniyor</Radio>
                          {/* <Radio value={2}>Bilinmiyor</Radio> */}
                        </Radio.Group>
                      </Form.Item>

                      {this.state.setsorgulama ? (
                        <>
                          <Form.Item                         
                            label="Takip No"
                            labelCol={{ span: 10 }}
                            wrapperCol={{ span: 16 }}
                            
                          >
                            <Input type='number'
                              id='test'
                              placeholder="Kargo Takip Numarası"
                              name="ktno"
                              onChange={handleChange}
                            />
                          </Form.Item>
                          <Form.Item label="" labelCol={{ span: 10 }} wrapperCol={{ span: 16 }}>
                            <Button type="primary" onClick={handleClick}      >
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
                    {this.state.setsorgulama ? 
                    
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
                    
                    :''}
                    


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
                      <Form.Item name="gonderenUnvan"
                        rules={rules.gonderenUnvan}
                        label={<label style={{ maxWidth: 150, minWidth: 150 }}>Gönderici</label>}
                      >
                        <Input readOnly className="formInput" placeholder="Gönderici" value={this.state.gonderiUnvanInput} />
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
                      <Form.Item name="aliciUnvan"
                        rules={rules.aliciUnvan}
                        label={<label style={{ maxWidth: 150, minWidth: 150 }}>Gönderici</label>}
                      >
                        <Input readOnly className="formInput" placeholder="Alici" value={this.state.gonderiUnvanInput} />
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

                    


                      <Form.Item  hidden  name="ilkGondericiSube_ObjId"> </Form.Item>


  


                    </Col>
                    <Col span={12}>
                    <Form.Item  hidden  name="varisSube_ObjId"> </Form.Item>
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
                    <Form.Item  hidden  name="birimi_ObjId"> </Form.Item>
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
                        rules={rules.Tazmin_Talep_Tarihi}
                        name="Tazmin_Talep_Tarihi"
                        label={
                          <label style={{ maxWidth: 150, minWidth: 150 }}>
                            Tazmin Talep Tarihi
                          </label>
                        }
                      >
                        <Input className="formInput"  type='date'  />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        rules={rules.Tazmin_Tipi}
                        name="Tazmin_Tipi"
                        label={<label style={{ maxWidth: 150, minWidth: 150 }}>Tazmin Tipi</label>}
                      >
                        <Select className="formInput" showSearch placeholder="Seçiniz" allowClear>
                          <Option value="1">Hasar</Option>
                          <Option value="2">Kayıp</Option>
                          <Option value="3" >Geç Teslimat</Option>
                          <Option value="4">Müşteri Memnuniyeti</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row>
                    <Col span={12}>
                      <Form.Item
                            rules={rules.Tazmin_Musteri_Tipi}
                            name="Tazmin_Musteri_Tipi"
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
                          {/* <Radio value={2}>Farklı Cari</Radio> */}
                        </Radio.Group>
                      </Form.Item>

                      {/* {this.state.settazminmusteriGonderici ? <GonderenCariSelect kDamageCompensationStore={this.props.kDamageCompensationStore} /> : ''}
                      {this.state.settazminmusteriAlici ? <AliciCariSelect kDamageCompensationStore={this.props.kDamageCompensationStore} /> : ''}
                      {this.state.settazminmusteriFarkli ? <FarkliCari /> : ''} */}
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        rules={rules.Odeme_Musteri_Tipi}
                        name="Odeme_Musteri_Tipi"
                        label={
                          <label style={{ maxWidth: 150, minWidth: 150 }}>
                            Ödenecek Müşteri Tipi
                          </label>
                        }
                      >
                        <Select className="formInput" showSearch placeholder="Seçiniz" allowClear>
                          <Option value="1">Bireysel</Option>
                          <Option value="2">Kurumsal</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row>
                    <Col span={12}>
                      <Form.Item
                        rules={
                                  [
                                    { required: true,            message:'Lütfen Boş Bırakmayınız!' },
                                    { pattern: /^[\d]{11,11}$/ , message:'TC no 11 karakterden az ve fazla olamaz'},
                                    { pattern: /^(?:\d*)$/ ,     message:'Sadece sayısal değerler girilebilir'}
                                  ]
                               }
                        name="TCK_NO"
                        label={<label style={{ maxWidth: 150, minWidth: 150 }}>TC Kimlik No</label>}
                      >
                        <Input className="formInput" placeholder="TC Kimlik No" />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        rules={
                          [
                            { required: true,            message:'Lütfen Boş Bırakmayınız!' },
                            { pattern: /^[\d]{11,11}$/ , message:'Vkno no 11 karakterden az ve fazla olamaz'},
                            { pattern: /^(?:\d*)$/ ,     message:'Sadece sayısal değerler girilebilir'}
                          ]
                         }
                        name="VK_NO"
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
                        rules={rules.Odeme_Birimi_Bolge}
                        name="Odeme_Birimi_Bolge"
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
                        rules={rules.Talep_Edilen_Tutar}
                        name="Talep_Edilen_Tutar"
                        label={
                          <label style={{ maxWidth: 150, minWidth: 150 }}>Talep Edilen Tutar </label>
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
                        rules={rules.Surec_Sahibi_Birim_Bolge}
                        name="Surec_Sahibi_Birim_Bolge"
                        label={
                          <label style={{ maxWidth: 150, minWidth: 150 }}>
                            Süreç Sahibi Birim/Bölge
                          </label>
                        }
                      >
                        <Select className="formInput" showSearch placeholder="Seçiniz" allowClear 
                        onDropdownVisibleChange={onDropdownVisibleChangeSurecSahibiBolge}>
                          {this.state.SurecSahibibolgeList}
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row>
                    <Col span={12}>
                      <Form.Item
                        name="Telefon"
                        rules={
                          [
                            { required: true,            message:'Lütfen Boş Bırakmayınız!' },
                            { pattern: /^[\d]{10,11}$/ ,  message:'Lütfen geçerli bir telefon numarası giriniz'},
                            { pattern: /^(?:\d*)$/ ,     message:'Sadece sayısal değerler girilebilir'}
                          ]
                         }
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
                        name="Email"
                        rules={
                          [
                            { required: true, message:'Lütfen Boş Bırakmayınız!' },
                            {  type: "email", message:'Lütfen geçerli bir Email  giriniz'}
                        
                          ]
                         }
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
                      valuePropName="fileList"
                      getValueFromEvent={normFile}
                      extra=""
                      name="SomeFile"
                      
                    >
                      <Upload name="logo" multiple maxCount={1} action="/upload.do"  listType="text">
                        <Button icon={<UploadOutlined />}>Click to upload</Button>
                      </Upload>
                    </Form.Item>


                     
                    </Col>
                  </Row>

                  <Row>
                    <Col span={12}>
                      <Form.Item
                        label={<label style={{ maxWidth: 150, minWidth: 150 }}>Link</label>}
                      > 
                        <EditableTagGroup/>
                      </Form.Item>
                      <Input  hidden defaultValue={this.state.tagLink} name='linktags'></Input>
                    </Col>
                  </Row>

                  <Row style={{ float: 'right' }}>
                    <Col span={12}>
                      <Space style={{ width: '100%' }}>
                        <Button type="primary" onClick={this.kDamageCompensationCreate} icon={<SendOutlined />} htmlType="submit">
                          Onaya Gönder
                        </Button>
                      </Space>
                    </Col>
                  </Row>
                </Form>
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <SwitcherOutlined />
                    Değerlendirme
                  </span>
                }
                key="2">
                Content of Tab Pane 2
              </TabPane>
              <TabPane tab={
                <span>
                  <SwitcherOutlined />
                  Tarihçe
                </span>
              } key="3">
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
