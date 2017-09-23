// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var browserSync = require('browser-sync').create();
var jshint      = require('gulp-jshint');
var sass        = require('gulp-sass');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var rename      = require('gulp-rename');
var cleanCSS    = require('gulp-clean-css');
var notify      = require("gulp-notify");
var plumber     = require('gulp-plumber');
var header      = require('gulp-header');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');

// config
var config      = require('./config.json');

// Get package details
var pkg = require('./package.json');
var banner = ['/**!',
  ' * @Name:        <%= pkg.name %>',
  ' * @Description: <%= pkg.description %>',
  ' * @Keywords:    <%= pkg.keywords %>',
  ' * @version:     v<%= pkg.version %>',
  ' * -----------------------------------------------------',
  ' * @Autor:       <%= pkg.author.name %>',
  ' * @Email:       <%= pkg.author.email %>',
  ' * @Url:         <%= pkg.author.url %>',
  ' */',
  ''].join('\n');

// ErrorHandling function
var reportError  = function(err) {
    notify.onError({
        title:    "Gulp",
        subtitle: "Failure!",
        message:  "Error: <%= error.message %>"
    })(err);

    this.emit('end');
};

// Compile Sass
gulp.task('sass', function() {
    return gulp.src(config.src.styles + '/**/*.scss')
        // Errorhandling
        .pipe(plumber({errorHandler: reportError }))
        // Compile sass
        .pipe(sass())
        // autoprefix
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        // Minify and clean
        .pipe(cleanCSS({compatibility: 'ie8'}))
        // Add banner
        .pipe(header(banner, { pkg : pkg } ))
        // Dest
        .pipe(gulp.dest(config.dest.styles))
        // Trigger BS
        .pipe(browserSync.stream())
        // Notify
        .pipe(notify({
           title: 'Gulp',
           subtitle: 'success',
           message: 'SASS task complete!'
       }));
});

// Lint Task
gulp.task('lint', function() {
    return gulp.src(config.src.scripts + '/**/*.js')
        // Errorhandling
        .pipe(plumber({errorHandler: reportError }))
        // Jshint & report
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Concatenate &/|| Minify JS
gulp.task('scripts', function() {
    return gulp.src(config.src.scripts + '/**/*.js')
        // Errorhandling
        .pipe(plumber({errorHandler: reportError }))
        // Concat all files
        // .pipe(concat('all.js'))
        // Add banner
        // .pipe(header(banner, { pkg : pkg } ))
        // Dest
        // .pipe(gulp.dest(config.dest.scripts))
        // Rename to min version
        // .pipe(rename('all.min.js'))
        // Minify
        .pipe(uglify())
        // Add banner
        .pipe(header(banner, { pkg : pkg } ))
        // Dest
        .pipe(gulp.dest(config.dest.scripts))
        // Trigger BS
        .pipe(browserSync.stream())
        // Notify
        .pipe(notify({ message: 'Scripts task complete!' }));
});

/* Minify images */
gulp.task('img', function() {
    return gulp.src(config.src.img + '/**')
        // Errorhandling
        .pipe(plumber({errorHandler: reportError }))
        // Minify images
        .pipe(imagemin())
        // Dest
        .pipe(gulp.dest(config.dest.img))
        // Notify
        .pipe(notify({ message: 'Img task complete!' }));
});

// Init BrowserSync
gulp.task('initBS', function() {
    // Init BS
    browserSync.init({
        proxy: config.server.proxy, 
        port: config.server.port
    });
});



// Watch Files For Changes
gulp.task('watch', function() {
    
    // Watch and dest
    gulp.watch(config.src.scripts + '/**/*.js', ['lint', 'scripts']);
    gulp.watch(config.src.styles + '/**/*.scss', ['sass']);
    gulp.watch(config.src.img + '/**', ['img']);
    
    // Browsersync reload
    gulp.watch(config.src.scripts + '/**/*.js').on('change', browserSync.reload);
    gulp.watch(config.src.syles + '/**/*.scss').on('change', browserSync.reload);
    // gulp.watch(config.src.img + '/**/*').on('change', browserSync.reload);
    // gulp.watch(config.paths.webroot +"/**/*.php").on('change', browserSync.reload);
});

// Default Task
gulp.task('default', ['initBS', 'sass', 'lint', 'scripts', 'img', 'watch']);