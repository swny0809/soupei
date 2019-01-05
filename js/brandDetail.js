(function(){
    $('.bd-item-title').click(function(e){
        var $target = $(e.target);
        $('.bd-item-child').addClass('hidden');
        $target.siblings().removeClass('hidden');
    });
    $('.bd-child-item').click(function(){
        location.href = "./type.html"
    });
})();