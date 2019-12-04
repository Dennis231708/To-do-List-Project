//check off todo by click
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});
//remove functionality
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //getting new Todo
        var newTodo = $(this).val();
        $(this).val("");
        //add new li and add to ul
        $("ul").append("<li><span><i class='material-icons '>delete</i></span> "+ newTodo + "</li>")
    }
}); 

$('.md-36').click(function(){
    $("input[type='text']").fadeToggle()
});