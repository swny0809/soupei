(function () {
    $('.index-icon-btn').click(function (e) {
        var $target = $(e.target);
        var val = $target.data('val');
        if (val == '0') {
            $target.data('val', '1');
            $target.html('收起');
            $('.index-icon-list-box').addClass('index-h-auto');
        } else {
            $target.data('val', '0');
            $target.html('查看所有热门品牌');
            $('.index-icon-list-box').removeClass('index-h-auto');
        }
    });
    $('#goBrand').click(function(){
        location.href = "./brand.html"
    });
    $('.index-icon-item').click(function(){
        location.href = "./brandDetail.html"
    });
    $('#goVin').click(function(){
        location.href = "./vin.html"
    });
    $('#goQuery').click(function(){
        location.href = "./query.html"
    });
})();