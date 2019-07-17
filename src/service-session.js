module.exports = pluginContext => {
    return (value, env = {}) => {
        return new Promise((resolve, reject) => {
            let returnValue = `${env.ssUrl}?q=${value}`;
            let returnTitle = `GoodTime Service Session for ${value}`;
            if (value === 'logout') {
                returnValue = env.logoutUrl;
                returnTitle = 'GoodTime Log Out';
            }

            resolve([
                {
                    id: 'service-session-result',
                    icon: 'img/icon-128.png',
                    title: returnTitle,
                    subtitle: returnValue,
                    value: returnValue,
                },
            ]);
        });
    };
};
