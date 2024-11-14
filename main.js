// search Nav

document.querySelector(".search-icon").onclick = function(){
    document.querySelector(".nav-search").classList.toggle("open");
    document.querySelector(".user-nav").classList.remove("open");

}
document.querySelector(".close-button").onclick = function(){
    document.querySelector(".nav-search").classList.remove("open");
}
// End search nav

// user Nav
document.querySelector(".user-icon").onclick = function(){
    document.querySelector(".user-nav").classList.toggle("open");
    document.querySelector(".nav-search").classList.remove("open");

}
document.querySelector(".close-user").onclick = function(){
    document.querySelector(".user-nav").classList.remove("open");
}
// End user nav


// Home 

const swiper = new Swiper('.home-parent', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  // End home

// display products

let p = '';

  products.map(function(product){
    p += `
    <div class="product">
                <img src=${product.image} alt="">
                <h2>${product.title}</h2>
                 <h3>price :${product.price}$</h3>  
                 <button onclick = 'addTOCart(${product.id})'>Add To Card</button>     
            </div>
    `
    document.querySelector(".products-content").innerHTML = p;
  });

  // profiles start

const swiper2 = new Swiper('.profiles-flex', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: true,
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
// End profiles


// Add To Cart function

let cartItems = [];

function addTOCart(item){
  let selectedItem = products.find(product => product.id == item);
  if(cartItems.includes(selectedItem)){
    Swal.fire({
      title: "This Product Exist Added To The Cart",
      icon: "warning",
      showConfirmButton: false,
      timer: 1500,
    });
  }else{
    cartItems.push(selectedItem);
  // console.log(cartItems);
  displayProductCart();
  document.querySelector(".count").innerHTML = cartItems.length;

  Swal.fire({
    title: "This Product Already Added To The Cart succussfully",
    icon: "success",
    showConfirmButton: false,
    timer: 1500,
  });
  }
  
}



// view cart products
function displayProductCart(){
  let cart_pro = '';
  let total = 0;
  if(cartItems.length > 0){
    document.querySelector(".total").style.display = "flex";
  }
cartItems.map(function(cartProduct){
  total += cartProduct.price;
  cart_pro += `
  <div class="cart-product">
                <img src=${cartProduct.image} alt="">
                <h3>${cartProduct.title}</h3>
                 <h3>price :${cartProduct.price}$</h3>  
                 <button onclick = 'removeProduct(${cartProduct.id})'>Remove From Card</button>     
            </div>
  `
  document.querySelector('.cart-products').innerHTML = cart_pro;
  document.querySelector(".total-price").innerHTML = `${total} $`;
});
}

// Remove Product 

function removeProduct(item){
  cartItems = cartItems.filter(product => product.id != item);

  console.log(cartItems);
  displayProductCart();
  Swal.fire({
    title: "This Product Already removed from The Cart succussfully",
    icon: "question",
    showConfirmButton: false,
    timer: 1500,
  });
  document.querySelector(".count").innerHTML = cartItems.length;

  if(cartItems.length == 0){
    document.querySelector(".cart").style.display = 'none';
  }
  
}

// dark mood

document.querySelector(".moon").onclick = function(){
  document.querySelector("body").classList.toggle("dark");
  document.querySelector(".sun").style.display = "block";
  document.querySelector(".moon").style.display = "none";
}
document.querySelector(".sun").onclick = function(){
  document.querySelector("body").classList.toggle("dark");
  document.querySelector(".sun").style.display = "none";
  document.querySelector(".moon").style.display = "block";
}


