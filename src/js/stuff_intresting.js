//single progress bar
$('#circle-1').circleProgress({
    value: 0.82,
    size: 125,
    thickness: 5,
    fill: {
        gradient: ["red", "yellow"]
    }
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('.circle-inner').html(Math.round(6587 * progress));
});

$('#circle-2').circleProgress({
    value: 0.38,
    size: 125,
    thickness: 5,
    fill: {
        gradient: ["red", "yellow"]
    }
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('.circle-inner').html(Math.round(896 * progress));
});

$('#circle-3').circleProgress({
    value: 0.58,
    size: 125,
    thickness: 5,
    fill: {
        gradient: ["red", "yellow"]
    }
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('.circle-inner').html(Math.round(1674 * progress));
});

$('#circle-4').circleProgress({
    value: 0.25,
    size: 125,
    thickness: 5,
    fill: {
        gradient: ["red", "yellow"]
    }
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('.circle-inner').html(Math.round(769 * progress));
});