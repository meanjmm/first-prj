const   gulp            = require('gulp'),
        watch           = require('gulp-watch'),
        browserSync     = require('browser-sync').create();
//
// ==================================================================
//
//
// ==================================================================
//
    gulp.task('watch', () => {

        browserSync.init({
            server: {
                baseDir: "app"
            }
        });

        watch('./app/index.html', () => {
            browserSync.reload();
        });

        watch('./app/assets/**/*.css', () => {
            gulp.start('styles');
            browserSync.reload();

        });

        watch('./app/assets/scripts/**/*.js', () => {
            gulp.start('scriptsRefresh');
        });
    });

    gulp.task('cssInject', ['styles'], () => {
        return gulp.src('./app/temp/styles/styles.css')
            .pipe(browserSync.stream());
    });

    gulp.task('scriptsRefresh', ['scripts'], () => {
        browserSync.reload();
    });

