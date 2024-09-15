// Function to add items to the cart
function addToCart(itemName, itemPrice) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: itemName, price: itemPrice });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartTotal();
}

// Function to update the cart total
function updateCartTotal() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('cart-total').innerText = 'Total: $' + total.toFixed(2);
}

// Function to load cart items on the cart page
function loadCartItems() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = '';
    cart.forEach(item => {
        let itemElement = document.createElement('div');
        itemElement.innerText = item.name + ' - $' + item.price.toFixed(2);
        cartContainer.appendChild(itemElement);
    });
    updateCartTotal();
}

// Call this function to load cart items when the cart page loads
if (document.getElementById('cart-items')) {
    loadCartItems();
}
// navbar js
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  function click(){
    alert("click ho gaya");
  }

  let addtocart = 

  $(function() {
  var ulLi = $('nav ul > li'),
      fa = $('nav ul > li:last-of-type a .fa');
  
   $('nav ul').append('<ol></ol>');
  
   $('nav').each(function() {
     for (var i=0; i <= ulLi.length - 3; i++) {
       $('nav ul > ol').append("<li>"+ i +"</li>");
       $('nav ul > ol > li').eq(i).html(ulLi.eq(i+1).html());
     }
  });

  $('nav ul > li:last-of-type').on('click', function() {
    fa.toggleClass('fa-bars');
    fa.toggleClass('fa-times');
    $(this).parent().children('ol').slideToggle(500);
  });
});




function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.className === "links") {
      x.className += " responsive";
  } else {
      x.className = "links";
  }
}