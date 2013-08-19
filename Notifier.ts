///<reference path='definitions/humane/humane.d.ts' />
class Notifier
{
    public static TYPE_SUCCESS = 'success';
    public static TYPE_ERROR = 'error';
    public static TYPE_INFO = 'info';
    public static TYPE_WARNING = 'warning';

    public static baseCssClass = 'humane-bigbox';
    public static additionalCssClass = 'humane-bigbox-';

    private options:NotifierOptions = {
        clickToHide:false,
        timeout: 2500,
        type:Notifier.TYPE_INFO
    };

    private message:string;

    private humane:any;

    public remove(callback?:()=>void)
    {
        this.humane.remove(callback);
    }

    public static success(message:string, options:NotifierOptions = {}):Notifier
    {
        return Notifier.createByType(message, Notifier.TYPE_SUCCESS, options);
    }

    public static error(message:string, options:NotifierOptions = {}):Notifier
    {
        return Notifier.createByType(message, Notifier.TYPE_ERROR, options);
    }

    public static info(message:string, options:NotifierOptions = {}):Notifier
    {
        return Notifier.createByType(message, Notifier.TYPE_INFO, options);
    }

    public static warning(message:string, options:NotifierOptions = {}):Notifier
    {
        return Notifier.createByType(message, Notifier.TYPE_WARNING, options);
    }

    private static createByType(message:string, type:string, options:NotifierOptions)
    {
        options.type = type;
        var notifier = new Notifier();
        notifier.create(message, options);
        return notifier;
    }

    private create(message:string, overrides:NotifierOptions = {})
    {
        this.message = message;

        for(var option in overrides)
        {
            this.options[option] = overrides[option];
        }

        this.show();
    }

    private show():void
    {
        var humaneOptions = this.getHumaneOptions();
        var spawn = humane.spawn(humaneOptions);
        this.humane = spawn(this.message);
    }

    private getHumaneOptions()
    {
        var options = this.options;
        var humaneOptions = {
            clickToClose: options.clickToHide,
            timeout: options.timeout,
            baseClns: Notifier.baseCssClass,
            addnCls: this.getHumaneAdditionalClassByType(options.type)
        };
        return humaneOptions;
    }

    private getHumaneAdditionalClassByType(type)
    {
        var base = Notifier.additionalCssClass;
        switch(type)
        {
            case Notifier.TYPE_SUCCESS:
                return base+'success';
            case Notifier.TYPE_INFO:
                return base+'info';
            case Notifier.TYPE_ERROR:
                return base+'error';
            case Notifier.TYPE_WARNING:
                return base+'warning';
        }
        return '';
    }
}

interface NotifierOptions {
    clickToHide?:boolean;
    timeout?: number;
    type?:string
}