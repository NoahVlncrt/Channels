FlowRouter.route('/', {
	action: function() {
		BlazeLayout.render("mainLayout", {content: "mainPage"});
	},
	name: "mainPage"
});
FlowRouter.route('/create/channel', {
	action: function() {
		BlazeLayout.render("mainLayout", {content: "createChannelPage"})
	},
})
FlowRouter.route('/create/post', {
	action: function () {
		BlazeLayout.render("mainLayout", {content: "createPostPage"})
	}
});
FlowRouter.route('/channel/:shortName', {
	action: function(params) {
		BlazeLayout.render("mainLayout", {content: "channelPage"})
		console.log(params.shortName)
	},
	name: "channelPage"
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