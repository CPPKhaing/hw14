
let orderPriceArray =[];
let today = new Date();


$(document).ready(function () {
    
    
    $(".card").click(function (){
    
        let alreadyExist = false;
        let img= $(this).find('img').attr("src");
        let pname = $(this).find('.pname').text();
        let code = $(this).find('.code').text();
        let price = $(this).find('.price').text();

        let quantityFields = $('.num'). value();
        let itemsPrice = (price * quantityFields);

        let items = $ (".item");
        for (let index = 0; index< items.length; index++){
            let exist = items[index].childNodes[1].childNodes[2].innerHTML;
            if(exist == code){
                alreadyExist = true;
                alert("Item has already exit in cart.")
            
            }
        }  
        
        if(!alreadyExist){
           
            $(".calculateitem").append(
                '<div class="item">' +
                    '<img src="' + img + '"alt = "" />' +
                    '<div class= "itemdetail">' +
                    '<p id= "pname">' + pname + '</p>' +
                        '<p id= "code">' + code + '</p>' +
                    '</div>' +
                    '<div class="item-price"><h3>Ks' + price + '</h3></div> '+
                    '<input type ="number" class = "num" value = "1">' +
                    '<div id="total-price"><h3>Ks' + itemsPrice + '</h3></div>' +
                    '<button  class= "delete" ' + 'id=">' + '<ion-icon name="trash-outline"></ion-icon></button> '+
                '</div>'
            )

            
        }
        orderPriceArray.push(itemsPrice);
    });

    $(document).on('click' , '#delete' , function() {

        orderPriceArray[($(this).id)] = 0;
        $(this).closest('.item').remove();
    });

    originalTotal();
    checkWeelEnd();
    initialState();
});


function originalTotal(){
    
    let total = 0;
   
    for(let i = 0; i < orderPriceArray.length; i++){
        let all_prices = Number(orderPriceArray[i].innerText)
        total+=all_prices;
    }
    
    document.getElementById("originaltotal").innerHTML = 'Ks' + total;

    console.log(total);
}

function checkWeelEnd() {

    if( today.getDay() == 0 || today.getDay() ==6 ){
        if( Number(today.getHours())>= 9 && Number(today.getHours() <= 17) ){
         var cost =   $("#originaltotal").text(Number());
         document.getElementById("discountprice").innerHTML = 'Ks' + (cost *0.15);
        }
    }
}

function initialState(){

   $(".detitle").hide();
   $(".form").hide();
   $(".grandtitle").hide();
   $(".grandamount").hide();
   $(".order").hide();
}

$(document).on('click' , '.delivery' , function() {

   $(".detitle").show();
   $(".form").show();
   $(".grandtitle").show();
   $(".grandamount").show();
   $(".order").show();
});

