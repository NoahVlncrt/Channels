Channels = new Mongo.Collection("channels");

ChannelsSchema = new SimpleSchema({
  "title": {
    type: String,
    label: "Channel Title"
  },
  "description": {
    type: String,
    label: "Description",
    optional: true,
    max: 200,
  },
  "shortName": {
    type: String,
    label: "Shortname",
    max: 20,
  },
  "visibility": {
    type: String,
    label: "Visibility",
    autoValue: function(){
      return "public"
    }
  },
  "followerCount": {
    type: Number,
    autoValue: function(){
      if(this.isInsert){
        return 0
      }
    },
    label: "follower count"
  },
  "followers":{
    type: [String],
    label: "follower array",
    autoValue: function() {
      if(this.isInsert){
       return [] 
      }
    }
  },
  "owners": {
    type: [String],
    label: "owner array",
    autoValue: function() {
      if(this.isInsert){
        return [this.userId]
      }
    }
  },
  "sections": {
    type: [String],
    label: "secions array",
    autoValue: function(){
      return ["Official", "Community"]
    }
  },
  "badges": {
    type: [Object],
    label: "all of your badges here!",
    autoValue: function(){
      return [{name: "Alpha User", description: "Congrats you are hipster as all hell now!"}]
    },
  },
  "badges.$.name": {
    type: String,
    label: "Badge Name",
  },
  "badges.$.description": {
    type: String,
    label: "Badge Name",
  },
  "createdAt": {
    type: Date,
    label: "Date and time the channel was created at",
    autoValue: function(){
      if(this.isInsert) {
        return new Date;
      }
    }
  },
  "createdBy": {
    type: String,
    label: "Creator of this Channel",
    autoValue: function(){
      return this.userId;
    }
  },
});

Channels.attachSchema(ChannelsSchema);