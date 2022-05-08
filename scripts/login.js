let input_mob = document.getElementById("mobile_num").value;
localStorage.setItem("mobilenum",input_mob);

let signup = () =>{
  window.location.href = "signup.html";
  
}
document.getElementById("login_box").addEventListener("click",function(){
  event.preventDefault();
  document.getElementById("login_card").style.display = "block";
  
})

document.querySelector(".close-btn").addEventListener('click',function(){
  document.getElementById("login_card").style.display = "none";
})



function onSuccess(googleUser) {
    console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
  }
  function onFailure(error) {
    console.log(error);
  }
  function renderButton() {
    gapi.signin2.render('my-signin2', {
      'scope': 'profile email',
      'width': 358,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': onSuccess,
      'onfailure': onFailure
    });
  }
  //google button
