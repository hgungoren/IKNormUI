import * as React from 'react';
import { L } from '../../lib/abpUtility';
import { FormInstance } from 'antd/lib/form';
import rules from './createNormForm.validation';
import TalepNedeni from '../../services/kNorm/dto/talepNedeni';
import TalepTuru from '../../services/kNorm/dto/talepTuru';
import { PagedResultDto } from '../../services/dto/pagedResultDto';
import { Input, Modal, Tabs, Form, Select, Button, Timeline, Row, Col } from 'antd';
import { GetKPersonelOutput } from '../../services/kPersonel/dto/getKPersonelOutput';
import { GetKInkaLookUpTableOutput } from '../../services/kInkaLookUpTable/dto/getKInkaLookUpTableOutput';

const TabPane = Tabs.TabPane;
const { TextArea } = Input;
const { Option } = Select;

export interface ICreateNormFormProps {
  visible: boolean;
  modalType: string;
  formRef: React.RefObject<FormInstance>;
  onCancel: () => void;
  onCreateNorm: () => void;
  employees: PagedResultDto<GetKPersonelOutput>;
  position: PagedResultDto<GetKInkaLookUpTableOutput>;
  normCount: number;
  subeId: number;
}

class CreateNormForm extends React.Component<ICreateNormFormProps> {

  state = {
    confirmDirty: false,
    defaultActiveKey: {
      "name": "Next",
      "pane": "PositionSelect"
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
          "pane": this.state.defaultActiveKey.pane === "AuthoritiesToApprove" ? "PositionSelect" : "AuthoritiesToApprove"
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


    // let normCount = this.props.normCount;
    // let employeesCount = this.props.employees.items.length;

    if (param === 'Norm_Doldurma') {

      //   message,  if (normCount < employeesCount) {
      //   message.error({
      //     content: L('InsufficientNormCount'),
      //     style: {
      //       marginTop: '12vh',
      //     },
      //   })
      //   this.setState({ buttonVisible: true })
      //   return;
      // }

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

    const { visible, onCancel, employees, position, onCreateNorm, subeId, normCount } = this.props;

    const mails = [
      {
        "id": 1,
        "firstname": "İsim",
        "lastname": "Soyisim",
        "name": "Bölge IK Müdürü",
        "mail": "info@suratkargo.com.tr"
      },
      {
        "id": 2,
        "firstname": "İsim",
        "lastname": "Soyisim",
        "name": "Bölge IK Müdür Yardımcısı",
        "mail": "info@suratkargo.com.tr"
      },
      {
        "id": 3,
        "firstname": "İsim",
        "lastname": "Soyisim",
        "name": "Bölge OP Müdürü",
        "mail": "info@suratkargo.com.tr"
      },
      {
        "id": 4,
        "firstname": "İsim",
        "lastname": "Soyisim",
        "name": "Bölge OP Müdür Yardımcısı",
        "mail": "info@suratkargo.com.tr"
      },
      {
        "id": 5,
        "firstname": "İsim",
        "lastname": "Soyisim",
        "name": "Genel Müdürlük",
        "mail": "info@suratkargo.com.tr"
      }
    ]

    return (
      <Modal
        footer={
          [

            !this.state.buttonVisible && (<Button key="next" onClick={this.changeActiveTab} >
              {L(this.state.defaultActiveKey.name)}
            </Button>)

          ]
        }
        onCancel={onCancel}
        width={1000}
        visible={visible}
        cancelText={L('Cancel')}
        okText={L('OK')}
        title={L('Position')}
        destroyOnClose={true} >

        {/* <Form ref={this.props.formRef}
          initialValues={{
            TelepTuru: L('PleaseSelect'),
            Pozisyon: L('PleaseSelect'),
            YeniPozisyon: L('PleaseSelect'),
            TelepNedeni: L('PleaseSelect'),
            PersonelId: L('PleaseSelect')
          }}> */}

        <Form ref={this.props.formRef}   >
          <Tabs
            defaultActiveKey={this.state.defaultActiveKey.pane}
            size={'small'} tabBarGutter={64}
            activeKey={this.state.defaultActiveKey.pane}>

            <TabPane tab={L('PositionSelect')} key={'PositionSelect'}>

              <Form.Item initialValue={subeId} name='subeObjId' rules={rules.subeObjId}>
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
            <TabPane tab={L('AuthoritiesToApprove')} key={'AuthoritiesToApprove'} forceRender={true}>
              <Row>
                <Col className={'mt-50'}
                  xs={{ span: 21, offset: 3 }}
                  sm={{ span: 21, offset: 3 }}
                  md={{ span: 21, offset: 3 }}
                  lg={{ span: 21, offset: 3 }}
                  xl={{ span: 21, offset: 3 }}
                  xxl={{ span: 21, offset: 3 }}>
                  <Timeline>
                    {
                      mails.map((s) =>
                        <Timeline.Item key={s.id}>
                          <Row>
                            <Col
                              xs={{ span: 8, offset: 0 }}
                              sm={{ span: 8, offset: 0 }}
                              md={{ span: 8, offset: 0 }}
                              lg={{ span: 8, offset: 0 }}
                              xl={{ span: 8, offset: 0 }}
                              xxl={{ span: 8, offset: 0 }}> {s.name} </Col>

                            <Col
                              xs={{ span: 6, offset: 0 }}
                              sm={{ span: 6, offset: 0 }}
                              md={{ span: 6, offset: 0 }}
                              lg={{ span: 6, offset: 0 }}
                              xl={{ span: 6, offset: 0 }}
                              xxl={{ span: 6, offset: 0 }}> {s.firstname} {s.lastname} </Col>

                            <Col
                              xs={{ span: 8, offset: 0 }}
                              sm={{ span: 8, offset: 0 }}
                              md={{ span: 8, offset: 0 }}
                              lg={{ span: 8, offset: 0 }}
                              xl={{ span: 8, offset: 0 }}
                              xxl={{ span: 8, offset: 0 }}> {s.mail} </Col>
                          </Row>
                        </Timeline.Item>)
                    }
                  </Timeline>
                </Col>
              </Row>
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
