(function() {
    var Component = ng.core.Component;
    var NgModule = ng.core.NgModule;
    var BrowserModule = ng.platformBrowser.BrowserModule;
    var platformBrowserDynamic = ng.platformBrowserDynamic.platformBrowserDynamic();
    var Class = ng.core.Class;

    var QuotesService = Class({
      constructor: function QuotesService(){
        this.quotes = quotes;
      },

      getRandomQuote: function (){
        var randomIndex = Math.floor(Math.random() * quotes.length);
        return this.quotes[randomIndex];
        }
      }
    );

    var TestService = Class({
      constructor: function(){},

      getRandomQuote: function(){
        return {
          line: 'Cytat testowy',
          author: 'Testowy autor'
        };
      }
    });

    var SecondComponent = Component({
        selector: 'second',
        template: '<p><em>{{quote.line}}</em> {{quote.author}}</p>'
    })
    .Class({
        constructor: [QuotesService, function SecondComponent(quotesService){
          this.quote = quotesService.getRandomQuote();
        }]
    });

    var AppComponent = Component({
        selector: 'my-app',
        template: `<h1>Angular - Wassup </h1>
                  <second></second>`
    })
    .Class({
        constructor: function AppComponent(){}
    });

    var AppModule = NgModule({
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

    platformBrowserDynamic.bootstrapModule(AppModule);

    var quotes = [
        {
          "line": "Walking on water and developing software from a specification are easy if both are frozen.",
          "author": "Edward V Berard"
        },
        {
          "line": "It always takes longer than you expect, even when you take into account Hofstadter's Law.",
          "author": "Hofstadter's Law"
        },
        {
          "line": "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
          "author": "Bill Gates"
        },
        {
          "line": "If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
          "author": "Edsger Dijkstra"
        },
        {
          "line": "The first 90% of the code accounts for the first 90% of the development time. The remaining 10% of the code accounts for the other 90% of the development time.",
          "author": "Tom Cargill"
        }
      ];
})();