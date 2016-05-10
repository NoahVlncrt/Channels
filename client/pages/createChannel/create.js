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
      Channels.insert(Data, {validate:true})
    } else {
      console.log("This name is already in use")
    }
    FlowRouter.go('/channel/'+shortName);
  }
})
