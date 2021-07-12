import * as React from 'react';
import { Modal, Button } from 'antd';
import { L } from '../../../lib/abpUtility';
import KBolgeNormForm from './kBolgeNormForm';
import { FormInstance } from 'antd/lib/form';
import KBolgeNormTable from './kBolgeNormTable';
import KSubeNormStore from '../../../stores/kSubeNormStore';
import { EntityDto } from '../../../services/dto/entityDto';
import { PagedResultDto } from '../../../services/dto/pagedResultDto';
import { GetKSubeNormOutput } from '../../../services/kSubeNorm/dto/getKSubeNormOutput';
import { GetKInkaLookUpTableOutput } from '../../../services/kInkaLookUpTable/dto/getKInkaLookUpTableOutput';

export interface ICreateNormProps {
  visible: boolean;
  modalType: string;
  subeObjId: number;
  onCancel: () => void;
  kSubeNormCreate: () => void;
  kSubeNormStore: KSubeNormStore;
  formRef: React.RefObject<FormInstance>;
  kSubeNormEdit: (input: EntityDto) => void;
  kSubeNormDelete: (input: EntityDto) => void;
  positionSelect: PagedResultDto<GetKInkaLookUpTableOutput>;
  kSubeNorms: PagedResultDto<GetKSubeNormOutput>;
  kPosizyonKontrol: (key: string) => void;
}


class CreateKBolgeNorm extends React.Component<ICreateNormProps> {
  state = {
    id: 0,
    adet: 0,
    userId: 0,
    pozisyon: '',
    confirmDirty: false,
  };

  render() {
    const {
      visible,
      formRef,
      onCancel,
      subeObjId,
      kSubeNormEdit,
      positionSelect,
      kSubeNormStore,
      kSubeNormCreate,
      kSubeNormDelete,
    } = this.props;
    return (
      <>
        <Modal
          footer={
            [
              <Button onClick={onCancel} type="primary" danger key="1" >{L('Close')}</Button>
            ]
          }
          width={1500}
          visible={visible}
             title={L('Position')}
          onCancel={onCancel}
          destroyOnClose={true}
        >
          <KBolgeNormForm
            formRef={formRef}
            subeObjId={subeObjId}
            positionSelect={positionSelect}
            kSubeNormStore={kSubeNormStore}
            kSubeNormCreate={kSubeNormCreate}
            kPosizyonKontrol={this.props.kPosizyonKontrol}
          />

          <KBolgeNormTable
            kSubeNormEdit={kSubeNormEdit}
            kSubeNormStore={kSubeNormStore}
            kSubeNormDelete={kSubeNormDelete}
            kSubeNorms={this.props.kSubeNorms}
          />
        </Modal >
      </>
    );
  }
}

export default CreateKBolgeNorm;
