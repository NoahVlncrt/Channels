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
    Data = Channels.findOne({_id: currentId});
    if(Data.followers.includes(Meteor.userId()) === true) {
      console.log("seems as if you are already following this channel. . .")
    } else {
      Channels.update({_id: currentId}, {$push: {"followers": Meteor.userId()}});
      console.log("thank you for following!")
    }
  }
})
