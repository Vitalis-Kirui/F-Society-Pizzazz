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

// JQuery code for input collection

$(document).ready(function(){

    $("form").submit(function(event){

        event.preventDefault();

        var name = $("input#customerName").val();

        var selectedType = $("#types option:selected").val();

        var selectedSize = $("#sizes option:selected").val();

        var selectedCrust = $("#crusts option:selected").val();

        var selectedTopping = $("#toppings option:selected").val();

        var amount = parseInt($("input#quantity").val());

    });

});

// constractor and prototyping

var Order = function(name, type, size, crust, topping, quantity){

    this.name = name;
    this.type = type;
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.quantity = quantity;

};

//Crust pricing

Order.prototype.crustPrice = function(){

    if(this.crust == 1){
        return 100;
    };

    if(this.crust == 2){
        return 150;
    };

    if(this.crust == 3){
        return 250;
    };

};

//Toppings pricing

Order.prototype.toppingPrice = function(){

    if(this.topping == 1){
        return 200;
    };

    if(this.topping == 2){
        return 250;
    };

    if(this.topping == 3){
        return 300;
    };

    if(this.topping == 4){
        return 350;
    };

};

//Pizza sizes pricing basing on type selected

Order.prototype.pizzaPrice = function(){

    //Cheese pizza
    if(this.type == 1){

        if(this.size == 1){
            return 500;
        };

        if(this.size == 2){
            return 1000;
        };

        if(this.size == 3){
            return 1500;
        };

    };

    //Veggie pizza
    if(this.type == 2){

        if(this.size == 1){
            return 750;
        };

        if(this.size == 2){
            return 1200;
        };

        if(this.size == 3){
            return 1200;
        };

    };

    //Pepperoni pizza
    if(this.type == 3){

        if(this.size == 1){
            return 900;
        };

        if(this.size == 2){
            return 1400;
        };

        if(this.size == 3){
            return 2300;
        };

    };

};