"use strict";
// enum.
// numeric enums.
var Month;
(function (Month) {
    Month[Month["JAN"] = 1] = "JAN";
    Month[Month["FEB"] = 2] = "FEB";
    Month[Month["MAR"] = 3] = "MAR";
    Month[Month["APR"] = 4] = "APR";
    Month[Month["MAY"] = 5] = "MAY";
})(Month || (Month = {}));
console.info(Month.JAN);
console.info(Month.APR);
// string enums.
var Months;
(function (Months) {
    Months["JAN"] = "January";
    Months["FEB"] = "Februari";
    Months["MAR"] = "Maret";
    Months["APR"] = "April";
    Months["MAY"] = "Mei";
})(Months || (Months = {}));
console.info(Months.APR);
