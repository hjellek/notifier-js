///<reference path='Notifier.ts' />

var options:NotifierOptions = {
    clickToHide: false,
    timeout: 1000
};
Notifier.success("Success!", options);
Notifier.info("Information!", options);
Notifier.error("Error!", options);
Notifier.warning("Warning!", options);