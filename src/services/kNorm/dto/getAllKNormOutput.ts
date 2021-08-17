import TalepDurumu from "./talepDurumu";
import TalepNedeni from "./talepNedeni";
import NormStatus from "./normStatus";

export interface GetAllKNormOutput {

    id: number;
    turu: string;
    durumu: string;
    nedeni: string;
    kNormId: number;
    aciklama: string;
    pozisyon: string;
    subeObjId: number;
    talepTuru: number;
    creationTime: Date;
    yeniPozisyon: null;
    personelId: number;
    normStatus: NormStatus;
    normStatusValue: string;
    talepDurumu: TalepDurumu;
    talepNedeni: TalepNedeni;
    bagliOlduguSubeObjId?: string; 
}