Template.createPage.events({
  'submit .createForm': function(){
    event.preventDefault();
    title = $("#channelTitle").val()
    description = $("#channelDescription").val()
    createdBy = Meteor.userId()
    createdAt = new Date()
    Channels.insert({
      title: title,
      description: description,
      createdBy: createdBy,
      createdAt: createdAt
    })
  }
})
