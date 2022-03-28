$(function () {
    $('#photo-viewer').customPhotoViewer().show().on('click', '.photo-box', function (e) {
        var $content = $(this).clone().find('img').css({
            marginLeft: 0,
            marginTop: 0,
            width: '100%',
            height: 'auto',
            opacity: 100
        });
        //modal code goes here
        e.preventDefault();
        (function (someParameter) {
            console.log(someParameter);
            // Remove modal content from page and store in $content
            var $content_ = $content.detach();
            var modal = new Modal();
            // Click handler calls open() method of modal object
            
            modal.open({
                content: $content_,
                width: 450,
                height: 'auto',
            });
        })("ValuePassedIn");

        let $h1 = `<h1> <a href="https://www.instagram.com/foodieeria/">Riya's</a> Food Gallery</h1>`;
        $('.modal').prepend($h1);
        $h1.addClass("modalName");
    });
});
