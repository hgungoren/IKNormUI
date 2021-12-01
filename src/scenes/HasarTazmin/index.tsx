import React from 'react';
import 'antd/dist/antd.css';
import './index.less';
import AppComponentBase from '../../components/AppComponentBase';
import {
  Breadcrumb,
  Button,
  Card,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  Modal,
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
// import EditableTagGroup from './components/LinkTag';
import Stores from '../../stores/storeIdentifier';
import {
  AlertOutlined,
  CheckCircleTwoTone,
  ExclamationCircleOutlined,
  SendOutlined,
  SwitcherOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import KDamageCompensationStore from '../../stores/kDamageCompensationStore';
import TextArea from 'rc-textarea';
import moment from 'moment';
import 'moment/locale/tr';
<<<<<<< HEAD
import locale from 'antd/es/date-picker/locale/tr_TR'
import DamageHistory from './components/damageHistory'

import FileBase64 from 'react-file-base64';





=======
import locale from 'antd/es/date-picker/locale/tr_TR';
import DamageHistory from './components/damageHistory'; 
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf

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
  SurecSahibibolgeList: any;
  tagLink: string;
  fileInput: string;
  //degerlendirme
  selectedItems: any;
  tckInput: boolean;
  vknInput: boolean;

  evrakolusturmatarihi: any;
  aktiftabs: string;

  gonderenKoduCom: string;
  gonderenCariCom: string;
  aliciKoduCom: string;
  aliciCariCom: string;
  talepedilentutar: string;
  odenecekTutar: boolean;
  evaTalepEdilenTutar: string;

  onayaGonderBtn: boolean;
<<<<<<< HEAD
  filesTazminDilekcesi: any;
  filesFatura:  any;
  filesSevkirsaliye:  any;
  filesTcVkno:  any;
  tazminStatu:string;
  btnkaydet:boolean;
  TarihTab:Boolean;
  DegTab:Boolean;
  btngetir:boolean;
}


const { confirm } = Modal
=======
}

const { confirm } = Modal;
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf
@inject(Stores.KDamageCompensationStore)
@observer
class DamageCompensation extends AppComponentBase<IProps, IState> {
  formRef = React.createRef<FormInstance>();

  formRefDeg = React.createRef<FormInstance>();

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
    SurecSahibibolgeList: [],
    tagLink: 'cengiz',
    fileInput: '',
    tckInput: true,
    vknInput: true,
<<<<<<< HEAD
    //değerlendirme 
=======
    //değerlendirme
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf
    selectedItems: [],
    aktiftabs: '1',
    evrakolusturmatarihi: '',
    gonderenKoduCom: '',
    gonderenCariCom: '',
    aliciKoduCom: '',
    aliciCariCom: '',
    talepedilentutar: '',
    odenecekTutar: true,
    evaTalepEdilenTutar: '',
    onayaGonderBtn: false,
<<<<<<< HEAD
    filesTazminDilekcesi: [],
    filesFatura:  [],
    filesSevkirsaliye:  [],
    filesTcVkno:  [],
    tazminStatu:'Taslak',
    btnkaydet:false,
    TarihTab:true,
    DegTab:true,
    btngetir:false


  };






=======
  };

>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf
  getdamage = async (id: number) => {
    try {
      await this.props.kDamageCompensationStore
        .getDamageComppensation({ id: id })
        .then((response) => {
<<<<<<< HEAD

=======
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf
          if (this.props.kDamageCompensationStore.getCreateDamageInput === null) {
            notification.open({
              icon: <AlertOutlined style={{ color: 'red' }} />,
              message: 'Uyarı',
              description: 'Kargo takip numarası bulunamadı.',
<<<<<<< HEAD
            })
          }
          else if (this.props.kDamageCompensationStore.getCreateDamageInput.takipNo === '999999999') {

            notification.open({
              icon: <AlertOutlined style={{ color: 'red' }} />,
              message: 'Uyarı',
              description: 'Korgo tazmin numarası ile kayıtlı  ' + this.props.kDamageCompensationStore.getCreateDamageInput.gonderenKodu + ' Nolu tazmin no bulunmaktadır.',
            })
          }
          else {


            this.setState({ gonderenKoduCom: this.props.kDamageCompensationStore.getCreateDamageInput.gonderenKodu })
            this.setState({ gonderenCariCom: this.props.kDamageCompensationStore.getCreateDamageInput.gonderenUnvan })
            this.setState({ aliciKoduCom: this.props.kDamageCompensationStore.getCreateDamageInput.aliciKodu })
            this.setState({ aliciCariCom: this.props.kDamageCompensationStore.getCreateDamageInput.aliciUnvan })
            this.setState({ evrakolusturmatarihi: moment(this.props.kDamageCompensationStore.getCreateDamageInput.sistem_InsertTime).format('DD-MM-YYYY') })
=======
            });
          } else if (
            this.props.kDamageCompensationStore.getCreateDamageInput.takipNo === '999999999'
          ) {
            notification.open({
              icon: <AlertOutlined style={{ color: 'red' }} />,
              message: 'Uyarı',
              description:
                'Korgo tazmin numarası ile kayıtlı  ' +
                this.props.kDamageCompensationStore.getCreateDamageInput.gonderenKodu +
                ' Nolu tazmin no bulunmaktadır.',
            });
          } else {
            this.setState({
              gonderenKoduCom: this.props.kDamageCompensationStore.getCreateDamageInput
                .gonderenKodu,
            });
            this.setState({
              gonderenCariCom: this.props.kDamageCompensationStore.getCreateDamageInput
                .gonderenUnvan,
            });
            this.setState({
              aliciKoduCom: this.props.kDamageCompensationStore.getCreateDamageInput.aliciKodu,
            });
            this.setState({
              aliciCariCom: this.props.kDamageCompensationStore.getCreateDamageInput.aliciUnvan,
            });
            this.setState({
              evrakolusturmatarihi: moment(
                this.props.kDamageCompensationStore.getCreateDamageInput.sistem_InsertTime
              ).format('DD-MM-YYYY'),
            });
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf

            setTimeout(() => {
              this.formRef.current?.setFieldsValue({
                ...this.props.kDamageCompensationStore.getCreateDamageInput,
              });
<<<<<<< HEAD
            }, 500)

          }


          // console.log('gelenform',this.props.kDamageCompensationStore.getCreateDamageInput)
        }).catch(() => notification.open({
          icon: <AlertOutlined style={{ color: 'red' }} />,
          message: 'Uyarı',
          description: 'Kayıt Bulunamadı.Takip Numarası Hatalı',
        }));
    } catch (e) {

    }
=======
            }, 500);
          }

          // console.log('gelenform',this.props.kDamageCompensationStore.getCreateDamageInput)
        })
        .catch(() =>
          notification.open({
            icon: <AlertOutlined style={{ color: 'red' }} />,
            message: 'Uyarı',
            description: 'Kayıt Bulunamadı.Takip Numarası Hatalı',
          })
        );
    } catch (e) {}
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf
  };

  getcarilistdamageCompensation = async (id: number) => {
    try {
      await this.props.kDamageCompensationStore.getCariListDamageComppensation({ id: id });
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
<<<<<<< HEAD
    this.setState({ lastId: this.props.kDamageCompensationStore.lastIdDamage })
  }





=======
    this.setState({ lastId: this.props.kDamageCompensationStore.lastIdDamage });
  };
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf

  async componentDidMount() {
    await this.getlastiddamageCompensation();
    await this.getsubelistdamageCompensation();
    // await this.getbirimlistdamageCompensation();
    await this.getbolgelistdamageCompensation();
  }

<<<<<<< HEAD






  //Tanzim  için  Oluşturma Metodu
  kDamageCompensationCreate = () => {
    const form = this.formRef.current;

      form!.validateFields().then(async (values: any) => {

      values.FileTazminDilekcesi = JSON.stringify(this.state.filesTazminDilekcesi )
      values.FileFatura = JSON.stringify(this.state.filesFatura )
      values.FileSevkirsaliye = JSON.stringify(this.state.filesSevkirsaliye )
      values.FileTcVkno = JSON.stringify(this.state.filesTcVkno )
      values.Id=this.state.lastId

       if(values.evaTazmin_Odeme_Durumu =="Farklı Bir Tutar Ödenecek"){
        values.evaOdenecek_Tutar=values.evaOdenecek_Tutar.replace(',','.')
       }

        if(values.FileTazminDilekcesi==="[]" || values.FileFatura==="[]"  || values.FileSevkirsaliye==="[]"
        ||values.FileTcVkno==="[]" )
          {
            confirm({
              icon: <ExclamationCircleOutlined />,
              content: 'Hasar Tazmin Formu içerinsinde eksik evrak bulunmaktadır. Form eksik evrak statüsünde kaydedilecektir.Değerlendirme yapılamıcaktır.',
              okText: 'Kaydet',
              cancelText: 'Vazgeç',
              onOk: () => {  
                this.props.kDamageCompensationStore.create(values)
                this.setState({talepedilentutar:values.Talep_Edilen_Tutar})
                this.setState({btnkaydet:true})
                this.setState({btngetir:true})
                this.setState({tazminStatu :'Tazmin Eksik Evrak'})
              },
              onCancel() { console.log(L('Cancel')); },
          })
          }else {    
            this.props.kDamageCompensationStore.create(values)    
            confirm({
              icon: <ExclamationCircleOutlined />,
              content: 'Hasar tazmin kaydedildi.Değerlendirme yapabilirsiniz',
              okText: 'Değerlendirme',
              cancelText: 'Vazgeç',
              onOk: () => {               
                this.setState({aktiftabs:'2'})
                this.setState({talepedilentutar:values.Talep_Edilen_Tutar})
                this.setState({tazminStatu :'Tazmin Oluşturuldu'})
                this.setState({btnkaydet:true})
                this.setState({DegTab:false})
                this.setState({btngetir:true})
   
              },
              onCancel:() =>{  
                this.setState({btnkaydet:true}) 
                this.setState({tazminStatu :'Tazmin Oluşturuldu'} )     
                this.setState({btngetir:true})       
              },
          })
            
          }

    



    }).catch((err) => console.log(err))
=======
  //Tanzim  için  Oluşturma Metodu
  kDamageCompensationCreate = () => {
    const form = this.formRef.current;
    form!.validateFields().then(async (values: any) => {
      values.FileInfo = undefined;

      if (values.evaTazmin_Odeme_Durumu == 'Farklı Bir Tutar Ödenecek') {
        values.evaOdenecek_Tutar = values.evaOdenecek_Tutar.replace(',', '.');
      }

      if (values.FileInfo === '' || values.FileInfo === undefined) {
        confirm({
          icon: <ExclamationCircleOutlined />,
          content:
            'Hasar Tazmin Formu içerinsinde eksik evrak bulunmaktadır. Form eksik evrak statüsünde kaydedilecektir.',
          okText: 'Kaydet',
          cancelText: 'Vazgeç',
          onOk: () => {
            this.props.kDamageCompensationStore.create(values);
            this.setState({ aktiftabs: '2' });
            this.setState({ talepedilentutar: values.Talep_Edilen_Tutar });
          },
          onCancel() {
            console.log(L('Cancel'));
          },
        });
      } else {
        confirm({
          icon: <ExclamationCircleOutlined />,
          content: 'Hasar tazmin kayıt işlemi başarılı.Değerlendirme tabına geçebilirsiniz.',
          okText: 'Kaydet',
          cancelText: 'Vazgeç',
          onOk: () => {
            this.props.kDamageCompensationStore.create(values);
            this.setState({ aktiftabs: '2' });
            this.setState({ talepedilentutar: values.Talep_Edilen_Tutar });
          },
          onCancel() {
            console.log(L('Cancel'));
          },
        });
      }
    });
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf
  };

  // Tanzim  Değerlendirm için  Oluşturma Metoduf
  kDamageCompensationEvalutaionCreate = () => {
    const form = this.formRefDeg.current;
    form!.validateFields().then(async (values: any) => {
<<<<<<< HEAD


      values.tazminId = this.state.lastId
      values.evaTalep_Edilen_Tutar = this.state.talepedilentutar
      if (values.evaTazmin_Odeme_Durumu === "Farklı Bir Tutar Ödenecek") {
        values.evaOdenecek_Tutar = values.evaOdenecek_Tutar.replace(',', '.')
      } else {
        values.evaOdenecek_Tutar = values.evaOdenecek_Tutar
      }

      await this.props.kDamageCompensationStore.createDamageCompensationEvalutaion(values)
      confirm({
        icon: <CheckCircleTwoTone />,
        content: 'Hasar tazmin onaya gönderilmiştir.',
        okText: 'Yeni Form',
        cancelText: 'Vazgeç',
        onOk: () => {

          window.location.reload();

        },
        onCancel: () => {
          this.setState({ onayaGonderBtn: true })

        },
      })



=======
      values.tazminId = this.state.lastId; 
      values.evaTalep_Edilen_Tutar = this.state.talepedilentutar;
      if (values.evaTazmin_Odeme_Durumu === 'Farklı Bir Tutar Ödenecek') {
        values.evaOdenecek_Tutar = values.evaOdenecek_Tutar.replace(',', '.');
      } else {
        values.evaOdenecek_Tutar = values.evaOdenecek_Tutar;
      }
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf

      await this.props.kDamageCompensationStore.createDamageCompensationEvalutaion(values);
      confirm({
        icon: <CheckCircleTwoTone />,
        content: 'Hasar tazmin onaya gönderilmiştir.',
        okText: 'Yeni Form',
        cancelText: 'Vazgeç',
        onOk: () => {
          window.location.reload();
        },
        onCancel: () => {
          this.setState({ onayaGonderBtn: true });
        },
      });
    });
  };

  openNotificationWithIcon = (type) => {
    notification[type]({
<<<<<<< HEAD
      message: type === "success" ? 'Tazmin Onaya Gönderildi' : L('NormRejectNotificationMessageTitle'),
      description: type === "success" ? '' : L('NormCreateNotificationMessageDescription'),
      duration: 5
=======
      message:
        type === 'success' ? 'Tazmin Onaya Gönderildi' : L('NormRejectNotificationMessageTitle'),
      description: type === 'success' ? '' : L('NormCreateNotificationMessageDescription'),
      duration: 5,
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf
    });
  };

  public render() {
    const { Option } = Select;
    const { TabPane } = Tabs;

    const dateFormat = 'YYYY-MM-DD';
<<<<<<< HEAD
    var today = new Date()
    const todayFinish = moment(today).format(dateFormat)

=======
    var today = new Date();
    const todayFinish = moment(today).format(dateFormat);
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf

    const onChangeRadio = (e) => {
      let changeRadio = e.target.value;
      this.setState({ setradioValue: changeRadio });
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
<<<<<<< HEAD

=======
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf
      this.setState({ setradioValueTazminMusteri: e.target.value });
      if (e.target.value === 0) {
        this.setState({ settazminmusteriGonderici: true });
        this.setState({ settazminmusteriAlici: false });
        this.setState({ settazminmusteriFarkli: false });
      } else if (e.target.value === 1) {
        this.setState({ settazminmusteriGonderici: false });
        this.setState({ settazminmusteriAlici: true });
        this.setState({ settazminmusteriFarkli: false });
<<<<<<< HEAD
      }
      else {
=======
      } else {
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf
        this.setState({ settazminmusteriGonderici: false });
        this.setState({ settazminmusteriAlici: false });
        this.setState({ settazminmusteriFarkli: true });
        // this.setState({ setradioValueTazminMusteri: 4 });
        // this.setState({ settazminmusteriGonderici: false });
<<<<<<< HEAD
        // this.setState({ settazminmusteriAlici: false });         
      }

=======
        // this.setState({ settazminmusteriAlici: false });
      }
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf
    };

    // const onFinish = (values: any) => {
    //   console.log('Success:', values);
    // };

    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };

    //tab callback
    const callback = (key) => {
<<<<<<< HEAD
      this.setState({ aktiftabs: key })

    }
=======
      this.setState({ aktiftabs: key });
    };
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf

    const handleChange = (e) => {
      this.setState({ Ktno: e.target.value });
    };

    const handleClick = (e) => {
<<<<<<< HEAD

      if (this.state.Ktno !== 0) {
        this.getdamage(this.state.Ktno);
        
        setTimeout(() => { console.log(this.props.kDamageCompensationStore.getCreateDamageInput) }, 1000)
=======
      if (this.state.Ktno !== 0) {
        this.getdamage(this.state.Ktno);
        console.log('Gelen Getir=>', this.props.kDamageCompensationStore.getCreateDamageInput);
        setTimeout(() => {
          console.log(this.props.kDamageCompensationStore.getCreateDamageInput);
        }, 1000);
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf
      } else {
        notification.open({
          icon: <AlertOutlined style={{ color: 'red' }} />,
          message: 'Uyarı',
          description: 'Takip No Numarası Giriniz.',
        });
      }
    };

    /// tazmin talep tarihi kontrol
    //  const datetazmintaleptarihi=(values)=>{

<<<<<<< HEAD

    /// tazmin talep tarihi kontrol
    //  const datetazmintaleptarihi=(values)=>{     

=======
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf
    //       if( moment(values.target.value).format(dateFormat) >  moment(today).format(dateFormat)){
    //             notification.open({
    //               icon: <AlertOutlined style={{ color: 'red' }} />,
    //               message: 'Uyarı',
    //               description:
    //                 'İleri Tarihli Tazmin Talep Tarihi Girilemez',
    //             })
<<<<<<< HEAD


    //       }      
    //   }

=======
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf

    //       }
    //   }

    // const onSearch = (val) => {
    //   if (val.length > 3) {
    //     this.getcarilistdamageCompensation(val)
    //     this.setState({
    //       cariList: this.props.kDamageCompensationStore.getCariListDamage !== undefined && this.props.kDamageCompensationStore.getCariListDamage.map((value, index) =>
    //         <Option key={'cari' + value.kodu} value={value.unvan}> {value.kodu} </Option>
    //       )
    //     })
    //   }
    // }

    // const onChangeGondericiSelect = (res) => {
    //   this.setState({ gonderiUnvanInput: res })
    //   setTimeout(() => { console.log(this.state.gonderiUnvanInput) }, 100)

    // }

    // const onChangeAliciSelect = (res) => {

    //   this.setState({ aliciUnvanInput: res })
    //   setTimeout(() => { console.log(this.state.aliciUnvanInput) }, 100)
    // }

    //onDropdownVisibleChangeCikis cikis selectin tıklandıgında
    // const onDropdownVisibleChangeCikis = () => {

    //   this.setState({
    //     subeList: this.props.kDamageCompensationStore.getSubeListDamage !== undefined && this.props.kDamageCompensationStore.getSubeListDamage.map((value, index) =>
    //       <Option key={value.objId + '-' + index} value={value.objId + '-' + index}> {value.adi} </Option>
    //     )
    //   })

    // }

    //onDropdownVisibleChangeVaris varis selectin tıklandıgında
    // const onDropdownVisibleChangeVaris = () => {
    //   this.setState({
    //     subeList: this.props.kDamageCompensationStore.getSubeListDamage !== undefined && this.props.kDamageCompensationStore.getSubeListDamage.map((value, index) =>
    //       <Option key={value.objId + '-' + index} value={value.objId + '-' + index}> {value.adi} </Option>
    //     )
    //   })
    // }

    // //onDropdownVisibleChangeBrim birim selectin tıklandıgında
    // const onDropdownVisibleChangeBirim = () => {
    //   this.setState({
    //     birimList: this.props.kDamageCompensationStore.getBirimListDamage !== undefined && this.props.kDamageCompensationStore.getBirimListDamage.map((value, index) =>
    //       <Option key={value.objId + '-' + index} value={value.objId + '-' + index}> {value.adi} </Option>
    //     )
    //   })
    // }

    //onDropdownVisibleChangeBolge ödeme bolge selectin tıklandıgında
    const onDropdownVisibleChangeBolge = () => {
      this.setState({
        bolgeList:
          this.props.kDamageCompensationStore.getBolgeListDamage !== undefined &&
          this.props.kDamageCompensationStore.getBolgeListDamage.map((value, index) => (
            <Option key={value.objId + '-' + index} value={value.objId + '-' + index}>
              {' '}
              {value.adi}{' '}
            </Option>
          )),
      });
    };

    //onDropdownVisibleChange SurecSahibiBolge ödeme bolge selectin tıklandıgında
    const onDropdownVisibleChangeSurecSahibiBolge = () => {
      this.setState({
        SurecSahibibolgeList:
          this.props.kDamageCompensationStore.getBolgeListDamage !== undefined &&
          this.props.kDamageCompensationStore.getBolgeListDamage.map((value, index) => (
            <Option key={value.objId + '-' + index} value={value.objId + '-' + index}>
              {' '}
              {value.adi}{' '}
            </Option>
          )),
      });
    };

    const tazminodemedurumu = (value) => {
<<<<<<< HEAD

      if (value === 'Ödenecek') {
        this.setState({ odenecekTutar: true })
      }
      else if (value === 'Ödenmicek') {
        this.setState({ odenecekTutar: true })
      } else if (value === 'Farklı Bir Tutar Ödenecek') {
        this.setState({ odenecekTutar: false })
      } else {
        this.setState({ odenecekTutar: true })
=======
      if (value === 'Ödenecek') {
        this.setState({ odenecekTutar: true });
      } else if (value === 'Ödenmicek') {
        this.setState({ odenecekTutar: true });
      } else if (value === 'Farklı Bir Tutar Ödenecek') {
        this.setState({ odenecekTutar: false });
      } else {
        this.setState({ odenecekTutar: true });
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf
      }
    };

<<<<<<< HEAD

    }







    const Deghasar = ['Taşımadan Kaynaklı', 'İstif Hatası', 'Kaza', 'Teslimat Esnasında Tespit-DTT Var', 'Teslimattan Sonra-DTT', 'Aracın Su Alması', 'Banttan Düşme',
      'Farklı Kargonun Zarar Vermesi', 'Ambalaj Yetersizliği', 'Doğal Afet', 'Müşteri Memnuniyeti'];

    const DegKayıp = ['Adres Teslim Sırasında Kayıp', 'Aktarma-Aktarma Arasında', 'Faturası Düzenlenmeden Kayıp', 'Gasp', 'İçten Eksilme', 'Kaza', 'Şube Kayıp', 'Birim-Aktarma Arasında Kayıp', 'Teslim Belgesi Sunulamaması', 'Yanlış Kişiye Teslimat', 'Müşteri Memnuniyeti']

    const DegGecTeslimat = ['Geç Teslim']

    const DegMusteriMemnuniyeti = ['Müşteri Memnuniyeti']

    const DegOnchangeTazminTipi = (value) => {

      if (value === "Hasar") {
        this.setState({
          selectedItems: Deghasar.map((value, index) =>
            <Option key={index} value={value}> {value} </Option>
          )
        });
      }
      else if (value === "Kayıp") {
        this.setState({
          selectedItems: DegKayıp.map((value, index) =>
            <Option key={index} value={value}> {value} </Option>
          )
        });

      }
      else if (value === "Geç Teslimat") {
        this.setState({
          selectedItems: DegGecTeslimat.map((value, index) =>
            <Option key={index} value={value}> {value} </Option>
          )
        });

      }
      else if (value === "Müşteri Memnuniyeti") {
        this.setState({
          selectedItems: DegMusteriMemnuniyeti.map((value, index) =>
            <Option key={index} value={value}> {value} </Option>
          )
=======
    const Deghasar = [
      'Taşımadan Kaynaklı',
      'İstif Hatası',
      'Kaza',
      'Teslimat Esnasında Tespit-DTT Var',
      'Teslimattan Sonra-DTT',
      'Aracın Su Alması',
      'Banttan Düşme',
      'Farklı Kargonun Zarar Vermesi',
      'Ambalaj Yetersizliği',
      'Doğal Afet',
      'Müşteri Memnuniyeti',
    ];

    const DegKayıp = [
      'Adres Teslim Sırasında Kayıp',
      'Aktarma-Aktarma Arasında',
      'Faturası Düzenlenmeden Kayıp',
      'Gasp',
      'İçten Eksilme',
      'Kaza',
      'Şube Kayıp',
      'Birim-Aktarma Arasında Kayıp',
      'Teslim Belgesi Sunulamaması',
      'Yanlış Kişiye Teslimat',
      'Müşteri Memnuniyeti',
    ];

    const DegGecTeslimat = ['Geç Teslim'];

    const DegMusteriMemnuniyeti = ['Müşteri Memnuniyeti'];

    const DegOnchangeTazminTipi = (value) => {
      if (value === 'Hasar') {
        this.setState({
          selectedItems: Deghasar.map((value, index) => (
            <Option key={index} value={value}>
              {' '}
              {value}{' '}
            </Option>
          )),
        });
      } else if (value === 'Kayıp') {
        this.setState({
          selectedItems: DegKayıp.map((value, index) => (
            <Option key={index} value={value}>
              {' '}
              {value}{' '}
            </Option>
          )),
        });
      } else if (value === 'Geç Teslimat') {
        this.setState({
          selectedItems: DegGecTeslimat.map((value, index) => (
            <Option key={index} value={value}>
              {' '}
              {value}{' '}
            </Option>
          )),
        });
      } else if (value === 'Müşteri Memnuniyeti') {
        this.setState({
          selectedItems: DegMusteriMemnuniyeti.map((value, index) => (
            <Option key={index} value={value}>
              {' '}
              {value}{' '}
            </Option>
          )),
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf
        });
      } else
        notification.open({
          icon: <AlertOutlined style={{ color: 'red' }} />,
          message: 'Uyarı',
          description: 'Lütfen Tazmin Tipi Seçiniz.',
<<<<<<< HEAD
        })
      )

    }
=======
        });
    };
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf

    const OnChangeOdemeMusteriTipi = (value) => {
      if (value === '1') {
        this.setState({ vknInput: true });
        this.setState({ tckInput: false });

        this.formRef.current?.resetFields(['VK_NO']);
      } else if (value === '2') {
        this.setState({ vknInput: false });
        this.setState({ tckInput: true });
        this.formRef.current?.resetFields(['TCK_NO']);
      } else {
        this.setState({ vknInput: true });
        this.setState({ tckInput: true });
      }
    };

<<<<<<< HEAD
    const OnChangeOdemeMusteriTipi = (value) => {

      if (value === "1") {

        this.setState({ vknInput: true })
        this.setState({ tckInput: false })

        this.formRef.current?.resetFields(["VK_NO"]);
      }
      else if (value === "2") {
        this.setState({ vknInput: false })
        this.setState({ tckInput: true })
        this.formRef.current?.resetFields(["TCK_NO"]);
      }
      else {

        this.setState({ vknInput: true })
        this.setState({ tckInput: true })
      }



    }


    // const onChangeFile =(e)=>{

    //   var filedata = e.file
    //   //console.log('filedata',filedata)

    //   // let formData = new FormData();    //formdata object

    //   //   formData.append('file', filedata);
    //   // const config = {     
    //   //     headers: { 'content-type': 'multipart/form-data' }

    //   // }

    //   //  console.log('this is the value of data in uploadAction ', formData);
    //   // console.log('this is the value of filedata in uploadAction ', filedata),

    //   console.log('filedata=>',filedata)
    //   console.log('jsoon=>',JSON.stringify(filedata))

    // }

    // Callback~
    const getFileTazminDilekcesi = (files) => {
      this.setState({ filesTazminDilekcesi: files })
    }
    const getFileFatura = (files) => {
      this.setState({ filesFatura: files })
    }
    const getFileSevkirsaliye = (files) => {
      this.setState({ filesSevkirsaliye: files })
    }
    const getFileTcVkno = (files) => {
      this.setState({ filesTcVkno: files })
    }

=======



    const handleUpload = (values) => {
      const { file } = values;
      const reader = new FileReader();
      reader.addEventListener('load', (event) => {
          // const base64Data = reader.result.split(',')[1]; 

          console.log(reader)
      });
      reader.readAsDataURL(file[0]);
  };
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf


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
              activeKey={this.state.aktiftabs}
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
                    <Form>
                      <Row>
                        <Col style={{ float: 'right' }}>
<<<<<<< HEAD
                          <Form.Item
=======
                          <Form.Item 
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf
                            label={<label>Tanzim No</label>}
                            labelCol={{ span: 10 }}
                            wrapperCol={{ span: 16 }}
                          >
                            {console.log(this.state.lastId)}
                            <Input disabled className="formInput" value={this.state.lastId} />
                          </Form.Item>
                        </Col>
<<<<<<< HEAD

                        <Col >
                          <Form.Item

=======
                        <Col>
                          <Form.Item 
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf
                            label={<label>Tanzim Statüsü</label>}
                            labelCol={{ span: 10 }}
                            wrapperCol={{ span: 16 }}
                          >
<<<<<<< HEAD
                            <Input disabled className="formInput" defaultValue={this.state.tazminStatu}></Input>
                          </Form.Item>
                        </Col>
                      </Row>




=======
                            <Input disabled className="formInput" defaultValue="Taslak"></Input>
                          </Form.Item>
                        </Col>
                      </Row>
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf
                    </Form>
                  </Col>
                </Row>
                <Divider orientation="left">Sorgulama</Divider>
                <Row>
                  <Col span={24}>
                    <Form>
                      <Row>
                        <Col>
                          <Form.Item
                            name="kargotakipNoRadio"
                            label={
                              <label style={{ maxWidth: 150, minWidth: 150 }}>Kargo Takip No</label>
                            }
                          >
<<<<<<< HEAD
                            <Radio.Group onChange={onChangeRadio} defaultValue={this.state.setradioValue}>
=======
                            <Radio.Group
                              onChange={onChangeRadio}
                              defaultValue={this.state.setradioValue}
                            >
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf
                              <Radio value={1}>Biliniyor</Radio>
                              {/* <Radio value={2}>Bilinmiyor</Radio> */}
                            </Radio.Group>
                          </Form.Item>
                        </Col>
<<<<<<< HEAD

                      </Row>

                      <Row>
                        <Col offset={2}>
                          <Form.Item
                            rules={
                              [
                                { pattern: /^(?:\d*)$/, message: 'Sadece sayısal değerler girilebilir' }
                              ]
                            }
                            name="ktno" >
                            <Input placeholder='Kargo Takip Numarası' className='formInput'
                              onChange={handleChange}   ></Input>
                          </Form.Item>
                        </Col>




                        <Col style={{ marginLeft: 25 }} >
                          <Form.Item name='getirbutton'>

                            <Button style={{ width: 139 }} type="primary" disabled={this.state.btngetir} onClick={handleClick}>
=======
                      </Row>
                      <Row>
                        <Col offset={2}>
                          <Form.Item
                            rules={[
                              {
                                pattern: /^(?:\d*)$/,
                                message: 'Sadece sayısal değerler girilebilir',
                              },
                            ]}
                            name="ktno"
                          >
                            <Input
                              placeholder="Kargo Takip Numarası"
                              className="formInput"
                              onChange={handleChange}
                            ></Input>
                          </Form.Item>
                        </Col>
                        <Col style={{ marginLeft: 25 }}>
                          <Form.Item name="getirbutton">
                            <Button style={{ width: 139 }} type="primary" onClick={handleClick}>
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf
                              Getir
                            </Button>
                          </Form.Item>
                        </Col>
                      </Row>

                      {/* {this.state.setsorgulama ? (
                        <>
                          <Form.Item

                            labelCol={{ span: 10 }}
                            wrapperCol={{ span: 16 }}

                          >
                            <Input type='number'

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
                      )} */}
                    </Form>
                  </Col>
                </Row>
                <Divider orientation="left">Gönderi Bilgileri</Divider>
                <Form
                  ref={this.formRef}
                  initialValues={{ remember: false }}
                  // onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                  onFinish={handleUpload}
                >
                  <Row>
                    <Col span={12}>
                      <Form.Item hidden name="takipNo">
                        <Input />
                      </Form.Item>
                      <Form.Item
<<<<<<< HEAD

=======
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf
                        rules={rules.sistem_InsertTime}
                        name="sistem_InsertTime"
                        label={
                          <label style={{ maxWidth: 150, minWidth: 150 }}>
                            Evrak Oluşturma Tarihi
                          </label>
<<<<<<< HEAD
                        }>



=======
                        }
                      >
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf
                        {console.log(this.state.evrakolusturmatarihi)}
                        <Input
                          disabled
                          className="formInput"
                          value={this.state.evrakolusturmatarihi}
<<<<<<< HEAD
                          placeholder="Evrak Oluşturma Tarihi"
=======
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf
                        />
                      </Form.Item>
                    </Col>
                    {this.state.setsorgulama ? (
                      <Col span={12}>
                        <Form.Item
                          rules={rules.evrakSeriNo}
                          name="evrakSeriNo"
                          label={
                            <label style={{ maxWidth: 150, minWidth: 150 }}>
                              Evrak Seri Sıra No
                            </label>
                          }
                        >
                          <Input
                            disabled
                            readOnly={this.state.setformreadonly}
                            className="formInput"
                            placeholder="Evrak Seri Sıra No"
                            defaultValue={this.state.evrakolusturmatarihi}
                          />
                        </Form.Item>
                      </Col>
                    ) : (
                      ''
                    )}
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
                        {/* <Select
                          className="formInput"
                          
                          placeholder="Seçiniz"
                          allowClear
                          disabled={this.state.setformselectdisable}
                          onSearch={onSearch}
                          onChange={onChangeGondericiSelect}
                        >
                          {
                            this.state.cariList
                          }
                        </Select> */}

<<<<<<< HEAD
                        <Input disabled className="formInput" placeholder='Gönderici Kodu' />

=======
                        <Input disabled className="formInput" placeholder="Gönderici Kodu" />
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        name="gonderenUnvan"
                        rules={rules.gonderenUnvan}
                        label={<label style={{ maxWidth: 150, minWidth: 150 }}>Gönderici</label>}
                      >
                        <Input
                          disabled
                          className="formInput"
                          placeholder="Gönderici"

                          // value={this.state.gonderiUnvanInput}
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
                        {/* <Select

                          className="formInput"
                          placeholder="Seçiniz"
                          allowClear
                          
                          disabled={this.state.setformselectdisable}
                          // options={options}
                          onSearch={onSearch}
                          onChange={onChangeAliciSelect}
                        >

                          {this.state.cariList}

                        </Select> */}

<<<<<<< HEAD
                        <Input placeholder='Alıcı Kodu' disabled className="formInput" />
=======
                        <Input placeholder="Alıcı Kodu" disabled className="formInput" />
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        name="aliciUnvan"
                        rules={rules.aliciUnvan}
                        label={<label style={{ maxWidth: 150, minWidth: 150 }}>Alıcı</label>}
                      >
                        <Input
                          disabled
                          className="formInput"
                          placeholder="Alici"
                          // value={this.state.gonderiUnvanInput}
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
                        {/* <Select
                          className="formInput"
                          disabled={this.state.setformselectdisable}
                          onDropdownVisibleChange={onDropdownVisibleChangeCikis}
                          placeholder="Seçiniz"
                          allowClear
                          
                        >
                          {
                            this.state.subeList

                          }
                        </Select> */}

<<<<<<< HEAD
                        <Input placeholder='Çıkış Şube Adı' className='formInput' disabled />
=======
                        <Input placeholder="Çıkış Şube Adı" className="formInput" disabled />
                      </Form.Item>
                      <Form.Item hidden name="ilkGondericiSube_ObjId">
                        {' '}
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item hidden name="varisSube_ObjId">
                        {' '}
                      </Form.Item>
                      <Form.Item
                        rules={rules.varis_Sube_Unvan}
                        name="varis_Sube_Unvan"
                        label={
                          <label style={{ maxWidth: 150, minWidth: 150 }}>Varış Şube Adı</label>
                        }
                      >
                        {/* <Select
                          className="formInput"
                          
                          placeholder="Seçiniz"
                          allowClear
                          disabled={this.state.setformselectdisable}
                          onDropdownVisibleChange={onDropdownVisibleChangeVaris}

                        >

                          {
                            this.state.subeList

                          }

                        </Select> */}
<<<<<<< HEAD

                        <Input placeholder='Varış Şube Adı' className='formInput' disabled />
=======
                        <Input placeholder="Varış Şube Adı" className="formInput" disabled />
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={12}>
                      <Form.Item hidden name="birimi_ObjId">
                        {' '}
                      </Form.Item>
                      <Form.Item
                        rules={rules.birimi}
                        name="birimi"
                        label={<label style={{ maxWidth: 150, minWidth: 150 }}>Kargo Tipi</label>}
                      >
                        {/* <Select
                          className="formInput"
                          
                          placeholder="Seçiniz"
                          allowClear
                          disabled={this.state.setformselectdisable}
                          onDropdownVisibleChange={onDropdownVisibleChangeBirim}

                        >
                          {this.state.birimList}
                        </Select> */}
                        <Input placeholder="Kargo Tipi" className="formInput" disabled />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        rules={rules.adet}
                        name="adet"
                        label={<label style={{ maxWidth: 150, minWidth: 150 }}>Parça Adedi</label>}
                      >
                        <Input
                          disabled
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
                        {/* <Input  className="formInput" type='date' onChange={datetazmintaleptarihi} /> */}

<<<<<<< HEAD
                        <DatePicker className="formInputDate" locale={locale}
                          disabledDate={d => !d || d.isAfter(todayFinish) || d.isSameOrBefore("2000-01-01")} format="YYYY-MM-DD"
                          defaultPickerValue={moment(todayFinish)} placeholder="Tarih Seçiniz" />


=======
                        <DatePicker
                          className="formInputDate"
                          locale={locale}
                          disabledDate={(d) =>
                            !d || d.isAfter(todayFinish) || d.isSameOrBefore('2000-01-01')
                          }
                          format="YYYY-MM-DD"
                          defaultPickerValue={moment(todayFinish)}
                          placeholder="Tarih Seçiniz"
                        />
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        rules={rules.Tazmin_Tipi}
                        name="Tazmin_Tipi"
                        label={<label style={{ maxWidth: 150, minWidth: 150 }}>Tazmin Tipi</label>}
                      >
                        <Select className="formInput" placeholder="Seçiniz" allowClear>
                          <Option value="1">Hasar</Option>
                          <Option value="2">Kayıp</Option>
                          <Option value="3">Geç Teslimat</Option>
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
                          <Radio value={2}>Farklı Cari</Radio>
                        </Radio.Group>
                      </Form.Item>

<<<<<<< HEAD
                      {this.state.settazminmusteriGonderici ? <GonderenCariSelect
                        gonderenCariCom={this.state.gonderenCariCom}
                        gonderenKoduCom={this.state.gonderenKoduCom}
                        kDamageCompensationStore={this.props.kDamageCompensationStore} /> : ''}


                      {this.state.settazminmusteriAlici ? <AliciCariSelect

                        aliciCariCom={this.state.aliciCariCom}
                        aliciCariKoduCom={this.state.aliciKoduCom}
                        kDamageCompensationStore={this.props.kDamageCompensationStore} /> : ''}


=======
                      {this.state.settazminmusteriGonderici ? (
                        <GonderenCariSelect
                          gonderenCariCom={this.state.gonderenCariCom}
                          gonderenKoduCom={this.state.gonderenKoduCom}
                          kDamageCompensationStore={this.props.kDamageCompensationStore}
                        />
                      ) : (
                        ''
                      )}

                      {this.state.settazminmusteriAlici ? (
                        <AliciCariSelect
                          aliciCariCom={this.state.aliciCariCom}
                          aliciCariKoduCom={this.state.aliciKoduCom}
                          kDamageCompensationStore={this.props.kDamageCompensationStore}
                        />
                      ) : (
                        ''
                      )}

>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf
                      {this.state.settazminmusteriFarkli ? <FarkliCari /> : ''}
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
<<<<<<< HEAD
                        <Select className="formInput" placeholder="Seçiniz" allowClear
=======
                        <Select
                          className="formInput"
                          placeholder="Seçiniz"
                          allowClear
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf
                          onChange={OnChangeOdemeMusteriTipi}
                        >
                          <Option value="1">Bireysel</Option>
                          <Option value="2">Kurumsal</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={12}>
                      <Form.Item
                        rules={[
                          { required: this.state.vknInput, message: 'Lütfen Boş Bırakmayınız!' },
                          {
                            pattern: /^[\d]{11,11}$/,
                            message: 'TC no 11 karakterden az ve fazla olamaz',
                          },
                          { pattern: /^(?:\d*)$/, message: 'Sadece sayısal değerler girilebilir' },
                        ]}
                        name="TCK_NO"
                        label={<label style={{ maxWidth: 150, minWidth: 150 }}>TC Kimlik No</label>}
                      >
<<<<<<< HEAD
                        <Input className="formInput" disabled={this.state.tckInput} maxLength={11} placeholder="TC Kimlik No" />
=======
                        <Input
                          className="formInput"
                          disabled={this.state.tckInput}
                          maxLength={11}
                          placeholder="TC Kimlik No"
                        />
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        rules={[
                          { required: this.state.tckInput, message: 'Lütfen Boş Bırakmayınız!' },
                          {
                            pattern: /^[\d]{11,11}$/,
                            message: 'Vkno no 11 karakterden az ve fazla olamaz',
                          },
                          { pattern: /^(?:\d*)$/, message: 'Sadece sayısal değerler girilebilir' },
                        ]}
                        name="VK_NO"
                        label={
                          <label style={{ maxWidth: 150, minWidth: 150 }}>Vergi Kimlik No</label>
                        }
                      >
<<<<<<< HEAD

                        <Input className="formInput" maxLength={11} disabled={this.state.vknInput} placeholder="Vergi Kimlik No" />
=======
                        <Input
                          className="formInput"
                          maxLength={11}
                          disabled={this.state.vknInput}
                          placeholder="Vergi Kimlik No"
                        />
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf
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
<<<<<<< HEAD
                        <Select className="formInput" placeholder="Seçiniz" allowClear
                          onDropdownVisibleChange={onDropdownVisibleChangeBolge}>
=======
                        <Select
                          className="formInput"
                          placeholder="Seçiniz"
                          allowClear
                          onDropdownVisibleChange={onDropdownVisibleChangeBolge}
                        >
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf
                          {this.state.bolgeList}
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
<<<<<<< HEAD
                        rules={
                          [
                            { required: true, message: 'Lütfen Boş Bırakmayıznı' },
                            { pattern: /^\$?([0-9]{1,1},([0-9]{1,1},)*[0-9]{1,1}|[0-9]+)(.[0-9][0-9])?$/, message: 'Sadece parasal değerler girilebilir' }
                          ]
                        }

=======
                        rules={[
                          { required: true, message: 'Lütfen Boş Bırakmayıznı' },
                          {
                            pattern: /^\$?([0-9]{1,1},([0-9]{1,1},)*[0-9]{1,1}|[0-9]+)(.[0-9][0-9])?$/,
                            message: 'Sadece parasal değerler girilebilir',
                          },
                        ]}
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf
                        name="Talep_Edilen_Tutar"
                        label={
                          <label style={{ maxWidth: 150, minWidth: 150 }}>
                            Talep Edilen Tutar{' '}
                          </label>
                        }
                      >
<<<<<<< HEAD

                        <Input

                          className="formInput"

                          placeholder="Talep Edilen Tutar KDV Hariç"
                        />


=======
                        <Input className="formInput" placeholder="Talep Edilen Tutar KDV Hariç" />
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf
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
<<<<<<< HEAD
                        <Select className="formInput" placeholder="Seçiniz" allowClear
                          onDropdownVisibleChange={onDropdownVisibleChangeSurecSahibiBolge}>
=======
                        <Select
                          className="formInput"
                          placeholder="Seçiniz"
                          allowClear
                          onDropdownVisibleChange={onDropdownVisibleChangeSurecSahibiBolge}
                        >
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf
                          {this.state.SurecSahibibolgeList}
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={12}>
                      <Form.Item
                        name="Telefon"
                        rules={[
                          { required: false, message: 'Lütfen Boş Bırakmayınız!' },
                          {
                            pattern: /^[\d]{10,11}$/,
                            message: 'Lütfen geçerli bir telefon numarası giriniz',
                          },
                          { pattern: /^(?:\d*)$/, message: 'Sadece sayısal değerler girilebilir' },
                        ]}
                        label={
                          <label style={{ maxWidth: 150, minWidth: 150 }}>Bilgilendirme(SMS)</label>
                        }
                      >
                        <Input className="formInput" placeholder="Cep Telefonu" />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row>
                    <Col span={12}>
                      <Form.Item
                        name="Email"
                        rules={[
                          { required: false, message: 'Lütfen Boş Bırakmayınız!' },
                          { type: 'email', message: 'Lütfen geçerli bir Email  giriniz' },
                        ]}
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
<<<<<<< HEAD

                  <Divider orientation="left">Tazmin Belgeleri</Divider>

                  <Row>
                    <Col span={12}>
                      <Form.Item
                        name='FileTazminDilekcesi'
                        label={<label style={{ maxWidth: 150, minWidth: 150 }}>Tazmin Dilekçesi</label>}
                      >             
                              <FileBase64  multiple={false}onDone={getFileTazminDilekcesi.bind(this)} /> 
                      </Form.Item>
                    </Col>                    
                  </Row>


                  <Row>
                    <Col span={12}>
                      <Form.Item
                        name='FileFatura'
                        label={<label style={{ maxWidth: 150, minWidth: 150 }}>Fatura</label>}
                      >             
                              <FileBase64  multiple={false}onDone={getFileFatura.bind(this)} /> 
                      </Form.Item>
                    </Col>                    
                  </Row>


                  <Row>
                    <Col span={12}>
                      <Form.Item
                        name='FileSevkirsaliye'
                        label={<label style={{ maxWidth: 150, minWidth: 150 }}>Sevk İrsaliyesi</label>}
                      >             
                              <FileBase64  multiple={false}onDone={getFileSevkirsaliye.bind(this)} /> 
=======
                  <Divider orientation="left">Tazmin Belgeleri</Divider>
                  <Row>
                    <Col span={12}>
                      <Form.Item
                        label={
                          <label style={{ maxWidth: 150, minWidth: 150 }}>Tazmin Dilekçesi</label>
                        }
                      >
                        <Upload multiple maxCount={3} listType="picture-card">
                          <Button icon={<UploadOutlined />}>Yükle</Button>
                        </Upload>
                      </Form.Item>
                      <Form.Item name="FileInfo" hidden>
                        <Input value={this.state.fileInput} defaultValue={this.state.fileInput} />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={12}>
                      <Form.Item
                        label={<label style={{ maxWidth: 150, minWidth: 150 }}>Fatura</label>}
                      >
                        <Upload multiple maxCount={3} listType="picture-card">
                          <Button icon={<UploadOutlined />}>Yükle</Button>
                        </Upload>
                      </Form.Item>
                      <Form.Item name="FileInfo" hidden>
                        <Input value={this.state.fileInput} defaultValue={this.state.fileInput} />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={12}>
                      <Form.Item
                        label={
                          <label style={{ maxWidth: 150, minWidth: 150 }}>Sevk İrsaliyesi</label>
                        }
                      >
                        <Upload multiple maxCount={3} listType="text">
                          <Button icon={<UploadOutlined />}>Yükle</Button>
                        </Upload>
                      </Form.Item>
                      <Form.Item name="FileInfo" hidden>
                        <Input value={this.state.fileInput} defaultValue={this.state.fileInput} />
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf
                      </Form.Item>
                    </Col>                    
                  </Row>
                  <Row>
                    <Col span={12}>
                      <Form.Item
<<<<<<< HEAD
                        name='FileTcVkno'
                        label={<label style={{ maxWidth: 150, minWidth: 150 }}>Fatura</label>}
                      >             
                              <FileBase64  multiple={false}onDone={getFileTcVkno.bind(this)} /> 
                      </Form.Item>
                    </Col>                    
                  </Row>




=======
                        label={
                          <label style={{ maxWidth: 150, minWidth: 150 }}>TC.No/Vergi No</label>
                        }
                      >
                        <Upload multiple maxCount={3} listType="text">
                          <Button icon={<UploadOutlined />}>Yükle</Button>
                        </Upload>
                      </Form.Item>
                      <Form.Item name="FileInfo" hidden>
                        <Input value={this.state.fileInput} defaultValue={this.state.fileInput} />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={12}>
                      <Form.Item
                        label={
                          <label style={{ maxWidth: 150, minWidth: 150 }}>Hepsini Yükle</label>
                        }
                      >
                        <Upload multiple maxCount={3} listType="text">
                          <Button icon={<UploadOutlined />}>Yükle</Button>
                        </Upload>
                      </Form.Item>
                      <Form.Item name="FileInfo" hidden>
                        <Input value={this.state.fileInput} defaultValue={this.state.fileInput} />
                      </Form.Item>
                    </Col>
                  </Row>
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf

                  {/* <Row>
                    <Col span={12}>
                      <Form.Item
                        label={<label style={{ maxWidth: 150, minWidth: 150 }}>Link</label>}
                      >
                        <EditableTagGroup />
                      </Form.Item>
                      <Input hidden defaultValue={this.state.tagLink} name='linktags'></Input>
                    </Col>
                  </Row> */}

                  <Row style={{ float: 'right' }}>
                    <Col span={12}>
                      <Space style={{ width: '100%' }}>
<<<<<<< HEAD
                        <Button type="primary" onClick={this.kDamageCompensationCreate} icon={<SendOutlined />} 
                        disabled={this.state.btnkaydet}
                        htmlType="submit">
=======
                        <Button
                          type="primary"
                          onClick={this.kDamageCompensationCreate}
                          icon={<SendOutlined />}
                          htmlType="submit"
                        >
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf
                          Kaydet
                        </Button>
                      </Space>
                    </Col>
                  </Row>
                </Form>
              </TabPane>
<<<<<<< HEAD


              <TabPane disabled={this.state.DegTab}
=======
              <TabPane
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf
                tab={
                  <span>
                    <SwitcherOutlined />
                    Değerlendirme
                  </span>
                }
<<<<<<< HEAD
                key="2">

                <Form
                  ref={this.formRefDeg}
                  layout='horizontal'>
                  <Row>
                    <Col span={7}>
                      <Form.Item name='evaTazmin_Tipi' label={
                        <label style={{ maxWidth: 155, minWidth: 155 }}>Tazmin Tipi</label>
                      }

                        rules={
                          [
                            { required: true, message: 'Lütfen Boş Bırakmayınız!' }
                          ]
                        }
=======
                key="2"
              >
                <Form ref={this.formRefDeg} layout="horizontal">
                  <Row>
                    <Col span={7}>
                      <Form.Item
                        name="evaTazmin_Tipi"
                        label={<label style={{ maxWidth: 155, minWidth: 155 }}>Tazmin Tipi</label>}
                        rules={[{ required: true, message: 'Lütfen Boş Bırakmayınız!' }]}
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf
                      >
                        <Select
                          className="formInput"
                          placeholder="Seçiniz"
                          allowClear
                          showSearch
                          onChange={DegOnchangeTazminTipi}
                        >
                          <Option value="Hasar">Hasar</Option>
                          <Option value="Kayıp">Kayıp</Option>
                          <Option value="Geç">Geç Teslimat</Option>
                          <Option value="Müşteri Memnuniyeti">Müşteri Memnuniyeti</Option>
                        </Select>
                      </Form.Item>
                    </Col>
<<<<<<< HEAD


=======
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf
                    <Col span={7}>
                      <Form.Item
                        name="evaTazmin_Nedeni"
                        rules={[{ required: true, message: 'Lütfen Boş Bırakmayınız!' }]}
                        label={
                          <label style={{ maxWidth: 155, minWidth: 155 }}>Tazmin Nedeni</label>
<<<<<<< HEAD
                        }>
                        <Select
                          className="formInput"
                          placeholder="Seçiniz"
                          allowClear
                          showSearch
                        >
                          {this.state.selectedItems}
                        </Select>
                      </Form.Item>

=======
                        }
                      >
                        <Select className="formInput" placeholder="Seçiniz" allowClear showSearch>
                          {this.state.selectedItems}
                        </Select>
                      </Form.Item>
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf
                    </Col>
                  </Row>
                  <Row>
                    <Col span={7}>
                      <Form.Item
                        name="evaKargo_Bulundugu_Yer"
                        rules={[{ required: true, message: 'Lütfen Boş Bırakmayınız!' }]}
                        label={
<<<<<<< HEAD
                          <label style={{ maxWidth: 155, minWidth: 155 }}>Kargonun Bulunduğu Yer</label>
                        }>
                        <Select
                          className="formInput"
                          placeholder="Seçiniz"
                          allowClear
                          showSearch
                        >
=======
                          <label style={{ maxWidth: 155, minWidth: 155 }}>
                            Kargonun Bulunduğu Yer
                          </label>
                        }
                      >
                        <Select className="formInput" placeholder="Seçiniz" allowClear showSearch>
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf
                          <Option value="Çıkış Birim">Çıkış Birim</Option>
                          <Option value="Çıkış Aktarma">Çıkış Aktarma</Option>
                          <Option value="Varış Aktarma">Varış Aktarma</Option>
                          <Option value="Varış Birim">Varış Birim</Option>
                          <Option value="Gönderici Müsteri">Gönderici Müsteri</Option>
                          <Option value="Alıcı Müşteri">Alıcı Müşteri</Option>
                          <Option value="Diğer">Diğer</Option>
                          <Option value="İmha">İmha</Option>
<<<<<<< HEAD

=======
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf
                        </Select>
                      </Form.Item>
                    </Col>

                    <Col span={7}>
<<<<<<< HEAD
                      <Form.Item name='evaKusurlu_Birim'
                        rules={
                          [
                            { required: true, message: 'Lütfen Boş Bırakmayınız!' }
                          ]
                        }
                        label={
                          <label style={{ maxWidth: 155, minWidth: 155 }}>Kusurlu Birim Var mı?</label>
                        }>
                        <Select
                          className="formInput"
                          placeholder="Seçiniz"
                          allowClear
                          showSearch
                        >
                          <Option value="Evet">Evet</Option>
                          <Option value="Hayır">Hayır</Option>

                        </Select>
                      </Form.Item>
                    </Col>




=======
                      <Form.Item
                        name="evaKusurlu_Birim"
                        rules={[{ required: true, message: 'Lütfen Boş Bırakmayınız!' }]}
                        label={
                          <label style={{ maxWidth: 155, minWidth: 155 }}>
                            Kusurlu Birim Var mı?
                          </label>
                        }
                      >
                        <Select className="formInput" placeholder="Seçiniz" allowClear showSearch>
                          <Option value="Evet">Evet</Option>
                          <Option value="Hayır">Hayır</Option>
                        </Select>
                      </Form.Item>
                    </Col>
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf
                  </Row>
                  <Row>
                    <Col span={7}>
<<<<<<< HEAD
                      <Form.Item name='evaIcerik_Grubu'
                        rules={
                          [
                            { required: true, message: 'Lütfen Boş Bırakmayınız!' }
                          ]
                        }
                        label={
                          <label style={{ maxWidth: 155, minWidth: 155 }}>İçerik Grubu</label>
                        }>
                        <Select
                          className="formInput"
                          placeholder="Seçiniz"
                          allowClear
                          showSearch
                        >
=======
                      <Form.Item
                        name="evaIcerik_Grubu"
                        rules={[{ required: true, message: 'Lütfen Boş Bırakmayınız!' }]}
                        label={<label style={{ maxWidth: 155, minWidth: 155 }}>İçerik Grubu</label>}
                      >
                        <Select className="formInput" placeholder="Seçiniz" allowClear showSearch>
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf
                          <Option value="E-Ticaret">E-Ticaret</Option>
                          <Option value="Teknoloji">Teknoloji</Option>
                          <Option value="Basın">Basın</Option>
                          <Option value="Diğer">Diğer</Option>
<<<<<<< HEAD

=======
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={7}>
<<<<<<< HEAD
                      <Form.Item name='evaIcerik'
                        rules={
                          [
                            { required: true, message: 'Lütfen Boş Bırakmayınız!' }
                          ]
                        }
                        label={
                          <label style={{ maxWidth: 155, minWidth: 155 }}>İçerik</label>
                        }>
                        <Select
                          className="formInput"
                          placeholder="Seçiniz"
                          allowClear
                          showSearch
                        >
                          <Option value="Evet">Evet</Option>
                          <Option value="Hayır">Hayır</Option>

=======
                      <Form.Item
                        name="evaIcerik"
                        rules={[{ required: true, message: 'Lütfen Boş Bırakmayınız!' }]}
                        label={<label style={{ maxWidth: 155, minWidth: 155 }}>İçerik</label>}
                      >
                        <Select className="formInput" placeholder="Seçiniz" allowClear showSearch>
                          <Option value="Evet">Evet</Option>
                          <Option value="Hayır">Hayır</Option>
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>
<<<<<<< HEAD


=======
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf
                  <Row>
                    <Col span={7}>
                      <Form.Item
                        name="evaUrun_Aciklama"
                        rules={[{ required: true, message: 'Lütfen Boş Bırakmayınız!' }]}
                        label={
                          <label style={{ maxWidth: 155, minWidth: 155 }}>Ürün Açıklaması</label>
                        }
                      >
                        <Input className="formInput" />
                      </Form.Item>
                    </Col>

                    <Col span={7}>
<<<<<<< HEAD
                      <Form.Item name='evaEkleyen_Kullanici' label={
                        <label style={{ maxWidth: 155, minWidth: 155 }}>Ekleyen Kullancı</label>
                      }>
=======
                      <Form.Item
                        name="evaEkleyen_Kullanici"
                        label={
                          <label style={{ maxWidth: 155, minWidth: 155 }}>Ekleyen Kullancı</label>
                        }
                      >
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf
                        <Input disabled defaultValue={'Admin'} className="formInput" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={13}>
                      <Form.Item
                        name="evaBolge_Aciklama"
                        rules={[{ required: false, message: 'Lütfen Boş Bırakmayınız!' }]}
                        label={
                          <label style={{ maxWidth: 155, minWidth: 155 }}>Bölge Açıklama</label>
                        }
                      >
                        <TextArea rows={4} style={{ width: '100%' }}></TextArea>
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={13}>
                      <Form.Item
                        name="evaGm_Aciklama"
                        rules={[{ required: false, message: 'Lütfen Boş Bırakmayınız!' }]}
                        label={<label style={{ maxWidth: 155, minWidth: 155 }}>Gm Açıklama</label>}
                      >
                        <TextArea rows={4} style={{ width: '100%' }}></TextArea>
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={7}>
<<<<<<< HEAD
                      <Form.Item name='evaTalep_Edilen_Tutar'

=======
                      <Form.Item
                        name="evaTalep_Edilen_Tutar"
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf
                        // rules={
                        //   [
                        //     { required: true, message: 'Lütfen Boş Bırakmayınız!' }
                        //   ]
                        // }

                        label={
                          <label style={{ maxWidth: 155, minWidth: 155 }}>Talep Edilen Tutar</label>
                        }
                      >
                        {console.log(this.state.talepedilentutar)}
<<<<<<< HEAD
                        <Input defaultValue={this.state.talepedilentutar} disabled className="formInput" />


=======
                        <Input
                          defaultValue={this.state.talepedilentutar}
                          disabled
                          className="formInput"
                        />
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row>
                    <Col span={7}>
                      <Form.Item
                        name="evaTazmin_Odeme_Durumu"
                        rules={[{ required: true, message: 'Lütfen Boş Bırakmayınız!' }]}
                        label={
<<<<<<< HEAD
                          <label style={{ maxWidth: 155, minWidth: 155 }}>Tazmin Ödeme Durumu</label>
                        }>
=======
                          <label style={{ maxWidth: 155, minWidth: 155 }}>
                            Tazmin Ödeme Durumu
                          </label>
                        }
                      >
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf
                        <Select
                          className="formInput"
                          placeholder="Seçiniz"
                          allowClear
                          showSearch
                          onChange={tazminodemedurumu}
                        >
                          <Option value="Ödenecek">Ödenecek</Option>
                          <Option value="Ödenmicek">Ödenmicek</Option>
<<<<<<< HEAD
                          <Option value="Farklı Bir Tutar Ödenecek">Farklı Bir Tutar Ödenecek</Option>
=======
                          <Option value="Farklı Bir Tutar Ödenecek">
                            Farklı Bir Tutar Ödenecek
                          </Option>
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>

<<<<<<< HEAD
                  {this.state.odenecekTutar ? '' :
                    <Row>
                      <Col span={7}>
                        <Form.Item name='evaOdenecek_Tutar'
                          rules={
                            [
                              { required: false, message: 'Lütfen Boş Bırakmayınız!' },
                              { pattern: /^\$?([0-9]{1,1},([0-9]{1,1},)*[0-9]{1,1}|[0-9]+)(.[0-9][0-9])?$/, message: 'Sadece parasal değerler girilebilir' }
                            ]
                          }
                          label={
                            <label style={{ maxWidth: 155, minWidth: 155 }}>Ödenecek Tutar</label>
                          }>
                          <Input className="formInput" disabled={this.state.odenecekTutar}  ></Input>
                        </Form.Item>
                      </Col>
                    </Row>}
=======
                  {this.state.odenecekTutar ? (
                    ''
                  ) : (
                    <Row>
                      <Col span={7}>
                        <Form.Item
                          name="evaOdenecek_Tutar"
                          rules={[
                            { required: false, message: 'Lütfen Boş Bırakmayınız!' },
                            {
                              pattern: /^\$?([0-9]{1,1},([0-9]{1,1},)*[0-9]{1,1}|[0-9]+)(.[0-9][0-9])?$/,
                              message: 'Sadece parasal değerler girilebilir',
                            },
                          ]}
                          label={
                            <label style={{ maxWidth: 155, minWidth: 155 }}>Ödenecek Tutar</label>
                          }
                        >
                          <Input className="formInput" disabled={this.state.odenecekTutar}></Input>
                        </Form.Item>
                      </Col>
                    </Row>
                  )}
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf

                  <Row style={{ float: 'right' }}>
                    <Col span={12}>
                      <Space style={{ width: '100%' }}>
<<<<<<< HEAD
                        <Button type="primary" icon={<SendOutlined />} disabled={this.state.onayaGonderBtn} onClick={this.kDamageCompensationEvalutaionCreate} htmlType="submit">
=======
                        <Button
                          type="primary"
                          icon={<SendOutlined />}
                          disabled={this.state.onayaGonderBtn}
                          onClick={this.kDamageCompensationEvalutaionCreate}
                          htmlType="submit"
                        >
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf
                          Onaya Gönder
                        </Button>
                      </Space>
                    </Col>
                  </Row>
                </Form>
              </TabPane>
<<<<<<< HEAD

              <TabPane disabled={this.state.TarihTab} tab={
                <span>
                  <SwitcherOutlined />
                  Tarihçe
                </span>
              } key="3">
                <DamageHistory kDamageCompensationStore={this.props.kDamageCompensationStore} />

=======
              <TabPane
                tab={
                  <span>
                    <SwitcherOutlined />
                    Tarihçe
                  </span>
                }
                key="3"
              >
                <DamageHistory kDamageCompensationStore={this.props.kDamageCompensationStore} />
>>>>>>> b8e12d428f45ae34238f287cb4d5c5da636170bf
              </TabPane>
            </Tabs>
          </Card>
        </React.Fragment>
      </>
    );
  }
}

export default DamageCompensation;
