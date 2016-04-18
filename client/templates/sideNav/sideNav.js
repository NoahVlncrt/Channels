Template.sideNav.onRendered(function(){
  $(".button-collapse").sideNav();
  $(".collapsible").collapsible();
});
Template.sideNav.helpers({
  channels: function() {
    currentUser = Meteor.userId();
    return Channels.find({createdBy: currentUser}, {sort:{createdAt: -1}});
  }
})
Template.sideNav.events({
  'click .logout': function(){
    AccountsTemplates.logout();
  }
})