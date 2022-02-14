/* eslint-disable*/
import React from 'react';
// import { FormInstance } from 'antd/lib/form';
import { Modal, Timeline } from 'antd';
// import { L } from '../../../lib/abpUtility';
import { ClockCircleOutlined } from '@ant-design/icons';

export interface IApprovalHierarchyProps {
  visible: boolean;
  onCancel: () => void;
  modalType: string;
  // onCreate: () => void;
  // formRef: React.RefObject<FormInstance>;
}

class ApprovalHierarchy extends React.Component<IApprovalHierarchyProps> {
  state = {
    confirmDirty: false,
  };

  render() {
    const { visible } = this.props;

    return (
      <Modal
        visible={visible}
        cancelText={"Vazgeç"}
        okText={"Gönder"}
        title={'Onay Hiyerarşisi'}
        destroyOnClose={true}
        onCancel={this.props.onCancel}
        width={"50%"}
      >
        <div>
          <h4>
            Terfi talebini kaydetmeniz durumunda aşağıda yer alan hiyerarşi sırasına göre onay
            gönderilecektir.
          </h4>
          <span><br></br></span>
        </div>
        <div style={{margin:"5px"}}>
          <Timeline style={{margin:"5px"}}>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
            <Timeline.Item
              dot={<ClockCircleOutlined className="timeline-clock-icon" />}
              color="red"
            >
              Technical testing 2015-09-01
            </Timeline.Item>
            <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
          </Timeline>
        </div>
      </Modal>
    );
  }
}
export default ApprovalHierarchy;
