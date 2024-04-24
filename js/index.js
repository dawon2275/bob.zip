/* $(function() {
    let header = $('header');
    let depth1 = $('.sub_list');

    $('header').on('mouseover', function() {
        $(this).addClass('on'); 
        $(this).css('background', 'white')  
        $(this).css('transition', 'all 0.7s')  
        $('.inner').css('color', 'black')
        $('#section').css('color', 'black')
        $('.search ').css( 'filter', 'brightness(0)')

    })

    $('header').on('mouseleave', function() {
        $(this).removeClass('on'); 
        $(this).css('background', 'none')  
        $(this).css('transition', 'all 0.5s')  
        $('.inner').css('color', 'white')
        $('#section').css('color', 'white')
        $('.search ').css( 'filter', 'brightness(100)')
        })

    })
 */
    


    $('.main_list > li').on('mouseover', function() {
        $(this).children('.sub_list > li').stop().fadeIn(700)
  /*       $(this).siblings('li').removeClass('on')   */          
    });

    $('.main_list > li').on('mouseleave', function() {
        $(this).children('.sub_list').stop().fadeOut(50)
});

    

