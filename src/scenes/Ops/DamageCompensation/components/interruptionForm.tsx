import React from 'react';

import {

  Button,
  Col,
  Divider,
  Form,
  FormInstance,
  Input,
  notification,
  Popconfirm,
  Row,
  Spin,
  Table,
} from 'antd';

import '../index.less';
import { L } from '../../../../lib/abpUtility';
import { AlertOutlined, CheckCircleTwoTone, DeleteOutlined } from '@ant-design/icons';
import InterruptionFormModal from '../components/interruptionFormModal';
import KDamageCompensationStore from '../../../../stores/kDamageCompensationStore';




export interface ICProps {
  price: string;
  kDamageCompensationStore:KDamageCompensationStore;
}


export interface IState {
  pageLoding: boolean;
  modalVisible: boolean;
}


class InterruptionForm extends React.Component<ICProps, IState>  {

  // formRefEvalution = React.createRef<FormInstance>();
  formRef = React.createRef<FormInstance>();
  state = {
    pageLoding: false,
    modalVisible: false
  };

  componentDidMount = async () => { }

  render() {


    //#region  SATIR EKLE ONCLICK


    const closeModal = () => { 
      this.setState({ modalVisible: false })
    }


    const OnClickAdd = () => {
      var kesintioraniSum = (dataSourceTable.reduce((a, v) => a = a + v.kesintiorani, 0))
      if (kesintioraniSum >= 100) {
        ValidateMessage(true, 'Bilgilendirme', 'Kesinti Orani %100 Gecmektedir.')
      } else {
        this.setState({ modalVisible: true })
      }
    }

    //#endregion


    //#region BILGILENDIRME MESAJI METOT
    const ValidateMessage = async (typ: boolean, headerMsg: string, msg: string) => {

      if (typ === true) {
        notification.open({
          icon: <AlertOutlined style={{ color: 'red' }} />,
          message: L(headerMsg),
          description: L(msg),
        })
      } else {
        notification.open({
          icon: <CheckCircleTwoTone style={{ color: 'green' }} />,
          message: L(headerMsg),
          description: L(msg),
        })
      }
    }

    //#endregion





    const dataSourceTable = [
      {
        key: '0',
        kesintibirimi: 'Edward King 0',
        kesintibirimkodu: '32',
        kesintiyapilacaksube: 'London, Park Lane no. 0',
        calismabaslangictarihi: '14.05.2021',
        calismabitistarihi: '14.05.2021',
        kesintiorani: 50,
        kesintitutari: '250'

      },
      {
        key: '1',
        kesintibirimi: 'Edward King 1',
        kesintibirimkodu: '32',
        kesintiyapilacaksube: 'London, Park Lane no. 1',
        calismabaslangictarihi: '14.05.2021',
        calismabitistarihi: '14.05.2021',
        kesintiorani: 10,
        kesintitutari: '250'
      },
    ];

    const columnsTable = [
      {
        title: 'Islem',
        dataIndex: 'operation',
        width: '3%',
        render: (_, record) =>
          dataSourceTable.length >= 1 ? (
            <Popconfirm title="Silinsin mi?" onConfirm={() => console.log()}>
              <DeleteOutlined />
            </Popconfirm>
          ) : null,
      },

      {
        title: 'Kesinti Birimi',
        dataIndex: 'kesintibirimi',
        width: '10%',
        editable: true,
      },
      {
        title: 'Kesinti Birim Kodu',
        dataIndex: 'kesintibirimkodu',
        width: '10%',
        editable: true,

      },
      {
        title: 'Kesinti Yapilacak Sube',
        dataIndex: 'kesintiyapilacaksube',
        width: '10%',
        editable: true,
      },

      {
        title: 'Calisma Baslangic Tarihi',
        dataIndex: 'calismabaslangictarihi',
        width: '10%',
        editable: true,
      },

      {
        title: 'Calisma Bitis Tarihi',
        dataIndex: 'calismabitistarihi',
        width: '10%',
        editable: true,
      },
      {
        title: 'Kesinti Orani',
        dataIndex: 'kesintiorani',
        width: '10%',
        editable: true,
      },

      {
        title: 'Kesinti Tutari',
        dataIndex: 'kesintitutari',
        width: '10%',
        editable: true,
      }

    ];



    return (
      <>

        <Spin spinning={this.state.pageLoding}
          tip='Isleminiz Tamamlaniyor.Havuza Yonlendiriliyorsunuz.'
          size='large'>


          <Divider orientation="left">{L('Odeme Bilgisi')}</  Divider>


          <Form labelCol={{ flex: '145px' }} labelAlign="right" wrapperCol={{ flex: 5 }} colon={false}>
            <Row>
              <Col span={8} xs={{ order: 12 }} sm={{ order: 12 }} md={{ order: 3 }} lg={{ order: 4 }} >
                <Form.Item label={L('Odenecek Tutar')} name="odenecek_tutar">
                  <Input disabled defaultValue={this.props.price} />
                </Form.Item>
              </Col>


            </Row>
          </Form>

          <Divider orientation="left">{L('Kesinti Tablosu')}</  Divider>
          <Table dataSource={dataSourceTable} columns={columnsTable} />
          <Button
            onClick={OnClickAdd}
            type="primary"
            style={{
              marginBottom: 16,
            }}
          >
            Satir Ekle
          </Button>

        
          < InterruptionFormModal
            closeModal={closeModal}
            visible={this.state.modalVisible}
            // formRef={this.formRef} 
            kDamageCompensationStore={this.props.kDamageCompensationStore}
            
            />

        </Spin>
      </>);
  }
}



export default InterruptionForm
