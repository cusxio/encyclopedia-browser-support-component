(function (document) {
    [].forEach.call(document.querySelectorAll('input[type=radio][name=border-left-style]'), function (radio) {
        radio.addEventListener('change', function () {
            document.querySelector('#border-left-div').style.borderLeftStyle = radio.value;
        });
    })
})(document);