Posts = new Mongo.Collection("posts");

PostsSchema = new SimpleSchema({
  "title":{
    type: String,
    label: "Post Title"
  },
  "content":{
    type: String,
    label: "Post Content"
  },
  "createdBy":{
    type: String,
    label: "Creator of this post.",
    autoValue: function(){
      return this.userId;
    }
  },
  "createdAt":{
    type: Date,
    label: "time this was created",
    autoValue: function(){
      if(this.isInsert){
        return new Date
      }
    }
  },
  "likeCount":{
    type: Number,
    label: "the number of times this post has been liked",
    autoValue: function(){
      if(this.isInsert){
        return 0
      }
    }
  },
  "likers":{
    type:[String],
    label: "Everyone who has liked this post",
    autoValue: function(){
      if(this.isInsert){
        return []
      }
    }
  },
  "parentChannel":{
    type: String,
    label: "The channel which this was posted under"
  },
  "parentSection":{
    type: String,
    label: "The Tab which this was posted under"
  },
  "postType":{
    type: String,
    label: "The post's type",
    allowedValues: [
      "Announcment",
      "Community",
    ]
  },
  "tags":{
    type: [String],
    label: "tags to label posts",
    autoValue: function(){
      if(this.isInsert){
        return []
      }
    }
  }
});

Posts.attachSchema(PostsSchema);