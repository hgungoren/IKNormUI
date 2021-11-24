/* eslint-disable */
import './index.less';
import { L } from '../../../lib/abpUtility';
import { TransferItem } from 'antd/lib/transfer';
import { Col, Form, FormInstance, Row, Select, Transfer } from 'antd';
import React, { useState, useEffect } from 'react';
import KHierarchyStore from '../../../stores/kHierarchyStore';
import { PositionOutput } from '../../../services/kHierarchy/dto/getAllHierarchyOutput';

export interface IProps {
  kHierarchyStore: KHierarchyStore;
  sourceTitle: string;
  targetTitle: string;
}

export default function HiearchyTransfer(Props: IProps) {
  const formRef = React.createRef<FormInstance>();

  const { kHierarchyStore, sourceTitle, targetTitle } = Props;
  const [unitsItems, setUnitsItems] = useState([] as any);
  const [positionsItems, setPositionsItems] = useState<PositionOutput[]>([]);
  const [nodesItems, setNodesItems] = useState<TransferItem[]>([]);
  const [targetKeys, setTargetKeys] = useState([{ unitsItems }]) as any;
  const [selectedKeys, setSelectedKeys] = useState([]) as any;
  const { Option } = Select;

  async function getUnits() {
    let result = await kHierarchyStore.getUnit();
    let items = result.items.map((item) => (
      <Option key={`unit_${item.id}`} value={item.id}>
        {item.name}
      </Option>
    ));
    setUnitsItems(items);
    return result;
  }

  function onUnitChange(value) {
    console.log('Unit Value => ', value);
    setNodesItems([]);
    formRef.current?.resetFields(['position']);
    let positions = kHierarchyStore.units.items.find((item) => item.id === value)?.positions;
    setPositionsItems(positions || []);
  }

  function onPositionChange(value) {
    console.log('Position Value => ', value);
    let nodes = positionsItems.find((item) => item.id === value)?.nodes;
    if (nodes !== undefined) {
      let nodeList = nodes.map<TransferItem>((item) => ({
        key: `${item.id}`,
        title: item.title,
        description: 'Sample Description 5',
        selected: item.selected,
      }));
      setNodesItems(nodeList || []);
    }
  }

  function onBlur() {}

  function onFocus() {}

  function onSearch(val) {}

  useEffect(() => {
    getUnits();
  }, []);

  return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
        ref={formRef}
      >
        <Row gutter={[16, 16]}>
          <Col
            xs={{ span: 12, offset: 0 }}
            sm={{ span: 12, offset: 0 }}
            md={{ span: 12, offset: 0 }}
            lg={{ span: 12, offset: 0 }}
            xl={{ span: 12, offset: 0 }}
            xxl={{ span: 12, offset: 0 }}
          >
            <Form.Item name="unit">
              <Select
                showSearch
                style={{ width: '100%' }}
                placeholder={L('PleaseSelect')}
                optionFilterProp="children"
                onChange={onUnitChange}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
              >
                {unitsItems}
              </Select>
            </Form.Item>
          </Col>
          <Col
            xs={{ span: 12, offset: 0 }}
            sm={{ span: 12, offset: 0 }}
            md={{ span: 12, offset: 0 }}
            lg={{ span: 12, offset: 0 }}
            xl={{ span: 12, offset: 0 }}
            xxl={{ span: 12, offset: 0 }}
          >
            {' '}
            <Form.Item name="position">
              <Select
                showSearch
                style={{ width: '100%' }}
                placeholder={L('PleaseSelect')}
                optionFilterProp="children"
                onChange={onPositionChange}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
              >
                {positionsItems !== undefined &&
                  positionsItems.map((item) => (
                    <Option key={`position_${item.id}`} value={item.id}>
                      {item.name}
                    </Option>
                  ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item name="title">
              <Transfer
                // locale={{  L('NoData') }}
                style={{ width: '100%' }}
                dataSource={nodesItems}
                titles={[sourceTitle, targetTitle]}
                render={(item) => `${item.title}`}
                selectedKeys={selectedKeys}
                targetKeys={targetKeys}
                onChange={(nextTargetKeys) => {
                  console.log('NextTargetKeys', nextTargetKeys);
                  for (let i = 0; i < nextTargetKeys.length; i++) {
                    kHierarchyStore.updateSelected({
                      id: nextTargetKeys[i],
                      positionId: '0',
                      selected: true,
                    });
                  }
                  setTargetKeys(nextTargetKeys);
                  console.log('TargetKeys', targetKeys);
                }}
                onSelectChange={(sourceSelectedKeys, targetSelectedKeys) => {
                  setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
                }}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
}
