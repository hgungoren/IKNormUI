/* eslint-disable */
import React, { useState } from 'react';
import './index.less';
import { Transfer } from 'antd';


const mockData = [
  { key: '0', title: 'Title 0', description: 'Sample Description 0' },
  { key: '1', title: 'Title 1', description: 'Sample Description 1' },
  { key: '2', title: 'Title 2', description: 'Sample Description 2' },
  { key: '3', title: 'Title 3', description: 'Sample Description 3' },
  { key: '4', title: 'Title 4', description: 'Sample Description 4' },
  { key: '5', title: 'Title 5', description: 'Sample Description 5' },
];
export default function HiearchyTransfer() {
  // Hedef keyi ayarlamak için
  const [targetKeys, setTargetKeys] = useState(mockData) as any;
  // Seçilen keyleri tutmak için
  const [selectedKeys, setSelectedKeys] = useState([]) as any;
  return (
// https://motion.ant.design/exhibition/demo/list-sort
    <Transfer
      dataSource={mockData}
      titles={['Kaynak', 'Hedef']}
      render={(item) => item.title}
      selectedKeys={selectedKeys}
      targetKeys={targetKeys}
      onChange={(nextTargetKeys) => { setTargetKeys(nextTargetKeys); }}
      onSelectChange={(sourceSelectedKeys, targetSelectedKeys) => {
        setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
      }}
    />
  );
}