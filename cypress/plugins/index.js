const path = require('path');

module.exports = (on, config) => {
    on('file:preprocessor', require('@cypress/code-coverage/use-babelrc'));
    on('file:preprocessor', (file) => {
        if (file.filePath.endsWith('.ts')) {
            return require('typescript').transpile(file.contents.toString(), {
                compilerOptions: require(path.resolve(__dirname, '../../tsconfig.json')).compilerOptions,
                fileName: file.filePath
            });
        }

        return file.contents;
    });

    return config;
};