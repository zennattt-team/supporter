 function addEvent(obj, evt, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(evt, fn, false);
    } else if (obj.attachEvent) {
        obj.attachEvent("on" + evt, fn);
    }
}

addEvent(document, 'mouseout', function(evt) {
    if (evt.toElement == null && evt.relatedTarget == null) {
        $('.mnbxs').slideDown();
    };
});

$('a.close').click(function() {
    $('.mnbxs').slideUp();
});
$('body').click(function() {
    $('.mnbxs').slideUp();
});
