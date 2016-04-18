Template.floatingFab.helpers({
  routeCheck: function() {
   if(FlowRouter.getRouteName() === "mainPage"){
     return "main"
   }else {
     return "channel"
   } 
  }
});