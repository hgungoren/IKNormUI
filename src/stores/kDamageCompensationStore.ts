import { action, observable } from 'mobx';
import { EntityDto } from '../services/dto/entityDto';
import { PagedResultDto } from '../services/dto/pagedResultDto';
import { CreateDamageInput } from '../services/kDamageCompensations/dto/createDamageInput';
import { GetCreateDamageInput } from '../services/kDamageCompensations/dto/GetCreateDamageInput';
import KDamageCompensationService from '../services/kDamageCompensations/damageCompensationsService';

class KDamageCompensationStore {

    @observable kdamage!: PagedResultDto<CreateDamageInput>;
    @observable getCreateDamageInput!: GetCreateDamageInput;

    @action
    async create(createDamage: CreateDamageInput) {
        let result = await KDamageCompensationService.create(createDamage);
        this.kdamage.items.push(result);
    }

    @action
    async getDamageComppensation(entityDto: EntityDto) {    
        let result = await KDamageCompensationService.getDamageComppensation(entityDto);
        this.getCreateDamageInput = result;
        //console.log('test=>',result)
    }
}

export default KDamageCompensationStore;