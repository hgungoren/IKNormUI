import { EntityDto } from '../dto/entityDto';
import { PagedResultDto } from '../dto/pagedResultDto';
import http from '../httpService';
import { CreateOrUpdateKBolgeInput } from './dto/createOrUpdateKBolgeInput';
import { GetAllKBolgeOutput } from './dto/getAllKBolgeOutput';
import { PagedKBolgeResultRequestDto } from './dto/PagedBolgeResultRequestDto';

class KBolgeService {
    public async getAll(pagedFilterAndSortedRequest: PagedKBolgeResultRequestDto): Promise<PagedResultDto<GetAllKBolgeOutput>> {
        let result = await http.get('api/services/app/KBolge/GetAll', { params: pagedFilterAndSortedRequest });
        return result.data.result;
    }

    public async get(entityDto: EntityDto): Promise<CreateOrUpdateKBolgeInput> {
        let result = await http.get('api/services/app/KBolge/Get', { params: entityDto });
        return result.data.result;
    }
}

export default new KBolgeService();
