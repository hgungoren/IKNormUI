import React from 'react';
import { Button } from 'antd';
import { Table, Tooltip } from 'antd';
import { L } from '../../../lib/abpUtility';
import KSubeNormStore from '../../../stores/kSubeNormStore';
import { EntityDto } from '../../../services/dto/entityDto';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { PagedResultDto } from '../../../services/dto/pagedResultDto';
import { GetKSubeNormOutput } from '../../../services/kSubeNorm/dto/getKSubeNormOutput';


export interface ICreateNormTableProps {
    kSubeNormStore: KSubeNormStore;
    kSubeNormEdit: (input: EntityDto) => void;
    kSubeNormDelete: (input: EntityDto) => void;
    kSubeNorms: PagedResultDto<GetKSubeNormOutput>;
}

class KSubeNormTable extends React.Component<ICreateNormTableProps> {

    render() {
        
        const norms = this.props.kSubeNorms;
        const { kSubeNormDelete, kSubeNormEdit } = this.props;
 
        const columns = [ 
            { title: L('Position'),        dataIndex: 'pozisyon',     key: 'pozisyon',     width: 150, render: (text: string) => <div>{text}</div> },
            { title: L('NormCount'),       dataIndex: 'adet',         key: 'adet',         width: 150, render: (text: string) => <div>{text}</div> },
            { title: L('Personel Sayısı'), dataIndex: 'adet',         key: 'adet',         width: 150, render: (text: string) => <div>{text}</div> },
            { title: L('CreationTime'),    dataIndex: 'creationTime', key: 'creationTime', width: 150, render: (text: string) => <div>{text}</div> },
            {
                title: L('Actions'),
                width: 150,
                render: (text: string, item: any) => (
                    <div>
                        <Tooltip placement="topLeft" title={L('Delete')}>
                            <Button onClick={() => kSubeNormDelete({ id: item.id })} danger icon={<DeleteOutlined />} ></Button>
                        </Tooltip>

                        <Tooltip placement="topRight" title={L('Edit')}>
                            <Button style={{ borderColor: '#faad14', color: '#faad14', marginLeft: 2 }} onClick={() => kSubeNormEdit({ id: item.id })} icon={<EditOutlined />} ></Button>
                        </Tooltip>
                    </div>
                ),
            },
        ];

        return (
            <>
                <Table
                    rowKey={(record) => record.id.toString()}
                    bordered={false}
                    columns={columns}
                    pagination={{ pageSize: 5, total: norms === undefined ? 0 : norms.items.length, defaultCurrent: 1 }}
                    loading={norms === undefined ? true : false}
                    dataSource={norms === undefined ? [] : norms.items}
                />
            </>
        )
    }
}


export default KSubeNormTable;