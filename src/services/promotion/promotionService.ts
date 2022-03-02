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

  public async getIKPromotionFilterByDepartmentCount(departmentObjId: string) {
    let result = await http.get(
      'iknorm/IKPromotion/GetKPromotionFilterByDepartmentCount?departmentObjId=' + departmentObjId
    );
    return result.data.result;
  }

  public async getIKPromotionFilterByUnit(unitObjId: string) {
    let result = await http.get(
      'iknorm/IKPromotion/GetKPromotionFilterByUnit?unitObjId=' + unitObjId
    );
    return result.data.result;
  }

  public async getIKPromotionFilterByUnitCount(unitObjId: string) {
    let result = await http.get(
      'iknorm/IKPromotion/GetKPromotionFilterByUnitCount?unitObjId=' + unitObjId
    );
    return result.data.result;
  }

  public async getIKPromotionStatus() {
    let result = await http.get('iknorm/IKPromotion/GetIKPromotionStatus');
    return result.data.result;
  }

  public async getIKPromotionTitles() {
    let result = await http.get('iknorm/IKPromotion/GetIKPromotionTitles');
    return result.data.result;
  }

  public async getIKPromotionRequestTitles(title: string) {
    let result = await http.get('iknorm/IKPromotion/GetIKPromotionRequestTitles?title=' + title);
    return result.data.result;
  }
}
export default new PromotionService();