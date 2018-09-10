$(function() {
    // console.log($('.slider div img').first().clone());
    $('.slider div').append($('.slider div img').first().clone());
    // console.log($('.slider div')[0].offsetLeft);
    function loop() {
        // console.log($('.slider div')[0].offsetLeft);
        var t = $('.slider div')[0].offsetLeft - $('.slider').width();
        // console.log(t);
        // console.log($('.slider').width() * ($('.slider div img').length));
        // console.log(2);
        $('.slider div').animate({
            'left': t,
        }, 600);
        // $('.slider div').stop(true, true);
        if (-t === $('.slider').width() * ($('.slider div img').length - 1)) {
            console.log(2);
            $('.slider div').animate({
                'left': 0,
            }, 0)
        };
        // console.log($('.slider ul li'));
        // console.log($('.slider div')[0].offsetLeft);
        // console.log($('.slider').width());
        // console.log(-($('.slider div')[0].offsetLeft - $('.slider').width()) / $('.slider').width());
        $('.slider ul li').removeClass('active');
        if (-t / $('.slider').width() === $('.slider ul li').length) {
            // console.log(1);
            $($('.slider ul li')[0]).attr({
                'class': 'active',
            })
        } else {
            $($('.slider ul li')[-t / $('.slider').width()]).attr({
                'class': 'active',
            })
        }
        // $('.slider span').first().on('click', function() {
        //     console.log(1);
        // });
        // console.log($('.slider span').first());

    };
    $('.slider span').first().on('click', function() {
        // $('.slider div').stop(true, true);
        console.log(1);
        var lt = $('.slider div')[0].offsetLeft;
        // console.log(lt);
        if (lt === 0) {
            var fy = $('.slider').width() * $('.slider ul li').length;
            console.log(fy);
            $('.slider div').stop(true, true).animate({
                'left': -fy,
            }, 0).stop(true, true).animate({
                'left': $('.slider div')[0].offsetLeft + $('.slider').width(),
            }, 600);
        } else {
            $('.slider div').stop(true, true).animate({
                'left': lt + $('.slider').width(),
            }, 600)
        };
    });
    $('.slider span').first().on('click', function() {

    })
    var set = setInterval(loop, 3600);
    // $('.slider').on('mouseover', function() {
    //     clearInterval(set);
    // })
    // $('.slider').on('mouseleave', function() {
    //     setInterval(loop, 1600)
    // })

})