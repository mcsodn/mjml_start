module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch('src/static/index.mjml', $.gulp.series('mjml'))
    })
}