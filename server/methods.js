// All Meteor methods go here. You could even break it down even further by creating folder and putting specific method files in there.
Meteor.methods({
  insertNewChannel: function(title, description, shortName, createdBy, createdAt){
    Channels.insert({
      title: title,
      description: description,
      shortName: shortName,
      createdBy: createdBy,
      createdAt: createdAt,
      channelType: "public",
      followerCount: 0,
      followers: [],
      owners: [],
      sections: ["Official", "Community"],
      badges: [
        {name: "alpha", description: "Here from the beginning (that's right i'm a hipster!)"}
      ],
      visibility: "public",
     });
   }
})