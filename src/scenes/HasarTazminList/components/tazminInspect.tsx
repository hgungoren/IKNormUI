
import React from 'react';


import {  Input, Modal, Tabs, Form, Card, Radio } from 'antd';

import { L } from '../../../lib/abpUtility';
import { FormInstance } from 'antd/lib/form';



const TabPane = Tabs.TabPane;

export interface ICreateOrUpdateUserProps {
  visible: boolean;
  onCancel: () => void;
  modalType: string;
  onCreate: () => void;

  formRef: React.RefObject<FormInstance>;
}

class TazminInspectModal extends React.Component<ICreateOrUpdateUserProps> {
  state = {
    confirmDirty: false,
    
  };

  
  

  render() {
  

  const formItemLayout = {
    labelCol: {
      lg: { span: 5 },
      xs: { span: 5 },
      sm: { span: 9 },
      md: { span: 7 },
   
  
      
      
    },
    wrapperCol: {
      lg: { span: 8 },
      xs: { span: 8 },
      sm: { span: 12 },
      md: { span: 12 },
   
    
   
    },
    };
  

    const { visible, onCancel, onCreate } = this.props;


    return (
      <Modal
        width={'80%'}
        visible={visible}
        cancelText={L('GiveUp')}
        okText={L('Save')}
        onCancel={onCancel}
        onOk={onCreate}
        title='Hasar Tazmin Detayı'
        destroyOnClose={true}>
        <Form ref={this.props.formRef}      {...formItemLayout}>
          <Tabs defaultActiveKey='1' size={'small'} tabBarGutter={64}>
             <TabPane tab="Gönderi Bilgileri" key="1">
             <Card size="small" type="inner" className={'AltCard'}>
               

             
             
           
                <Form.Item label="Kargo Takip No ">

                      <Radio.Group  >
                        <Radio value={1}>Biliniyor</Radio>
                        <Radio value={2}>Bilinmiyor</Radio>
                      </Radio.Group>
                   </Form.Item>
                     
                  <Form.Item label="Takip No " >

                        <Input readOnly className={'ClassInput'} placeholder="Kargo Takip Numarası" />


                   </Form.Item>
                
          

  
       
            
                     <Form.Item label="Kargo Kabul Fiş No "  >
                    <Input readOnly placeholder="Kargo Kabul Fiş No" />
                    </Form.Item>
         

          
                
                  <Form.Item label="Evrak Oluşturma Tarihi"  >
                  <Input readOnly type="number" placeholder="Tarih" />
                  </Form.Item>
            
        
                  <Form.Item label="Evrak Seri Sıra No"  >
                  <Input readOnly type="number" placeholder="Evrak Seri Sıra No" />
                  </Form.Item>
              
            

                
                  <Form.Item label="Gönderici Kodu"  >
                  <Input  readOnly placeholder="Gönderen Kodu" />
                  </Form.Item>
              

              
                
                  <Form.Item label="Gönderici" name={'gondericiUnvan'} >
                  <Input  readOnly placeholder="Gönderen Cari Unvan" />
                  </Form.Item>
           

        
                <Form.Item label="Çıkış Şube Adı" name={'cikisSubeAdi'} >
                <Input  readOnly placeholder="Çıkış Şube" />
                  </Form.Item>
            
         
                  <Form.Item label="Alıcı Kodu" name={'aliciKodu'} >
                  <Input  readOnly placeholder="Alıcı Kodu" />
                  </Form.Item>
             

         
                
                  <Form.Item label="Alıcı" name={'aliciUnvan'}>
                  <Input  readOnly placeholder="Alıcı Cari Unvan" />
                  </Form.Item>
              

           
                <Form.Item label="Varış Şube Adı" name={'varisSubeAdi'} >
                <Input  readOnly placeholder="Varış Şube Adı" />
                  </Form.Item>{' '}
              
        
                <Form.Item label="Kargo Tipi" name={'kargoTipi'} >
                <Input  readOnly placeholder="Kargo Tipi" />
                  </Form.Item>
           

         
                
                  <Form.Item  label="Toplam Parça Adedi" name={'toplamParcaAdedi'} >
                  <Input  readOnly type="number" min={1} max={1000}  placeholder="Toplam Parça Adedi" />
                  </Form.Item>
          


             
       
              </Card>
         </TabPane>

         <TabPane tab="Tazmin Bilgileri" key="2">
                 
                 <Form.Item label="Tazmin No" name={'tazminno'} >
                   <Input   placeholder="Tazmin No" />
                   </Form.Item>


                   <Form.Item label="Tazmin Talep Tarihi" name={'tazmintaleptarihi'}>
                   <Input  readOnly placeholder="Tanzim Talep Tarihi" />
                   </Form.Item>
           


                   
                 <Form.Item label="Tazmin Tipi" name={'tazmintipi'} >
                 <Input  readOnly placeholder="Tanzim Tipi" />

                   </Form.Item>


                     
                 <Form.Item label="Ödeme Şekli" name={'odemesekli'}  >
                 <Input  readOnly placeholder="Ödeme Şekli" />

                   </Form.Item>


                           
                 <Form.Item label="Tazmin Müşterisi" name={'tazminmusterisi'}  >
                 <Input  readOnly placeholder="Tazmin Müşterisi" />
                   </Form.Item>

                   
                   <Form.Item label="Tazmin Müşterisi Kodu" name={'tazminmusterikodu'} >
                   <Input  readOnly placeholder="Tazmin Müşterisi Kodu" />
                   </Form.Item>



                   <Form.Item label="TC Kimlik No" name={'tckimlikno'}   >
                
                   <Input  readOnly  placeholder="TC Kimlik No" />  
                                   
                       



                   </Form.Item>



                   
                   <Form.Item label="Vergi Kimlik No"  >

                     
                    
                       <Input  placeholder="Vergi Kimlik No" />  
                    


           


                   </Form.Item>



                   <Form.Item label="Ödeme Birimi/Bölge" name={'tazminmusterisi'} >
                   <Input  readOnly  placeholder="Ödeme Birimi/Bölge" />  
                   </Form.Item>


            



               
                       <Form.Item label="Süreç Sahibi Bölgeye Ata"  >
                     
                       <Input  readOnly  placeholder="Süreç Sahibi Bölgeye Ata" />  
                         </Form.Item>
 
    
                   <Form.Item label="Müşteri Bilgilendirmesi"   >
               
                       <Input  readOnly  placeholder="Email Adresi Giriniz" />                            
              
                    
                       <Input  readOnly  placeholder="(0)5XX XXX XX XX" />                          
                   

                

                   </Form.Item>


  




           </TabPane>

          </Tabs>
        </Form>
      </Modal>
    );
  }
}
  
  export default TazminInspectModal;
  