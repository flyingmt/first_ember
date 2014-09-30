/**
 * Created by flyingmt on 2014. 9. 30..
 */

FirstEmber.IndexController = Ember.Controller.extend({

    actions: {
        viewedArtist: function(artist) {
            console.log("hang on I'm viewing: " + artist.name);
        }
    }

});
