(function(){
    $('.more').click(function(e){
        var $target = $(e.target);
        if ($target.find('.parts-item-r').hasClass('hidden')) {
            $target.find('.parts-item-r').removeClass('hidden');
            $target.find('.parts-item-d').addClass('hidden');
            $target.siblings().addClass('hidden');
        } else {
            $target.find('.parts-item-r').addClass('hidden');
            $target.find('.parts-item-d').removeClass('hidden');
            $target.siblings().removeClass('hidden'); 
        }
    });
    $('.goList').click(function(){
        location.href = "./list.html";
    });
})();