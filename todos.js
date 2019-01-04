//TO GET TODAY'S DATE AND ADD TO H1
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 

today = mm + '/' + dd + '/' + yyyy;
$("h1").append(": "+ today);

//CHECK OFF COMPLETED TODOS
// toggles changing text color and strikethrough
$("ul").on("click","li",function(){ //we can only add listeners on elements when code is run the first time and when its run the first time u dont have all lis
$(this).toggleClass("completed");
});

//DELETING TODOS
//if you set a click listener to just span it doesnt work because it would also trigger the li click listener
$("ul").on("click", "span", function(event){
$(this).parent().fadeOut(500,function(){$(this).remove();}); //removes the parent element which is the li
//you put remove inside because otherwise it doesnt wait to fade out. 500 is for 500 ms
event.stopPropagation(); //stops it from triggering li and others its wrapped in
});

//CREATING NEW TODOS
$("input[type='text']").keypress(function(){

if(event.which===13){ //corresponds to character code for enter key which is 13
var todoText = $(this).val(); //grabs input
$(this).val(""); //empty string which resets input box
$("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");//this method makes the new todos
}

});
//use on instead of click cuz click only adds listeners for existing elements while on will add for future ones as well