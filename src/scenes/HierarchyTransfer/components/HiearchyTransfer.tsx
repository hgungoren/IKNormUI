/* eslint-disable */
import React, { useState, useEffect } from 'react';
import './index.less';
import { Col, Row, Select, Transfer } from 'antd';
import KHierarchyStore from '../../../stores/kHierarchyStore';
import { UnitOutput } from '../../../services/kHierarchy/dto/getAllHierarchyOutput';

export interface IProps {
  kHierarchyStore: KHierarchyStore;
  sourceTitle: string;
  targetTitle: string;
}

const mockData = [
  { key: '0', title: 'Title 0', description: 'Sample Description 0' },
  { key: '1', title: 'Title 1', description: 'Sample Description 1' },
  { key: '2', title: 'Title 2', description: 'Sample Description 2' },
  { key: '3', title: 'Title 3', description: 'Sample Description 3' },
  { key: '4', title: 'Title 4', description: 'Sample Description 4' },
  { key: '5', title: 'Title 5', description: 'Sample Description 5' },
];
export default function HiearchyTransfer(Props: IProps) {
  const { kHierarchyStore, sourceTitle, targetTitle } = Props;
  const [sourceItems, setSourceItems] = useState<UnitOutput[]>([]);
  const [targetKeys, setTargetKeys] = useState([{ sourceItems }]) as any;
  const [selectedKeys, setSelectedKeys] = useState([]) as any;
  const { Option } = Select;
  async function getUnits() {
    let result = await kHierarchyStore.getUnit();
    console.log(result);
    setSourceItems(result.items);
    console.log(sourceItems);
    return result;
  }

  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onBlur() {
    console.log('blur');
  }

  function onFocus() {
    console.log('focus');
  }

  function onSearch(val) {
    console.log('search:', val);
  }

  useEffect(() => {
    getUnits();
  }, []);

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col
          xs={{ span: 12, offset: 0 }}
          sm={{ span: 12, offset: 0 }}
          md={{ span: 12, offset: 0 }}
          lg={{ span: 12, offset: 0 }}
          xl={{ span: 12, offset: 0 }}
          xxl={{ span: 12, offset: 0 }}
        >
          <Select
            showSearch
            style={{ width: '290px' }}
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
        </Col>
        <Col
          xs={{ span: 12, offset: 0 }}
          sm={{ span: 12, offset: 0 }}
          md={{ span: 12, offset: 0 }}
          lg={{ span: 12, offset: 0 }}
          xl={{ span: 12, offset: 0 }}
          xxl={{ span: 12, offset: 0 }}
        >
          <Select
            showSearch
            style={{ width: '290px' }}
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
        </Col>
      </Row>
      <Transfer
        dataSource={mockData}
        titles={[sourceTitle, targetTitle]}
        render={(item) => item.title}
        selectedKeys={selectedKeys}
        targetKeys={targetKeys}
        onChange={(nextTargetKeys) => {
          setTargetKeys(nextTargetKeys);
        }}
        onSelectChange={(sourceSelectedKeys, targetSelectedKeys) => {
          setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
        }}
      />
    </div>
  );
}
