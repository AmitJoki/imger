$.imger = function () {
    $('img[data-imger]').on('click', function () {
        var idSetter = 'imger' + Math.floor((Math.random() * 10000000000) + 1);
        $('<section class="modal--fade" id="' + idSetter + '" tabindex="-1" role="dialog" aria-labelledby="label-fade" aria-hidden="true"><div class="modal-inner"><div class="modal-content">' + '<img src="' + $(this).attr("src") + '"></div></div><a href="#!" class="modal-close" title="Close this modal"    data-dismiss="modal" data-close="Close">&times;</a></section>').appendTo('body');
        window.location.hash = idSetter;
    });
};
