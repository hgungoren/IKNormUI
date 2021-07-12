import { TalepDurumu } from "./talepDurumu";
import TalepNedeni from "./talepNedeni";
import { TalepTuru } from "./talepTuru";

export interface GetKNormOutput {
    ObjId: number;
    TelepTuru: TalepTuru;
    Pozisyon: string;
    YeniPozisyon: string;
    TelepNedeni: TalepNedeni;
    PersonelId: number;
    Aciklama: string;
    SubeObjId: number;
    CreationTime: Date;
    TalepDurumu: TalepDurumu;

    Nedeni: string;
    Turu: string;
    Durumu: string;
}