/*eslint-disable*/
import http from '../httpService';
import { SKJobsPromoteListDto } from './dto/skJobsPromoteListDto';
import { SKJobsPromoteRequestDto } from './dto/skJobsPromoteRequestDto';

class SKJobsService {
  public async getAllPositionForTitle(skJobsPromoteListDto: SKJobsPromoteRequestDto): Promise<SKJobsPromoteListDto[]> {
    let result = await http.get('iknorm/SKJobs/GetAllPositionForTitle', {
    params: skJobsPromoteListDto,
    });
    console.log("Girdi Service")
    return result.data.result;
  }
}
export default new SKJobsService();
