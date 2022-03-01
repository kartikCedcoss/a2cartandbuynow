var products = [
  { id: 101, name: "Basket Ball", image: "basketball.png", price: 150 },
  { id: 102, name: "Football", image: "football.png", price: 120 },
  { id: 103, name: "Soccer", image: "soccer.png", price: 110 },
  { id: 104, name: "Table Tennis", image: "table-tennis.png", price: 130 },
  { id: 105, name: "Tennis", image: "tennis.png", price: 100 },
];
var cartarr = [];
var buyarr =[];

$(document).ready(function () {
  $("#cartFootball").on("click", function () {
    for (let i = 0; i < products.length; i++) {
      if (products[i].id == 102) {
        obj1 = {
          id: 102,
          name: "Football",
          image: "football.png",
          price: 150,
          quantity: 1,
        };
        var temp = 0;
        for (let j = 0; j < cartarr.length; j++) {
          if (cartarr[j].id == 102) {
            cartarr[j].quantity += 1;
            temp = 1;
            console.log("already exixts");
            break;
          }
        }
        if (temp != 1) {
          cartarr.push(obj1);
        }
      }
      display(cartarr);
    }
  });
  $("#cartTennis").on("click", function () {
    for (let i = 0; i < products.length; i++) {
      if (products[i].id == 105) {
        obj1 = {
          id: 105,
          name: "Tennis",
          image: "tennis.png",
          price: 120,
          quantity: 1,
        };
        var temp = 0;
        for (let j = 0; j < cartarr.length; j++) {
          if (cartarr[j].id == 105) {
            cartarr[j].quantity += 1;
            temp = 1;
            break;
          }
        }
        if (temp != 1) {
          cartarr.push(obj1);
        }
      }
      display(cartarr);
    }
  });
  $("#cartBasketball").on("click", function () {
    for (let i = 0; i < products.length; i++) {
      if (products[i].id == 101) {
        obj1 = {
          id: 101,
          name: "Basketball",
          image: "basketball.png",
          price: 90,
          quantity: 1,
        };
        var temp = 0;
        for (let j = 0; j < cartarr.length; j++) {
          if (cartarr[j].id == 101) {
            cartarr[j].quantity += 1;
            temp = 1;
            break;
          }
        }
        if (temp != 1) {
          cartarr.push(obj1);
        }
      }
      display(cartarr);
    }
  });
  $("#cartTabletennis").on("click", function () {
    for (let i = 0; i < products.length; i++) {
      if (products[i].id == 104) {
        obj1 = {
          id: 104,
          name: "Tabletennis",
          image: "table-tennis.png",
          price: 110,
          quantity: 1,
        };
        var temp = 0;
        for (let j = 0; j < cartarr.length; j++) {
          if (cartarr[j].id == 104) {
            cartarr[j].quantity += 1;
            temp = 1;
            break;
          }
        }
        if (temp != 1) {
          cartarr.push(obj1);
        }
      }
      display(cartarr);
    }
  });
  $("#cartSoccer").on("click", function () {
    for (let i = 0; i < products.length; i++) {
      if (products[i].id == 103) {
        obj1 = {
          id: 103,
          name: "Soccer",
          image: "soccer.png",
          price: 80,
          quantity: 1,
        };
        var temp = 0;
        for (let j = 0; j < cartarr.length; j++) {
          if (cartarr[j].id == 103) {
            cartarr[j].quantity += 1;
            temp = 1;
            break;
          }
        }
        if (temp != 1) {
          cartarr.push(obj1);
        }
      }
      display(cartarr);
    }
  });
  $("#clearcart").on("click", function () {
    $("table").remove();
  });
  $("#deletebuy").on("click",function(){
      $("table").remove();
  })

  $("#buyFootball").on("click", function () {
    for (let i = 0; i < products.length; i++) {
      if (products[i].id == 102) {
        var htmlBuy =
          "<table><tr><td>" +
          products[i].name +
          '</td><td><img src="images/' +
          products[i].image +
          '"></td></tr><tr><td></t></td><td>$' +
          products[i].price +
          "</td></tr><tr><td><button onclick= ' addTocart("+parseInt(products[i].id)+" )' >Add To Cart</button><td></tr></table>";
    
      }
      document.getElementById("buydisp").innerHTML = htmlBuy;
    }
  });
  $("#buyTennis").on("click", function () {
    for (let i = 0; i < products.length; i++) {
      if (products[i].id == 105) {
        var htmlBuy =
          "<table><tr><td>" +
          products[i].name +
          '</td><td><img src="images/' +
          products[i].image +
          '"></td></tr><tr><td></t></td><td>$' +
          products[i].price +
          "</td></tr><tr><td><button onclick= ' addTocart("+parseInt(products[i].id)+" )'>Add To Cart</button><td></tr></table>";
        
      }
      document.getElementById("buydisp").innerHTML = htmlBuy;
    }
  });
  $("#buyBasketball").on("click", function () {
    for (let i = 0; i < products.length; i++) {
      if (products[i].id == 101) {
        var htmlBuy =
          "<table><tr><td>" +
          products[i].name +
          '</td><td><img src="images/' +
          products[i].image +
          '"></td></tr><tr><td></t></td><td>$' +
          products[i].price +
          "</td></tr><tr><td><button onclick= ' addTocart("+parseInt(products[i].id)+" )'>Add To Cart</button><td></tr></table>";
        
      }
      document.getElementById("buydisp").innerHTML = htmlBuy;
    }
  });
  $("#buyTabletennis").on("click", function () {
    for (let i = 0; i < products.length; i++) {
      if (products[i].id == 104) {
        var htmlBuy =
          "<table><tr><td>" +
          products[i].name +
          '</td><td><img src="images/' +
          products[i].image +
          '"></td></tr><tr><td></t></td><td>$' +
          products[i].price +
          "</td></tr><tr><td><button onclick= ' addTocart("+parseInt(products[i].id)+" )'>Add To Cart</button><td></tr></table>";
    
      }
      document.getElementById("buydisp").innerHTML = htmlBuy;
    }
  });
  $("#buySoccer").on("click", function () {
    for (let i = 0; i < products.length; i++) {
      if (products[i].id == 103) {
        var htmlBuy =
          "<table><tr><td>" +
          products[i].name +
          '</td><td><img src="images/' +
          products[i].image +
          '"></td></tr><tr><td></t></td><td>$' +
          products[i].price +
          "</td></tr><tr><td><button onclick= ' addTocart("+parseInt(products[i].id)+" )'>Add To Cart</button><td></tr></table>";
        
      }
      document.getElementById("buydisp").innerHTML = htmlBuy;
    }
  });
});
function display(cartarr) {
  var html =
    "<table><tr><th>Product</th> </t><th>image</th></t><th>price</th></t><th>Quantity</th>";
  for (let i = 0; i < cartarr.length; i++) {
    html +=
      "<tr><th>" +
      cartarr[i].name +
      "</th><th><img src='images/" +
      cartarr[i].image +
      "'></th><th>$" +
      cartarr[i].price +
      "</th><th>" +
      "<button onclick='decQuantity(" +
      parseInt(cartarr[i].id) +
      ")' >-</button></t>" +
      cartarr[i].quantity +
      "</t><button onclick='incQuantity(" +
      parseInt(cartarr[i].id) +
      ")'>+</button></th><th><button onclick='remove(" +
      parseInt(cartarr[i].id) +
      ")' > <img src=' images/delete.png' </button>" +
      "</tr><tr><th><input type='button' onclick='buyNowfC("+ parseInt(cartarr[i].id)+")' value='Buy Now'> ";
  }
  html += "</table>";

  document.getElementById("cartdisp").innerHTML = html;
}
function decQuantity(inc) {
  for (let i = 0; i < cartarr.length; i++) {
    if (cartarr[i].id == inc) {
      cartarr[i].quantity -= 1;
    }
    display(cartarr);
  }
}
function incQuantity(inc) {
  for (let i = 0; i < cartarr.length; i++) {
    if (cartarr[i].id == inc) {
      cartarr[i].quantity += 1;
    }
    display(cartarr);
  }
}
function remove(rem) {
  for (let i = 0; i < cartarr.length; i++) {
    if (cartarr[i].id == rem) {
      cartarr.splice(i, 1);
    }
    display(cartarr);
  }
}

function buyNowfC(bid){
    var x=cartarr.length;
    for(let i=0; i<x ; i++){
       
        if(cartarr[i].id ==bid){
            
             
            var htmlBuy1 ='<table><tr><td>' +cartarr[i].name +'</td><td><img src="images/' +cartarr[i].image +'"></td></tr><tr><td></t></td><td>$' +cartarr[i].price + '</td></tr><tr><td><button>Add To Cart</button><td></tr></table>';
      
      }
      document.getElementById("buydisp").innerHTML = htmlBuy1;
      display(cartarr);
      
    }
    }

function addTocart(cid){
    for(let i = 0 ; i<cartarr.length;i++){
        if(cartarr[i].id == cid){
           cartarr[i].quantity +=1;
               
           $('tr').remove();
           }
        
          display(cartarr);
          
        }
    
    
        if(cartarr.length==0){
           switch(cid){
               case 102:
                obj2={
               id:101,
                name:"Football",
               image:"football.png",
               price: 120,
               quantity: 1,
           }
            cartarr.push(obj2);
            $('tr').remove();
           break;
            case 101 :
             obj3={
              id:101,
                name:"Basketball",
                image:"basketball.png",
                price: 150,
                 quantity: 1,
             }
             cartarr.push(obj3);
            $('tr').remove();
             break;

            case 103 :
            obj4={
               id:103,
                name:"Soccer",
                image:"soccer.png",
                price: 110,
                quantity: 1,
            }
             cartarr.push(obj4);
           $('tr').remove();
             break;

            case 104 :
                obj5={
                     id:104,
                    name:"Table tennis",
                     image:"table-tennis.png",
                    price: 150,
                    quantity: 1,
                 }
                cartarr.push(obj5);
                 $('tr').remove();
                 break;
                 case 105 :
                     obj6={
                         id:105,
                         name:"Tennis",
                         image:"tennis.png",
                        price: 100,
                         quantity: 1,
                    }
                   
                     cartarr.push(obj6);
                   $('tr').remove();
                   break;
           }
           }
           display(cartarr);

           
    }

function buyall(){
    
for(let i=0;i<cartarr.length;i++){
    if(cartarr[i].id==101){
        objf={
            id: 101, 
            name: "Basket Ball",
             image: "basketball.png", 
             price: 150
        }
        buyarr.push(objf);
    }
else if(cartarr[i].id==102){
    objf={
        id: 102, 
        name: "Football",
         image: "footballball.png", 
         price: 120
    }
    buyarr.push(objf);
}
else if(cartarr[i].id==103){
    objf={
        id: 103, 
        name: "Soccer",
         image: "soccer.png", 
         price: 120
    }
    buyarr.push(objf);
}
else if(cartarr[i].id==104){
    objf={
        id: 104, 
        name: "Table tennis",
         image: "table-tennis.png", 
         price: 120
    }
    buyarr.push(objf);
}
else {
    objf={
        id: 105, 
        name: "Tennis",
         image: "tennis.png", 
         price: 100
    }
    buyarr.push(objf);
}
 displaybuy(buyarr);
    $('table').remove();
}
    

function displaybuy(buyarr){
    var html1 =
    "<table><tr><th>Product</th> </t><th>image</th></t><th>price</th>";
    for (let i=0;i<buyarr.length;i++){
        html1 +=
        "<tr><th>" +
        buyarr[i].name +
        "</th><th><img src='images/" +
        buyarr[i].image +
        "'></th><th>$" +
        buyarr[i].price +
        "</th><th>" +
        "<button onclick='decQuantity(" +
        parseInt(buyarr[i].id) +
        ")' ></th></tr>";
    }
    html1 += "</table>";
  
    document.getElementById("buydisp").innerHTML = html1;
    }
}