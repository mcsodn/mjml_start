module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch('src/*.mjml', $.gulp.series('build'))
    })
}