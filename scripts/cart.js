import {navbar} from "../component/navbar.js"


let n=document.getElementById("chandan_navbar");
n.innerHTML = navbar();




let detail = document.querySelector("#detail")

let main = document.querySelector("#main")


let promo = document.createElement("div")
    promo.setAttribute("id","promo");

let  p_promo = document.createElement("h3")
    p_promo .innerText = "APPLY PROMO CODE"

let icon_promo = document.createElement("img")
    icon_promo.src = "https://static.nnnow.com/client/assets/images/promotions/icon_promo.png"
   
    promo.append(icon_promo,p_promo)


    let  overview =  document.createElement("div")
         overview.setAttribute("id","overview")
   
    let h1 = document.createElement("h2")
        h1.innerText = "OVERVIEW";

    let subtotal = document.createElement("div")
        subtotal.setAttribute("class","detail")
    let p1 = document.createElement("h3")
        p1.innerText = "Subtotal"
    let p2 =  document.createElement("h3")
        p2.innerText = `${1500}`
        subtotal.append(p1,p2)

        let discount = document.createElement("div")
            discount.setAttribute("class","detail")
    let p3 = document.createElement("h3")
        p3.innerText = "Discount"
    let p4 =  document.createElement("h3")
        p4.innerText = `${1500}`
        discount.append(p3,p4)

     
    let gst = document.createElement("div")
        gst.setAttribute("class","detail")
    let p5 = document.createElement("h3")
        p5.innerText = "GST"
    let p6 =  document.createElement("h3")
        p6.innerText = `${1500}`
        gst.append(p5,p6)   
     
        let dilvery_charges = document.createElement("div")
        dilvery_charges.setAttribute("class","detail")
    let p7 = document.createElement("h3")
        p7.innerText = "Dilvery charges"
    let p8 =  document.createElement("h3")
        p8.innerText = `${1500}`
         dilvery_charges.append(p7,p8)

    let hr= document.createElement("hr")
    
    let total = document.createElement("div")
        total.setAttribute("class","detail")
    let p9 = document.createElement("h3")
        p9.innerText = "Total"
    let rs =  document.createElement("h3")
        rs.innerText = `${1500}`
        total.append(p9,rs)

    overview.append(h1,subtotal,discount,gst,dilvery_charges,hr,total);



        let checkout = document.createElement("div")
        checkout.addEventListener("click",function(){
            window.location.href ="../checkout.html"
        })
        checkout.setAttribute("id","checkout");      
            let check = document.createElement("h2")
                check.innerText = "CHECKOUT"
            checkout.append(check);

            let shopmore = document.createElement("div")
                shopmore.setAttribute("id","shopmore");      
            let tag = document.createElement("h2")
                 tag.innerText = "SHOP MORE"
                shopmore.append(tag);

        let sbi = document.createElement("div")
            sbi.setAttribute("id","sbi")
        let image = document.createElement("img")
            image.src= "https://static.nnnow.com/mybag_offer_banner.jpg"
            sbi.append(image)

   
    detail.append(promo,overview,checkout,shopmore,sbi);

let data = JSON.parse(localStorage.getItem("cart")) || [];

console.log(data);

products(data);

function products(data){

    
    let div = document.createElement("div")
        div.setAttribute("id","div_main")

    data.forEach(function(elem,index){

     let div1 = document.createElement("div")
         div1.setAttribute("id","prod_detail")
     let div2 = document.createElement("div")
         div2.setAttribute("id","qty_price")
    
     let image = document.createElement("img")
         image.src = elem.image
     let brand = document.createElement("p")
         brand.innerText = elem.brandname
     let title = document.createElement("h3")
         title.innerText = elem.title
     let color = document.createElement("p")
         color.innerText = `Color: ${elem.color}`
     let size = document.createElement("p")
          size.innerText = `Size - l`
     let fav = document.createElement("button")
         fav.innerText = "Move to Favorites";
     let remove = document.createElement("button")
         remove.innerText = "Remove"
         remove.addEventListener("click",function(){
              
            data.splice(index,1)
            window.location.reload()
            localStorage.setItem("cart",JSON.stringify(data))
         })

     let price = document.createElement("h3")
         price.innerText = `Rs. ${elem.price}`
     
     let select = document.createElement("select")
         let s1 = document.createElement("option")
         s1.innerText = 1;
         let s2 = document.createElement("option")
         s2.innerText = 2;
         let s3 = document.createElement("option")
         s3.innerText = 3;
         let s4 = document.createElement("option")
         s4.innerText = 4;
         let s5 = document.createElement("option")
         s5.innerText = 5;
         
      select.append(s1,s2,s3,s4,s5)
      let qty = document.createElement("h3")
          qty.innerText="QTY"
      let selector = document.createElement("div")
          selector.setAttribute("id","selector")
          selector.append(qty,select)
     
     div1.append(brand,title,color,size,fav,remove,selector,price)
    //  div2.append(selector,price)
     let div0 = document.createElement("div")
     div0.append(image)
     div0.setAttribute("class","div0")
         let box =  document.createElement("div")
         box.setAttribute("class","box")
      
         box.append(div0,div1,div2)
     div.append(box)
     
     main.append(div)
     

    })
    
}




