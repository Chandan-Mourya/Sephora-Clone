let prd_deatils = JSON.parse(localStorage.getItem("prd_details"));

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
        localStorage.setItem("cart",JSON.stringify(prd_deatils));
        alert("Item added to Cart")
     })
     let add_fav = document.createElement("button");
     add_fav.setAttribute("id","favbtn");
     add_fav.innerText = "ADD TO FAVOURITE"
     add_fav.addEventListener("click",function(){
        localStorage.setItem("favourite",JSON.stringify(prd_deatils));
        alert("Added to Favourites")
     })
     let ind_txt = document.createElement("p")
     ind_txt.innerText ="ONLY EXCLUSIVE";
     ind_txt.setAttribute("id","ind_text");
      div.append(ind_txt,brand,title,price,color,color_box,add_cart,add_fav);
      div1.append(img)
     container.append(div1,div);