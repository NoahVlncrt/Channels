Template.channelPage.onRendered(function(){
  $('ul.tabs').tabs()
  $('.modal-trigger').leanModal()
  currentTab = "Official";
  Session.set("currentPostView", currentTab);
});
Template.channelPage.helpers({
  posts: function() {
    currentShortName = FlowRouter.getParam("shortName");
    postView  = Session.get("currentPostView")
    return Posts.find({$and: [{parentChannel: currentShortName},{parentSection: postView}]})
  },
  channelInfo: function() {
    currentShortName = FlowRouter.getParam("shortName");
    return Channels.findOne({shortName: currentShortName});
  },
  followingCheck: function() {
    currentShortName = FlowRouter.getParam("shortName");
    Data = Channels.findOne({shortName: currentShortName});
    return Data.followers.includes(Meteor.userId()) || Data.createdBy === Meteor.userId();
  },
  currentChannelOwner: function(){
    currentShortName = FlowRouter.getParam("shortName");
    Data = Channels.findOne({shortName: currentShortName})
    
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
  },
  'click .communityTrigger': function(){
    Session.set("currentPostView", "Community")
  },
  'click .officialTrigger': function(){
    Session.set("currentPostView", "Official")
  }
})
