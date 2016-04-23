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
    
    Channels.insert(Data, {validate:true})
  }
})
