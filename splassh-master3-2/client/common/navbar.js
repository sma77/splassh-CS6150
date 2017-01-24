/*Template.navbar.rendered = function() {
  $('[data-toggle="tooltip"]').tooltip();
}
*/
Template.navbar.helpers({
	rendered: function() {
  	$('[data-toggle="tooltip"]').tooltip();
	}
});

Template.navbar.events({
	'click .toLogin': function(e, t){
		e.preventDefault();
		Router.go('/login');
	},
	'click .toSignup': function(e, t){
		e.preventDefault();
		Router.go('/signup');
	}
});
