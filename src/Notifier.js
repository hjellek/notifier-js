///<reference path='../definitions/humane/humane.d.ts' />
var Notifier = (function () {
    function Notifier() {
        this.options = {
            clickToHide: false,
            timeout: 2500,
            type: Notifier.TYPE_INFO
        };
    }
    Notifier.prototype.remove = function (callback) {
        this.humane.remove(callback);
    };

    Notifier.success = function (message, options) {
        if (typeof options === "undefined") { options = {}; }
        return Notifier.createByType(message, Notifier.TYPE_SUCCESS, options);
    };

    Notifier.error = function (message, options) {
        if (typeof options === "undefined") { options = {}; }
        return Notifier.createByType(message, Notifier.TYPE_ERROR, options);
    };

    Notifier.info = function (message, options) {
        if (typeof options === "undefined") { options = {}; }
        return Notifier.createByType(message, Notifier.TYPE_INFO, options);
    };

    Notifier.warning = function (message, options) {
        if (typeof options === "undefined") { options = {}; }
        return Notifier.createByType(message, Notifier.TYPE_WARNING, options);
    };

    Notifier.createByType = function (message, type, options) {
        options.type = type;
        var notifier = new Notifier();
        notifier.create(message, options);
        return notifier;
    };

    Notifier.prototype.create = function (message, overrides) {
        if (typeof overrides === "undefined") { overrides = {}; }
        this.message = message;

        for (var option in overrides) {
            this.options[option] = overrides[option];
        }

        this.show();
    };

    Notifier.prototype.show = function () {
        var humaneOptions = this.getHumaneOptions();
        var spawn = humane.spawn(humaneOptions);
        this.humane = spawn(this.message);
    };

    Notifier.prototype.getHumaneOptions = function () {
        var options = this.options;
        var humaneOptions = {
            clickToClose: options.clickToHide,
            timeout: options.timeout,
            baseClns: 'humane-bigbox',
            addnCls: this.getHumaneAddClnsByType(options.type)
        };
        return humaneOptions;
    };

    Notifier.prototype.getHumaneAddClnsByType = function (type) {
        switch (type) {
            case Notifier.TYPE_SUCCESS:
                return 'humane-bigbox-success';
            case Notifier.TYPE_INFO:
                return 'humane-bigbox-info';
            case Notifier.TYPE_ERROR:
                return 'humane-bigbox-error';
            case Notifier.TYPE_WARNING:
                return 'humane-bigbox-warning';
        }
        return '';
    };
    Notifier.TYPE_SUCCESS = 'success';
    Notifier.TYPE_ERROR = 'error';
    Notifier.TYPE_INFO = 'info';
    Notifier.TYPE_WARNING = 'warning';
    return Notifier;
})();
//# sourceMappingURL=Notifier.js.map
