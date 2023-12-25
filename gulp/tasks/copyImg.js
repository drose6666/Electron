/**
 * Копирование файлов
 * Copying files
 */
export const copyImg = () => {
   return app.gulp.src(app.path.src.copyImg)
      .pipe(app.gulp.dest(app.path.dist.copyImg))
}