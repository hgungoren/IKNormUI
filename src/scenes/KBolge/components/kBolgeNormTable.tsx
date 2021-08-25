import React from 'react';
import { Button } from 'antd';
import { Table, Tooltip } from 'antd';
import { isGranted, L } from '../../../lib/abpUtility';
import KSubeNormStore from '../../../stores/kSubeNormStore';
import { EntityDto } from '../../../services/dto/entityDto';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { PagedResultDto } from '../../../services/dto/pagedResultDto';
import { GetKSubeNormOutput } from '../../../services/kSubeNorm/dto/getKSubeNormOutput';


export interface ICreateNormTableProps {
    kSubeNormStore: KSubeNormStore;
    kSubeNormEdit: (input: EntityDto<string>) => void;
    kSubeNormDelete: (input: EntityDto<string>) => void;
    kSubeNorms: PagedResultDto<GetKSubeNormOutput>;
}

class KBolgeNormTable extends React.Component<ICreateNormTableProps> {

    render() {
        const norms = this.props.kSubeNorms;
        const { kSubeNormDelete, kSubeNormEdit } = this.props;

        const columns = [
            { title: L('Position'), dataIndex: 'pozisyon', key: 'pozisyon', width: 150, render: (text: string) => <div>{text}</div> },
            { title: L('NormCount'), dataIndex: 'adet', key: 'adet', width: 50, render: (text: string) => <div>{text}</div> },
            { title: L('EmployeeCount'), dataIndex: 'adet', key: 'adet', width: 50, render: (text: string) => <div>{text}</div> },
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
            {
                title: L('Actions'),
                width: 30,
                render: (text: string, item: any) => (
                    <div>
                        {isGranted('kbolge.norm.edit') && <>   <Tooltip placement="topRight" title={L('Edit')}>
                            <Button style={{ backgroundColor: '#faad14', borderColor: '#faad14', color: 'white' }} onClick={() => kSubeNormEdit({ id: item.id })} icon={<EditOutlined />} ></Button>
                        </Tooltip></>}
                        {isGranted('kbolge.norm.delete') && <>    <Tooltip placement="topLeft" title={L('Delete')}>
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
                        pagination={{ pageSize: 5, total: norms === undefined ? 0 : norms.items.length, defaultCurrent: 1 }}
                        loading={norms === undefined ? true : false}
                        dataSource={norms === undefined ? [] : norms.items}
                    />

                }  
            </>
        )
    }
}


export default KBolgeNormTable;