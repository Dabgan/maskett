/** @type {import('next').NextConfig} */

module.exports = (phase, { defaultConfig }) => {
    if ('sassOptions' in defaultConfig) {
        defaultConfig['sassOptions'] = {
            includePaths: ['./src'],
            prependData: `@import "~@styles/index.scss";`,
        };
    }
    return defaultConfig;
};
