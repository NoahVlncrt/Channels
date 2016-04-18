// All Meteor methods go here. You could even break it down even further by creating folder and putting specific method files in there.
Meteor.methods({
  insertNewChannel: function(title, description, createdBy, createdAt){
    Channels.insert({
      title: title,
      description: description,
      createdBy: createdBy,
      createdAt: createdAt,
      followerCount: 0,
      followers: [],
      owners: []
    });
    Channels.after.insert(function (userId, doc) {
      Channels.update({_id: this._id}, {$push:{"followers": Meteor.userId()}});
    });
  }
})