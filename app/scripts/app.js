var FirstEmber = window.FirstEmber = Ember.Application.create();

FirstEmber.applicationName = "Rock'n'Rool Call";

/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/components/*');
require('scripts/views/*');
require('scripts/router');
