/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var TinderUI_1 = __webpack_require__(3);
	ReactDOM.render(React.createElement(TinderUI_1.TinderUI, null), document.getElementById('content'));


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var data_ts_1 = __webpack_require__(4);
	var Button_1 = __webpack_require__(7);
	var CardList_1 = __webpack_require__(5);
	var TinderUI = (function (_super) {
	    __extends(TinderUI, _super);
	    function TinderUI() {
	        _super.call(this);
	        this.cardIndex = 0;
	        this.state = {
	            selectCard: {
	                id: data_ts_1.data[this.cardIndex].id,
	                state: null
	            },
	            isCardAnimetion: false
	        };
	    }
	    TinderUI.prototype.changeCard = function (state) {
	        var _this = this;
	        this.setState({
	            selectCard: {
	                id: data_ts_1.data[this.cardIndex++].id,
	                state: state
	            },
	            isCardAnimetion: true
	        });
	        setTimeout(function () {
	            _this.setState({
	                isCardAnimetion: false,
	                selectCard: _this.state.selectCard
	            });
	        }, 600);
	    };
	    TinderUI.prototype.render = function () {
	        return (React.createElement("div", null, React.createElement(CardList_1.CardList, {data: data_ts_1.data, selectCard: this.state.selectCard}), this.cardIndex !== data_ts_1.data.length ? (React.createElement("div", {className: "button-wapper"}, React.createElement(Button_1.Button, {onClick: this.changeCard.bind(this, 'noop'), disabled: this.state.isCardAnimetion}, React.createElement("i", {className: "fa fa-meh-o fa-3", "aria-hidden": "true"}), React.createElement("br", null), "ごめんなさい"), React.createElement(Button_1.Button, {className: "like-button", onClick: this.changeCard.bind(this, 'like'), disabled: this.state.isCardAnimetion}, React.createElement("i", {className: "fa fa-thumbs-o-up fa-3", "aria-hidden": "true"}), React.createElement("br", null), "ありがとう"), React.createElement("p", null, "ごめんなさいを押してもお相手には通知されません"))) : ''));
	    };
	    return TinderUI;
	}(React.Component));
	exports.TinderUI = TinderUI;


/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	exports.data = [
	    {
	        "id": 18439028,
	        "name": "会員1",
	        "age": 30,
	        "address": "東京",
	        "tweet": "aaa",
	        "profession": "社長",
	        "height": 153,
	        "imageUrl": "image/18439028.jpg"
	    },
	    {
	        "id": 2423,
	        "name": "会員2",
	        "age": 20,
	        "address": "大阪",
	        "tweet": "bbb",
	        "profession": "会社員",
	        "height": 170,
	        "imageUrl": "image/2423.jpg"
	    },
	    {
	        "id": 3656,
	        "name": "会員3",
	        "age": 30,
	        "address": "東京",
	        "tweet": "aaa",
	        "profession": "社長",
	        "height": 153,
	        "imageUrl": "image/3656.jpg"
	    },
	    {
	        "id": 43565,
	        "name": "会員4",
	        "age": 20,
	        "address": "大阪",
	        "tweet": "bbb",
	        "profession": "会社員",
	        "height": 170,
	        "imageUrl": "image/43565.jpg"
	    },
	    {
	        "id": 56346,
	        "name": "会員5",
	        "age": 30,
	        "address": "東京",
	        "tweet": "aaa",
	        "profession": "社長",
	        "height": 153,
	        "imageUrl": "image/56346.jpg"
	    },
	    {
	        "id": 66436,
	        "name": "会員6",
	        "age": 20,
	        "address": "大阪",
	        "tweet": "bbb",
	        "profession": "会社員",
	        "height": 170,
	        "imageUrl": "image/18439028.jpg"
	    }
	];
	exports.detailData = {
	    18439028: {
	        introduction: "hoge hufa piyo chuorc ccoa",
	        imageUrls: ["image/18439028.jpg", "image/18439028.jpg"]
	    },
	    2423: {
	        introduction: "hoge hufa piyo chuorc ccoa",
	        imageUrls: ["image/18439028.jpg", "image/18439028.jpg"]
	    },
	    3656: {
	        introduction: "hoge hufa piyo chuorc ccoa",
	        imageUrls: ["image/18439028.jpg", "image/18439028.jpg"]
	    },
	    43565: {
	        introduction: "hoge hufa piyo chuorc ccoa",
	        imageUrls: ["image/18439028.jpg", "image/18439028.jpg"]
	    },
	    56346: {
	        introduction: "hoge hufa piyo chuorc ccoa",
	        imageUrls: ["image/18439028.jpg", "image/18439028.jpg"]
	    },
	    66436: {
	        introduction: "hoge hufa piyo chuorc ccoa",
	        imageUrls: ["image/18439028.jpg", "image/18439028.jpg"]
	    }
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Card_1 = __webpack_require__(6);
	var CardList = (function (_super) {
	    __extends(CardList, _super);
	    function CardList() {
	        _super.apply(this, arguments);
	    }
	    CardList.prototype.render = function () {
	        var _this = this;
	        var cardNodes = this.props.data.map(function (data) { return (React.createElement(Card_1.Card, {key: data.id, state: (data.id === _this.props.selectCard.id) ?
	            _this.props.selectCard.state : null, name: data.name, age: data.age, address: data.address, tweet: data.tweet, profession: data.profession, height: data.height, imageUrl: data.imageUrl})); });
	        cardNodes.push(React.createElement("li", {className: "card no-card", key: "no-card"}, "カードがありません"));
	        cardNodes.reverse();
	        return (React.createElement("ul", {className: "cardList"}, cardNodes));
	    };
	    return CardList;
	}(React.Component));
	exports.CardList = CardList;
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Card_1.Card;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Card = (function (_super) {
	    __extends(Card, _super);
	    function Card() {
	        _super.apply(this, arguments);
	        this.evaluation = '';
	    }
	    Card.prototype.render = function () {
	        if (!this.evaluation && this.props.state) {
	            console.log(this.props.name + "\u306F" + this.props.state + "\u3055\u308C\u307E\u3057\u305F");
	            this.evaluation = this.props.state;
	        }
	        return (React.createElement("li", {className: 'card ' + this.evaluation}, React.createElement("div", {className: "card-img", style: { backgroundImage: "url(" + this.props.imageUrl + ")" }}, React.createElement("div", {className: "card-overlay"}, React.createElement("span", {className: "card-overlay-text"}, this.props.name + " " + this.props.age + "\u6B73 " + this.props.address), React.createElement("span", {className: "card-tweet"}, this.props.tweet))), React.createElement("div", {className: "card-profession"}, this.props.profession + " " + this.props.height + "cm")));
	    };
	    return Card;
	}(React.Component));
	exports.Card = Card;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Button = (function (_super) {
	    __extends(Button, _super);
	    function Button() {
	        _super.apply(this, arguments);
	    }
	    Button.prototype.render = function () {
	        return (React.createElement("button", {className: 'button ' + this.props.className, onClick: this.props.onClick.bind(this), disabled: this.props.disabled}, this.props.children));
	    };
	    return Button;
	}(React.Component));
	exports.Button = Button;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map