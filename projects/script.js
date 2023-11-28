document.addEventListener("DOMContentLoaded", function () {
    const description = document.getElementById("description");
    const trigger = document.getElementById("modal_trigger");
    const appName = document.getElementById("appname");
    const logoimage = document.getElementById("logoimage");
    const imageMockUp01 = document.getElementById("imageMockUp01");
    const imageMockUp02 = document.getElementById("imageMockUp02");
    const imageMockUp03 = document.getElementById("imageMockUp03");
    const imageMockUp04 = document.getElementById("imageMockUp04");
    const imageMockUp05 = document.getElementById("imageMockUp05");
    const imageMockUp06 = document.getElementById("imageMockUp06");
    const imageMockUp07 = document.getElementById("imageMockUp07");
    const imageMockUp08 = document.getElementById("imageMockUp08");
    const imageMockUp09 = document.getElementById("imageMockUp09");
    const mainmockup = document.getElementById("mainmockup");
    function parseURLParams(url) {
        var queryParams = {};
        var params = url.slice(url.indexOf('?') + 1).split('&');
        for (var i = 0; i < params.length; i++) {
            var param = params[i].split('=');
            var key = decodeURIComponent(param[0]);
            var value = decodeURIComponent(param[1]);
            queryParams[key] = value;
        }
        console.log(queryParams);
        return queryParams;
    }
    var currentUrl = window.location.href;
    var params = parseURLParams(currentUrl);
    console.log(params);
    var paramValue = params['name'];
    console.log(params);
    if (paramValue == "travi") {
        appName.textContent = "Travi";
        description.textContent = "Travilt is an app to manage tripsFirst of all you need to creat an account to use this app..after that you will select the activity do you likeSo we can show you trips for youAnd then you will see a home screen contains three category offers mean the trip which has an offer for a period of timeAnd the second category is recommened for you in this section We will display trips compatible with your activities...And the third category is most popularThis section contains the trips that has the highest ratingsAnd there is a searchAnd trip overview screenThis screen will show you description for the trip and more images and what will happen in this trip... the activities which the trip contain and the Weather information at the place of the flightHow many people will be in the journeyAnd what the type of this journeyls it for families or for youngs and so oneAlso it is has a rating and review from another usersAnd what the areas we will visit in this trip in addition to map that shows us the place you are visiting on the mapAlso there is an Weekly and daily schedule of what you will do on this triplf you use this app and your internet connection destroyed donot worryWe will show you games to play while your internet connection will be restoredAlso there is a profile section which containes your ended trip so you can give us a report if the trip wasnot beautiful for you ..And your next trip screen showsThe trip that you are registered with itAnd your informationAnd your current tripWell that's enoughHave a nice trip";
        mainmockup.src = "assets/images/mockup1.png";
        imageMockUp01.src = "assets/images/travmockip00.jpg";
        imageMockUp02.src = "assets/images/travmockip01.jpg";
        imageMockUp03.src = "assets/images/travmockip02.jpg";
        imageMockUp04.src = "assets/images/travmockip03.jpg";
        imageMockUp05.src = "assets/images/travmockip04.jpg";
        imageMockUp06.src = "assets/images/travmockip05.jpg";
        imageMockUp07.src = "assets/images/travmockip06.jpg";
        imageMockUp08.src = "assets/images/travmockip07.jpg";
        imageMockUp09.src = "assets/images/travmockip08.jpg";
        trigger.href = "https://play.google.com/store/apps/details?id=com.ahmadalfrehan.travi";
        logoimage.src = "https://ahmadalfrehan.com/assets/assets/images/travi-logo.png";

    } else if (paramValue == "hewaiti") {
        appName.textContent = "hewaiti";
        trigger.href = "https://play.google.com/store/apps/details?id=com.ahmadalfrehan.hewaiti";
        logoimage.src = "https://ahmadalfrehan.com/assets/assets/images/hew-logo.png";
        mainmockup.src = "assets/images/mockup.png";
        imageMockUp01.src = "assets/images/imghewaiti01.png";
        imageMockUp02.src = "assets/images/imghewaiti02.png";
        imageMockUp03.src = "assets/images/imghewaiti03.png";

        var appBanners = document.getElementsByClassName('col-lg-5');
        console.log(appBanners);
        for (var i = 0; i < appBanners.length; i++) {
            appBanners[i].style.display = 'none';
        }
        description.textContent = "Hewaiti is an exciting competition app designed for students to showcase their skills and connect with other students. Whether you're a student looking to compete or a visitor wanting to explore the talent on display, Hewaiti has something for everyone. To get started, simply register by choosing whether you're a student or a visitor. If you're a student, you'll need to enter your school name, school class, phone number, and up to 3 skills to your profile. Visitors can simply enter their name and email. You can also upload a profile picture to complete your registration. Once you're registered, you can browse other student profiles and rate them based on their skills. The app categorizes students based on their skills, so you can easily find the students with the skills you're interested in. If you're a visitor, you can rate other students' skills but cannot add skills to your own profile. Hewaiti is also integrated with popular social media platforms such as Google, Facebook, and Twitter, so you can register with your existing accounts. Join the competition and connect with other students on Hewaiti today!";
    }
    else if (paramValue == "github") {
        // image.src = "image245.jpg";
        description.textContent = "This is information for ID 245.";
    }
    else {
        var appBanners = document.getElementsByClassName('col-lg-5');
        console.log(appBanners);
        for (var i = 0; i < appBanners.length; i++) {
            appBanners[i].style.display = 'none';
        }
        // image.src = baseurl + "assets/assets/images/logo.jpg";
        description.textContent = "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    }
});