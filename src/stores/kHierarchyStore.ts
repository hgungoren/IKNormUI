import { action, observable } from 'mobx';
import { PagedResultDto } from '../services/dto/pagedResultDto';
import { GetAllHierarchyOutput, UnitOutput, ChangeStatus, GenerateHierarchyDto, ChangeToPassiveStatus } from '../services/kHierarchy/dto/getAllHierarchyOutput';
import kHierarchyService from '../services/kHierarchy/kHierarchyService';

class KHierarchyStore {
    @observable kHierarchies!: GetAllHierarchyOutput[];
    @observable units!: PagedResultDto<UnitOutput>;
    @observable status!: boolean;

    @action
    async getAll(tip: string, id: string) {

        let result = await kHierarchyService.getAll(tip, id);
        this.kHierarchies = result;
    }


    @action
    async getUnit() {
        let result = await kHierarchyService.getUnits();
        this.units = result;
    }


    @action
    async update(changeStatus: ChangeStatus) { 
        let result = await kHierarchyService.update(changeStatus);
        this.status = result;
    }


    @action
    async updateToPassive(changeToPassiveStatus: ChangeToPassiveStatus) {
        let result = await kHierarchyService.updateToPassive(changeToPassiveStatus);
        this.status = result;
    }


    @action
    async generateHierarchy(generateHierarchyDto: GenerateHierarchyDto) {

        let result = await kHierarchyService.generateHierarchy(generateHierarchyDto);
        this.kHierarchies = result;
    }
}

export default KHierarchyStore;