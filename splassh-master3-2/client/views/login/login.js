Template.login.events({
    'submit form': function(event) {
        event.preventDefault();
		var usernameVar = event.target.loginUsername.value;
        //var emailVar = event.target.loginEmail.value;
        var passwordVar = event.target.loginPassword.value;
        console.log("Form submitted.");
    }
});
