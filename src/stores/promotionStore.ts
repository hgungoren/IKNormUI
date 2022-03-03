/*eslint-disable*/
import { action, observable } from 'mobx';
import { CreateOrUpdateIKPromotionInput } from '../services/promotion/dto/createOrUpdateIKPromotionInput';
import { PromotionFilterDto } from '../services/promotion/dto/promotionFilterDto';
import { PromotionRequestTitleDto } from '../services/promotion/dto/promotionRequestTitleDto';
import { PromotionStatuDto } from '../services/promotion/dto/promotionStatuDto';
import { PromotionTitleDto } from '../services/promotion/dto/promotionTitleDto';
import { PromotionUseFilterDto } from '../services/promotion/dto/promotionUseFilterDto';
import promotionService from '../services/promotion/promotionService';

class PromotionStore {
  @observable isAnyPersonelResult!: boolean;
  @observable filterPromotion!: PromotionFilterDto[];
  @observable filterPromotionCount!: number;
  @observable promotionStatus!: PromotionStatuDto;
  @observable promotionTitles!: PromotionTitleDto;
  @observable promotionRequestTitles!: PromotionRequestTitleDto;

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
  public async getIKPromotionFilterByDepartmentCount(departmentObjId: string) {
    let result = await promotionService.getIKPromotionFilterByDepartmentCount(departmentObjId);
    this.filterPromotionCount = result;
  }

  @action
  public async getIKPromotionFilterByUnit(unitObjId: string) {
    let result = await promotionService.getIKPromotionFilterByUnit(unitObjId);
    this.filterPromotion = result;
  }

  public async getIKPromotionFilterByUnitCount(unitObjId: string) {
    let result = await promotionService.getIKPromotionFilterByUnitCount(unitObjId);
    this.filterPromotionCount = result;
  }
  @action
  public async getIKPromotionStatus() {
    let result = await promotionService.getIKPromotionStatus();
    this.promotionStatus = result;
  }

  @action
  public async getIKPromotionTitles() {
    let result = await promotionService.getIKPromotionTitles();
    this.promotionTitles = result;
  }

  @action
  public async getIKPromotionRequestTitles(title: string) {
    let result = await promotionService.getIKPromotionRequestTitles(title);
    this.promotionRequestTitles = result;
  }

  @action
  public async filterPromotionData(promotionUseFilterDto: PromotionUseFilterDto) {
    this.filterPromotion = this.filterPromotion
      .filter((x) =>
        promotionUseFilterDto.statu === undefined ? true : x.statu === promotionUseFilterDto.statu
      )
      .filter((x) =>
        promotionUseFilterDto.title === undefined ? true : x.title === promotionUseFilterDto.title
      )
      .filter((x) =>
        promotionUseFilterDto.promotionRequestTitle === undefined
          ? true
          : x.promotionRequestTitle === promotionUseFilterDto.promotionRequestTitle
      )
      .filter((x) =>
        promotionUseFilterDto.firstRequestDate === undefined &&
        promotionUseFilterDto.secondRequestDate === undefined
          ? true
          : x.requestDate <= promotionUseFilterDto.secondRequestDate &&
            x.requestDate >= promotionUseFilterDto.secondRequestDate
      );
  }
}
export default PromotionStore;
