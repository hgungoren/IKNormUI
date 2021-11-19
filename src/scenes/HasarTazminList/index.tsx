import React from 'react';
import 'antd/dist/antd.css';

import AppComponentBase from '../../components/AppComponentBase';
import { inject, observer } from 'mobx-react';
import Stores from '../../stores/storeIdentifier';
import KDamageCompensationStore from '../../stores/kDamageCompensationStore';
import { Breadcrumb, Button, Card, Col, DatePicker, Dropdown, Form, FormInstance, Input, Menu, PageHeader, Radio, Row, Space, Table, Tag } from 'antd';
import { SendOutlined, SettingOutlined } from '@ant-design/icons';
import { GetAllDamageCompensation } from '../../services/kDamageCompensations/dto/GetAllDamageCompensation';
import { Link } from 'react-router-dom';
import { L } from '../../lib/abpUtility';
import { EntityDto } from '../../services/dto/entityDto';


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

  state = {
    listdata: this.props.kDamageCompensationStore.getAllDamageCompensationStoreClass,
    modalVisible: false,
    tazminid:0
  };

  //tazmin listesi
  getalldamagecompensaation = async () => {
    try {
      await this.props.kDamageCompensationStore.StoregetAllDamageCompansation();
      this.setState({ listdata: this.props.kDamageCompensationStore.getAllDamageCompensationStoreClass })
    } catch (e) {
      console.log(e);
    }
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
     
    console.log('entityDto.id=>',entityDto.id)

    this.setState({ tazminid: entityDto.id });
    this.Modal();
    
     setTimeout(() => {
      this.formRef.current?.setFieldsValue({ ...this.props.kDamageCompensationStore.getCreateDamageInput });
    }, 100);
  }








  public render() {

    const { getAllDamageCompensationStoreClass } = this.props.kDamageCompensationStore;
    const columns = [
      {
        title: 'Tazmin No',
        dataIndex: 'tazminNo',
        key: 'tazminNo',
      },

      {
        title: 'Takip No',
        dataIndex: 'takipNo',
        key: 'takipNo',
      },
      {
        title: 'Tazmin Tipi',
        dataIndex: 'tazminTipi',
        key: 'tazminTipi',
      },

      {
        title: 'Tazmin Statüsü',
        dataIndex: 'tazminStatusu',
        key: 'tazminStatusu',
        render: (text: string) => (text === 'Taslak' ? <Tag color="#2db7f5">Taslak</Tag> :
          text == 'TazminEksikEvrak' ? <Tag color="red">Tazmin Eksik Evrak</Tag> :
            text == 'TazminOlusturuldu' ? <Tag color="green">Tazmin Olusturuldu</Tag> :
              text == 'BolgeIslemde' ? <Tag color="orange">Bolge Islemde</Tag> :
                text == 'OperasyonBolgeMudurYardımcısıOnayında' ? <Tag color="blue">Operasyon Bolge Mudur Yardımcısı  Onayında</Tag> :
                  text == 'BolgeMuduruOnayında' ? <Tag color="gold">Bolge Muduru Onayında</Tag> :
                    text == 'OperasyonGMYOnayında' ? <Tag color="purple">Operasyon GMY Onayında</Tag> :
                      text == 'GmSatisMuduruOnayında' ? <Tag color="red">Gm Satis Muduru Onayında</Tag> :
                        text == 'GmMusteriIliskileriMuduruOnayında' ? <Tag color="processing">Gm MusteriIliskileri Muduru Onayında</Tag> :
                          text == 'SatisGMYOnayında' ? <Tag color="cyan">Satis GMY Onayında</Tag> :
                            <Tag color='yellow'>Bilinmiyor</Tag>),
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
            {console.log('item=>',item)}
            <Dropdown
              trigger={['click']}
              overlay={
                <Menu>
                <Menu.Item > <Link to={{ pathname: `/hasartazminguncelle/${item.tazminNo}`,state: { test:item.tazminNo }  }}> Düzenle </Link> </Menu.Item>
                  <Menu.Item >Görüntüle</Menu.Item>
                  <Menu.Item >Değerlendir</Menu.Item>
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
          <Card style={{ marginBottom: 20 }}>
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
                    )}{' '}
                  </Breadcrumb.Item>
                  <Breadcrumb.Item> {L('DamageCompensation')} </Breadcrumb.Item>
                  <Breadcrumb.Item>Hasar Tazmin Listesi </Breadcrumb.Item>
                </Breadcrumb>
              }
            ></PageHeader>
          </Card>

          <Card title="Filtrele">



            <Form>
              <Row>
                <Col span={6}  >                  
                    <Form.Item>
                        
                              <Radio.Group >
                                    <Space direction='vertical'>
                                      <Radio value={1}>Tazmin No</Radio>
                                      <Radio value={2}>Takip No</Radio>
                                      {/* <Radio value={3}>Kargo Kabul Fiş No</Radio> */}
                                    </Space>
                              </Radio.Group>
                          
                    </Form.Item>                          
                </Col>
                <Col span={4}  >
                  <Form.Item name='searchtxt'>
                    <Input type='number' />
                  </Form.Item>
                </Col>
              </Row>


              <Row>
                <Col span={5}>
                <Form.Item name='' label='Başlangıç Tarihi'>
             
                        <DatePicker placeholder='Tarih Seçiniz' />
         
               </Form.Item>
                </Col>


                <Col span={4}>
                <Form.Item name='' label='Bitiş Tarihi'>
                 
                        <DatePicker  placeholder='Tarih Seçiniz' />
            
               </Form.Item>
                </Col>

                <Col span={5}>
                <Form.Item name=''>
                 
                      <Space style={{ width: '100%' }}>
                        <Button type="primary"  icon={<SendOutlined />} htmlType="submit">
                        Filtrele
                        </Button>
                      </Space>
            
               </Form.Item>
                </Col>
            
              </Row>
            </Form> 
            <Table 
            loading={getAllDamageCompensationStoreClass === undefined ? true : false}
            columns={columns} 
            dataSource={getAllDamageCompensationStoreClass} />

          </Card>


              






        </React.Fragment>
      </>
    );
  }
}

export default DamageCompensationList;
