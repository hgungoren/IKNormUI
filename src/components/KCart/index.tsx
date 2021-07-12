import { PlusOutlined, QuestionCircleOutlined, CheckOutlined, ClockCircleOutlined, CloseOutlined, MessageOutlined, QuestionOutlined, UserAddOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { Card, Col } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';
import { L } from '../../lib/abpUtility';
import './index.less'
import CountUp from 'react-countup';

function KCart({ cardLoading, color, title, icon, number }) {

    let _icon: any;

    if (icon === "UserAddOutlined")
        _icon = <UserAddOutlined className={'dashboardCardIcon'} />
    else if (icon === "PlusOutlined")
        _icon = <PlusOutlined className={'dashboardCardIcon'} />
    else if (icon === "CloseOutlined")
        _icon = <CloseOutlined className={'dashboardCardIcon'} />
    else if (icon === "CheckOutlined")
        _icon = <CheckOutlined className={'dashboardCardIcon'} />
    else if (icon === "UserAddOutlined")
        _icon = <UserAddOutlined className={'dashboardCardIcon'} />
    else if (icon === "MessageOutlined")
        _icon = <MessageOutlined className={'dashboardCardIcon'} />
    else if (icon === "QuestionOutlined")
        _icon = <QuestionOutlined className={'dashboardCardIcon'} />
    else if (icon === "ClockCircleOutlined")
        _icon = <ClockCircleOutlined className={'dashboardCardIcon'} />
    else if (icon === "UsergroupAddOutlined")
        _icon = <UsergroupAddOutlined className={'dashboardCardIcon'} />
    else if (icon === "QuestionCircleOutlined")
        _icon = <QuestionCircleOutlined className={'dashboardCardIcon'} />


    return (
        <Col
            className={'dashboardCard'}
            xs={{ offset: 1, span: 22 }}
            sm={{ offset: 1, span: 22 }}
            md={{ offset: 1, span: 11 }}
            lg={{ offset: 1, span: 11 }}
            xl={{ offset: 0, span: 6  }}
            xxl={{ offset: 0, span: 6 }} >

            <Card hoverable className={'KCard'} style={{ backgroundColor: color }} bodyStyle={{ padding: 10 }} loading={cardLoading} bordered={false}>
                <Col span={8}>
                    {
                        _icon
                    }
                </Col>
                <Col span={16}>
                    <CountUp start={0} end={number !== undefined ? number : 0} delay={0}>
                        {({ countUpRef }) => (
                            <div>
                                <p className={'dashboardCardName'}>{L(title)}</p>
                                <label className={'dashboardCardCounter'} ref={countUpRef} />
                            </div>
                        )}
                    </CountUp>
                </Col>
            </Card>
        </Col>
    );
}

KCart.propTypes = {
    cardLoading: PropTypes.bool.isRequired,
    number: PropTypes.number,
    title: PropTypes.string,
    color: PropTypes.string,
    icon: PropTypes.string
};

export default KCart;
