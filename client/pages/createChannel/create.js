Template.createChannelPage.events({
  'submit .createForm': function(){
    event.preventDefault();
    title = $("#channelTitle").val()
    description = $("#channelDescription").val()
    createdBy = Meteor.userId()
    createdAt = new Date()
    Meteor.call("insertNewChannel", title, description, createdBy, createdAt);
  }
})
