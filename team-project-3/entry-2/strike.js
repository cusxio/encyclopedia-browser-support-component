document.querySelector('#strike').addEventListener('change', function (event) {
    document.querySelector('#strike-text').style.textDecoration = event.currentTarget.checked ? 'line-through' : 'none';
});