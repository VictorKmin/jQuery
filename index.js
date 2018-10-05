$(document).ready(() => {

    let isClick = false
    $('#button').click(() => {
        //ЗМЕНШУЄ ІНПУТ ДЕСКРИПШИНА
        //
        if (isClick) {
            $('#descr').hide().animate({width: "170px"}, 1000)
            isClick = false
        } else {
            $('#descr').hide().animate({width: "1px"}, 1000)
            isClick = true
        }
    });

    //Міняє колір кнопки
    // Перша функція це на ховер
    // Друга, коли ховер забирається
    $('#descr').hover(() => {
        $('#button').css({width: "1px"}, 1000)
    }, function () {
        $('#button').css({width: "200px"}, 1000)
    })

    //Міняємо текст в дівках
    $('.textItem').click( () => {
        let divValue = event.path[0].innerText;

        console.log($(event.target).children()[0]);
        console.log($(event.path[0]));
        $(event.path[0]).html($('<input type="text" style="width: 95px">')
            .val(divValue)
            .on('blur', event => {
                // console.log($(event.target).children()[0]);
                $($(event.target).children()[0])
                    .html(`<div class="textItem"/>`)
                    .val(event.currentTarget.value)
            })
        )
    })
})