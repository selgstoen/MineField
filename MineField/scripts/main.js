/// <reference path="typings/requirejs/require.d.ts" />
/// <reference path="typings/raphael/raphael.d.ts" />
/// <reference path="typings/knockout/knockout.d.ts" />
(function () {
    requirejs.config({
        baseUrl: "scripts",
        paths: {
            "knockout": "knockout-3.3.0",
            //"raphael": "raphael",
            "models": "models",
            "flipservice": "flipservice",
            "bombservice": "bombservice",
            "displayservice": "displayservice"
        }
    });
    require(['field'], function (field) {
    });
})();
