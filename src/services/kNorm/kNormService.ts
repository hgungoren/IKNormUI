import http from '../httpService';
import { EntityDto } from '../dto/entityDto';
import { PagedResultDto } from '../dto/pagedResultDto';
import { GetAllKNormOutput } from './dto/getAllKNormOutput'; 
import { CreateKNormInput } from './dto/createKNormInput';
import { PagedKNormResultRequestDto } from './dto/pagedKNormResultRequestDto';
import { GetKNormOutput } from './dto/getKNormOutput';

class KNormService {

    public async create(createKNormInput: CreateKNormInput) {
        let result = await http.post('api/services/app/KNorm/Create', createKNormInput);
        return result.data.result;
    }

    public async get(entityDto: EntityDto): Promise<GetKNormOutput> {
        let result = await http.get('api/services/app/KNorm/Get', { params: entityDto });
        return result.data.result;
    }

    public async getAll(pagedFilterAndSortedRequest: PagedKNormResultRequestDto): Promise<PagedResultDto<GetAllKNormOutput>> {
        let result = await http.get('api/services/app/KNorm/GetAll', { params: pagedFilterAndSortedRequest });
        return result.data.result;
    }

    public async setStatusAsync(createKNormInput: CreateKNormInput) {
        let result = await http.post('api/services/app/KNorm/SetStatus', createKNormInput);
        return result.data.result;
    }
}

export default new KNormService();