(function() {
    var writeText = function(e) {
        document.getElementById('frame').style.backgroundColor = e.currentTarget.value;
        document.getElementById('colorbox').innerHTML = "Color " + e.currentTarget.value;
    };
    document.getElementById('textbox').addEventListener('input', writeText);
}());
