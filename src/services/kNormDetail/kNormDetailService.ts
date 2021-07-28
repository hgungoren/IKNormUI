import http from '../httpService';
import { CreateKNormDetailInput } from './dto/createKNormDetailInput';
 
 
class KNormDetailService { 
    public async create(createKNormDetailInput: CreateKNormDetailInput) {
        let result = await http.post('api/services/app/KNormDetail/Create', createKNormDetailInput);
        return result.data.result;
    }
}

export default new KNormDetailService();