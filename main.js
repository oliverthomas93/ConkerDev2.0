window.onload = () => {
    let currentYear = new Date();
    document.getElementById('year').innerHTML = currentYear.getFullYear();
}

$(document).ready(function() {
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            let hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function() {
                window.location.hash = hash;
            });
        }
    });
});

$(document).ready(function(){
    $('.aniview-v4').AniView({
        animateClass: 'animate__animated'
    });
});

var options = {
    animateClass: 'animated',
    animateThreshold: 100,
    scrollPollInterval: 50
}
$('.aniview').AniView(options);

