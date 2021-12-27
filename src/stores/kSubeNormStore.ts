/* eslint-disable */
import { action, observable } from 'mobx';
import { EntityDto } from '../services/dto/entityDto';
import { PagedResultDto } from '../services/dto/pagedResultDto';
import { CreateOrUpdateKSubeNormInput } from '../services/kSubeNorm/dto/createOrUpdateKSubeNormInput';
import { GetKSubeNormOutput } from '../services/kSubeNorm/dto/getKSubeNormOutput';
import { PagedKSubeNormResultRequestDto } from '../services/kSubeNorm/dto/PagedKSubeNormResultRequestDto';
import { UpdateKSubeNormInput } from '../services/kSubeNorm/dto/updateKSubeNormInput';
import kSubeNormService from '../services/kSubeNorm/kSubeNormService';


class KSubeNormStore {
  
  @observable norms!: PagedResultDto<GetKSubeNormOutput>; 
  @observable editNorm!: CreateOrUpdateKSubeNormInput;
  @observable normCount!: number;
  @observable count!: number;

  @action
  async create(createKSubeNormInput: CreateOrUpdateKSubeNormInput) {
    let result = await kSubeNormService.create(createKSubeNormInput);
    this.norms.items.push(result);
  }

  @action
  async update(updateKSubeNormInput: UpdateKSubeNormInput) {
    let result = await kSubeNormService.update(updateKSubeNormInput); 
    this.norms.items = this.norms.items.map((x: GetKSubeNormOutput) => {
      if (x.id === updateKSubeNormInput.id) x = result;
      return x;
    });
  }

  @action
  async delete(entityDto: EntityDto<string>) {
    await kSubeNormService.delete(entityDto);
    this.norms.items = this.norms.items.filter((x: GetKSubeNormOutput) => x.id !== entityDto.id);
  }

  @action
  async get(entityDto: EntityDto<string>) {
    let result = await kSubeNormService.get(entityDto);
    this.editNorm = result;
  }

  @action
  async getAllNorms(pagedFilterAndSortedRequest: PagedKSubeNormResultRequestDto) {
    let result = await kSubeNormService.getAllNorms(pagedFilterAndSortedRequest);
   
    this.norms = result;
  }

  @action
  async getNormCount() {
    let result = await kSubeNormService.getNormCount();
    this.normCount = result;
  }
  @action
  async getNormsCount() {
    let result = await kSubeNormService.getNormsCount();
    this.normCount = result;
  }
  @action
  async getNormCountById(id: string) {
    let result = await kSubeNormService.getNormCountById(id);
    this.count = result;
  }
}

export default KSubeNormStore;
