Template.post.onRendered(function(){
  console.log(Posts.findOne({_id: this._id}))
})