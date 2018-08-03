const gulp = require('gulp'),
      imagemin = require('gulp-imagemin'),
      uglify = require('gulp-uglify'),
      concat = require('gulp-concat'),
      sass = require('gulp-sass'),
      cleanCSS = require('gulp-clean-css'),
      browserSync = require('browser-sync').create(),
      autoprefixer = require('gulp-autoprefixer'),
      rigger = require('gulp-rigger');

let build = 'build',
    source = 'src';


/* include Header.html Footer.html  */
gulp.task('fileinclude', function () {
    gulp.src([
        source + '/*.html'
    ])
        .on('error', function (err) {
            console.log(err)
            this.emit('end')
        })
        .pipe(rigger()) //rigger ile dosyaları birleşdiriyoruz header footer gibi komponentleri import ediyoruz bir nevi
        .pipe(gulp.dest('./build/')); //Выплюнем их в папку build
});

//sass compiles here  
gulp.task('sass', () => {
    gulp.src([
        source + '/libs/components-bootstrap/css/bootstrap.min.css',
        // plugin`s css 
        source + '/assets/sass/imports.scss' // Always at the end
    ])

        .pipe(sass()).on('error', sass.logError)
        .pipe(autoprefixer({
            browsers: ['last 10 versions'],
            cascade: false
        }))
        .pipe(cleanCSS()) //minify
        .pipe(concat("styles.min.css"))
        .pipe(gulp.dest(build + '/assets/css'))
}
);

// script starts
gulp.task('script', function () {
    return gulp.src([
        source + '/libs/jquery/dist/jquery.min.js',
        // plugin`s js 
        source + '/assets/js/script.js' // Always at the end
    ])
        .pipe(uglify()) //minify
        .pipe(concat('scripts.min.js'))
        .pipe(gulp.dest(build + '/assets/js'))
})


//icon min
gulp.task('icons', () => 
    gulp.src(source + '/assets/css-dep/icons/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest(build + '/assets/css/icons'))
);

//fonts copy
gulp.task('fonts', () => 
    gulp.src(source + '/assets/css-dep/fonts/**/*')
    .pipe(gulp.dest(build + '/assets/css/fonts'))
);

// img copy
gulp.task('imgs', () => 
    gulp.src(source + '/assets/img/**/*')
    .pipe(gulp.dest(build + '/assets/img'))
);

//watch files
gulp.task('watch', function () {

    browserSync.init({
        server: "./build"
    });

    gulp.watch(source + '/*.html', ['fileinclude']);
    gulp.watch(source + '/assets/**/*.scss', ['sass']);
    gulp.watch(source + '/assets/**/*.js', ['script']);
    gulp.watch(source + '/assets/img/**/*', ['imgs']);
    gulp.watch(source + '/assets/css-dep/icons/**/*', ['icons']);
    gulp.watch(source + '/assets/css-dep/fonts/**/*', ['fonts']);
    gulp.watch("build/**/*").on("change", browserSync.reload);

});

//gulp default test
gulp.task('default', ['fileinclude', 'sass', 'script', 'imgs', 'icons', 'fonts', 'watch'])