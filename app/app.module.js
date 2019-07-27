(function(app) {
    var NgModule = ng.core.NgModule;
    var BrowserModule = ng.platformBrowser.BrowserModule;
    var QuotesService = app.QuotesService;
    var SecondComponent = app.SecondComponent;
    var AppComponent = app.AppComponent;

    app.AppModule = NgModule({
        imports: [BrowserModule],
        declarations: [AppComponent, SecondComponent],
        providers: [{
          provide: QuotesService, useClass: QuotesService
        }],
        bootstrap: [AppComponent]
    })
    .Class({
        constructor: function(){}
    });


})(window.app || (window.app = {}));