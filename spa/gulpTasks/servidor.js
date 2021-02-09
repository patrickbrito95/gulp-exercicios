const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')


function monitorarArquivos(cb){
    watch('src/**/*.html', () => gulp.series('appHTML')())
    watch('src/**/*.scss', () => gulp.series('appCSS')())
    watch('src/assets/imgs/*.*', () => gulp.series('appIMG')())
    watch('src/**/*.js', () => gulp.series('appJS')())
    return cb()
}

function servidor(){
    return gulp.src('build')
        .pipe(webserver({
            port: 5500,
            open: true,
            livereload: true,
        }))
}

module.exports = {
    monitorarArquivos,
    servidor
}