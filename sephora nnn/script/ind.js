let prd_deatils = JSON.parse(localStorage.getItem("prd_details"));

    let container = document.getElementById("main");
    // let div = document.createElement("div");
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
     color_box.style.height = "20px";
     color_box.style.width = "20px";
     color_box.style.backgroundColor = prd_deatils.swatches[0].colorCode;
     price.innerText= prd_deatils.price;
     let add_cart = document.createElement("button");
     add_cart.setAttribute("id","cartbtn");
     add_cart.innerText = "ADD TO BASKET"
     let add_fav = document.createElement("button");
     add_fav.setAttribute("id","favbtn");
     add_fav.innerText = "ADD TO FAVOURITE"
    //  div.append(img,title,price,color,color_box,add_cart,add_fav);
     container.append(img,brand,title,price,color,color_box,add_cart,add_fav);