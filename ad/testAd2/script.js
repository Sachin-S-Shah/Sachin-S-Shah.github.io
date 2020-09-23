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
    }, 60000);
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
        
         try {
             javascript: AndroidAd.setTheHeight(88);
         } catch (e) {}
    }, 500);

    var messages = [];

    if(userIso3LanguageCode.toLowerCase()=='spa'){
        messages.push("Gracias por usar MueTube :)");
        messages.push("Comparte la aplicación con otras personas");
    }
    else if(userIso3LanguageCode.toLowerCase()=='por'){
        messages.push("Obrigado por usar o MueTube :)");
        messages.push("Compartilhe o aplicativo com outras pessoas");
    }
    else if(userIso3LanguageCode.toLowerCase()=='fre' || userIso3LanguageCode.toLowerCase()=='fra'){
        messages.push("Merci d'utiliser MueTube :)");
        messages.push("Veuillez partager l'application avec d'autres");
    }
    else if(userIso3LanguageCode.toLowerCase()=='ara'){
        messages.push("شكرًا لاستخدام MueTube :)");
        messages.push("يرجى مشاركة التطبيق مع الآخرين");
    }
    else if(userIso3LanguageCode.toLowerCase()=='rum' || userIso3LanguageCode.toLowerCase()=='ron'){
        messages.push("Vă mulțumim că ați folosit MueTube :)");
        messages.push("Vă rugăm să partajați aplicația cu alții");
    }
    else if(userIso3LanguageCode.toLowerCase()=='ger' || userIso3LanguageCode.toLowerCase()=='deu'){
        messages.push("Danke, dass du MueTube benutzt :)");
        messages.push("Bitte teilen Sie die App mit anderen");
    }
    else if(userIso3LanguageCode.toLowerCase()=='tha'){
        messages.push("ขอบคุณที่ใช้ MueTube :)");
        messages.push("โปรดแชร์แอปกับผู้อื่น");
    }
    else if(userIso3LanguageCode.toLowerCase()=='may' || userIso3LanguageCode.toLowerCase()=='msa'){
        messages.push("Terima kasih kerana menggunakan MueTube :)");
        messages.push("Sila kongsi aplikasinya dengan orang lain");
    }
    else if(userIso3LanguageCode.toLowerCase()=='hin'){
        messages.push("MueTube का उपयोग करने के लिए धन्यवाद :)");
        messages.push("कृपया एप्लिकेशन को अन्य लोगों के साथ साझा करें");
    }
    else if(userIso3LanguageCode.toLowerCase()=='rus'){
        messages.push("Спасибо за использование MueTube :)");
        messages.push("Пожалуйста, поделитесь приложением с другими");
    }
    else if(userIso3LanguageCode.toLowerCase()=='chi' || userIso3LanguageCode.toLowerCase()=='zho'){
        messages.push("感谢您使用MueTube :)");
        messages.push("请与他人分享该应用");
    }
    else if(userIso3LanguageCode.toLowerCase()=='swa'){
        messages.push("Asante kwa kutumia MueTube :)");
        messages.push("Tafadhali shiriki programu na wengine");
    }
    else {
        messages.push("Thanks for using MueTube :)");
        messages.push("Please share the app with others");
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