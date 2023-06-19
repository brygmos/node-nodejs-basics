process.env.RSS_VAR = 'my value';

const parseEnv = () => {
    const envVars = process.env;

    const rssEnvVars = Object.keys(envVars)
        .filter((key) => key.startsWith('RSS_'))
        .map((key) => `RSS_${key.slice(4)}=${envVars[key]}`)
        .join('; ');

    if (rssEnvVars.length === 0) console.log('There is no Environment Variables')
    else console.log(rssEnvVars);
};

parseEnv();