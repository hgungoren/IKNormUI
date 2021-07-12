import { EntityDto } from '../dto/entityDto';
import { PagedResultDto } from '../dto/pagedResultDto';
import http from '../httpService';
import { GetAllKSubeOutput } from './dto/getAllKSubeOutput';
import { CreateOrUpdateKSubeInput } from './dto/createOrUpdateKSubeInput';
import { PagedKSubeResultRequestDto } from './dto/PagedKSubeResultRequestDto';

class KSubeService {

    public async getAll(pagedFilterAndSortedRequest: PagedKSubeResultRequestDto): Promise<PagedResultDto<GetAllKSubeOutput>> {
        let result = await http.get('api/services/app/KSube/GetAll', { params: pagedFilterAndSortedRequest });
        return result.data.result;
    }

    public async get(entityDto: EntityDto): Promise<CreateOrUpdateKSubeInput> {
        let result = await http.get('api/services/app/KSube/Get', { params: entityDto });
        return result.data.result;
    }

    public async getNormCount(id: number): Promise<number> {
        let result = await http.get('api/services/app/KSube/GetNormCountById?id=' + id);
        return result.data.result;
    }
}

export default new KSubeService();