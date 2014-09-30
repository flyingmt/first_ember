var FirstEmber = window.FirstEmber = Ember.Application.create();

FirstEmber.applicationName = "Rock'n'Rool Call";

FirstEmber.dummySearchResultsArtists = [
    {
        id: 1,
        name: 'Tom Waits',
        nickname: 'Tommy',
        type: 'artist',
        enid: 'ARERLPG1187FB3BB39'
    },
    {
        id: 2,
        name: 'Thomas Alan Waits',
        type: 'artist',
        enid: 'ARERLPG1187FB3BB39'
    },
    {
        id: 3,
        name: 'Tom Waits w/ Keith Richards',
        type: 'artist',
        enid: 'ARMPVNN13CA39CF8FC'
    }
];

/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/components/*');
require('scripts/views/*');
require('scripts/router');
