// form validation 
var validateOrder = function () {

    var name = document.getElementById("customerName").value;

    // name validation

    if (name == "") {

        alert("Please enter your name.")
        return false;
    };

    if (name.length < 3) {

        alert("Please provide a valid name. \nAtleast 3 characters.")
        return false;
    };

    // type of pizza validation

    if (orders.types.value == 0) {

        alert("Select the type of pizza(s) you want to proceed!")
        return false;
    };

    // sizes of pizza validation

    if (orders.sizes.value == 0) {

        alert("Select the size of pizza(s) you want to proceed!")
        return false;
    };

    //crust selection validation

    if (orders.crusts.value == 0) {

        alert("Select the type of crust on your pizza(s) you want to proceed!")
        return false;
    };

    //toppings select validation

    if (orders.toppings.value == 0) {

        alert("Select the type of toppings on your pizza(s) you want to proceed!")
        return false;
    };

    // Quantity validation

    var numberOfPizza = document.getElementById("quantity").value;

    if (numberOfPizza == "") {

        alert("Please enter the number of pizza(s) you want.")
        return false;
    };

    if (numberOfPizza < 1) {

        alert("Please provide a valid amount of pizza(s) you want. \nAtleast one pizza.")
        return false;
    };

    //Radio buttons validation
    var radioYes = document.getElementById("yes").checked;

    var radioNo = document.getElementById("no").checked;

    if (radioYes == false && radioNo == false) {

        alert("Say if you want your pizza(s) delivered to you or you are picking them yourself!")
        return false;

    };

    if ((radioYes == true && radioNo == false)) {


        // Location validation

        var deliveryLocation = document.getElementById("location").value;

        if (deliveryLocation == "") {

            alert("Provide the location. \nThis is where your pizza(s) will be delivered to.")
            return false;
        };

        if (deliveryLocation.length < 5) {

            alert("Provide a valid location! \nAtleast 5 characters to make it easy for deliveries.")
            return false;
        };

        $(document).ready(function(){

            $(".place").click(function(){

                $(".displayScreen2").show();
                $(".displayScreen1").hide();

            });

        });
    };

    if((radioYes == false && radioNo == true)){

        $(document).ready(function(){

            $(".place").click(function(){

                $(".displayScreen1").show();
                $(".displayScreen2").hide();

            });

        });

    };

};

// constractor and prototyping

var Order = function (name, type, size, crust, topping, quantity) {

    this.name = name;
    this.type = type;
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.quantity = quantity;
};

//Crust pricing

Order.prototype.crustPrice = function () {

    if (this.crust == 1) {
        return 100;
    };

    if (this.crust == 2) {
        return 150;
    };

    if (this.crust == 3) {
        return 250;
    };
};

//Toppings pricing

Order.prototype.toppingPrice = function () {

    if (this.topping == 1) {
        return 200;
    };

    if (this.topping == 2) {
        return 250;
    };

    if (this.topping == 3) {
        return 300;
    };

    if (this.topping == 4) {
        return 350;
    };
};

//Pizza sizes pricing basing on type selected

Order.prototype.pizzaPrice = function () {

    //Cheese pizza
    if (this.type == 1) {

        if (this.size == 1) {
            return 500;
        };

        if (this.size == 2) {
            return 1000;
        };

        if (this.size == 3) {
            return 1500;
        };
    };

    //Veggie pizza
    if (this.type == 2) {

        if (this.size == 1) {
            return 750;
        };

        if (this.size == 2) {
            return 1200;
        };

        if (this.size == 3) {
            return 2000;
        };
    };

    //Pepperoni pizza
    if (this.type == 3) {

        if (this.size == 1) {
            return 900;
        };

        if (this.size == 2) {
            return 1400;
        };

        if (this.size == 3) {
            return 2300;
        };
    };

    //Meat pizza
    if (this.type == 4) {

        if (this.size == 1) {
            return 600;
        };

        if (this.size == 2) {
            return 900;
        };

        if (this.size == 3) {
            return 1400;
        };
    };

    //Buffalo pizza
    if (this.type == 5) {

        if (this.size == 1) {
            return 1200;
        };

        if (this.size == 2) {
            return 1700;
        };

        if (this.size == 3) {
            return 3000;
        };
    };

    //Hawaiian pizza
    if (this.type == 6) {

        if (this.size == 1) {
            return 450;
        };

        if (this.size == 2) {
            return 900;
        };

        if (this.size == 3) {
            return 1200;
        };

    };
};

// Creating new object using prototype

$(document).ready(function () {

    $("form").submit(function (event) {

        event.preventDefault();

        var name = $("input#customerName").val();

        var selectedType = parseInt($("#types option:selected").val());

        var selectedSize = parseInt($("#sizes option:selected").val());

        var selectedCrust = parseInt($("#crusts option:selected").val());

        var selectedTopping = parseInt($("#toppings option:selected").val());

        var amount = parseInt($("input#quantity").val());

        // creating a new object

        var newCustomer = new Order(name, selectedType, selectedSize, selectedCrust, selectedTopping, amount);

        // calculating the cost

        var payableAmount = (newCustomer.pizzaPrice() + newCustomer.crustPrice() + newCustomer.toppingPrice()) * amount;

        $("#orderingName").text($("input#customerName").val());
        $("#appendingName").text($('#types option:selected').text());
        $("#appendingSize").text($('#sizes option:selected').text());
        $("#appendingCrust").text($('#crusts option:selected').text());
        $("#appendingTopping").text($('#toppings option:selected').text());
        $("#appendingQuantity").text($("input#quantity").val());
        $("#appendingTotalCost").text(payableAmount);

        $("#confirmOrder").click(function () {

            alert("You order was SUCCESSFULLY placed. \nYou will be served in a moment.\nThanks for choosing us.")

        });

        var payableAmount = (newCustomer.pizzaPrice() + newCustomer.crustPrice() + newCustomer.toppingPrice()) * amount;
 
        var netCost = payableAmount + 250;

        $("#orderingName2").text($("input#customerName").val());
        $("#appendingName2").text($('#types option:selected').text());
        $("#appendingSize2").text($('#sizes option:selected').text());
        $("#appendingCrust2").text($('#crusts option:selected').text());
        $("#appendingTopping2").text($('#toppings option:selected').text());
        $("#appendingQuantity2").text($("input#quantity").val());
        $("#appendingTotalCost2").text(netCost);

        $("#confirmOrder2").click(function () {

            alert("You order was SUCCESSFULLY placed. \nIt's going to be delivered inside 30 minutes. \nThanks for choosing us.")

        });

    });



});