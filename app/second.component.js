(function(app) {
    var Component = ng.core.Component;
    var QuotesService = app.QuotesService;

    app.SecondComponent = Component({
        selector: 'second',
        template: '<p><em>{{quote.line}}</em> {{quote.author}}</p>'
    })
    .Class({
        constructor: [QuotesService, function SecondComponent(quotesService){
          var self = this;
          quotesService.generateRandomQuote(1000, function(quote){
            self.quote = quote;
          });
        }]
    });

})(window.app || (window.app = {}));