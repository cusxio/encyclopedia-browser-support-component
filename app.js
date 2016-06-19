document.addEventListener('DOMContentLoaded', function cb() {
    [].forEach.call(document.querySelectorAll('.tb--open'), function (el) {
        el.querySelector('.tb__content').style.display = 'block';
    });

    [].forEach.call(document.querySelectorAll('.tb__header'), function (el) {
        el.addEventListener('click', function () {
            var content = el.nextElementSibling;
            var container = el.parentNode;
            animate(content, container);
        }, false);
    });

    [].forEach.call(document.querySelectorAll('.version.partial-supported .bs__version-radio'), function (el) {
        el.addEventListener('click', function (e) {
            if (e.target.parentNode.classList.contains('version--selected'))
                hideVersionAndContainer(e.target.id);
            else {
                const anotherSelectedVersion = document.querySelectorAll('.' + e.target.name + ' + .browser--version .version.version--selected .bs__version-radio');
                [].forEach.call(anotherSelectedVersion, function (anotherVersionInput) {
                    const oldVersionInfo = document.querySelector('#' + anotherVersionInput.id + '-info');
                    Velocity(oldVersionInfo, "fadeOut", {
                        duration: 200,
                        begin: function () {
                            anotherVersionInput.parentNode.classList.remove('version--selected');
                        },
                        complete: function () {
                            oldVersionInfo.classList.remove('version-info--selected');
                            oldVersionInfo.style = '';
                            document.querySelector('#' + e.target.id + '-info').classList.add('version-info--selected');
                            e.target.parentNode.classList.add('version--selected');
                        }
                    });

                });
                if (!anotherSelectedVersion.length)
                    showVersionAndContainer(e.target.id);
            }
        })
    });

    [].forEach.call(document.querySelectorAll('.version-info__close'), function (el) {
        el.addEventListener('click', hideVersionAndContainer.bind(null, el.parentNode.id.slice(0, -5)));
    });


    function showVersionAndContainer(versionId) {
        const versionInfo = document.querySelector('#' + versionId + '-info');
        Velocity(versionInfo.parentNode, "slideDown", {
            duration: 400,
            begin: function () {
                versionInfo.parentNode.classList.add('info-container--show');
                versionInfo.classList.add('version-info--selected');
            },
            complete: function () {
                const versionRadio = document.querySelector('#' + versionId);
                versionRadio.parentNode.classList.add('version--selected');

            }
        });
    }

    function hideVersionAndContainer(versionId) {
        const versionInfo = document.querySelector('#' + versionId + '-info');
        Velocity(versionInfo.parentNode, "slideUp", {
            duration: 400,
            begin: function () {
                const versionRadio = document.querySelector('#' + versionId);
                versionRadio.checked = false;
                versionRadio.parentNode.classList.remove('version--selected');
            },
            complete: function () {
                versionInfo.parentNode.classList.remove('info-container--show');
                versionInfo.classList.remove('version-info--selected');
            }
        });
    }

    function animate(content, container) {
        if (container.classList.contains('tb--open')) {
            container.classList.remove('tb--open');
            Velocity(content, "slideUp", {
                duration: 400
            });
        } else {
            container.classList.add('tb--open');
            Velocity(content, "slideDown", {
                duration: 400
            });
        }
    }
});
