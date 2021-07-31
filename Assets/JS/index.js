// form validation 
var validateOrder = function(){

    var name = document.getElementById("customerName").value;

    if(name == ""){

        alert("Please enter your name.")
        return false;

    };

    if(name.length < 3){

        alert("Please provide a valid name. \nAtleast 3 characters.")
        return false;

    };

};