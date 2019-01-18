module.exports = function () {
    $.gulp.task('sendEmails', function () {

        var smtpInfo = {
        	auth: {
        		user: 'mcsodn@gmail.com',
        		pass: 'JackDaniels#7'
        	},
        	host: 'smtp.gmail.com',
        	secureConnection: true,
        	port: 465
        };
		
		/*TODO: mail's not sends*/
        return $.gulp.src('build/index.html')
		    .pipe($.gp.mail({
		      subject: 'Email Test',
		      to: [
		        'mcsodn@gmail.com'
		      ],
		      from: 'Foo <foo@163.com>',
		      smtp: smtpInfo
		    }));
    })
}