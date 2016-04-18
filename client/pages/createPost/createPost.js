Template.createPostPage.onRendered(function(){
  $('select').material_select()
})
Template.createPostPage.events({
  '.select click': function() {
    $('select').material_select()
  }
})
Template.createPostPage.helpers({
  channels: function() {
    currentUser = Meteor.userId();
    return Channels.find({createdBy: currentUser}, {sort:{createdAt: -1}});
  }
})