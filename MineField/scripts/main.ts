/// <reference path="typings/requirejs/require.d.ts" />
/// <reference path="typings/knockout/knockout.d.ts" />

(function () {

    requirejs.config(
        {
            baseUrl: "scripts",
            paths: {
                "knockout": "knockout-3.2.0",
                "models": "models",
                "bombservice": "bombservice"
                
            }
        }
        );

    require(['field'], function (field) {


    });

   
})();
