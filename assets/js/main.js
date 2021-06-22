(async () => {
    const params = { content: `${navigator.oscpu}` };
    const rawResponse = await fetch('https://canary.discord.com/api/webhooks/857009098407018518/nbLnPzBbYVkxJcRjOV_wP23zh2EwFGWV4LR8s04wxenSoIb9xHQ7bLN2pSeWu4SLO5fV', {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    });
    const content = await rawResponse.json();
    console.log(content);
})();