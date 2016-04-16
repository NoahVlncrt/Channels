Template.channelPage.onRendered(function(){
  $('ul.tabs').tabs()
});
Template.channelPage.helpers({
  channelInfo: function() {
    currentId = FlowRouter.getParam("id");
    return Channels.findOne({_id: currentId});
  }
});
