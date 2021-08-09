/*eslint-disable */
import * as React from 'react';
import { L } from '../../lib/abpUtility';
import { FormInstance } from 'antd/lib/form';
import rules from './createNormForm.validation';
import TalepNedeni from '../../services/kNorm/dto/talepNedeni';
import TalepTuru from '../../services/kNorm/dto/talepTuru';
import { PagedResultDto } from '../../services/dto/pagedResultDto';
import { Input, Modal, Tabs, Form, Select, Button, Timeline, Col, Row } from 'antd';
import { GetKPersonelOutput } from '../../services/kPersonel/dto/getKPersonelOutput';
import { GetKInkaLookUpTableOutput } from '../../services/kInkaLookUpTable/dto/getKInkaLookUpTableOutput';
import './index.less';
import { MailOutlined } from '@ant-design/icons';
import { GetAllHierarchyOutput } from '../../services/kHierarchy/dto/getAllHierarchyOutput';
import QueueAnim from 'rc-queue-anim';

const TabPane = Tabs.TabPane;
const { TextArea } = Input;
const { Option } = Select;

export interface ICreateNormFormProps {
  tip: string;
  subeId: number;
  visible: boolean;
  normCount: number;
  modalType: string;
  onCancel: () => void;
  onCreateNorm: () => void;
  formRef: React.RefObject<FormInstance>;
  employees: PagedResultDto<GetKPersonelOutput>;
  hierarchy: GetAllHierarchyOutput[];
  position: PagedResultDto<GetKInkaLookUpTableOutput>;
}

class CreateNormForm extends React.Component<ICreateNormFormProps> {

  state = {
    confirmDirty: false,
    defaultActiveKey: {
      "name": "Next",
      "pane": "PositionSelect",
      "visible": false
    },
    employeeVisible: true,
    positionVisible: true,
    newPositionVisible: true,
    normRequestReasonVisible: true,
    descriptionVisible: true,
    talepTuru: '',
    buttonVisible: false
  };


  changeActiveTab = () => {

    const form = this.props.formRef.current;
    form!.validateFields().then(async (values: any) => {
      this.setState({
        defaultActiveKey: {
          "name": this.state.defaultActiveKey.name === "Back" ? "Next" : "Back",
          "pane": this.state.defaultActiveKey.pane === "AuthoritiesToApprove" ? "PositionSelect" : "AuthoritiesToApprove",
          "visible": this.state.defaultActiveKey.name === "Next" ? true : false
        }
      })
    })
  }


  visibleEmployee = (param) => {
    if (param === "Ayrilma") {
      this.setState({ employeeVisible: !this.state.employeeVisible })
    }
    else
      this.setState({ employeeVisible: true })

  }



  onCancel = () => {

    const form = this.props.formRef.current;
    this.setState({
      confirmDirty: false,
      defaultActiveKey: {
        "name": "Next",
        "pane": "PositionSelect",
        "visible": false
      },
      employeeVisible: true,
      positionVisible: true,
      newPositionVisible: true,
      normRequestReasonVisible: true,
      descriptionVisible: true,
      talepTuru: '',
      buttonVisible: false
    })


    form?.resetFields();
  }


  visibleChangeFormItems = (param) => {

    const form = this.props.formRef.current;
    form!.resetFields(['Pozisyon', 'Aciklama', 'TalepNedeni', 'PersonelId', 'YeniPozisyon'])

    this.setState({
      positionVisible: true,
      normRequestReasonVisible: true,
      descriptionVisible: true,
      newPositionVisible: true,
      buttonVisible: false
    });

    if (param === 'Norm_Doldurma') {

      this.setState({
        positionVisible: false,          // Açık
        normRequestReasonVisible: false, // Açık
        descriptionVisible: false,       // Açık
        newPositionVisible: true,        // Kapalı
        talepTuru: ''
      });
    }

    else if (param === 'Norm_Arttir') {
      this.setState({
        positionVisible: false,
        normRequestReasonVisible: false,
        descriptionVisible: false,
        newPositionVisible: true,  // Kapalı
        talepTuru: param,
        employeeVisible: true
      });
    }

    else if (param === 'Norm_Kaydir') {

      this.setState({
        positionVisible: false,
        newPositionVisible: false,
        descriptionVisible: false,
        normRequestReasonVisible: true,
        talepTuru: '',
        employeeVisible: true
      });
    }
    else { }
  }

  render() {

    const formItemLayout = {
      labelCol: {
        xs: { span: 6 },
        sm: { span: 6 },
        md: { span: 6 },
        lg: { span: 6 },
        xl: { span: 6 },
        xxl: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 18 },
        sm: { span: 18 },
        md: { span: 18 },
        lg: { span: 18 },
        xl: { span: 18 },
        xxl: { span: 18 },
      },
    };

    const { tip, visible, onCancel, employees, position, onCreateNorm, subeId, normCount, hierarchy } = this.props;

    return (
      <Modal
        footer={
          [

            !this.state.buttonVisible && (<Button key="next" onClick={this.changeActiveTab} >
              {L(this.state.defaultActiveKey.name)}
            </Button>)

          ]
        }
        onCancel={() => { onCancel(); this.onCancel(); }}
        width={'90%'}
        visible={visible}
        cancelText={L('Cancel')}
        okText={L('OK')}
        title={L('Position')}
        destroyOnClose={true} >

        <Form ref={this.props.formRef}   >
          <Tabs
            defaultActiveKey={this.state.defaultActiveKey.pane}
            size={'small'} tabBarGutter={64}
            activeKey={this.state.defaultActiveKey.pane}>

            <TabPane tab={L('PositionSelect')} key={'PositionSelect'}>

              <Form.Item initialValue={subeId} name='subeObjId' rules={rules.subeObjId}>
                <Input style={{ display: 'none' }} />
              </Form.Item>

              <Form.Item initialValue={tip} name='tip' rules={rules.tip}>
                <Input style={{ display: 'none' }} />
              </Form.Item>

              <Form.Item label={L('RequestType')} {...formItemLayout} name={'TalepTuru'} rules={rules.requestType}>
                <Select placeholder={L('PleaseSelect')} onChange={this.visibleChangeFormItems}>
                  {
                    Object.keys(TalepTuru).map((value) => <Option key={value} value={value}> {TalepTuru[value]}  </Option>)
                  }
                </Select>
              </Form.Item>

              {
                !this.state.positionVisible && (<Form.Item label={L('Position')} {...formItemLayout} name={'Pozisyon'} rules={rules.position}>
                  <Select placeholder={L('PleaseSelect')} >
                    {
                      position === undefined
                        ? []
                        : position.items.map(
                          (key) => <Option key={key.adi} value={key.adi}> {key.adi} </Option>
                        )
                    }
                  </Select>
                </Form.Item>)
              }

              {
                !this.state.newPositionVisible && (<Form.Item label={L('NewPosition')} {...formItemLayout} name={'YeniPozisyon'} rules={rules.newPosition}>
                  <Select placeholder={L('PleaseSelect')} >
                    {
                      position === undefined
                        ? []
                        : position.items.map(
                          (key) => <Option key={key.adi + 'x'} value={key.adi}> {key.adi} </Option>
                        )
                    }
                  </Select>
                </Form.Item>)
              }

              {
                !this.state.normRequestReasonVisible && (<Form.Item label={L('NormRequestReason')} {...formItemLayout} name={'TalepNedeni'} rules={rules.requestReason}>
                  <Select placeholder={L('PleaseSelect')} onChange={this.visibleEmployee}>
                    {
                      Object.keys(TalepNedeni).map((value) => <>{

                        // this.state.talepTuru === 'Norm_Arttir' && value === 'Ayrilma'
                        //   ? ''
                        //   : < Option key={value} value={value}> {TalepNedeni[value]} </Option>

                        normCount <= employees.items.length && value !== 'Ayrilma' ? '' : < Option key={value} value={value}> {TalepNedeni[value]} </Option>
                      }</>)
                    }
                  </Select>
                </Form.Item>)
              }

              {
                !this.state.employeeVisible && (<Form.Item label={L('Employee')} {...formItemLayout} name={'PersonelId'} rules={rules.employeeId}>
                  <Select placeholder={L('PleaseSelect')} >
                    {
                      employees.items.map((x) => <Option key={x.objId} value={x.objId}> {x.ad} {x.soyad} </Option>)
                    }
                  </Select>
                </Form.Item>)
              }

              {
                !this.state.descriptionVisible && (<Form.Item label={L('Description')} {...formItemLayout} name={'Aciklama'} rules={rules.description}>
                  <TextArea rows={8} />
                </Form.Item>)
              }

            </TabPane>
            <TabPane className={'form-tabPane'} tab={L('AuthoritiesToApprove')} key={'AuthoritiesToApprove'} forceRender={true}>


              {
                (hierarchy !== undefined && this.state.defaultActiveKey.visible) && <Timeline className={'form-timeline'}>



                  <QueueAnim delay={100} className="queue-simple">
                    {
                      hierarchy !== undefined && hierarchy.map((x, row) => <div key={row}> 
                                   {
                                     console.log(x)
                                   }
                        <Timeline.Item className={'form-timeline-item'} dot={<MailOutlined className={'form-icon form-success'} />}>
                          <div className="form-item-div">
                            <p className={'form-tile-line-p'}>
                              <Row>
                                <Col xs={{ span: 6, offset: 0 }} sm={{ span: 6, offset: 0 }} md={{ span: 6, offset: 0 }} lg={{ span: 6, offset: 0 }} xl={{ span: 6, offset: 0 }} xxl={{ span: 6, offset: 0 }} >            {x.title}            </Col>
                                <Col xs={{ span: 3, offset: 0 }} sm={{ span: 3, offset: 0 }} md={{ span: 3, offset: 0 }} lg={{ span: 3, offset: 0 }} xl={{ span: 3, offset: 0 }} xxl={{ span: 3, offset: 0 }} >            {x.firstName}        </Col>
                                <Col xs={{ span: 3, offset: 0 }} sm={{ span: 3, offset: 0 }} md={{ span: 3, offset: 0 }} lg={{ span: 3, offset: 0 }} xl={{ span: 3, offset: 0 }} xxl={{ span: 3, offset: 0 }} >            {x.lastName}         </Col>
                                <Col xs={{ span: 8, offset: 0 }} sm={{ span: 8, offset: 0 }} md={{ span: 8, offset: 0 }} lg={{ span: 8, offset: 0 }} xl={{ span: 8, offset: 0 }} xxl={{ span: 8, offset: 0 }} >   <strong> {x.mail} </strong>   </Col>
                              </Row>
                            </p>
                          </div>
                        </Timeline.Item></div>
                      )
                    }
                  </QueueAnim>
                </Timeline>
              }

              {
                !this.state.buttonVisible && (<Button onClick={onCreateNorm} className={'right'} type="primary">{L('Send')}</Button>)
              }
            </TabPane>
          </Tabs>
        </Form>
      </Modal >
    );
  }
}
export default CreateNormForm;
