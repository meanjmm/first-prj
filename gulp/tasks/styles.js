const   gulp            = require('gulp'),
        postcss         = require('gulp-postcss'),
        autoprefixer    = require('autoprefixer'),
        cssvars         = require('postcss-simple-vars'),
        cssnested       = require('postcss-nested'),
        cssImport       = require('postcss-import'),
        mixins          = require('postcss-mixins');

//
// ==================================================================
//
//
// ==================================================================
//



gulp.task('styles', () => {
    console.log("Imgine something usefull being done to your CSS here.");
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssImport, mixins, cssvars, cssnested, autoprefixer]))
        .on('error', function(errorInfo)  {
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/styles'));
});
