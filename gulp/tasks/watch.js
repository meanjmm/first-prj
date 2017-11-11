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
        }); 

    });


    gulp.task('cssInject', ['styles'], () => {

        return gulp.src('./app/temp/styles/styles.css')
            .pipe(browserSync.stream());

    });