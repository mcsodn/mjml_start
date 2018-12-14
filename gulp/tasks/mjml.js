module.exports = function () {
    $.gulp.task('mjml', function () {
        return $.gulp.src('src/index.mjml')
                .pipe($.gp.mjml())
                .pipe($.gulp.dest('build'))
    })
}