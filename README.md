# learning-typescript

This project was created to learn typescript. The topics learned will be added to the project along with the examples. It will serve as a notebook for myself and I will remove the questions in my mind in my daily life from here.

## What is TypeScript

Yaygın olarak web uygulamalarında kullanılan JavaScript, Node.js ile birlikte sunucu taraflı uygulamalarda, Electron.js ile birlikte masaüstü uygulamalarda, çeşitli kütüphaneler sayesinde de hibrit mobil uygulama geliştirmede sıkça kullanılmaya başlandı ve tahmin edilmeyen bir büyüme gösterdi. Tasarlanma amacı olarak bu tarz platformlar ve büyük çaplı uygulamalar düşünülmediğinden JavaScript’in bazı yapısal eksiklikleri vardı. Nesne tabanlı dillerin sağladığı tip kontrolü, sınıflar gibi yapılar bulunmuyordu, dinamik olmasından dolayı derleme aşaması yoktu ve hata kontrolü zor yapılıyordu. TypeScript bu eksikleri gidermek ve JavaScript’i büyük projelerde daha etkili şekilde kullanmak için tasarlanmış bir programlama dili olarak ortaya çıktı.

“TypeScript, uygulama ölçeğinde geliştirme için JavaScript.” olarak tanımlanmaktadır. TypeScript strongly-typed, nesne yönelimli ve derlenebilir açık kaynaklı bir programlama dilidir. Microsoft çalışanı ve C# dilinin tasarımcısı olan Anders Hejlsberg tarafından tasarlanmış, ilk sürümü 2012 yılında yayınlanmıştır. TypeScript’i hem bir dil hem de bir araçlar kümesi olarak tanımlayabiliriz. İstemci veya sunucu ortamında çalışabilen JavaScript programları yazmak için kullanılabilir. JavaScript’in tüm özelliklerini içinde barındıran ve ek özellikler eklenmiş bir üst kümesi olarak tanımlanabilir. Büyük ve kodlanma aşaması karmaşık olan projelerde verimliliği arttırır.

### Properties

**JavaScript, TypeScript’tir**: TS’de yazılan kodlar derlenirken JS dilindeki karşılığına dönüştürülür, çıktı olarak JS kodu verir ve JS kodu çalıştırılır. JS için geçerli olan tüm özellikler TS içinde geçerlidir. TS kodu yazabilmek için JS bilmeniz işin çok büyük bir oranına hakim olmanızı sağlayacaktır. TypeScript, JavaScript’in genişletilmiş bir versiyonudur. Her JS kodu bir TS kodudur. Ancak TS kodu derlenip çalıştırılmadığı sürece JS kodu değildir.

**Tüm JS kütüphanelerini kullanabilir**: Tüm JS kütüphaneleri TS üzerinde de kullanılabilir. TS olarak yazılan bütün kodların JS çıktısı, bütün JS frameworklerini, araçlarını ve kütüphanelerini kullanabilir.

**Taşınabilirlik**: TypeScript platform-serbest bir dildir ve farklı tarayıcılarda, cihazlarda, işletim sistemlerinde çalışabilir. JavaScript’in çalıştığı herhangi bir ortamda çalışabilir. Muadillerinden(CoffeScript,Dart vb) farklı olarak, Yazılan kodlar JS koduna dönüştürüldüğü ve işlemler JS kodu üzerinden yürütüldüğü için TypeScript’in yürütülmesi için özel bir sanal makineye veya özel bir çalışma-yürütme ortamına ihtiyacı yoktur.

### Why TypeScript? 

**Derleme**: JS yorumlamalı(interpreted) bir dildir, derleme aşaması yoktur, bu nedenle kod çalışana dek hata tespiti yapılamaz ve hata varsa tüm kodun gözden geçirilmesi gerekir ve bu çok zaman alabilir. TypeScript dönüştürücüsü derleme aşamasında hata denetimi sağlar ve bu soruna çözüm getirir.

**Güçlü Statik Tipler**: JS dilinde statik veri tiplemesi yoktur, verilerin tipi dinamik olarak yürütme aşamasında belirlenir. TS’de ise isteğe bağlı olarak veri tanımlaması yapılabilir.

**Nesne Yönelimli Programlama**: TypeScript nesne yönelimli anlayışa uygundur. Sınıflar, arayüzler, modüller, miras(inheritance) vb. özellikleri destekler.

**Kolay Okunabilir**: JS koduna göre sağladığı avantajlar nedeniyle kolay okunabilir ve düzenlenebilir bir dildir.

### Components

TypeScript’in üç temel bileşeni vardır.

**Dil**: Kendi sözdizimi, anahtar kelimeleri ve tip tanımlamaları vardır.

**Derleyici**: TS’de yazılan kodu JS’deki karşılığına dönüştürür.

**TLS(TypeScript Dil Servisi)**: Editörlerde kullanılması için ifade tamamlama, kod biçimlendirme, renklendirme vb. gibi tipik düzenleyici işlemlerini destekler.

### Different between JavaScript and TypeScript

- TS nesne yönelimli program dilidir, JS betik dilidir.
- TS statik veri tiplemesine sahiptir, JS dinamik olarak verileri tanır.
- TS opsiyonel olarak parametreli fonksiyonları destekler ancak JS desteklemez.
- TS ile JS olarak tasarlanmış büyük ve karmaşık projelerin geliştirme aşaması çok daha kısa sürelere indirilebilir.
- JS kodu derlenmediği için hata denetimi yapılamaz ancak TS kodunda derleme yapıldığı için bu aşama zaman alır. Tüm geliştirme aşaması göze alındığında sorun teşkil edecek bir dezavantaj değildir.
- TS soyut sınıfları desteklemez.

### TypeScript and EcmaScript

ECMAScript, betik dili standartıdır ve her yıl yeni sürümü çıkarılmaktadır. 2019 yılı itibariyle 10 sürümü bulunmaktadır. TypeScript dili EcmaScript standartları üzerine inşa edilmiştir ve bu standartlarda yer alan özelliklere ek özellikler katarak yazılım geliştiricileri daha sağlıklı şekilde JavaScript kodları üretmesini sağlamaktadır. TypeScript EcmaScript’in 5 ve 6 versiyonlarınaa ekstra özellikler eklenerek oluşturulmuştur. Tarayıcılar EcmaScript 6. versiyona tam olarak destek verememektedir. TS desteklenmeyen kısımları 5. versiyona dönüştürerek işleme sokar.

[Kaynak](https://devnot.com/2019/typescript-nedir/) Devnot