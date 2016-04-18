Template.channelPage.onRendered(function(){
  $('ul.tabs').tabs()
});
Template.channelPage.helpers({
  channelInfo: function() {
    currentId = FlowRouter.getParam("id");
    return Channels.findOne({_id: currentId});
  },
  followingCheck: function() {
    currentId = FlowRouter.getParam("id");
    Data = Channels.findOne({_id: currentId});
    return Data.followers.includes(Meteor.userId()) || Data.createdBy === Meteor.userId();
  }
});
Template.channelPage.events({
  'click .follow': function() {
    currentId = FlowRouter.getParam("id");
    followers = Channels.findOne({_id: currentId}).followers;

  }
})
