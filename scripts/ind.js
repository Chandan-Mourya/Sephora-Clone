import {navbar} from "../component/navbar.js"

import {footer} from "../component/footer.js"

let n=document.getElementById("chandan_navbar");
n.innerHTML = navbar();


let prd_deatils = JSON.parse(localStorage.getItem("prd_details"));
let array =JSON.parse(localStorage.getItem("cart")) || [];
// 

//console.log(array);
console.log(prd_deatils);

    let container = document.getElementById("main");
     let div = document.createElement("div");
     div.setAttribute("id","ind_txt")
     let div1 = document.createElement("div");
     div1.setAttribute("id","ind_img")
    let title = document.createElement("h3");
    title.innerText= prd_deatils.title;
    title.setAttribute("id","prd_title");
    let brand = document.createElement("h3");
    brand.innerText = prd_deatils.brandName;
    brand.setAttribute("id","brand")
    let img = document.createElement("img");
    img.setAttribute("id","image")
    img.src = prd_deatils.image[0].dataAltImage;
     let price = document.createElement("h4");
     price.setAttribute("id","prd_price");
     let color = document.createElement("p");
     color.setAttribute("id","prd_color");
     color.innerText = "Color: "+ prd_deatils.swatches[0].colorName 
     let color_box = document.createElement("div");
     color_box.setAttribute("id","color_box");
     color_box.style.backgroundColor = prd_deatils.swatches[0].colorCode;
     price.innerText= prd_deatils.price;
     let add_cart = document.createElement("button");
     add_cart.setAttribute("id","cartbtn");
     add_cart.innerText = "ADD TO BAG"
     add_cart.addEventListener("click",function(){
      
            moveFunction(prd_deatils)

         // array.push(prd_deatils);
         // localStorage.setItem("cart",JSON.stringify(array));
         // alert("Item added to Cart")
        //localStorage.setItem("cart",JSON.stringify(prd_deatils));
        
     })
     let add_fav = document.createElement("img");
     add_fav.setAttribute("id","favbtn");
     add_fav.src = "https://cdn-icons-png.flaticon.com/512/3237/3237404.png"
     add_fav.addEventListener("click",function(){
        localStorage.setItem("favourite",JSON.stringify(prd_deatils));
        alert("Added to Favourites")
     })
     let add_share = document.createElement("img");
     add_share.setAttribute("id","sharebtn");
     add_share.src = "https://cdn-icons-png.flaticon.com/512/6460/6460954.png"
     let ind_txt = document.createElement("p")
     ind_txt.innerText ="ONLY EXCLUSIVE";
     ind_txt.setAttribute("id","ind_text");
      div.append(ind_txt,brand,title,price,color,color_box,add_cart,add_fav,add_share);
      div1.append(img)
     container.append(div1,div);


     function moveFunction(prd_deatils){
        let obj={
           title:prd_deatils.title,
           brandname:prd_deatils.brandName,
            image:prd_deatils.image[0].dataAltImage,
            price:prd_deatils.price,
            color:prd_deatils.swatches[0].colorName,
        }
        array.push(obj)
      localStorage.setItem("cart",JSON.stringify(array));
      alert("Item added to Cart")
     }