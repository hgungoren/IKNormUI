import React, { Component } from 'react';
import {   
    Form,
    Input,
  
  } from 'antd';
import rules from '../HasarTazmin.validation';





class FarkliCari extends  Component  {
    render() {
      return (
        <>

                        <Form.Item
                        name='tazmin_Musteri_Unvan'
                        rules={rules.Tazmin_Musteri_Unvan}
                          label={
                            <label style={{ maxWidth: 150, minWidth: 150 }}>Cari Unvan</label>
                          }
                        >
                          <Input placeholder='Tanzim Müşterisi' className="formInput"></Input>
                        </Form.Item>
  
                        
        </>);
    }
  }



  export default  FarkliCari