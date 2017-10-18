(function () {
    "use strict";

    var dots = 0;

    $(function () {
        setInterval(type, 200);
        redirect();
    });

    function redirect() {
        window.location.replace("http://4c1c08kglb7h1azlt-qk0z7p2v.hop.clickbank.net/");
    }

    function type() {
        if (dots < 3) {
            $("#dots").append(".");
            dots++;
        } else {
            $("#dots").html("");
            dots = 0;
        }
    }

})();

