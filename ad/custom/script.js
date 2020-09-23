if (document.readyState === "complete") {
    doWork();
}
else{
    window.addEventListener('load', function() {
        doWork();
    })
}

function doWork(){
    addOnClickToBody()

    setTimeout(function () {
        popupateMessages();
    }, 1000);

    setTimeout(function () {
        try {
            javascript: AndroidAd.loadNormalAd();
        } catch (e) {}
    }, 24000);
}

function openAdUrl(){
    try {
        //javascript: AndroidAd.openLinkInBrowser('https://www.5ach.in/muetube');
        javascript: AndroidAd.shareLink('https://play.google.com/store/apps/details?id=in.a5ach.muetubepre');
    } catch (e) {}
}

function addOnClickToBody(){
    document.getElementsByTagName('body')[0].setAttribute('onclick', 'openAdUrl();');
}



var userIso3countryCode = "";
var userIso3LanguageCode = "";
var userAppOpenedCount = 0;


function popupateMessages(){

    if(userAppOpenedCount>=30){
        try {
            javascript: AndroidAd.loadNormalAd();
        } catch (e) {}
        return;
    }
    
    // if(userAppOpenedCount==3){
    //     try {
    //         javascript: AndroidAd.showCustomMessage('icbabba', 'Titicbabba', 'Mesicbabba', 'Submesicbabba', 'Noicbabba', 'Okicbabba', false);
    //     } catch (e) {}
    // }
    

    setTimeout(function () {
        try {
            javascript: AndroidAd.hideShimmerShowCustomAd();
        } catch (e) {}
        
        // try {
        //     javascript: AndroidAd.setTheHeight(88);
        // } catch (e) {}
    }, 500);

    var messages = [];

    var androidLanguageMapping = ['ara','aze','bul','ben','bos','cat','ces','dan','deu','ell','spa','est','fas','fin','fil','fra','hin','hrv','hun','ind','ita','heb','jpn','kat','khm','kor','lao','lit','lav','mkd','mon','mar','msa','mya','nob','nld','pan','pol','por','ron','rus','slk','slv','sqi','srp','swe','swa','tel','tha','tur','ukr','uzb','vie','zho']

    let indexOfLanguage = androidLanguageMapping.indexOf(userIso3LanguageCode.toLowerCase());

    var thanksArray = ['شكرًا لاستخدام MueTube :)','Благодаря, че използвате MueTube :)','MueTube ব্যবহার করার জন্য ধন্যবাদ :)','Hvala što koristite MueTube :)','Gràcies per utilitzar MueTube :)','Děkujeme, že používáte MueTube :)','Tak fordi du bruger MueTube :)','Danke, dass du MueTube benutzt :)','Ευχαριστούμε που χρησιμοποιήσατε το MueTube :)','Gracias por usar MueTube :)','Täname, et kasutasite MueTube\'i :)','با تشکر برای استفاده از MueTube :)','Kiitos MueTube: n käytöstä :)','Salamat sa paggamit ng MueTube :)','Merci d\'utiliser MueTube :)','MueTube का उपयोग करने के लिए धन्यवाद :)','Hvala što koristite MueTube :)','Köszönjük, hogy használta a MueTube-ot :)','Terima kasih telah menggunakan MueTube :)','Grazie per aver utilizzato MueTube :)','תודה על השימוש ב- MueTube :)','MueTubeをご利用いただきありがとうございます:)','მადლობა MueTube– ის გამოყენებისათვის :)','សូមអរគុណសម្រាប់ការប្រើប្រាស់ MueTube :)','MueTube를 사용해 주셔서 감사합니다. :)','ຂໍຂອບໃຈທີ່ໃຊ້ MueTube :)','Dėkojame, kad naudojatės „MueTube“ :)','Paldies, ka izmantojāt MueTube :)','Ви благодариме што го користевте MueTube :)','MueTube-ийг ашигласанд баярлалаа :)','MueTube वापरल्याबद्दल धन्यवाद :)','Terima kasih kerana menggunakan MueTube :)','MueTube သုံးသောကြောင့်ကျေးဇူးတင်ပါသည်။','Takk for at du bruker MueTube :)','Bedankt voor het gebruik van MueTube :)','MueTube ਦੀ ਵਰਤੋਂ ਲਈ ਧੰਨਵਾਦ :)','Dziękujemy za korzystanie z MueTube :)','Obrigado por usar o MueTube :)','Vă mulțumim că ați folosit MueTube :)','Спасибо за использование MueTube :)','Ďakujeme, že používate MueTube :)','Hvala, ker uporabljate MueTube :)','Faleminderit për përdorimin e MueTube :)','Хвала што користите МуеТубе :)','Tack för att du använder MueTube :)','Asante kwa kutumia MueTube :)','MueTube ఉపయోగించినందుకు ధన్యవాదాలు :)','ขอบคุณที่ใช้ MueTube :)','MueTube\'u kullandığınız için teşekkürler :)','Дякуємо за використання MueTube :)','MueTube-dan foydalanganingiz uchun tashakkur :)','Cảm ơn vì đã sử dụng MueTube :)','感谢您使用MueTube :)']
    var shareArray = ['يرجى مشاركة التطبيق مع الآخرين','Xahiş edirəm tətbiqi başqaları ilə paylaşın','Моля, споделете приложението с други','অন্যদের সাথে অ্যাপটি ভাগ করুন','Molimo podijelite aplikaciju s drugima','Comparteix l\'aplicació amb altres usuaris','Sdílejte prosím aplikaci s ostatními','Del venligst appen med andre','Bitte teilen Sie die App mit anderen','Μοιραστείτε την εφαρμογή με άλλους','Por favor comparte la aplicación con otras(feminine)','Palun jagage rakendust teistega','لطفا برنامه را با دیگران به اشتراک بگذارید','Jaa sovellus muiden kanssa','Mangyaring ibahagi ang app sa iba','Veuillez partager l\'application avec d\'autres','कृपया एप्लिकेशन को अन्य लोगों के साथ साझा करें','Molimo podijelite aplikaciju s drugima','Kérjük, ossza meg másokkal az alkalmazást','Silakan bagikan aplikasi dengan orang lain','Per favore condividi l\'app con altri','אנא שתף את האפליקציה עם אחרים','アプリを他の人と共有してください','გთხოვთ, გაუზიაროთ აპი სხვებს','សូមចែករំលែកកម្មវិធីនេះជាមួយអ្នកដទៃ','다른 사람들과 앱을 공유하십시오','ກະລຸນາແບ່ງປັນແອັບ with ໃຫ້ຄົນອື່ນ','Prašau pasidalinti programa su kitais','Lūdzu, kopīgojiet lietotni ar citiem','Ве молиме, споделете ја апликацијата со други','Програмаа бусадтай хуваалцана уу','कृपया इतरांसह अ‍ॅप सामायिक करा','Sila kongsi aplikasinya dengan orang lain','ကျေးဇူးပြုပြီး app ကိုအခြားသူများနှင့်မျှဝေပါ','Vennligst del appen med andre','Deel de app met anderen','ਕਿਰਪਾ ਕਰਕੇ ਦੂਜਿਆਂ ਨਾਲ ਐਪ ਨੂੰ ਸਾਂਝਾ ਕਰੋ','Udostępnij aplikację innym','Compartilhe o aplicativo com outras pessoas','Vă rugăm să partajați aplicația cu alții','Пожалуйста, поделитесь приложением с другими','Zdieľajte aplikáciu s ostatnými','Delite aplikacijo z drugimi','Ju lutemi ndani aplikacionin me të tjerët','Поделите апликацију са другима','Vänligen dela appen med andra','Tafadhali shiriki programu na wengine','దయచేసి అనువర్తనాన్ని ఇతరులతో పంచుకోండి','โปรดแชร์แอปกับผู้อื่น','Lütfen uygulamayı başkalarıyla paylaşın','Поділіться цим додатком з іншими','Iltimos, ilovani boshqalar bilan baham ko\'ring','Vui lòng chia sẻ ứng dụng với những người khác','请与他人分享该应用']

    if(indexOfLanguage==-1){
        messages.push("Thanks for using MueTube :)");
        messages.push("Please share the app with others");
    }
    else{
        messages.push(thanksArray[indexOfLanguage]);
        messages.push(shareArray[indexOfLanguage]);
    }

    var carouselInnerList = document.getElementsByClassName('carousel-inner');
    if (carouselInnerList.length > 0) {
        var carouselInner = carouselInnerList[0];
        messages.forEach(message => {
            var itemDiv = document.createElement('div');
            itemDiv.classList.add('item');
            if(carouselInner.children.length == 0){
                itemDiv.classList.add('active');
            }
            var carouselCaption = document.createElement('div');
            carouselCaption.classList.add('carousel-caption');

            var messageP = document.createElement('p');
            messageP.innerText = message;

            carouselCaption.appendChild(messageP);
            itemDiv.appendChild(carouselCaption);
            carouselInner.appendChild(itemDiv);
        });
    }
}