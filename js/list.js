(function(){
    $('.showDetail').click(function(){
        // $('.list-cover').removeClass("hidden");
        // $('.list-detail-box').removeClass("hidden");
        location.href = "./detailList.html";
    });
    $('.showOE').click(function(){
        $('.list-cover').removeClass("hidden");
        $('.list-oe-box').removeClass("hidden");
    });
    $('.list-close').click(function(){
        $('.list-cover').addClass("hidden");
        $('.list-oe-box').addClass("hidden");
        $('.list-detail-box').addClass("hidden");
    });
    $('.list-cover').click(function(){
        $('.list-cover').addClass("hidden");
        $('.list-oe-box').addClass("hidden");
        $('.list-detail-box').addClass("hidden");
    });
})()