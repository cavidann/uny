/*
=====================================================
                    =    main scripts starts   =
=====================================================
*/
$(document).ready(function(){
    var subForm='<form action="">'
                    +'<div class="form-group">'
                    +    '<input class="form-control main-comment" type="text" pattern="[A-Za-z]{3}" />'
                    +'</div>'
                    +'<button class="btn btn-primary send-main-comment" type="button">'
                    +    'send'
                    +'</button>'
                +'</form><div class="clearfix"></div>'

    $( ".send-main-comment" ).click(function() {
        if($.trim($(this).parent().find(".main-comment").val()) ){
            $(this).parents('.comments').children('.main').append( "<p>"+$(this).parent().find(".main-comment").val()   +"</p>" );
            $(".main-comment").val('');
        }
    });


    // $( ".send-sub-comment" ).click(function() {
    //     if($.trim($(".sub-comment").val()) ){
    //         $(this).parents('.main').children('.sub').append( "<p>"+$(this).parent().find(".sub-comment").val()+"</p>" );
    //         $(".sub-comment").val('');
    //     }
    // });
});