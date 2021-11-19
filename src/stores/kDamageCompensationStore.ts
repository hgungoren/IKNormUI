import { action, observable } from 'mobx';
import { EntityDto } from '../services/dto/entityDto';
import { PagedResultDto } from '../services/dto/pagedResultDto';
import { CreateDamageInput } from '../services/kDamageCompensations/dto/createDamageInput';
import { GetCreateDamageInput } from '../services/kDamageCompensations/dto/GetCreateDamageInput';
import KDamageCompensationService from '../services/kDamageCompensations/damageCompensationsService';
import { GetCariListDamage } from '../services/kDamageCompensations/dto/getCariListDamage';
import { getSubeList } from '../services/kDamageCompensations/dto/getSubeList';
import { getBirimList } from '../services/kDamageCompensations/dto/getBirimList';
import { getBolgeList } from '../services/kDamageCompensations/dto/getBolgeList';
//import { lastIdDamage } from '../services/kDamageCompensations/dto/lastIdDamage';
import { GetAllDamageCompensation } from '../services/kDamageCompensations/dto/GetAllDamageCompensation';


import { updateDamageCompensationClass } from '../services/kDamageCompensations/dto/updateDamageCompensation';









class KDamageCompensationStore {

    @observable kdamage!: PagedResultDto<CreateDamageInput>;
    @observable getCreateDamageInput!: GetCreateDamageInput;
    @observable getCariListDamage!: GetCariListDamage[];

    @observable getSubeListDamage!:getSubeList[];
    @observable getBolgeListDamage!:getBolgeList[];
    @observable getBirimListDamage!:getBirimList[];
    @observable lastIdDamage!:number;
    @observable getAllDamageCompensationStoreClass!:GetAllDamageCompensation[];

    @observable updateDamageCompensationClass!:updateDamageCompensationClass;






    @action
    async create(createDamage: CreateDamageInput) {
       await KDamageCompensationService.create(createDamage);  
       // this.kdamage.items.push(result);  
    }

  

    @action
    async getDamageComppensation(entityDto: EntityDto) {    
        let result = await KDamageCompensationService.getDamageComppensation(entityDto);
        this.getCreateDamageInput = result;
     
    }

    @action 
    async getCariListDamageComppensation(entityDto: EntityDto){
        let result = await KDamageCompensationService.getCariListDamageCompensation(entityDto);
        // console.log('store.result=>',result)
        this.getCariListDamage = result;
    }
   
     //sube listesi
     @action
     async getSubeListDamageComppensation(){
        let result = await KDamageCompensationService.getSubeListDamageComppensation();
        this.getSubeListDamage = result;
        // console.log('store.result.Sube=>',result)
    }

   //bolge listesi
   @action
   async getBolgeListDamageComppensation(){
      let result = await KDamageCompensationService.getBolgeListDamageComppensation();
      this.getBolgeListDamage = result;

  }

       //birim listesi
       @action
       async getBirimListDamageComppensation(){
          let result = await KDamageCompensationService.getBirimListDamageComppensation();
          this.getBirimListDamage = result;
      }


     //son id cekme
      @action
      async GetDamageComppensationLastId() {
         let result= await KDamageCompensationService.getDamageComppensationLastId(); 
        //   console.log('STORE=>',result.data) 
          this.lastIdDamage=result.data.result; 
          return result.data;
      }
  
     

      //tazmin listesi cekme 
      @action
      async  StoregetAllDamageCompansation(){
         let result = await KDamageCompensationService.getAllDamageCompensationService();
         this.getAllDamageCompensationStoreClass = result;
          //console.log('STORE=>',result)
         return result
     }



     //get compensation ById
     @action
     async StoregetDamageComppensationById(entityDto: EntityDto) {    
        let result = await KDamageCompensationService.getDamageComppensationByIdService(entityDto);
        this.updateDamageCompensationClass = result;
     
    }



     /// damage compensaiton update 
     async StoreDamageCompensationUpdate(updateDamage: updateDamageCompensationClass){
        await KDamageCompensationService.updateDamage(updateDamage); 
     }

    
}

export default KDamageCompensationStore;