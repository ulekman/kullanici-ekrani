const app = new Vue({
    el: '#app',
    name: 'ulekman',
    data: {
        aktifKullanici:{},
        kullanicilar:[
            {
                id:25,
                isim: 'Ulkem',
                rol: 'admin'
            },
            {
                id:36,
                isim: 'sıla',
                rol: 'admin'
            },
            {
                id:15,
                isim: 'erdal',
                rol: 'user'
            },
        ]

    },
    methods:{
        kullaniciYeni(){
            this.aktifKullanici={ rol: ''};
            $('#kullaniciModal').modal('show');
        },
        kullaniciKaydet(){
            if(this.aktifKullanici.isim != undefined && this.aktifKullanici.rol != '') {

                if(this.aktifKullanici.id >0){
                    let kullanici = this.kullanicilar.find( x=>x.id == this.aktifKullanici.id);
                    kullanici = this.aktifKullanici;

                }
                else {


                    this.kullanicilar.push({
                        id: this.kullanicilar.length + 1,
                        isim: this.aktifKullanici.isim,
                        rol: this.aktifKullanici.rol,
                    });
                }
                    this.aktifKullanici = {};
                    $('#kullaniciModal').modal('hide');

            }
            },
        kullaniciSil(index){
            this.kullanicilar.splice(index,1);

        },
        kullaniciDuzenle(index){
            this.aktifKullanici = this.kullanicilar[index];
            $('#kullaniciModal').modal('show');

        },

    }


})