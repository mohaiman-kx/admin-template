$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});


$(document).ready(function () {
    $('#editSeo').click(function () {
        console.log('hello')
        $('.no-seo-area').toggle();
        $('.seo-content').toggle();
    })
})