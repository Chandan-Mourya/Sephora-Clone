import {navbar} from "../component/navbar.js"

import {footer} from "../component/footer.js"

let n=document.getElementById("chandan_navbar");
n.innerHTML = navbar();

let f=document.getElementById("chandan_footer");
f.innerHTML = footer();   
//slider code


  // var slideIndex = 1;
  // showDivs(slideIndex);
  
  // function plusDivs(n) {
  //   showDivs(slideIndex += n);
  // }
  
  // function currentDiv(n) {
  //   showDivs(slideIndex = n);
  // }
  
  // function showDivs(n) {
  //   var i;
  //   var x = document.getElementsByClassName("mySlides");
  //   var dots = document.getElementsByClassName("demo");
  //   if (n > x.length) {slideIndex = 1}
  //   if (n < 1) {slideIndex = x.length}
  //   for (i = 0; i < x.length; i++) {
  //     x[i].style.display = "none";  
  //   }
  //   for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" w3-white", "");
  //   }
  //   x[slideIndex-1].style.display = "block";  
  //   dots[slideIndex-1].className += " w3-white";
  // }
 
    





    //    1st  wordrobe must-haves

var wardobe_image = document.getElementById("wardobe_image")

var list1 = [
    {url:"https://logan.nnnow.com/content/dam/nnnow-project/10-oct-2021/mlp/T-Shirts.jpg"},
    {url:"https://logan.nnnow.com/content/dam/nnnow-project/10-oct-2021/mlp/Jeans.jpg"},
    {url:"https://logan.nnnow.com/content/dam/nnnow-project/10-oct-2021/mlp/Shirts.jpg"},
    {url:"https://logan.nnnow.com/content/dam/nnnow-project/10-oct-2021/mlp/Trousers_Shorts.jpg"},
    {url:"https://logan.nnnow.com/content/dam/nnnow-project/30-mar-2022/mlp/Athleisure.jpg"},
    {url:"https://logan.nnnow.com/content/dam/nnnow-project/10-oct-2021/mlp/Shoes.jpg"},
    {url:"https://logan.nnnow.com/content/dam/nnnow-project/10-oct-2021/mlp/Jackets.jpg"},
    {url:"https://logan.nnnow.com/content/dam/nnnow-project/10-oct-2021/mlp/Perfumes_.jpg"},
    {url:"https://logan.nnnow.com/content/dam/nnnow-project/30-mar-2022/mlp/INNERWEAR.jpg"}, 
];

list1.map(function(el){
    // console.log(el.url)

    var div = document.createElement("div")
    var image = document.createElement("img")
    image.src = el.url;

    div.append(image)


    // div.addEventListener("click",function(){
    //   window.location="../HTML/women.html"
    // })
    wardobe_image.append(div)



});

 // 2nd  ON the fashion trend-mill


 var fashio_trend = document.getElementById("fashio_trend")

var list2 = [
    {url:"https://logan.nnnow.com/content/dam/nnnow-project/30-mar-2022/mlp/Prints.jpg"},
    {url:"https://logan.nnnow.com/content/dam/nnnow-project/30-mar-2022/mlp/Tropicalpradise.jpg"},
    {url:"https://logan.nnnow.com/content/dam/nnnow-project/30-mar-2022/mlp/Linen.jpg"},
   
];


list2.map(function(el){
    // console.log(el.url)

    var div = document.createElement("div")
    var image = document.createElement("img")
    image.src = el.url;

    div.append(image)

    // div.addEventListener("click",function(){
    //   window.location="../HTML/women.html"
    // })

    fashio_trend.append(div)

});

//3  the talk of the town

var talk_town = document.getElementById("talk_town")


var list3 = [
    {url:"https://logan.nnnow.com/content/dam/nnnow-project/30-mar-2022/mlp/USPA.jpg"},
    {url:"https://logan.nnnow.com/content/dam/nnnow-project/30-mar-2022/mlp/Arrow.jpg"},
    {url:"https://logan.nnnow.com/content/dam/nnnow-project/30-mar-2022/mlp/FM_.jpg"}

];



  list3.map(function(el){
    // console.log(el.url)

    var div = document.createElement("div")
    var image = document.createElement("img")
    image.src = el.url


    div.append(image)

    // div.addEventListener("click",function(){
    //   window.location="../HTML/women.html"
    // })
    talk_town.append(div)
})


// 4 season favourites

var season_favourites = document.getElementById("season_favourites")

var list4 = [
    {url:"https://logan.nnnow.com/content/dam/nnnow-project/30-mar-2022/mlp/COUNTRYCLUBBER.jpg"},
    {url:"https://logan.nnnow.com/content/dam/nnnow-project/30-mar-2022/mlp/FUNTEES.jpg"},
    {url:"https://logan.nnnow.com/content/dam/nnnow-project/30-mar-2022/mlp/CANARYYELLOW.jpg"}
];


list4.map(function(el){
    var div  = document.createElement("div")
    var image = document.createElement("img")
    image.src = el.url


    div.append(image)
    season_favourites.append(div)
})


// 5 closet completers

// var season_favourites = document.getElementById("season_favourites")


// var list_season_favourites = [
//         {url:"https://logan.nnnow.com/content/dam/nnnow-project/10-oct-2021/mlp/CLOSETCOMPLETERS-watches.jpg"},
//         {url:"https://logan.nnnow.com/content/dam/nnnow-project/05-april-2021/mlp/CLOSETCOMPLETERS-Fragrances.jpg"},
//         {url:"https://logan.nnnow.com/content/dam/nnnow-project/10-oct-2021/mlp/CLOSETCOMPLETERS-Innerwear.jpg"},
//         {url:"https://logan.nnnow.com/content/dam/nnnow-project/10-oct-2021/mlp/CLOSETCOMPLETERS-socks.jpg"},
        
//     ];


// list_season_favourites.map(function(el){
//     // console.log(el.url)


//     var div = document.createElement("div")
//     var image = document.createElement("img")
//     image.src = el.url

//     div.append(image)
//     season_favourites.append(div)
// })    




const swiper = new Swiper('.swiper', {
  // Optional parameters

  autoplay: {
      delay: 3000,
      disableOnInteraction: false,
  },
  loop: true,

  // If we need pagination
  pagination: {
      el: '.swiper-pagination',
      clickable: true,

  },

  // Navigation arrows
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },


});
