/*eslint-disable */
import './index.less'
import { Avatar } from 'antd';
import *  as React from 'react';
import Meta from 'antd/lib/card/Meta';
import { inject, observer } from 'mobx-react';
import Loading from '../../components/Loading';
import Stores from '../../stores/storeIdentifier';
import AccountStore from '../../stores/accountStore';
import SessionStore from '../../stores/sessionStore';
import { AntDesignOutlined } from '@ant-design/icons';
import AppComponentBase from '../../components/AppComponentBase';
import AuthenticationStore from '../../stores/authenticationStore';

export interface IProps {
    sessionStore?: SessionStore;
    accountStore?: AccountStore;
    authenticationStore?: AuthenticationStore;

}
export interface IState {
    title: string;
    userName: string;
    isLoading: boolean;
    userSurname: string;
    emailAddress: string;
}

@inject(
    Stores.SessionStore,
    Stores.AccountStore,
    Stores.AuthenticationStore,
)

@observer
class InformationCart extends AppComponentBase<IProps, IState> {

    state = {
        title: '',
        userSurname: '',
        emailAddress: '',
        userName: '',
        isLoading: true
    }

    componentDidMount() {
        let store = this.props.sessionStore?.currentLogin.user; 
        setTimeout(() => {
            this.setState({
                title: store?.title ?? '',
                userName: store?.userName ?? '',
                userSurname: store?.surname ?? '',
                emailAddress: store?.emailAddress ?? '',
            });
            this.setState({ isLoading: false })
        }, 500) 
    }

    render() {
        return (
            <>
                {
                    this.state.isLoading ? <Loading /> :
                        <Meta
                            avatar={<Avatar size={100} icon={<AntDesignOutlined />} />}
                            title={<p className={'metaUserName'}>{this.state.userName} {this.state.userSurname}</p>}
                            description={
                                <>
                                    <p>{this.state.title}</p>
                                    <p>{this.state.emailAddress}</p>
                                </>
                            }
                        />
                }
            </>
        );
    }
}

export default InformationCart;
