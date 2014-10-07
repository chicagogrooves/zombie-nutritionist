Meteor.atClient(
  _.once(
    function(){
      var messages = [
        "Brainssss.",
        "BRRAAAAINZZZZ",
        "Please sir, can I have some brains?",
        "bbrainsss."
      ];
      Meteor.setInterval(
        function(){
          Session.set("message", _.sample(messages))
        }, 1500
      );
      Template.motd.helpers({
        motd: function(){ return Session.get("message"); }
      });
      console.info("Zombie Nutritionist is at your service!");
    }
  )
);
