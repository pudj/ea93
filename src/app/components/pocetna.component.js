"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var random_service_1 = require("../services/random.service");
var PocetnaComponent = (function () {
    function PocetnaComponent(jokesService) {
        this.jokesService = jokesService;
        this.jokes = [];
    }
    PocetnaComponent.prototype.ngOnInit = function () {
        this.getJoke();
    };
    PocetnaComponent.prototype.getJoke = function () {
        var _this = this;
        this.jokesService.getRandomJokes()
            .subscribe(function (joke) {
            _this.jokes.unshift(joke);
        });
    };
    return PocetnaComponent;
}());
PocetnaComponent = __decorate([
    core_1.Component({
        selector: 'pocetna',
        template: "\n  <ul>\n  <li *ngFor=\"let joke of jokes\">{{joke.value}}</li>\n  </ul>\n  <button (click)=\"getJoke()\">more jokes</button>",
        providers: [random_service_1.RandomService]
    }),
    __metadata("design:paramtypes", [random_service_1.RandomService])
], PocetnaComponent);
exports.PocetnaComponent = PocetnaComponent;
//# sourceMappingURL=pocetna.component.js.map