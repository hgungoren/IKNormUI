import React, { Component } from 'react';
import {   
    Form,
    Input,
  
  } from 'antd';





class FarkliCari extends  Component  {
    render() {
      return (
        <>
                       <Form.Item
                          label={
                            <label style={{ maxWidth: 150, minWidth: 150 }}>Tanzim Müşterisi</label>
                          }
                        >
                          <Input placeholder='Tanzim Müşterisi' className="formInput"></Input>
                        </Form.Item>
  
                        
        </>);
    }
  }



  export default  FarkliCari