import React from 'react';
import { Button } from 'antd';
import { Table, Tooltip } from 'antd';
import { isGranted, L } from '../../../lib/abpUtility';
import { EntityDto } from '../../../services/dto/entityDto';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';


export interface Props {
    kSubeNormEdit: (input: EntityDto<string>) => void;
    kSubeNormDelete: (input: EntityDto<string>) => void;
    normList: []
}

class KBolgeNormTable extends React.Component<Props> {

    render() {
        const { kSubeNormDelete, kSubeNormEdit } = this.props;

        const columns = [
            { title: L('Position'), dataIndex: 'position', key: 'position', width: 150, render: (text: string) => <div>{text}</div> },
            { title: L('NormCount'), dataIndex: 'normCount', key: 'normCount', width: 50, render: (text: string) => <div>{text}</div> },
            { title: L('EmployeeCount'), dataIndex: 'employeeCount', key: 'employeeCount', width: 50, render: (text: string) => <div>{text}</div> },
            {
                title: L('CreationTime'), dataIndex: 'creationTime', key: 'creationTime', width: 100, render: (text: Date) => <div>{
                    <div>{
                        new Date(text).toLocaleDateString("tr-TR", {
                            year: "numeric",
                            month: "long",
                            day: "2-digit",
                            hour: "2-digit",
                            minute: "2-digit"
                        })
                    }
                    </div>
                }</div>
            },
            // {
            //     title: L('ModifiedTime'), dataIndex: 'lastModificationTime', key: 'lastModificationTime', width: 100, render: (text: Date) => <div>  {
            //         <div>
            //             {
            //                 text !== undefined && new Date(text).toLocaleDateString("tr-TR", {
            //                     year: "numeric",
            //                     month: "long",
            //                     day: "2-digit",
            //                     hour: "2-digit",
            //                     minute: "2-digit"
            //                 })
            //             }
            //         </div>
            //     }</div>
            // },
            {
                title: L('Actions'),
                width: 30,
                render: (text: string, item: any) => (
                    <div>
                        {isGranted('kbolge.norm.edit') && <>   <Tooltip placement="topRight" title={L('Edit')}>
                            <Button
                                style={{
                                    backgroundColor: '#faad14',
                                    borderColor: '#faad14', color: 'white'
                                }}
                                onClick={() => kSubeNormEdit({ id: item.id })}
                                icon={<EditOutlined />} >
                            </Button>
                        </Tooltip></>}
                        {isGranted('kbolge.norm.delete') && <><Tooltip placement="topLeft" title={L('Delete')}>
                            <Button style={{ marginLeft: 3 }} type="primary" onClick={() => kSubeNormDelete({ id: item.id })} danger icon={<DeleteOutlined />} ></Button>
                        </Tooltip> </>}
                    </div>
                ),
            },
        ];

        return (
            <>
                {
                    isGranted('kbolge.norm.view') &&
                    <Table
                        locale={{ emptyText: L('NoData') }}
                        rowKey={(record) => record.id.toString()}
                        bordered={false}
                        columns={columns}
                        pagination={{ pageSize: 5, total: this.props.normList === undefined ? 0 : this.props.normList.length, defaultCurrent: 1 }}
                        loading={this.props.normList === undefined ? true : false}
                        dataSource={this.props.normList === undefined ? [] : this.props.normList}
                    />
                }

                {
                    console.log(this.props.normList)
                }
            </>
        )
    }
}


export default KBolgeNormTable;