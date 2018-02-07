/*--------------firstSlider(header)--------------------*/
$('.infoBlockHeadSlider').slick({
    dots: true
});

/*--------------------catalogWindow Slider--------------------------------*/
$('.sliderCatalogWin').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
});

/*-------------------boxSlidePopProd---------------------------------*/
$('.boxSlidePopProd').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
});
/*---------------------------timer-----------------------------------*/
function timerAction(year,month,day) {
    setInterval(function() {
        var dayTimer = document.getElementById('days'),
            hoursTimer = document.getElementById('hours'),
            minutesTimer = document.getElementById('minutes'),
            secTimer = document.getElementById('seconds'),
            dateNow = new Date().getTime(),
            dateFinish = new Date(year,month,day),
            sec = Math.floor((dateFinish - dateNow) / 1000),

            secToMinutes = sec % 86400,

            dayNumber = Math.floor(sec / 86400),
            hoursNumber = Math.floor(secToMinutes / 3600),
            minutesNumber = Math.floor(secToMinutes / 1440),
            secondsNumber = secToMinutes % 60;

        dayTimer.innerHTML = dayNumber;
        hoursTimer.innerHTML = hoursNumber;
        minutesTimer.innerHTML = minutesNumber;
        secTimer.innerHTML = secondsNumber;

    },1000)
}

timerAction(2018, 01, 18);

/*----------------------progressLineTest------------------------------*/

document.getElementById('progressLine').oninput = scrollingBox;

function scrollingBox(){
    var div = document.getElementById('polosaVideo');

    console.log(this.value);
    div.style.right = this.value + 'px';


}
/*--------------------------------------------------------------*/