Template.channelPage.helpers({
  channelInfo: function() {
    Channels.find({},{_id: this.id})
  }
})