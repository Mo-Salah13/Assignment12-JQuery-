$(document).ready(function(){
    let sideBarWidth = $('nav').innerWidth();

    $('#sideBar').css('left', -sideBarWidth)
    $('#open i').click(function () {
        if ($('#sideBar').css('left') == '0px') {
            $('#sideBar').animate({ left: -sideBarWidth }, 500)
        }
        else {
            $('#sideBar').animate({ left: '0px' }, 500)
        }
    
    })
    
    // *5ass be scroll behavior 
    $('.nav-link').on('click', function (eventInfo) {
        let elHref = $(eventInfo.target).attr('href');
        let offset = $(elHref).offset().top;
        $('body,html').animate({ scrollTop: offset }, { duration: 800, queue: false, })
    })
    
    let daysItem = document.querySelector("#days");
    let hoursItem = document.querySelector("#hours");
    let minItem = document.querySelector("#min");
    let secItem = document.querySelector("#sec");
    
    // function to countdown
    let countDown = () => {
        let futureDate = new Date("13 Mar 2025");
        let currentDate = new Date();
        let myDate = futureDate - currentDate;
        let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
        let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
        let min = Math.floor(myDate / 1000 / 60) % 60;
        let sec = Math.floor(myDate / 1000) % 60;
    
        daysItem.innerHTML = days;
        hoursItem.innerHTML = hours;
        minItem.innerHTML = min;
        secItem.innerHTML = sec;
    
    }
    countDown()
    setInterval(countDown, 1000)
    // *5aas be 
    $("#textarea").keyup(function () {
        $("#count").text((100 - $(this).val().length));
    });
    

    $(".Collapse-1").on("click" ,function () {
        $(".content-1").slideToggle()
        $(".content-2").slideUp()
        $(".content-3").slideUp()
        $(".content-4").slideUp()
    })
    $(".Collapse-2").on("click" ,function () {
        $(".content-2").slideToggle()
        $(".content-1").slideUp()
        $(".content-3").slideUp()
        $(".content-4").slideUp()
    })
    $(".Collapse-3").on("click" ,function () {
        $(".content-3").slideToggle()
        $(".content-1").slideUp()
        $(".content-2").slideUp()
        $(".content-4").slideUp()
    })
    $(".Collapse-4").on("click" ,function () {
        $(".content-4").slideToggle()
        $(".content-1").slideUp()
        $(".content-2").slideUp()
        $(".content-3").slideUp()
    })



})

