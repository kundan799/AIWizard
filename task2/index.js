const useRegister = (e) => {
  e.preventDefault();
  //console.log("kundan")
  let form = document.getElementById("form1");
  //console.log("form.length", form.email);

  for (var i = 0; i < form.length; i++) {
    var element = form[i];
    //console.log("element",element)
    if (element.required && element.value.trim() === "") {
      alert("Please fill in all required fields.");
      
    }
  }
  // check email is vaild or not
  var email=form.email.value;
  console.log(email)
  if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
    alert('Please enter a valid email address.');
   
  }
// check password is grater then 
  var password=form.Password.value;
  if (password.length < 8) {
    alert('Please enter a password that is at least 8 characters long.');
    return false
  
  }

 alert("registration succesfull")
};
