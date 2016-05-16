Template.managePosts.onRendered(function(){
  Session.set("postViewSettings", "Community")
  $("#officialTab").addClass("active")
})

Template.managePosts.helpers({
  posts: function(){
    currentShortName = FlowRouter.getParam("shortName");
    currentPostType = Session.get("postViewSettings")
    return Posts.find({parentChannel: currentShortName, parentSection: currentPostType})
  }
})