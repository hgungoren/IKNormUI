/*eslint-disable*/
import http from '../httpService';
import { JobPromoteListDto } from './dto/jobPromoteListDto';
import { JobPromoteRequestDto } from './dto/jobPromoteRequestDto';

class JobService {
  public async getAllPositionForTitle(jobPromoteRequestDto: JobPromoteRequestDto): Promise<JobPromoteListDto[]> {
    let result = await http.get('iknorm/SKJobs/GetAllPositionForTitle', {
    params: jobPromoteRequestDto,
    });
    return result.data.result;
  }
}
export default new JobService();
