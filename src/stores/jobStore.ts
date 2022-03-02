/*eslint-disable*/
import { action, observable } from 'mobx';
import { JobPromoteListDto } from '../services/jobs/dto/jobPromoteListDto';
import { JobPromoteRequestDto } from '../services/jobs/dto/jobPromoteRequestDto';
import skJobService from '../services/jobs/jobService';

class JobStore {
  @observable jobPositions!: JobPromoteListDto[];

  @action
  async getAllPositionForTitlee(jobPromoteRequestDto: JobPromoteRequestDto) {
    let result = await skJobService.getAllPositionForTitle(jobPromoteRequestDto);
    var value = result.sort(function (x, y) {
      return x.durum - y.durum;
    });
    this.jobPositions = value;
  }
}
export default JobStore;
  