import { action } from 'mobx';
import { CreateKNormDetailInput } from '../services/kNormDetail/dto/createKNormDetailInput';
import kNormDetailService from '../services/kNormDetail/kNormDetailService';

class KNormDetailStore {

    @action
    async create(createKNormDetailInput: CreateKNormDetailInput) {
        await kNormDetailService.create(createKNormDetailInput);
    }
}

export default KNormDetailStore;