FlowRouter.route('/', {
	action: function() {
		BlazeLayout.render("mainLayout", {content: "mainPage"});
	}
});
FlowRouter.route('/create', {
	action: function() {
		BlazeLayout.render("mainLayout", {content: "createPage"})
	}
})
FlowRouter.route('/channel/:id', {
	action: function() {
		BlazeLayout.render("mainLayout", {content: "channelPage"})
	}
})
//Routes setup for useraccounts:core
AccountsTemplates.configureRoute('signIn', {
  layoutType: 'blaze',
  name: 'signin',
  path: '/login',
  layoutTemplate: 'blank',
  contentRegion: 'content'
});
AccountsTemplates.configureRoute('signUp', {
  layoutType: 'blaze',
  name: 'signup',
  path: '/signup',
  layoutTemplate: 'blank',
  contentRegion: 'content'
});