import TalepDurumu from "./talepDurumu";
import TalepNedeni from "./talepNedeni";
import NormStatus from "./normStatus";

export interface GetAllKNormOutput {
    objId: number;
    aciklama: string;
    creationTime: Date;
    durumu: string;
    id: number;
    nedeni: string;
    normStatus: NormStatus;
    normStatusValue: string;
    personelId: number;
    pozisyon: string;
    subeObjId: number;
    talepDurumu: TalepDurumu;
    talepNedeni: TalepNedeni;
    talepTuru: number;
    turu: string;
    yeniPozisyon: null;
    kNormId: number;

}