// Get the .gif images from the "data-alt"
var getGif = function() {
    var gif = [];

    $('img').each(function() {
      var data = $(this).data('alt');
      gif.push(data);
    });

    return gif;
}

var gif = getGif();

// Change the image to .gif when clicked and vice versa
$('figure').on('click', function() {

    var $this = $(this),            
        $img    = $this.children('img'),
        $imgSrc = $img.attr('src'),
        $imgAlt = $img.attr('data-alt'),
        $imgExt = $imgAlt.split('.');
                
    if($imgExt[1] === 'gif') {
        $img.attr('src', $img.data('alt')).attr('data-alt', $imgSrc);
    } else {
        $img.attr('src', $imgAlt).attr('data-alt', $img.data('alt'));
    }
});