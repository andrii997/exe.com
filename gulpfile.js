var
    gulp = require("gulp"),
    less = require("gulp-less"),
    rename = require("gulp-rename"),
    cssnano = require("gulp-cssnano"),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify"),
    sync = require("browser-sync").create(),
    del = require("del"),
    plugins = require("gulp-load-plugins")({
        scope: ["devDependencies"]
    });

gulp.task("html", function () {
    return gulp.src("src/views/*.html")
        .pipe(plugins.htmlExtend())
        .pipe(gulp.dest("dist"));
});

gulp.task("css:vendor", function () {
    return gulp.src(["node_modules/bootstrap/dist/css/bootstrap.min.css",
        "node_modules/font-awesome/css/font-awesome.min.css",
        "node_modules/slick-carousel/slick/slick-theme.css",
        "node_modules/slick-carousel/slick/slick.css"])
        .pipe(plugins.concat("vendor.min.css"))
        .pipe(gulp.dest("dist/css"));
});

gulp.task("css", function () {
    return gulp.src("src/styles/app.less")
        .pipe(plugins.plumber())
        .pipe(plugins.less())
        .pipe(plugins.rename({suffix: ".min"}))
        .pipe(gulp.dest("dist/css"))
        .pipe(sync.stream());
});

gulp.task("slick", function () {
    return gulp.src("node_modules/slick-carousel/slick/fonts/*")
        .pipe(gulp.dest("dist/css/fonts"));
});

gulp.task("slick-loader", function () {
    return gulp.src("node_modules/slick-carousel/slick/*.gif")
        .pipe(gulp.dest("dist/css"));
});

gulp.task("js:vendor", function () {
    return gulp.src(["node_modules/jquery/dist/jquery.min.js",
        "node_modules/bootstrap/dist/js/bootstrap.min.js",
        "node_modules/jquery-validation/dist/jquery.validate.js",
        "node_modules/jquery-circle-progress/dist/circle-progress.js",
        "node_modules/slick-carousel/slick/slick.min.js",
        "node_modules/jquery-waypoints/slick/waypoints.min.js",
        "src/js/**/*.js"
        ])
        .pipe(plugins.concat("vendor.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("dist/js"));
});

gulp.task("fonts", function () {
    return gulp.src(["node_modules/bootstrap/dist/fonts/*",
        "node_modules/font-awesome/fonts/*"])
        .pipe(gulp.dest("dist/fonts"))
});

gulp.task("image", function () {
    return gulp.src(["src/img/*"])
        .pipe(gulp.dest("dist/img"))
});

gulp.task("clean", function (cb) {
    del.sync("dist");
    cb();
});

gulp.task("build", ["clean"], function () {
    gulp.start(["html", "css:vendor", "js:vendor", "fonts", "image", "css",
        "slick", "slick-loader"]);
}); //"",

gulp.task("watch", ["build"], function () {
    sync.init({
        server: "dist"
    });

    gulp.watch("src/views/**/*.html", ["html"]);
    gulp.watch("dist/*.html").on("change", sync.reload);

    gulp.watch("src/styles/**/*.css", ["css"]);
    gulp.watch("src/js/**/*.js", ["js"]);
        gulp.watch("dist/js/*.js")
        .on("change", sync.reload);
});

gulp.task("default", ["watch"]);