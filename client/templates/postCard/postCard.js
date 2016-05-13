Template.postCard.helpers({
  'favoriteCheck': function(){
    currentShortName = FlowRouter.getParam("shortName");
  },
  'iconType': function(){
    if(this.postType === "Community") {
      return "group"
    } else {
      return "announcement"
    }
  }
});