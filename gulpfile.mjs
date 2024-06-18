import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import * as sass from 'sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import imagemin from 'gulp-imagemin';
import rename from 'gulp-rename';
import concat from 'gulp-concat';
import browserSync from 'browser-sync';

const bs = browserSync.create();
const paths = {
    styles: {
        src: 'src/scss/**/*.scss',
        dest: 'dist/css/'
    },
    scripts: {
        src: 'src/js/**/*.js',
        dest: 'dist/js/'
    },
    images: {
        src: 'src/assets/images/**/*',
        dest: 'dist/assets/images/'
    },
    fonts: {
        src: 'src/assets/fonts/**/*',
        dest: 'dist/assets/fonts/'
    },
    html: {
        src: 'src/*.html',
        dest: 'dist/'
    }
};

const sassCompiler = gulpSass(sass);

const style = () => {
    return gulp.src(paths.styles.src)
        .pipe(sassCompiler().on('error', sassCompiler.logError))
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(bs.stream());
};

const scripts = () => {
    return gulp.src(paths.scripts.src)
        .pipe(concat('main.js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe(bs.stream());
};

const images = () => {
    return gulp.src(paths.images.src)
    .pipe(imagemin({ optimizationLevel: 3 }))
    .on('error', function (err) { console.log(err.toString()); this.emit('end'); })
    .pipe(gulp.dest(paths.images.dest));
};

const fonts = () => {
    return gulp.src(paths.fonts.src)
        .pipe(gulp.dest(paths.fonts.dest));
};

const html = () => {
    return gulp.src(paths.html.src)
        .pipe(gulp.dest(paths.html.dest))
        .pipe(bs.stream());
};

const watch = () => {
    bs.init({
        server: {
            baseDir: './dist'
        }
    });
    gulp.watch(paths.styles.src, style);
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.images.src, images);
    gulp.watch(paths.fonts.src, fonts);
    gulp.watch(paths.html.src, html);
    gulp.watch('./dist/*.html').on('change', bs.reload);
};

const build = gulp.series(gulp.parallel(style, scripts, images, fonts, html));
const dev = gulp.series(build, watch);

export { style, scripts, images, html, fonts, watch, build, dev };
