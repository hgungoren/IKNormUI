import http from '../httpService';
import { EntityDto } from '../dto/entityDto';
import { CreateDamageInput } from './dto/createDamageInput';
import { GetCreateDamageInput} from './dto/GetCreateDamageInput'

class KDamageCompensationService {

    public async create(createDamageInput: CreateDamageInput) {
        let result = await http.post('api/services/app/DamageCompensation/Create', createDamageInput);
        return result.data.result;
    }

    public async getDamageComppensation(entityDto: EntityDto): Promise<GetCreateDamageInput> {
       
        let result = await http.get('api/services/app/DamageCompensation/GetById', { params: entityDto });      
        return result.data.result
    }
}

export default new KDamageCompensationService();