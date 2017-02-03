"use strict";
var UserBase = (function () {
    function UserBase(id, user_info) {
        var _this = this;
        this.save = function () {
            return _this;
        };
        this._id = id;
        this.user_info = user_info;
    }
    Object.defineProperty(UserBase.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserBase.prototype, "user_info", {
        get: function () {
            return this._user_info;
        },
        set: function (user_info) {
            this._user_info = user_info;
        },
        enumerable: true,
        configurable: true
    });
    return UserBase;
}());
exports.UserBase = UserBase;
//# sourceMappingURL=UserBase.js.map