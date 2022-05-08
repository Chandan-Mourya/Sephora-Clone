
function savedetails(){
    let details ={
        name:document.getElementById("signup_name").value,
        mail: document.getElementById("signup_mail").value,
        pass: document.getElementById("signup_pass").value,
        condition:true,
    };
    console.log(details);
    localStorage.setItem("details",JSON.stringify(details));
    alert("Accout Creation Success");
    window.location.href = "./index.html";
    details.condition = false;
}