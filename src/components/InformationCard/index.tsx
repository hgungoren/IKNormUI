/*eslint-disable */
import './index.less'
import *  as React from 'react';
import { inject, observer } from 'mobx-react';
import Stores from '../../stores/storeIdentifier';
import AccountStore from '../../stores/accountStore';
import SessionStore from '../../stores/sessionStore';
import AppComponentBase from '../../components/AppComponentBase';
import AuthenticationStore from '../../stores/authenticationStore';
import { Avatar } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';
import Meta from 'antd/lib/card/Meta';


export interface IInformationProps {
    authenticationStore?: AuthenticationStore;
    sessionStore?: SessionStore;
    accountStore?: AccountStore;

}
export interface IInformationState {
    cardLoading: boolean;
    title: string;
    emailAddress: string;
}


@inject(Stores.AuthenticationStore, Stores.SessionStore, Stores.AccountStore)
@observer
class InformationCart extends AppComponentBase<IInformationProps, IInformationState> {

    state = {
        cardLoading: false,
        title: '',
        emailAddress: '' 
    } 
    
    componentDidMount() {
        let store = this.props.sessionStore?.currentLogin.user;
        this.setState({

            title: store?.title !== undefined ? store?.title : '',
            emailAddress: store?.emailAddress !== undefined ? store?.emailAddress : ''

        }) 
    }


    render() {
        const { title, emailAddress } = this.state;
        return (
            <>
                <Meta
                    avatar={<Avatar size={100} icon={<AntDesignOutlined />} />}
                    title={<p className={'metaUserName'}>{this.props.sessionStore?.currentLogin.user.name} {this.props.sessionStore?.currentLogin.user.surname}</p>}
                    description={
                        <>
                            {
                                setTimeout(() => {
                                    this.props.sessionStore !== undefined && <>
                                        <p>{title}</p>
                                        <p>{emailAddress}</p>
                                    </>
                                }, 1000)
                            }
                        </>}
                />
            </>
        );
    }
}

export default InformationCart;
