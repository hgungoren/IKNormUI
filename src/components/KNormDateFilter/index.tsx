import React from 'react';
import { Card, Col, DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;

function KNormDateFilter({ cardLoading, color, onClick, cursor = '' }) {

    return (
        <>

            <Col xs={{ offset: 1, span: 22 }}
                sm={{ offset: 1, span: 22 }}
                md={{ offset: 1, span: 11 }}
                lg={{ offset: 1, span: 11 }}
                xl={{ offset: 0, span: 12 }}
                xxl={{ offset: 0, span: 12 }} >

                <Card onClick={onClick}
                    hoverable
                    style={{ cursor: cursor }}
                    bodyStyle={{ padding: 10 }}
                    loading={cardLoading}
                    bordered={false}>

                    <Col span={24}>
                        <Space direction="vertical" size={24}>
                            <RangePicker size={'large'}
                            className={'range-picker'}
                                dateRender={current => {
                                    const style = { border: '', borderRadius: '' };
                                    if (current.date() === 1) {
                                        style.border = '1px solid #1890ff';
                                        style.borderRadius = '50%';
                                    }
                                    return (
                                        <div className="ant-picker-cell-inner" style={style}>
                                            {current.date()}
                                        </div>
                                    );
                                }}
                            />
                        </Space>
                    </Col>
                </Card>
            </Col>




        </>
    )
}

export default KNormDateFilter;