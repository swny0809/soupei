(function(){
    $(".vin-search").click(function(){
        location.href = "./type.html"
    });
    $(".query-list-item").click(function(){
        location.href = "./type.html"
    });
    $(".vin-input input").on("input", function(e){
        var val = $(e.target).val();
        if(val !== '') {
            $(".vin-input-more").removeClass("hidden");
        }
    })
    $(".vin-body").click(function(){
        $(".vin-input-more").addClass("hidden");
    });
    $(".vin-input-more-item").click(function(e){
        var text = $(e.target).html();
        $(".vin-input input").val(text);
        $(".vin-input-more").addClass("hidden");
    });
    
})()