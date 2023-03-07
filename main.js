//built js function
function reverse(arg) {
    return arg.split("").reverse().join("");
}

//make some other thingys that reverse some strings
function reverseV2(something){
    //something here
}

$(document).ready(function() {
   $("#clear").click(function(event){
    $("#results").empty();
    //$("#talky").empty();
    $('#talky').val('');
    event.preventDefault();
   })
})
$(document).ready(function() {
    $("#reverse").submit(function(event){
        $("#results").empty();
        let entry = $("input#talky").val();
        $("#results").append(reverse(entry));

        event.preventDefault();
    })
})