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
var kategorije_service_1 = require("../services/kategorije.service");
var KategorijeComponent = (function () {
    function KategorijeComponent(jokesService) {
        this.jokesService = jokesService;
        this.jokes = [];
    }
    KategorijeComponent.prototype.getFoodJoke = function () {
        var _this = this;
        this.jokesService.getFoodJokes()
            .subscribe(function (joke) {
            _this.jokes.unshift(joke);
        });
    };
    KategorijeComponent.prototype.getMovieJoke = function () {
        var _this = this;
        this.jokesService.getMovieJokes()
            .subscribe(function (joke) {
            _this.jokes.unshift(joke);
        });
    };
    KategorijeComponent.prototype.getDevJoke = function () {
        var _this = this;
        this.jokesService.getDevJokes()
            .subscribe(function (joke) {
            _this.jokes.unshift(joke);
        });
    };
    return KategorijeComponent;
}());
KategorijeComponent = __decorate([
    core_1.Component({
        selector: 'kategorije',
        template: "\n  <ul>\n  <li *ngFor=\"let joke of jokes\">{{joke.value}}</li>\n  </ul>\n  <button (click)=\"getDevJoke()\">more Dev jokes</button>\n  <button (click)=\"getFoodJoke()\">more Food jokes</button>\n  <button (click)=\"getMovieJoke()\">more Movie jokes</button>",
        providers: [kategorije_service_1.KategorijeService]
    }),
    __metadata("design:paramtypes", [kategorije_service_1.KategorijeService])
], KategorijeComponent);
exports.KategorijeComponent = KategorijeComponent;
//# sourceMappingURL=kategorije.component.js.map