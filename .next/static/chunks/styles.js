(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./static/bootstrap.min.scss":
/*!***********************************!*\
  !*** ./static/bootstrap.min.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
<<<<<<< HEAD
            injectCss(link, link.href.split("?")[0] + "?unix=1564653414678");
=======
            injectCss(link, link.href.split("?")[0] + "?unix=1564649342360");
>>>>>>> 857b29260f50930c47ca489e60e02333ca1c618a
          });
      }
    }
  

/***/ }),

/***/ "./static/styles.scss":
/*!****************************!*\
  !*** ./static/styles.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
<<<<<<< HEAD
            injectCss(link, link.href.split("?")[0] + "?unix=1564653413843");
=======
            injectCss(link, link.href.split("?")[0] + "?unix=1564649340018");
>>>>>>> 857b29260f50930c47ca489e60e02333ca1c618a
          });
      }
    }
  

/***/ })

}]);
//# sourceMappingURL=styles.js.map