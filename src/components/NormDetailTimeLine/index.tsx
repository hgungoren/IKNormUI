/*eslint-disable */
import './index.less';
import React from 'react';
//import uuid from 'react-uuid';
import DateCart from '../DateCart';
import PropTypes from 'prop-types';
import { L } from '../../lib/abpUtility';
//import Status from '../../services/kNormDetail/dto/status';
import NormStatus from '../../services/kNorm/dto/normStatus';
import TalepDurumu from '../../services/kNorm/dto/talepDurumu';
import { Col, Descriptions, Modal, Row, Tag, Tooltip } from 'antd';
import { CheckCircleOutlined, ClockCircleOutlined, StopOutlined } from '@ant-design/icons';


//const { Step } = Steps;

const NormDetailTimeLine = ({ visible, onCancel, title, data,groupData, norm,toplam }) => {
  
  
    for (let index = 0; index < groupData.length; index++) {    
        toplam= groupData[index].employeeCount+toplam
    }

    console.log('toplam=>',toplam)
         
    return (
        <>
            <Modal title={title} centered visible={visible} onCancel={onCancel} width={'80%'} footer={[]}> 
                <>     
                    <Row gutter={0}> 
                        <Col xs={{ span: 24, offset: 0 }} sm={{ span: 8, offset: 0 }}>
                            <Descriptions column={1} size={'small'} title={L("RequestDetail")} bordered={true}>
                                {norm !== undefined && <>
                                    <Descriptions.Item key={'area_name' + norm.id} label={L("table.norm.area.name")}>{norm.bolgeAdi}</Descriptions.Item>
                                    <Descriptions.Item key={'branch_name' + norm.id} label={L("table.norm.branch.name")}>{norm.subeAdi}</Descriptions.Item>
                                    {/* <Descriptions.Item key={uuid()} label={L("table.norm.creator.user.name")}> {norm.user.firstName} {norm.user.lastName}  </Descriptions.Item> */}
                                    <Descriptions.Item key={'norm_position'+norm.id} label={L("table.norm.position")}>{norm.pozisyon}</Descriptions.Item>
                                    {norm.yeniPozisyon !== null && <Descriptions.Item key={'norm_newpositon'+norm.id} label={L("table.norm.newposition")}>{norm.yeniPozisyon}</Descriptions.Item>}
                                    <Descriptions.Item key={'norm_description' + norm.id} label={L("table.norm.description")}>{norm.aciklama}</Descriptions.Item>
                                    {norm.personelId > 0 && <Descriptions.Item key={'leavin_staff'+norm.id} label={L("table.norm.leaving.staff")}>{norm.personelAdi}</Descriptions.Item>}
                                    {norm.nedeni !== '' && <Descriptions.Item key={'norm_requestreason'+norm.id} label={L("table.norm.requestreason")}> {L(norm.nedeni)} </Descriptions.Item>}
                                    <Descriptions.Item key={'norm_requesttyp'+norm.id} label={L("table.norm.requesttype")}>{L(norm.turu)}</Descriptions.Item>
                                    <Descriptions.Item key={'norm_requsestdate'+norm.id} label={L("table.norm.requestdate")}>{<DateCart date={norm.creationTime} />}</Descriptions.Item>
                                    <Descriptions.Item key={'norm_requeststatus'+norm.id} label={L('table.norm.requeststatus')}>{(NormStatus[norm.normStatusValue] === NormStatus.Beklemede) ?

                                        <Tooltip placement="topLeft" title={L('Waiting')}> <Tag color={'rgb(250, 173, 20)'} icon={<ClockCircleOutlined />} className={'requeststatus'}> {TalepDurumu[norm.durumu]} </Tag ></Tooltip> :

                                        (NormStatus[norm.normStatusValue] === NormStatus.Iptal) ?

                                            <Tooltip placement="topLeft" title={L('Reject')}>   <Tag color={'rgb(250, 84, 28)'} icon={<StopOutlined />} className={'requeststatus'}> {TalepDurumu[norm.durumu]} </Tag ></Tooltip> :
                                            <Tooltip placement="topLeft" title={L('Approved')}> <Tag color={'rgb(29, 165, 122)'} icon={<CheckCircleOutlined />} className={'requeststatus'}> {TalepDurumu[norm.durumu]} </Tag ></Tooltip>
                                    }
                                    </Descriptions.Item>
                                </>
                                }

                            </Descriptions>
                        </Col> 



                         {
                             groupData.length >0 ? <Col xs={{ span: 3, offset: 1}} sm={{ span: 4, offset: 1}}>
                             <Descriptions column={1} size={'small'} title={L('table.branch.duty')} bordered={true}>
                                 {
                                 groupData !== undefined && groupData.map((record,index) => <>
                                     <Descriptions.Item key={index} >{record.gorev}</Descriptions.Item>
                                 </>)
                                 }
 
                             </Descriptions>
                         </Col>:null

                         }
                            
                         {
                                  groupData.length >0 ? <Col xs={{ span: 3, offset: 0 }} sm={{ span: 2, offset: 0 }}>
                                  <Descriptions column={1} size={'small'} title={L('table.branch.employeecount')} bordered={true}>                                    
                                      {
                                      groupData !== undefined && groupData.map((record) => <>
                                          <Descriptions.Item  key={'branch_employeecount' + groupData.id} className='norm-detail-left'>{record.employeeCount}</Descriptions.Item>
                                      </>)
                                      }         
                                  </Descriptions> 
                                    
                                   </Col>  :null 
                         }   
                                           
                         {
                                  groupData.length >0 ?  <Col xs={{ span: 3, offset: 0 }} sm={{ span: 2, offset: 0 }}>
                                  <Descriptions column={1} size={'small'} title={L('table.branch.normcount')} bordered={true}>
                                      {
                                      groupData !== undefined && groupData.map((record) => <>
                                          <Descriptions.Item key={'branch_normcount' + groupData.id} className='norm-detail-center'>{record.nomrCount}</Descriptions.Item>
                                      </>)
                                      }
      
                                  </Descriptions>
                              </Col>:null
                         }   
                        

                        {
                                  groupData.length >0 ?   <Col xs={{ span: 3, offset: 0 }} sm={{ span: 2, offset: 0 }}>
                                  <Descriptions column={1} size={'small'} title={L('table.branch.normgap')} bordered={true}>
                                      {
                                      groupData !== undefined && groupData.map((record) => <>
                                          <Descriptions.Item key={'branch_normgap' + groupData.id} className='norm-detail-center'>{record.norm}</Descriptions.Item>
                                      </>)
                                      }
      
                                  </Descriptions>
                              </Col>:null
                         }   
   

                    </Row>


                    <Row>


                    <Col xs={{ span: 24, offset: 0 }} sm={{ span: 8, offset: 0 }}></Col>

                          {
                             groupData.length >0 ? <Col xs={{ span: 3, offset: 1}} sm={{ span: 4, offset: 1}}>
                             <Descriptions column={1} size={'small'} title={L('table.branch.duty')} bordered={true}>
                                 {
                                 groupData !== undefined && groupData.map((record,index) => <>
                                     <Descriptions.Item key={index} >{record.gorev}</Descriptions.Item>
                                 </>)
                                 }
 
                             </Descriptions>
                         </Col>:null

                         }
                            
                         {
                                  groupData.length >0 ? <Col xs={{ span: 3, offset: 0 }} sm={{ span: 2, offset: 0 }}>
                                  <Descriptions column={1} size={'small'} title={L('table.branch.employeecount')} bordered={true}>                                    
                                      {
                                      groupData !== undefined && groupData.map((record) => <>
                                          <Descriptions.Item  key={'branch_employeecount' + groupData.id} className='norm-detail-left'>{record.employeeCount}</Descriptions.Item>
                                      </>)
                                      }         
                                  </Descriptions> 
                                    
                                   </Col>  :null 
                         }   
                                           
                         {
                                  groupData.length >0 ?  <Col xs={{ span: 3, offset: 0 }} sm={{ span: 2, offset: 0 }}>
                                  <Descriptions column={1} size={'small'} title={L('table.branch.normcount')} bordered={true}>
                                      {
                                      groupData !== undefined && groupData.map((record) => <>
                                          <Descriptions.Item key={'branch_normcount' + groupData.id} className='norm-detail-center'>{record.nomrCount}</Descriptions.Item>
                                      </>)
                                      }
      
                                  </Descriptions>
                              </Col>:null
                         }   
                        

                        {
                                  groupData.length >0 ?   <Col xs={{ span: 3, offset: 0 }} sm={{ span: 2, offset: 0 }}>
                                  <Descriptions column={1} size={'small'} title={L('table.branch.normgap')} bordered={true}>
                                      {
                                      groupData !== undefined && groupData.map((record) => <>
                                          <Descriptions.Item key={'branch_normgap' + groupData.id} className='norm-detail-center'>{record.norm}</Descriptions.Item>
                                      </>)
                                      }
      
                                  </Descriptions>
                              </Col>:null
                         }   
                            
                    </Row>
                
                           
                  
                </>
            </Modal>
        </>
    );
};

NormDetailTimeLine.propTypes = {
    visible: PropTypes.bool.isRequired,
    title: PropTypes.string
};

export default NormDetailTimeLine;



