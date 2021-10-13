import React, { useState } from 'react';
import { Tabs, Card, Input, Row, DatePicker, Select, Radio, Form, Button, Checkbox, Upload } from 'antd';
import 'antd/dist/antd.css';
import './index.less';

import rules from './HasarTazmin.validation';
import { FormInstance } from 'antd/lib/form';
import FormItem from 'antd/lib/form/FormItem';
import { UploadOutlined } from '@ant-design/icons';

export interface Props {
  formRef: React.RefObject<FormInstance>;
}


const Demo = (props: Props) => {




  const { TabPane } = Tabs;
  const { Option } = Select;
  const [value, setValue] = React.useState(1);
  const [visible, setVisible] = useState(true);
  const [visibleTc, SetVisibleTc] = useState(false);
  const [visibleVk, SetVisibleVk] = useState(false);
  const [visibleSsba, SetVisibleSsba] = useState(false);
  const [visibleEmail, SetVisibleEmail] = useState(false);
  const [visibleSms, SetVisibleSms] = useState(false);

  const [activeTabKey, setActiveTabKey] = React.useState('1');

  const onChangeRadio = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
    if (e.target.value === 2) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };




  function onChangeTC(e) {
    console.log(`checked = ${e.target.checked}`);
    if (e.target.checked == true) { SetVisibleTc(true) } else { SetVisibleTc(false) }
  }

  function onChangeVk(e) {
    console.log(`checked = ${e.target.checked}`);
    if (e.target.checked === true) { SetVisibleVk(true) } else { SetVisibleVk(false) }
  }


  function onChangSsba(e) {
    console.log(`checked = ${e.target.checked}`);
    if (e.target.checked === true) { SetVisibleSsba(true) } else { SetVisibleSsba(false) }
  }

  function onChangMail(e) {
    console.log(`checked = ${e.target.checked}`);
    if (e.target.checked === true) { SetVisibleEmail(true) } else { SetVisibleEmail(false) }
  }

  function onChangSms(e) {
    console.log(`checked = ${e.target.checked}`);
    if (e.target.checked === true) { SetVisibleSms(true) } else { SetVisibleSms(false) }
  }





  const changeTab = (activeKey) => {
    console.log(activeKey);
    setActiveTabKey(activeKey);
  };



  function Btnileri() {
    setActiveTabKey("2")
  }

  function Btnileritzm() {
    setActiveTabKey("3")
  }
  function BtnGeri() {
    setActiveTabKey("1")
  }

  function BtnGeritzm() {
    setActiveTabKey("2")
  }



  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  ////resimm
  function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

    if (isJpgOrPng === false) {
      return false;
    } else {
      return true;
    }
  }


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

  return (
    <div>
      <Form ref={props.formRef} onFinish={onFinish}      {...formItemLayout} layout="horizontal">
        <Card title="Hasar Tazmin Formu Oluştur" className={'Genelcard'}>
          <Tabs defaultActiveKey="1" onChange={changeTab} activeKey={activeTabKey} tabBarGutter={50}  >
            <TabPane tab="Gönderi Bilgileri" key="1">
              <Row>
                <Card size="small" type="inner" className={'SorgulamaCard'}>
                  <Form.Item label="Kargo Takip No ">
                    <Radio.Group onChange={onChangeRadio} value={value}>
                      <Radio value={1}>Biliniyor</Radio>
                      <Radio value={2}>Bilinmiyor</Radio>
                    </Radio.Group>
                  </Form.Item>
                  {visible ? (
                    <Form.Item label="Takip No " >
                      <Input className={'ClassInput'} placeholder="Kargo Takip Numarası" />
                      <Input className={'SorgulamaInputButton'} type='button' value="Getir" />
                    </Form.Item>
                  ) : (
                    ''
                  )}
                </Card>
              </Row>
              <Card size="small" type="inner" className={'AltCard'}>
                {visible ? ('') : (
                  <Form.Item label="Kargo Kabul Fiş No " name={'kargoKabulFisNo'} rules={rules.takipNo}>
                    <Input placeholder="Kargo Kabul Fiş No" />
                  </Form.Item>
                )}

                <Form.Item label="Evrak Oluşturma Tarihi" name={'evrakOlusturmaTarihi'} rules={rules.takipNo}>
                  <DatePicker />
                </Form.Item>


                <Form.Item label="Evrak Seri Sıra No" name={'evrakSeriSiraNo'} rules={rules.takipNo}>
                  <Input type="number" placeholder="Evrak Seri Sıra No" />
                </Form.Item>

                <Form.Item label="Gönderici Kodu" name={'gondericiKodu'} rules={rules.takipNo}>
                  <Select

                    showSearch
                    placeholder="Seçiniz"
                    optionFilterProp="children"
                  >
                    <Option value="jack">1000011</Option>
                    <Option value="lucy">1000012</Option>
                    <Option value="tom">1000013</Option>
                    <Option value="tom">1000014</Option>
                    <Option value="tom">1000015</Option>
                  </Select>
                </Form.Item>

                <Form.Item label="Gönderici" name={'gondericiUnvan'} rules={rules.takipNo}>
                  <Input readOnly placeholder="Gönderen Cari Unvan" />
                </Form.Item>

                <Form.Item label="Çıkış Şube Adı" name={'cikisSubeAdi'} rules={rules.takipNo}>
                  <Select

                    showSearch
                    placeholder="Seçiniz"
                    optionFilterProp="children"
                  >
                    <Option value="jack">İncirli</Option>
                    <Option value="lucy">Kadıköy</Option>
                    <Option value="tom">Bağcılar</Option>
                  </Select>
                </Form.Item>


                <Form.Item label="Alıcı Kodu" name={'aliciKodu'} rules={rules.takipNo}>
                  <Select

                    showSearch
                    placeholder="Seçiniz"
                    optionFilterProp="children"
                  >
                    <Option value="jack">1000011</Option>
                    <Option value="lucy">1000012</Option>
                    <Option value="tom">1000013</Option>
                    <Option value="tom">1000014</Option>
                    <Option value="tom">1000015</Option>
                  </Select>
                </Form.Item>

                <Form.Item label="Alıcı" name={'aliciUnvan'} rules={rules.takipNo}>
                  <Input readOnly placeholder="Alıcı Cari Unvan" />
                </Form.Item>

                <Form.Item label="Varış Şube Adı" name={'varisSubeAdi'} rules={rules.takipNo}>
                  <Select

                    showSearch
                    placeholder="Seçiniz"
                    optionFilterProp="children"
                  >
                    <Option value="jack">İncirli</Option>
                    <Option value="lucy">Kadıköy</Option>
                    <Option value="tom">Bağcılar</Option>
                  </Select>
                </Form.Item>{' '}


                <Form.Item label="Kargo Tipi" name={'kargoTipi'} rules={rules.takipNo}>
                  <Select
                    placeholder="Lütfen Kargo Tipini Seçiniz"

                    allowClear
                  >
                    <Option value="male">Mi</Option>
                    <Option value="female">Dosya</Option>
                    <Option value="other">Paket</Option>
                  </Select>
                </Form.Item>




                <Form.Item label="Toplam Parça Adedi" name={'toplamParcaAdedi'} rules={rules.takipNo}>
                  <Input type="number" min={1} max={1000} placeholder="Toplam Parça Adedi" />
                </Form.Item>



                <FormItem>

                  <Button type="default" className={'btnileri'} onClick={Btnileri}   >
                    İleri
                  </Button>
                </FormItem>

              </Card>
            </TabPane>

            <TabPane tab="Tazmin Bilgileri" key="2">

              <Form.Item label="Tazmin No" name={'tazminno'} rules={rules.tazminNo}>
                <Input placeholder="Tazmin No" />
              </Form.Item>


              <Form.Item label="Tazmin Talep Tarihi" name={'tazmintaleptarihi'} rules={rules.tazminTalepTarihi}>
                <DatePicker />
              </Form.Item>

              <Form.Item label="Tazmin Tipi" name={'tazmintipi'} rules={rules.tazminTipi}>
                <Select
                  placeholder="Lütfen Tazmin Tipi Seçiniz"
                  allowClear
                >
                  <Option value="male">Mi</Option>
                  <Option value="female">Dosya</Option>
                  <Option value="other">Paket</Option>
                </Select>
              </Form.Item>

              <Form.Item label="Ödeme Şekli" name={'odemesekli'} rules={rules.odemeSekli}>
                <Select
                  placeholder="Lütfen Ödeme Şeklini Seçiniz"

                  allowClear
                >
                  <Option value="male">Mi</Option>
                  <Option value="female">Dosya</Option>
                  <Option value="other">Paket</Option>
                </Select>
              </Form.Item>

              <Form.Item label="Tazmin Müşterisi" name={'tazminmusterisi'} rules={rules.tazminMusterisi}>
                <Select
                  placeholder="Lütfen Tazmin Müşterisi Seçiniz"

                  allowClear
                >
                  <Option value="male">Mi</Option>
                  <Option value="female">Dosya</Option>
                  <Option value="other">Paket</Option>
                </Select>
              </Form.Item>


              <Form.Item label="Tazmin Müşterisi Kodu" name={'tazminmusterikodu'} rules={rules.tazminmusterikodu}>
                <Input placeholder="Tazmin Müşterisi Kodu" />
              </Form.Item>

              <Form.Item label="TC Kimlik No" name={'tckimlikno'} rules={rules.tckimlikno}  >
                <Checkbox onChange={onChangeTC}></Checkbox>

                {visibleTc ? (<Input placeholder="TC Kimlik No" />) : ('')}

              </Form.Item>

              <Form.Item label="Vergi Kimlik No" name={'vergino'} rules={rules.vergiKimlikNo}  >
                <Checkbox onChange={onChangeVk}></Checkbox>
                {visibleVk ? (<Input placeholder="Vergi Kimlik No" />) : ('')}
              </Form.Item>

              <Form.Item label="Ödeme Birimi/Bölge" name={'tazminmusterisi'} rules={rules.odemeBolge}>
                <Select
                  placeholder="Lütfen Ödeme Birimi/Bölge  Seçiniz"
                  allowClear >
                  <Option value="male">Mi</Option>
                  <Option value="female">Dosya</Option>
                  <Option value="other">Paket</Option>
                </Select>
              </Form.Item>

              <Form.Item label="Tazmini Farklı Bölgeye Ata" name={'test'}>
                <Checkbox onChange={onChangSsba}></Checkbox>
              </Form.Item>

              {visibleSsba ?
                (
                  <Form.Item label="Süreç Sahibi Bölgeye Ata"  >
                    <Select
                      placeholder="Lütfen Ödeme Birimi/Bölge  Seçiniz"

                      allowClear
                    >
                      <Option value="male">Mi</Option>
                      <Option value="female">Dosya</Option>
                      <Option value="other">Paket</Option>
                    </Select>
                  </Form.Item>

                )
                :
                (
                  ''
                )}





              <Form.Item label="Müşteri Bilgilendirmesi"   >
                <Checkbox onChange={onChangMail}>Email</Checkbox>
                {visibleEmail ?
                  (
                    <Input placeholder="Email Adresi Giriniz" />
                  )
                  :
                  (
                    ''

                  )}



                <Checkbox onChange={onChangSms}>Sms</Checkbox>
                {visibleSms ?
                  (
                    <Input placeholder="(0)5XX XXX XX XX" />
                  )
                  :
                  (
                    ''

                  )}
 
              </Form.Item>


              <FormItem>


                <Button type="primary" onClick={BtnGeri} className={'btngeri'}  >
                  Geri
                </Button>
                <Button type="primary" onClick={Btnileritzm} className={'btnileritzm'}  >
                  İleri
                </Button>
                <Button type="ghost" htmlType="submit" className={'btnkaydet'}  >
                  Kaydet
                </Button>
              </FormItem>





            </TabPane>

            <TabPane tab="Tazmin Belgeleri" key="3">
              <Card size="small" type="inner" className={'SorgulamaCard'}>

                <Form.Item label="Tazmin Dilekçesi">


                  <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="text"
                    multiple

                    beforeUpload={beforeUpload}

                  >
                    <Button icon={<UploadOutlined />}>Yükle</Button>
                  </Upload>



                </Form.Item>

                <Form.Item label="Fatura">
                  <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="text"
                    multiple
                    beforeUpload={beforeUpload}
                  >
                    <Button icon={<UploadOutlined />}>Yükle</Button>
                  </Upload>
                </Form.Item>

                <Form.Item label="Sevk İrsaliyesi">
                  <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="text"
                    multiple
                    beforeUpload={beforeUpload}
                  >
                    <Button icon={<UploadOutlined />}>Yükle</Button>
                  </Upload>
                </Form.Item>

                <Form.Item label="TC No/Vergi No" >
                  <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="text"
                    multiple
                    beforeUpload={beforeUpload}
                  >
                    <Button icon={<UploadOutlined />}>Yükle</Button>
                  </Upload>
                </Form.Item>

                <Form.Item label="Açılama" rules={rules.tazminNo}>

                  <Input.TextArea />

                </Form.Item>



                <FormItem>


                  <Button type="primary" onClick={BtnGeritzm} className={'btngeri'}  >
                    Geri
                  </Button>
                  <Button type="ghost" htmlType="submit" className={'btnkaydet'}   >
                    Kaydet
                  </Button>
                </FormItem>


              </Card>
            </TabPane>


          </Tabs>
        </Card>

      </Form>
    </div>
  );
};

export default Demo;
