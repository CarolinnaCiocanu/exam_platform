const apiHost = process.env.NEXT_PUBLIC_API_HOST;
const apiPath = process.env.NEXT_PUBLIC_API_PATH;

module.exports.apiHost = apiHost;
module.exports.apiPath = apiPath;
module.exports.apiBaseUrl = `${apiHost}${apiPath}`;
