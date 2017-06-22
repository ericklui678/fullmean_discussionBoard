webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__topic_topic_component__ = __webpack_require__("../../../../../src/app/topic/topic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// remember to import components




var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'topic/:id', component: __WEBPACK_IMPORTED_MODULE_4__topic_topic_component__["a" /* TopicComponent */] },
    { path: 'user/:id', component: __WEBPACK_IMPORTED_MODULE_5__user_user_component__["a" /* UserComponent */] },
    { path: '**', redirectTo: '' },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper{\n  padding: 20px;\n  border: 3px solid black;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<head>\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/ng2-bootstrap/x.x.x/ng2-bootstrap.min.js\"></script>\n   <link href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css\" rel=\"stylesheet\">\n</head>\n<div class=\"wrapper\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__topic_topic_component__ = __webpack_require__("../../../../../src/app/topic/topic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_10__topic_topic_component__["a" /* TopicComponent */],
            __WEBPACK_IMPORTED_MODULE_11__user_user_component__["a" /* UserComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4_angular2_cookie_services_cookies_service__["CookieService"], __WEBPACK_IMPORTED_MODULE_7__http_service__["a" /* HttpService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".red{\n  color: red;\n}\ntd, th{\n  padding: 8px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Hello {{ name }} {{ userid }}</h2>\n<button (click)='logout()'>Logout</button>\n\n  <table>\n    <tr>\n      <th>Category</th>\n      <th>Topic</th>\n      <th>User Name</th>\n      <th>Posts</th>\n    </tr>\n    <tr *ngFor='let topic of topics'>\n      <td>{{ topic.category }}</td>\n      <td><a [routerLink]=\"['/topic/', topic._id]\">{{ topic.title }}</a></td>\n      <td><a [routerLink]=\"['/user/', topic._user._id]\">{{ topic._user.name }}</a></td>\n      <td>{{ topic.count }}</td>\n    </tr>\n  </table>\n<form #topicForm='ngForm' (submit)='onSubmit(topic_obj, topicForm)'>\n  Topic: <input type=\"text\" name=\"topic\"\n  [(ngModel)]='topic_obj.title'\n  #topic='ngModel'\n  required\n  minlength='5'>\n  <div *ngIf='topic.errors && (topic.touched || topicForm.submitted )' class='red'>\n    <div *ngIf='topic.errors.required'>Topic is required</div>\n    <div *ngIf='topic.errors.minlength'>Topic must be at least 5 characters</div>\n  </div>\n  <br>\n  Description: <textarea name=\"description \"rows=\"5\" cols=\"40\"\n  [(ngModel)]='topic_obj.text'\n  #description='ngModel'\n  required\n  minlength='5'></textarea>\n  <div *ngIf='description.errors && (description.touched || topicForm.submitted )' class='red'>\n    <div *ngIf='description.errors.required'>Description is required</div>\n    <div *ngIf='description.errors.minlength'>Description must be at least 5 characters</div>\n  </div>\n  <br>\n  Category: \n  <select name=\"category\"\n  [(ngModel)]='topic_obj.category'\n  required>\n    <option value=\"HTML\">HTML</option>\n    <option value=\"CSS\">CSS</option>\n    <option value=\"Python\">Python</option>\n    <option value=\"Django\">Django</option>\n    <option value=\"Javascript\">Javascript</option>\n  </select><br>\n  <input [disabled]='!topicForm.valid' type=\"submit\">\n</form>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__ = __webpack_require__("../../../../angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(_cookieService, _http, _router) {
        this._cookieService = _cookieService;
        this._http = _http;
        this._router = _router;
        this.topics = [];
        this.name = this._cookieService.get('username');
        this.userid = this._cookieService.get('userid');
        this.topic_obj = {
            title: '',
            text: '',
            category: '',
            username: '',
            _user: ''
        };
    }
    DashboardComponent.prototype.onSubmit = function (topic, form) {
        var _this = this;
        topic._user = this.userid;
        this._http.passTopic(topic)
            .then(function (obj) {
            form.resetForm();
            _this._http.getTopic()
                .then(function (obj) {
                _this.topics = obj;
            })
                .catch(function (err) { console.log(err); });
        })
            .catch(function (err) { console.log(err); });
    };
    DashboardComponent.prototype.logout = function () {
        this._cookieService.remove('username');
        this._router.navigate(['']);
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this._cookieService.get('username')) {
            this._router.navigate(['']);
        }
        this._http.getTopic()
            .then(function (obj) {
            _this.topics = obj;
        })
            .catch(function (err) { console.log(err); });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _c || Object])
], DashboardComponent);

var _a, _b, _c;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_cookie_core__ = __webpack_require__("../../../../angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpService = (function () {
    function HttpService(_http, _cookieService) {
        this._http = _http;
        this._cookieService = _cookieService;
    }
    HttpService.prototype.passName = function (name) {
        return this._http.post('/name', name)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.passTopic = function (topic) {
        return this._http.post('/topic', topic)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.getTopic = function () {
        return this._http.get('/topics/show')
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.getTopicFromID = function (topic_id) {
        return this._http.get('/topic/' + topic_id)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.passPost = function (post) {
        return this._http.post('/post', post)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.showTopic = function (topic_id) {
        return this._http.get('/topicAll/' + topic_id)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.passComment = function (comment) {
        return this._http.post('/comment', comment)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.getUserInfo = function (user_id) {
        return this._http.get('/user/' + user_id)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.incrUserPost = function (user) {
        return this._http.post('/addpost', user)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.incrUserComment = function (user) {
        console.log('SERVICE:', user);
        return this._http.post('/addcomment', user)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    return HttpService;
}());
HttpService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0_angular2_cookie_core__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_angular2_cookie_core__["CookieService"]) === "function" && _b || Object])
], HttpService);

var _a, _b;
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".red{\n  color: red;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Login</h2>\n<form #regForm='ngForm' (submit)='onSubmit(first_name, regForm)'>\n  <input type=\"text\" name=\"name\" placeholder=\"First name\"\n  [(ngModel)] = 'first_name'\n  #name = 'ngModel'\n  required\n  minlength='2'>\n  <input [disabled]='!regForm.valid' type=\"submit\">\n</form>\n<div *ngIf='name.errors && (name.touched || regForm.submitted )' class='red'>\n  <div *ngIf='name.errors.required'>Name is required</div>\n  <div *ngIf='name.errors.minlength'>Name must be at least 2 characters</div>\n</div>\n<div class='red'>{{ err }}</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__ = __webpack_require__("../../../../angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(_http, _cookieService, _router) {
        this._http = _http;
        this._cookieService = _cookieService;
        this._router = _router;
        this.first_name = '';
        this.err = '';
    }
    LoginComponent.prototype.onSubmit = function (name, form) {
        var _this = this;
        this._http.passName({ name: name })
            .then(function (obj) {
            if (obj) {
                _this._cookieService.put('userid', obj._id);
                _this._cookieService.put('username', obj.name);
                _this._router.navigate(['dashboard']);
            }
        })
            .catch(function (err) { console.log(err); });
        form.resetForm();
    };
    LoginComponent.prototype.ngOnInit = function () {
        if (this._cookieService.get('username')) {
            this._router.navigate(['dashboard']);
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/topic/topic.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".red{\n  color: red;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/topic/topic.component.html":
/***/ (function(module, exports) {

module.exports = "<h1> {{ topics.username }} posted a topic</h1>\n<h2>Topic: {{ topics.title }}</h2>\n<h3>Description: {{ topics.text }}</h3>\n<h4>Post your answer here</h4>\n<form #postForm='ngForm' (submit)='onSubmit(post, postForm)'>\n  <textarea name=\"answer\" rows=\"4\" cols=\"80\"\n  [(ngModel)]='post.text'\n  #answer='ngModel'\n  required\n  minlength='5'></textarea><br>\n  <input [disabled]='!postForm.valid' type=\"submit\">\n</form>\n<div *ngIf='answer.errors && (answer.touched || postForm.submitted )' class='red'>\n  <div *ngIf='answer.errors.required'>Post is required</div>\n  <div *ngIf='answer.errors.minlength'>Post must be at least 5 characters</div>\n</div>\n\n<div *ngFor='let post of posts'>\n  <h3><a [routerLink]=\"['/user', post._user._id]\">{{ post._user.name }}</a>: {{ post.text }}\n  (Votes: {{ post.vote }})</h3><br>\n  <div *ngFor='let comment of post.comments'>\n    <a [routerLink]=\"['/user', comment._user._id]\">{{ comment._user.name }}</a> {{ comment.text }}\n  </div>\n  <form #commentForm='ngForm' (submit)='commentSubmit(comment.value, post._id, commentForm)'>\n    <textarea name=\"comment\" cols=\"40\" rows=\"3\"\n    required\n    minlength='5'\n    #comment\n    ></textarea><br>\n    <input [disabled]='!commentForm.valid' type=\"submit\" value=\"Comment\">\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/topic/topic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__ = __webpack_require__("../../../../angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TopicComponent = (function () {
    function TopicComponent(_route, _cookieService, _http) {
        var _this = this;
        this._route = _route;
        this._cookieService = _cookieService;
        this._http = _http;
        this.comment_obj = {
            text: '',
            _post: '',
            _user: '',
        };
        this.topic_id = '';
        this.topics = {
            title: '',
            text: '',
            category: '',
            username: '',
            _user: '',
            count: 0
        };
        this.post = {
            text: '',
            _topic: '',
            _user: '',
        };
        this.posts = [];
        this._route.params.subscribe(function (param) {
            _this._http.getTopicFromID(param.id)
                .then(function (obj) {
                _this.topic_id = param.id;
                _this.topics = obj[0];
                _this._http.showTopic(_this.topic_id)
                    .then(function (data) {
                    _this.posts = data.posts;
                })
                    .catch(function (err) { console.log('some error'); });
            })
                .catch(function (err) { console.log(err); });
        });
    }
    TopicComponent.prototype.onSubmit = function (post, form) {
        var _this = this;
        post._topic = this.topic_id;
        post._user = this._cookieService.get('userid');
        this._http.incrUserPost({ id: post._user })
            .then(function (obj) {
            console.log('Received from IncrUserPost', obj);
        })
            .catch(function (err) { console.log(err); });
        this._http.passPost(post)
            .then(function (obj) {
            form.resetForm();
            _this._http.showTopic(_this.topic_id)
                .then(function (data) {
                _this.posts = data.posts;
            })
                .catch(function (err) { console.log('some error'); });
        })
            .catch(function (err) { console.log(err); });
    };
    TopicComponent.prototype.commentSubmit = function (comment, post_id, form) {
        var _this = this;
        this.comment_obj.text = comment;
        this.comment_obj._post = post_id;
        this.comment_obj._user = this._cookieService.get('userid');
        this._http.passComment(this.comment_obj)
            .then(function (data) {
            _this._http.showTopic(_this.topic_id)
                .then(function (obj) {
                _this.posts = obj.posts;
            })
                .catch(function (err) { console.log('some error'); });
        })
            .catch(function (err) { console.log(err); });
        form.resetForm();
        this._http.incrUserComment({ id: this._cookieService.get('userid') })
            .then(function (obj) {
            console.log(obj);
        })
            .catch(function (err) { console.log(err); });
    };
    return TopicComponent;
}());
TopicComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-topic',
        template: __webpack_require__("../../../../../src/app/topic/topic.component.html"),
        styles: [__webpack_require__("../../../../../src/app/topic/topic.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_http_service__["a" /* HttpService */]) === "function" && _c || Object])
], TopicComponent);

var _a, _b, _c;
// comment_obj = {
//     text: '',
//     _post: '',
//     _user: '',
//     _topic: '',
//   } 
//# sourceMappingURL=topic.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{ user.name }}</h1>\n<h3>Topic Count: {{ user.tCount }}</h3>\n<h3>Post Count: {{ user.pCount }}</h3>\n<h3>Comment Count: {{ user.cCount }}</h3>"

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserComponent = (function () {
    function UserComponent(_http, _router) {
        var _this = this;
        this._http = _http;
        this._router = _router;
        this.user = {
            name: '',
            tCount: 0,
            pCount: 0,
            cCount: 0,
        };
        this._router.params.subscribe(function (param) {
            console.log(param.id);
            _this._http.getUserInfo(param.id)
                .then(function (obj) {
                _this.user = obj[0];
            })
                .catch(function (err) { console.log(err); });
        });
    }
    return UserComponent;
}());
UserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user',
        template: __webpack_require__("../../../../../src/app/user/user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/user.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], UserComponent);

var _a, _b;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map