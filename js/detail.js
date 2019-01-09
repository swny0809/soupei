(function(){
    $('.detail-btn').click(function(){
        if ($('.detail-more').hasClass('hidden')) {
            $('.detail-more').removeClass('hidden');
            $('.detail-btn').html('点击这里收起信息')
        } else {
            $('.detail-more').addClass('hidden');
            $('.detail-btn').html('点击这里展开信息');
        }
    });
})()