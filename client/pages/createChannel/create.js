Template.createChannelPage.events({
  'submit .createForm': function(){
    event.preventDefault();
    title = $("#channelTitle").val()
    description = $("#channelDescription").val()
    shortName = $("#channelShortName").val()
    
    Data = {
      "title": title,
      "description": description,
      "shortName": shortName
    }
    
    if(Channels.findOne({shortName: shortName}) === undefined){
      if(Meteor.settings.public.restrictedShortNames.indexOf(shortName) === -1){
        Channels.insert(Data, {validate:true})
      } else {
        if(Roles.userIsInRole( Meteor.userId(), 'admin' ) === true){
          Channels.insert(Data, {validate:true})
        } else {
          console.log("You are not permitted to use this name!")
        }
      }
    } else {
      console.log("This name is already in use")
    }
    FlowRouter.go('/channel/'+shortName);
  }
})
