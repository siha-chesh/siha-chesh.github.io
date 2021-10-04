$(function () {
    $('.jsClientZoneClick').on('click', function (e) {
        e.preventDefault();
        var gtaAction = this.getAttribute("data-gtaAction");

        dataLayer.push({
            'event': 'ga.event',
            'eventData': {
                'category': 'button',
                'action': gtaAction,
                'label': 'click',
                'value': 0
            }
        });
        window.open(this.href, '_blank');
    });

    $('.jsChatClick').on('click', function (e) {
        e.preventDefault();
        var gtaAction = this.getAttribute("data-gtaAction");

        dataLayer.push({
            'event': 'ga.event',
            'eventData': {
                'category': 'button',
                'action': gtaAction,
                'label': 'click',
                'value': 0
            }
        });
        window.open(this.href, '_blank');
    });

    $('.jsPhoneClick').on('click', function (e) {
        e.preventDefault();
        dataLayer.push({
            'event': 'ga.event',
            'eventData': {
                'category': 'button',
                'action': '+420 222 300 300',
                'label': 'click',
                'value': 0
            }
        });
        window.location.href = this.href;
    });

    $('.jsMembership').on('click', function (e) {
        e.preventDefault();
        var gtaAction = this.getAttribute("data-gtaAction");

        dataLayer.push({
            'event': 'ga.event',
            'eventData': {
                'category': 'homepage links',
                'action': gtaAction,
                'label': 'CLICK',
                'value': 0
            }
        });
        window.location.href = this.href;
    });

    $('.jsOneDaySurgery').on('click', function (e) {
        e.preventDefault();
        var gtaAction = this.getAttribute("data-gtaAction");

        dataLayer.push({
            'event': 'ga.event',
            'eventData': {
                'category': 'homepage links',
                'action': gtaAction,
                'label': 'CLICK',
                'value': 0
            }
        });
        window.location.href = this.href;
    });

    $('.jsForCompanies').on('click', function (e) {
        e.preventDefault();
        var gtaAction = this.getAttribute("data-gtaAction");

        dataLayer.push({
            'event': 'ga.event',
            'eventData': {
                'category': 'homepage links',
                'action': gtaAction,
                'label': 'CLICK',
                'value': 0
            }
        });
        window.location.href = this.href;
    });

    $('#mc-embedded-subscribe-form').on('submit', function (e) {
        e.preventDefault();
        dataLayer.push({
            'event': 'ga.event',
            'eventData': {
                'category': 'newsletter',
                'action': 'subscribe',
                'label': 'sent',
                'value': 0
            }
        });
        $(this).unbind().submit();
        return false;
    });
})