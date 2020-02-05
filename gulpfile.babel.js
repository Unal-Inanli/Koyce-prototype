var browserSync = require('browser-sync').create();
var gulp = require('gulp');
var del = require('del');
var exec = require('child_process').exec;

function bSync() {
    browserSync.init({
        server :  {
            baseDir: "./src"
            
        },
        host: "192.168.5.8"
    });

    gulp.watch(['./src/style.css', './src/**/*.html', './src/**/*.js'], function(done) {
        browserSync.reload();
        done();
    });

    gulp.watch(['./src/**/*.scss'], function(done) {
        exec("npm run compSass", (err,std) => {
            console.log(std);
        }).on("close", () => {
            browserSync.reload();
            done();
        });
    });
}

 function compile(done) {
    exec("npm run build", (err,std) => {
        console.log(std);
    }).on("close", () => {
        done();
    });
}

// async function clear(done) {
//     await del('./public/**', {force:true}).then(done());
// }

// function copy(done) {
//     gulp.src("./src/**")
//     .pipe(gulp.dest("./public/"));
//     done();
// }


// exports.build = gulp.series(compile, clear, copy);
exports.watch = bSync; 