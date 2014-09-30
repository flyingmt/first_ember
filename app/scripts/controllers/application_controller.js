/**
 * Created by flyingmt on 2014. 9. 30..
 */

FirstEmber.ApplicationController = Em.ObjectController.extend({
    searchTerms: '',
    applicationName: "Rock'n'Roll Call",
    actions: {
        submit: function() {
            this.transitionToRoute('search-results',this.get('searchTerms'));
        }
    }
});

