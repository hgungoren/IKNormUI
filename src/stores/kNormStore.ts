import { GetKNormCount } from './../services/kNorm/dto/getKNormCount';
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

    @observable getPendingNormFillRequestCount!: number;
    @observable getTotalNormFillingRequestCount!: number;
    @observable getAcceptedNormFillRequestCount!: number;
    @observable getCanceledNormFillRequestCount!: number;

    @observable getTotalNormUpdateRequestCount!: number;
    @observable getPendingNormUpdateRequestCount!: number;
    @observable getAcceptedNormUpdateRequestCount!: number;
    @observable getCanceledNormUpdateRequestCount!: number;


    @action
    async getMaxAll(pagedFilterAndSortedRequest: PagedKNormResultRequestDto) {

        let result: PagedResultDto<GetAllKNormOutput>;


        if (pagedFilterAndSortedRequest.type === "sube") {
            result = await kNormService.getAllSube(pagedFilterAndSortedRequest);
        }
        else if (pagedFilterAndSortedRequest.type === "subedetail") {
            result = await kNormService.getAllSubeDetail(pagedFilterAndSortedRequest);
        }
        else {
            result = await kNormService.getAllBolge(pagedFilterAndSortedRequest);
        }



        this.getTotalNormFillingRequest   = result.items.filter(x => TalepTuru[x.turu] === TalepTuru.Norm_Doldurma);
        this.getPendingNormFillRequest    = this.getTotalNormFillingRequest.filter(x => NormStatus[x.normStatusValue] === NormStatus.Beklemede);
        this.getAcceptedNormFillRequest   = this.getTotalNormFillingRequest.filter(x => NormStatus[x.normStatusValue] === NormStatus.Onaylandi);
        this.getCanceledNormFillRequest   = this.getTotalNormFillingRequest.filter(x => NormStatus[x.normStatusValue] === NormStatus.Iptal);

        this.getTotalNormUpdateRequest    = result.items.filter(x => TalepTuru[x.turu] === TalepTuru.Norm_Arttir || TalepTuru[x.turu] === TalepTuru.Norm_Kaydir);
        this.getPendingNormUpdateRequest  = this.getTotalNormUpdateRequest.filter(x => NormStatus[x.normStatusValue] === NormStatus.Beklemede);
        this.getAcceptedNormUpdateRequest = this.getTotalNormUpdateRequest.filter(x => NormStatus[x.normStatusValue] === NormStatus.Onaylandi);
        this.getCanceledNormUpdateRequest = this.getTotalNormUpdateRequest.filter(x => NormStatus[x.normStatusValue] === NormStatus.Iptal);
    }

    @action
    async getMaxAllCount(pagedFilterAndSortedRequest: PagedKNormResultRequestDto) {


        let result: PagedResultDto<GetAllKNormOutput>;
        if (pagedFilterAndSortedRequest.type === "sube") {
            result = await kNormService.getAllSube(pagedFilterAndSortedRequest);
        }
        else if (pagedFilterAndSortedRequest.type === "subedetail") {
            result = await kNormService.getAllSubeDetail(pagedFilterAndSortedRequest);
        }
        else {
            result = await kNormService.getAllBolge(pagedFilterAndSortedRequest);
        }

        // this.getTotalNormFillingRequestCount = result.items.filter(x => TalepTuru[x.turu] === TalepTuru.Norm_Doldurma).length;
        // this.getPendingNormFillRequestCount = this.getTotalNormFillingRequest.filter(x => NormStatus[x.normStatusValue] === NormStatus.Beklemede).length;
        // this.getAcceptedNormFillRequestCount = this.getTotalNormFillingRequest.filter(x => NormStatus[x.normStatusValue] === NormStatus.Onaylandi).length;
        // this.getCanceledNormFillRequestCount = this.getTotalNormFillingRequest.filter(x => NormStatus[x.normStatusValue] === NormStatus.Iptal).length;

        this.getTotalNormUpdateRequestCount = result.items.filter(x => TalepTuru[x.turu] === TalepTuru.Norm_Arttir || TalepTuru[x.turu] === TalepTuru.Norm_Kaydir).length;
        this.getPendingNormUpdateRequestCount = this.getTotalNormUpdateRequest.filter(x => NormStatus[x.normStatusValue] === NormStatus.Beklemede).length;
        this.getAcceptedNormUpdateRequestCount = this.getTotalNormUpdateRequest.filter(x => NormStatus[x.normStatusValue] === NormStatus.Onaylandi).length;
        this.getCanceledNormUpdateRequestCount = this.getTotalNormUpdateRequest.filter(x => NormStatus[x.normStatusValue] === NormStatus.Iptal).length;

    }

    @action
     async getMaxAreaCount(pagedFilterAndSortedRequest: PagedKNormResultRequestDto){

        let result: PagedResultDto<GetKNormCount>
        result =  await kNormService.getAllBolgeCount(pagedFilterAndSortedRequest);
        console.log(result.items);
        this.getTotalNormFillingRequestCount = result.items.filter(x => TalepTuru[x.turu] === TalepTuru.Norm_Doldurma).length;
        this.getPendingNormFillRequestCount = this.getTotalNormFillingRequest.filter(x => NormStatus[x.normStatusValue] === NormStatus.Beklemede).length;
        this.getAcceptedNormFillRequestCount = this.getTotalNormFillingRequest.filter(x => NormStatus[x.normStatusValue] === NormStatus.Onaylandi).length;
        this.getCanceledNormFillRequestCount = this.getTotalNormFillingRequest.filter(x => NormStatus[x.normStatusValue] === NormStatus.Iptal).length;

    }

    @action
    async getAll(pagedFilterAndSortedRequest: PagedKNormResultRequestDto) {

        let result: PagedResultDto<GetAllKNormOutput>;
        if (pagedFilterAndSortedRequest.type === "sube") {
            result = await kNormService.getAllSube(pagedFilterAndSortedRequest);
        }
        else if (pagedFilterAndSortedRequest.type === "subedetail") {
            result = await kNormService.getAllSubeDetail(pagedFilterAndSortedRequest);
        }
        else {
            result = await kNormService.getAllBolge(pagedFilterAndSortedRequest);
        }

        this.kNorms = result;
    }

    @action
    async get(entityDto: EntityDto) {
        let result = await kNormService.get(entityDto);
        this.editKNorm = result;
    }


    @action
    async create(createKNormInput: CreateKNormInput) {

        console.log(createKNormInput)
        let result = await kNormService.create(createKNormInput);
        this.kNorms.items.push(result);
    }

    @action
    async setStatusAsync(createKNormInput: CreateKNormInput) {

        console.log(createKNormInput)
        await kNormService.setStatusAsync(createKNormInput);
    }
}

export default KNormStore;