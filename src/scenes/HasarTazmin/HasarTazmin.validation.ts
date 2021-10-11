

import { L } from '../../lib/abpUtility';

const rules = {
  takipNo: [{ required: true, message: L('ThisFieldIsRequired') }],
  kargoKabulFisNo: [{ required: true, message: L('ThisFieldIsRequired') }],
  evrakOlusturmaTarihi: [{ required: true, message: L('ThisFieldIsRequired') }],
  evrakSeriSiraNo: [{ required: true, message: L('ThisFieldIsRequired') }],
  gondericiKodu: [{ required: true, message: L('ThisFieldIsRequired') }],
  gondericiUnvan: [{ required: true, message: L('ThisFieldIsRequired') }],
  cikisSubeAdi: [{ required: true, message: L('ThisFieldIsRequired') }],
  aliciKodu: [{ required: true, message: L('ThisFieldIsRequired') }],
  aliciUnvan: [{ required: true, message: L('ThisFieldIsRequired') }],
  varisSubeAdi: [{ required: true, message: L('ThisFieldIsRequired') }],
  kargoTipi: [{ required: true, message: L('ThisFieldIsRequired') }],
  toplamParcaAdedi: [{ required: true, message: L('ThisFieldIsRequired') }],

  tazminNo: [{ required: true, message: L('ThisFieldIsRequired') }], 
  tazminTalepTarihi: [{ required: true, message: L('ThisFieldIsRequired') }],
  tazminTipi: [{ required: true, message: L('ThisFieldIsRequired') }],
  odemeSekli: [{ required: true, message: L('ThisFieldIsRequired') }],
  tazminMusterisi: [{ required: true, message: L('ThisFieldIsRequired') }],
  tazminmusterikodu: [{ required: true, message: L('ThisFieldIsRequired') }],

  tckimlikno :[{ required: true, message: L('ThisFieldIsRequired') }],
  vergiKimlikNo: [{ required: true, message: L('ThisFieldIsRequired') }],
   
  odemeBolge: [{ required: true, message: L('ThisFieldIsRequired') }],



};

export default rules;
