import NormStatus from "./normStatus";
import TalepDurumu from "./talepDurumu";
import TalepNedeni from "./talepNedeni";
import TalepTuru from "./talepTuru";

export interface CreateKNormInput {
    telepTuru: TalepTuru;
    pozisyon: string;
    yeniPozisyon: string;
    telepNedeni: TalepNedeni;
    personelId: number;
    aciklama: string;
    subeObjId: number;
    creationTime: Date;
    talepDurumu: TalepDurumu;
    normStatus: NormStatus;
}