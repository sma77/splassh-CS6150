Accounts.emailTemplates.siteName = "SPLASSH";
//Accounts.emailTemplates.from     = "SPLASSH <admin@splassh.org>";

Accounts.emailTemplates.verifyEmail = {
  subject: function() {
    return "[SPLASSH] Verify Your Email Address";
  },

  text: function( user, url ) {
    var emailAddress   = user.emails[0].address;
    var urlWithoutHash = url.toString();
    var emailBody      = "To verify your email address " + emailAddress + " visit the following link:\n\n" + urlWithoutHash + "\n\n If you did not request this verification, please ignore this email.";

    return emailBody;
  }

};
