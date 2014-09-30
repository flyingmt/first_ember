
FirstEmber.Router.map(function () {
    this.route('search-results', {
        path: 'search/:term'
    });
    this.route('artist', {
        path: 'artist/:endid'
    });
    this.route('song', {
        path: 'song/:endid'
    });
});
