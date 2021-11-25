/* eslint-disable */
import { PagedResultDto } from '../dto/pagedResultDto';
import http from '../httpService';
import {
  GetAllHierarchyOutput,
  UnitOutput,
  ChangeStatus,
  GenerateHierarchyDto,
  ChangeToPassiveStatus,
  ChangeSelectedTrueDto,
} from './dto/getAllHierarchyOutput';
import { NodeDto } from './dto/nodeDto';
import { PagedNodeResultRequestDto } from './dto/PagedKHierarchyResultRequestDto';

class KHierarchyService {
  public async getAll(tip: string, id: string): Promise<GetAllHierarchyOutput[]> {
    let result = await http.get('iknorm/KHierarchy/GetKHierarcies?tip=' + tip + '&id=' + id);
    return result.data.result;
  }

  public async getUnits(): Promise<PagedResultDto<UnitOutput>> {
    let result = await http.get('iknorm/Unit/GetAll');
    return result.data.result;
  }

  public async update(changeStatus: ChangeStatus): Promise<boolean> {
    let result = await http.put('iknorm/Node/UpdateStatus', changeStatus);
    return result.data.result;
  }

  public async updateToPassive(changeToPassiveStatus: ChangeToPassiveStatus): Promise<boolean> {
    let result = await http.put('iknorm/Node/UpdateStatuToPassive', changeToPassiveStatus);
    return result.data.result;
  }

  public async generateHierarchy(
    generateHierarchyDto: GenerateHierarchyDto
  ): Promise<GetAllHierarchyOutput[]> {
    let result = await http.get('iknorm/KHierarchy/GetHierarchy', {
      params: generateHierarchyDto,
    });
    return result.data.result;
  }

  public async updateOrderNodes(ids: any): Promise<boolean> {
    let result = await http.put('iknorm/Node/UpdateOrderNodes', ids);
    return result.data.result;
  }

  public async updateSetFalse(id: string): Promise<boolean> {
    let result = await http.put('iknorm/Node/UpdateSetFalse?id=' + id);
    return result.data.result;
  }

  public async updateSetTrue(changeSelected: ChangeSelectedTrueDto): Promise<boolean> {
    let result = await http.put('iknorm/Node/UpdateSetTrue', changeSelected);
    return result.data.result;
  }

  public async getNodes(pagedNodeResultRequestDto: PagedNodeResultRequestDto): Promise<NodeDto[]> {
    let result = await http.get('iknorm/Node/GetNodes', { params: pagedNodeResultRequestDto });
    return result.data.result;
  }
}

export default new KHierarchyService();
