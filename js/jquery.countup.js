(function ($) {
  "use strict";

  $.fn.countUp = function (options) {
    const settings = $.extend(
      {
        time: 2000,
        delay: 10,
      },
      options,
    );

    return this.each(function () {
      const $this = $(this);

      const counterUpper = () => {
        if (!$this.data("counterupTo")) {
          $this.data("counterupTo", $this.text());
        }

        const time = parseInt($this.data("counter-time")) || settings.time;
        const delay = parseInt($this.data("counter-delay")) || settings.delay;
        const divisions = time / delay;
        let num = $this.data("counterupTo");
        const nums = [num];

        const isComma = /[0-9]+,[0-9]+/.test(num);
        num = num.replace(/,/g, "");
        const isInt = /^[0-9]+$/.test(num);
        const isFloat = /^[0-9]+\.[0-9]+$/.test(num);
        const decimalPlaces = isFloat ? (num.split(".")[1] || []).length : 0;

        for (let i = divisions; i >= 1; i--) {
          let newNum = isFloat
            ? parseFloat((num / divisions) * i).toFixed(decimalPlaces)
            : parseInt(Math.round((num / divisions) * i));

          if (isComma) {
            while (/(\d+)(\d{3})/.test(newNum.toString())) {
              newNum = newNum.toString().replace(/(\d+)(\d{3})/, "$1,$2");
            }
          }

          nums.unshift(newNum);
        }

        $this.data("counterup-nums", nums);
        $this.text("0");

        const f = () => {
          $this.text($this.data("counterup-nums").shift());
          if ($this.data("counterup-nums").length) {
            setTimeout($this.data("counterup-func"), delay);
          } else {
            $this.removeData("counterup-nums");
            $this.removeData("counterup-func");
          }
        };

        $this.data("counterup-func", f);
        setTimeout($this.data("counterup-func"), delay);
      };

      // Kích hoạt khi vào viewport
      $this.waypoint(
        (direction) => {
          if (direction === "down" || direction === "up") {
            counterUpper();
          }
        },
        {
          offset: "100%",
          triggerOnce: true,
        },
      );
    });
  };
})(jQuery);
