var EventEmitter = require('../lib/event-emitter');

class musicService extends EventEmitter {
    constructor() {
        super();
        window.ps = this;

        this.musics = [
            {
                id: 1, title: 'Mor ve ötesi',
                body: 'Başarılı rock müzik grubu mor ve ötesi, 15 Mart\'ta Dorock Stage sahnesinde hayranlarıyla buluşuyor.Toplamda 8 albüm, 1 EP, 2 de single yayımladığı kariyeri boyunca ülke rock piyasasını tanımlayan isimlerden biri haline gelen ve eriştiği bu konumu 20 yıl boyunca koruyan mor ve ötesi, birçok değerli ismin albümüne de katkıda bulundu.  2008 yılında ise Eurovision Şarkı Yarışması’nda Türkiye\'yi Deli adlı parçayla temsil etti.',
                src: 'http://www.zorlupsm.com/uploads/event/profile/700x900/700x900-236.jpg'
            },
            {
                id: 2, title: 'Mor ve ötesi',
                body: 'Başarılı rock müzik grubu mor ve ötesi, 15 Mart\'ta Dorock Stage sahnesinde hayranlarıyla buluşuyor.Toplamda 8 albüm, 1 EP, 2 de single yayımladığı kariyeri boyunca ülke rock piyasasını tanımlayan isimlerden biri haline gelen ve eriştiği bu konumu 20 yıl boyunca koruyan mor ve ötesi, birçok değerli ismin albümüne de katkıda bulundu.  2008 yılında ise Eurovision Şarkı Yarışması’nda Türkiye\'yi Deli adlı parçayla temsil etti.',
                src: 'http://www.zorlupsm.com/uploads/event/profile/700x900/700x900-236.jpg'
            },
            {
                id: 3, title: 'Mor ve ötesi',
                body: 'Başarılı rock müzik grubu mor ve ötesi, 15 Mart\'ta Dorock Stage sahnesinde hayranlarıyla buluşuyor.Toplamda 8 albüm, 1 EP, 2 de single yayımladığı kariyeri boyunca ülke rock piyasasını tanımlayan isimlerden biri haline gelen ve eriştiği bu konumu 20 yıl boyunca koruyan mor ve ötesi, birçok değerli ismin albümüne de katkıda bulundu.  2008 yılında ise Eurovision Şarkı Yarışması’nda Türkiye\'yi Deli adlı parçayla temsil etti.',
                src: 'http://www.zorlupsm.com/uploads/event/profile/700x900/700x900-236.jpg'
            }
        ];
    }

}
angular.module('chat-app').service('musicService', musicService);

