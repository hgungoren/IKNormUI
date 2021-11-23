

//import { L } from '../../lib/abpUtility';

const rules = {
  takipNo: [{ required: true, message: 'Lütfen Takip No Giriniz' }],
  sistem_InsertTime: [{ required: true, message: 'Lütfen Tarihi Giriniz' }], // evrak oluşturma tarihi
  evrakSeriNo: [{ required: true, message: 'Lütfen Evrak Seri Sıra No Giriniz ' }],//evrak seri sıra no
  gonderenKodu: [{ required: true, message: 'Lütfen Gonderici Kodunu Seçiniz' }],
  gonderenUnvan: [{ required: true, message: 'Lütfen Gonderici Unvan Seçiniz' }],
  aliciKodu: [{ required: true, message: 'Lütfen Alici Kodunu Seçiniz' }],
  aliciUnvan: [{ required: true, message: 'Lütfen Alici Unvan Seçiniz' }],
  cikis_Sube_Unvan: [{ required: true, message: 'Lütfen Çıkış Şubeyi Seçiniz' }],
  varis_Sube_Unvan: [{ required: true, message: 'Lütfen Varış Şubeyi Seçiniz' }],
  birimi: [{ required: true, message: 'Lütfen Kargo Tipi Seçiniz' }],
  adet: [{ required: true, message: 'Lütfen Parça Adedi Giriniz' }],
  kargoKabulFisNo: [{ required: true, message: 'Lütfen Kargo Kabul Fiş No Giriniz' }],
  //tanzim bilgileri
  Tazmin_Talep_Tarihi:       [{ required: true, message: 'Lütfen Boş Bırakmayınız' }],
  Tazmin_Tipi:               [{ required: true, message: 'Lütfen Boş Bırakmayınız' }],
  Tazmin_Musteri_Tipi:       [{ required: true, message: 'Lütfen Boş Bırakmayınız' }],
  Tazmin_Musteri_Kodu:       [{ required: true, message: 'Lütfen Boş Bırakmayınız' }],
  Tazmin_Musteri_Unvan:      [{ required: true, message: 'Lütfen Boş Bırakmayınız' }],
  Odeme_Musteri_Tipi:        [{ required: true, message: 'Lütfen Boş Bırakmayınız' }],
  TCK_NO:                    [{ required: true, message: 'Lütfen Boş Bırakmayınız' }],
  VK_NO:                     [{ required: true, message: 'Lütfen Boş Bırakmayınız' }],
  Odeme_Birimi_Bolge:        [{ required: true, message: 'Lütfen Boş Bırakmayınız' }],
  Talep_Edilen_Tutar:        [{ required: true, message: 'Lütfen Boş Bırakmayınız' }],
  Surec_Sahibi_Birim_Bolge:  [{ required: true, message: 'Lütfen Boş Bırakmayınız' }],
  Telefon:                   [{ required: true, message: 'Lütfen Boş Bırakmayınız' }],
  Email:                     [{ required: true, message: 'Lütfen Boş Bırakmayınız' }],
};

export default rules;
