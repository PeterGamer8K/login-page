
const pedro = new User("pedro","123");
 
const btn = document.querySelector("#verify-btn");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");


btn.addEventListener("click", function (){
	if(pedro.verifyCredentions(usernameInput.value, passwordInput.value)) {
		alert("Welcome to the system " + usernameInput.value);

		setTimeout(function(){
			const win = window.open("https://www.google.com", '_blank');
  			win.focus();

		}, 500);

		


	} else {
		alert("You cannot enter this area!");
		usernameInput.focus();	
	}
	usernameInput.value = "";
	passwordInput.value = "";
});