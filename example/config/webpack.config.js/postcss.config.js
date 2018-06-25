module.exports = {
    plugins: {
        'autoprefixer': {browsers: ['last 4 versions', 'Safari >= 7', 'Firefox ESR', 'not ie < 9'], flexbox: true},
        'postcss-import': {},
        'postcss-flexbugs-fixes': {},
        'cssnano': {
            safe: true,
            autoprefixer: true,
            discardComments: {
                removeAll: true
            },
            calc: true,
            colormin: true,
            convertValues: true,
            core: true,
            discardDuplicates: true,
            discardEmpty: true,
            discardOverridden: true,
            discardUnused: false,
            filterOptimiser: true,
            functionOptimiser: true,
            mergeIdents: true,
            mergeLonghand: true,
            mergeRules: true,
            minifyFontValues: true,
            minifyGradients: true,
            minifyParams: true,
            minifySelectors: true,
            normalizeCharset: true,
            normalizeUrl: false,
            orderedValues: true,
            reduceBackgroundRepeat: true,
            reduceIdents: true,
            reduceInitial: true,
            reducePositions: true,
            reduceTimingFunctions: true,
            reduceTransforms: true,
            svgo: false,
            uniqueSelectors: true,
            zindex: true
        }
    }
};
