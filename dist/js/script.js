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



function addVarient() {
    var vClone = document.getElementById('v-items').cloneNode(true);
    document.getElementById('form-container').appendChild(vClone);
}

$(document).ready(function () {
    $("#myInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});