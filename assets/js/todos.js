//check off specific todos by clicking
$("ul").on("click", "li" , function(){
    $(this).toggleClass("completed")
});

//delete specific todo on clicking the x button
$("ul").on("click", "span" , function(event){
    $(this).parent().fadeOut(500 , function(){
        $(this).remove();
    });
    event.stopPropagation();
});
//add new element that has been given as input in the textField
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ todoText + "</li>")
    }
});
$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});