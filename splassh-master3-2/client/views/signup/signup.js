Template.signup.events({
    'submit form': function(event) {
        event.preventDefault();
		var usernameVar = event.target.signupUsername.value;
        var emailVar = event.target.signupEmail.value;
        var passwordVar = event target.signupPassword.value;

		let user = {
			username: usernameVar,
			email: emailVar,
			password: passwordVar
			createdAt: new Date();
		};

		Accounts.createUser(user, (error) => {
			if (error){
				alert('error');
			} else{
				Meteor.call('sendVerificationLink', (error, response) => {
					if (error){
						alert('error');
					} else{
						alert('welcome!');
					}
				});
			}
		});
        console.log("Form submitted.");
    }

});
