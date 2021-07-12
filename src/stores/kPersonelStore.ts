import { action, observable } from 'mobx';
import { GetKPersonelOutput } from '../services/kPersonel/dto/getKPersonelOutput';
import kPersonelService from '../services/kPersonel/kPersonelService';
import { PagedResultDto } from '../services/dto/pagedResultDto';
import { PagedKPersonelResultRequestDto } from '../services/kPersonel/dto/PagedKPersonelResultRequestDto';


class KPersonelStore {
    @observable kPersonels!: PagedResultDto<GetKPersonelOutput>; 
    @observable kAllPersonels!: PagedResultDto<GetKPersonelOutput>; 
    @observable kPersonelCount!: number;

    @action
    async getAll(pagedFilterAndSortedRequest: PagedKPersonelResultRequestDto) {
        let result = await kPersonelService.getAll(pagedFilterAndSortedRequest);
        this.kPersonels = result;
    }
 
    @action
    async getAllEmployees(pagedFilterAndSortedRequest: PagedKPersonelResultRequestDto) {
        let result = await kPersonelService.getAll(pagedFilterAndSortedRequest);
        this.kAllPersonels = result;
    }

    @action
    async getEmployeeCountById(id: number) {
        let result = await kPersonelService.getEmployeeCountById(id);
        this.kPersonelCount = result;
    }

    @action
    async getEmployeeCount() {
        let result = await kPersonelService.getEmployeeCount();
        this.kPersonelCount = result;
    }
}

export default KPersonelStore;