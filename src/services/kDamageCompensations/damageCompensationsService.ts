/* eslint-disable */
import http from '../httpService';
import { EntityDto } from '../dto/entityDto';
import { FileDamage } from './dto/fileDamage';
import { GetCariListDamage } from './dto/getCariListDamage';
import { CreateDamageInput } from './dto/createDamageInput';
import { ViewClass } from './dto/viewClass';
import { GetCreateDamageInput } from './dto/GetCreateDamageInput';
import { UpdateDamageCompensationClass } from './dto/updateDamageCompensation';
import { FilterDamageCompensationDto } from './dto/filterDamageCompensationDto';
import { DamageCompensationEvalutainon } from './dto/damageCompensationEvalutaion';
import { GetCurrent } from './dto/getCurrent';

import { UpdateNextStatu } from './dto/updateNextStatu';


class KDamageCompensationService {
  public async create(createDamageInput: CreateDamageInput) {
    await http.post('iknorm/DamageCompensation/create', createDamageInput);
  }

  public async getDamageComppensation(entityDto: EntityDto): Promise<GetCreateDamageInput> {
    let result = await http.get('iknorm/DamageCompensation/GetById', { params: entityDto });
    return result.data.result;
  }

  public async getCariListDamageCompensation(entityDto: EntityDto): Promise<GetCariListDamage[]> {
    let result = await http.get('iknorm/DamageCompensation/GetCariListAsynDamage', {
      params: entityDto,
    });
    return result.data.result;
  }

  public async getSubeListDamageComppensation() {
    let result = await http.get('iknorm/DamageCompensation/GetBranchsListDamage');
    return result.data.result;
  }

  public async getBolgeListDamageComppensation() {
    let result = await http.get('iknorm/DamageCompensation/GetAreaListDamage');
    return result.data.result;
  }

  public async getBirimListDamageComppensation() {
    let result = await http.get('iknorm/DamageCompensation/GetBirimListAsynDamage');
    return result.data.result;
  }

  public async getDamageComppensationLastId() {
    let result = await http.get('iknorm/DamageCompensation/GetDamageLastId');
    return result;
  }

  public async getAllDamageCompensationService() {
    let result = await http.get('iknorm/DamageCompensation/GetAllDamageCompensation');
    return result.data.result;
  }

  public async getDamageComppensationByIdService(
    entityDto: EntityDto
  ): Promise<UpdateDamageCompensationClass> {
    let result = await http.get('iknorm/DamageCompensation/GetDamageCompenSationById', {
      params: entityDto,
    });
    return result.data.result;
  }

  public async updateDamage(updateDamage: UpdateDamageCompensationClass) {
    let result = await http.put('iknorm/DamageCompensation/Update', updateDamage);
    return result;
  }

  public async getFilterDamageCompensationService(
    filterDamageCompensationDto: FilterDamageCompensationDto
  ) {
    let result = await http.get('iknorm/DamageCompensation/GetDamageCompensationFilter', {
      params: filterDamageCompensationDto,
    });
    return result.data.result;
  }

  public async createDamageCompensationEvalutaion(
    damageCompensationEvalutainon: DamageCompensationEvalutainon
  ) {
    let result = await http.post(
      'iknorm/DamageCompensationEvalutaion/Create',
      damageCompensationEvalutainon
    );
    return result.data.result;
  }

  public async getDamageComppensationViewByIdService(
    entityDto: EntityDto
  ): Promise<ViewClass> {
    let result = await http.get('iknorm/DamageCompensation/GetViewById', { params: entityDto });
    return result.data.result;
  }

  public async getDamageComppensationEvaViewByIdService(
    entityDto: EntityDto
  ): Promise<ViewClass> {
    let result = await http.get('iknorm/DamageCompensationEvalutaion/GetLastTazminIdRow', {
      params: entityDto,
    });
    return result.data.result;
  }

  public async postFileUpdateDamageCompensationService(fileDamage: FileDamage) {
    let result = await http.put('/iknorm/DamageCompensationFileInfo/UpdateFileList', fileDamage);
    return result;
  }



  //get enum tazmin nedeni değerler
  public async getEnumCompensationWhyService(
    id: string,  
  ) {
    let result = await http.get('iknorm/DamageCompensation/GetEnumListById?id='+id+'');
    return result.data.result;
  }

      

  //tazmin formu onyalandı kapatıldı
  public async postCompensationApproval(id:number){
     await http.post('iknorm/DamageCompensation/ApprovalBtn?id='+id+'')
  }



  //tazmin tarihce
  public async getDamageHistroy(id:number){
    let result= await http.get('iknorm/OpsHistory/GetListDamage?id='+id+'')
    return result.data.result;
 }

 
//tazmin formu onyalandı kapatıldı
public async postDamageUpdateFileAfter(id:number){
  await http.get('iknorm/DamageCompensation/GetUpdateFileAfter?id='+id+'')
}


//Cari kart kaydetme  
public async postCurrentCreate(createCurrent: GetCurrent){
  await http.post('iknorm/OpsCuurent/Create', createCurrent);
}




//il listesi
public async getAllCity(){
    let result= await http.get('https://localhost:44373/kcity'); 
  return result.data
}


//ile göre ilce çagırma 
public async GetByIdDistrict(id:number){
  let result= await http.get('https://localhost:44373/kdistrictbyid?cityId='+id+'');
  return result.data
}



//ülke listesi
public async GetCountry(){
  let result= await http.get('https://localhost:44373/GetCountry');
return result.data
}





//mahalle arama göre ilce çagırma 
public async GetByFindAddress(districtId:number ,districtName:string,myp_adi:string){
  let result= await http.get('https://localhost:44373/GetByFindAddress?districtId='+districtId+'&districtName='+districtName+'&myp_adi='+myp_adi+'');
  return result.data
}




//gelen giden kargo 
public async GetComeOutCargo(id:number){
  let result= await http.get('https://localhost:44373/kkargoGetById?id='+id+'');
  return result.data
}






//PostUpdateDamageStatus
public async PostUpdateDamageStatus(updateNextStatu: UpdateNextStatu) {
  let result = await http.put('iknorm/DamageCompensation/UpdateDamageStatus',updateNextStatu);
  return result.data.result;
}








}

export default new KDamageCompensationService();
