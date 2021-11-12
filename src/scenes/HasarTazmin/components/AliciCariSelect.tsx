import React  from 'react';
import {   
    Form,
    Input,
    Select,
  
  } from 'antd';

  import KDamageCompensationStore from '../../../stores/kDamageCompensationStore';
import rules from '../HasarTazmin.validation';

  export interface ICProps {
    kDamageCompensationStore: KDamageCompensationStore;
  }

  
export interface IState {

  cariList: any;
  aliciUnvanInput: string;

 
}
 

const { Option } = Select;


class AliciCariSelect   extends React.Component<ICProps,IState>  {  
  state={
    cariList:[],
    aliciUnvanInput: '',

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



      const onChangeAliciSelect = (res) => {

        this.setState({ aliciUnvanInput: res })
        setTimeout(() => { console.log(this.state.aliciUnvanInput) }, 100)
      }
  
      return (
        <>
                       <Form.Item
                       name='Tazmin_Musteri_Kodu'
                       rules={rules.Tazmin_Musteri_Kodu}
                          label={
                            <label style={{ maxWidth: 150, minWidth: 150 }}>Alici Kodu</label>
                          }
                        >
                          <Select 
                          className="formInput" 
                          showSearch 
                          placeholder="Seçiniz" 
                          allowClear
                          onSearch={onSearch}
                          onChange={onChangeAliciSelect}
                          >
                             { this.state.cariList }
                           
                          </Select>
                        </Form.Item>
  

                        <Form.Item
                         name='Tazmin_Musteri_Unvan'
                         rules={rules.Tazmin_Musteri_Unvan}
                          label={
                            <label style={{ maxWidth: 150, minWidth: 150 }}>Alici</label>
                          }
                        >
                          <Input
                          
                          className="formInput"
                          placeholder="Alıcı"
                          value={this.state.aliciUnvanInput}
                        />
                        </Form.Item>
                        
        </>);
    }
  }



  export default  AliciCariSelect