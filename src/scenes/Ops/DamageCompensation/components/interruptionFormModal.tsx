import { Col, Form, FormInstance, Input, Modal, Row, Select, Spin, Tabs } from 'antd';
import { inject, observer } from 'mobx-react';
import React from 'react';
import { L } from '../../../../lib/abpUtility';
import Stores from '../../../../stores/storeIdentifier';
import KDamageCompensationStore from '../../../../stores/kDamageCompensationStore';
import uuid from 'react-uuid'


export interface ICProps {
    visible: boolean
    closeModal: () => void; 
    //formRef: React.RefObject<FormInstance>;
    kDamageCompensationStore:KDamageCompensationStore,
    
}

export interface IState {
    selectNotFound:boolean;
    datakesintibirim:any;
    kesintibirimkodu:string;
    kesintiyapilacakunvan:string;
}

//const { Option } = Select;
const TabPane = Tabs.TabPane;


@inject(Stores.KDamageCompensationStore)

@observer
class InterruptionFormModal extends React.Component<ICProps, IState> { 

    formRef = React.createRef<FormInstance>();

    state = {
        selectNotFound:true,
        datakesintibirim:this.props.kDamageCompensationStore.getSubeListDamage,
        kesintibirimkodu:'',
        kesintiyapilacakunvan:''
    }; 



     //#region Sube ve aktarma listesi
     OnSelectKesintiBirim = async ()=>{
         await this.props.kDamageCompensationStore.getSubeAktarmaListDamageComppensation();
        this.setState({datakesintibirim :this.props.kDamageCompensationStore.getSubeListDamage})
    }

    //#endregion  



//#region   
OnselectKesintiBirim =(e)=>{
    
    //e=> 3120000100000000000-1701
    this.setState({kesintibirimkodu: e.split('-')[1] })


    console.log('kesintibirimkodu=>',this.state.kesintibirimkodu)
    this.formRef.current?.setFieldsValue({
        'kesintibirimkodu':this.state.kesintibirimkodu,
        'kesintiyapilacakunvan':'test'
        });



}
 //#endregion


 async componentDidMount() {
    await this.OnSelectKesintiBirim();
  }





 
    render() {

        const { Option } = Select;
   
    

     const optionsKesintiBirimList = this.state.datakesintibirim !== undefined && this.state.datakesintibirim.map(d =>
         <Option key={uuid()} value={d.objId+'-'+d.kodu} >{d.adi}</Option>);

        



        const formItemLayout = {
            labelCol: {
                xs: { span: 10 },
                sm: { span: 10 },
                md: { span: 10 },
                lg: { span: 10 },
                xl: { span: 10 },
                xxl: { span: 10 },
            },
            wrapperCol: {
                xs: { span: 14 },
                sm: { span: 14 },
                md: { span: 18 },
                lg: { span: 18 },
                xl: { span: 18 },
                xxl: { span: 18 },
            },
        };

        return (
            <>
                <Modal
                    width={'50%'}
                    visible={this.props.visible}
                    cancelText={L('GiveUp')}
                    okText={L('Save')}
                    onCancel={() => this.props.closeModal() }
                    //onOk={this.onCreate}

                    destroyOnClose={true}
                >
                    <Form ref={this.formRef}>
                        <Tabs defaultActiveKey={'1'} size={'large'}>
                            <TabPane tab={L('Kesinti Form')} key={'1'}>
                                <Row >
                                    <Col
                                        xs={{ span: 24, offset: 0 }}
                                        sm={{ span: 24, offset: 0 }}
                                        md={{ span: 15, offset: 0 }}
                                        lg={{ span: 15, offset: 2 }}
                                        xl={{ span: 15, offset: 2 }}
                                        xxl={{ span: 15, offset: 2 }}
                                    >
                                        <Form.Item label={L('Kesinti Birimi')} {...formItemLayout} name={'kesintibirimi'}
                                            rules={[
                                                { required: true, message: L('MissingInputEmpty') },
                                            ]}
                                        >
                                              <Select                                                           
                                                                showSearch
                                                                placeholder={L('PleaseSelect')}
                                                                notFoundContent={this.state.selectNotFound ? <Spin size="small" /> : null}
                                                                showArrow={true}
                                                                filterOption={false}
                                                         defaultActiveFirstOption={false}                                                                                 //onClick={this.OnSelectKesintiBirim}
                                                         onSelect={this.OnselectKesintiBirim}                                
                                                                >
                                                                {optionsKesintiBirimList}
                                                                
                                                  </Select>
                                        </Form.Item>

                                        <Form.Item label={L('Kesinti Birim Kodu')}  {...formItemLayout} name={'kesintibirimkodu'}
                                            rules={[
                                                { required: true, message: L('MissingInputEmpty') },
                                            ]}>
                                            <Input disabled  />
                                        </Form.Item>

                                        <Form.Item label={L('Kesinti Yapilacak Unvan')} {...formItemLayout} name={'kesintiyapilacakunvan'}
                                            rules={[
                                                { required: true, message: L('MissingInputEmpty') },
                                            ]}>
                                            <Input disabled />
                                        </Form.Item>

                                        <Form.Item label={L('Calisma Baslangic Tarihi')}  {...formItemLayout} name={'adres'}
                                            rules={[
                                                { required: true, message: L('MissingInputEmpty') },
                                            ]}>
                                            <Input />
                                        </Form.Item>

                                        <Form.Item label={L('Calisma Bitis Tarihi')}  {...formItemLayout} name={'mahallesi'}  >
                                            <Input  />
                                        </Form.Item>

                                        <Form.Item label={L('Kesinti Orani')}  {...formItemLayout} name={'cadde'}
                                            rules={[
                                                { required: true, message: L('MissingInputEmpty') },
                                            ]}>
                                            <Input />
                                        </Form.Item>

                                        <Form.Item label={L('Kesinti Tutari')}  {...formItemLayout} name={'sokagi'}
                                            rules={[
                                                { required: true, message: L('MissingInputEmpty') },
                                            ]}>
                                            <Input disabled placeholder='otomatik hesaplanacak' />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </TabPane>
                        </Tabs>
                    </Form>
                </Modal>
            </>);
    }
}



export default InterruptionFormModal

