import { action, observable } from 'mobx';
import { EntityDto } from '../services/dto/entityDto';
import { PagedResultDto } from '../services/dto/pagedResultDto';
import { FileDamage } from '../services/kDamageCompensations/dto/fileDamage';
import { GetSubeList } from '../services/kDamageCompensations/dto/getSubeList';
import { GetBirimList } from '../services/kDamageCompensations/dto/getBirimList';
import { GetBolgeList } from '../services/kDamageCompensations/dto/getBolgeList';
import { GetCariListDamage } from '../services/kDamageCompensations/dto/getCariListDamage';
import { CreateDamageInput } from '../services/kDamageCompensations/dto/createDamageInput';
import { ViewClass } from '../services/kDamageCompensations/dto/viewClass';
import { GetCreateDamageInput } from '../services/kDamageCompensations/dto/getCreateDamageInput';
import KDamageCompensationService from '../services/kDamageCompensations/damageCompensationsService';
import { GetAllDamageCompensation } from '../services/kDamageCompensations/dto/getAllDamageCompensation';
import { UpdateDamageCompensationClass } from '../services/kDamageCompensations/dto/updateDamageCompensation';
import { DamageCompensationEvalutainon } from '../services/kDamageCompensations/dto/damageCompensationEvalutaion';
import { FilterDamageCompensationDto } from '../services/kDamageCompensations/dto/filterDamageCompensationDto';
import { GetEnumCompensationWhy } from '../services/kDamageCompensations/dto/getEnumCompensationWyh';

class KDamageCompensationStore {
  @observable kdamage!: PagedResultDto<CreateDamageInput>;
  @observable getCreateDamageInput!: GetCreateDamageInput;
  @observable getCariListDamage!: GetCariListDamage[];
  @observable getSubeListDamage!: GetSubeList[];
  @observable getBolgeListDamage!: GetBolgeList[];
  @observable getBirimListDamage!: GetBirimList[];
  @observable lastIdDamage!: number;
  @observable getAllDamageCompensationStoreClass!: GetAllDamageCompensation[];
  @observable updateDamageCompensationClass!: UpdateDamageCompensationClass;
  @observable damageCompensationEvalutaion!: DamageCompensationEvalutainon;
  @observable damageCompensationViewClass!: ViewClass;
  @observable createNev!: string;
  @observable updateFile!: string;
  @observable fileDamage!: FileDamage;
  @observable getEnumCompensationWhy !:GetEnumCompensationWhy[]

  
  @action
  async create(createDamage: CreateDamageInput) {
    await KDamageCompensationService.create(createDamage);
    //console.log('CreateNew Store=>',result)
    //this.createNev=result
  }

  @action
  async getDamageComppensation(entityDto: EntityDto) {
    let result = await KDamageCompensationService.getDamageComppensation(entityDto);
    this.getCreateDamageInput = result;
  }

  @action
  async getCariListDamageComppensation(entityDto: EntityDto) {
    let result = await KDamageCompensationService.getCariListDamageCompensation(entityDto);
    // console.log('store.result=>',result)
    this.getCariListDamage = result;
  }

  //sube listesi
  @action
  async getSubeListDamageComppensation() {
    let result = await KDamageCompensationService.getSubeListDamageComppensation();
    this.getSubeListDamage = result;
    // console.log('store.result.Sube=>',result)
  }

  //bolge listesi
  @action
  async getBolgeListDamageComppensation() {
    let result = await KDamageCompensationService.getBolgeListDamageComppensation();
    this.getBolgeListDamage = result;
  }

  //birim listesi
  @action
  async getBirimListDamageComppensation() {
    let result = await KDamageCompensationService.getBirimListDamageComppensation();
    this.getBirimListDamage = result;
  }

  //son id cekme
  @action
  async GetDamageComppensationLastId() {
    let result = await KDamageCompensationService.getDamageComppensationLastId();
    //   console.log('STORE=>',result.data)
    this.lastIdDamage = result.data.result;

    return result.data;
  }

  //tazmin listesi cekme
  @action
  async StoregetAllDamageCompansation() {
    let result = await KDamageCompensationService.getAllDamageCompensationService();
    this.getAllDamageCompensationStoreClass = result;
    //console.log('STORE=>',result)
    return result;
  }

  //get compensation ById
  @action
  async StoregetDamageComppensationById(entityDto: EntityDto) {
    let result = await KDamageCompensationService.getDamageComppensationByIdService(entityDto);
    this.updateDamageCompensationClass = result;
  }

  /// damage compensaiton update
  async StoreDamageCompensationUpdate(updateDamage: UpdateDamageCompensationClass) {
    await KDamageCompensationService.updateDamage(updateDamage);
  }

  //tazmin listesi cekme  Filtreleme
  @action
  async StoregetFilterDamageCompansation(filterDamageCompensationDto: FilterDamageCompensationDto) {
    let result = await KDamageCompensationService.getFilterDamageCompensationService(
      filterDamageCompensationDto
    );
    this.getAllDamageCompensationStoreClass = result;
    //console.log('STORE=>',result)
    return result;
  }

  /// DEĞERLENDİRME CREATE
  @action
  async createDamageCompensationEvalutaion(
    damageCompensationEvalutaion: DamageCompensationEvalutainon
  ) {
    await KDamageCompensationService.createDamageCompensationEvalutaion(
      damageCompensationEvalutaion
    );
    // this.kdamage.items.push(result);
  }

  //get compensation View ById
  @action
  async StoregetDamageComppensationViewById(entityDto: EntityDto) {
    let result = await KDamageCompensationService.getDamageComppensationViewByIdService(entityDto);
    this.damageCompensationViewClass = result;
  }

  //get compensationEva View ById
  @action
  async StoregetDamageComppensationEvaViewById(entityDto: EntityDto) {
    let result = await KDamageCompensationService.getDamageComppensationEvaViewByIdService(
      entityDto
    );
    this.damageCompensationViewClass = result;
  }

  //file update
  @action
  async StoregetFileUpdateDamageCompansation(entityDto: FileDamage) {
    let result = await KDamageCompensationService.postFileUpdateDamageCompensationService(
      entityDto
    );
    this.updateFile = result.data.result;
    return result.data.result;
  }

//tazmin nedeni enum cekme 
@action
async  StoregetCompansationWhy(id : string){          
let result = await KDamageCompensationService.getEnumCompensationWhyService(id);
this.getEnumCompensationWhy = result;
return result
}

   
  //tazmin formu onyalandı kapatıldı
  @action
  async  StoregetpostCompensationApproval(id : number){          
  let result = await KDamageCompensationService.postCompensationApproval(id);
  return result
  }



  


}

export default KDamageCompensationStore;
