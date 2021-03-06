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
            //javascript: AndroidAd.loadNormalAd();
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

    var thanksArray = [
        "شكرًا لاستخدام MueTube :)\nيرجى مشاركة التطبيق مع الآخرين",

        "MueTube istifadə etdiyiniz üçün təşəkkür edirəm :)\nXahiş edirəm tətbiqi başqaları ilə paylaşın",

        "Благодарим ви, че използвате MueTube :)\nМоля, споделете приложението с други",

        "MueTube ব্যবহার করার জন্য ধন্যবাদ :)\nদয়া করে অন্যদের সাথে অ্যাপটি ভাগ করুন",

        "Hvala što koristite MueTube :)\nMolimo podijelite aplikaciju s drugima",

        "Gràcies per utilitzar MueTube :)\nSi us plau, compartiu l'aplicació amb altres persones",

        "Děkujeme, že používáte MueTube :)\nSdílejte prosím aplikaci s ostatními",

        "Tak, fordi du bruger MueTube :)\nDel appen med andre",

        "Vielen Dank für die Verwendung von MueTube :)\nBitte teilen Sie die App mit anderen",

        "Ευχαριστούμε που χρησιμοποιήσατε το MueTube :)\nΜοιραστείτε την εφαρμογή με άλλους",

        "Gracias por usar MueTube :)\nComparte la aplicación con otros",

        "Täname, et kasutasite MueTube'i :)\nPalun jagage rakendust teistega",

        "با تشکر برای استفاده از MueTube :)\nلطفا برنامه را با دیگران به اشتراک بگذارید",

        "Kiitos MueTube: n käytöstä :)\nOle hyvä ja jaa sovellus muiden kanssa",

        "Salamat sa paggamit ng MueTube :)\nMangyaring ibahagi ang app sa iba",

        "Merci d'utiliser MueTube :)\nVeuillez partager l'application avec d'autres",

        "MueTube का उपयोग करने के लिए धन्यवाद :)\nकृपया दूसरों के साथ ऐप साझा करें",

        "Hvala što koristite MueTube :)\nMolimo podijelite aplikaciju s drugima",

        "Köszönjük, hogy használta a MueTube-ot :)\nKérjük, ossza meg másokkal az alkalmazást",

        "Terima kasih telah menggunakan MueTube :)\nSilakan bagikan aplikasi ini dengan orang lain",

        "Grazie per aver utilizzato MueTube :)\nCondividete l'app con altri",

        "תודה על השימוש ב- MueTube :)\nאנא שתף ​​את האפליקציה עם אחרים",

        "MueTubeをご利用いただきありがとうございます：）\nアプリを他の人と共有してください",

        "გმადლობთ MueTube– ის გამოყენებისათვის :)\nგთხოვთ, გაუზიაროთ აპი სხვებს",

        "សូមអរគុណសម្រាប់ការប្រើប្រាស់ MueTube :) ១២៣១២៣១២៣ សូមចែករំលែកកម្មវិធីនេះជាមួយអ្នកដទៃ",

        "MueTube를 사용해 주셔서 감사합니다. :)\n다른 사람들과 앱을 공유해주세요",

        "ຂອບໃຈທີ່ໃຊ້ MueTube :)\nກະລຸນາແບ່ງປັນແອັບໃຫ້ຄົນອື່ນຟັງ",

        "Dėkojame, kad naudojatės „MueTube“ :)\nPasidalykite programa su kitais",

        "Paldies, ka izmantojāt MueTube :)\nLūdzu, kopīgojiet lietotni ar citiem",

        "Ви благодариме што го користевте MueTube :)\nВе молиме споделете ја апликацијата со други",

        "MueTube-ийг ашигласанд баярлалаа :)\nПрограмаа бусадтай хуваалцана уу",

        "MueTube वापरल्याबद्दल धन्यवाद :)\nकृपया अॅप इतरांसह सामायिक करा",

        "Terima kasih kerana menggunakan MueTube :)\nSila kongsi aplikasinya dengan orang lain",

        "MueTube :) ကိုအသုံးပြုသည့်အတွက်ကျေးဇူးတင်ပါသည်။\nကျေးဇူးပြုပြီး app ကိုအခြားသူများအားဝေမျှပါ",

        "Takk for at du bruker MueTube :)\nVennligst del appen med andre",

        "Bedankt voor het gebruik van MueTube :)\nDeel de app met anderen",

        "MueTube ਦੀ ਵਰਤੋਂ ਕਰਨ ਲਈ ਧੰਨਵਾਦ :)\nਕਿਰਪਾ ਕਰਕੇ ਦੂਜਿਆਂ ਨਾਲ ਐਪ ਨੂੰ ਸਾਂਝਾ ਕਰੋ",

        "Dziękujemy za korzystanie z MueTube :)\nUdostępnij tę aplikację innym",

        "Obrigado por usar o MueTube :)\nCompartilhe o aplicativo com outras pessoas",

        "Vă mulțumim că utilizați MueTube :)\nVă rugăm să partajați aplicația cu alții",

        "Спасибо за использование MueTube :)\nПожалуйста, поделитесь приложением с другими",

        "Ďakujeme, že používate MueTube :)\nZdieľajte aplikáciu s ostatnými",

        "Hvala, ker uporabljate MueTube :)\nProsimo, delite aplikacijo z drugimi",

        "Faleminderit për përdorimin e MueTube :)\nJu lutemi ndani aplikacionin me të tjerët",

        "Хвала што користите МуеТубе :)\nМолимо поделите апликацију са другима",

        "Tack för att du använder MueTube :)\nVänligen dela appen med andra",

        "Asante kwa kutumia MueTube :)\nTafadhali shiriki programu na wengine",

        "MueTube ఉపయోగించినందుకు ధన్యవాదాలు :)\nదయచేసి అనువర్తనాన్ని ఇతరులతో పంచుకోండి",

        "ขอบคุณที่ใช้ MueTube :)\nโปรดแชร์แอพนี้กับผู้อื่น",

        "MueTube'u kullandığınız için teşekkürler :)\nLütfen uygulamayı başkalarıyla paylaşın",

        "Дякуємо за використання MueTube :)\nБудь ласка, поділіться цим додатком з іншими",

        "MueTube-dan foydalanganingiz uchun tashakkur :)\nIltimos, ilovani boshqalar bilan baham ko'ring",

        "Cảm ơn bạn đã sử dụng MueTube :)\nVui lòng chia sẻ ứng dụng với những người khác",

        "感谢您使用MueTube :)\n请与他人共享该应用"

    ]


    var shareArray = [
        "إذا كنت تواجه أي مشاكل ، فيرجى إلغاء تثبيت\nوإعادة تثبيت التطبيق أو الاتصال بي للحصول على المساعدة",

        "Hər hansı bir probleminiz varsa,\n'ü silin və tətbiqini yenidən bərpa edin və ya kömək üçün mənimlə əlaqə saxlayın",

        "Ако имате някакви проблеми, моля, деинсталирайте\nи преинсталирайте приложението или се свържете с мен за помощ",

        "আপনার যদি কোনও সমস্যা হয় তবে দয়া করে\nআনইনস্টল করুন এবং অ্যাপটি পুনরায় ইনস্টল করুন বা সাহায্যের জন্য আমার সাথে যোগাযোগ করুন",

        "Ako imate bilo kakvih problema, deinstalirajte\ni ponovo instalirajte aplikaciju ili me kontaktirajte za pomoć",

        "Si teniu algun problema, desinstal·leu\ni torneu a instal·lar l'aplicació o contacteu amb mi per obtenir ajuda",

        "Pokud máte nějaké problémy, odinstalujte\na přeinstalujte aplikaci nebo mě kontaktujte o pomoc",

        "Hvis du har problemer, skal du afinstallere\nog geninstallere appen eller kontakte mig for hjælp",

        "Wenn Sie Probleme haben, deinstallieren Sie bitte\nund installieren Sie die App neu oder kontaktieren Sie mich, um Hilfe zu erhalten",

        "Εάν αντιμετωπίζετε προβλήματα, απεγκαταστήστε το\nκαι εγκαταστήστε ξανά την εφαρμογή ή επικοινωνήστε μαζί μου για βοήθεια",

        "Si tiene algún problema, desinstale\ny vuelva a instalar la aplicación o contácteme para obtener ayuda.",

        "Kui teil on probleeme, desinstallige\nja installige rakendus uuesti või pöörduge abi saamiseks minuga",

        "اگر مشکلی دارید ، لطفاً\nرا حذف نصب کنید و برنامه را دوباره نصب کنید یا برای راهنمایی با من تماس بگیرید",

        "Jos sinulla on ongelmia, poista\nja asenna sovellus uudelleen tai ota yhteyttä minuun",

        "Kung nagkakaroon ka ng anumang mga isyu mangyaring i-uninstall ang\nat muling i-install ang app o makipag-ugnay sa akin para sa tulong",

        "Si vous rencontrez des problèmes, désinstallez\net réinstallez l'application ou contactez-moi pour obtenir de l'aide",

        "अगर आपको कोई समस्या हो रही है तो कृपया\nको अनइंस्टॉल करें और ऐप को फिर से इंस्टॉल करें या मदद के लिए मुझसे संपर्क करें",

        "Ako imate bilo kakvih problema, deinstalirajte\ni ponovo instalirajte aplikaciju ili me kontaktirajte za pomoć",

        "Ha bármilyen problémája van, kérjük, távolítsa el a\nalkalmazást, és telepítse újra az alkalmazást, vagy forduljon hozzám segítségért",

        "Jika Anda mengalami masalah, hapus instalan\ndan instal ulang aplikasi atau hubungi saya untuk mendapatkan bantuan",

        "In caso di problemi, disinstalla\ne reinstalla l'app o contattami per assistenza",

        "אם אתה נתקל בבעיות, אנא הסר את ההתקנה של\nוהתקן מחדש את האפליקציה או צור איתי קשר לעזרה",

        "問題が発生した場合は、\nをアンインストールしてアプリを再インストールするか、サポートが必要な場合は私に連絡してください",

        "თუ რაიმე პრობლემა გაქვთ, გთხოვთ, წაშალოთ\nდა ხელახლა დააინსტალირეთ აპი ან დამიკავშირდით დახმარებისთვის",

        "ប្រសិនបើអ្នកមានបញ្ហាសូមលុបការតំឡើង\nហើយតំឡើងកម្មវិធីឡើងវិញរឺទាក់ទងមកខ្ញុំដើម្បីសុំជំនួយ",

        "문제가있는 경우\n을 제거하고 앱을 다시 설치하거나 저에게 도움을 요청하십시오.",

        "ຖ້າທ່ານມີປັນຫາໃດໆກະລຸນາຖອນການຕິດຕັ້ງ\nແລະຕິດຕັ້ງແອັບ or ໃໝ່ ຫຼືຕິດຕໍ່ຂ້ອຍເພື່ອຂໍຄວາມຊ່ວຍເຫລືອ",

        "Jei kyla problemų, pašalinkite\nir iš naujo įdiekite programą arba susisiekite su manimi dėl pagalbos",

        "Ja jums rodas kādas problēmas, lūdzu, atinstalējiet\nun atkārtoti instalējiet lietotni vai sazinieties ar mani, lai saņemtu palīdzību",

        "Ако имате какви било проблеми, деинсталирајте ја\nи повторно инсталирајте ја апликацијата или контактирајте ме за помош",

        "Хэрэв танд ямар нэгэн асуудал тулгарвал\nпрограмыг устгаад програмыг дахин суулгана уу эсвэл надтай холбоо барьж тусламж авна уу",

        "आपणास काही समस्या असल्यास कृपया\nविस्थापित करा आणि अ‍ॅप पुन्हा स्थापित करा किंवा मदतीसाठी माझ्याशी संपर्क साधा",

        "Sekiranya anda menghadapi masalah, nyahpasang\ndan pasang semula aplikasinya atau hubungi saya untuk mendapatkan bantuan",

        "သင့်တွင်ပြissuesနာများရှိပါက ကျေးဇူးပြု၍\nကိုဖြုတ်ပြီး app ကိုပြန်လည်ထည့်သွင်းပါသို့မဟုတ်အကူအညီအတွက်ကျွန်ုပ်အားဆက်သွယ်ပါ",

        "Hvis du har problemer, kan du avinstallere\nog installere appen på nytt eller kontakte meg for hjelp",

        "Als u problemen ondervindt, verwijdert u\nen installeert u de app opnieuw of neemt u contact met mij op voor hulp",

        "ਜੇ ਤੁਹਾਨੂੰ ਕੋਈ ਮੁਸ਼ਕਲ ਆ ਰਹੀ ਹੈ ਤਾਂ ਕਿਰਪਾ ਕਰਕੇ\nਅਨਇੰਸਟੌਲ ਕਰੋ ਅਤੇ ਐਪ ਨੂੰ ਦੁਬਾਰਾ ਸਥਾਪਤ ਕਰੋ ਜਾਂ ਮਦਦ ਲਈ ਮੇਰੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ",

        "Jeśli masz jakiekolwiek problemy, odinstaluj\ni ponownie zainstaluj aplikację lub skontaktuj się ze mną w celu uzyskania pomocy",

        "Se você estiver tendo algum problema, desinstale o\ne reinstale o aplicativo ou entre em contato comigo para obter ajuda",

        "Dacă aveți probleme, dezinstalați\nși reinstalați aplicația sau contactați-mă pentru ajutor",

        "Если у вас возникли проблемы, удалите\nи переустановите приложение или свяжитесь со мной для получения помощи.",

        "Ak máte akékoľvek problémy, odinštalujte\na znovu nainštalujte aplikáciu alebo ma kontaktujte so žiadosťou o pomoc",

        "Če imate kakršne koli težave, odstranite\nin znova namestite aplikacijo ali se za pomoč obrnite na mene",

        "Nëse keni ndonjë problem, ju lutem çinstaloni\ndhe riinstaloni aplikacionin ose më kontaktoni për ndihmë",

        "Ако имате било каквих проблема, деинсталирајте\nи поново инсталирајте апликацију или ме контактирајте за помоћ",

        "Om du har några problem, avinstallera\noch installera om appen eller kontakta mig för hjälp",

        "Ikiwa una shida yoyote tafadhali ondoa\nna usakinishe tena programu au uwasiliane nami kwa msaada",

        "మీకు ఏవైనా సమస్యలు ఉంటే దయచేసి\nను అన్‌ఇన్‌స్టాల్ చేసి, అనువర్తనాన్ని మళ్లీ ఇన్‌స్టాల్ చేయండి లేదా సహాయం కోసం నన్ను సంప్రదించండి",

        "หากคุณประสบปัญหาใด ๆ โปรดถอนการติดตั้ง\nแล้วติดตั้งแอพใหม่หรือติดต่อฉันเพื่อขอความช่วยเหลือ",

        "Herhangi bir sorun yaşıyorsanız lütfen\n'ü kaldırın ve uygulamayı yeniden yükleyin veya yardım için benimle iletişime geçin",

        "Якщо у вас виникли проблеми, видаліть\nта переінсталюйте програму або зв’яжіться зі мною за допомогою",

        "Agar sizda biron bir muammo yuzaga kelsa, iltimos,\n-ni o'chirib tashlang va dasturni qayta o'rnating yoki yordam uchun men bilan bog'laning",

        "Nếu bạn đang gặp bất kỳ sự cố nào, vui lòng gỡ cài đặt\nvà cài đặt lại ứng dụng hoặc liên hệ với tôi để được trợ giúp",

        "如果您有任何问题，请卸载\n并重新安装该应用程序，或与我联系以获取帮助"
    ]

    if(indexOfLanguage==-1){
        messages.push("Thanks for using MueTube :)\nPlease share the app with others");
        messages.push("If you are having any issues please uninstall\nand reinstall the app or contact me for help");
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