import TalepDurumu from "./talepDurumu";
import TalepNedeni from "./talepNedeni";
import TalepTuru from "./talepTuru";

export interface GetKNormOutput {
    objId: number;
    telepTuru: TalepTuru;
    pozisyon: string;
    yeniPozisyon: string;
    telepNedeni: TalepNedeni;
    personelId: number;
    aciklama: string;
    subeObjId: number;
    creationTime: Date;
    talepDurumu: TalepDurumu;
    nedeni: string;
    turu: string;
    durumu: string;
    kNormId: number;
    id: number;
}