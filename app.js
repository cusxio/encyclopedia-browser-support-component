document.addEventListener('DOMContentLoaded', function cb() {

    [].forEach.call(document.querySelectorAll('.cb__buttons__button'), function (el) {
        el.addEventListener('click', codeBoxButtonClick);
    });

    [].forEach.call(document.querySelectorAll('.tb__header'), function (el) {
        el.addEventListener('click', animateToggleBox);
    });

    [].forEach.call(document.querySelectorAll('.version.partial-supported .bs__version-radio'), function (el) {
        el.addEventListener('click', manageVersionClick);
    });

    [].forEach.call(document.querySelectorAll('.version-info__close'), function (el) {
        el.addEventListener('click', hideVersionAndContainer.bind(null, el.parentNode.id.slice(0, -5)));
    });

    function codeBoxButtonClick(event) {
        if (!event.target.classList.contains('cb__buttons__button--active')) {
            const buttons = event.target.parentNode.children;
            const codeBoxChildren = event.target.parentNode.parentNode.children;
            [].forEach.call(buttons, function (button, index) {
                if (button === event.target) {
                    button.classList.add('cb__buttons__button--active');
                    codeBoxChildren[index + 1].classList.add('cb__code-container--active');
                }
                else {
                    button.classList.remove('cb__buttons__button--active');
                    codeBoxChildren[index + 1].classList.remove('cb__code-container--active');
                }
            });
        }
    }

    function manageVersionClick(event) {
        event.target.removeEventListener('click', manageVersionClick);
        if (event.target.parentNode.classList.contains('version--selected'))
            hideVersionAndContainer(event.target.id);
        else {
            const anotherSelectedVersion = document.querySelectorAll('.' + event.target.name + ' + .browser--version .version.version--selected .bs__version-radio');
            changeVersion(event, anotherSelectedVersion);
            if (!anotherSelectedVersion.length)
                showVersionAndContainer(event.target.id);
        }
    }

    function changeVersion(event, anotherSelectedVersion) {
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
                    document.querySelector('#' + event.target.id + '-info').classList.add('version-info--selected');
                    event.target.parentNode.classList.add('version--selected');
                    event.target.addEventListener('click', manageVersionClick);
                }
            });

        });
    }

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
                versionRadio.addEventListener('click', manageVersionClick);
            }
        });
    }

    function hideVersionAndContainer(versionId) {
        const versionRadio = document.querySelector('#' + versionId);
        const versionInfo = document.querySelector('#' + versionId + '-info');
        Velocity(versionInfo.parentNode, "slideUp", {
            duration: 400,
            begin: function () {
                versionRadio.checked = false;
                versionRadio.parentNode.classList.remove('version--selected');
            },
            complete: function () {
                versionInfo.parentNode.classList.remove('info-container--show');
                versionInfo.classList.remove('version-info--selected');
                versionRadio.addEventListener('click', manageVersionClick);
            }
        });
    }

    function animateToggleBox(event) {
        const content = event.currentTarget.nextElementSibling;
        const container = event.currentTarget.parentNode;
        if (container.classList.contains('tb--open')) {
            Velocity(content, "slideUp", {
                duration: 400,
                complete: function () {
                    container.classList.remove('tb--open');
                }
            });
        } else {
            Velocity(content, "slideDown", {
                duration: 400,
                complete: function () {
                    container.classList.add('tb--open');
                }
            });
        }
    }
});
