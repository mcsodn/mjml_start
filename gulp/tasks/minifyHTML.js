module.exports = function () {
    $.gulp.task('minifyHTML', function () {
        return $.gulp.src('build/index.html')                
                .pipe($.gp.htmlmin(
                	{
                		collapseWhitespace: true,
                		collapseInlineTagWhitespace: true
                	}
                ))
                .pipe($.gp.clean())
                .pipe($.gulp.dest('build'));
    })
}