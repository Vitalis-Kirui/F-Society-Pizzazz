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

        alert("Select the type of pizza(s) you want to proceed!")
        return false;

    };

    // sizes of pizza validation

    if(orders.sizes.value == 0){

        alert("Select the size of pizza(s) you want to proceed!")
        return false;

    };

    //crust selection validation

    if(orders.crusts.value == 0){

        alert("Select the type of crust on your pizza(s) you want to proceed!")
        return false;

    };

    //toppings select validation

    if(orders.toppings.value == 0){

        alert("Select the type of toppings on your pizza(s) you want to proceed!")
        return false;

    };

    // Quantity validation

    var numberOfPizza = document.getElementById("quantity").value;

    if(numberOfPizza == ""){

        alert("Please enter the number of pizza(s) you want.")
        return false;

    };

    if(numberOfPizza < 1){

        alert("Please provide a valid amount of pizza(s) you want. \nAtleast one pizza.")
        return false;

    };

    // Location validation

    var deliveryLocation = document.getElementById("location").value;

    if(deliveryLocation == ""){

        alert("Provide the location. \nThis is where your pizza(s) will be delivered to.")
        return false;

    };

    if(deliveryLocation.length < 5){

        alert("Provide a valid name! \nAtleast 5 characters to make it easy for deliveries.")
        return false;

    };

};