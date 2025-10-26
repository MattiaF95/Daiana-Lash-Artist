const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const terser = require('gulp-terser');
const newer = require('gulp-newer');
const htmlmin = require('gulp-htmlmin');
const { deleteAsync } = require('del');

// Pulisce la cartella dist
function clean() {
    return deleteAsync(['dist/**', '!dist']);
}

// Processa i file CSS
function css() {
    return gulp.src('src/css/**/*.css')
        .pipe(newer('dist/css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css'));
}

// Processa i file JavaScript
function javascript() {
    return gulp.src('src/js/**/*.js')
        .pipe(newer('dist/js'))
        .pipe(terser())
        .pipe(gulp.dest('dist/js'));
}

// Minifica i file HTML
function html() {
    return gulp.src('src/**/*.html')
        .pipe(newer('dist'))
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true,
            minifyCSS: true,
            minifyJS: true
        }))
        .pipe(gulp.dest('dist'));
}

// Watch task
function watch() {
    gulp.watch('src/css/**/*.css', css);
    gulp.watch('src/js/**/*.js', javascript);
    gulp.watch('src/**/*.html', html);
}

// Task per la build
const build = gulp.series(clean, gulp.parallel(css, javascript, html));

// Esporta i task
exports.css = css;
exports.js = javascript;
exports.html = html;
exports.clean = clean;
exports.build = build;
exports.watch = watch;
exports.default = build;