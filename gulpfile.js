/**
 * Импорт модулей
 * ------------------------------------------------------------------
 */
import gulp from "gulp"; // Main gulp module
import { path } from "./gulp/config/path.js"; // Import paths
import { plugins } from "./gulp/config/plugins.js"


/**
 * Import tasks
 * ------------------------------------------------------------------
 */
import { copyLibs } from "./gulp/tasks/copyLibs.js";
import { copyOther } from "./gulp/tasks/copyOther.js";
import { cleanDist } from "./gulp/tasks/clean.js";
import { server } from "./gulp/tasks/server.js";
import { html, pagesHTML } from "./gulp/tasks/html.js"
import { scss } from "./gulp/tasks/scss.js"
import { js } from "./gulp/tasks/js.js";
// import { images } from "./gulp/tasks/images.js";
import { cleanImg } from './gulp/tasks/cleanImg.js';
import { copyImg } from './gulp/tasks/copyImg.js';
// import { cleanImages } from "./gulp/tasks/cleanImages.js";
import { fonts } from "./gulp/tasks/fonts.js";
import { svg } from "./gulp/tasks/svg.js";
import { zip } from "./gulp/tasks/zip.js";
import { ftp } from "./gulp/tasks/ftp.js";
/**
 * This task was done to test automatic merging of .svg icons into svg sprite
 * If this function will be used, uncomment the line below and add a task to mainTasks
 */
// import { svg } from "./gulp/tasks/svg.js";


/**
 * Passing values to a global variable
 * ------------------------------------------------------------------
 */
global.app = {
   prodMode: process.argv.includes('--build'),
   devMode: !process.argv.includes('--build'),
   path,
   gulp,
   plugins
}


/**
 * File/Folder Tracking (watch)
 * ------------------------------------------------------------------
 * watch() takes 2 parameters:
 *    1. the path we track
 *    2. actions to be taken while tracking
 */
function watcher() {
   gulp.watch(path.watch.html, html)
   // gulp.watch(path.watch['page-brandsHTML'], () => pagesHTML('page-brands'))
   // gulp.watch(path.watch['page-brand-singleHTML'], () => pagesHTML('page-brand-single'))
   gulp.watch(path.watch['page-categoryHTML'], () => pagesHTML('page-category'))
   gulp.watch(path.watch['page-productHTML'], () => pagesHTML('page-product'))
   gulp.watch(path.watch['page-cartHTML'], () => pagesHTML('page-cart'))
   gulp.watch(path.watch['page-orderHTML'], () => pagesHTML('page-order'))
   gulp.watch(path.watch['page-contactHTML'], () => pagesHTML('page-contact'))
   gulp.watch(path.watch['page-informationHTML'], () => pagesHTML('page-information'))
   gulp.watch(path.watch['page-404HTML'], () => pagesHTML('page-404'))
   gulp.watch(path.watch['page-nothing-foundHTML'], () => pagesHTML('page-nothing-found'))

   // gulp.watch(path.watch.js, js)
   gulp.watch(path.watch.indexJs, () => js('index'))
   // gulp.watch(path.watch['page-brandsJs'], () => js('page-brands'))
   // gulp.watch(path.watch['page-brand-singleJs'], () => js('page-brand-single'))
   gulp.watch(path.watch['page-categoryJs'], () => js('page-category'))
   gulp.watch(path.watch['page-productJs'], () => js('page-product'))
   gulp.watch(path.watch['page-cartJs'], () => js('page-cart'))
   gulp.watch(path.watch['page-orderJs'], () => js('page-order'))
   gulp.watch(path.watch['page-contactJs'], () => js('page-contact'))
   gulp.watch(path.watch['page-informationJs'], () => js('page-information'))
   gulp.watch(path.watch['page-404Js'], () => js('page-404'))
   gulp.watch(path.watch['page-nothing-foundJs'], () => js('page-nothing-found'))

   // gulp.watch(path.watch.scss, scss)
   gulp.watch(path.watch.indexScss, () => scss('index'))
   // gulp.watch(path.watch['page-brandsScss'], () => scss('page-brands'))
   // gulp.watch(path.watch['page-brand-singleScss'], () => scss('page-brand-single'))
   gulp.watch(path.watch['page-categoryScss'], () => scss('page-category'))
   gulp.watch(path.watch['page-productScss'], () => scss('page-product'))
   gulp.watch(path.watch['page-cartScss'], () => scss('page-cart'))
   gulp.watch(path.watch['page-orderScss'], () => scss('page-order'))
   gulp.watch(path.watch['page-contactScss'], () => scss('page-contact'))
   gulp.watch(path.watch['page-informationScss'], () => scss('page-information'))
   gulp.watch(path.watch['page-404Scss'], () => scss('page-404'))
   gulp.watch(path.watch['page-nothing-foundScss'], () => scss('page-nothing-found'))

   gulp.watch(path.watch.fonts, fonts)
   gulp.watch(path.watch.libs, copyLibs)
   gulp.watch(path.watch.other, copyOther)
   
   // gulp.watch(path.watch.images, gulp.series(cleanImages, images))
   gulp.watch(path.watch.copyImg, copyImg)
   gulp.watch(path.watch.svg, svg)

   /**
    * If you want files to be uploaded via ftp on every change,
    * then change the tasks as follows:
    * gulp.watch(path.watch.html, gulp.series(html, ftp))
    */
   // gulp.watch(path.watch.svgSprite, svg)
}


/**
 * Separation (grouping) of tasks (for visual separation)
 * ------------------------------------------------------------------
 */
const mainTasks = gulp.parallel(
   html, () => pagesHTML('page-category'), () => pagesHTML('page-product'), () => pagesHTML('page-cart'), () => pagesHTML('page-order'), () => pagesHTML('page-contact'), () => pagesHTML('page-information'), () => pagesHTML('page-404'), () => pagesHTML('page-nothing-found'), 
   () => js('index'), () => js('page-category'), () => js('page-product'), () => js('page-cart'), () => js('page-order'), () => js('page-contact'), () => js('page-information'), () => js('page-404'), () => js('page-nothing-found'), 
   () => scss('index'), () => scss('page-category'), () => scss('page-product'), () => scss('page-cart'), () => scss('page-order'), () => scss('page-contact'), () => scss('page-information'), () => scss('page-404'), () => scss('page-nothing-found'), 
   fonts, copyLibs, copyOther, gulp.parallel(cleanImg, copyImg));



/** 
 * Building scripts (executing tasks)
 * ------------------------------------------------------------------
 * series() - последовательное выполнение задач (task sequencing)
 * parallel() - параллельное выполнение задач (parallel execution of tasks)
 * series() и parallel() можно вкалдывать друг в друга на любую глубину (you can dig into each other to any depth)
 */
const dev = gulp.series(cleanDist, mainTasks, gulp.parallel(watcher, server))
const deployZIP = gulp.series(cleanDist, mainTasks, zip) 
const deployFTP = gulp.series(cleanDist, mainTasks, ftp) 

/**
 * EXPORT scripts
 * чтобы они были видны извне (to be visible from the outside)
 */
export { deployZIP }
export { deployFTP }


/**
 * Running tasks by default
 * ------------------------------------------------------------------
 */
gulp.task('default', dev); // = gulp.series(copy, watch)







/**
 * 1. Plugin "webp-converter" must always be version 2.2.3 to work correctly
 * 1. Плагин "webp-converter" для корректоной работы должен быть всегда версии 2.2.3
 */


/**
 * 2. To automatically update plugins ghb "npm install" can be specified in package.json "latest" in each plugin
 *    For example: "gulp-zip": "latest",
 * 
 * 2. Для автоматического обновления плагинов ghb "npm install" можно указать в package.json "latest" в каждом плагине
 *    Например: "gulp-zip": "latest", 
 */


/**
 * COMMANDS
 * 1. npm run dev - runs gulp
 * 2. npm run zip - creates a folder archive with the result
 * 3. npm run deploy - sends files via ftp (for this you need to fill in the data in gulp/config/ftp.js)
 */


/**
 * КОМАНДЫ
 * 1. npm run dev - запускает сборку gulp
 * 2. npm run zip - создает архив папки с результатом
 * 3. npm run deploy - отправляет файлы по ftp (для этого необходимо заполнить данные в gulp/config/ftp.js)
 */
