// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"cssData.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var str = "#showArea{\n    background-color: rgb(255,230,0);\n}\n.pikachu{\n    position:absolute;\n    left:0;\n    right: 0;\n    top: 0;\n    bottom:0;\n    margin:auto;\n    width: 600px;\n    height: 400px;\n}\n.pikachu .eye-nose{\n    display: flex;\n    justify-content:center;\n    padding-top:78px;\n    align-items:flex-end;\n}\n.eye-nose .eye{\n    width:64px;\n    height: 64px;\n    border:1px solid #000;\n    background-color: rgb(46,46,46);\n    border-radius: 50%;\n}\n.eye-nose .eye::after{\n    content:'';\n    display: block;\n    width:25px;\n    height: 25px;\n    border:2px solid #000;\n    background-color: #fff;\n    border-radius:50%;\n    margin-top:3px;\n    margin-left:8px;\n}\n.eye-nose .nose{\n    width:28px;\n    height: 19px;\n    border-radius:9px 9px 0 0;\n    overflow: hidden;\n    margin-left:76px;\n    margin-right:76px;\n    margin-bottom: 10px;\n}\n.eye-nose .nose::after{\n    content:'';\n    display: block;\n    width:20px;\n    height: 20px;\n    background-color: #000;\n    margin-left: auto;\n    margin-right:auto;\n    border-radius:0px 6px 3px 6px;\n    transform:rotate(45deg);\n    margin-top:-6px;\n}\n.nose:hover{\n    transform-origin: center 100%;\n    animation: 200ms linear infinite forwards wave;\n}\n@keyframes wave{\n    0%{\n        transform: rotate(0);\n    }33%{\n        transform: rotate(6deg);\n    }66%{\n        transform: rotate(-6deg);\n    }100%{\n        transform: rotate(0);\n    }\n}\n.pikachu .cheek-mouth{\n    display: flex;\n    justify-content:center;\n    padding-top:10px;\n    align-items: center;\n}\n.cheek-mouth .cheek{\n    width:88px;\n    height: 88px;\n    border:3px solid #000;\n    background-color: rgb(255,0,0);\n    border-radius: 50%;\n}\n.cheek-mouth .mouth{\n    height: 170px;\n    width:200px;\n    overflow: hidden;\n    margin-left: 16px;\n    margin-right: 16px;\n    position: relative;\n}\n.mouth .mouth-outline{\n    width:100px;\n    height: 680px;\n    border:3px solid #000;\n    transform: scaleX(1.6);\n    border-radius:50%;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: -520px;\n    position: relative;\n    background-color: rgb(155,0,10);\n    overflow: hidden;\n}\n.mouth-outline::after{\n    content:'';\n    display:block;\n    width:92px;\n    height: 148px;\n    border:1px solid red;\n    background-color: rgb(255,72,95);\n    border-radius:50%;\n    position:absolute;\n    bottom:-10px;\n    right: 0;\n    left: 0;\n    margin-left: auto;\n    margin-right: auto;\n}\n.mouth::before{\n    content:'';\n    display:block;\n    position: absolute;\n    width:80px;\n    height: 40px;\n    border:3px solid black;\n    top:-27px;\n    border-radius:0 0 0 80%;\n    transform:rotate(-26deg);\n    left: 16px;\n    z-index: 2;\n    background-color: rgb(255,230,0);\n}\n.mouth::after{\n    content:'';\n    display:block;\n    position: absolute;\n    width:80px;\n    height: 40px;\n    border:3px solid black;\n    top:-27px;\n    border-radius:0 0 80% 0;\n    transform:rotate(26deg);\n    right: 16px;\n    z-index: 2;\n    background-color: rgb(255,230,0);\n}\n@media (max-width:500px){\n    .pikachu{\n        width: 360px;\n        height: 360px;\n    }\n    .pikachu .cheek-mouth .mouth::after{\n        right:1px;\n    }\n    .pikachu .cheek-mouth .mouth::before{\n        left:1px;\n    }\n}";
exports.default = str;
},{}],"main.js":[function(require,module,exports) {
'use strict';

var _cssData = require('./cssData.js');

var _cssData2 = _interopRequireDefault(_cssData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
    n: 0,
    time: 20,
    str2: '',
    id: undefined,
    but: {
        '#pause': 'pause',
        '#play': 'play',
        '#speediness': 'speediness',
        '#normalSpeed': 'normalSpeed',
        '#lowSpeed': 'lowSpeed',
        '#rebroadcast': 'rebroadcast'
    },
    init: function init() {
        for (var key in player.but) {
            if (player.but.hasOwnProperty(key)) {
                document.querySelector(key).onclick = player[player.but[key]];
            }
        }
    },
    pause: function pause() {
        clearInterval(player.id);
    },
    play: function play() {
        player.id = setInterval(player.run, player.time);
    },
    run: function run() {
        if (player.n < _cssData2.default.length) {
            if (_cssData2.default.substring(player.n, player.n + 1) === '\n') {
                player.str2 += '<br>';
            } else if (_cssData2.default.substring(player.n, player.n + 1) === ' ') {
                player.str2 += '&nbsp';
            } else {
                player.str2 += _cssData2.default.substring(player.n, player.n + 1);
            }
            document.querySelector('#dome').innerHTML = _cssData2.default.substring(0, player.n);
            document.querySelector('#textArea').innerHTML = player.str2;
            player.n += 1;
            document.querySelector('#textArea').scrollTop = document.querySelector('#textArea').scrollHeight;
        } else clearInterval(player.id);
    },
    speediness: function speediness() {
        clearInterval(player.id);
        player.id = setInterval(player.run, 0);
    },
    normalSpeed: function normalSpeed() {
        clearInterval(player.id);
        player.id = setInterval(player.run, 20);
    },
    lowSpeed: function lowSpeed() {
        clearInterval(player.id);
        player.id = setInterval(player.run, 100);
    },
    rebroadcast: function rebroadcast() {
        return location.reload();
    }

};
player.init();
player.play();
},{"./cssData.js":"cssData.js"}],"C:\\Users\\86158\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\parcel\\src\\builtins\\hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '6464' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["C:\\Users\\86158\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\parcel\\src\\builtins\\hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.b09a8382.map