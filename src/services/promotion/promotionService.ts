/*eslint-disable*/
import http from '../httpService';
import { CreateOrUpdateIKPromotionInput } from './dto/createOrUpdateIKPromotionInput';

class PromotionService {
  public async create(input: CreateOrUpdateIKPromotionInput) {
    let result = await http.post('iknorm/IKPromotion/Create', input);
    return result.data.result;
  }

  public async isAnyPersonel(registirationNumber: string) {
    let result = await http.get(
      'iknorm/IKPromotion/IsAnyPersonel?registirationNumber=' + registirationNumber
    );
    return result.data.result;
  }

  public async getIKPromotionFilterByDepartment(departmentObjId: string) {
    let result = await http.get(
      'iknorm/IKPromotion/GetKPromotionFilterByDepartment?departmentObjId=' + departmentObjId
    );
    return result.data.result;
  }

  public async getIKPromotionFilterByUnit(unitObjId: string) {
    let result = await http.get(
      'iknorm/IKPromotion/GetKPromotionFilterByUnit?unitObjId=' + unitObjId
    );
    return result.data.result;
  }
}
export default new PromotionService();
