/* eslint-disable */
import { Transfer } from 'antd';
import React, { useState, useEffect } from 'react';
import KHierarchyStore from '../../../stores/kHierarchyStore';

export interface Props {
  kHierarchyStore: KHierarchyStore;
  sourceTitle: '';
  targetTitle: '';
}

const HiearchyTransfer = (Props: Props) => {
  const { kHierarchyStore, sourceTitle, targetTitle } = Props;
  const unit = { key: '0', name: '' };
  const [data, SetData] = useState([unit]);
  const [targetKeys, setTargetKeys] = useState(data);
  const [selectedKeys, setSelectedKeys] = useState([]);

  function getDatas() {
    kHierarchyStore.units.items !== undefined &&
      kHierarchyStore.units.items.map((value, index) =>
        SetData([...data, { key: `${index}`, name: value.name }])
      );
  }

  useEffect(() => {
    getDatas();
  }, []);

  return (
    <div>
      <Transfer
        dataSource={data}
        titles={[sourceTitle, targetTitle]}
        render={(item) => item.name}
        selectedKeys={selectedKeys}
        targetKeys={targetKeys}
        onChange={(nextTargetKeys) => {
          SetData(nextTargetKeys);
        }}
        onSelectChange={(sourceSelectedKeys, targetSelectedKeys) => {
          setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
        }}
      />
    </div>
  );
};

export default HiearchyTransfer;
