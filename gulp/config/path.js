/**
 * Contains path information
 */

import * as nodePath from 'path'; // import module path
import { distFolder, srcFolder, pagePath, pageHTMLPath } from './pagesConfig.js';
const rootFolder = nodePath.basename(nodePath.resolve()); // Get the name of the project root folder (gulp-2022)

/**
 * The path object that will store all the path
 */
export const path = {
    src: { 
      html: `${srcFolder}/*.html`,
      'page-brandsHTML': pageHTMLPath('src', 'page-brands'),
      'page-brand-singleHTML': pageHTMLPath('src', 'page-brand-single'),
      // 'page-subcategoryHTML': pageHTMLPath('src', 'page-subcategory'),

      indexJs: pagePath('src', 'index', 'js'),
      'page-brandsJs': pagePath('src', 'page-brands', 'js'),
      'page-brand-singleJs': pagePath('src', 'page-brand-single', 'js'),

      indexScss: pagePath('src', 'index', 'scss'), 
      'page-brandsScss': pagePath('src', 'page-brands', 'scss'),
      'page-brand-singleScss': pagePath('src', 'page-brand-single', 'scss'),

      fonts: `${srcFolder}/fonts/**/*.*`,
      libs: `${srcFolder}/libs/**/*.*`,
      other: `${srcFolder}/other/**/*.*`,
      images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
      imagesOptimized: `${srcFolder}/img/optimized/**/*.{jpg,jpeg,png,gif,webp}`,
      imagesOptimizedDist: `${srcFolder}/img/optimized/`,
      svg: [`${srcFolder}/img/**/*.svg`, `${srcFolder}/img/**/*.ico`],
   },


   dist: {
      html: `${distFolder}/`,
      'page-brandsHTML': pageHTMLPath('dist', 'page-brands'),
      'page-brand-singleHTML': pageHTMLPath('dist', 'page-brand-single'),

      indexJs: pagePath('dist', 'index', 'js'),
      'page-brandsJs': pagePath('dist', 'page-brands', 'js'),
      'page-brand-singleJs': pagePath('dist', 'page-brand-single', 'js'),

      indexScss: pagePath('dist', 'index', 'css'),
      'page-brandsScss': pagePath('dist', 'page-brands', 'css'),
      'page-brand-singleScss': pagePath('dist', 'page-brand-single', 'css'),
      

      fonts: `${distFolder}/fonts/`,
      libs: `${distFolder}/libs/`,
      other: `${distFolder}/other/`,
      images: `${distFolder}/img/optimized/`,
      svg: `${distFolder}/img/`,
      imgNewer: `${distFolder}/img/optimized`,
   }, 


   watch: { 
      html: `${srcFolder}/**/*.html`,
      'page-brandsHTML': pageHTMLPath('watch', 'page-brands'),
      'page-brand-singleHTML': pageHTMLPath('watch', 'page-brand-single'),

      indexJs: pagePath('watch', null, 'js'),
      'page-brandsJs': pagePath('watch', null, 'js'),
      'page-brand-singleJs': pagePath('watch', null, 'js'),
      
      indexScss: pagePath('watch', null, 'scss'),
      'page-brandsScss': pagePath('watch', null, 'scss'),
      'page-brand-singleScss': pagePath('watch', null, 'scss'),
      
      fonts: `${srcFolder}/fonts/**/*.*`,
      libs: `${srcFolder}/libs/**/*.*`, 
      other: `${srcFolder}/other/**/*.*`,
      images: [`${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`, `!${srcFolder}/img/optimized/**/*.{jpg,jpeg,png,gif,webp}`],
      svg: [`${srcFolder}/img/**/*.svg`, `${srcFolder}/img/**/*.ico`],
   }, 

   clean: distFolder, // clear the production folder
   distFolder: distFolder, // production folder
   srcFolder: srcFolder, // source folder
   rootFolder: rootFolder, // root folder (gulp-2022)
   ftp: `test` // ftp connection
}
