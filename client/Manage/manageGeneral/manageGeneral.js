Template.manageGeneral.helpers({
  channelData: function(){
    currentShortName = FlowRouter.getParam("shortName");
    return Channels.findOne({shortName: currentShortName})
  }
})
Template.manageGeneral.events({
  'submit .editSettingsGeneral': function(){
    event.preventDefault();
    currentShortName = FlowRouter.getParam("shortName");
    currentChannelId = Channels.findOne({shortName: currentShortName})._id;
    newTitle = $("#editSettingsTitle").val();
    newDescription = $("#editSettingsDescription").val();
    Channels.update({_id: currentChannelId}, {$set:{
      title: newTitle,
      description: newDescription,
    }})
    Bert.alert( 'General settings changed!', 'success', 'fixed-top', 'fa-check' );
  }
})