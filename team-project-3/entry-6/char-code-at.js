(function (document) {
    updateCharCode();
    [].forEach.call(document.querySelectorAll('#string, #position'), function (element) {
        element.addEventListener('input', updateCharCode);
    });

    function updateCharCode() {
        document.querySelector('#char-code').innerHTML = document.querySelector('#string').value
            .charCodeAt(document.querySelector('#position').value).toString();
    }
})(document);