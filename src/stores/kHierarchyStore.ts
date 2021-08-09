import { action, observable } from 'mobx';
import { GetAllHierarchyOutput } from '../services/kHierarchy/dto/getAllHierarchyOutput';
import kHierarchyService from '../services/kHierarchy/kHierarchyService';

class KHierarchyStore {
    @observable kHierarchies!: GetAllHierarchyOutput[];

    @action
    async getAll(tip: string, id: string) {
   
        let result = await kHierarchyService.getAll(tip, id);
        this.kHierarchies = result;
    }

}

export default KHierarchyStore;