$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>20){
            $('.navbar').addClass("sticky")
        }
        else{
            $('.navbar').removeClass("sticky")
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show")
        }
        else {
            $('.scroll-up-btn').removeClass("show")
        }
    });
    // slide-up-script nhan vao cai mui ten di len no se di chuyen len dau trnag
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop : 0});
    });


    // toggle menu/navbar dịch chuyển nav trên mobile
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // các chữ trong string sẽ chạy khi thêm class typing vào
    var types=new Typed(".typing",{
        strings:["Student","Developer","Coder","Designer","Freelancer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true,
    })
    var types=new Typed(".typing-2",{
        strings:["Student","Developer","Coder","Designer","Freelancer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true,
    })
    // owl-carousel
    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                nav:false,
            },
            600:{
                items:2,
                nav:false,
            },
            1000:{
                items:3,
                nav:false,
            }
        }
    })
})
