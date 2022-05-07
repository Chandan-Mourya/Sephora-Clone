fetch("https://www2.hm.com/en_in/women/new-arrivals/shoes-accessories/_jcr_content/main/productlisting.display.json?sort=stock&image-size=small&image=model&offset=36&page-size=36")
	.then (function(res){
        return res.json()
    })

    
	.then(function(res){
        console.log(res.products)
        append (res.products)
    })
	.catch(function(err){
        console.log(err)
    });

function append(data){
    //console.log(data);
    data.forEach(function(el){
       
    let container = document.getElementById("products");
     let div = document.createElement("div");
     div.setAttribute("class","prd")
     div.addEventListener("click",function(){
         localStorage.setItem("prd_details",JSON.stringify(el))
        window.location.href = "ind_product.html"
    })
    let brand = document.createElement("h3");
    brand.innerText = el.brandName;
    let txt = document.createElement("h4");
    txt.innerText= "ONLY EXCLUSIVE";
    txt.style.color = "red";
    let title = document.createElement("h3");
    title.innerText= el.image[0].dataAltText
    let img = document.createElement("img");
    img.setAttribute("id","image")
    img.src = el.image[0].dataAltImage;
     let price = document.createElement("h4");
     price.innerText= el.price;
     div.append(img,txt,title,brand,price);
     container.append(div);
    })
    
    }
