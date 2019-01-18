module.exports = function () {
    $.gulp.task('clean', function () {
        return $.gulp.src('build/index.html')                
                .pipe($.gp.clean());
    })
}