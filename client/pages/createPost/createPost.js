Template.createPostPage.onRendered(function(){
  $('select').material_select()
})

Template.createPostPage.helpers({
  createdChannels: function() {
    currentUser = Meteor.userId();
    return Channels.find({createdBy: currentUser}, {sort:{createdAt: -1}});
  },
  followingChannels: function(){
    currentUser = Meteor.userId()
    return Channels.find({currentUser: {$in: followers}})
  }
})

Template.createPostPage.events({
  'submit .createForm': function(){
    event.preventDefault();
    title = $("#postTitle").val()
    content = $("#postContent").val()
    parentChannel = $("#channel").val()
    
    Data = {
      title: title,
      content: content,
      parentChannel: parentChannel,
      parentSection: "Community",
      postType: "Community"
    }
    Posts.insert(Data, {validate:true})
  }
})