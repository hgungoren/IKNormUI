/*eslint-disable */
import './index.less';
import * as React from 'react';
import { L } from '../../lib/abpUtility';
import { FormInstance } from 'antd/lib/form';
import { inject, observer } from 'mobx-react';
import UserStore from '../../stores/userStore';
import Stores from '../../stores/storeIdentifier';
import { EntityDto } from '../../services/dto/entityDto';
import AppComponentBase from '../../components/AppComponentBase';
import CreateOrUpdateUser from './components/createOrUpdateUser';
import { PlusOutlined, SettingOutlined } from '@ant-design/icons';
import { Button, Card, Col, Dropdown, Input, Menu, Modal, Row, Table, Tag } from 'antd';


export interface IUserProps {
  userStore: UserStore;
}

export interface IUserState {
  modalVisible: boolean;
  maxResultCount: number;
  skipCount: number;
  userId: number;
  filter: string;
  drawerVisible: boolean;
}

const confirm = Modal.confirm;
const Search = Input.Search;

@inject(Stores.UserStore)
@observer
class User extends AppComponentBase<IUserProps, IUserState> {
  formRef = React.createRef<FormInstance>();

  state = {
    modalVisible: false,
    maxResultCount: 10,
    skipCount: 0,
    userId: 0,
    filter: '',
    drawerVisible: false,
  };

  async componentDidMount() {
    await this.getAll();
  }

  async getAll() {
    await this.props.userStore.getAll({ maxResultCount: this.state.maxResultCount, skipCount: this.state.skipCount, keyword: this.state.filter });
  }

  handleTableChange = (pagination: any) => {
    this.setState({ skipCount: (pagination.current - 1) * this.state.maxResultCount! }, async () => await this.getAll());
  };

  Modal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible,
    });
  };


  async createOrUpdateModalOpen(entityDto: EntityDto) {

    if (entityDto.id === 0) {
      await this.props.userStore.createUser();
      await this.props.userStore.getRoles();
    } else {
      await this.props.userStore.get(entityDto);
      await this.props.userStore.getRoles();
    }

    this.setState({ userId: entityDto.id });
    this.Modal();

    setTimeout(() => {
      this.formRef.current?.setFieldsValue({ ...this.props.userStore.editUser });
    }, 100);
  }

  delete(input: EntityDto) {
    const self = this;
    confirm({
      okText: L('Yes'),
      cancelText: L('No'),
      title: L('ConfirmDelete'),
      onOk() {
        self.props.userStore.delete(input);
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  handleCreate = () => {
    const form = this.formRef.current;

    form!.validateFields().then(async (values: any) => {
      if (this.state.userId === 0) {
        await this.props.userStore.create(values);
      } else {
        await this.props.userStore.update({ ...values, id: this.state.userId });
      }

      await this.getAll();
      this.setState({ modalVisible: false });
      form!.resetFields();
    });
  };

  handleSearch = (value: string) => {
    this.setState({ filter: value }, async () => await this.getAll());
  };



  public render() {
    const { users } = this.props.userStore;


    const columns = [
      { title: L('table.user.username'), dataIndex: 'userName', key: 'userName', width: 150, render: (text: string) => <div>{text}</div> },
      { title: L('table.user.name'), dataIndex: 'name', key: 'name', width: 150, render: (text: string) => <div>{text}</div> },
      { title: L('table.user.surname'), dataIndex: 'surname', key: 'surname', width: 150, render: (text: string) => <div>{text}</div> },
      { title: L('table.user.duty'), dataIndex: 'title', key: 'title', width: 150, render: (text: string) => <div>{text}</div> },
      { title: L('table.user.email'), dataIndex: 'emailAddress', key: 'emailAddress', width: 150, render: (text: string) => <div>{text}</div> },
      {
        title: L('table.user.status'),
        dataIndex: 'isActive',
        key: 'isActive',
        width: 150,
        render: (text: boolean) => (text === true ? <Tag color="#2db7f5">{L('Active')}</Tag> : <Tag color="red">{L('Passive')}</Tag>),
      },
      {
        title: L('table.user.transactions'),
        width: 150,
        render: (text: string, item: any) => (
          <div>
            <Dropdown
              trigger={['click']}
              overlay={
                <Menu> 
                  <Menu.Item onClick={() => this.createOrUpdateModalOpen({ id: item.id })}>{L('Edit')}</Menu.Item>
                  <Menu.Item onClick={() => this.delete({ id: item.id })}>{L('Delete')}</Menu.Item>
                </Menu>
              }
              placement="bottomLeft"
            >
              <Button type="primary" icon={<SettingOutlined />}>
                {L('Actions')}
              </Button>
            </Dropdown>
          </div>
        ),
      },
    ];

    return (
      <>
        <Card>
          <Row>
            <Col
              xs={{ span: 4, offset: 0 }}
              sm={{ span: 4, offset: 0 }}
              md={{ span: 4, offset: 0 }}
              lg={{ span: 2, offset: 0 }}
              xl={{ span: 2, offset: 0 }}
              xxl={{ span: 2, offset: 0 }}
            >
              {' '}
              <h2>{L('Users')}</h2>
            </Col>
            <Col
              xs={{ span: 14, offset: 0 }}
              sm={{ span: 15, offset: 0 }}
              md={{ span: 15, offset: 0 }}
              lg={{ span: 1, offset: 21 }}
              xl={{ span: 1, offset: 21 }}
              xxl={{ span: 1, offset: 21 }}
            >
              <Button type="primary" shape="circle" icon={<PlusOutlined />} onClick={() => this.createOrUpdateModalOpen({ id: 0 })} />
            </Col>
          </Row>
          <Row>
            <Col sm={{ span: 10, offset: 0 }}>
              <Search placeholder={this.L('Filter')} onSearch={this.handleSearch} />
            </Col>
          </Row>
          <Row style={{ marginTop: 20 }}>
            <Col
              xs={{ span: 24, offset: 0 }}
              sm={{ span: 24, offset: 0 }}
              md={{ span: 24, offset: 0 }}
              lg={{ span: 24, offset: 0 }}
              xl={{ span: 24, offset: 0 }}
              xxl={{ span: 24, offset: 0 }}
            >
              <Table
                locale={{ emptyText: L('NoData') }}
                rowKey={(record) => record.id.toString()}
                columns={columns}
                pagination={{ pageSize: 10, total: users === undefined ? 0 : users.totalCount, defaultCurrent: 1 }}
                loading={users === undefined ? true : false}
                dataSource={users === undefined ? [] : users.items}
                onChange={this.handleTableChange}
              />
            </Col>
          </Row>
          <CreateOrUpdateUser
            formRef={this.formRef}
            visible={this.state.modalVisible}
            onCancel={() => {
              this.setState({
                modalVisible: false,
              });
              this.formRef.current?.resetFields();
            }}
            modalType={this.state.userId === 0 ? 'edit' : 'create'}
            onCreate={this.handleCreate}
            roles={this.props.userStore.roles}
          />
        </Card>

      </>
    );
  }
}

export default User;
