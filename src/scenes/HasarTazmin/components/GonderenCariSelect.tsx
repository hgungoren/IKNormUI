import React from 'react';
import {   
    Form,
    Input,
    Select,
  } from 'antd';
import KDamageCompensationStore from '../../../stores/kDamageCompensationStore';

  export interface ICProps {
    kDamageCompensationStore: KDamageCompensationStore;
  }

  
export interface IState {

  cariList: any;
  gonderiUnvanInput: string;
}
 


const { Option } = Select;


class GonderenCariSelect extends React.Component<ICProps,IState>  {

     state={
      cariList:[],
      gonderiUnvanInput:''
     };

    render() {
   
      const getcarilistdamageCompensation = async (id: number) => {
        try {
          await this.props.kDamageCompensationStore
            .getCariListDamageComppensation({ id: id })
        } catch (e) {
          console.log(e);
        }
      };
    

      const onSearch = (val) => {
        if (val.length > 3) {
          getcarilistdamageCompensation(val)
          this.setState({
            cariList: this.props.kDamageCompensationStore.getCariListDamage !== undefined && this.props.kDamageCompensationStore.getCariListDamage.map((value, index) =>
              <Option key={'cari' + value.kodu} value={value.kodu}> {value.unvan} </Option>
            )
          })
        }
      }

      
  
      const onChangeGondericiSelect = (res) => {

        this.setState({ gonderiUnvanInput: res })
        setTimeout(() => { console.log(this.state.gonderiUnvanInput) }, 100)
  
      }
  

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
                          onSearch={onSearch}
                          onChange={onChangeGondericiSelect}
                          >
                            { this.state.cariList }
                            
                           
                          </Select>
                        </Form.Item>



                        <Form.Item
                          label={
                            <label style={{ maxWidth: 150, minWidth: 150 }}>Gönderici</label>
                          }
                        >
                           <Input
                          className="formInput"
                          placeholder="Gönderici"
                          value={this.state.gonderiUnvanInput}
                        />
                        </Form.Item>
  
                        
        </>);
    }
  }



  export default  GonderenCariSelect