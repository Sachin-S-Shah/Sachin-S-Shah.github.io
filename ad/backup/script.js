if (document.readyState === "complete") {
    doWork();
}
else{
    window.addEventListener('load', function() {
        doWork();
    })
}

function doWork(){
    //addOnClickToBody()

    setTimeout(function () {
        popupateMessages();
    }, 1000);

    setTimeout(function () {
        try {
            javascript: AndroidAd.hideShimmerShowCustomAd();
        } catch (e) {}
    }, 1500);

    setTimeout(function () {
        try {
            javascript: AndroidAd.loadNormalAd();
        } catch (e) {}
    }, 24000);
}

function openAdUrl(){
    try {
        javascript: AndroidAd.openLinkInBrowser('https://www.5ach.in/muetube');
    } catch (e) {}
}

function addOnClickToBody(){
    document.getElementsByTagName('body')[0].setAttribute('onclick', 'openAdUrl();');
}

var userIso3countryCode = "";
var userIso3LanguageCode = "";

function popupateMessages(){
    var messages = [];

    if(userIso3LanguageCode.toLowerCase()=='eng'){
        messages.push("If MueTube has helped you, please help me take it to the next level by sharing it with others. Thanks :)");
        messages.push("If MueTube has helped you, please help me take it to the next level by sharing it with others. Thanks :)");
    }
    else if(userIso3LanguageCode.toLowerCase()=='spa'){
        messages.push("Si MueTube te ha ayudado, ayúdame a llevarlo al siguiente nivel compartiéndolo con otros. Gracias :)");
        messages.push("Si MueTube te ha ayudado, ayúdame a llevarlo al siguiente nivel compartiéndolo con otros. Gracias :)");
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