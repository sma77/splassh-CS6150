Meteor.methods({
  //sendEmail: function (userId, email) {
  sendVerificationLink: function() {
	  var userId = Meteor.userId();
	  if (userId){
		  return Accounts.sendVerificationEmail(userId);
	  }
  }
    //if (this.userId == userId) {
      //Email.send(email);
    //}
  //}
});
