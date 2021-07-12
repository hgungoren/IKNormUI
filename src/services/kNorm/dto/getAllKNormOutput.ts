import { TalepDurumu } from "./talepDurumu";
import TalepNedeni from "./talepNedeni";
import { TalepTuru } from "./talepTuru";

export interface GetAllKNormOutput {
    ObjId: number;
    TelepNedeni: TalepNedeni;
    TelepTuru: TalepTuru;
    TalepDurumu: TalepDurumu;
    Pozisyon: string;
    YeniPozisyon: string;
    PersonelId: number;
    Aciklama: string;
    SubeObjId: number;
    CreationTime: Date;

    Nedeni: string;
    Turu: string;
    Durumu: string;

}