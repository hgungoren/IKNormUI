import { action, observable } from 'mobx';
import kNormService from '../services/kNorm/kNormService';
import { PagedResultDto } from '../services/dto/pagedResultDto';
import { EntityDto } from '../services/dto/entityDto';
import { GetKNormOutput } from '../services/kNorm/dto/getKNormOutput';
import { PagedKNormResultRequestDto } from '../services/kNorm/dto/pagedKNormResultRequestDto';
import { CreateKNormInput } from '../services/kNorm/dto/createKNormInput';
import { GetAllKNormOutput } from '../services/kNorm/dto/getAllKNormOutput';
import TalepTuru from '../services/kNorm/dto/talepTuru';
import NormStatus from '../services/kNorm/dto/normStatus';


class KNormStore {

    @observable kNorms!: PagedResultDto<GetAllKNormOutput>;
    @observable editKNorm!: GetKNormOutput;

    @observable getPendingNormFillRequest!: GetAllKNormOutput[];
    @observable getTotalNormFillingRequest!: GetAllKNormOutput[];
    @observable getAcceptedNormFillRequest!: GetAllKNormOutput[];
    @observable getCanceledNormFillRequest!: GetAllKNormOutput[];

    @observable getTotalNormUpdateRequest!: GetAllKNormOutput[];
    @observable getPendingNormUpdateRequest!: GetAllKNormOutput[];
    @observable getAcceptedNormUpdateRequest!: GetAllKNormOutput[];
    @observable getCanceledNormUpdateRequest!: GetAllKNormOutput[];

    @action
    async getMaxAll(pagedFilterAndSortedRequest: PagedKNormResultRequestDto) {
        let result = await kNormService.getAll(pagedFilterAndSortedRequest);
        this.getTotalNormFillingRequest = result.items.filter(x => TalepTuru[x.turu] === TalepTuru.Norm_Doldurma);
        this.getPendingNormFillRequest = result.items.filter(x => TalepTuru[x.turu] === TalepTuru.Norm_Doldurma && NormStatus[x.normStatusValue] === NormStatus.Beklemede);
        this.getAcceptedNormFillRequest = result.items.filter(x => TalepTuru[x.turu] === TalepTuru.Norm_Doldurma && NormStatus[x.normStatusValue] === NormStatus.Onaylandi);
        this.getCanceledNormFillRequest = result.items.filter(x => TalepTuru[x.turu] === TalepTuru.Norm_Doldurma && NormStatus[x.normStatusValue] === NormStatus.Iptal);

        this.getTotalNormUpdateRequest = result.items.filter(x => TalepTuru[x.turu] === TalepTuru.Norm_Arttir || TalepTuru[x.turu] === TalepTuru.Norm_Kaydir);
        this.getPendingNormUpdateRequest = result.items.filter(x => TalepTuru[x.turu] === (TalepTuru.Norm_Arttir || TalepTuru[x.turu] === TalepTuru.Norm_Kaydir) && NormStatus[x.normStatusValue] === NormStatus.Beklemede);
        this.getAcceptedNormUpdateRequest = result.items.filter(x => TalepTuru[x.turu] === (TalepTuru.Norm_Arttir || TalepTuru[x.turu] === TalepTuru.Norm_Kaydir) && NormStatus[x.normStatusValue] === NormStatus.Onaylandi);
        this.getCanceledNormUpdateRequest = result.items.filter(x => TalepTuru[x.turu] === (TalepTuru.Norm_Arttir || TalepTuru[x.turu] === TalepTuru.Norm_Kaydir) && NormStatus[x.normStatusValue] === NormStatus.Iptal);
    }

    @action
    async getAll(pagedFilterAndSortedRequest: PagedKNormResultRequestDto) {
        let result = await kNormService.getAll(pagedFilterAndSortedRequest);
        this.kNorms = result;
    }

    @action
    async get(entityDto: EntityDto) {
        let result = await kNormService.get(entityDto);
        this.editKNorm = result;
    }
 
    @action
    async create(createKNormInput: CreateKNormInput) {
        let result = await kNormService.create(createKNormInput);
        this.kNorms.items.push(result);
    } 
}

export default KNormStore;