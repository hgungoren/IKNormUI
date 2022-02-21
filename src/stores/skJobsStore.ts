/*eslint-disable*/
import { action, observable } from 'mobx';
import { SKJobsPromoteListDto } from '../services/skJobs/dto/skJobsPromoteListDto';
import { SKJobsPromoteRequestDto } from '../services/skJobs/dto/skJobsPromoteRequestDto';
import skJobService from '../services/skJobs/skJobsService';

class SKJobsStore {
  @observable promotionPositions!: SKJobsPromoteListDto[];

  @action
  async getAllPositionForTitle(skJobsPromoteListDto: SKJobsPromoteRequestDto) {
    console.log("Girdi Store")
    let result = await skJobService.getAllPositionForTitle(skJobsPromoteListDto);
    this.promotionPositions = result;
  }
}
export default SKJobsStore;
