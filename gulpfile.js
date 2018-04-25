// /gulpfile.js
var gulp = require('gulp');

gulp.task('default', [], function() {        
    var rename = require('gulp-rename');
    
    console.log("Projects: moving project images (_projects/view/**/images/**.{png,gif,jpg}) to /assets/images/projects/");
    gulp.src('_projects/view/**/images/**.{png,gif,jpg}')
      .pipe(rename({dirname: ''}))
      .pipe(gulp.dest('assets/images/projects'));
      
    console.log("Documentation: moving documentation images (_documentation/**/**/additional-docs/images/**/**/**.{png,gif,jpg}) to /assets/images/documentation/");
    gulp.src('_documentation/**/**/additional-docs/images/**/**/**.{png,gif,jpg}')
      .pipe(rename({dirname: ''}))
      .pipe(gulp.dest('assets/images/documentation'));
      
    console.log("Products: moving product images (_product/**/**/images/**.{png,gif,jpg.JPG}) to /assets/images/products/ 1/2");
    gulp.src('_product/**/**/images/**.{png,gif,jpg,JPG}')
      .pipe(rename({dirname: ''}))
      .pipe(gulp.dest('assets/images/products'));
    console.log("Products: moving product images (_product/**/**/images/**.{png,gif,jpg,JPG}) to /assets/images/products/ 2/2");
    gulp.src('_product/**/**/images/**/**.{png,gif,jpg,JPG}')
      .pipe(rename({dirname: ''}))
      .pipe(gulp.dest('assets/images/products'));
});