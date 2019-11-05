require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js?!./platform.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "TextField {\n  border-width: 1;\n  border-color: black;\n}", ""]);



/***/ }),

/***/ "./app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "gr-main",
            template: "<page-router-outlet></page-router-outlet>"
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__("../node_modules/css-loader/dist/cjs.js?!./platform.css"), "");

// Module
exports.push([module.i, "Page {\n  font-size: 15;\n  background-color: black;\n}\nActionBar {\n  background-color: black;\n  color: white;\n}\nTextField {\n  padding: 10;\n  font-size: 13;\n}\n.line-through {\n  text-decoration: line-through;\n}\n", ""]);

;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-angular/nativescript.module.js");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-angular/http-client/index.js");
/* harmony import */ var nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./shared/index.ts");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./login/login.module.ts");
/* harmony import */ var _groceries_groceries_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./groceries/groceries.module.ts");









Object(_shared__WEBPACK_IMPORTED_MODULE_6__["setStatusBarColors"])();
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            providers: [
                _shared__WEBPACK_IMPORTED_MODULE_6__["BackendService"],
                _shared__WEBPACK_IMPORTED_MODULE_6__["LoginService"],
                _app_routing__WEBPACK_IMPORTED_MODULE_4__["authProviders"]
            ],
            imports: [
                nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_0__["NativeScriptModule"],
                nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_2__["NativeScriptHttpClientModule"],
                nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__["NativeScriptRouterModule"],
                nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__["NativeScriptRouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_4__["appRoutes"]),
                _login_login_module__WEBPACK_IMPORTED_MODULE_7__["LoginModule"],
                _groceries_groceries_module__WEBPACK_IMPORTED_MODULE_8__["GroceriesModule"],
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authProviders", function() { return authProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./auth-guard.service.ts");

var authProviders = [
    _auth_guard_service__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]
];
var appRoutes = [
    { path: "", redirectTo: "/groceries", pathMatch: "full" }
];


/***/ }),

/***/ "./auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./shared/backend.service.ts");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (_shared_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"].isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(["/login"]);
            return false;
        }
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./groceries/groceries-common.css":
/***/ (function(module, exports) {

module.exports = ".background {\n  background-image: url(\"res://bg_inner\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n\n.action-bar-custom {\n  color: white;\n  margin-top: 26;\n  margin-bottom: 16;\n}\n.action-bar-custom Label {\n  font-size: 21;\n  font-weight: bold;\n}\n.action-bar-custom GridLayout {\n  height: 40;\n  padding-left: 15;\n  padding-right: 15;\n}\n.action-bar-custom GridLayout Image {\n  vertical-align: center;\n}\n\n.add-bar {\n  background-color: #CB1D00;\n  padding-left: 16;\n  padding-right: 16;\n  height: 50;\n}\n.add-bar-image-container {\n  height: 50;\n  vertical-align: center;\n  margin-left: -15;\n  padding-left: 15;\n  padding-right: 13;\n}\n.add-bar Image {\n  height: 20;\n}\nTextField {\n  color: white;\n  placeholder-color: white;\n  background-color: transparent;\n  font-size: 15;\n  border-width: 0;\n  padding: 0;\n  margin-left: 1;\n}\n.add-bar-recent-label {\n  vertical-align: center;\n  color: #311217;\n}\n.add-bar-recent-container {\n  height: 50;\n  padding-left: 10;\n  padding-right: 10;\n  margin-right: -10;\n  vertical-align: center;\n}\n.add-bar-recent-toggle {\n  color: #311217;\n}\n\nActivityIndicator {\n  horizontal-align: center;\n  vertical-align: center;\n}\n"

/***/ }),

/***/ "./groceries/groceries.component.css":
/***/ (function(module, exports) {

module.exports = ".action-bar-custom {\n  margin-top: 12;\n}\n"

/***/ }),

/***/ "./groceries/groceries.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout #container\n  class=\"background\"\n  rows=\"auto, auto, *\">\n\n  <!-- Row 1: The custom action bar -->\n  <GridLayout\n    row=\"0\"\n    columns=\"44, *, auto\"\n    class=\"action-bar-custom\">\n    <Label\n      col=\"1\"\n      text=\"Groceries\"></Label>\n    \n    <!-- Wrap the image in a StackLayout to give it a bigger tap target -->\n    <GridLayout\n      col=\"2\"\n      (tap)=\"showMenu()\">\n      <Image\n        src=\"res://menu\"\n        stretch=\"none\"></Image>\n    </GridLayout>\n  </GridLayout>\n\n  <!-- Row 2: The text field to add groceries, and recent button -->\n  <GridLayout\n    row=\"1\"\n    columns=\"auto, *, auto\"\n    [backgroundColor]=\"isShowingRecent ? '#BBC169' : '#CB1D00'\"\n    class=\"add-bar\">\n    <StackLayout\n      class=\"add-bar-image-container\"\n      col=\"0\"\n      (tap)=\"add('button')\">\n      <Image\n        col=\"0\"\n        [src]=\"isShowingRecent ? 'res://recent' : 'res://add'\"></Image>\n    </StackLayout>\n    <TextField #groceryTextField\n      col=\"1\"\n      [(ngModel)]=\"grocery\"\n      (loaded)=\"handleAndroidFocus(groceryTextField, container)\"\n      [hint]=\"isAndroid ? 'ADD A GROCERY' : 'Add a grocery'\"\n      returnKeyType=\"done\"\n      *ngIf=\"!isShowingRecent\"\n      (returnPress)=\"add('textfield')\"></TextField>\n    <Label\n      col=\"1\"\n      text=\"Recent items\"\n      *ngIf=\"isShowingRecent\"\n      class=\"add-bar-recent-label\"></Label>\n   <StackLayout\n     col=\"2\"\n     class=\"add-bar-recent-container\"\n     (tap)=\"toggleRecent()\">\n     <Label\n       class=\"add-bar-recent-toggle\"\n       [text]=\"isShowingRecent ? 'Done' : 'Recent'\"></Label>\n    </StackLayout>\n  </GridLayout>\n\n  <!-- Row 3: The grocery list -->\n  <gr-grocery-list\n    [row]=\"2\"\n    (loading)=\"showActivityIndicator()\"\n    (loaded)=\"hideActivityIndicator()\"\n    [showDeleted]=\"isShowingRecent\"></gr-grocery-list>\n\n  <ActivityIndicator\n    [busy]=\"isLoading\"\n    row=\"2\"></ActivityIndicator>\n\n</GridLayout>\n"

/***/ }),

/***/ "./groceries/groceries.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroceriesComponent", function() { return GroceriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/tns-core-modules/ui/dialogs/dialogs.js");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/tns-core-modules/ui/page/page.js");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nativescript_social_share__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/nativescript-social-share/social-share.js");
/* harmony import */ var nativescript_social_share__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_social_share__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./groceries/shared/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./shared/index.ts");







var GroceriesComponent = /** @class */ (function () {
    function GroceriesComponent(router, store, loginService, page) {
        this.router = router;
        this.store = store;
        this.loginService = loginService;
        this.page = page;
        this.grocery = "";
        this.isShowingRecent = false;
        this.isLoading = false;
    }
    GroceriesComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    // Prevent the first textfield from receiving focus on Android
    // See http://stackoverflow.com/questions/5056734/android-force-edittext-to-remove-focus
    GroceriesComponent.prototype.handleAndroidFocus = function (textField, container) {
        if (container.android) {
            container.android.setFocusableInTouchMode(true);
            container.android.setFocusable(true);
            textField.android.clearFocus();
        }
    };
    GroceriesComponent.prototype.showActivityIndicator = function () {
        this.isLoading = true;
    };
    GroceriesComponent.prototype.hideActivityIndicator = function () {
        this.isLoading = false;
    };
    GroceriesComponent.prototype.add = function (target) {
        var _this = this;
        // If showing recent groceries the add button should do nothing.
        if (this.isShowingRecent) {
            return;
        }
        var textField = this.groceryTextField.nativeElement;
        if (this.grocery.trim() === "") {
            // If the user clicked the add button, and the textfield is empty,
            // focus the text field and return.
            if (target === "button") {
                textField.focus();
            }
            else {
                // If the user clicked return with an empty text field show an error.
                Object(_shared__WEBPACK_IMPORTED_MODULE_6__["alert"])("Enter a grocery item");
            }
            return;
        }
        // Dismiss the keyboard
        // TODO: Is it better UX to dismiss the keyboard, or leave it up so the
        // user can continue to add more groceries?
        textField.dismissSoftInput();
        this.showActivityIndicator();
        this.store.add(this.grocery)
            .subscribe(function () {
            _this.grocery = "";
            _this.hideActivityIndicator();
        }, function () {
            Object(_shared__WEBPACK_IMPORTED_MODULE_6__["alert"])("An error occurred while adding an item to your list.");
            _this.hideActivityIndicator();
        });
    };
    GroceriesComponent.prototype.toggleRecent = function () {
        this.isShowingRecent = !this.isShowingRecent;
    };
    GroceriesComponent.prototype.showMenu = function () {
        var _this = this;
        Object(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_2__["action"])({
            message: "What would you like to do?",
            actions: ["Share", "Log Off"],
            cancelButtonText: "Cancel"
        }).then(function (result) {
            if (result === "Share") {
                _this.share();
            }
            else if (result === "Log Off") {
                _this.logoff();
            }
        });
    };
    GroceriesComponent.prototype.share = function () {
        var items = this.store.items.value;
        var list = [];
        for (var i = 0, size = items.length; i < size; i++) {
            list.push(items[i].name);
        }
        nativescript_social_share__WEBPACK_IMPORTED_MODULE_4__["shareText"](list.join(", ").trim());
    };
    GroceriesComponent.prototype.logoff = function () {
        this.loginService.logoff();
        this.router.navigate(["/login"]);
    };
    GroceriesComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _shared__WEBPACK_IMPORTED_MODULE_5__["GroceryService"] },
        { type: _shared__WEBPACK_IMPORTED_MODULE_6__["LoginService"] },
        { type: tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_3__["Page"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("groceryTextField", { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], GroceriesComponent.prototype, "groceryTextField", void 0);
    GroceriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "gr-groceries",
            template: __webpack_require__("./groceries/groceries.component.html"),
            providers: [_shared__WEBPACK_IMPORTED_MODULE_5__["GroceryService"]],
            styles: [__webpack_require__("./groceries/groceries-common.css"), __webpack_require__("./groceries/groceries.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared__WEBPACK_IMPORTED_MODULE_5__["GroceryService"],
            _shared__WEBPACK_IMPORTED_MODULE_6__["LoginService"],
            tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_3__["Page"]])
    ], GroceriesComponent);
    return GroceriesComponent;
}());



/***/ }),

/***/ "./groceries/groceries.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroceriesModule", function() { return GroceriesModule; });
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-angular/common.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/forms/index.js");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _groceries_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./groceries/groceries.routing.ts");
/* harmony import */ var _groceries_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./groceries/groceries.component.ts");
/* harmony import */ var _grocery_list_grocery_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./groceries/grocery-list/grocery-list.component.ts");
/* harmony import */ var _grocery_list_item_status_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./groceries/grocery-list/item-status.pipe.ts");







var GroceriesModule = /** @class */ (function () {
    function GroceriesModule() {
    }
    GroceriesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NativeScriptFormsModule"],
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_0__["NativeScriptCommonModule"],
                _groceries_routing__WEBPACK_IMPORTED_MODULE_3__["groceriesRouting"],
            ],
            declarations: [
                _groceries_component__WEBPACK_IMPORTED_MODULE_4__["GroceriesComponent"],
                _grocery_list_grocery_list_component__WEBPACK_IMPORTED_MODULE_5__["GroceryListComponent"],
                _grocery_list_item_status_pipe__WEBPACK_IMPORTED_MODULE_6__["ItemStatusPipe"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]]
        })
    ], GroceriesModule);
    return GroceriesModule;
}());



/***/ }),

/***/ "./groceries/groceries.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groceriesRouting", function() { return groceriesRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _groceries_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./groceries/groceries.component.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./auth-guard.service.ts");



var groceriesRoutes = [
    { path: "groceries", component: _groceries_component__WEBPACK_IMPORTED_MODULE_1__["GroceriesComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
];
var groceriesRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(groceriesRoutes);


/***/ }),

/***/ "./groceries/grocery-list/grocery-list.component.css":
/***/ (function(module, exports) {

module.exports = "ListView {\n  background-color: transparent;\n  opacity: 0;\n}\n.visible {\n  animation-name: show;\n  animation-duration: 1s;\n  animation-fill-mode: forwards;\n}\n@keyframes show {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}\n.container {\n  background-color: white;\n  margin-top: 1;\n}\n.tap-target {\n  padding-top: 13;\n  padding-bottom: 13;\n  padding-left: 16;\n}\n.tap-target Label {\n  min-width: 200;\n}\n.check-box {\n  margin-right: 10;\n  height: 20;\n}\n.delete-container {\n  padding: 10 15;\n  vertical-align: middle;\n}\n.delete-container StackLayout {\n  padding: 5;\n}\n.delete-container Image {\n  height: 20;\n}\n"

/***/ }),

/***/ "./groceries/grocery-list/grocery-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ListView\n  [row]=\"row\"\n  [class.visible]=\"listLoaded\"\n  [items]=\"store.items | async | itemStatus:showDeleted\"\n  (itemLoading)=\"makeBackgroundTransparent($event)\" >\n  <ng-template let-item=\"item\">\n    <GridLayout\n      columns=\"*, auto\"\n      class=\"container\"\n      [opacity]=\"item.done ? '0.8' : '1'\">\n      <!-- Wrap in containers for bigger tap targets -->\n      <StackLayout\n        col=\"0\"\n        orientation=\"horizontal\"\n        class=\"tap-target\"\n        (tap)=\"toggleDone(item)\">\n        <Image\n          [src]=\"imageSource(item)\"\n          class=\"check-box\"></Image>\n        <Label\n          [text]=\"item.name\"\n          [class.line-through]=\"item.done && !item.deleted\"></Label>\n      </StackLayout>\n      <GridLayout\n        col=\"1\"\n        class=\"delete-container\"\n        (tap)=\"delete(item)\">\n        <StackLayout>\n          <Image src=\"res://delete\"></Image>\n        </StackLayout>\n      </GridLayout>\n    </GridLayout>\n  </ng-template>\n</ListView>"

/***/ }),

/***/ "./groceries/grocery-list/grocery-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroceryListComponent", function() { return GroceryListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./groceries/shared/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./shared/index.ts");



var GroceryListComponent = /** @class */ (function () {
    function GroceryListComponent(store) {
        this.loading = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.listLoaded = false;
        this.store = store;
    }
    GroceryListComponent.prototype.ngAfterViewInit = function () {
        this.load();
    };
    GroceryListComponent.prototype.load = function () {
        var _this = this;
        this.loading.next("");
        this.store.load()
            .subscribe(function () {
            _this.loaded.next("");
            _this.listLoaded = true;
        }, function () {
            Object(_shared__WEBPACK_IMPORTED_MODULE_2__["alert"])("An error occurred loading your grocery list.");
        });
    };
    // The following trick makes the background color of each cell
    // in the UITableView transparent as it’s created.
    GroceryListComponent.prototype.makeBackgroundTransparent = function (args) {
        var cell = args.ios;
        if (cell) {
            // support XCode 8
            cell.backgroundColor = UIColor.clearColor;
        }
    };
    GroceryListComponent.prototype.imageSource = function (grocery) {
        if (grocery.deleted) {
            return "res://add";
        }
        return grocery.done ? "res://checked" : "res://unchecked";
    };
    GroceryListComponent.prototype.toggleDone = function (grocery) {
        if (grocery.deleted) {
            this.store.unsetDeleteFlag(grocery)
                .subscribe(function () { }, function () {
                Object(_shared__WEBPACK_IMPORTED_MODULE_2__["alert"])("An error occurred managing your grocery list.");
            });
        }
        else {
            this.store.toggleDoneFlag(grocery)
                .subscribe(function () { }, function () {
                Object(_shared__WEBPACK_IMPORTED_MODULE_2__["alert"])("An error occurred managing your grocery list.");
            });
        }
    };
    GroceryListComponent.prototype.delete = function (grocery) {
        var _this = this;
        this.loading.next("");
        var successHandler = function () { return _this.loaded.next(""); };
        var errorHandler = function () {
            Object(_shared__WEBPACK_IMPORTED_MODULE_2__["alert"])("An error occurred while deleting an item from your list.");
            _this.loaded.next("");
        };
        if (grocery.deleted) {
            this.store.permanentlyDelete(grocery)
                .subscribe(successHandler, errorHandler);
        }
        else {
            this.store.setDeleteFlag(grocery)
                .subscribe(successHandler, errorHandler);
        }
    };
    GroceryListComponent.ctorParameters = function () { return [
        { type: _shared__WEBPACK_IMPORTED_MODULE_1__["GroceryService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], GroceryListComponent.prototype, "showDeleted", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GroceryListComponent.prototype, "row", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], GroceryListComponent.prototype, "loading", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], GroceryListComponent.prototype, "loaded", void 0);
    GroceryListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "gr-grocery-list",
            template: __webpack_require__("./groceries/grocery-list/grocery-list.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__("./groceries/grocery-list/grocery-list.component.css")]
        }),
        __metadata("design:paramtypes", [_shared__WEBPACK_IMPORTED_MODULE_1__["GroceryService"]])
    ], GroceryListComponent);
    return GroceryListComponent;
}());



/***/ }),

/***/ "./groceries/grocery-list/item-status.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemStatusPipe", function() { return ItemStatusPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");

var ItemStatusPipe = /** @class */ (function () {
    function ItemStatusPipe() {
        this.value = [];
    }
    ItemStatusPipe.prototype.transform = function (items, deleted) {
        if (items instanceof Array) {
            this.value = items.filter(function (grocery) {
                return grocery.deleted === deleted;
            });
        }
        return this.value;
    };
    ItemStatusPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: "itemStatus"
        })
    ], ItemStatusPipe);
    return ItemStatusPipe;
}());



/***/ }),

/***/ "./groceries/shared/grocery.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grocery", function() { return Grocery; });
var Grocery = /** @class */ (function () {
    function Grocery(id, name, done, deleted) {
        this.id = id;
        this.name = name;
        this.done = done;
        this.deleted = deleted;
    }
    Grocery.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: Boolean },
        { type: Boolean }
    ]; };
    return Grocery;
}());



/***/ }),

/***/ "./groceries/shared/grocery.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroceryService", function() { return GroceryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./shared/index.ts");
/* harmony import */ var _grocery_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./groceries/shared/grocery.model.ts");






var GroceryService = /** @class */ (function () {
    function GroceryService(http, zone) {
        this.http = http;
        this.zone = zone;
        this.items = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.allItems = [];
        this.baseUrl = _shared__WEBPACK_IMPORTED_MODULE_4__["BackendService"].baseUrl + "appdata/" + _shared__WEBPACK_IMPORTED_MODULE_4__["BackendService"].appKey + "/Groceries";
    }
    GroceryService.prototype.load = function () {
        var _this = this;
        return this.http.get(this.baseUrl, {
            headers: this.getCommonHeaders()
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            _this.allItems = data
                .sort(function (a, b) {
                return a._kmd.lmt > b._kmd.lmt ? -1 : 1;
            })
                .map(function (grocery) { return new _grocery_model__WEBPACK_IMPORTED_MODULE_5__["Grocery"](grocery._id, grocery.Name, grocery.Done || false, grocery.Deleted || false); });
            _this.publishUpdates();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleErrors));
    };
    GroceryService.prototype.add = function (name) {
        var _this = this;
        return this.http.post(this.baseUrl, JSON.stringify({ Name: name }), { headers: this.getCommonHeaders() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            _this.allItems.unshift(new _grocery_model__WEBPACK_IMPORTED_MODULE_5__["Grocery"](data._id, name, false, false));
            _this.publishUpdates();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleErrors));
    };
    GroceryService.prototype.setDeleteFlag = function (item) {
        var _this = this;
        item.deleted = true;
        return this.put(item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            item.done = false;
            _this.publishUpdates();
        }));
    };
    GroceryService.prototype.unsetDeleteFlag = function (item) {
        var _this = this;
        item.deleted = false;
        return this.put(item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            item.done = false;
            _this.publishUpdates();
        }));
    };
    GroceryService.prototype.toggleDoneFlag = function (item) {
        item.done = !item.done;
        this.publishUpdates();
        return this.put(item);
    };
    GroceryService.prototype.permanentlyDelete = function (item) {
        var _this = this;
        return this.http
            .delete(this.baseUrl + "/" + item.id, { headers: this.getCommonHeaders() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            var index = _this.allItems.indexOf(item);
            _this.allItems.splice(index, 1);
            _this.publishUpdates();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleErrors));
    };
    GroceryService.prototype.put = function (grocery) {
        return this.http.put(this.baseUrl + "/" + grocery.id, JSON.stringify({
            Name: grocery.name,
            Done: grocery.done,
            Deleted: grocery.deleted
        }), { headers: this.getCommonHeaders() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleErrors));
    };
    GroceryService.prototype.publishUpdates = function () {
        var _this = this;
        // Make sure all updates are published inside NgZone so that change detection is triggered if needed
        this.zone.run(function () {
            // must emit a *new* value (immutability!)
            _this.items.next(_this.allItems.slice());
        });
    };
    GroceryService.prototype.getCommonHeaders = function () {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            "Content-Type": "application/json",
            "Authorization": "Kinvey " + _shared__WEBPACK_IMPORTED_MODULE_4__["BackendService"].token,
        });
    };
    GroceryService.prototype.handleErrors = function (error) {
        console.log(error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
    };
    GroceryService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
    GroceryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], GroceryService);
    return GroceryService;
}());



/***/ }),

/***/ "./groceries/shared/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _grocery_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./groceries/shared/grocery.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroceryService", function() { return _grocery_service__WEBPACK_IMPORTED_MODULE_0__["GroceryService"]; });

/* harmony import */ var _grocery_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./groceries/shared/grocery.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Grocery", function() { return _grocery_model__WEBPACK_IMPORTED_MODULE_1__["Grocery"]; });





/***/ }),

/***/ "./login/login-common.css":
/***/ (function(module, exports) {

module.exports = "/* Hide a bunch of things to setup the initial animations */\n.form-controls, .sign-up-stack {\n  opacity: 0;\n}\n\n.background {\n  background-image: url(\"res://bg_login\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n/* TODO: Assigning explicit heights and applying this margin shouldn’t be necessary. */\n.initial-container {\n  margin-top: 170;\n}\n.initial-logo {\n  horizontal-align: center;\n  margin-bottom: 10;\n}\n.initial-label {\n  color: white;\n  horizontal-align: center;\n  margin-bottom: 80;\n}\n.initial-button {\n  background-color: white;\n  color: #CB1D00;\n  height: 45;\n  width: 275;\n  vertical-align: center;\n}\n.initial-button-label {\n  horizontal-align: center;\n  font-weight: bold;\n}\n\n.main-container {\n  visibility: collapse;\n  opacity: 0;\n  margin-left: 30;\n  margin-right: 30;\n  background-color: white;\n}\n.main-label {\n  horizontal-align: center;\n  color: black;\n}\n\nImage {\n  margin-top: 5;\n  margin-bottom: 20;\n}\nButton, TextField {\n  margin-left: 16;\n  margin-right: 16;\n  margin-bottom: 10;\n}\nTextField {\n  color: black;\n  placeholder-color: #ACA6A7;\n}\nTextField.light {\n  color: #C4AFB4;\n  placeholder-color: #C4AFB4;\n}\n.submit-button {\n  background-color: #CB1D00;\n  color: white;\n  margin-top: 20;\n}\n\n.forgot-password-label {\n  font-size: 13;\n  margin-left: 20;\n  margin-bottom: 45;\n  color: black;\n}\n.sign-up-stack {\n  background-color: #311217;\n}\n.sign-up-stack Label {\n  color: white;\n  text-align: center;\n  font-size: 15;\n}\n\n.logo-container {\n  visibility: collapse;\n  horizontal-align: center;\n  opacity: 0;\n}\n"

/***/ }),

/***/ "./login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".main-container {\n  height: 425;\n  width: 300;\n}\n.initial-label {\n  font-size: 40;\n  letter-spacing: 0.2;\n}\n.main-label {\n  color: #311217;\n  font-size: 32;\n  margin-top: 45;\n  margin-bottom: 52;\n  letter-spacing: 0.2;\n}\nTextField {\n  border-width: 1;\n  border-color: #6E595C;\n  margin-bottom: 20;\n}\n.submit-button {\n  height: 40;\n  margin-top: 15;\n}\n.sign-up-stack Label {\n  height: 48;\n}\n\n/* A height of zero ensures that the AbsoluteLayout container doesn’t steal taps\nfrom the various button and text field controls that sit behind it. */\n.logo-container {\n  height: 0;\n}\n.logo-container Image {\n  top: -250;\n}"

/***/ }),

/***/ "./login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout>\n\n  <GridLayout #background\n    scaleX=\"1.4\"\n    scaleY=\"1.4\"\n    class=\"background\"\n    (loaded)=\"startBackgroundAnimation(background)\"></GridLayout>\n\n  <StackLayout #initialContainer\n    class=\"initial-container\">\n    <Image\n      src=\"res://logo_login\"\n      stretch=\"none\"\n      class=\"initial-logo\"></Image>\n    <Label\n      text=\"GROCERIES\"\n      class=\"initial-label\"></Label>\n    <StackLayout\n      (tap)=\"showMainContent()\"\n      class=\"initial-button\">\n      <Label\n        text=\"Login\"\n        class=\"initial-button-label\"></Label>\n    </StackLayout>\n  </StackLayout>\n\n  <StackLayout #mainContainer\n    class=\"main-container\">\n    <Label\n      class=\"main-label\"\n      text=\"GROCERIES\"\n      [color]=\"isLoggingIn? 'black' : 'white'\"></Label>\n\n    <GridLayout #formControls\n      class=\"form-controls\"\n      rows=\"auto, auto\"\n      translateY=\"50\">\n      <TextField\n        hint=\"Email Address\"\n        keyboardType=\"email\"\n        returnKeyType=\"next\"\n        (returnPress)=\"focusPassword()\"\n        [(ngModel)]=\"user.email\"\n        [isEnabled]=\"!isAuthenticating\"\n        autocorrect=\"false\"\n        autocapitalizationType=\"none\"\n        [class.light]=\"!isLoggingIn\"\n        row=\"0\"></TextField>\n      <TextField #password\n        hint=\"Password\"\n        secure=\"true\"\n        returnKeyType=\"done\"\n        (returnPress)=\"submit()\"\n        [(ngModel)]=\"user.password\"\n        [isEnabled]=\"!isAuthenticating\"\n        [class.light]=\"!isLoggingIn\"\n        row=\"1\"></TextField>\n\n      <ActivityIndicator\n        [busy]=\"isAuthenticating\"\n        rowSpan=\"2\"></ActivityIndicator>\n    </GridLayout>\n\n    <Button\n      [text]=\"isLoggingIn ? 'Login' : 'Sign up'\"\n      [isEnabled]=\"!isAuthenticating\"\n      class=\"submit-button\"\n      (tap)=\"submit()\"></Button>\n\n    <Label\n      class=\"forgot-password-label\"\n      text=\"Forgot password?\"\n      (tap)=\"forgotPassword()\"\n      [visibility]=\"isLoggingIn ? 'visible' : 'hidden'\"></Label>\n\n    <StackLayout #signUpStack\n      class=\"sign-up-stack\"\n      (tap)=\"toggleDisplay()\"\n      translateY=\"50\">\n      <Label\n        [text]=\"isLoggingIn ? 'Sign up here' : 'Back to login'\"></Label>\n    </StackLayout>\n  </StackLayout>\n\n  <!-- The fruit logo that appears within the container -->\n  <AbsoluteLayout #logoContainer\n    class=\"logo-container\">\n    <Image\n      src=\"res://logo_login\"\n      stretch=\"none\"></Image>\n  </AbsoluteLayout>\n\n</GridLayout>\n"

/***/ }),

/***/ "./login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var tns_core_modules_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/tns-core-modules/color/color.js");
/* harmony import */ var tns_core_modules_color__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_color__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tns_core_modules_connectivity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/tns-core-modules/connectivity/connectivity.js");
/* harmony import */ var tns_core_modules_connectivity__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_connectivity__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tns_core_modules_ui_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/tns-core-modules/ui/animation/animation.js");
/* harmony import */ var tns_core_modules_ui_animation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_animation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/tns-core-modules/ui/dialogs/dialogs.js");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/tns-core-modules/ui/page/page.js");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./shared/index.ts");








var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, userService, page) {
        this.router = router;
        this.userService = userService;
        this.page = page;
        this.isLoggingIn = true;
        this.isAuthenticating = false;
        this.user = new _shared__WEBPACK_IMPORTED_MODULE_7__["User"]();
        // this.page.className = "login-page";
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    LoginComponent.prototype.focusPassword = function () {
        this.password.nativeElement.focus();
    };
    LoginComponent.prototype.startBackgroundAnimation = function (background) {
        background.animate({
            scale: { x: 1.0, y: 1.0 },
            duration: 10000
        });
    };
    LoginComponent.prototype.submit = function () {
        if (!this.user.isValidEmail()) {
            Object(_shared__WEBPACK_IMPORTED_MODULE_7__["alert"])("Enter a valid email address.");
            return;
        }
        this.isAuthenticating = true;
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (Object(tns_core_modules_connectivity__WEBPACK_IMPORTED_MODULE_3__["getConnectionType"])() === tns_core_modules_connectivity__WEBPACK_IMPORTED_MODULE_3__["connectionType"].none) {
            Object(_shared__WEBPACK_IMPORTED_MODULE_7__["alert"])("Groceries requires an internet connection to log in.");
            return;
        }
        this.userService.login(this.user)
            .subscribe(function () {
            _this.isAuthenticating = false;
            _this.router.navigate(["/"]);
        }, function (error) {
            Object(_shared__WEBPACK_IMPORTED_MODULE_7__["alert"])("Unfortunately we could not find your account.");
            _this.isAuthenticating = false;
        });
    };
    LoginComponent.prototype.signUp = function () {
        var _this = this;
        if (Object(tns_core_modules_connectivity__WEBPACK_IMPORTED_MODULE_3__["getConnectionType"])() === tns_core_modules_connectivity__WEBPACK_IMPORTED_MODULE_3__["connectionType"].none) {
            Object(_shared__WEBPACK_IMPORTED_MODULE_7__["alert"])("Groceries requires an internet connection to register.");
            return;
        }
        this.userService.register(this.user)
            .subscribe(function () {
            Object(_shared__WEBPACK_IMPORTED_MODULE_7__["alert"])("Your account was successfully created.");
            _this.isAuthenticating = false;
            _this.toggleDisplay();
        }, function (errorDetails) {
            if (errorDetails.error && errorDetails.error.error === "UserAlreadyExists") {
                Object(_shared__WEBPACK_IMPORTED_MODULE_7__["alert"])("This email address is already in use.");
            }
            else {
                Object(_shared__WEBPACK_IMPORTED_MODULE_7__["alert"])("Unfortunately we were unable to create your account.");
            }
            _this.isAuthenticating = false;
        });
    };
    LoginComponent.prototype.forgotPassword = function () {
        var _this = this;
        Object(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_5__["prompt"])({
            title: "Forgot Password",
            message: "Enter the email address you used to register for Groceries to reset your password.",
            defaultText: "",
            okButtonText: "Ok",
            cancelButtonText: "Cancel"
        }).then(function (data) {
            if (data.result) {
                _this.userService.resetPassword(data.text.trim())
                    .subscribe(function () {
                    Object(_shared__WEBPACK_IMPORTED_MODULE_7__["alert"])("Your password was successfully reset. Please check your email for instructions on choosing a new password.");
                }, function () {
                    Object(_shared__WEBPACK_IMPORTED_MODULE_7__["alert"])("Unfortunately, an error occurred resetting your password.");
                });
            }
        });
    };
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
        var mainContainer = this.mainContainer.nativeElement;
        mainContainer.animate({
            backgroundColor: this.isLoggingIn ? new tns_core_modules_color__WEBPACK_IMPORTED_MODULE_2__["Color"]("white") : new tns_core_modules_color__WEBPACK_IMPORTED_MODULE_2__["Color"]("#301217"),
            duration: 200
        });
    };
    LoginComponent.prototype.showMainContent = function () {
        var initialContainer = this.initialContainer.nativeElement;
        var mainContainer = this.mainContainer.nativeElement;
        var logoContainer = this.logoContainer.nativeElement;
        var formControls = this.formControls.nativeElement;
        var signUpStack = this.signUpStack.nativeElement;
        var animations = [];
        // Fade out the initial content over one half second
        initialContainer.animate({
            opacity: 0,
            duration: 500
        }).then(function () {
            // After the animation completes, hide the initial container and
            // show the main container and logo. The main container and logo will
            // not immediately appear because their opacity is set to 0 in CSS.
            initialContainer.style.visibility = "collapse";
            mainContainer.style.visibility = "visible";
            logoContainer.style.visibility = "visible";
            // Fade in the main container and logo over one half second.
            animations.push({ target: mainContainer, opacity: 1, duration: 500 });
            animations.push({ target: logoContainer, opacity: 1, duration: 500 });
            // Slide up the form controls and sign up container.
            animations.push({ target: signUpStack, translate: { x: 0, y: 0 }, opacity: 1, delay: 500, duration: 150 });
            animations.push({ target: formControls, translate: { x: 0, y: 0 }, opacity: 1, delay: 650, duration: 150 });
            // Kick off the animation queue
            new tns_core_modules_ui_animation__WEBPACK_IMPORTED_MODULE_4__["Animation"](animations, false).play();
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _shared__WEBPACK_IMPORTED_MODULE_7__["LoginService"] },
        { type: tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_6__["Page"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("initialContainer", { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LoginComponent.prototype, "initialContainer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("mainContainer", { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LoginComponent.prototype, "mainContainer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("logoContainer", { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LoginComponent.prototype, "logoContainer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("formControls", { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LoginComponent.prototype, "formControls", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("signUpStack", { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LoginComponent.prototype, "signUpStack", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("password", { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LoginComponent.prototype, "password", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "gr-login",
            template: __webpack_require__("./login/login.component.html"),
            styles: [__webpack_require__("./login/login-common.css"), __webpack_require__("./login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared__WEBPACK_IMPORTED_MODULE_7__["LoginService"],
            tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_6__["Page"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-angular/common.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/forms/index.js");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./login/login.routing.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./login/login.component.ts");





var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NativeScriptFormsModule"],
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_0__["NativeScriptCommonModule"],
                _login_routing__WEBPACK_IMPORTED_MODULE_3__["loginRouting"],
            ],
            declarations: [
                _login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./login/login.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRouting", function() { return loginRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./login/login.component.ts");


var loginRoutes = [
    { path: "login", component: _login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
];
var loginRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(loginRoutes);


/***/ }),

/***/ "./main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-angular/platform.js");
/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app.module.ts");

            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-angular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__initialHmrUpdate = true;
            global.__hmrSyncBackup = global.__onLiveSync;

            global.__onLiveSync = function () {
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                if (global.__initialHmrUpdate) {
                    return;
                }

                setTimeout(() => {
                    global.__hmrSyncBackup({ type, path });
                });
            };

            hmrUpdate().then(() => {
                global.__initialHmrUpdate = false;
            })
        }
        
            
        __webpack_require__("../node_modules/tns-core-modules/bundle-entry-points.js");
        

var options_Generated = {};

if (true) {
    options_Generated = {
        hmrOptions: {
            moduleTypeFactory: function () { return __webpack_require__("./app.module.ts").AppModule; },
            livesyncCallback: function (platformReboot) { setTimeout(platformReboot, 0); }
        }
    };
}

if (true) {
    module["hot"].accept(["./app.module.ts"], function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app.module.ts");
(function () {
        global["hmrRefresh"]({});
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
}
nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__["platformNativeScriptDynamic"](Object.assign({}, options_Generated)).bootstrapModule(_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"]);

    
        
        
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"android":{"v8Flags":"--expose_gc","markingMode":"none"},"main":"main.js"};

/***/ }),

/***/ "./shared/backend.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendService", function() { return BackendService; });
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tns-core-modules/application-settings/application-settings.js");
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_0__);

var tokenKey = "token";
var BackendService = /** @class */ (function () {
    function BackendService() {
    }
    BackendService.isLoggedIn = function () {
        return !!Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_0__["getString"])(tokenKey);
    };
    Object.defineProperty(BackendService, "token", {
        get: function () {
            return Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_0__["getString"])(tokenKey);
        },
        set: function (theToken) {
            Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_0__["setString"])(tokenKey, theToken);
        },
        enumerable: true,
        configurable: true
    });
    BackendService.baseUrl = "https://baas.kinvey.com/";
    BackendService.appKey = "kid_HyHoT_REf";
    BackendService.appUserHeader = "Basic a2lkX0h5SG9UX1JFZjo1MTkxMDJlZWFhMzQ0MzMyODFjN2MyODM3MGQ5OTIzMQ";
    BackendService.apiUrl = "";
    return BackendService;
}());



/***/ }),

/***/ "./shared/dialog-util.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alert", function() { return alert; });
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tns-core-modules/ui/dialogs/dialogs.js");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_0__);

function alert(message) {
    return tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_0__["alert"]({
        title: "Groceries",
        okButtonText: "OK",
        message: message
    });
}


/***/ }),

/***/ "./shared/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _backend_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./shared/backend.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BackendService", function() { return _backend_service__WEBPACK_IMPORTED_MODULE_0__["BackendService"]; });

/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./shared/user.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _user_model__WEBPACK_IMPORTED_MODULE_1__["User"]; });

/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./shared/login.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]; });

/* harmony import */ var _dialog_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./shared/dialog-util.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alert", function() { return _dialog_util__WEBPACK_IMPORTED_MODULE_3__["alert"]; });

/* harmony import */ var _status_bar_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./shared/status-bar-util.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setStatusBarColors", function() { return _status_bar_util__WEBPACK_IMPORTED_MODULE_4__["setStatusBarColors"]; });








/***/ }),

/***/ "./shared/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _backend_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./shared/backend.service.ts");





var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.register = function (user) {
        return this.http.post(_backend_service__WEBPACK_IMPORTED_MODULE_4__["BackendService"].baseUrl + "user/" + _backend_service__WEBPACK_IMPORTED_MODULE_4__["BackendService"].appKey, JSON.stringify({
            username: user.email,
            email: user.email,
            password: user.password
        }), { headers: this.getCommonHeaders() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleErrors));
    };
    LoginService.prototype.login = function (user) {
        return this.http.post(_backend_service__WEBPACK_IMPORTED_MODULE_4__["BackendService"].baseUrl + "user/" + _backend_service__WEBPACK_IMPORTED_MODULE_4__["BackendService"].appKey + "/login", JSON.stringify({
            username: user.email,
            password: user.password
        }), { headers: this.getCommonHeaders() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
            _backend_service__WEBPACK_IMPORTED_MODULE_4__["BackendService"].token = data._kmd.authtoken;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleErrors));
    };
    LoginService.prototype.logoff = function () {
        _backend_service__WEBPACK_IMPORTED_MODULE_4__["BackendService"].token = "";
    };
    LoginService.prototype.resetPassword = function (email) {
        return this.http.post(_backend_service__WEBPACK_IMPORTED_MODULE_4__["BackendService"].baseUrl + "rpc/" + _backend_service__WEBPACK_IMPORTED_MODULE_4__["BackendService"].appKey + "/" + email + "/user-password-reset-initiate", {}, { headers: this.getCommonHeaders() }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleErrors));
    };
    LoginService.prototype.getCommonHeaders = function () {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            "Content-Type": "application/json",
            "Authorization": _backend_service__WEBPACK_IMPORTED_MODULE_4__["BackendService"].appUserHeader,
        });
    };
    LoginService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
    };
    LoginService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./shared/status-bar-util.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStatusBarColors", function() { return setStatusBarColors; });
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/tns-core-modules/platform/platform.js");
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_1__);


function setStatusBarColors() {
    // Make the Android status bar transparent.
    // See http://bradmartin.net/2016/03/10/fullscreen-and-navigation-bar-color-in-a-nativescript-android-app/
    // for details on the technique used.
    if (tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0__["android"] && tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_1__["device"].sdkVersion >= "21") {
        tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0__["android"].on("activityStarted", function () {
            var View = android.view.View;
            var window = tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0__["android"].startActivity.getWindow();
            window.setStatusBarColor(0x000000);
            var decorView = window.getDecorView();
            decorView.setSystemUiVisibility(View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);
        });
    }
}


/***/ }),

/***/ "./shared/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var validator = __webpack_require__("../node_modules/email-validator/index.js");
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.isValidEmail = function () {
        return validator.validate(this.email);
    };
    return User;
}());



/***/ })

},[["./main.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9wbGF0Zm9ybS5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwLnJvdXRpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vYXV0aC1ndWFyZC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2dyb2Nlcmllcy9ncm9jZXJpZXMtY29tbW9uLmNzcyIsIndlYnBhY2s6Ly8vLi9ncm9jZXJpZXMvZ3JvY2VyaWVzLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vZ3JvY2VyaWVzL2dyb2Nlcmllcy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9ncm9jZXJpZXMvZ3JvY2VyaWVzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9ncm9jZXJpZXMvZ3JvY2VyaWVzLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9ncm9jZXJpZXMvZ3JvY2VyaWVzLnJvdXRpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vZ3JvY2VyaWVzL2dyb2NlcnktbGlzdC9ncm9jZXJ5LWxpc3QuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9ncm9jZXJpZXMvZ3JvY2VyeS1saXN0L2dyb2NlcnktbGlzdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9ncm9jZXJpZXMvZ3JvY2VyeS1saXN0L2dyb2NlcnktbGlzdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vZ3JvY2VyaWVzL2dyb2NlcnktbGlzdC9pdGVtLXN0YXR1cy5waXBlLnRzIiwid2VicGFjazovLy8uL2dyb2Nlcmllcy9zaGFyZWQvZ3JvY2VyeS5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9ncm9jZXJpZXMvc2hhcmVkL2dyb2Nlcnkuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9ncm9jZXJpZXMvc2hhcmVkL2luZGV4LnRzIiwid2VicGFjazovLy8uL2xvZ2luL2xvZ2luLWNvbW1vbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9sb2dpbi9sb2dpbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vbG9naW4vbG9naW4ubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2xvZ2luL2xvZ2luLnJvdXRpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zaGFyZWQvYmFja2VuZC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NoYXJlZC9kaWFsb2ctdXRpbC50cyIsIndlYnBhY2s6Ly8vLi9zaGFyZWQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc2hhcmVkL2xvZ2luLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc2hhcmVkL3N0YXR1cy1iYXItdXRpbC50cyIsIndlYnBhY2s6Ly8vLi9zaGFyZWQvdXNlci5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLDRDQUE0QyxXQUFXO0FBQ3ZEO0FBQ0E7QUFDQSx5RTs7Ozs7OztBQ1pBLDJCQUEyQixtQkFBTyxDQUFDLGdEQUFnRDtBQUNuRjtBQUNBLGNBQWMsUUFBUyxjQUFjLG9CQUFvQix3QkFBd0IsR0FBRzs7Ozs7Ozs7OztBQ0ZwRjtBQUFBO0FBQUE7QUFBMEM7QUFNMUM7SUFBQTtJQUE0QixDQUFDO0lBQWhCLFlBQVk7UUFKeEIsK0RBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSwyQ0FBMkM7U0FDdEQsQ0FBQztPQUNXLFlBQVksQ0FBSTtJQUFELG1CQUFDO0NBQUE7QUFBSjs7Ozs7Ozs7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QVMsR0FBRyxtQkFBTyxDQUFDLDBDQUFpQixDQUFDLENBQUM7QUFFN0M7SUFBQTtJQU1BLENBQUM7SUFIQywyQkFBWSxHQUFaO1FBQ0UsT0FBTyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ0gsV0FBQztBQUFELENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0KHJlcSkge1xuXHQvLyBIZXJlIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKSBpcyB1c2VkIGluc3RlYWQgb2YgbmV3IFByb21pc2UoKSB0byBwcmV2ZW50XG5cdC8vIHVuY2F1Z2h0IGV4Y2VwdGlvbiBwb3BwaW5nIHVwIGluIGRldnRvb2xzXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fSk7XG59XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmlkID0gXCIuLi8kJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgcmVjdXJzaXZlXCI7IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJUZXh0RmllbGQge1xcbiAgYm9yZGVyLXdpZHRoOiAxO1xcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG59XCIsIFwiXCJdKTtcblxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImdyLW1haW5cIixcbiAgdGVtcGxhdGU6IFwiPHBhZ2Utcm91dGVyLW91dGxldD48L3BhZ2Utcm91dGVyLW91dGxldD5cIlxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgeyB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBJbXBvcnRzXG5leHBvcnRzLmkocmVxdWlyZShcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0xIS4vcGxhdGZvcm0uY3NzXCIpLCBcIlwiKTtcblxuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJQYWdlIHtcXG4gIGZvbnQtc2l6ZTogMTU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuQWN0aW9uQmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5UZXh0RmllbGQge1xcbiAgcGFkZGluZzogMTA7XFxuICBmb250LXNpemU6IDEzO1xcbn1cXG4ubGluZS10aHJvdWdoIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vYXBwLmNzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnRcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgYXV0aFByb3ZpZGVycywgYXBwUm91dGVzIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IHNldFN0YXR1c0JhckNvbG9ycywgQmFja2VuZFNlcnZpY2UsIExvZ2luU2VydmljZSB9IGZyb20gXCIuL3NoYXJlZFwiO1xuXG5pbXBvcnQgeyBMb2dpbk1vZHVsZSB9IGZyb20gXCIuL2xvZ2luL2xvZ2luLm1vZHVsZVwiO1xuaW1wb3J0IHsgR3JvY2VyaWVzTW9kdWxlIH0gZnJvbSBcIi4vZ3JvY2VyaWVzL2dyb2Nlcmllcy5tb2R1bGVcIjtcblxuc2V0U3RhdHVzQmFyQ29sb3JzKCk7XG5cbkBOZ01vZHVsZSh7XG4gIHByb3ZpZGVyczogW1xuICAgIEJhY2tlbmRTZXJ2aWNlLFxuICAgIExvZ2luU2VydmljZSxcbiAgICBhdXRoUHJvdmlkZXJzXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3QoYXBwUm91dGVzKSxcbiAgICBMb2dpbk1vZHVsZSxcbiAgICBHcm9jZXJpZXNNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgICAgQXBwQ29tcG9uZW50LFxuICBdLFxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgQXV0aEd1YXJkIH0gZnJvbSBcIi4vYXV0aC1ndWFyZC5zZXJ2aWNlXCI7XG5cbmV4cG9ydCBjb25zdCBhdXRoUHJvdmlkZXJzID0gW1xuICBBdXRoR3VhcmRcbl07XG5cbmV4cG9ydCBjb25zdCBhcHBSb3V0ZXMgPSBbXG4gIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvZ3JvY2VyaWVzXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfVxuXTtcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyLCBDYW5BY3RpdmF0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tIFwiLi9zaGFyZWQvYmFja2VuZC5zZXJ2aWNlXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgfVxuXG4gIGNhbkFjdGl2YXRlKCkge1xuICAgIGlmIChCYWNrZW5kU2VydmljZS5pc0xvZ2dlZEluKCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9sb2dpblwiXSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59XG5cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIuYmFja2dyb3VuZCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcInJlczovL2JnX2lubmVyXFxcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLmFjdGlvbi1iYXItY3VzdG9tIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi10b3A6IDI2O1xcbiAgbWFyZ2luLWJvdHRvbTogMTY7XFxufVxcbi5hY3Rpb24tYmFyLWN1c3RvbSBMYWJlbCB7XFxuICBmb250LXNpemU6IDIxO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5hY3Rpb24tYmFyLWN1c3RvbSBHcmlkTGF5b3V0IHtcXG4gIGhlaWdodDogNDA7XFxuICBwYWRkaW5nLWxlZnQ6IDE1O1xcbiAgcGFkZGluZy1yaWdodDogMTU7XFxufVxcbi5hY3Rpb24tYmFyLWN1c3RvbSBHcmlkTGF5b3V0IEltYWdlIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5hZGQtYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNDQjFEMDA7XFxuICBwYWRkaW5nLWxlZnQ6IDE2O1xcbiAgcGFkZGluZy1yaWdodDogMTY7XFxuICBoZWlnaHQ6IDUwO1xcbn1cXG4uYWRkLWJhci1pbWFnZS1jb250YWluZXIge1xcbiAgaGVpZ2h0OiA1MDtcXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogLTE1O1xcbiAgcGFkZGluZy1sZWZ0OiAxNTtcXG4gIHBhZGRpbmctcmlnaHQ6IDEzO1xcbn1cXG4uYWRkLWJhciBJbWFnZSB7XFxuICBoZWlnaHQ6IDIwO1xcbn1cXG5UZXh0RmllbGQge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGxhY2Vob2xkZXItY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBmb250LXNpemU6IDE1O1xcbiAgYm9yZGVyLXdpZHRoOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbi1sZWZ0OiAxO1xcbn1cXG4uYWRkLWJhci1yZWNlbnQtbGFiZWwge1xcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjMzExMjE3O1xcbn1cXG4uYWRkLWJhci1yZWNlbnQtY29udGFpbmVyIHtcXG4gIGhlaWdodDogNTA7XFxuICBwYWRkaW5nLWxlZnQ6IDEwO1xcbiAgcGFkZGluZy1yaWdodDogMTA7XFxuICBtYXJnaW4tcmlnaHQ6IC0xMDtcXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxufVxcbi5hZGQtYmFyLXJlY2VudC10b2dnbGUge1xcbiAgY29sb3I6ICMzMTEyMTc7XFxufVxcblxcbkFjdGl2aXR5SW5kaWNhdG9yIHtcXG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxufVxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5hY3Rpb24tYmFyLWN1c3RvbSB7XFxuICBtYXJnaW4tdG9wOiAxMjtcXG59XFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEdyaWRMYXlvdXQgI2NvbnRhaW5lclxcbiAgY2xhc3M9XFxcImJhY2tncm91bmRcXFwiXFxuICByb3dzPVxcXCJhdXRvLCBhdXRvLCAqXFxcIj5cXG5cXG4gIDwhLS0gUm93IDE6IFRoZSBjdXN0b20gYWN0aW9uIGJhciAtLT5cXG4gIDxHcmlkTGF5b3V0XFxuICAgIHJvdz1cXFwiMFxcXCJcXG4gICAgY29sdW1ucz1cXFwiNDQsICosIGF1dG9cXFwiXFxuICAgIGNsYXNzPVxcXCJhY3Rpb24tYmFyLWN1c3RvbVxcXCI+XFxuICAgIDxMYWJlbFxcbiAgICAgIGNvbD1cXFwiMVxcXCJcXG4gICAgICB0ZXh0PVxcXCJHcm9jZXJpZXNcXFwiPjwvTGFiZWw+XFxuICAgIFxcbiAgICA8IS0tIFdyYXAgdGhlIGltYWdlIGluIGEgU3RhY2tMYXlvdXQgdG8gZ2l2ZSBpdCBhIGJpZ2dlciB0YXAgdGFyZ2V0IC0tPlxcbiAgICA8R3JpZExheW91dFxcbiAgICAgIGNvbD1cXFwiMlxcXCJcXG4gICAgICAodGFwKT1cXFwic2hvd01lbnUoKVxcXCI+XFxuICAgICAgPEltYWdlXFxuICAgICAgICBzcmM9XFxcInJlczovL21lbnVcXFwiXFxuICAgICAgICBzdHJldGNoPVxcXCJub25lXFxcIj48L0ltYWdlPlxcbiAgICA8L0dyaWRMYXlvdXQ+XFxuICA8L0dyaWRMYXlvdXQ+XFxuXFxuICA8IS0tIFJvdyAyOiBUaGUgdGV4dCBmaWVsZCB0byBhZGQgZ3JvY2VyaWVzLCBhbmQgcmVjZW50IGJ1dHRvbiAtLT5cXG4gIDxHcmlkTGF5b3V0XFxuICAgIHJvdz1cXFwiMVxcXCJcXG4gICAgY29sdW1ucz1cXFwiYXV0bywgKiwgYXV0b1xcXCJcXG4gICAgW2JhY2tncm91bmRDb2xvcl09XFxcImlzU2hvd2luZ1JlY2VudCA/ICcjQkJDMTY5JyA6ICcjQ0IxRDAwJ1xcXCJcXG4gICAgY2xhc3M9XFxcImFkZC1iYXJcXFwiPlxcbiAgICA8U3RhY2tMYXlvdXRcXG4gICAgICBjbGFzcz1cXFwiYWRkLWJhci1pbWFnZS1jb250YWluZXJcXFwiXFxuICAgICAgY29sPVxcXCIwXFxcIlxcbiAgICAgICh0YXApPVxcXCJhZGQoJ2J1dHRvbicpXFxcIj5cXG4gICAgICA8SW1hZ2VcXG4gICAgICAgIGNvbD1cXFwiMFxcXCJcXG4gICAgICAgIFtzcmNdPVxcXCJpc1Nob3dpbmdSZWNlbnQgPyAncmVzOi8vcmVjZW50JyA6ICdyZXM6Ly9hZGQnXFxcIj48L0ltYWdlPlxcbiAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8VGV4dEZpZWxkICNncm9jZXJ5VGV4dEZpZWxkXFxuICAgICAgY29sPVxcXCIxXFxcIlxcbiAgICAgIFsobmdNb2RlbCldPVxcXCJncm9jZXJ5XFxcIlxcbiAgICAgIChsb2FkZWQpPVxcXCJoYW5kbGVBbmRyb2lkRm9jdXMoZ3JvY2VyeVRleHRGaWVsZCwgY29udGFpbmVyKVxcXCJcXG4gICAgICBbaGludF09XFxcImlzQW5kcm9pZCA/ICdBREQgQSBHUk9DRVJZJyA6ICdBZGQgYSBncm9jZXJ5J1xcXCJcXG4gICAgICByZXR1cm5LZXlUeXBlPVxcXCJkb25lXFxcIlxcbiAgICAgICpuZ0lmPVxcXCIhaXNTaG93aW5nUmVjZW50XFxcIlxcbiAgICAgIChyZXR1cm5QcmVzcyk9XFxcImFkZCgndGV4dGZpZWxkJylcXFwiPjwvVGV4dEZpZWxkPlxcbiAgICA8TGFiZWxcXG4gICAgICBjb2w9XFxcIjFcXFwiXFxuICAgICAgdGV4dD1cXFwiUmVjZW50IGl0ZW1zXFxcIlxcbiAgICAgICpuZ0lmPVxcXCJpc1Nob3dpbmdSZWNlbnRcXFwiXFxuICAgICAgY2xhc3M9XFxcImFkZC1iYXItcmVjZW50LWxhYmVsXFxcIj48L0xhYmVsPlxcbiAgIDxTdGFja0xheW91dFxcbiAgICAgY29sPVxcXCIyXFxcIlxcbiAgICAgY2xhc3M9XFxcImFkZC1iYXItcmVjZW50LWNvbnRhaW5lclxcXCJcXG4gICAgICh0YXApPVxcXCJ0b2dnbGVSZWNlbnQoKVxcXCI+XFxuICAgICA8TGFiZWxcXG4gICAgICAgY2xhc3M9XFxcImFkZC1iYXItcmVjZW50LXRvZ2dsZVxcXCJcXG4gICAgICAgW3RleHRdPVxcXCJpc1Nob3dpbmdSZWNlbnQgPyAnRG9uZScgOiAnUmVjZW50J1xcXCI+PC9MYWJlbD5cXG4gICAgPC9TdGFja0xheW91dD5cXG4gIDwvR3JpZExheW91dD5cXG5cXG4gIDwhLS0gUm93IDM6IFRoZSBncm9jZXJ5IGxpc3QgLS0+XFxuICA8Z3ItZ3JvY2VyeS1saXN0XFxuICAgIFtyb3ddPVxcXCIyXFxcIlxcbiAgICAobG9hZGluZyk9XFxcInNob3dBY3Rpdml0eUluZGljYXRvcigpXFxcIlxcbiAgICAobG9hZGVkKT1cXFwiaGlkZUFjdGl2aXR5SW5kaWNhdG9yKClcXFwiXFxuICAgIFtzaG93RGVsZXRlZF09XFxcImlzU2hvd2luZ1JlY2VudFxcXCI+PC9nci1ncm9jZXJ5LWxpc3Q+XFxuXFxuICA8QWN0aXZpdHlJbmRpY2F0b3JcXG4gICAgW2J1c3ldPVxcXCJpc0xvYWRpbmdcXFwiXFxuICAgIHJvdz1cXFwiMlxcXCI+PC9BY3Rpdml0eUluZGljYXRvcj5cXG5cXG48L0dyaWRMYXlvdXQ+XFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IGFjdGlvbiB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LWZpZWxkXCI7XG5pbXBvcnQgKiBhcyBTb2NpYWxTaGFyZSBmcm9tIFwibmF0aXZlc2NyaXB0LXNvY2lhbC1zaGFyZVwiO1xuXG5pbXBvcnQgeyBHcm9jZXJ5U2VydmljZSB9IGZyb20gXCIuL3NoYXJlZFwiO1xuaW1wb3J0IHsgTG9naW5TZXJ2aWNlLCBhbGVydCB9IGZyb20gXCIuLi9zaGFyZWRcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImdyLWdyb2Nlcmllc1wiLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogXCIuL2dyb2Nlcmllcy5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vZ3JvY2VyaWVzLWNvbW1vbi5jc3NcIiwgXCIuL2dyb2Nlcmllcy5jb21wb25lbnQuY3NzXCJdLFxuICBwcm92aWRlcnM6IFtHcm9jZXJ5U2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgR3JvY2VyaWVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZ3JvY2VyeTogc3RyaW5nID0gXCJcIjtcbiAgaXNTaG93aW5nUmVjZW50ID0gZmFsc2U7XG4gIGlzTG9hZGluZyA9IGZhbHNlO1xuXG4gIEBWaWV3Q2hpbGQoXCJncm9jZXJ5VGV4dEZpZWxkXCIsIHsgc3RhdGljOiBmYWxzZSB9KSBncm9jZXJ5VGV4dEZpZWxkOiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBzdG9yZTogR3JvY2VyeVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBsb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSxcbiAgICBwcml2YXRlIHBhZ2U6IFBhZ2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gIH1cblxuICAvLyBQcmV2ZW50IHRoZSBmaXJzdCB0ZXh0ZmllbGQgZnJvbSByZWNlaXZpbmcgZm9jdXMgb24gQW5kcm9pZFxuICAvLyBTZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81MDU2NzM0L2FuZHJvaWQtZm9yY2UtZWRpdHRleHQtdG8tcmVtb3ZlLWZvY3VzXG4gIGhhbmRsZUFuZHJvaWRGb2N1cyh0ZXh0RmllbGQsIGNvbnRhaW5lcikge1xuICAgIGlmIChjb250YWluZXIuYW5kcm9pZCkge1xuICAgICAgY29udGFpbmVyLmFuZHJvaWQuc2V0Rm9jdXNhYmxlSW5Ub3VjaE1vZGUodHJ1ZSk7XG4gICAgICBjb250YWluZXIuYW5kcm9pZC5zZXRGb2N1c2FibGUodHJ1ZSk7XG4gICAgICB0ZXh0RmllbGQuYW5kcm9pZC5jbGVhckZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgc2hvd0FjdGl2aXR5SW5kaWNhdG9yKCkge1xuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgfVxuICBoaWRlQWN0aXZpdHlJbmRpY2F0b3IoKSB7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIGFkZCh0YXJnZXQ6IHN0cmluZykge1xuICAgIC8vIElmIHNob3dpbmcgcmVjZW50IGdyb2NlcmllcyB0aGUgYWRkIGJ1dHRvbiBzaG91bGQgZG8gbm90aGluZy5cbiAgICBpZiAodGhpcy5pc1Nob3dpbmdSZWNlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgdGV4dEZpZWxkID0gPFRleHRGaWVsZD50aGlzLmdyb2NlcnlUZXh0RmllbGQubmF0aXZlRWxlbWVudDtcblxuICAgIGlmICh0aGlzLmdyb2NlcnkudHJpbSgpID09PSBcIlwiKSB7XG4gICAgICAvLyBJZiB0aGUgdXNlciBjbGlja2VkIHRoZSBhZGQgYnV0dG9uLCBhbmQgdGhlIHRleHRmaWVsZCBpcyBlbXB0eSxcbiAgICAgIC8vIGZvY3VzIHRoZSB0ZXh0IGZpZWxkIGFuZCByZXR1cm4uXG4gICAgICBpZiAodGFyZ2V0ID09PSBcImJ1dHRvblwiKSB7XG4gICAgICAgIHRleHRGaWVsZC5mb2N1cygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSWYgdGhlIHVzZXIgY2xpY2tlZCByZXR1cm4gd2l0aCBhbiBlbXB0eSB0ZXh0IGZpZWxkIHNob3cgYW4gZXJyb3IuXG4gICAgICAgIGFsZXJ0KFwiRW50ZXIgYSBncm9jZXJ5IGl0ZW1cIik7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gRGlzbWlzcyB0aGUga2V5Ym9hcmRcbiAgICAvLyBUT0RPOiBJcyBpdCBiZXR0ZXIgVVggdG8gZGlzbWlzcyB0aGUga2V5Ym9hcmQsIG9yIGxlYXZlIGl0IHVwIHNvIHRoZVxuICAgIC8vIHVzZXIgY2FuIGNvbnRpbnVlIHRvIGFkZCBtb3JlIGdyb2Nlcmllcz9cbiAgICB0ZXh0RmllbGQuZGlzbWlzc1NvZnRJbnB1dCgpO1xuXG4gICAgdGhpcy5zaG93QWN0aXZpdHlJbmRpY2F0b3IoKTtcbiAgICB0aGlzLnN0b3JlLmFkZCh0aGlzLmdyb2NlcnkpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5ncm9jZXJ5ID0gXCJcIjtcbiAgICAgICAgICB0aGlzLmhpZGVBY3Rpdml0eUluZGljYXRvcigpO1xuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgYWxlcnQoXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBhZGRpbmcgYW4gaXRlbSB0byB5b3VyIGxpc3QuXCIpO1xuICAgICAgICAgIHRoaXMuaGlkZUFjdGl2aXR5SW5kaWNhdG9yKCk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gIH1cblxuICB0b2dnbGVSZWNlbnQoKSB7XG4gICAgdGhpcy5pc1Nob3dpbmdSZWNlbnQgPSAhdGhpcy5pc1Nob3dpbmdSZWNlbnQ7XG4gIH1cblxuICBzaG93TWVudSgpIHtcbiAgICBhY3Rpb24oe1xuICAgICAgbWVzc2FnZTogXCJXaGF0IHdvdWxkIHlvdSBsaWtlIHRvIGRvP1wiLFxuICAgICAgYWN0aW9uczogW1wiU2hhcmVcIiwgXCJMb2cgT2ZmXCJdLFxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIlxuICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgaWYgKHJlc3VsdCA9PT0gXCJTaGFyZVwiKSB7XG4gICAgICAgIHRoaXMuc2hhcmUoKTtcbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0ID09PSBcIkxvZyBPZmZcIikge1xuICAgICAgICB0aGlzLmxvZ29mZigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2hhcmUoKSB7XG4gICAgbGV0IGl0ZW1zID0gdGhpcy5zdG9yZS5pdGVtcy52YWx1ZTtcbiAgICBsZXQgbGlzdCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwLCBzaXplID0gaXRlbXMubGVuZ3RoOyBpIDwgc2l6ZSA7IGkrKykge1xuICAgICAgbGlzdC5wdXNoKGl0ZW1zW2ldLm5hbWUpO1xuICAgIH1cbiAgICBTb2NpYWxTaGFyZS5zaGFyZVRleHQobGlzdC5qb2luKFwiLCBcIikudHJpbSgpKTtcbiAgfVxuXG4gIGxvZ29mZigpIHtcbiAgICB0aGlzLmxvZ2luU2VydmljZS5sb2dvZmYoKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbG9naW5cIl0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgZ3JvY2VyaWVzUm91dGluZyB9IGZyb20gXCIuL2dyb2Nlcmllcy5yb3V0aW5nXCI7XG5pbXBvcnQgeyBHcm9jZXJpZXNDb21wb25lbnQgfSBmcm9tIFwiLi9ncm9jZXJpZXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBHcm9jZXJ5TGlzdENvbXBvbmVudCB9IGZyb20gXCIuL2dyb2NlcnktbGlzdC9ncm9jZXJ5LWxpc3QuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJdGVtU3RhdHVzUGlwZSB9IGZyb20gXCIuL2dyb2NlcnktbGlzdC9pdGVtLXN0YXR1cy5waXBlXCI7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgZ3JvY2VyaWVzUm91dGluZyxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgR3JvY2VyaWVzQ29tcG9uZW50LFxuICAgIEdyb2NlcnlMaXN0Q29tcG9uZW50LFxuICAgIEl0ZW1TdGF0dXNQaXBlXG4gIF0sXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBHcm9jZXJpZXNNb2R1bGUge31cbiIsImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMgfSAgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBHcm9jZXJpZXNDb21wb25lbnQgfSBmcm9tIFwiLi9ncm9jZXJpZXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tIFwiLi4vYXV0aC1ndWFyZC5zZXJ2aWNlXCI7XG5cbmNvbnN0IGdyb2Nlcmllc1JvdXRlczogUm91dGVzID0gW1xuICB7IHBhdGg6IFwiZ3JvY2VyaWVzXCIsIGNvbXBvbmVudDogR3JvY2VyaWVzQ29tcG9uZW50LCBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZF0gfSxcbl07XG5leHBvcnQgY29uc3QgZ3JvY2VyaWVzUm91dGluZzogTW9kdWxlV2l0aFByb3ZpZGVycyA9IFJvdXRlck1vZHVsZS5mb3JDaGlsZChncm9jZXJpZXNSb3V0ZXMpOyIsIm1vZHVsZS5leHBvcnRzID0gXCJMaXN0VmlldyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIG9wYWNpdHk6IDA7XFxufVxcbi52aXNpYmxlIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBzaG93O1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG5Aa2V5ZnJhbWVzIHNob3cge1xcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cXG4gIHRvIHsgb3BhY2l0eTogMTsgfVxcbn1cXG4uY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLXRvcDogMTtcXG59XFxuLnRhcC10YXJnZXQge1xcbiAgcGFkZGluZy10b3A6IDEzO1xcbiAgcGFkZGluZy1ib3R0b206IDEzO1xcbiAgcGFkZGluZy1sZWZ0OiAxNjtcXG59XFxuLnRhcC10YXJnZXQgTGFiZWwge1xcbiAgbWluLXdpZHRoOiAyMDA7XFxufVxcbi5jaGVjay1ib3gge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMDtcXG4gIGhlaWdodDogMjA7XFxufVxcbi5kZWxldGUtY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDEwIDE1O1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLmRlbGV0ZS1jb250YWluZXIgU3RhY2tMYXlvdXQge1xcbiAgcGFkZGluZzogNTtcXG59XFxuLmRlbGV0ZS1jb250YWluZXIgSW1hZ2Uge1xcbiAgaGVpZ2h0OiAyMDtcXG59XFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPExpc3RWaWV3XFxuICBbcm93XT1cXFwicm93XFxcIlxcbiAgW2NsYXNzLnZpc2libGVdPVxcXCJsaXN0TG9hZGVkXFxcIlxcbiAgW2l0ZW1zXT1cXFwic3RvcmUuaXRlbXMgfCBhc3luYyB8IGl0ZW1TdGF0dXM6c2hvd0RlbGV0ZWRcXFwiXFxuICAoaXRlbUxvYWRpbmcpPVxcXCJtYWtlQmFja2dyb3VuZFRyYW5zcGFyZW50KCRldmVudClcXFwiID5cXG4gIDxuZy10ZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCI+XFxuICAgIDxHcmlkTGF5b3V0XFxuICAgICAgY29sdW1ucz1cXFwiKiwgYXV0b1xcXCJcXG4gICAgICBjbGFzcz1cXFwiY29udGFpbmVyXFxcIlxcbiAgICAgIFtvcGFjaXR5XT1cXFwiaXRlbS5kb25lID8gJzAuOCcgOiAnMSdcXFwiPlxcbiAgICAgIDwhLS0gV3JhcCBpbiBjb250YWluZXJzIGZvciBiaWdnZXIgdGFwIHRhcmdldHMgLS0+XFxuICAgICAgPFN0YWNrTGF5b3V0XFxuICAgICAgICBjb2w9XFxcIjBcXFwiXFxuICAgICAgICBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCJcXG4gICAgICAgIGNsYXNzPVxcXCJ0YXAtdGFyZ2V0XFxcIlxcbiAgICAgICAgKHRhcCk9XFxcInRvZ2dsZURvbmUoaXRlbSlcXFwiPlxcbiAgICAgICAgPEltYWdlXFxuICAgICAgICAgIFtzcmNdPVxcXCJpbWFnZVNvdXJjZShpdGVtKVxcXCJcXG4gICAgICAgICAgY2xhc3M9XFxcImNoZWNrLWJveFxcXCI+PC9JbWFnZT5cXG4gICAgICAgIDxMYWJlbFxcbiAgICAgICAgICBbdGV4dF09XFxcIml0ZW0ubmFtZVxcXCJcXG4gICAgICAgICAgW2NsYXNzLmxpbmUtdGhyb3VnaF09XFxcIml0ZW0uZG9uZSAmJiAhaXRlbS5kZWxldGVkXFxcIj48L0xhYmVsPlxcbiAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgPEdyaWRMYXlvdXRcXG4gICAgICAgIGNvbD1cXFwiMVxcXCJcXG4gICAgICAgIGNsYXNzPVxcXCJkZWxldGUtY29udGFpbmVyXFxcIlxcbiAgICAgICAgKHRhcCk9XFxcImRlbGV0ZShpdGVtKVxcXCI+XFxuICAgICAgICA8U3RhY2tMYXlvdXQ+XFxuICAgICAgICAgIDxJbWFnZSBzcmM9XFxcInJlczovL2RlbGV0ZVxcXCI+PC9JbWFnZT5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICA8L0dyaWRMYXlvdXQ+XFxuICA8L25nLXRlbXBsYXRlPlxcbjwvTGlzdFZpZXc+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIEFmdGVyVmlld0luaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBHcm9jZXJ5LCBHcm9jZXJ5U2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWRcIjtcbmltcG9ydCB7IGFsZXJ0IH0gZnJvbSBcIi4uLy4uL3NoYXJlZFwiO1xuXG5kZWNsYXJlIHZhciBVSUNvbG9yOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJnci1ncm9jZXJ5LWxpc3RcIixcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6IFwiLi9ncm9jZXJ5LWxpc3QuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2dyb2NlcnktbGlzdC5jb21wb25lbnQuY3NzXCJdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBHcm9jZXJ5TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBzaG93RGVsZXRlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgcm93O1xuICBAT3V0cHV0KCkgbG9hZGluZyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGxvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwdWJsaWMgc3RvcmU6IEdyb2NlcnlTZXJ2aWNlO1xuICBsaXN0TG9hZGVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3Ioc3RvcmU6IEdyb2NlcnlTZXJ2aWNlKSB7XG4gICAgICB0aGlzLnN0b3JlID0gc3RvcmU7XG4gIH1cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgdGhpcy5sb2FkKCk7XG4gIH1cbiAgbG9hZCgpIHtcbiAgICB0aGlzLmxvYWRpbmcubmV4dChcIlwiKTtcbiAgICB0aGlzLnN0b3JlLmxvYWQoKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGVkLm5leHQoXCJcIik7XG4gICAgICAgICAgdGhpcy5saXN0TG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGFsZXJ0KFwiQW4gZXJyb3Igb2NjdXJyZWQgbG9hZGluZyB5b3VyIGdyb2NlcnkgbGlzdC5cIik7XG4gICAgICAgIH1cbiAgICAgICk7XG4gIH1cblxuICAvLyBUaGUgZm9sbG93aW5nIHRyaWNrIG1ha2VzIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIGVhY2ggY2VsbFxuICAvLyBpbiB0aGUgVUlUYWJsZVZpZXcgdHJhbnNwYXJlbnQgYXMgaXTigJlzIGNyZWF0ZWQuXG4gIG1ha2VCYWNrZ3JvdW5kVHJhbnNwYXJlbnQoYXJncykge1xuICAgIGxldCBjZWxsID0gYXJncy5pb3M7XG4gICAgaWYgKGNlbGwpIHtcbiAgICAgIC8vIHN1cHBvcnQgWENvZGUgOFxuICAgICAgY2VsbC5iYWNrZ3JvdW5kQ29sb3IgPSBVSUNvbG9yLmNsZWFyQ29sb3I7XG4gICAgfVxuICB9XG5cbiAgaW1hZ2VTb3VyY2UoZ3JvY2VyeSkge1xuICAgIGlmIChncm9jZXJ5LmRlbGV0ZWQpIHtcbiAgICAgIHJldHVybiBcInJlczovL2FkZFwiO1xuICAgIH1cbiAgICByZXR1cm4gZ3JvY2VyeS5kb25lID8gXCJyZXM6Ly9jaGVja2VkXCIgOiBcInJlczovL3VuY2hlY2tlZFwiO1xuICB9XG5cbiAgdG9nZ2xlRG9uZShncm9jZXJ5OiBHcm9jZXJ5KSB7XG4gICAgaWYgKGdyb2NlcnkuZGVsZXRlZCkge1xuICAgICAgdGhpcy5zdG9yZS51bnNldERlbGV0ZUZsYWcoZ3JvY2VyeSlcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAoKSA9PiB7IH0sXG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgYWxlcnQoXCJBbiBlcnJvciBvY2N1cnJlZCBtYW5hZ2luZyB5b3VyIGdyb2NlcnkgbGlzdC5cIik7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0b3JlLnRvZ2dsZURvbmVGbGFnKGdyb2NlcnkpXG4gICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgKCkgPT4geyB9LFxuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIGFsZXJ0KFwiQW4gZXJyb3Igb2NjdXJyZWQgbWFuYWdpbmcgeW91ciBncm9jZXJ5IGxpc3QuXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBkZWxldGUoZ3JvY2VyeTogR3JvY2VyeSkge1xuICAgIHRoaXMubG9hZGluZy5uZXh0KFwiXCIpO1xuICAgIGxldCBzdWNjZXNzSGFuZGxlciA9ICgpID0+IHRoaXMubG9hZGVkLm5leHQoXCJcIik7XG4gICAgbGV0IGVycm9ySGFuZGxlciA9ICgpID0+IHtcbiAgICAgIGFsZXJ0KFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgZGVsZXRpbmcgYW4gaXRlbSBmcm9tIHlvdXIgbGlzdC5cIik7XG4gICAgICB0aGlzLmxvYWRlZC5uZXh0KFwiXCIpO1xuICAgIH07XG5cbiAgICBpZiAoZ3JvY2VyeS5kZWxldGVkKSB7XG4gICAgICB0aGlzLnN0b3JlLnBlcm1hbmVudGx5RGVsZXRlKGdyb2NlcnkpXG4gICAgICAgIC5zdWJzY3JpYmUoc3VjY2Vzc0hhbmRsZXIsIGVycm9ySGFuZGxlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RvcmUuc2V0RGVsZXRlRmxhZyhncm9jZXJ5KVxuICAgICAgICAuc3Vic2NyaWJlKHN1Y2Nlc3NIYW5kbGVyLCBlcnJvckhhbmRsZXIpO1xuICAgIH1cbiAgfVxufVxuXG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgR3JvY2VyeSB9IGZyb20gXCIuLi9zaGFyZWRcIjtcblxuQFBpcGUoe1xuICBuYW1lOiBcIml0ZW1TdGF0dXNcIlxufSlcbmV4cG9ydCBjbGFzcyBJdGVtU3RhdHVzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB2YWx1ZTogQXJyYXk8R3JvY2VyeT4gPSBbXTtcbiAgdHJhbnNmb3JtKGl0ZW1zOiBBcnJheTxHcm9jZXJ5PiwgZGVsZXRlZDogYm9vbGVhbikge1xuICAgIGlmIChpdGVtcyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICB0aGlzLnZhbHVlID0gaXRlbXMuZmlsdGVyKChncm9jZXJ5OiBHcm9jZXJ5KSA9PiB7XG4gICAgICAgIHJldHVybiBncm9jZXJ5LmRlbGV0ZWQgPT09IGRlbGV0ZWQ7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cbn0iLCJleHBvcnQgY2xhc3MgR3JvY2VyeSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBpZDogc3RyaW5nLFxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcsXG4gICAgcHVibGljIGRvbmU6IGJvb2xlYW4sXG4gICAgcHVibGljIGRlbGV0ZWQ6IGJvb2xlYW5cbiAgKSB7fVxufSIsImltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1xuICBIdHRwQ2xpZW50LFxuICBIdHRwSGVhZGVycyxcbiAgSHR0cEVycm9yUmVzcG9uc2UsXG59IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCB0aHJvd0Vycm9yIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuXG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWRcIjtcbmltcG9ydCB7IEdyb2NlcnkgfSBmcm9tIFwiLi9ncm9jZXJ5Lm1vZGVsXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHcm9jZXJ5U2VydmljZSB7XG4gIGl0ZW1zOiBCZWhhdmlvclN1YmplY3Q8QXJyYXk8R3JvY2VyeT4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XG4gIHByaXZhdGUgYWxsSXRlbXM6IEFycmF5PEdyb2Nlcnk+ID0gW107XG4gIGJhc2VVcmwgPSBCYWNrZW5kU2VydmljZS5iYXNlVXJsICsgXCJhcHBkYXRhL1wiICsgQmFja2VuZFNlcnZpY2UuYXBwS2V5ICsgXCIvR3JvY2VyaWVzXCI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIHpvbmU6IE5nWm9uZSkgeyB9XG5cbiAgbG9hZCgpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmJhc2VVcmwsIHtcbiAgICAgIGhlYWRlcnM6IHRoaXMuZ2V0Q29tbW9uSGVhZGVycygpXG4gICAgfSlcbiAgICAucGlwZShcbiAgICAgIG1hcCgoZGF0YTogYW55W10pID0+IHtcbiAgICAgICAgdGhpcy5hbGxJdGVtcyA9IGRhdGFcbiAgICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGEuX2ttZC5sbXQgPiBiLl9rbWQubG10ID8gLTEgOiAxO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLm1hcChcbiAgICAgICAgICAgIGdyb2NlcnkgPT4gbmV3IEdyb2NlcnkoXG4gICAgICAgICAgICAgIGdyb2NlcnkuX2lkLFxuICAgICAgICAgICAgICBncm9jZXJ5Lk5hbWUsXG4gICAgICAgICAgICAgIGdyb2NlcnkuRG9uZSB8fCBmYWxzZSxcbiAgICAgICAgICAgICAgZ3JvY2VyeS5EZWxldGVkIHx8IGZhbHNlXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnB1Ymxpc2hVcGRhdGVzKCk7XG4gICAgICB9KSxcbiAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcnMpXG4gICAgKTtcbiAgfVxuXG4gIGFkZChuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXG4gICAgICB0aGlzLmJhc2VVcmwsXG4gICAgICBKU09OLnN0cmluZ2lmeSh7IE5hbWU6IG5hbWUgfSksXG4gICAgICB7IGhlYWRlcnM6IHRoaXMuZ2V0Q29tbW9uSGVhZGVycygpIH1cbiAgICApXG4gICAgLnBpcGUoXG4gICAgICBtYXAoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmFsbEl0ZW1zLnVuc2hpZnQobmV3IEdyb2NlcnkoZGF0YS5faWQsIG5hbWUsIGZhbHNlLCBmYWxzZSkpO1xuICAgICAgICB0aGlzLnB1Ymxpc2hVcGRhdGVzKCk7XG4gICAgICB9KSxcbiAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcnMpXG4gICAgKTtcbiAgfVxuXG4gIHNldERlbGV0ZUZsYWcoaXRlbTogR3JvY2VyeSkge1xuICAgIGl0ZW0uZGVsZXRlZCA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXMucHV0KGl0ZW0pXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKGRhdGEgPT4ge1xuICAgICAgICAgIGl0ZW0uZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMucHVibGlzaFVwZGF0ZXMoKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICB1bnNldERlbGV0ZUZsYWcoaXRlbTogR3JvY2VyeSkge1xuICAgIGl0ZW0uZGVsZXRlZCA9IGZhbHNlO1xuICAgIHJldHVybiB0aGlzLnB1dChpdGVtKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcChkYXRhID0+IHtcbiAgICAgICAgICBpdGVtLmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnB1Ymxpc2hVcGRhdGVzKCk7XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cblxuICB0b2dnbGVEb25lRmxhZyhpdGVtOiBHcm9jZXJ5KSB7XG4gICAgaXRlbS5kb25lID0gIWl0ZW0uZG9uZTtcbiAgICB0aGlzLnB1Ymxpc2hVcGRhdGVzKCk7XG4gICAgcmV0dXJuIHRoaXMucHV0KGl0ZW0pO1xuICB9XG5cbiAgcGVybWFuZW50bHlEZWxldGUoaXRlbTogR3JvY2VyeSkge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5kZWxldGUoXG4gICAgICAgIHRoaXMuYmFzZVVybCArIFwiL1wiICsgaXRlbS5pZCxcbiAgICAgICAgeyBoZWFkZXJzOiB0aGlzLmdldENvbW1vbkhlYWRlcnMoKSB9XG4gICAgICApXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKGRhdGEgPT4ge1xuICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMuYWxsSXRlbXMuaW5kZXhPZihpdGVtKTtcbiAgICAgICAgICB0aGlzLmFsbEl0ZW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgdGhpcy5wdWJsaXNoVXBkYXRlcygpO1xuICAgICAgICB9KSxcbiAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9ycylcbiAgICAgICk7XG4gIH1cblxuICBwcml2YXRlIHB1dChncm9jZXJ5OiBHcm9jZXJ5KSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoXG4gICAgICB0aGlzLmJhc2VVcmwgKyBcIi9cIiArIGdyb2NlcnkuaWQsXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIE5hbWU6IGdyb2NlcnkubmFtZSxcbiAgICAgICAgRG9uZTogZ3JvY2VyeS5kb25lLFxuICAgICAgICBEZWxldGVkOiBncm9jZXJ5LmRlbGV0ZWRcbiAgICAgIH0pLFxuICAgICAgeyBoZWFkZXJzOiB0aGlzLmdldENvbW1vbkhlYWRlcnMoKSB9XG4gICAgKVxuICAgIC5waXBlKGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcnMpKTtcbiAgfVxuXG4gIHByaXZhdGUgcHVibGlzaFVwZGF0ZXMoKSB7XG4gICAgLy8gTWFrZSBzdXJlIGFsbCB1cGRhdGVzIGFyZSBwdWJsaXNoZWQgaW5zaWRlIE5nWm9uZSBzbyB0aGF0IGNoYW5nZSBkZXRlY3Rpb24gaXMgdHJpZ2dlcmVkIGlmIG5lZWRlZFxuICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgLy8gbXVzdCBlbWl0IGEgKm5ldyogdmFsdWUgKGltbXV0YWJpbGl0eSEpXG4gICAgICB0aGlzLml0ZW1zLm5leHQoWy4uLnRoaXMuYWxsSXRlbXNdKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q29tbW9uSGVhZGVycygpIHtcbiAgICByZXR1cm4gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiS2ludmV5IFwiICsgQmFja2VuZFNlcnZpY2UudG9rZW4sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVycm9ycyhlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgcmV0dXJuIHRocm93RXJyb3IoZXJyb3IpO1xuICB9XG59XG4iLCJleHBvcnQgeyBHcm9jZXJ5U2VydmljZSB9IGZyb20gXCIuL2dyb2Nlcnkuc2VydmljZVwiO1xuZXhwb3J0IHsgR3JvY2VyeSB9IGZyb20gXCIuL2dyb2NlcnkubW9kZWxcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogSGlkZSBhIGJ1bmNoIG9mIHRoaW5ncyB0byBzZXR1cCB0aGUgaW5pdGlhbCBhbmltYXRpb25zICovXFxuLmZvcm0tY29udHJvbHMsIC5zaWduLXVwLXN0YWNrIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5iYWNrZ3JvdW5kIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwicmVzOi8vYmdfbG9naW5cXFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG5cXG4vKiBUT0RPOiBBc3NpZ25pbmcgZXhwbGljaXQgaGVpZ2h0cyBhbmQgYXBwbHlpbmcgdGhpcyBtYXJnaW4gc2hvdWxkbuKAmXQgYmUgbmVjZXNzYXJ5LiAqL1xcbi5pbml0aWFsLWNvbnRhaW5lciB7XFxuICBtYXJnaW4tdG9wOiAxNzA7XFxufVxcbi5pbml0aWFsLWxvZ28ge1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMTA7XFxufVxcbi5pbml0aWFsLWxhYmVsIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDgwO1xcbn1cXG4uaW5pdGlhbC1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogI0NCMUQwMDtcXG4gIGhlaWdodDogNDU7XFxuICB3aWR0aDogMjc1O1xcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG59XFxuLmluaXRpYWwtYnV0dG9uLWxhYmVsIHtcXG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubWFpbi1jb250YWluZXIge1xcbiAgdmlzaWJpbGl0eTogY29sbGFwc2U7XFxuICBvcGFjaXR5OiAwO1xcbiAgbWFyZ2luLWxlZnQ6IDMwO1xcbiAgbWFyZ2luLXJpZ2h0OiAzMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4ubWFpbi1sYWJlbCB7XFxuICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbkltYWdlIHtcXG4gIG1hcmdpbi10b3A6IDU7XFxuICBtYXJnaW4tYm90dG9tOiAyMDtcXG59XFxuQnV0dG9uLCBUZXh0RmllbGQge1xcbiAgbWFyZ2luLWxlZnQ6IDE2O1xcbiAgbWFyZ2luLXJpZ2h0OiAxNjtcXG4gIG1hcmdpbi1ib3R0b206IDEwO1xcbn1cXG5UZXh0RmllbGQge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgcGxhY2Vob2xkZXItY29sb3I6ICNBQ0E2QTc7XFxufVxcblRleHRGaWVsZC5saWdodCB7XFxuICBjb2xvcjogI0M0QUZCNDtcXG4gIHBsYWNlaG9sZGVyLWNvbG9yOiAjQzRBRkI0O1xcbn1cXG4uc3VibWl0LWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0IxRDAwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLXRvcDogMjA7XFxufVxcblxcbi5mb3Jnb3QtcGFzc3dvcmQtbGFiZWwge1xcbiAgZm9udC1zaXplOiAxMztcXG4gIG1hcmdpbi1sZWZ0OiAyMDtcXG4gIG1hcmdpbi1ib3R0b206IDQ1O1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG4uc2lnbi11cC1zdGFjayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzExMjE3O1xcbn1cXG4uc2lnbi11cC1zdGFjayBMYWJlbCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE1O1xcbn1cXG5cXG4ubG9nby1jb250YWluZXIge1xcbiAgdmlzaWJpbGl0eTogY29sbGFwc2U7XFxuICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCIubWFpbi1jb250YWluZXIge1xcbiAgaGVpZ2h0OiA0MjU7XFxuICB3aWR0aDogMzAwO1xcbn1cXG4uaW5pdGlhbC1sYWJlbCB7XFxuICBmb250LXNpemU6IDQwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMjtcXG59XFxuLm1haW4tbGFiZWwge1xcbiAgY29sb3I6ICMzMTEyMTc7XFxuICBmb250LXNpemU6IDMyO1xcbiAgbWFyZ2luLXRvcDogNDU7XFxuICBtYXJnaW4tYm90dG9tOiA1MjtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjI7XFxufVxcblRleHRGaWVsZCB7XFxuICBib3JkZXItd2lkdGg6IDE7XFxuICBib3JkZXItY29sb3I6ICM2RTU5NUM7XFxuICBtYXJnaW4tYm90dG9tOiAyMDtcXG59XFxuLnN1Ym1pdC1idXR0b24ge1xcbiAgaGVpZ2h0OiA0MDtcXG4gIG1hcmdpbi10b3A6IDE1O1xcbn1cXG4uc2lnbi11cC1zdGFjayBMYWJlbCB7XFxuICBoZWlnaHQ6IDQ4O1xcbn1cXG5cXG4vKiBBIGhlaWdodCBvZiB6ZXJvIGVuc3VyZXMgdGhhdCB0aGUgQWJzb2x1dGVMYXlvdXQgY29udGFpbmVyIGRvZXNu4oCZdCBzdGVhbCB0YXBzXFxuZnJvbSB0aGUgdmFyaW91cyBidXR0b24gYW5kIHRleHQgZmllbGQgY29udHJvbHMgdGhhdCBzaXQgYmVoaW5kIGl0LiAqL1xcbi5sb2dvLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDA7XFxufVxcbi5sb2dvLWNvbnRhaW5lciBJbWFnZSB7XFxuICB0b3A6IC0yNTA7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxHcmlkTGF5b3V0PlxcblxcbiAgPEdyaWRMYXlvdXQgI2JhY2tncm91bmRcXG4gICAgc2NhbGVYPVxcXCIxLjRcXFwiXFxuICAgIHNjYWxlWT1cXFwiMS40XFxcIlxcbiAgICBjbGFzcz1cXFwiYmFja2dyb3VuZFxcXCJcXG4gICAgKGxvYWRlZCk9XFxcInN0YXJ0QmFja2dyb3VuZEFuaW1hdGlvbihiYWNrZ3JvdW5kKVxcXCI+PC9HcmlkTGF5b3V0PlxcblxcbiAgPFN0YWNrTGF5b3V0ICNpbml0aWFsQ29udGFpbmVyXFxuICAgIGNsYXNzPVxcXCJpbml0aWFsLWNvbnRhaW5lclxcXCI+XFxuICAgIDxJbWFnZVxcbiAgICAgIHNyYz1cXFwicmVzOi8vbG9nb19sb2dpblxcXCJcXG4gICAgICBzdHJldGNoPVxcXCJub25lXFxcIlxcbiAgICAgIGNsYXNzPVxcXCJpbml0aWFsLWxvZ29cXFwiPjwvSW1hZ2U+XFxuICAgIDxMYWJlbFxcbiAgICAgIHRleHQ9XFxcIkdST0NFUklFU1xcXCJcXG4gICAgICBjbGFzcz1cXFwiaW5pdGlhbC1sYWJlbFxcXCI+PC9MYWJlbD5cXG4gICAgPFN0YWNrTGF5b3V0XFxuICAgICAgKHRhcCk9XFxcInNob3dNYWluQ29udGVudCgpXFxcIlxcbiAgICAgIGNsYXNzPVxcXCJpbml0aWFsLWJ1dHRvblxcXCI+XFxuICAgICAgPExhYmVsXFxuICAgICAgICB0ZXh0PVxcXCJMb2dpblxcXCJcXG4gICAgICAgIGNsYXNzPVxcXCJpbml0aWFsLWJ1dHRvbi1sYWJlbFxcXCI+PC9MYWJlbD5cXG4gICAgPC9TdGFja0xheW91dD5cXG4gIDwvU3RhY2tMYXlvdXQ+XFxuXFxuICA8U3RhY2tMYXlvdXQgI21haW5Db250YWluZXJcXG4gICAgY2xhc3M9XFxcIm1haW4tY29udGFpbmVyXFxcIj5cXG4gICAgPExhYmVsXFxuICAgICAgY2xhc3M9XFxcIm1haW4tbGFiZWxcXFwiXFxuICAgICAgdGV4dD1cXFwiR1JPQ0VSSUVTXFxcIlxcbiAgICAgIFtjb2xvcl09XFxcImlzTG9nZ2luZ0luPyAnYmxhY2snIDogJ3doaXRlJ1xcXCI+PC9MYWJlbD5cXG5cXG4gICAgPEdyaWRMYXlvdXQgI2Zvcm1Db250cm9sc1xcbiAgICAgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xzXFxcIlxcbiAgICAgIHJvd3M9XFxcImF1dG8sIGF1dG9cXFwiXFxuICAgICAgdHJhbnNsYXRlWT1cXFwiNTBcXFwiPlxcbiAgICAgIDxUZXh0RmllbGRcXG4gICAgICAgIGhpbnQ9XFxcIkVtYWlsIEFkZHJlc3NcXFwiXFxuICAgICAgICBrZXlib2FyZFR5cGU9XFxcImVtYWlsXFxcIlxcbiAgICAgICAgcmV0dXJuS2V5VHlwZT1cXFwibmV4dFxcXCJcXG4gICAgICAgIChyZXR1cm5QcmVzcyk9XFxcImZvY3VzUGFzc3dvcmQoKVxcXCJcXG4gICAgICAgIFsobmdNb2RlbCldPVxcXCJ1c2VyLmVtYWlsXFxcIlxcbiAgICAgICAgW2lzRW5hYmxlZF09XFxcIiFpc0F1dGhlbnRpY2F0aW5nXFxcIlxcbiAgICAgICAgYXV0b2NvcnJlY3Q9XFxcImZhbHNlXFxcIlxcbiAgICAgICAgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cXFwibm9uZVxcXCJcXG4gICAgICAgIFtjbGFzcy5saWdodF09XFxcIiFpc0xvZ2dpbmdJblxcXCJcXG4gICAgICAgIHJvdz1cXFwiMFxcXCI+PC9UZXh0RmllbGQ+XFxuICAgICAgPFRleHRGaWVsZCAjcGFzc3dvcmRcXG4gICAgICAgIGhpbnQ9XFxcIlBhc3N3b3JkXFxcIlxcbiAgICAgICAgc2VjdXJlPVxcXCJ0cnVlXFxcIlxcbiAgICAgICAgcmV0dXJuS2V5VHlwZT1cXFwiZG9uZVxcXCJcXG4gICAgICAgIChyZXR1cm5QcmVzcyk9XFxcInN1Ym1pdCgpXFxcIlxcbiAgICAgICAgWyhuZ01vZGVsKV09XFxcInVzZXIucGFzc3dvcmRcXFwiXFxuICAgICAgICBbaXNFbmFibGVkXT1cXFwiIWlzQXV0aGVudGljYXRpbmdcXFwiXFxuICAgICAgICBbY2xhc3MubGlnaHRdPVxcXCIhaXNMb2dnaW5nSW5cXFwiXFxuICAgICAgICByb3c9XFxcIjFcXFwiPjwvVGV4dEZpZWxkPlxcblxcbiAgICAgIDxBY3Rpdml0eUluZGljYXRvclxcbiAgICAgICAgW2J1c3ldPVxcXCJpc0F1dGhlbnRpY2F0aW5nXFxcIlxcbiAgICAgICAgcm93U3Bhbj1cXFwiMlxcXCI+PC9BY3Rpdml0eUluZGljYXRvcj5cXG4gICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICA8QnV0dG9uXFxuICAgICAgW3RleHRdPVxcXCJpc0xvZ2dpbmdJbiA/ICdMb2dpbicgOiAnU2lnbiB1cCdcXFwiXFxuICAgICAgW2lzRW5hYmxlZF09XFxcIiFpc0F1dGhlbnRpY2F0aW5nXFxcIlxcbiAgICAgIGNsYXNzPVxcXCJzdWJtaXQtYnV0dG9uXFxcIlxcbiAgICAgICh0YXApPVxcXCJzdWJtaXQoKVxcXCI+PC9CdXR0b24+XFxuXFxuICAgIDxMYWJlbFxcbiAgICAgIGNsYXNzPVxcXCJmb3Jnb3QtcGFzc3dvcmQtbGFiZWxcXFwiXFxuICAgICAgdGV4dD1cXFwiRm9yZ290IHBhc3N3b3JkP1xcXCJcXG4gICAgICAodGFwKT1cXFwiZm9yZ290UGFzc3dvcmQoKVxcXCJcXG4gICAgICBbdmlzaWJpbGl0eV09XFxcImlzTG9nZ2luZ0luID8gJ3Zpc2libGUnIDogJ2hpZGRlbidcXFwiPjwvTGFiZWw+XFxuXFxuICAgIDxTdGFja0xheW91dCAjc2lnblVwU3RhY2tcXG4gICAgICBjbGFzcz1cXFwic2lnbi11cC1zdGFja1xcXCJcXG4gICAgICAodGFwKT1cXFwidG9nZ2xlRGlzcGxheSgpXFxcIlxcbiAgICAgIHRyYW5zbGF0ZVk9XFxcIjUwXFxcIj5cXG4gICAgICA8TGFiZWxcXG4gICAgICAgIFt0ZXh0XT1cXFwiaXNMb2dnaW5nSW4gPyAnU2lnbiB1cCBoZXJlJyA6ICdCYWNrIHRvIGxvZ2luJ1xcXCI+PC9MYWJlbD5cXG4gICAgPC9TdGFja0xheW91dD5cXG4gIDwvU3RhY2tMYXlvdXQ+XFxuXFxuICA8IS0tIFRoZSBmcnVpdCBsb2dvIHRoYXQgYXBwZWFycyB3aXRoaW4gdGhlIGNvbnRhaW5lciAtLT5cXG4gIDxBYnNvbHV0ZUxheW91dCAjbG9nb0NvbnRhaW5lclxcbiAgICBjbGFzcz1cXFwibG9nby1jb250YWluZXJcXFwiPlxcbiAgICA8SW1hZ2VcXG4gICAgICBzcmM9XFxcInJlczovL2xvZ29fbG9naW5cXFwiXFxuICAgICAgc3RyZXRjaD1cXFwibm9uZVxcXCI+PC9JbWFnZT5cXG4gIDwvQWJzb2x1dGVMYXlvdXQ+XFxuXFxuPC9HcmlkTGF5b3V0PlxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2NvbG9yXCI7XG5pbXBvcnQgeyBjb25uZWN0aW9uVHlwZSwgZ2V0Q29ubmVjdGlvblR5cGUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9jb25uZWN0aXZpdHlcIjtcbmltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2FuaW1hdGlvblwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlld1wiO1xuaW1wb3J0IHsgcHJvbXB0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcblxuaW1wb3J0IHsgYWxlcnQsIExvZ2luU2VydmljZSwgVXNlciB9IGZyb20gXCIuLi9zaGFyZWRcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImdyLWxvZ2luXCIsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiBcIi4vbG9naW4uY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2xvZ2luLWNvbW1vbi5jc3NcIiwgXCIuL2xvZ2luLmNvbXBvbmVudC5jc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdXNlcjogVXNlcjtcbiAgaXNMb2dnaW5nSW4gPSB0cnVlO1xuICBpc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XG5cbiAgQFZpZXdDaGlsZChcImluaXRpYWxDb250YWluZXJcIiwgeyBzdGF0aWM6IGZhbHNlIH0pIGluaXRpYWxDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJtYWluQ29udGFpbmVyXCIsIHsgc3RhdGljOiBmYWxzZSB9KSBtYWluQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwibG9nb0NvbnRhaW5lclwiLCB7IHN0YXRpYzogZmFsc2UgfSkgbG9nb0NvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImZvcm1Db250cm9sc1wiLCB7IHN0YXRpYzogZmFsc2UgfSkgZm9ybUNvbnRyb2xzOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwic2lnblVwU3RhY2tcIiwgeyBzdGF0aWM6IGZhbHNlIH0pIHNpZ25VcFN0YWNrOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwicGFzc3dvcmRcIiwgeyBzdGF0aWM6IGZhbHNlIH0pIHBhc3N3b3JkOiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSB1c2VyU2VydmljZTogTG9naW5TZXJ2aWNlLFxuICAgIHByaXZhdGUgcGFnZTogUGFnZSkge1xuICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XG4gICAgLy8gdGhpcy5wYWdlLmNsYXNzTmFtZSA9IFwibG9naW4tcGFnZVwiO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gIH1cblxuICBmb2N1c1Bhc3N3b3JkKCkge1xuICAgIHRoaXMucGFzc3dvcmQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgc3RhcnRCYWNrZ3JvdW5kQW5pbWF0aW9uKGJhY2tncm91bmQpIHtcbiAgICBiYWNrZ3JvdW5kLmFuaW1hdGUoe1xuICAgICAgc2NhbGU6IHsgeDogMS4wLCB5OiAxLjAgfSxcbiAgICAgIGR1cmF0aW9uOiAxMDAwMFxuICAgIH0pO1xuICB9XG5cbiAgc3VibWl0KCkge1xuICAgIGlmICghdGhpcy51c2VyLmlzVmFsaWRFbWFpbCgpKSB7XG4gICAgICBhbGVydChcIkVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzcy5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5pc0xvZ2dpbmdJbikge1xuICAgICAgdGhpcy5sb2dpbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNpZ25VcCgpO1xuICAgIH1cbiAgfVxuXG4gIGxvZ2luKCkge1xuICAgIGlmIChnZXRDb25uZWN0aW9uVHlwZSgpID09PSBjb25uZWN0aW9uVHlwZS5ub25lKSB7XG4gICAgICBhbGVydChcIkdyb2NlcmllcyByZXF1aXJlcyBhbiBpbnRlcm5ldCBjb25uZWN0aW9uIHRvIGxvZyBpbi5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy51c2VyU2VydmljZS5sb2dpbih0aGlzLnVzZXIpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL1wiXSk7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgIGFsZXJ0KFwiVW5mb3J0dW5hdGVseSB3ZSBjb3VsZCBub3QgZmluZCB5b3VyIGFjY291bnQuXCIpO1xuICAgICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICApO1xuICB9XG5cbiAgc2lnblVwKCkge1xuICAgIGlmIChnZXRDb25uZWN0aW9uVHlwZSgpID09PSBjb25uZWN0aW9uVHlwZS5ub25lKSB7XG4gICAgICBhbGVydChcIkdyb2NlcmllcyByZXF1aXJlcyBhbiBpbnRlcm5ldCBjb25uZWN0aW9uIHRvIHJlZ2lzdGVyLlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnVzZXJTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMudXNlcilcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBhbGVydChcIllvdXIgYWNjb3VudCB3YXMgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWQuXCIpO1xuICAgICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMudG9nZ2xlRGlzcGxheSgpO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyb3JEZXRhaWxzKSA9PiB7XG4gICAgICAgICAgaWYgKGVycm9yRGV0YWlscy5lcnJvciAmJiBlcnJvckRldGFpbHMuZXJyb3IuZXJyb3IgPT09IFwiVXNlckFscmVhZHlFeGlzdHNcIikge1xuICAgICAgICAgICAgYWxlcnQoXCJUaGlzIGVtYWlsIGFkZHJlc3MgaXMgYWxyZWFkeSBpbiB1c2UuXCIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGVydChcIlVuZm9ydHVuYXRlbHkgd2Ugd2VyZSB1bmFibGUgdG8gY3JlYXRlIHlvdXIgYWNjb3VudC5cIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICApO1xuICB9XG5cbiAgZm9yZ290UGFzc3dvcmQoKSB7XG4gICAgcHJvbXB0KHtcbiAgICAgIHRpdGxlOiBcIkZvcmdvdCBQYXNzd29yZFwiLFxuICAgICAgbWVzc2FnZTogXCJFbnRlciB0aGUgZW1haWwgYWRkcmVzcyB5b3UgdXNlZCB0byByZWdpc3RlciBmb3IgR3JvY2VyaWVzIHRvIHJlc2V0IHlvdXIgcGFzc3dvcmQuXCIsXG4gICAgICBkZWZhdWx0VGV4dDogXCJcIixcbiAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiLFxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIlxuICAgIH0pLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChkYXRhLnJlc3VsdCkge1xuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLnJlc2V0UGFzc3dvcmQoZGF0YS50ZXh0LnRyaW0oKSlcbiAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIGFsZXJ0KFwiWW91ciBwYXNzd29yZCB3YXMgc3VjY2Vzc2Z1bGx5IHJlc2V0LiBQbGVhc2UgY2hlY2sgeW91ciBlbWFpbCBmb3IgaW5zdHJ1Y3Rpb25zIG9uIGNob29zaW5nIGEgbmV3IHBhc3N3b3JkLlwiKTtcbiAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICBhbGVydChcIlVuZm9ydHVuYXRlbHksIGFuIGVycm9yIG9jY3VycmVkIHJlc2V0dGluZyB5b3VyIHBhc3N3b3JkLlwiKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHRvZ2dsZURpc3BsYXkoKSB7XG4gICAgdGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luO1xuICAgIGxldCBtYWluQ29udGFpbmVyID0gPFZpZXc+dGhpcy5tYWluQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgbWFpbkNvbnRhaW5lci5hbmltYXRlKHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5pc0xvZ2dpbmdJbiA/IG5ldyBDb2xvcihcIndoaXRlXCIpIDogbmV3IENvbG9yKFwiIzMwMTIxN1wiKSxcbiAgICAgIGR1cmF0aW9uOiAyMDBcbiAgICB9KTtcbiAgfVxuXG4gIHNob3dNYWluQ29udGVudCgpIHtcbiAgICBsZXQgaW5pdGlhbENvbnRhaW5lciA9IDxWaWV3PnRoaXMuaW5pdGlhbENvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xuICAgIGxldCBtYWluQ29udGFpbmVyID0gPFZpZXc+dGhpcy5tYWluQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgbGV0IGxvZ29Db250YWluZXIgPSA8Vmlldz50aGlzLmxvZ29Db250YWluZXIubmF0aXZlRWxlbWVudDtcbiAgICBsZXQgZm9ybUNvbnRyb2xzID0gPFZpZXc+dGhpcy5mb3JtQ29udHJvbHMubmF0aXZlRWxlbWVudDtcbiAgICBsZXQgc2lnblVwU3RhY2sgPSA8Vmlldz50aGlzLnNpZ25VcFN0YWNrLm5hdGl2ZUVsZW1lbnQ7XG4gICAgbGV0IGFuaW1hdGlvbnMgPSBbXTtcblxuICAgIC8vIEZhZGUgb3V0IHRoZSBpbml0aWFsIGNvbnRlbnQgb3ZlciBvbmUgaGFsZiBzZWNvbmRcbiAgICBpbml0aWFsQ29udGFpbmVyLmFuaW1hdGUoe1xuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIGR1cmF0aW9uOiA1MDBcbiAgICB9KS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgLy8gQWZ0ZXIgdGhlIGFuaW1hdGlvbiBjb21wbGV0ZXMsIGhpZGUgdGhlIGluaXRpYWwgY29udGFpbmVyIGFuZFxuICAgICAgLy8gc2hvdyB0aGUgbWFpbiBjb250YWluZXIgYW5kIGxvZ28uIFRoZSBtYWluIGNvbnRhaW5lciBhbmQgbG9nbyB3aWxsXG4gICAgICAvLyBub3QgaW1tZWRpYXRlbHkgYXBwZWFyIGJlY2F1c2UgdGhlaXIgb3BhY2l0eSBpcyBzZXQgdG8gMCBpbiBDU1MuXG4gICAgICBpbml0aWFsQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSBcImNvbGxhcHNlXCI7XG4gICAgICBtYWluQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgIGxvZ29Db250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuXG4gICAgICAvLyBGYWRlIGluIHRoZSBtYWluIGNvbnRhaW5lciBhbmQgbG9nbyBvdmVyIG9uZSBoYWxmIHNlY29uZC5cbiAgICAgIGFuaW1hdGlvbnMucHVzaCh7IHRhcmdldDogbWFpbkNvbnRhaW5lciwgb3BhY2l0eTogMSwgZHVyYXRpb246IDUwMCB9KTtcbiAgICAgIGFuaW1hdGlvbnMucHVzaCh7IHRhcmdldDogbG9nb0NvbnRhaW5lciwgb3BhY2l0eTogMSwgZHVyYXRpb246IDUwMCB9KTtcblxuICAgICAgLy8gU2xpZGUgdXAgdGhlIGZvcm0gY29udHJvbHMgYW5kIHNpZ24gdXAgY29udGFpbmVyLlxuICAgICAgYW5pbWF0aW9ucy5wdXNoKHsgdGFyZ2V0OiBzaWduVXBTdGFjaywgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IDAgfSwgb3BhY2l0eTogMSwgZGVsYXk6IDUwMCwgZHVyYXRpb246IDE1MCB9KTtcbiAgICAgIGFuaW1hdGlvbnMucHVzaCh7IHRhcmdldDogZm9ybUNvbnRyb2xzLCB0cmFuc2xhdGU6IHsgeDogMCwgeTogMCB9LCBvcGFjaXR5OiAxLCBkZWxheTogNjUwLCBkdXJhdGlvbjogMTUwIH0pO1xuXG4gICAgICAvLyBLaWNrIG9mZiB0aGUgYW5pbWF0aW9uIHF1ZXVlXG4gICAgICBuZXcgQW5pbWF0aW9uKGFuaW1hdGlvbnMsIGZhbHNlKS5wbGF5KCk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IGxvZ2luUm91dGluZyB9IGZyb20gXCIuL2xvZ2luLnJvdXRpbmdcIjtcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSBcIi4vbG9naW4uY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgbG9naW5Sb3V0aW5nLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBMb2dpbkNvbXBvbmVudFxuICBdLFxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Nb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tIFwiLi9sb2dpbi5jb21wb25lbnRcIjtcblxuY29uc3QgbG9naW5Sb3V0ZXM6IFJvdXRlcyA9IFtcbiAgeyBwYXRoOiBcImxvZ2luXCIsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQgfSxcbl07XG5leHBvcnQgY29uc3QgbG9naW5Sb3V0aW5nOiBNb2R1bGVXaXRoUHJvdmlkZXJzID0gUm91dGVyTW9kdWxlLmZvckNoaWxkKGxvZ2luUm91dGVzKTsiLCJpbXBvcnQgeyBwbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm1cIjtcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gXCIuL2FwcC5tb2R1bGVcIjtcblxucGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IGdldFN0cmluZywgc2V0U3RyaW5nIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcblxuY29uc3QgdG9rZW5LZXkgPSBcInRva2VuXCI7XG5cbmV4cG9ydCBjbGFzcyBCYWNrZW5kU2VydmljZSB7XG4gIHN0YXRpYyBiYXNlVXJsID0gXCJodHRwczovL2JhYXMua2ludmV5LmNvbS9cIjtcbiAgc3RhdGljIGFwcEtleSA9IFwia2lkX0h5SG9UX1JFZlwiO1xuICBzdGF0aWMgYXBwVXNlckhlYWRlciA9IFwiQmFzaWMgYTJsa1gwaDVTRzlVWDFKRlpqbzFNVGt4TURKbFpXRmhNelEwTXpNeU9ERmpOMk15T0RNM01HUTVPVEl6TVFcIjtcbiAgc3RhdGljIGFwaVVybCA9IFwiXCI7XG5cbiAgc3RhdGljIGlzTG9nZ2VkSW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhZ2V0U3RyaW5nKHRva2VuS2V5KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdG9rZW4oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZ2V0U3RyaW5nKHRva2VuS2V5KTtcbiAgfVxuXG4gIHN0YXRpYyBzZXQgdG9rZW4odGhlVG9rZW46IHN0cmluZykge1xuICAgIHNldFN0cmluZyh0b2tlbktleSwgdGhlVG9rZW4pO1xuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBkaWFsb2dzTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGFsZXJ0KG1lc3NhZ2U6IHN0cmluZykge1xuICByZXR1cm4gZGlhbG9nc01vZHVsZS5hbGVydCh7XG4gICAgdGl0bGU6IFwiR3JvY2VyaWVzXCIsXG4gICAgb2tCdXR0b25UZXh0OiBcIk9LXCIsXG4gICAgbWVzc2FnZTogbWVzc2FnZVxuICB9KTtcbn1cbiIsImV4cG9ydCAqIGZyb20gXCIuL2JhY2tlbmQuc2VydmljZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdXNlci5tb2RlbFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vbG9naW4uc2VydmljZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vZGlhbG9nLXV0aWxcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3N0YXR1cy1iYXItdXRpbFwiOyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMsIEh0dHBDbGllbnQsIEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyB0aHJvd0Vycm9yIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IHRhcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vdXNlci5tb2RlbFwiO1xuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tIFwiLi9iYWNrZW5kLnNlcnZpY2VcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvZ2luU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG5cbiAgcmVnaXN0ZXIodXNlcjogVXNlcikge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcbiAgICAgIEJhY2tlbmRTZXJ2aWNlLmJhc2VVcmwgKyBcInVzZXIvXCIgKyBCYWNrZW5kU2VydmljZS5hcHBLZXksXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHVzZXJuYW1lOiB1c2VyLmVtYWlsLFxuICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmRcbiAgICAgIH0pLFxuICAgICAgeyBoZWFkZXJzOiB0aGlzLmdldENvbW1vbkhlYWRlcnMoKSB9XG4gICAgKVxuICAgIC5waXBlKGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcnMpKTtcbiAgfVxuXG4gIGxvZ2luKHVzZXI6IFVzZXIpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXG4gICAgICBCYWNrZW5kU2VydmljZS5iYXNlVXJsICsgXCJ1c2VyL1wiICsgQmFja2VuZFNlcnZpY2UuYXBwS2V5ICsgXCIvbG9naW5cIixcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdXNlcm5hbWU6IHVzZXIuZW1haWwsXG4gICAgICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkXG4gICAgICB9KSxcbiAgICAgIHsgaGVhZGVyczogdGhpcy5nZXRDb21tb25IZWFkZXJzKCkgfVxuICAgIClcbiAgICAucGlwZShcbiAgICAgIHRhcCgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIEJhY2tlbmRTZXJ2aWNlLnRva2VuID0gZGF0YS5fa21kLmF1dGh0b2tlbjtcbiAgICAgIH0pLFxuICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9ycylcbiAgICApO1xuICB9XG5cbiAgbG9nb2ZmKCkge1xuICAgIEJhY2tlbmRTZXJ2aWNlLnRva2VuID0gXCJcIjtcbiAgfVxuXG4gIHJlc2V0UGFzc3dvcmQoZW1haWwpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXG4gICAgICBCYWNrZW5kU2VydmljZS5iYXNlVXJsICsgXCJycGMvXCIgKyBCYWNrZW5kU2VydmljZS5hcHBLZXkgKyBcIi9cIiArIGVtYWlsICsgXCIvdXNlci1wYXNzd29yZC1yZXNldC1pbml0aWF0ZVwiLFxuICAgICAge30sXG4gICAgICB7IGhlYWRlcnM6IHRoaXMuZ2V0Q29tbW9uSGVhZGVycygpIH1cbiAgICApLnBpcGUoY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9ycykpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDb21tb25IZWFkZXJzKCkge1xuICAgIHJldHVybiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICBcIkF1dGhvcml6YXRpb25cIjogQmFja2VuZFNlcnZpY2UuYXBwVXNlckhlYWRlcixcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRXJyb3JzKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkge1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XG4gICAgcmV0dXJuIHRocm93RXJyb3IoZXJyb3IpO1xuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBhcHBsaWNhdGlvbiBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuaW1wb3J0ICogYXMgcGxhdGZvcm0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcblxuZGVjbGFyZSB2YXIgYW5kcm9pZDogYW55O1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0U3RhdHVzQmFyQ29sb3JzKCkge1xuICAvLyBNYWtlIHRoZSBBbmRyb2lkIHN0YXR1cyBiYXIgdHJhbnNwYXJlbnQuXG4gIC8vIFNlZSBodHRwOi8vYnJhZG1hcnRpbi5uZXQvMjAxNi8wMy8xMC9mdWxsc2NyZWVuLWFuZC1uYXZpZ2F0aW9uLWJhci1jb2xvci1pbi1hLW5hdGl2ZXNjcmlwdC1hbmRyb2lkLWFwcC9cbiAgLy8gZm9yIGRldGFpbHMgb24gdGhlIHRlY2huaXF1ZSB1c2VkLlxuICBpZiAoYXBwbGljYXRpb24uYW5kcm9pZCAmJiBwbGF0Zm9ybS5kZXZpY2Uuc2RrVmVyc2lvbiA+PSBcIjIxXCIpIHtcbiAgICBhcHBsaWNhdGlvbi5hbmRyb2lkLm9uKFwiYWN0aXZpdHlTdGFydGVkXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IFZpZXcgPSBhbmRyb2lkLnZpZXcuVmlldztcbiAgICAgIGNvbnN0IHdpbmRvdyA9IGFwcGxpY2F0aW9uLmFuZHJvaWQuc3RhcnRBY3Rpdml0eS5nZXRXaW5kb3coKTtcbiAgICAgIHdpbmRvdy5zZXRTdGF0dXNCYXJDb2xvcigweDAwMDAwMCk7XG5cbiAgICAgIGNvbnN0IGRlY29yVmlldyA9IHdpbmRvdy5nZXREZWNvclZpZXcoKTtcbiAgICAgIGRlY29yVmlldy5zZXRTeXN0ZW1VaVZpc2liaWxpdHkoXG4gICAgICAgIFZpZXcuU1lTVEVNX1VJX0ZMQUdfTEFZT1VUX1NUQUJMRVxuICAgICAgICB8IFZpZXcuU1lTVEVNX1VJX0ZMQUdfTEFZT1VUX0hJREVfTkFWSUdBVElPTlxuICAgICAgICB8IFZpZXcuU1lTVEVNX1VJX0ZMQUdfTEFZT1VUX0ZVTExTQ1JFRU5cbiAgICAgICAgfCBWaWV3LlNZU1RFTV9VSV9GTEFHX0lNTUVSU0lWRV9TVElDS1kpO1xuICAgIH0pO1xuICB9XG59XG4iLCJjb25zdCB2YWxpZGF0b3IgPSByZXF1aXJlKFwiZW1haWwtdmFsaWRhdG9yXCIpO1xuXG5leHBvcnQgY2xhc3MgVXNlciB7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG4gIGlzVmFsaWRFbWFpbCgpIHtcbiAgICByZXR1cm4gdmFsaWRhdG9yLnZhbGlkYXRlKHRoaXMuZW1haWwpO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==