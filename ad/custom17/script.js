function pauseAd(){}
function resumeAd(){}

var latestAppV = '4.3.0'
var randomIntegerVal = randomInteger(1, 10);
if(userCurrentAppVersion==latestAppV && randomIntegerVal % 2 === 0){
    window.location.href = "https://sachin-s-shah.github.io/ad/customNaz2/index.html";
}
else{
    if (document.readyState === "complete") {
        doWork();
    }
    else{
        window.addEventListener('load', function() {
            doWork();
        })
    }
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
    }, 36000);
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function openAdUrl(){
    
        if(userCurrentAppVersion==latestAppV){
            javascript: AndroidAd.shareLink('https://play.google.com/store/apps/details?id=in.a5ach.muetubepre');
        }
        else{
            javascript: AndroidAd.openLinkInBrowser('market://details?id=in.a5ach.muetubepre');
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

    var all;
    
    if(userCurrentAppVersion==latestAppV){
        all = [

            ["احب الموسيقى؟ شارك التطبيق مع الآخرين",
            "هل ساعدك MueTube؟ اترك تقييمًا ومراجعة مكتوبة له على متجر Play",
            "هل لديك أفكار أو تحسينات أو اقتراحات؟ تواصل معنا وأعطيني ملاحظات",
            "هل تحب MueTube؟ اذهب واشكر من أخبرك عن التطبيق",
            "هل تواجه مشكلات؟ أعد تثبيت التطبيق أو اتصل بي للحصول على المساعدة",
            "هل تستمتع بـ MueTube؟ أنا أيضا"],
    
            ["Musiqi sevirsən? Tətbiqi başqaları ilə paylaşın",
            "MueTube sizə kömək etdi? Play Store'da bunun üçün bir reytinq və yazılı rəy buraxın",
            "Fikirləriniz, təkmilləşdirmələriniz və ya təklifləriniz var? Əlaqə qurun və mənə rəy bildirin",
            "MueTube-u sevirsən? Gedin və tətbiq haqqında sizə söyləyənə təşəkkür edin",
            "Problemlərlə qarşılaşırsınız? Proqramı yenidən qurun və ya kömək üçün mənimlə əlaqə saxlayın",
            "MueTube-dan zövq alırsınız? Mən də həmçinin"],
    
            ["Обичате музиката? Споделете приложението с други хора",
            "MueTube помогна ли ви? Оставете оценка и писмен отзив за него в Play Store",
            "Имате идеи, подобрения или предложения? Свържете се и ми дайте обратна връзка",
            "Обичате MueTube? Отидете и благодарете на онзи, който ви е казал за приложението",
            "Имате проблеми? Преинсталирайте приложението или се свържете с мен за помощ",
            "Наслаждавате ли се на MueTube? Аз също"],
    
            ["সঙ্গীতকে ভালোবাসো? অন্যদের সাথে অ্যাপটি ভাগ করুন",
            "MueTube আপনাকে সাহায্য করেছে? প্লে স্টোরে এর জন্য একটি রেটিং এবং লিখিত পর্যালোচনা ছেড়ে দিন",
            "ধারণা, উন্নতি বা পরামর্শ পেয়েছেন? যোগাযোগ করুন এবং আমাকে প্রতিক্রিয়া জানান",
            "ভালবাসা মিউউটিউব? যে কেউ আপনাকে অ্যাপটির কথা বলেছে সেখানে গিয়ে ধন্যবাদ জানায়",
            "সমস্যাগুলির সমস্যা? অ্যাপটি পুনরায় ইনস্টল করুন বা সাহায্যের জন্য আমার সাথে যোগাযোগ করুন",
            "MueTube উপভোগ করছেন? আমিও"],
    
            ["Volite muziku? Podijelite aplikaciju s drugima",
            "Je li vam MueTube pomogao? Ostavite ocjenu i pisanu recenziju za to na Play trgovini",
            "Imate ideje, poboljšanja ili prijedloge? Stupite u kontakt i dajte mi povratne informacije",
            "Volite MueTube? Idite i zahvalite se onome ko vam je rekao o aplikaciji",
            "Imate problema? Ponovo instalirajte aplikaciju ili me kontaktirajte za pomoć",
            "Uživate li u MueTubeu? Ja također"],
    
            ["T'encanta la música? Comparteix l'aplicació amb altres persones",
            "Us ha ajudat MueTube? Deixeu una valoració i una ressenya per escrit a Play Store",
            "Tens idees, millores o suggeriments? Poseu-vos en contacte i feu-me comentaris",
            "T’agrada MueTube? Vés i dóna les gràcies a qui t’hagi parlat de l’aplicació",
            "Teniu problemes? Torneu a instal·lar l'aplicació o contacteu amb mi per obtenir ajuda",
            "Us agrada MueTube? Jo també"],
    
            ["Milovat hudbu? Sdílejte aplikaci s ostatními",
            "Pomohl vám MueTube? Zanechte pro něj hodnocení a písemnou recenzi v Obchodu Play",
            "Máte nápady, vylepšení nebo návrhy? Spojte se a dejte mi zpětnou vazbu",
            "Milujete MueTube? Jděte a děkujte komukoli, kdo vám o aplikaci řekl",
            "Máte problémy? Přeinstalujte aplikaci nebo mě kontaktujte o pomoc",
            "Baví vás MueTube? Já také"],
    
            ["Elsker musik? Del appen med andre",
            "Har MueTube hjulpet dig? Efterlad en vurdering og en skriftlig anmeldelse af den i Play Butik",
            "Har du ideer, forbedringer eller forslag? Kontakt os og giv mig feedback",
            "Elsker du MueTube? Gå og tak den, der fortalte dig om appen",
            "Oplever du problemer? Geninstaller appen, eller kontakt mig for hjælp",
            "Nyder du MueTube? Også mig"],
    
            ["Liebesmusik? Teile die App mit anderen",
            "Hat MueTube Ihnen geholfen? Hinterlassen Sie eine Bewertung und eine schriftliche Bewertung im Play Store",
            "Haben Sie Ideen, Verbesserungen oder Vorschläge? Kontaktieren Sie mich und geben Sie mir Feedback",
            "Lieben Sie MueTube? Geh und danke, wer dir von der App erzählt hat",
            "Probleme erleben? Installieren Sie die App neu oder kontaktieren Sie mich um Hilfe",
            "MueTube genießen? Ich auch"],
    
            ["Σας αρέσει η μουσική; Μοιραστείτε την εφαρμογή με άλλους",
            "Σας βοήθησε το MueTube; Αφήστε μια βαθμολογία και γραπτή κριτική για αυτό στο Play Store",
            "Έχετε ιδέες, βελτιώσεις ή προτάσεις; Ελάτε σε επαφή και δώστε μου σχόλια",
            "Αγαπάτε το MueTube; Πηγαίνετε και ευχαριστώ όποιον σας είπε για την εφαρμογή",
            "Αντιμετωπίζετε προβλήματα; Εγκαταστήστε ξανά την εφαρμογή ή επικοινωνήστε μαζί μου για βοήθεια",
            "Σας αρέσει το MueTube; Και εγώ"],
    
            ["¿Amo la música? Comparte la aplicación con otros",
            "¿MueTube te ha ayudado? Deja una calificación y una reseña escrita en Play Store.",
            "¿Tienes ideas, mejoras o sugerencias? Ponte en contacto y dame tu opinión",
            "¿Te encanta MueTube? Ve y agradece a quien te habló de la aplicación",
            "¿Tiene problemas? Reinstale la aplicación o contácteme para obtener ayuda",
            "¿Disfrutando de MueTube? Yo también"],
    
            ["Muusikat armastama? Jagage rakendust teistega",
            "Kas MueTube on sind aidanud? Jätke selle hinnang ja kirjalik arvustus Play poodi",
            "Kas teil on ideid, täiustusi või ettepanekuid? Võtke ühendust ja andke mulle tagasisidet",
            "Armastan MueTube'i? Minge ja tänage seda, kes teile äpi kohta rääkis",
            "Kas teil on probleeme? Installige rakendus uuesti või pöörduge abi saamiseks minuga",
            "Kas naudite MueTube'i? Mina ka"],
    
            ["موسیقی عاشقانه؟ برنامه را با دیگران به اشتراک بگذارید",
            "آیا MueTube به شما کمک کرده است؟ برای آن در Play Store رتبه بندی و نظر کتبی بگذارید",
            "ایده ، پیشرفت یا پیشنهادی دارید؟ در تماس باشید و به من بازخورد دهید",
            "MueTube را دوست دارید؟ بروید و از هرکسی که در مورد برنامه به شما گفته است تشکر کنید",
            "مسائلی را تجربه می کنید؟ برنامه را دوباره نصب کنید یا برای راهنمایی با من تماس بگیرید",
            "از MueTube لذت می برید؟ من هم همینطور"],
    
            ["Rakastaa musiikkia? Jaa sovellus muiden kanssa",
            "Onko MueTube auttanut sinua? Jätä sille luokitus ja kirjallinen arvostelu Play Kaupasta",
            "Onko sinulla ideoita, parannuksia tai ehdotuksia? Ota yhteyttä ja anna minulle palautetta",
            "Rakastava MueTube? Mene ja kiitä sitä, joka kertoi sinulle sovelluksesta",
            "Onko sinulla ongelmia? Asenna sovellus uudelleen tai ota yhteyttä minuun",
            "Nautitko MueTubeista? Minä myös"],
    
            ["Mahal ang musika? Ibahagi ang app sa iba",
            "Tinulungan ka ba ng MueTube? Mag-iwan ng rating at nakasulat na pagsusuri para dito sa Play Store",
            "Mayroon bang mga ideya, pagpapabuti o mungkahi? Makipag-ugnay at bigyan ako ng puna",
            "Mapagmahal na MueTube? Pumunta at magpasalamat sa sinumang nagsabi sa iyo tungkol sa app",
            "Nakakaranas ng mga isyu? I-install muli ang app o makipag-ugnay sa akin para sa tulong",
            "Nag-e-enjoy sa MueTube? Ako rin"],
    
            ["Aimer la musique? Partagez l'application avec d'autres",
            "MueTube vous a-t-il aidé? Laissez une note et une évaluation écrite sur le Play Store",
            "Vous avez des idées, des améliorations ou des suggestions? Contactez-moi et faites-moi part de vos commentaires",
            "Vous aimez MueTube? Allez remercier celui qui vous a parlé de l'application",
            "Vous rencontrez des problèmes? Réinstaller l'application ou me contacter pour obtenir de l'aide",
            "Vous aimez MueTube? Moi aussi"],
    
            ["संगीत से प्यार है? अन्य लोगों के साथ एप्लिकेशन साझा करें",
            "क्या MueTube ने आपकी मदद की है? प्ले स्टोर पर इसके लिए एक रेटिंग और लिखित समीक्षा छोड़ दें",
            "विचार, सुधार या सुझाव मिला? संपर्क में रहें और मुझे प्रतिक्रिया दें",
            "प्यार MueTube? जाओ और जिसने भी आपको ऐप के बारे में बताया धन्यवाद",
            "मुद्दों का अनुभव? एप्लिकेशन को पुनर्स्थापित करें या मदद के लिए मुझसे संपर्क करें",
            "MueTube का आनंद ले रहे हैं? मैं भी"],
    
            ["Volite glazbu? Podijelite aplikaciju s drugima",
            "Je li vam MueTube pomogao? Ostavite ocjenu i pisanu recenziju za to na Trgovini Play",
            "Imate ideje, poboljšanja ili prijedloge? Stupite u kontakt i dajte mi povratne informacije",
            "Volite MueTube? Idite i zahvalite se onome tko vam je rekao o aplikaciji",
            "Imate problema? Ponovo instalirajte aplikaciju ili me kontaktirajte za pomoć",
            "Uživate li u MueTubeu? Ja isto"],
    
            ["Szeretem a zenét? Ossza meg az alkalmazást másokkal",
            "Segített a MueTube? Hagyjon értékelést és írásos véleményt a Play Áruházból",
            "Van ötlete, fejlesztése vagy javaslata? Vegye fel a kapcsolatot, és küldjön visszajelzést",
            "Szerető MueTube? Menj és köszönj meg bárkinek, aki mesélt neked az alkalmazásról",
            "Problémákat tapasztal? Telepítse újra az alkalmazást, vagy forduljon hozzám segítségért",
            "Élvezi a MueTube-ot? Nekem is"],
    
            ["Cinta musik? Bagikan aplikasi dengan orang lain",
            "Apakah MueTube membantu Anda? Berikan peringkat dan ulasan tertulis untuk itu di Play Store",
            "Punya ide, perbaikan atau saran? Hubungi dan beri saya umpan balik",
            "Suka MueTube? Pergi dan ucapkan terima kasih kepada siapa pun yang memberi tahu Anda tentang aplikasi",
            "Mengalami masalah? Instal ulang aplikasi atau hubungi saya untuk mendapatkan bantuan",
            "Suka MueTube? Saya juga"],
    
            ["Amo la musica? Condividi l'app con altri",
            "MueTube ti ha aiutato? Lascia una valutazione e una recensione scritta sul Play Store",
            "Hai idee, miglioramenti o suggerimenti? Mettiti in contatto e dammi un feedback",
            "Ti piace MueTube? Vai e ringrazia chi ti ha parlato dell'app",
            "Hai problemi? Reinstalla l'app o contattami per assistenza",
            "Ti piace MueTube? Anche a me"],
    
            ["אוהב מוסיקה? שתף את האפליקציה עם אחרים",
            "האם MueTube עזר לך? השאירו דירוג וביקורת כתובה עליו בחנות Play",
            "יש לך רעיונות, שיפורים או הצעות? צרו קשר ותנו לי משוב",
            "אוהבים את MueTube? לך ותודה למי שסיפר לך על האפליקציה",
            "נתקל בבעיות? התקן מחדש את האפליקציה או צור איתי קשר לעזרה",
            "נהנה מ MueTube? גם אני"],
    
            ["音楽が大好き？ アプリを他の人と共有する",
            "MueTubeはあなたを助けましたか？ Playストアに評価と書面によるレビューを残してください",
            "アイデア、改善、提案がありますか？ 連絡を取り、フィードバックをください",
            "MueTubeが好きですか？ アプリについて教えてくれた人に感謝します",
            "問題が発生していますか？ アプリを再インストールするか、ヘルプが必要な場合は私に連絡してください",
            "MueTubeを楽しんでいますか？ 私も"],
    
            ["Მიყვარს მუსიკა? გაუზიარეთ აპი სხვებს",
            "MueTube დაგეხმარათ? დატოვეთ ნიშანი და წერილობითი მიმოხილვა Play Store- ზე",
            "გაქვთ იდეები, გაუმჯობესებები ან შემოთავაზებები? დამიკავშირდით და გამომეხმაურეთ",
            "გიყვარს MueTube? წადით და მადლობა გადაუხადეთ, ვინც აპის შესახებ გითხრათ",
            "განიცდით პრობლემებს? გადააყენეთ აპი ან დამიკავშირდით დახმარებისთვის",
            "გსიამოვნებთ MueTube? Მეც"],
    
            ["ស្រឡាញ់តន្ត្រី? ចែករំលែកកម្មវិធីជាមួយអ្នកផ្សេង",
            "តើ MueTube បានជួយអ្នកទេ? ទុកការវាយតម្លៃនិងពិនិត្យឡើងវិញជាលាយលក្ខណ៍អក្សរសម្រាប់វានៅលើឃ្លាំងកម្មវិធី",
            "មានគំនិតកែលម្អឬសំណូមពរទេ? ទាក់ទងហើយផ្តល់យោបល់ខ្ញុំ",
            "MueTube ជាទីស្រឡាញ់? ទៅហើយអរគុណអ្នកណាដែលបានប្រាប់អ្នកអំពីកម្មវិធី",
            "បញ្ហាដែលមានបទពិសោធ? ដំឡើងកម្មវិធីឡើងវិញឬទាក់ទងមកខ្ញុំដើម្បីទទួលជំនួយ",
            "រីករាយជាមួយ MueTube? ខ្ញុំផងដែរ"],
    
            ["음악을 좋아하세요? 다른 사람과 앱 공유",
            "MueTube가 도움이 되었습니까? Play 스토어에 평가 및 리뷰를 남겨주세요.",
            "아이디어, 개선 또는 제안이 있습니까? 연락하여 피드백을주세요",
            "MueTube를 좋아하십니까? 가서 앱에 대해 말 해준 사람에게 감사합니다",
            "문제가 있습니까? 앱을 다시 설치하거나 저에게 도움을 요청하십시오.",
            "MueTube를 즐기십니까? 나도"],
    
            ["ຮັກດົນຕີບໍ? ແບ່ງປັນແອັບ with ໃຫ້ຄົນອື່ນ",
            "MueTube ໄດ້ຊ່ວຍທ່ານບໍ? ອອກຈາກການໃຫ້ຄະແນນແລະການທົບທວນເປັນລາຍລັກອັກສອນ ສຳ ລັບມັນໃນ Play Store",
            "ມີຄວາມຄິດ, ການປັບປຸງຫລື ຄຳ ແນະ ນຳ ບໍ? ຕິດຕໍ່ແລະໃຫ້ ຄຳ ຕິຊົມກັບຂ້ອຍ",
            "ຮັກ MueTube? ໄປແລະຂອບໃຈທຸກຄົນທີ່ບອກທ່ານກ່ຽວກັບແອັບ.",
            "ປະສົບບັນຫາ? ຕິດຕັ້ງແອັບ or ໃໝ່ ຫຼືຕິດຕໍ່ຂ້ອຍເພື່ອຂໍຄວາມຊ່ວຍເຫຼືອ",
            "ເພີດເພີນໄປກັບ MueTube? ຂ້ອຍ​ຄື​ກັນ"],
    
            ["Myliu muziką? Bendrinkite programą su kitais",
            "Ar „MueTube“ jums padėjo? Palikite įvertinimą ir rašytinę apžvalgą „Play“ parduotuvėje",
            "Turite idėjų, patobulinimų ar pasiūlymų? Susisiekite ir duok man atsiliepimų",
            "Mylintis „MueTube“? Eikite ir padėkokite tam, kas jums pasakė apie programą",
            "Iškyla problemų? Iš naujo įdiekite programą arba susisiekite su manimi dėl pagalbos",
            "Mėgaukitės „MueTube“? Aš taip pat"],
    
            ["Vai jums patīk mūzika? Dalieties lietotnē ar citiem",
            "Vai MueTube jums ir palīdzējis? Atstājiet vērtējumu un rakstisku atsauksmi Play veikalā",
            "Vai jums ir idejas, uzlabojumi vai ieteikumi? Sazinieties un sniedziet man atsauksmes",
            "Mīlo MueTube? Ej un paldies tam, kurš tev pastāstīja par lietotni",
            "Vai rodas problēmas? Pārinstalējiet lietotni vai sazinieties ar mani, lai saņemtu palīdzību",
            "Vai jums patīk MueTube? ES arī"],
    
            ["Loveубов музика? Споделете ја апликацијата со други",
            "Дали ви помогна MueTube? Оставете оцена и писмена рецензија за тоа на Play Store",
            "Имате идеи, подобрувања или предлози? Контактирајте се и дајте ми повратни информации",
            "Сакате MueTube? Одете и заблагодарете се на оној што ви кажал за апликацијата",
            "Доживувате проблеми? Повторно инсталирајте ја апликацијата или контактирајте ме за помош",
            "Уживате во MueTube? И јас"],
    
            ["Хөгжимд дуртай юу? Програмаа бусадтай хуваалцана уу",
            "MueTube танд тусалсан уу? Play Store дээр үнэлгээ, бичгээр бичсэн сэтгэгдлээ үлдээгээрэй",
            "Санаа, сайжруулалт, санал болгов уу? Холбоо барьж, надад санал хүсэлтээ хэлнэ үү",
            "MueTube-т дуртай юу? Явж, програмын талаар танд хэлсэн бүх хүмүүст талархал илэрхийлье",
            "Асуудал тулгарч байна уу? Програмыг дахин суулгана уу эсвэл надтай холбоо барьж тусламж авна уу",
            "MueTube таалагдаж байна уу? Би ч бас"],
    
            ["संगीत आवडते? इतरांसह अ‍ॅप सामायिक करा",
            "MueTube ने आपल्याला मदत केली आहे? त्यासाठी प्ले स्टोअरवर रेटिंग आणि लेखी पुनरावलोकन द्या",
            "कल्पना, सुधारणा किंवा सूचना मिळाल्या? संपर्कात रहा आणि मला अभिप्राय द्या",
            "म्यू ट्यूबला प्रेम आहे? जा आणि अॅपबद्दल ज्याला कोणी सांगितले त्यास आभार माना",
            "समस्या येत आहेत? अ‍ॅप पुन्हा स्थापित करा किंवा मदतीसाठी माझ्याशी संपर्क साधा",
            "MueTube चा आनंद घेत आहात? मी पण"],
    
            ["Suka muzik? Kongsi aplikasinya dengan orang lain",
            "Adakah MueTube telah menolong anda? Tinggalkan penilaian dan ulasan bertulis untuknya di Play Store",
            "Ada idea, penambahbaikan atau cadangan? Hubungi dan berikan maklum balas kepada saya",
            "Suka MueTube? Pergi dan terima kasih kepada sesiapa sahaja yang memberitahu anda mengenai aplikasinya",
            "Mengalami masalah? Pasang semula aplikasi atau hubungi saya untuk mendapatkan bantuan",
            "Menikmati MueTube? Saya juga"],
    
            ["ဂီတကိုနှစ်သက်ပါသလား။ အခြားသူများနှင့်အက်ပ်ကိုမျှဝေပါ",
            "MueTube ကမင်းကိုကူညီခဲ့တာလား။ Play Store တွင်အဆင့်သတ်မှတ်ချက်နှင့်ရေးသားထားသောပြန်လည်သုံးသပ်ခြင်းထားခဲ့ပါ",
            "အကြံဥာဏ်များ၊ တိုးတက်မှုများသို့မဟုတ်အကြံပြုချက်များရှိပါသလား။ ဆက်သွယ်ပြီးကျွန်တော့်ကိုအကြံပေးပါ",
            "အချစ် MueTube? ဒီ app အကြောင်းပြောပြတဲ့သူကိုသွားကျေးဇူးတင်ပါ",
            "ပြissuesနာများကြုံတွေ့နေရ? အက်ပလီကေးရှင်းကိုပြန်ထည့်ပါသို့မဟုတ်အကူအညီအတွက်ကျွန်ုပ်ကိုဆက်သွယ်ပါ",
            "MueTube ကိုခံစားသလား ကိုယ်လည်းပဲ"],
    
            ["Elsker musikk? Del appen med andre",
            "Har MueTube hjulpet deg? Legg igjen en vurdering og skriftlig anmeldelse for den i Play Store",
            "Har du ideer, forbedringer eller forslag? Ta kontakt og gi meg tilbakemelding",
            "Elsker du MueTube? Gå og takk den som fortalte deg om appen",
            "Har du problemer? Installer appen på nytt, eller kontakt meg for hjelp",
            "Liker du MueTube? Jeg også"],
    
            ["Hou van muziek? Deel de app met anderen",
            "Heeft MueTube je geholpen? Laat een beoordeling en een schriftelijke recensie achter in de Play Store",
            "Ideeën, verbeteringen of suggesties? Neem contact op en geef me feedback",
            "Houd je van MueTube? Ga en bedank degene die je over de app heeft verteld",
            "Ondervindt u problemen? Installeer de app opnieuw of neem contact met mij op voor hulp",
            "Geniet je van MueTube? Ik ook"],
    
            ["ਪਿਆਰ ਸੰਗੀਤ? ਐਪ ਨੂੰ ਦੂਜਿਆਂ ਨਾਲ ਸਾਂਝਾ ਕਰੋ",
            "ਕੀ ਮਯੂਟਿTubeਬ ਨੇ ਤੁਹਾਡੀ ਮਦਦ ਕੀਤੀ ਹੈ? ਇਸ ਲਈ ਪਲੇ ਸਟੋਰ 'ਤੇ ਰੇਟਿੰਗ ਅਤੇ ਲਿਖਤੀ ਸਮੀਖਿਆ ਛੱਡੋ",
            "ਵਿਚਾਰ, ਸੁਧਾਰ ਜਾਂ ਸੁਝਾਅ ਪ੍ਰਾਪਤ ਹੋਏ? ਸੰਪਰਕ ਵਿੱਚ ਰਹੋ ਅਤੇ ਮੈਨੂੰ ਫੀਡਬੈਕ ਦਿਓ",
            "ਪਿਆਰੇ ਮਯੂਟਿ ?ਬ ਨੂੰ ਪਿਆਰ ਕਰ ਰਹੇ ਹੋ? ਜਾਓ ਅਤੇ ਧੰਨਵਾਦ ਕਰੋ ਜਿਸਨੇ ਤੁਹਾਨੂੰ ਐਪ ਬਾਰੇ ਦੱਸਿਆ",
            "ਮੁਸ਼ਕਲਾਂ ਨਾਲ ਜੁੜੇ ਮੁੱਦੇ? ਐਪ ਨੂੰ ਦੁਬਾਰਾ ਸਥਾਪਤ ਕਰੋ ਜਾਂ ਮਦਦ ਲਈ ਮੇਰੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ",
            "ਮਯੂਟਿ ?ਬ ਦਾ ਅਨੰਦ ਲੈ ਰਹੇ ਹੋ? ਮੈ ਵੀ"],
    
            ["Kochać muzykę? Udostępnij aplikację innym",
            "Czy MueTube ci pomogła? Zostaw ocenę i pisemną recenzję w Sklepie Play",
            "Masz pomysły, ulepszenia lub sugestie? Skontaktuj się z nami i przekaż mi swoją opinię",
            "Kochasz MueTube? Idź i podziękuj temu, kto powiedział Ci o aplikacji",
            "Masz problemy? Zainstaluj ponownie aplikację lub skontaktuj się ze mną, aby uzyskać pomoc",
            "Podoba Ci się MueTube? Ja też"],
    
            ["Amo música? Compartilhe o aplicativo com outras pessoas",
            "O MueTube ajudou você? Deixe uma avaliação e uma crítica por escrito sobre ele na Play Store",
            "Tem ideias, melhorias ou sugestões? Entre em contato e me dê feedback",
            "Ama o MueTube? Vá e agradeça a quem falou sobre o aplicativo",
            "Enfrentando problemas? Reinstale o aplicativo ou entre em contato comigo para obter ajuda",
            "Está gostando do MueTube? Eu também"],
    
            ["Iubesc muzica? Distribuiți aplicația altor persoane",
            "Te-a ajutat MueTube? Lăsați o evaluare și o recenzie scrisă în Play Store",
            "Aveți idei, îmbunătățiri sau sugestii? Luați legătura și dați-mi feedback",
            "Îți place MueTube? Du-te și mulțumește oricui ți-a spus despre aplicație",
            "Aveți probleme? Reinstalați aplicația sau contactați-mă pentru ajutor",
            "Îți place MueTube? Și eu"],
    
            ["Любить музыку? Поделитесь приложением с другими",
            "Вам помог MueTube? Оставьте оценку и письменный отзыв о нем в Play Store",
            "Есть идеи, улучшения или предложения? Свяжитесь со мной и оставьте отзыв",
            "Любите MueTube? Иди и поблагодари того, кто рассказал тебе о приложении",
            "Возникли проблемы? Переустановите приложение или обратитесь ко мне за помощью",
            "Нравится MueTube? Я тоже"],
    
            ["Milujem hudbu? Zdieľajte aplikáciu s ostatnými",
            "Pomohol vám MueTube? Zanechajte pre neho hodnotenie a písomnú recenziu v Obchode Play",
            "Máte nápady, vylepšenia alebo návrhy? Ozvi sa a daj mi spätnú väzbu",
            "Máte radi MueTube? Choďte a poďakujte sa komukoľvek, kto vám povedal o aplikácii",
            "Máte problémy? Preinštalujte aplikáciu alebo ma kontaktujte so žiadosťou o pomoc",
            "Máte radi MueTube? Ja tiež"],
    
            ["Ljubite glasbo? Delite aplikacijo z drugimi",
            "Vam je MueTube pomagal? Pustite oceno in pisno oceno zanjo v Trgovini Play",
            "Imate ideje, izboljšave ali predloge? Stopite v stik in mi pošljite povratne informacije",
            "Ljubite MueTube? Pojdi in se zahvali vsem, ki so ti povedali o aplikaciji",
            "Imate težave? Znova namestite aplikacijo ali se za pomoč obrnite na mene",
            "Uživate v MueTubeu? Jaz tudi"],
    
            ["Dashuroj Muziken? Ndani aplikacionin me të tjerët",
            "A ju ka ndihmuar MueTube? Lini një vlerësim dhe vlerësim të shkruar për të në Play Store",
            "Keni ide, përmirësime apo sugjerime? Merrni kontakt dhe më jepni komente",
            "Të pëlqen MueTube? Shkoni dhe falënderoni këdo që ju tha për aplikacionin",
            "Përjetoni çështje? Rinstalo aplikacionin ose më kontakto për ndihmë",
            "Të pëlqen MueTube? Edhe une"],
    
            ["Волим музику? Поделите апликацију са другима",
            "Да ли вам је МуеТубе помогао? Оставите оцену и писану рецензију за то на Плаи продавници",
            "Имате идеје, побољшања или предлоге? Ступите у контакт и дајте ми повратне информације",
            "Волите МуеТубе? Идите и захвалите се ономе ко вам је рекао о апликацији",
            "Имате проблема? Поново инсталирајте апликацију или ме контактирајте за помоћ",
            "Уживате ли у МуеТубеу? И ја исто"],
    
            ["Älska musik? Dela appen med andra",
            "Har MueTube hjälpt dig? Lämna ett betyg och en skriftlig recension för det i Play Store",
            "Har du idéer, förbättringar eller förslag? Kontakta mig och ge mig feedback",
            "Älskar du MueTube? Gå och tacka den som berättade om appen",
            "Har du problem? Installera om appen eller kontakta mig för hjälp",
            "Gillar du MueTube? Jag också"],
    
            ["Upenda muziki? Shiriki programu na wengine",
            "Je! MueTube imekusaidia? Acha ukadiriaji na hakiki iliyoandikwa kwa hiyo kwenye Duka la Google Play",
            "Una maoni, maboresho au mapendekezo? Wasiliana na unipe maoni",
            "Upendo MueTube? Nenda na umshukuru yeyote aliyekuambia juu ya programu hiyo",
            "Unapata shida? Sakinisha tena programu au wasiliana nami kwa usaidizi",
            "Je! Unafurahiya MueTube? Mimi pia"],
    
            ["సంగీతమంటే ఇష్టం? అనువర్తనాన్ని ఇతరులతో పంచుకోండి",
            "MueTube మీకు సహాయం చేసిందా? రేటింగ్ మరియు వ్రాతపూర్వక సమీక్షను ప్లే స్టోర్‌లో ఉంచండి",
            "ఆలోచనలు, మెరుగుదలలు లేదా సూచనలు ఉన్నాయా? సన్నిహితంగా ఉండండి మరియు నాకు అభిప్రాయాన్ని ఇవ్వండి",
            "MueTube ను ప్రేమిస్తున్నారా? అనువర్తనం గురించి మీకు ఎవరు చెప్పినా వెళ్లి ధన్యవాదాలు",
            "సమస్యలను ఎదుర్కొంటున్నారా? అనువర్తనాన్ని మళ్లీ ఇన్‌స్టాల్ చేయండి లేదా సహాయం కోసం నన్ను సంప్రదించండి",
            "MueTube ను ఆస్వాదిస్తున్నారా? నేను కూడా"],
    
            ["เพลงรัก? แชร์แอปกับผู้อื่น",
            "MueTube ช่วยคุณได้หรือไม่? ให้คะแนนและเขียนรีวิวไว้ใน Play Store",
            "มีความคิดการปรับปรุงหรือข้อเสนอแนะ? ติดต่อและให้ข้อเสนอแนะ",
            "รัก MueTube? ไปขอบคุณใครก็ตามที่บอกคุณเกี่ยวกับแอปนี้",
            "ประสบปัญหา? ติดตั้งแอปอีกครั้งหรือติดต่อฉันเพื่อขอความช่วยเหลือ",
            "เพลิดเพลินกับ MueTube? ฉันด้วย"],
    
            ["Müziği sevmek? Uygulamayı başkalarıyla paylaşın",
            "MueTube size yardımcı oldu mu? Play Store'da bunun için bir derecelendirme ve yazılı inceleme bırakın",
            "Fikirleriniz, iyileştirmeleriniz veya önerileriniz mi var? İletişime geçin ve bana geri bildirimde bulunun",
            "MueTube'u seviyor musunuz? Git ve sana uygulamadan bahsedenlere teşekkür et",
            "Sorun mu yaşıyorsunuz? Uygulamayı yeniden yükleyin veya yardım için benimle iletişime geçin",
            "MueTube'u beğendiniz mi? Ben de"],
    
            ["Любите музику? Поділіться програмою з іншими",
            "MueTube вам допоміг? Залиште рейтинг та письмовий відгук про нього в магазині Play",
            "Є ідеї, вдосконалення чи пропозиції? Зв’яжіться та надішліть мені відгук",
            "Любите MueTube? Ідіть і подякуйте тому, хто розповів вам про додаток",
            "Виникають проблеми? Переінсталюйте програму або зв’яжіться зі мною за допомогою",
            "Вам подобається MueTube? Я також"],
    
            ["Musiqani yaxshi ko'rasizmi? Ilovani boshqalar bilan baham ko'ring",
            "MueTube sizga yordam berdimi? Buning uchun Play Store-da reyting va yozma sharh qoldiring",
            "Fikrlar, yaxshilanishlar yoki takliflar bormi? Aloqa qiling va menga fikr bildiring",
            "MueTube-ni yaxshi ko'rasizmi? Boring va sizga dastur haqida kim aytgan bo'lsa, unga minnatdorchilik bildiring",
            "Muammolarni boshdan kechirayapsizmi? Ilovani qayta o'rnating yoki yordam uchun men bilan bog'laning",
            "MueTube-dan zavqlanyapsizmi? Men ham"],
    
            ["Yêu âm nhạc? Chia sẻ ứng dụng với những người khác",
            "MueTube đã giúp bạn chưa? Để lại xếp hạng và đánh giá bằng văn bản cho nó trên Cửa hàng Play",
            "Có ý tưởng, cải tiến hoặc đề xuất? Liên hệ và cung cấp cho tôi phản hồi",
            "Bạn yêu thích MueTube? Đi và cảm ơn bất cứ ai đã nói với bạn về ứng dụng",
            "Bạn đang gặp sự cố? Cài đặt lại ứng dụng hoặc liên hệ với tôi để được trợ giúp",
            "Bạn thích MueTube? Tôi cũng vậy"],
    
            ["爱音乐？ 与他人共享应用",
            "MueTube对您有帮助吗？ 在Play商店中为其留下评分和书面评论",
            "有想法，改进或建议吗？ 保持联系并给我反馈",
            "喜欢MueTube？ 去感谢任何告诉你有关该应用程序的人",
            "遇到问题了吗？ 重新安装该应用程序或与我联系以获取帮助",
            "喜欢MueTube吗？ 我也是"]
    
        ];

        if(indexOfLanguage==-1){
            messages.push("Love music? Share the app with others");
            messages.push("Has MueTube helped you? Leave a rating and written review for it on the Play Store");
            messages.push("Got ideas, improvements or suggestions? Get in touch and give me feedback");
            messages.push("Loving MueTube? Go and thank whoever told you about the app");
            messages.push("Experiencing issues? Reinstall the app or contact me for help");
            messages.push("Enjoying MueTube? Me too");
        }
        else{
            all[indexOfLanguage].forEach(element => messages.push(element));
        }

        createClass('.updatebutton',"display:none");
    }
    else{


        all = [
            
            ["هذا الإصدار من التطبيق غير مدعوم الآن وسيتوقف عن العمل قريبًا"],

            ["Tətbiqin bu versiyası indi dəstəklənmir və tezliklə işini dayandıracaq"],

            ["Тази версия на приложението вече не се поддържа и скоро ще спре да работи"],

            ["অ্যাপ্লিকেশনটির এই সংস্করণটি এখন অসমর্থিত এবং শীঘ্রই কাজ করা বন্ধ করবে"],

            ["Ova verzija aplikacije sada nije podržana i uskoro će prestati raditi"],

            ["Aquesta versió de l'aplicació ara no és compatible i aviat deixarà de funcionar"],

            ["Tato verze aplikace nyní není podporována a brzy přestane fungovat"],

            ["Denne version af appen understøttes nu og stopper snart med at fungere"],

            ["Diese Version der App wird jetzt nicht mehr unterstützt und funktioniert bald nicht mehr"],

            ["Αυτή η έκδοση της εφαρμογής δεν υποστηρίζεται πλέον και σύντομα θα σταματήσει να λειτουργεί"],

            ["Esta versión de la aplicación ahora no es compatible y pronto dejará de funcionar"],

            ["Rakenduse seda versiooni ei toetata ja see lakkab peagi töötamast"],

            ["این نسخه از برنامه اکنون پشتیبانی نمی شود و به زودی دیگر کار نمی کند"],

            ["Tätä sovelluksen versiota ei nyt tueta, ja se lakkaa pian toimimasta"],

            ["Ang bersyon ng app na ito ay hindi suportado ngayon at malapit nang ihinto ang paggana"],

            ["Cette version de l'application n'est plus prise en charge et cessera bientôt de fonctionner"],

            ["ऐप का यह संस्करण अब असमर्थित है और जल्द ही काम करना बंद कर देगा"],

            ["Ova verzija aplikacije sada nije podržana i uskoro će prestati raditi"],

            ["Az alkalmazás ezen verziója már nem támogatott, és hamarosan leáll"],

            ["Versi aplikasi ini sekarang tidak didukung dan akan segera berhenti bekerja"],

            ["Questa versione dell'app ora non è supportata e presto smetterà di funzionare"],

            ["גרסה זו של האפליקציה אינה נתמכת כעת ובקרוב תפסיק לעבוד"],

            ["このバージョンのアプリは現在サポートされておらず、まもなく機能しなくなります"],

            ["აპის ეს ვერსია ახლა აღარ არის მხარდაჭერილი და მალე შეწყვეტს მუშაობას"],

            ["កំណែកម្មវិធីនេះឥឡូវមិនត្រូវបានគាំទ្រទេហើយនឹងឈប់ដំណើរការឆាប់ៗនេះ"],

            ["이 버전의 앱은 현재 지원되지 않으며 곧 작동이 중지됩니다."],

            ["ແອັບ version ເວີຊັນນີ້ບໍ່ໄດ້ຮັບການສະ ໜັບ ສະ ໜູນ ແລະຈະຢຸດການເຮັດວຽກໃນໄວໆນີ້"],

            ["Ši programos versija dabar nepalaikoma ir netrukus nustos veikti"],

            ["Šī lietotnes versija tagad netiek atbalstīta, un drīz tā vairs nedarbosies"],

            ["Оваа верзија на апликацијата сега не е поддржана и наскоро ќе престане да работи"],

            ["Апп-ийн энэ хувилбарыг одоо дэмжихгүй байгаа тул удахгүй ажиллахаа болино"],

            ["अ‍ॅपची ही आवृत्ती आता असमर्थित आहे आणि लवकरच कार्य करणे थांबवेल"],

            ["Versi aplikasi ini kini tidak disokong dan akan segera berhenti berfungsi"],

            ["ဤအက်ပလီကေးရှင်း၏ဗားရှင်းသည်ယခုအခါမထောက်ခံပါ။ မကြာမီအလုပ်လုပ်တော့မည်မဟုတ်ပါ"],

            ["Denne versjonen av appen støttes nå og vil snart slutte å fungere"],

            ["Deze versie van de app wordt nu niet ondersteund en werkt binnenkort niet meer"],

            ["ਐਪ ਦਾ ਇਹ ਸੰਸਕਰਣ ਹੁਣ ਅਸਮਰਥਿਤ ਹੈ ਅਤੇ ਜਲਦੀ ਕੰਮ ਕਰਨਾ ਬੰਦ ਕਰ ਦੇਵੇਗਾ"],

            ["Ta wersja aplikacji nie jest teraz obsługiwana i wkrótce przestanie działać"],

            ["Esta versão do aplicativo agora não é compatível e logo deixará de funcionar"],

            ["Această versiune a aplicației este acum neacceptată și va înceta în curând să funcționeze"],

            ["Эта версия приложения сейчас не поддерживается и скоро перестанет работать."],

            ["Táto verzia aplikácie teraz nie je podporovaná a čoskoro prestane fungovať"],

            ["Ta različica aplikacije zdaj ni podprta in bo kmalu prenehala delovati"],

            ["Ky version i aplikacionit tani nuk mbështetet dhe së shpejti do të ndalet së funksionuari"],

            ["Ова верзија апликације сада није подржана и ускоро ће престати да ради"],

            ["Den här versionen av appen stöds nu och slutar snart fungera"],

            ["Toleo hili la programu sasa haliwezi kutumika na hivi karibuni litaacha kufanya kazi"],

            ["అనువర్తనం యొక్క ఈ సంస్కరణ ఇప్పుడు మద్దతు లేదు మరియు త్వరలో పనిచేయడం ఆగిపోతుంది"],

            ["ขณะนี้แอปเวอร์ชันนี้ไม่ได้รับการสนับสนุนและจะหยุดทำงานในไม่ช้า"],

            ["Uygulamanın bu sürümü şu anda desteklenmiyor ve yakında çalışmayı bırakacak"],

            ["Ця версія програми зараз не підтримується і незабаром перестане працювати"],

            ["Ilovaning ushbu versiyasi endi qo'llab-quvvatlanmaydi va tez orada ishlashni to'xtatadi"],

            ["Phiên bản ứng dụng này hiện không được hỗ trợ và sẽ sớm ngừng hoạt động"],

            ["该应用程序的此版本现已不受支持，并将很快停止工作"]
        ];







        var updateText = [
            ["تحديث"],

            ["Yeniləyin"],

            ["Актуализиране"],

            ["হালনাগাদ"],

            ["Ažuriraj"],

            ["Actualització"],

            ["Aktualizace"],

            ["Opdatering"],

            ["Aktualisieren"],

            ["Εκσυγχρονίζω"],

            ["Actualizar"],

            ["Uuenda"],

            ["به روز رسانی"],

            ["Päivittää"],

            ["Update"],

            ["Mise à jour"],

            ["अपडेट करें"],

            ["Ažuriraj"],

            ["Frissítés"],

            ["Memperbarui"],

            ["Aggiornare"],

            ["עדכון"],

            ["更新"],

            ["განახლება"],

            ["ធ្វើបច្ចុប្បន្នភាព"],

            ["최신 정보"],

            ["ປັບປຸງໃຫ້ທັນ"],

            ["Atnaujinti"],

            ["Atjaunināt"],

            ["Ажурирање"],

            ["Шинэчлэх"],

            ["अद्यतनित करा"],

            ["Kemas kini"],

            ["နောက်ဆုံးသတင်း"],

            ["Oppdater"],

            ["Bijwerken"],

            ["ਅਪਡੇਟ"],

            ["Aktualizacja"],

            ["Atualizar"],

            ["Actualizați"],

            ["Обновить"],

            ["Aktualizácia"],

            ["Nadgradnja"],

            ["Azhurnoni"],

            ["ажурирање"],

            ["Uppdatering"],

            ["Sasisha"],

            ["నవీకరణ"],

            ["อัปเดต"],

            ["Güncelleme"],

            ["Оновлення"],

            ["Yangilash"],

            ["Cập nhật"],

            ["更新资料"]

        ];



        if(indexOfLanguage==-1){
            document.getElementById('updatebutton').innerText = "Update"
        }
        else{
            document.getElementById('updatebutton').innerText = updateText[indexOfLanguage]
        }



        



        if(indexOfLanguage==-1){
            messages.push("This version of the app is now unsupported and will soon stop working");
        }
        else{
            all[indexOfLanguage].forEach(element => messages.push(element));
        }

        createClass('.muetube_icon',"display:none");
        createClass('.updatebutton',"display:inline");
        
        createClass('body',"background-color: rgb(255 124 124)");
        createClass('.thumbnail',"padding-right: 100vh");
        

        createClass('p',"font-size: 15px !important;");
        createClass('p',"font-family: Arial, sans-serif !important;");
    }


    function createClass(name,rules){
        var style = document.createElement('style');
        style.type = 'text/css';
        document.getElementsByTagName('head')[0].appendChild(style);
        if(!(style.sheet||{}).insertRule) 
            (style.styleSheet || style.sheet).addRule(name, rules);
        else
            style.sheet.insertRule(name+"{"+rules+"}",0);
    }
    

    


    //var backupText = document.getElementById('backupText')
    //backupText.innerHTML=messages[0]
    
    

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
        console.log('asdas 5')
        javascript: AndroidAd.hideShimmerShowCustomAd();
    } catch (e) {}
}