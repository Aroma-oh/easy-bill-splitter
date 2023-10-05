module.exports = {
    swc: {
        jsc: {
            target: 'es2020',
            parser: {
                syntax: 'typescript',
                dynamicImport: true,
                jsx: true,
            },
        },
    },
    experimental: {optimizeFonts: false},
};
