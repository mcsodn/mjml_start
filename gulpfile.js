'use strict';

global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    bs: require('browser-sync').create(),

    path: {
        tasks: require('./gulp/config/tasks.js')
    }
}

$.path.tasks.forEach(function (taskPath) {
    require(taskPath)();
});

$.gulp.task('build', $.gulp.series(
    'clean',
    'mjml',
    'minifyHTML'
));

$.gulp.task('default', $.gulp.series(
    'build',
    $.gulp.parallel('watch','serve')
));