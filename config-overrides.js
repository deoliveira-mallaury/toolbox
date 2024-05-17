const path = require('path');

module.exports = function override(config, env) {
    config["resolve"] = {
        alias: {
            components: path.resolve(__dirname, 'src/Components/'),
            views: path.resolve(__dirname, 'src/views/'),
            services: path.resolve(__dirname, 'src/Services/'),
            security: path.resolve(__dirname, 'src/Services/security'),
            routes: path.resolve(__dirname, 'src/Rooting'),
        },
        extensions: ['.js']
    }

    return config;
}
