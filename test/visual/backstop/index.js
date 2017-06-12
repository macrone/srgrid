// Create BackstopJS settings
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    id: 'srbreakpoints',
    viewports: [
        {
            name: 'xs end',
            width: 479,
            height: 500,
        },
        {
            name: 's start',
            width: 480,
            height: 500,
        },
        {
            name: 's end',
            width: 767,
            height: 500,
        },
        {
            name: 'm start',
            width: 768,
            height: 500,
        },
        {
            name: 'm end',
            width: 1023,
            height: 500,
        },
        {
            name: 'l start',
            width: 1024,
            height: 500,
        },
        {
            name: 'l end',
            width: 1279,
            height: 500,
        },
        {
            name: 'xl start',
            width: 1280,
            height: 500,
        },
        {
            name: 'xl end',
            width: 1399,
            height: 500,
        },
        {
            name: 'xxl start',
            width: 1400,
            height: 500,
        },
    ],
    scenarios: [
        {
            label: 'tests',
            url: 'test/visual/dist/index.html',
            selectors: [
                '#test_base .test-wrapper',
                '#test_wrapper .test-wrapper',
                '#test_hide_regular .test-wrapper',
                '#test_hide_responsive .test-wrapper',
                '#test_hide_between .test-wrapper',
                '#test_hide_only .test-wrapper',
                '#test_fluid_regular .test-wrapper',
                '#test_fluid_responsive .test-wrapper',
                '#test_fluid_between .test-wrapper',
                '#test_fluid_only .test-wrapper',
                '#test_offset_regular .test-wrapper',
                '#test_offset_responsive .test-wrapper',
                '#test_offset_between .test-wrapper',
                '#test_offset_only .test-wrapper',
                '#test_distribution_regular .test-wrapper',
                '#test_distribution_responsive .test-wrapper',
                '#test_distribution_between .test-wrapper',
                '#test_distribution_only .test-wrapper',
                '#test_reverse_regular .test-wrapper',
                '#test_reverse_responsive .test-wrapper',
                '#test_reverse_between .test-wrapper',
                '#test_reverse_only .test-wrapper',
                '#test_reorder_regular .test-wrapper',
                '#test_reorder_responsive .test-wrapper',
                '#test_reorder_between .test-wrapper',
                '#test_reorder_only .test-wrapper',
                '#test_alignment_regular .test-wrapper',
                '#test_alignment_responsive .test-wrapper',
                '#test_alignment_between .test-wrapper',
                '#test_alignment_only .test-wrapper',
                '#test_align-column_regular .test-wrapper',
                '#test_align-column_responsive .test-wrapper',
                '#test_align-column_between .test-wrapper',
                '#test_align-column_only .test-wrapper',
                '#test_block_regular .test-wrapper',
                '#test_block_regular .test-wrapper',
                '#test_block_responsive .test-wrapper',
                '#test_block_between .test-wrapper',
                '#test_block_only .test-wrapper',
                '#test_gapless_regular .test-wrapper',
                '#test_gapless_responsive .test-wrapper',
                '#test_gapless_between .test-wrapper',
                '#test_gapless_only .test-wrapper',
                '#test_column-fractions_regular .test-wrapper',
                '#test_column-fractions_responsive .test-wrapper',
                '#test_column-fractions_between .test-wrapper',
                '#test_column-fractions_only .test-wrapper',
                '#test_nested-grids_with-extra-grid .test-wrapper',
                '#test_nested-grids_without-extra-grid .test-wrapper',
                '#test_multigrid .test-wrapper',
            ],
            delay: 0,
            misMatchThreshold: 0,
            onReadyScript: 'on-before.js',
        },
    ],
    paths: {
        bitmaps_reference: 'test/visual/backstop/references',
        bitmaps_test: 'test/visual/backstop/tests',
        casper_scripts: 'test/visual/backstop/casper-scripts',
        html_report: 'test/visual/backstop/html-report',
        ci_report: 'test/visual/backstop/ci-report',
    },
    casperFlags: [],
    engine: 'phantomjs',
    report: devMode ? ['browser'] : ['CI'],
    debug: false,
};