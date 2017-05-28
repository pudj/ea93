"use strict";
var router_1 = require("@angular/router");
var pocetna_component_1 = require("./components/pocetna.component");
var kategorije_component_1 = require("./components/kategorije.component");
var pretraga_component_1 = require("./components/pretraga.component");
var appRoutes = [
    {
        path: 'pocetna',
        component: pocetna_component_1.PocetnaComponent
    },
    {
        path: 'kategorije',
        component: kategorije_component_1.KategorijeComponent
    },
    {
        path: 'pretraga',
        component: pretraga_component_1.PretragaComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map