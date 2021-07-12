import { TalepDurumu } from "./talepDurumu";
import TalepNedeni from "./talepNedeni";
import {TalepTuru} from "./talepTuru";

export interface CreateKNormInput {
    TelepTuru: TalepTuru;
    Pozisyon: string;
    YeniPozisyon: string;
    TelepNedeni: TalepNedeni;
    PersonelId: number;
    Aciklama: string;
    SubeObjId: number;
    CreationTime: Date;
    TalepDurumu: TalepDurumu;
}