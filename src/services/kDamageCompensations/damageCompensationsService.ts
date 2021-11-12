import http from '../httpService';
import { EntityDto } from '../dto/entityDto';
import { CreateDamageInput } from './dto/createDamageInput';
import { GetCreateDamageInput} from './dto/GetCreateDamageInput'
import { GetCariListDamage} from './dto/getCariListDamage'
//import { getSubeList} from './dto/getSubeList'
//import { getBirimList} from './dto/getBirimList'



class KDamageCompensationService {

    public async create(createDamageInput: CreateDamageInput) {
        let result = await http.post('api/services/app/DamageCompensation/Create', createDamageInput);
        return result.data.result;
    }

    public async getDamageComppensation(entityDto: EntityDto): Promise<GetCreateDamageInput> {
       
        let result = await http.get('api/services/app/DamageCompensation/GetById', { params: entityDto }); 
        //console.log('result=>',result)     
        return result.data.result
    }

    //cari listes
    public async getCariListDamageCompensation(entityDto:EntityDto):Promise<GetCariListDamage[]>{
        let result = await http.get('api/services/app/DamageCompensation/GetCariListAsynDamage', { params: entityDto });  
       // console.log('services.result.data.result=>',result.data.result) 
        return result.data.result

    }

   ///sube listesi
    public async getSubeListDamageComppensation(){
     
        let result = await http.get('api/services/app/DamageCompensation/GetBranchsListDamage');  
         //console.log('services.result.data.result=>',result.data.result) 
        return result.data.result
    }

           ///sube listesi
    public async getBolgeListDamageComppensation(){
     
        let result = await http.get('api/services/app/DamageCompensation/GetAreaListDamage');  
         //console.log('services.result.data.result=>',result.data.result) 
        return result.data.result
    }


    //birim listesi
    public async getBirimListDamageComppensation(){
        let result = await http.get('api/services/app/DamageCompensation/GetBirimListAsynDamage');  
     //  console.log('services.result.data.result=>',result.data.result) 
        return result.data.result
    }


      // Son id cekme 
      public async getDamageComppensationLastId(){
          let result= await http.get('api/services/app/DamageCompensation/GetDamageLastId');
         //  console.log('service',result)
           return result;
      }



   

    





}

export default new KDamageCompensationService();