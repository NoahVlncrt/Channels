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