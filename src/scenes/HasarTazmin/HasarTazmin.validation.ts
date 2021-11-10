

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
  tazminTalepTarihi: [{ required: true, message: 'Lütfen Takip No Giriniz' }],
  tazminTipi: [{ required: true, message: 'Lütfen Tazmin Tipi Seçiniz' }],
  odemeSekli: [{ required: true, message: 'Lütfen Ödeme Şeklini Seçiniz' }],
  tckno: [{ required: true, message: 'Lütfen TCKNO Giriniz' } || { type: 'number', maxLength: 11, message: 'Lütfen Geçerli Bir TCKNO Giriniz' }],
  vergiKimlik: [{ required: true, message: 'Lütfen Vergi Kimlik No Giriniz' } || { type: 'number', maxLength: 10, message: 'Lütfen Geçerli Bir Vergi Kimlik Numarası Giriniz' }],
  odemeBirimiBolge: [{ required: true, message: 'Lütfen Ödeme Birim/Bölge Şeklini Seçiniz' }],
  talepEdilenTutar: [{ required: true, message: 'Lütfen Talep Edilen Tutar Giriniz' }],
  surecSahibiniBolgeyeAta: [{ required: true, message: 'Lütfen Süreç Sahibi Bölgeye Ata Giriniz' }],
  email: [{ 
     required: true,
     message: 'Lütfen Email Alanını Giriniz', 
    } || { type: 'email', message: 'Lütfen geçerli bir email formatı giriniz.' }],
  SMS: [{ required: true, message: 'Lütfen SMS Alanını Giriniz' } || { type: 'tel', message: 'Lütfen geçerli bir email formatı giriniz.' }],


};

export default rules;
