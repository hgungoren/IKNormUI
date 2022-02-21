/*eslint-disable*/
import { IKGenelPersonelListReponseDto } from './dto/iKGenelPersonelListReponseDto';
import http from '../httpService';

class InkaService {
  public async getAllInkaEmployeesByUnit(unitId: string): Promise<IKGenelPersonelListReponseDto[]> {
    let result = await http.get(
      'inka/getallinkaemployeesbyunit/' + unitId
    );
   
    return result.data;
  }
  public async getInkaEmployeeByTcNo(tcNo: string): Promise<IKGenelPersonelListReponseDto> {
    let result = await http.get(
      'inka/getinkaemployeesbytcno/' + tcNo
    );
    return result.data;
  }
}

export default new InkaService();
