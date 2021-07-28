import TalepDurumu from '../../kNorm/dto/talepTuru'
import TalepTuru from "../../kNorm/dto/talepTuru";


export interface CreateKNormDetailInput {
    kNormId:     number,
    description: string,
    talepDurumu: TalepDurumu,
    talepTuru:   TalepTuru
}