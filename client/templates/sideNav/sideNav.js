Template.sideNav.onRendered(function(){
  $(".button-collapse").sideNav({
    closeOnClick: true,
    menuWidth: 325
  });
  $(".collapsible").collapsible();
});
Template.sideNav.helpers({
  channelsOwned: function() {
    currentUser = Meteor.userId();
    return Channels.find({createdBy: currentUser}, {sort:{createdAt: -1}});
  },
  channelsFollowing: function() {
    return Channels.find({followers: {$in: [Meteor.userId()]}});
  }
})
Template.sideNav.events({
  'click .logout': function(){
    AccountsTemplates.logout();
  }
})