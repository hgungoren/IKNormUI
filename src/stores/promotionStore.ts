/*eslint-disable*/
import { action, observable } from 'mobx';
import { CreateOrUpdateIKPromotionInput } from '../services/promotion/dto/createOrUpdateIKPromotionInput';
import { PromotionFilterDto } from '../services/promotion/dto/promotionFilterDto';
import promotionService from '../services/promotion/promotionService';

class PromotionStore {
  @observable isAnyPersonelResult!: boolean;
  @observable filterPromotion!: PromotionFilterDto[];

  @action
  async create(createPromotionInput: CreateOrUpdateIKPromotionInput) {
    await promotionService.create(createPromotionInput);
  }
  @action
  async isAnyPersonel(registirationNumber: string) {
    let result = await promotionService.isAnyPersonel(registirationNumber);
    this.isAnyPersonelResult = result;
  }

  @action
  public async getIKPromotionFilterByDepartment(departmentObjId: string) {
    let result = await promotionService.getIKPromotionFilterByDepartment(departmentObjId);
    this.filterPromotion = result;
  }
  @action
  public async getIKPromotionFilterByUnit(unitObjId: string) {
    let result = await promotionService.getIKPromotionFilterByUnit(unitObjId);
    this.filterPromotion = result;
  }
}
export default PromotionStore;
