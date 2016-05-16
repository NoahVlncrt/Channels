Template.manageLayout.helpers({
  channelData: function(){
    currentShortName = FlowRouter.getParam("shortName");
    return Channels.findOne({shortName: currentShortName});
  },
  postData: function(){
    currentShortName = FlowRouter.getParam("shortName");
    return Posts.findOne({parentChannel: currentShortName})
  }
})
Template.manageLayout.events({
  'click #membersLink': function(){
    Bert.alert("This feature isn't ready yet. Soon though!", 'info', 'fixed-top', 'fa-frown-o');
  }
})