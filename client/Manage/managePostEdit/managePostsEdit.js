Template.managePostsEdit.helpers({
  Data: function(){
    postId = Session.get("postManagerEditId")
    return Posts.findOne({_id: postId})
  }
})
Template.managePostsEdit.events({
  'click #postEditSubmit': function(){
    event.preventDefault()
    postId = Session.get("postManagerEditId")
    newTitle = $("#postEditTitle").val()
    newContent = $("#postEditContent").val()
    $("#editModal").closeModal()
    Posts.update({_id: postId}, {$set:{
      title: newTitle,
      content: newContent
    }});
  }
})