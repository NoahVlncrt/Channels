Template.settingsPanel.onRendered(function(){
  $('select').material_select()
});
Template.settingsPanel.helpers({
  channelInfo: function() {
    currentShortName = FlowRouter.getParam("shortName");
    return Channels.findOne({shortName: currentShortName});
  },
});
Template.settingsPanel.events({
  'click .submitbtn': function() {
    currentShortName = FlowRouter.getParam("shortName");
    currentChannelId = Channels.findOne({shortName: currentShortName})._id;
    newTitle = $("#editTitle").val();
    newDescription = $("#editDescription").val();
    Channels.update({_id: currentChannelId}, {$set:{
      title: newTitle,
      description: newDescription,
    }})
    
  }
});