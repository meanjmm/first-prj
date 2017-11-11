const   gulp            = require('gulp'),
        postcss         = require('gulp-postcss'),
        autoprefixer    = require('autoprefixer'),
        cssvars         = require('postcss-simple-vars'),
        cssnested       = require('postcss-nested'),
        cssImport       = require('postcss-import');
//
// ==================================================================
//
//
// ==================================================================
//
gulp.task('styles', () => {
    console.log("Imgine something usefull being done to your CSS here.");
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssImport, cssvars, cssnested, autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles'));
});
