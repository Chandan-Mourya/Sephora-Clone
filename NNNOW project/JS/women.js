
 

var favourites_summer = document.getElementById("favourites_summer")

var list_favourites_summer = [
    {url:"https://logan.nnnow.com/content/dam/nnnow-project/15-april-2022/Lace-Story(1).jpg"},
    {url:"https://logan.nnnow.com/content/dam/nnnow-project/15-april-2022/Pocket-Story(2).jpg"},
    {url:"https://logan.nnnow.com/content/dam/nnnow-project/15-april-2022/SaffronColour-Story(1).jpg"}
];


list_favourites_summer.map(function(el){
    // console.log(el.url)

    var div = document.createElement("div")
    var image = document.createElement("img")
    image.src = el.url


    div.append(image)
    favourites_summer.append(div)
});


// 2   dress up for

var dress_up = document.getElementById("dress_up")

var list2 = [
    {url:"https://logan.nnnow.com/content/dam/nnnow-project/4-mar-2022/wlp/ASMARTDAY_SWORK.jpg"},
    {url:"https://logan.nnnow.com/content/dam/nnnow-project/4-mar-2022/wlp/A-SANGEET1.jpg"},
    {url:"https://logan.nnnow.com/content/dam/nnnow-project/4-mar-2022/ASUNDAYNIGHTIN1.jpg"}
];


list2.map(function(el){
    // console.log(el.url)

    var div = document.createElement("div")
    var image = document.createElement("img")
    image.src = el.url


    div.append(image)
    dress_up.append(div)
})


// what's hot

var what_hot = document.getElementById("what_hot")

var list_what_hot = [
    {url:"https://logan.nnnow.com/content/dam/nnnow-project/4-mar-2022/wlp/EVERYTHINGPINK.jpg"},
    {url:"https://logan.nnnow.com/content/dam/nnnow-project/4-mar-2022/wlp/TYPOGRAPHYTEES_.jpg"},
    {url:"https://logan.nnnow.com/content/dam/nnnow-project/4-mar-2022/wlp/LBDs.jpg"},
    {url:"https://logan.nnnow.com/content/dam/nnnow-project/4-mar-2022/wlp/LOVEYOUTOTES.jpg"},
    {url:"https://logan.nnnow.com/content/dam/nnnow-project/4-mar-2022/wlp/METALLICKURTAS.jpg"},
];


list_what_hot.map(function(el){
    // console.log(el.url);

    var div = document.createElement("div")
    var image = document.createElement("img")
    image.src=el.url


    div.append(image)
    what_hot.append(div)
})


 

// 4 what are you looking for?

var what_are_you = document.getElementById("what_are_you")

var list4 = [
    {url:"https://logan.nnnow.com/content/dam/nnnow-project/4-mar-2022/wlp/DRESSES.jpg"},
    {url:"https://logan.nnnow.com/content/dam/nnnow-project/4-mar-2022/wlp/Tops_Tees.jpg"},
    {url:"https://logan.nnnow.com/content/dam/nnnow-project/4-mar-2022/wlp/Ethnic.jpg"},
    {url:"https://logan.nnnow.com/content/dam/nnnow-project/4-mar-2022/wlp/Bottomwear_.jpg"}
];


list4.map(function(el){
    // console.log(el.url)

    var div = document.createElement("div")
    var image= document.createElement("img")
    image.src=el.url

    // console.log(image)

    div.append(image)

    what_are_you.append(div)
})

var new_arrivals = document.getElementById("new_arrivals")



// new arrivals

var new_arrivals = document.getElementById("new_arrivals")

var list_new_arrivals = [
    {url:"https://cdn11.nnnow.com/web-images/medium/styles/GHLRS0GQIYH/1646305362777/1.jpg",title:"hello",price:100}, 
];


list_new_arrivals.map(function(el){
    // console.log(el.url)

    var card = document.createElement("div")

    var image = document.createElement("img")
    image.src = el.url

  //  console.log(el.url)


    var div2 = document.createElement("div")
    var p1 = document.createElement("p")
    p1.innerText=el.title;

    var p2 = document.createElement("p")
        
    var p3 = document.createElement("p")
    var p4 = document.createElement("p")

    div2.append(p1,p2,p3,p4)


    card.append(image,div2)

    new_arrivals.append(card)
    
})




//featured_brands

var featured_brands = document.getElementById("featured_brands")


var list_featured_brands = [
    {url:"https://logan.nnnow.com/content/dam/nnnow-project/18-jan-2022/wlp/SHFFL.jpg"},
    {url:"https://logan.nnnow.com/content/dam/nnnow-project/04-jan-2022/Karigari.jpg"},
    {url:"https://logan.nnnow.com/content/dam/nnnow-project/04-jan-2022/SUGR.jpg"},
    {url:"https://logan.nnnow.com/content/dam/nnnow-project/04-jan-2022/FLYINGMACHINE.jpg"},
    {url:"https://logan.nnnow.com/content/dam/nnnow-project/21-june-2021/wlp/SEPHORACOLLECTION.jpg"}
];


list_featured_brands.map(function(el){
    // console.log(el.url)

    var div = document.createElement("div")
    var image = document.createElement("img")
    image.src = el.url

    // console.log(image)


    div.append(image)

    featured_brands.append(div)
})



//slider code

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}