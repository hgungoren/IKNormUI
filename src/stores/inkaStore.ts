/*eslint-disable*/
import { action, observable } from 'mobx';
import { IKGenelPersonelListReponseDto } from '../services/inka/dto/iKGenelPersonelListReponseDto';
import inkaService from '../services/inka/inkaService';

class InkaStore {
  @observable inkaUser!: IKGenelPersonelListReponseDto;
  @observable inkaUsersByUnit!: IKGenelPersonelListReponseDto[];

  @action
  async getAllInkaEmployeesByUnit(id: string) {
    let result = await inkaService.getAllInkaEmployeesByUnit(id);
    this.inkaUsersByUnit = result;
  }

  @action
  async getInkaEmployeeByTcNo(tcNo: string) {
    let result = await inkaService.getInkaEmployeeByTcNo(tcNo);
    this.inkaUser = result;
  }
}
export default InkaStore;
