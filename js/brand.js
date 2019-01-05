(function(){
    $('.brand-guide-item').click(function(e){
        var $target = $(e.target);
        var val = $target.data('val');
        $('.brand-title').removeClass("com-bg-blue").removeClass("com-white");
        $('#'+val+'BOX').addClass("com-bg-blue").addClass("com-white");
    });
    $('.brand-item').click(function(){
        location.href = "./brandDetail.html"
    });
})();