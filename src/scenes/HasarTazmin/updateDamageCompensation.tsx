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

} from 'antd';
import { FormInstance } from 'antd/lib/form';
import { inject, observer } from 'mobx-react';
import rules from './HasarTazmin.validation';
import { Link } from 'react-router-dom';
import { isGranted, L } from '../../lib/abpUtility';
// import GonderenCariSelect from './components/GonderenCariSelect';
// import AliciCariSelect from './components/AliciCariSelect';
// import FarkliCari from './components/FarkliCari';
// import EditableTagGroup from './components/LinkTag';
import Stores from '../../stores/storeIdentifier';
import { AlertOutlined, LikeOutlined, SendOutlined, SwitcherOutlined } from '@ant-design/icons';
import KDamageCompensationStore from '../../stores/kDamageCompensationStore';




export interface IProps {
  kDamageCompensationStore: KDamageCompensationStore;

}

export interface IState {
  setsorgulama: boolean;
  subeList: any;
  birimList: any;
  bolgeList: any;
  SurecSahibibolgeList:any;
  setradioValue: number;
  setformreadonly: boolean,
  setformselectdisable: boolean;
  
  urlid:number;
  setradioValueTazminMusteri: number;
  defaulttazmintipi:string;
  defaultodenecekmusteritipi:string;
  odemebirimibolge:string;
  surecsahibibirimbolge:string;
  tazminstatuad:string;
  Ktno: number;
  odemetext:string;
  surecsahibitext:string;
  takipNo:string;

}

@inject(Stores.KDamageCompensationStore)
@observer
class DamageCompensation extends AppComponentBase<IProps, IState> {
  formRef = React.createRef<FormInstance>();

  state = {
    setsorgulama:true,
    subeList: [],
    birimList: [],
    bolgeList: [],
    SurecSahibibolgeList:[],
    setradioValue: 1,
    setformreadonly: true,
    setformselectdisable: true,



    urlid:0,
    setradioValueTazminMusteri:1,
    defaulttazmintipi:'',
    defaultodenecekmusteritipi:'',
    odemebirimibolge:'',
    surecsahibibirimbolge:'',
    tazminstatuad:'',
    Ktno: 0,
    odemetext:'',
    surecsahibitext:'',
    takipNo:''
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


  //gelen url idden sayfayı yükleme
  getdamagePage = async (id: number) => {
    try {
      await this.props.kDamageCompensationStore
        .StoregetDamageComppensationById({ id: id })
        .then((response) => {
          setTimeout(() => {
            this.formRef.current?.setFieldsValue({
              ...this.props.kDamageCompensationStore.updateDamageCompensationClass,  
            });
          }, 500)
        
          this.setState({defaulttazmintipi:this.props.kDamageCompensationStore.updateDamageCompensationClass.tazmin_Tipi})
          this.setState({setradioValueTazminMusteri:this.props.kDamageCompensationStore.updateDamageCompensationClass.tazmin_Musteri_Tipi})
          this.setState({defaultodenecekmusteritipi :this.props.kDamageCompensationStore.updateDamageCompensationClass.odeme_Musteri_Tipi})

          this.setState({odemebirimibolge :this.props.kDamageCompensationStore.updateDamageCompensationClass.odeme_Birimi_Bolge})
          this.setState({surecsahibibirimbolge :this.props.kDamageCompensationStore.updateDamageCompensationClass.surec_Sahibi_Birim_Bolge})
          this.setState({tazminstatuad:this.props.kDamageCompensationStore.updateDamageCompensationClass.tazminStatuAd})

          this.setState({odemetext:this.props.kDamageCompensationStore.updateDamageCompensationClass.odeme_Birimi_Bolge_Text})
          this.setState({surecsahibitext:this.props.kDamageCompensationStore.updateDamageCompensationClass.surec_Sahibi_Birim_Bolge_Text})
          this.setState({takipNo:this.props.kDamageCompensationStore.updateDamageCompensationClass.takipNo})

        }).catch(() => notification.open({
          icon: <AlertOutlined style={{ color: 'red' }} />,
          message: 'Uyarı',
          description:'Kayıt Bulunamadı.Takip Numarası Hatalı',
        }));
    } catch (e) {
      alert(e)
    }
  };




  // Tanzim  için  Oluşturma Metodu
  update = () => {  
     try {
      const form = this.formRef.current;
      form!.validateFields().then(async (values: any) => { 
        values.tazmin_Musteri_Kodu=''
        values.tazmin_Musteri_Unvan=''
        values.Id=this.state.urlid
        values.tazminStatu='2';
        //console.log('FORM=>',values)
        await this.props.kDamageCompensationStore.StoreDamageCompensationUpdate(values).
        then(() => notification.open({
           icon:<LikeOutlined  style={{ color: 'green' }} />,
           message: 'Bilgilendirme',
           description:'Düzenleme Başarılı',
        })
        ).catch(() => notification.open({
          icon: <AlertOutlined style={{ color: 'red' }} />,
          message: 'Uyarı',
          description:'İşlem Başarısız',
        }));
      });     
     } catch (error) {
       
     }   
   
  };


  getdamageNew = async (id: number) => {

     console.log('once=>',this.props.kDamageCompensationStore.updateDamageCompensationClass)

    try {
      await this.props.kDamageCompensationStore
        .getDamageComppensation({ id: id })
        .then((response) => {
          setTimeout(() => {
            this.formRef.current?.setFieldsValue({

              ...this.props.kDamageCompensationStore.getCreateDamageInput,
             
              
            });
          },500)
           console.log('sonra=>',this.props.kDamageCompensationStore.updateDamageCompensationClass)
        }).catch(() => notification.open({
          icon: <AlertOutlined style={{ color: 'red' }} />,
          message: 'Uyarı',
          description:'Kayıt Bulunamadı.Takip Numarası Hatalı',
        }));
    } catch (e) {
      alert(e)
    }
  };




//url ID
  setPageState = async () => {
    this.setState({urlid:this.props['match'].params['id']});       
};



  async componentDidMount() {
    await this.setPageState();
    await this.getdamagePage(this.state.urlid);
    await this.getsubelistdamageCompensation();
    await this.getbirimlistdamageCompensation();
    await this.getbolgelistdamageCompensation();
 
  }


  public render() {
    const { Option } = Select;
    const { TabPane } = Tabs


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
          <Option key={value.objId + '-' + index} value={value.objId + '-' + index}> {value.adi} </Option>
        )
      })
    }

    //onDropdownVisibleChange SurecSahibiBolge ödeme bolge selectin tıklandıgında
    const onDropdownVisibleChangeSurecSahibiBolge = () => {
      this.setState({
        SurecSahibibolgeList: this.props.kDamageCompensationStore.getBolgeListDamage !== undefined && this.props.kDamageCompensationStore.getBolgeListDamage.map((value, index) =>
          <Option key={value.objId + '-' + index} value={value.objId + '-' + index}> {value.adi} </Option>
        )
      })
    }


     



    // ktno 
    const InputhandleChange = (e) => {
      this.setState({ Ktno: e.target.value });
    };



    ///getir basınca 
    const GetirhandleClick = (e) => {
     
      if(this.state.Ktno !=0 ){
       this.getdamageNew(this.state.Ktno);
      }else {
       notification.open({
         icon: <AlertOutlined style={{ color: 'red' }} />,
         message: 'Uyarı',
         description:
           'Takip No Numarası Giriniz.',
       });
      }



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
                  <Breadcrumb.Item>{this.state.urlid} Hasar Tazmin Formu </Breadcrumb.Item>
                </Breadcrumb>
              }
            ></PageHeader>
          </Card>

          <Card>
            <Tabs
              defaultActiveKey="1"
           
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
                         {console.log(this.state.urlid)}
                        <Input readOnly value={this.state.urlid} ></Input>
                      </Form.Item>

                      <Form.Item
                        name="coders"
                        label={<label style={{ fontWeight: 'bold' }}>Tanzim Statüsü</label>}
                        labelCol={{ span: 10 }}
                        wrapperCol={{ span: 16 }}
                      >
                          {console.log(this.state.tazminstatuad)}
                        <Input readOnly value={this.state.tazminstatuad}  ></Input>
                      </Form.Item>
                    </Form>
                  </Col>
                </Row>

                <Divider orientation="left">Sorgulama</Divider>

                <Row>
                  <Col span={12}>
                    <Form layout="inline">

                      <Form.Item label="Kargo Takip No" name='kargotakipNoRadio'>
                        <Radio.Group  defaultValue={this.state.setradioValue}>
                          <Radio value={1}>Biliniyor</Radio>
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
                              placeholder={this.state.takipNo}
                              name="ktno"

                              onChange={InputhandleChange}
                            
                            />
                          </Form.Item>
                          <Form.Item label="" labelCol={{ span: 10 }} wrapperCol={{ span: 16 }}>
                            <Button type="primary"  onClick={GetirhandleClick}    >
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
            
                  autoComplete="off"
                >

                  <Row>
                    <Col span={12}>

                      <Form.Item hidden name='takipNo'>
                        <Input />
                      </Form.Item>




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

                      : ''}



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
                          {
                            //this.state.cariList
                          }
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item name="gonderenUnvan"
                        rules={rules.gonderenUnvan}
                        label={<label style={{ maxWidth: 150, minWidth: 150 }}>Gönderici</label>}
                      >
                        <Input readOnly className="formInput" placeholder="Gönderici"  />
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
                          
                        >

                         {/* {this.state.cariList} */}

                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item name="aliciUnvan"
                        rules={rules.aliciUnvan}
                        label={<label style={{ maxWidth: 150, minWidth: 150 }}>Gönderici</label>}
                      >
                        <Input readOnly className="formInput" placeholder="Alici"  />
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




                      <Form.Item hidden name="ilkGondericiSube_ObjId"> </Form.Item>





                    </Col>
                    <Col span={12}>
                      <Form.Item hidden name="varisSube_ObjId"> </Form.Item>
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
                      <Form.Item hidden name="birimi_ObjId"> </Form.Item>
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
                        name="tazmin_Talep_Tarihi"
                        label={
                          <label style={{ maxWidth: 150, minWidth: 150 }}>
                            Tazmin Talep Tarihi
                          </label>
                        }
                      >
                        <Input className="formInput" type='date' />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        rules={rules.Tazmin_Tipi}
                        name="tazmin_Tipi"
                        label={<label style={{ maxWidth: 150, minWidth: 150 }}>Tazmin Tipi</label>}
                      >

                        
                        <Select value={this.state.defaulttazmintipi} 
                        className="formInput" showSearch placeholder="Seçiniz" allowClear  >
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
                        name="tazmin_Musteri_Tipi"
                        label={
                          <label style={{ maxWidth: 150, minWidth: 150 }}>Tazmin Müşterisi</label>
                        }
                      >
                        <Radio.Group
                          defaultValue={this.state.setradioValueTazminMusteri}
                         
                        >
                        

                          <Radio value={0}>Gönderen Cari</Radio>
                          <Radio value={1}>Alıcı Cari</Radio>
                          {/* <Radio value={2}>Farklı Cari</Radio> */}
                        </Radio.Group>
                      </Form.Item>

                
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        rules={rules.Odeme_Musteri_Tipi}
                        name="odeme_Musteri_Tipi"
                        label={
                          <label style={{ maxWidth: 150, minWidth: 150 }}>
                            Ödenecek Müşteri Tipi
                          </label>
                        }
                      >  
                         
                        <Select value={this.state.defaultodenecekmusteritipi}  className="formInput" showSearch placeholder="Seçiniz" allowClear>
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
                            { required: false, message: 'Lütfen Boş Bırakmayınız!' },
                            { pattern: /^[\d]{11,11}$/, message: 'TC no 11 karakterden az ve fazla olamaz' },
                            { pattern: /^(?:\d*)$/, message: 'Sadece sayısal değerler girilebilir' }
                          ]
                        }
                        name="tcK_NO"
                        label={<label style={{ maxWidth: 150, minWidth: 150 }}>TC Kimlik No</label>}
                      >
                        <Input className="formInput" placeholder="TC Kimlik No" />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        rules={
                          [
                            { required: false, message: 'Lütfen Boş Bırakmayınız!' },
                            { pattern: /^[\d]{11,11}$/, message: 'Vkno no 11 karakterden az ve fazla olamaz' },
                            { pattern: /^(?:\d*)$/, message: 'Sadece sayısal değerler girilebilir' }
                          ]
                        }
                        name="vK_NO"
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
                        name="odeme_Birimi_Bolge"
                        label={
                          <label style={{ maxWidth: 150, minWidth: 150 }}>Ödeme Birimi/Bölge</label>
                        }
                      >
                         
                        <Select 
                          
                         // defaultValue={this.state.odemebirimibolge} 
                          className="formInput" 
                          showSearch 
                          placeholder={this.state.odemetext}
                          allowClear
                          onDropdownVisibleChange={onDropdownVisibleChangeBolge}>
                          {this.state.bolgeList}
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        rules={rules.Talep_Edilen_Tutar}
                        name="talep_Edilen_Tutar"
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
                        name="surec_Sahibi_Birim_Bolge"
                        label={
                          <label style={{ maxWidth: 150, minWidth: 150 }}>
                            Süreç Sahibi Birim/Bölge
                          </label>
                        }
                      >
                        
                        <Select 
                        defaultValue={this.state.surecsahibibirimbolge}  
                        className="formInput"
                         showSearch
                          placeholder={this.state.surecsahibitext} 
                           allowClear
                          onDropdownVisibleChange={onDropdownVisibleChangeSurecSahibiBolge}>
                          {this.state.SurecSahibibolgeList}
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row>
                    <Col span={12}>
                      <Form.Item

                        name="telefon"
                        rules={
                          [
                            { required: false, message: 'Lütfen Boş Bırakmayınız!' },
                            { pattern: /^[\d]{10,11}$/, message: 'Lütfen geçerli bir telefon numarası giriniz' },
                            { pattern: /^(?:\d*)$/, message: 'Sadece sayısal değerler girilebilir' }
                          ]
                        }
                        label={
                          <label style={{ maxWidth: 150, minWidth: 150 }}>Bilgilendirme(SMS)</label>
                        }
                      >
                        <Input className="formInput"  placeholder="SMS" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={12}>
                      <Form.Item
                        name="email"
                        rules={
                          [
                            { required: false, message: 'Lütfen Boş Bırakmayınız!' },
                            { type: "email", message: 'Lütfen geçerli bir Email  giriniz' }

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
{/* 
                  <Row>
                    <Col span={12}>
                      <Form.Item
                        label={<label style={{ maxWidth: 150, minWidth: 150 }}>Belgeler</label>}
                      >

                        <Upload multiple maxCount={3}  listType="text">
                          <Button icon={<UploadOutlined />}>Click to upload</Button>
                        </Upload>
                      </Form.Item>

                      <Form.Item name="fileInfo" hidden >
                        <Input  />


                      </Form.Item>



                    </Col>
                  </Row>

                  <Row>
                    <Col span={12}>
                      <Form.Item
                        label={<label style={{ maxWidth: 150, minWidth: 150 }}>Link</label>}
                      >
                        <EditableTagGroup />
                      </Form.Item>
                      <Input hidden  name='linktags'></Input>
                    </Col>
                  </Row> */}

                  <Row style={{ float: 'right' }}>
                    <Col span={12}>
                      <Space style={{ width: '100%' }}>
                        <Button type="primary"  icon={<SendOutlined />} onClick={this.update}  htmlType="submit">
                          Düzenle
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
