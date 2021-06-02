function pauseAd(){}
function resumeAd(){}

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
}

function openAdUrl(){
    if(userIsLiteAllowedRedirect == true){
        javascript: AndroidAd.openURLInExternalBrowser('https://www.MueTube.com/');
    }
}

function addOnClickToBody(){
    document.getElementsByTagName('body')[0].setAttribute('onclick', 'openAdUrl();');
}

var userCurrentAppVersion = "";
var userIso3countryCode = "";
var userIso3LanguageCode = "";
var userAppOpenedCount = 0;


function popupateMessages(){

    var messages = [];

    var androidLanguageMapping = ['ara','aze','bul','ben','bos','cat','ces','dan','deu','ell','spa','est','fas','fin','fil','fra','hin','hrv','hun','ind','ita','heb','jpn','kat','khm','kor','lao','lit','lav','mkd','mon','mar','msa','mya','nob','nld','pan','pol','por','ron','rus','slk','slv','sqi','srp','swe','swa','tel','tha','tur','ukr','uzb','vie','zho']

    let indexOfLanguage = androidLanguageMapping.indexOf(userIso3LanguageCode.toLowerCase());

    var all = [
        ["هذه نسخة لايت من MueTube",
        "لتظل متوافقة مع سياسات تشغيل Play Store، لا يشمل هذا التطبيق إمكانات خالية من الإعلانات أو غير المتصلة أو الخلفية",
        "لمزيد من المعلومات، يرجى زيارة www.MueTube.com أو الاتصال support@muetube.com للحصول على المساعدة"],

        ["Bu MueTube'un 'Lite' versiyasıdır",
        "Play Store siyasətinə uyğun qalmaq üçün bu tətbiqə reklamsız, oflayn və ya fon-play imkanları daxil deyil",
        "Əlavə məlumat üçün www.MueTube.com saytına daxil olun və ya kömək üçün support@muetube.com ilə əlaqə saxlayın"],

        ["Това е 'Lite' версия на MueTube",
        "За да останете съвместими с правилата на Play Store, това приложение не включва безплатни, офлайн или фонова игра Възможности",
        "За повече информация, моля посетете www.MueTube.com или contact support@muetube.com за помощ"],

        ["এটি MueTube এর একটি 'লাইট' সংস্করণ",
        "খেলার দোকান নীতিগুলির সাথে সঙ্গতিপূর্ণ থাকা, এই অ্যাপ্লিকেশনটি এডি-মুক্ত, অফলাইন বা ব্যাকগ্রাউন্ড-প্লে ক্ষমতা অন্তর্ভুক্ত করে না",
        "আরও তথ্যের জন্য দয়া করে www.MueTube.com এ যান অথবা সাহায্যের জন্য support@muetube.com এর সাথে যোগাযোগ করুন"],

        ["Ovo je 'Lite' verzija MueTube",
        "Da biste ostali u skladu sa politikama Play Store, ova aplikacija ne uključuje mogućnosti bez oglasa, izvanmrežnih ili pozadina",
        "Za dodatne informacije posetite www.MueTube.com ili kontaktirajte support@muetube.com za pomoć"],

        ["Aquesta és una versió 'Lite' de MueTube",
        "Per mantenir-se conforme a les polítiques de Play Store, aquesta aplicació no inclou capacitats gratuïtes, fora de línia o de fons fora de línia",
        "Per a més informació, visiteu www.MueTube.com o poseu-vos en contacte amb support@muetube.com per obtenir ajuda"],

        ["Toto je verze 'Lite' společnosti MueTube",
        "Chcete-li zůstat v souladu se zásadami přehrávaných obchodů, tato aplikace nezahrnuje možnosti ad-free, offline nebo background-play",
        "Další informace naleznete na adrese www.MueTube.com nebo kontaktujte support@muetube.com"],

        ["Dette er en 'Lite' version af MueTube",
        "For at forblive i overensstemmelse med Play Store-politikkerne omfatter denne app ikke annoncefri, offline- eller baggrundsspilfunktioner",
        "For yderligere information besøg venligst www.MueTube.com eller kontakt support@muetube.com for at få hjælp"],

        ["Dies ist eine 'Lite' -Version von MueTube",
        "Um mit den Play Store-Richtlinien zu erfüllen, enthält diese App keine ad-freie, offline- oder Hintergrundspielfunktionen",
        "Weitere Informationen finden Sie unter www.MueTube.com oder wenden Sie sich an support@muetube.com, um Hilfe zu unterstützen"],

        ["Αυτή είναι μια έκδοση 'Lite' του MueTube",
        "Για να παραμείνετε συμμορφούμενοι με τις πολιτικές αποθήκευσης αναπαραγωγής, αυτή η εφαρμογή δεν περιλαμβάνει δυνατότητες χωρίς διαφημίσεις, εκτός σύνδεσης ή ιστορικού παιχνιδιού",
        "Για περισσότερες πληροφορίες, επισκεφτείτε τη διεύθυνση www.MueTube.com ή επικοινωνήστε με το support@muetube.com για βοήθεια"],

        ["Esta es una versión 'Lite' de MueTube",
        "Para mantenerse compatible con las políticas de Play Store, esta aplicación no incluye capacidades gratuitas, sin conexión o reproducción de antecedentes",
        "Para más información, visite www.MueTube.com o contactar con support@muetube.com para obtener ayuda"],

        ["See on MueTube'i 'Lite' versioon",
        "Et jääda vastavuses mängida poe poliitika, see rakendus ei sisalda ad-free, offline või tausta mängida võimeid",
        "Lisateabe saamiseks külastage veebisaiti www.MueTube.com või võtke ühendust support@muetube.com abi jaoks"],

        ["این نسخه 'Lite' MueTube است",
        "برای پیوستن به سیاست های فروشگاه بازی، این برنامه شامل قابلیت های تبلیغاتی رایگان، آفلاین یا پس زمینه نیست",
        "برای اطلاعات بیشتر لطفا به www.MueTube.com مراجعه کنید یا برای کمک به support@muetube.com تماس بگیرید"],

        ["Tämä on MueTube Lite-versio",
        "Play-myymäläpolitiikan yhteensopivaksi tämä sovellus ei sisällä mainosapua, offline- tai tausta-toistoominaisuuksia",
        "Lisätietoja saat osoitteesta www.MueTube.com tai ota yhteyttä osoitteeseen support@muetube.com"],

        ["Ito ay isang bersyon ng 'Lite' ng MueTube.",
        "Upang manatiling sumusunod sa mga patakaran sa Play Store, ang app na ito ay hindi kasama ang mga ad-free, offline o background-play na kakayahan",
        "Para sa karagdagang impormasyon mangyaring bisitahin ang www.MueTube.com o makipag-ugnay sa support@muetube.com para sa tulong"],

        ["Ceci est une version 'Lite' de MueTube",
        "Pour rester conforme aux stratégies de Play Store, cette application n'inclut pas les fonctionnalités sans publicité, hors ligne ou en arrière-plan.",
        "Pour plus d'informations, veuillez visiter www.MueTube.com ou contacter support@muetube.com pour obtenir de l'aide"],

        ["यह MueTube का एक 'लाइट' संस्करण है",
        "Play Store नीतियों के अनुरूप बने रहने के लिए, इस ऐप में विज्ञापन-मुक्त, ऑफ़लाइन या पृष्ठभूमि-प्ले क्षमताओं शामिल नहीं हैं",
        "अधिक जानकारी के लिए कृपया www.MueTube.com पर जाएं या सहायता के लिए support@muetube.com से संपर्क करें"],

        ["Ovo je 'Lite' verzija MueTubea",
        "Da biste ostali usklađeni s pravilima o play trgovini, ova aplikacija ne uključuje besplatne, offline ili pozadinske ili play-play mogućnosti",
        "Za daljnje informacije posjetite www.MueTube.com ili kontakt support@muetube.com za pomoć"],

        ["Ez a MueTube 'Lite' verziója",
        "Ahhoz, hogy továbbra is megfeleljen a lejátszási tárolási irányelveknek, ez az alkalmazás nem tartalmaz ad-mentes, offline vagy háttér-lejátszási képességeket",
        "További információkért látogasson el a www.MueTube.com weboldalra, vagy lépjen kapcsolatba a support@muetube.com címre"],

        ["Ini adalah versi 'Lite' dari MueTube",
        "Untuk tetap patuh dengan kebijakan Play Store, aplikasi ini tidak termasuk kemampuan bebas iklan, offline atau latar belakang",
        "Untuk informasi lebih lanjut, silakan kunjungi www.MueTube.com atau hubungi support@muetube.com untuk bantuan"],

        ["Questa è una versione 'Lite' di MueTube",
        "Per rimanere conforme alle politiche di Play Store, questa app non include funzionalità senza pubblicità, offline o di playing-play-play",
        "Per ulteriori informazioni, visitare www.MueTube.com o contattare support@muetube.com per aiuto"],

        ["זוהי גרסת 'לייט' של MueTube",
        "כדי להישאר תואם למדיניות חנות בחנות, יישום זה אינו כולל יכולות ללא מודעות לא מקוונות או ברקע לשחק",
        "לקבלת מידע נוסף, בקר בכתובת www.MueTube.com או צור קשר עם support@muetube.com לעזרה"],

        ["これはMueTubeの「Lite」バージョンです",
        "Play Storeポリシーに準拠しているままにするには、このアプリには広告なし、オフライン、または背景再生機能が含まれていません。",
        "詳細については、 www.MueTube.com をご覧ください。援助については support@muetube.com にお問い合わせください。"],

        ["ეს არის MueTube- ის 'Lite' ვერსია",
        "შეარჩიეთ Play Store Polices- თან, ეს აპლიკაცია არ შეიცავს რეკლამას, ოფლაინს ან ფონურ თამაშებს",
        "დამატებითი ინფორმაციისთვის ეწვიეთ www.MueTube.com ან საკონტაქტო support@muetube.com დახმარებისთვის"],

        ["នេះគឺជា 'Lite' MueTube របស់ MueTube",
        "ដើម្បីរក្សាខ្លួនឱ្យអនុលោមតាមគោលនយោបាយ Play Store, កម្មវិធីនេះមិនរាប់បញ្ចូលទាំងការផ្សាយពាណិជ្ជកម្មក្រៅអ៊ីនធឺណិតឬផ្ទៃខាងក្រោយនៃការលេងនៅលើផ្ទៃខាងក្រោយទេ",
        "សម្រាប់ព័ត៌មានបន្ថែមសូមចូលទៅកាន់គេហទំព័រ www.MueTube.com ឬទាក់ទង support@muetube.com សម្រាប់ជំនួយ"],

        ["이것은 MueTube의 'Lite'버전입니다",
        "Play 스토어 정책을 준수 함으로써이 앱에는 광고없는, 오프라인 또는 배경 재생 기능이 포함되어 있지 않습니다.",
        "자세한 내용은 www.MueTube.com 을 방문하거나 support@muetube.com 에 문의하십시오."],

        ["ນີ້ແມ່ນລຸ້ນ MueTube 'Lite'",
        "ເພື່ອໃຫ້ສອດຄ່ອງກັບນະໂຍບາຍຂອງການຫຼີ້ນ, ແອັບ This ນີ້ບໍ່ໄດ້ປະກອບມີ AF-FREE-FREE, Offline ຫຼືຄວາມສາມາດໃນການຫຼີ້ນພື້ນຫລັງ",
        "ສໍາລັບຂໍ້ມູນເພີ່ມເຕີມກະລຸນາເຂົ້າເບິ່ງ www.MueTube.com ຫຼືຕິດຕໍ່ support@muetube.com ສໍາລັບການຊ່ວຍເຫຼືອ"],

        ["Tai yra 'Lite' MueTube versija",
        "Norėdami išlikti suderinamas su Play Store politikos, ši programa neapima skelbimų, neprisijungus ar foninių žaidimų galimybių",
        "Norėdami gauti daugiau informacijos, apsilankykite www.MueTube.com arba susisiekite su support@muetube.com pagalbos"],

        ["Šī ir MueTube 'Lite' versija",
        "Lai paliktu atbilstoši spēlēt veikalu politikai, šī lietotne neietver reklāmu, bezsaistes vai fona spēles iespējas",
        "Lai iegūtu plašāku informāciju, apmeklējiet www.MueTube.com vai sazinieties ar support@muetube.com, lai saņemtu palīdzību"],

        ["Ова е верзија на MueTube",
        "Да остане во согласност со политиките за Play Store, оваа апликација не вклучува слободни, офлајн или позадина-игра способности",
        "За повеќе информации, посетете го www.MueTube.com или контактна support@muetube.com за помош"],

        ["Энэ бол MueTube-ийн 'Lite' хувилбар юм",
        "Play Store-тэй нийцэж байхын тулд энэ апп нь зар сурталчилгаагүй, офлайн, офлайн эсвэл арын тоглолтыг багтаагүй болно",
        "Дэлгэрэнгүй мэдээллийг WWW.GOGE.COM эсвэл Холбоо барих.COME-ийн тусламжтайгаар support@muetube.com.com"],

        ["हे MueTube ची 'लाइट' आवृत्ती आहे",
        "Play Store धोरणे सह अनुपालन करण्यासाठी, या अनुप्रयोगात जाहिरात-मुक्त, ऑफलाइन किंवा पार्श्वभूमी-प्ले क्षमता समाविष्ट नाही",
        "अधिक माहितीसाठी कृपया www.MueTube.com ला भेट द्या किंवा मदतीसाठी support@muetube.com वर संपर्क साधा"],

        ["Ini adalah versi 'Lite' MueTube",
        "Untuk kekal patuh dengan dasar kedai permainan, aplikasi ini tidak termasuk keupayaan bebas iklan, luar talian atau latar belakang",
        "Untuk maklumat lanjut sila lawati www.MueTube.com atau hubungi support@muetube.com untuk bantuan"],

        ["ဒါက MueTube ရဲ့ 'Lite' ဗားရှင်းဖြစ်သည်",
        "Play Store မူဝါဒများနှင့်လိုက်လျောညီထွေဖြစ်အောင်ဤအက်ပ်တွင်ကြော်ငြာ, အော့ဖ်လိုင်းသို့မဟုတ်နောက်ခံကစားနိုင်စွမ်းစွမ်းရည်များမပါ 0 င်ပါ",
        "နောက်ထပ်သတင်းအချက်အလက်များအတွက် ကျေးဇူးပြု. www.MueTube.com သို့မဟုတ် support@muetube.com ကိုဆက်သွယ်ပါ"],

        ["Dette er en 'Lite' versjon av MueTube",
        "For å forbli kompatibel med Play Store-retningslinjene, inkluderer denne appen ikke annonsefri, offline eller bakgrunns-spillegenskaper",
        "For ytterligere informasjon, vennligst besøk www.MueTube.com eller kontakt support@muetube.com for å få hjelp"],

        ["Dit is een 'Lite'-versie van MueTube",
        "Om te blijven voldoen aan Play Store-beleid, bevat deze app geen advertentievrije, offline of background-play-mogelijkheden",
        "Ga voor meer informatie naar www.MueTube.com of neem contact op met support@muetube.com voor hulp"],

        ["ਇਹ MueTube ਦਾ 'ਲਾਈਟ' ਸੰਸਕਰਣ ਹੈ",
        "ਪਲੇ ਸਟੋਰ ਨੀਤੀਆਂ ਦੇ ਅਨੁਕੂਲ ਰਹਿਣ ਲਈ, ਇਸ ਐਪ ਵਿੱਚ ਐਡ-ਫ੍ਰੀ, ਆਫਲਾਈਨ ਜਾਂ ਬੈਕਗਰਾ .ਂਡ-ਪਲੇ ਸਮਰੱਥਾ ਸ਼ਾਮਲ ਨਹੀਂ ਹੈ",
        "ਵਧੇਰੇ ਜਾਣਕਾਰੀ ਲਈ ਕਿਰਪਾ ਕਰਕੇ www.MueTube.com ਤੇ ਜਾਓ ਜਾਂ ਸਹਾਇਤਾ ਲਈ ਸਮਰਥਨ ਕਰੋ"],

        ["To jest wersja MueTube 'Lite'",
        "Aby pozostać zgodnym z zasadami Play Store, ta aplikacja nie zawiera możliwości bez reklam, offline lub odtwarzania w tle",
        "Więcej informacji można znaleźć na stronie www.MueTube.com lub skontaktuj się z support@muetube.com, aby uzyskać pomoc"],

        ["Esta é uma versão 'Lite' do MueTube",
        "Para permanecer compatível com as políticas da Play Store, este aplicativo não inclui recursos livres de anúncios, offline ou planos de fundo",
        "Para mais informações, visite www.MueTube.com ou entre em contato com support@muetube.com para obter ajuda"],

        ["Aceasta este o versiune 'Lite' a MueTube",
        "Pentru a rămâne conform cu politicile de joc de joc, această aplicație nu include capacități gratuite, offline sau de redare",
        "Pentru informații suplimentare, vizitați www.MueTube.com sau contactați support@muetube.com pentru ajutor"],

        ["Это версия MueTube 'Lite'",
        "Чтобы оставаться совместимым с политиками игрового магазина, это приложение не включает в себя без рекламы, автономные или фоновые возможности игры",
        "Для получения дополнительной информации, пожалуйста, посетите www.MueTube.com или Contact support@muetube.com для помощи"],

        ["Toto je verzia MueTube 'Lite'",
        "Ak chcete zostať v súlade s politikami skladieb, táto aplikácia neobsahuje bezplatné, offline alebo funkcie na pozadí",
        "Ďalšie informácie nájdete na www.MueTube.com alebo kontaktujte support@muetube.com pre pomoc"],

        ["To je različica MueTube 'Lite'",
        "Da bi ostala skladna s politikami trgovine z igralnimi trgovinami, ta aplikacija ne vključuje brezplačnih naprav brez oglasa, brez povezave ali ozadja",
        "Za dodatne informacije obiščite www.MueTube.com ali se obrnite na support@muetube.com za pomoč"],

        ["Ky është një version i 'Lite' i MueTube",
        "Për të qëndruar në përputhje me politikat e dyqaneve të lojërave, ky aplikacion nuk përfshin aftësitë pa pagesë, offline ose sfond-play",
        "Për informacione të mëtejshme ju lutemi vizitoni www.MueTube.com ose kontaktoni support@muetube.com për ndihmë"],

        ["Ово је 'Lite' верзија MueTube",
        "Да бисте остали у складу са политикама Плаи Сторе, ова апликација не укључује могућности без огласа, ван мреже или позадинске репродукције",
        "За даље информације посетите www.MueTube.com или контактирајте support@muetube.com за помоћ"],

        ["Detta är en 'Lite' version av MueTube",
        "För att förbli kompatibel med Play Store-policyer, innehåller den här appen inte annonsfria, offline- eller bakgrundsspelningsfunktioner",
        "För ytterligare information, besök www.MueTube.com eller kontakta support@muetube.com för hjälp"],

        ["Hii ni toleo la 'Lite' la MueTube.",
        "Ili kubaki kuzingatiwa na sera za duka la kucheza, programu hii haijumuishi matangazo ya bure, ya nje ya mtandao au ya nyuma",
        "Kwa habari zaidi tafadhali tembelea www.MueTube.com au wasiliana na support@muetube.com kwa msaada"],

        ["ఇది MueTube యొక్క 'లైట్' వెర్షన్",
        "నాటకం దుకాణ విధానాలకు అనుగుణంగా ఉండటానికి, ఈ అనువర్తనం ప్రకటన రహిత, ఆఫ్లైన్ లేదా నేపథ్య-ప్లే సామర్థ్యాలను కలిగి ఉండదు",
        "మరింత సమాచారం కోసం www.MueTube.com ను సందర్శించండి లేదా సహాయం కోసం support@muetube.com"],

        ["นี่เป็นเวอร์ชั่น 'Lite' ของ MueTube",
        "เพื่อให้สอดคล้องกับนโยบาย Play Store แอพนี้ไม่รวมความสามารถที่ไม่มีโฆษณาออฟไลน์หรือพื้นหลัง",
        "สำหรับข้อมูลเพิ่มเติมกรุณาเยี่ยมชม www.MueTube.com หรือติดต่อ support@muetube.com เพื่อขอความช่วยเหลือ"],

        ["Bu, MueTube'ın 'Lite' sürümüdür.",
        "Oyun Mağazası Politikaları ile uyumlu kalmak için, bu uygulama reklamsız, çevrimdışı veya arka plan-oyun yeteneklerini içermez",
        "Daha fazla bilgi için lütfen www.MueTube.com adresini ziyaret edin veya support@muetube.com adresine başvurun."],

        ["Це 'Lite' версія MueTube",
        "Щоб залишатися сумісним з політикою Store Store, ця програма не включає вільні рекламні, автономні або фонові можливості",
        "Для отримання додаткової інформації відвідайте www.MueTube.com або контактну support@muetube.com за допомогою"],

        ["Bu MueTube-ning 'Lite' versiyasi",
        "Play do'konining siyosatiga muvofiq qolish uchun ushbu ilova reklama bepul, oflayn yoki orqa o'yin qobiliyatini o'z ichiga olmaydi",
        "Qo'shimcha ma'lumot uchun www.MueTube.com saytiga tashrif buyuring yoki yordam uchun murojaat support@muetube.com"],

        ["Đây là phiên bản 'Lite' của MueTube",
        "Để duy trì tuân thủ các chính sách Play Store, ứng dụng này không bao gồm khả năng phát trực tuyến, ngoại tuyến hoặc phát trực tuyến",
        "Để biết thêm thông tin, vui lòng truy cập www.MueTube.com hoặc liên hệ với support@muetube.com để được trợ giúp"],

        ["这是一个 Lite 版本的谷 MueTube",
        "为了保持符合播放商店策略，此应用程序不包括无广告，离线或背景播放功能",
        "有关详细信息，请访问 www.MueTube.com 或联系 support@muetube.com 以获取帮助"]


    ];

    if(indexOfLanguage==-1){
        messages.push("This is a 'Lite' version of MueTube");
        messages.push("To remain compliant with Play Store policies, this app does not include ad-free, offline or background-play capabilities");
        messages.push("For further information please visit www.MueTube.com or contact support@muetube.com for help");
    }
    else{
        all[indexOfLanguage].forEach(element => messages.push(element));
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

    try {
        javascript: AndroidAd.hideShimmerShowCustomAd();
    } catch (e) {}
}