$('.img-profile').css({
    'opacity': '1',
    'margin-top': '-30px',
    'transition': '1s'
})

$('.tkj').click(() => {
    $('#box1').toggle()
})

/* Open the sidenav */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Close/hide the sidenav */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

$(window).scroll(function () {
    var wscroll = $(this).scrollTop()

    if (wscroll > $('#content_about').offset().top - 450) {
        $('#content_about').addClass('muncul')
        $('#gotop').addClass('muncul')
    }
    if (wscroll > $('#content_visi').offset().top - 300) {
        $('#content_visi').addClass('muncul')
    }
    if (wscroll > $('#content_leader').offset().top - 300) {
        $('#content_leader').addClass('muncul')
    }

    if (wscroll > $('#content_divisi').offset().top - 200) {
        $('#content_divisi').addClass('muncul')
    }
    if (wscroll > $('#content_program').offset().top - 300) {
        $('#content_program').addClass('muncul')
    }
    if (wscroll > $('#content_gallery').offset().top - 300) {
        $('#content_gallery').addClass('muncul')
    }
});