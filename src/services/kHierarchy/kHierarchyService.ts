import { PagedResultDto } from '../dto/pagedResultDto';
import http from '../httpService';
import { GetAllHierarchyOutput, UnitOutput, ChangeStatus, GenerateHierarchyDto, ChangeToPassiveStatus } from './dto/getAllHierarchyOutput';

class KHierarchyService {

    public async getAll(tip: string, id: string): Promise<GetAllHierarchyOutput[]> {
        let result = await http.get('api/services/app/KHierarchy/GetKHierarcies?tip=' + tip + "&id=" + id);
        return result.data.result;
    }

    public async getUnits(): Promise<PagedResultDto<UnitOutput>> {
        let result = await http.get('/api/services/app/Unit/GetAll');
        return result.data.result;
    }

    public async update(changeStatus: ChangeStatus): Promise<boolean> {
        let result = await http.put('/api/services/app/Node/UpdateStatus', changeStatus);
        return result.data.result;
    }

    public async updateToPassive(changeToPassiveStatus: ChangeToPassiveStatus): Promise<boolean> {
        let result = await http.put('/api/services/app/Node/UpdateStatuToPassive', changeToPassiveStatus);
        return result.data.result;
    }

    public async generateHierarchy(generateHierarchyDto: GenerateHierarchyDto): Promise<GetAllHierarchyOutput[]> {
        let result = await http.get('api/services/app/KHierarchy/GetHierarchy', {
            params: generateHierarchyDto
        });
        return result.data.result;
    }
 
    public async updateOrderNodes(ids: any): Promise<boolean> {
        let result = await http.put('/api/services/app/Node/UpdateOrderNodes', ids);
        return result.data.result;
    }

}

export default new KHierarchyService();