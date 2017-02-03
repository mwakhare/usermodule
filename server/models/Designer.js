"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var UserBase_1 = require("./UserBase");
var Designer = (function (_super) {
    __extends(Designer, _super);
    function Designer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.save = function () {
            return _this;
        };
        return _this;
    }
    return Designer;
}(UserBase_1.UserBase));
//# sourceMappingURL=Designer.js.map