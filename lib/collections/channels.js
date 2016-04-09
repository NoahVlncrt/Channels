Channels = new Mongo.Collection("channels");
channelsSchema= new SimpleSchema({
	"name": {
		type: String,
		label: "Name",
	},
	"description": {
		type: String,
		label: "Description",
		max: 200
	},
  "collaborators": {
    type: [ String ],
    label: "Collaborators",
  },
  "createdAt": {
    type: Date,
    label: "Date when the channel was created",
    autovalue: function(){
      if(this.isInsert) {
        return newDate;
      }
    }
  }
});
Channels.attachSchema(channelsSchema);