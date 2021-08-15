import './index.less'
import *  as React from 'react';
// import { Avatar } from 'antd';
// import { L } from '../../lib/abpUtility';
import { inject, observer } from 'mobx-react';
import Stores from '../../stores/storeIdentifier';
import AccountStore from '../../stores/accountStore';
import SessionStore from '../../stores/sessionStore';
import AppComponentBase from '../../components/AppComponentBase';
import AuthenticationStore from '../../stores/authenticationStore';
// import Meta from 'antd/lib/card/Meta';
// import { AntDesignOutlined } from '@ant-design/icons';


export interface IInformationProps {
    authenticationStore?: AuthenticationStore;
    sessionStore?: SessionStore;
    accountStore?: AccountStore;

}
export interface IInformationState { 
    cardLoading: boolean
}


@inject(Stores.AuthenticationStore, Stores.SessionStore, Stores.AccountStore)
@observer
class InformationCart extends AppComponentBase<IInformationProps, IInformationState> {

    state = {
        cardLoading: false
    }

    render() {

        return (

            <></>
            // <Meta
            //     avatar={<Avatar size={100} icon={<AntDesignOutlined />} />}
            //     title={<p className={'metaUserName'}>{this.props.sessionStore?.currentLogin.user.name} {this.props.sessionStore?.currentLogin.user.surname}</p>}
            //     description={<>


            //         {/* {
            //             this.props.sessionStore !== undefined && <>
            //                 <p>{this.props.sessionStore?.currentLogin.user.title}</p>
            //                 <p>{this.props.sessionStore?.currentLogin.user.emailAddress}</p>
            //             </>
            //         } */}
            //     </>}
            // />


        );
    }
}

export default InformationCart;
