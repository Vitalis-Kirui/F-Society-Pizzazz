// form validation 
var validateOrder = function(){

    var name = document.getElementById("customerName").value;

    // name validation

    if(name == ""){

        alert("Please enter your name.")
        return false;

    };

    if(name.length < 3){

        alert("Please provide a valid name. \nAtleast 3 characters.")
        return false;

    };

    // type of pizza validation

    if(orders.types.value == 0){

        alert("Select the type of pizza you want to proceed!")
        return false;

    };

    // sizes of pizza validation

    if(orders.sizes.value == 0){

        alert("Select the size of pizza you want to proceed!")
        return false;

    };

};