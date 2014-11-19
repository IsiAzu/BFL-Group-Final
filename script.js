/**
 * Created by Isi on 11/11/14.
 */

var TWO_PI = Math.PI/2;

var constellations = {
    "uMajor":[
        {
            "cx": "34.619",
            "cy": "216.643"
        },
        {
            "cx": "120.619",
            "cy": "162.643"
        },
        {
            "cx": "267.619",
            "cy": "171.643"
        },
        {
            "cx": "305.619",
            "cy": "225.643"
        },
        {
            "cx": "317.619",
            "cy": "313.643"
        },
        {
            "cx": "413.619",
            "cy": "362.643"
        },
        {
            "cx": "546.619",
            "cy": "389.643"
        },
        {
            "cx": "555.619",
            "cy": "364.643"
        },
        {
            "cx": "394.619",
            "cy": "533.643"
        },
        {
            "cx": "396.619",
            "cy": "557.643"
        },
        {
            "cx": "417.619",
            "cy": "183.643"
        },
        {
            "cx": "404.619",
            "cy": "106.643"
        },
        {
            "cx": "720.619",
            "cy": "220.643"
        },
        {
            "cx": "544.619",
            "cy": "116.643"
        },
        {
            "cx": "553.619",
            "cy": "45.643"
        },
        {
            "cx": "667.619",
            "cy": "18.643"
        }
    ]
};

var params = {
    autostart: true,
    fullscreen: true
};
var palette = [
    {
        background: { r: 57, g: 109, b: 193}
    }
];
var time = false;

$(document).ready(function() {
    var elem = document.getElementById("ursa-major");
    elem.style.background = "black";

    //  Make an instance of two and put it on the page
    var two = new Two(params).appendTo(elem);
    document.body.style.background = "black";

    // Create a new constellation
    var ursaMajor = makeConst(constellations.uMajor);
    ursaMajor.scale = 0;

    // Render everything
    two.update();

    // Function to make a new constellation by drawing circles at given values
    function makeConst(data) {
        var items = [];
        for (var i = 0; i < data.length; i++) {
            var x = data[i].cx, y = data[i].cy;
            var c = two.makeCircle(x, y, 4);
            c.fill = 'white';
            c.noStroke();
            items.push(c);
        }
        return items;
    }
});