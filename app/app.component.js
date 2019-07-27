(function(app) {
    var Component = ng.core.Component;

    app.AppComponent = Component({
        selector: 'my-app',
        template: `<h1>Angular - Wassup </h1>
                  <second></second>`
    })
    .Class({
        constructor: function AppComponent(){}
    });

})(window.app || (window.app = {}));