import http from '../httpService';
import { GetAllHierarchyOutput } from './dto/getAllHierarchyOutput';
 
class KHierarchyService {
    public async getAll(tip: string, id: string): Promise<GetAllHierarchyOutput[]> {
        let result = await http.get('api/services/app/KHierarchy/GetKHierarcies?tip=' + tip + "&id=" + id);
        return result.data.result;
    }
}

export default new KHierarchyService();