import { action, observable } from 'mobx';
import kNormService from '../services/kNorm/kNormService';
import { PagedResultDto } from '../services/dto/pagedResultDto';
import { EntityDto } from '../services/dto/entityDto';
import { GetKNormOutput } from '../services/kNorm/dto/getKNormOutput';
import { PagedKNormResultRequestDto } from '../services/kNorm/dto/pagedKNormResultRequestDto';
import { CreateKNormInput } from '../services/kNorm/dto/createKNormInput';
import { GetAllKNormOutput } from '../services/kNorm/dto/getAllKNormOutput';


class KNormStore {
    @observable kNorms!: PagedResultDto<GetAllKNormOutput>;
    @observable editKNorm!: GetKNormOutput;

    @action
    async getAll(pagedFilterAndSortedRequest: PagedKNormResultRequestDto) {
        let result = await kNormService.getAll(pagedFilterAndSortedRequest);
        this.kNorms = result;
    }

    @action
    async get(entityDto: EntityDto) {
        let result = await kNormService.get(entityDto);
        this.editKNorm = result;
    }

    @action
    async create(createKNormInput: CreateKNormInput) {

        // await kNormService.create(createKNormInput);
        let result = await kNormService.create(createKNormInput);
        this.kNorms.items.push(result);
    }

}

export default KNormStore;