var Proc = require('child_process');

var ClusterHat;
module.exports = ClusterHat = function () {
    var gpio_busy = false;
    var gpio_pin_led = 21;
    var gpio_pin_p1 = 22;
    var gpio_pin_p2 = 23
    var gpio_pin_p3 = 24;
    var gpio_pin_p4 = 25;

    var p1 = this.p1 = "p1";
    var p2 = this.p2 = "p2";
    var p3 = this.p3 = "p3";
    var p4 = this.p4 = "p4";
    var all = this.all = "all";

    var on = this.on = function (pi) {
        if (gpio_busy)
            return;

        gpio_write(gpio_pin_led, 1);
        gpio_busy = true;
        switch (pi) {
            case p1:
                gpio_write(gpio_pin_p1, 1);
                setTimeout(function () {
                    gpio_busy = false;
                }, 2000);
                break;
            case p2:
                gpio_write(gpio_pin_p2, 1);
                setTimeout(function () {
                    gpio_busy = false;
                }, 2000);
                break;
            case p3:
                gpio_write(gpio_pin_p3, 1);
                setTimeout(function () {
                    gpio_busy = false;
                }, 2000);
                break;
            case p4:
                gpio_write(gpio_pin_p4, 1);
                setTimeout(function () {
                    gpio_busy = false;
                }, 2000);
                break;
            case all:
                on(p1);
                setTimeout(function () {
                    on(p2);

                    setTimeout(function () {
                        on(p3);

                        setTimeout(function () {
                            on(p4);
                        }, 2100);
                    }, 2100);
                }, 2100);
                break;
            default:
                gpio_busy = false;
                break;
        }
    };

    var off = this.off = function (pi) {
        gpio_write(gpio_pin_led, 1);
        switch (pi) {
            case p1:
                gpio_write(gpio_pin_p1, 0);
                break;
            case p2:
                gpio_write(gpio_pin_p2, 0);
                break;
            case p3:
                gpio_write(gpio_pin_p3, 0);
                break;
            case p4:
                gpio_write(gpio_pin_p4, 0);
                break;
            case all:
                off(p1);
                off(p2);
                off(p3);
                off(p4);
                break;
        }
    };

    var gpio_write = function (pin, value) {
        var proc = Proc.exec(`gpio write ${pin} ${value}`, (err, stdout, stderr) => {
            if (err) {
                throw err;
            }
        });
    };
};