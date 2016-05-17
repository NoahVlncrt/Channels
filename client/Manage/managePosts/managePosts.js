Template.managePosts.onRendered(function(){
  Session.set("postManageView", "Community")
  $("#officialTab").addClass("active")
  $('.modal-trigger').leanModal()
})

Template.managePosts.helpers({
  posts: function(){
    currentShortName = FlowRouter.getParam("shortName");
    currentPostType = Session.get("postManageView")
    return Posts.find({parentChannel: currentShortName, parentSection: currentPostType})
  }
})

Template.managePosts.events({
  'click .deleteButton': function(){
    Posts.remove({_id: this._id})
  },
  'click .editButton': function(){
    Session.set("postManagerEditId", this._id)
    $("#editModal").openModal()
  }
})