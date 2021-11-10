import React, { Component } from 'react';
import {   
    Form,
    Select,
  
  } from 'antd';



const { Option } = Select;


class GonderenCariSelect extends  Component  {
    render() {
      return (
        <>
                       <Form.Item
                          label={
                            <label style={{ maxWidth: 150, minWidth: 150 }}>Gönderici Kodu</label>
                          }
                        >
                          <Select 
                          className="formInput" 
                          showSearch 
                          placeholder="Seçiniz" 
                          allowClear
                          >
                            <Option value="1000011">1000011</Option>
                            <Option value="1000012">1000012</Option>
                            <Option value="1000013">1000013</Option>
                            <Option value="1000014">1000014</Option>
                           
                          </Select>
                        </Form.Item>



                        <Form.Item
                          label={
                            <label style={{ maxWidth: 150, minWidth: 150 }}>Gönderici</label>
                          }
                        >
                          <Select 
                          className="formInput" 
                          showSearch 
                          placeholder="Seçiniz" 
                          allowClear
                          >
                            <Option value="1000011">1000011</Option>
                            <Option value="1000012">1000012</Option>
                            <Option value="1000013">1000013</Option>
                            <Option value="1000014">1000014</Option>
                           
                          </Select>
                        </Form.Item>
  
                        
        </>);
    }
  }



  export default  GonderenCariSelect