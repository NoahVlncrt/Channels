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
FlowRouter.route('/manage/:shortName', {
	action: function(params){
		BlazeLayout.render("manageLayout", {content: "manageGeneral"})
	}
})
FlowRouter.route('/manage/:shortName/posts', {
	action: function(params){
		BlazeLayout.render("manageLayout", {content: "managePosts"})
	}
})
//manageRoutes = FlowRouter.group({
//	prefix: '/manage',
//	name: 'manage',
//})
//manageRoutes.route('/:shortName',{
//	action: function(params){
//		BlazeLayout.render("blank", {content: "manageLayout"})
//	}
//})
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