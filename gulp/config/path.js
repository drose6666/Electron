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
      // 'page-brandsHTML': pageHTMLPath('src', 'page-brands'),
      // 'page-brand-singleHTML': pageHTMLPath('src', 'page-brand-single'),
      'page-categoryHTML': pageHTMLPath('src', 'page-category'),
      'page-productHTML': pageHTMLPath('src', 'page-product'),
      'page-cartHTML': pageHTMLPath('src', 'page-cart'),
      'page-orderHTML': pageHTMLPath('src', 'page-order'),
      'page-contactHTML': pageHTMLPath('src', 'page-contact'),
      'page-informationHTML': pageHTMLPath('src', 'page-information'),
      'page-404HTML': pageHTMLPath('src', 'page-404'),
      'page-nothing-foundHTML': pageHTMLPath('src', 'page-nothing-found'),

      indexJs: pagePath('src', 'index', 'js'),
      // 'page-brandsJs': pagePath('src', 'page-brands', 'js'),
      // 'page-brand-singleJs': pagePath('src', 'page-brand-single', 'js'),
      'page-categoryJs': pagePath('src', 'page-category', 'js'),
      'page-productJs': pagePath('src', 'page-product', 'js'),
      'page-cartJs': pagePath('src', 'page-cart', 'js'),
      'page-orderJs': pagePath('src', 'page-order', 'js'),
      'page-contactJs': pagePath('src', 'page-contact', 'js'),
      'page-informationJs': pagePath('src', 'page-information', 'js'),
      'page-404Js': pagePath('src', 'page-404', 'js'),
      'page-nothing-foundJs': pagePath('src', 'page-nothing-found', 'js'),

      indexScss: pagePath('src', 'index', 'scss'), 
      // 'page-brandsScss': pagePath('src', 'page-brands', 'scss'),
      // 'page-brand-singleScss': pagePath('src', 'page-brand-single', 'scss'),
      'page-categoryScss': pagePath('src', 'page-category', 'scss'),
      'page-productScss': pagePath('src', 'page-product', 'scss'),
      'page-cartScss': pagePath('src', 'page-cart', 'scss'),
      'page-orderScss': pagePath('src', 'page-order', 'scss'),
      'page-contactScss': pagePath('src', 'page-contact', 'scss'),
      'page-informationScss': pagePath('src', 'page-information', 'scss'),
      'page-404Scss': pagePath('src', 'page-404', 'scss'),
      'page-nothing-foundScss': pagePath('src', 'page-nothing-found', 'scss'),

      fonts: `${srcFolder}/fonts/**/*.*`,
      libs: `${srcFolder}/libs/**/*.*`,
      other: `${srcFolder}/other/**/*.*`,
      copyImg: `${srcFolder}/img/**/*.*`,
      images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
      imagesOptimized: `${srcFolder}/img/optimized/**/*.{jpg,jpeg,png,gif,webp}`,
      imagesOptimizedDist: `${srcFolder}/img/optimized/`,
      svg: [`${srcFolder}/img/**/*.svg`, `${srcFolder}/img/**/*.ico`],
   },


   dist: {
      html: `${distFolder}/`,
      // 'page-brandsHTML': pageHTMLPath('dist', 'page-brands'),
      // 'page-brand-singleHTML': pageHTMLPath('dist', 'page-brand-single'),
      'page-categoryHTML': pageHTMLPath('dist', 'page-category'),
      'page-productHTML': pageHTMLPath('dist', 'page-product'),
      'page-cartHTML': pageHTMLPath('dist', 'page-cart'),
      'page-orderHTML': pageHTMLPath('dist', 'page-order'),
      'page-contactHTML': pageHTMLPath('dist', 'page-contact'),
      'page-informationHTML': pageHTMLPath('dist', 'page-information'),
      'page-404HTML': pageHTMLPath('dist', 'page-404'),
      'page-nothing-foundHTML': pageHTMLPath('dist', 'page-nothing-found'),

      indexJs: pagePath('dist', 'index', 'js'),
      // 'page-brandsJs': pagePath('dist', 'page-brands', 'js'),
      // 'page-brand-singleJs': pagePath('dist', 'page-brand-single', 'js'),
      'page-categoryJs': pagePath('dist', 'page-category', 'js'),
      'page-productJs': pagePath('dist', 'page-product', 'js'),
      'page-cartJs': pagePath('dist', 'page-cart', 'js'),
      'page-orderJs': pagePath('dist', 'page-order', 'js'),
      'page-contactJs': pagePath('dist', 'page-contact', 'js'),
      'page-informationJs': pagePath('dist', 'page-information', 'js'),
      'page-404Js': pagePath('dist', 'page-404', 'js'),
      'page-nothing-foundJs': pagePath('dist', 'page-nothing-found', 'js'),
      

      indexScss: pagePath('dist', 'index', 'css'),
      // 'page-brandsScss': pagePath('dist', 'page-brands', 'css'),
      // 'page-brand-singleScss': pagePath('dist', 'page-brand-single', 'css'),
      'page-categoryScss': pagePath('dist', 'page-category', 'css'),
      'page-productScss': pagePath('dist', 'page-product', 'css'),
      'page-cartScss': pagePath('dist', 'page-cart', 'css'),
      'page-orderScss': pagePath('dist', 'page-order', 'css'),
      'page-contactScss': pagePath('dist', 'page-contact', 'css'),
      'page-informationScss': pagePath('dist', 'page-information', 'css'),
      'page-404Scss': pagePath('dist', 'page-404', 'css'),
      'page-nothing-foundScss': pagePath('dist', 'page-nothing-found', 'css'),

      fonts: `${distFolder}/fonts/`,
      libs: `${distFolder}/libs/`,
      other: `${distFolder}/other/`,
      copyImg: `${distFolder}/img/`,
      images: `${distFolder}/img/optimized/`,
      svg: `${distFolder}/img/`,
   }, 


   watch: { 
      html: `${srcFolder}/**/*.html`,
      // 'page-brandsHTML': pageHTMLPath('watch', 'page-brands'),
      // 'page-brand-singleHTML': pageHTMLPath('watch', 'page-brand-single'),
      'page-categoryHTML': pageHTMLPath('watch', 'page-category'),
      'page-productHTML': pageHTMLPath('watch', 'page-product'),
      'page-cartHTML': pageHTMLPath('watch', 'page-cart'),
      'page-orderHTML': pageHTMLPath('watch', 'page-order'),
      'page-contactHTML': pageHTMLPath('watch', 'page-contact'),
      'page-informationHTML': pageHTMLPath('watch', 'page-information'),
      'page-404HTML': pageHTMLPath('watch', 'page-404'),
      'page-nothing-foundHTML': pageHTMLPath('watch', 'page-nothing-found'),

      indexJs: pagePath('watch', null, 'js'),
      // 'page-brandsJs': pagePath('watch', null, 'js'),
      // 'page-brand-singleJs': pagePath('watch', null, 'js'),
      'page-categoryJs': pagePath('watch', null, 'js'),
      'page-productJs': pagePath('watch', null, 'js'),
      'page-cartJs': pagePath('watch', null, 'js'),
      'page-orderJs': pagePath('watch', null, 'js'),
      'page-contactJs': pagePath('watch', null, 'js'),
      'page-informationJs': pagePath('watch', null, 'js'),
      'page-404Js': pagePath('watch', null, 'js'),
      'page-nothing-foundJs': pagePath('watch', null, 'js'),
      
      indexScss: pagePath('watch', null, 'scss'),
      // 'page-brandsScss': pagePath('watch', null, 'scss'),
      // 'page-brand-singleScss': pagePath('watch', null, 'scss'),
      'page-categoryScss': pagePath('watch', null, 'scss'),
      'page-productScss': pagePath('watch', null, 'scss'),
      'page-cartScss': pagePath('watch', null, 'scss'),
      'page-orderScss': pagePath('watch', null, 'scss'),
      'page-contactScss': pagePath('watch', null, 'scss'),
      'page-informationScss': pagePath('watch', null, 'scss'),
      'page-404Scss': pagePath('watch', null, 'scss'),
      'page-nothing-foundScss': pagePath('watch', null, 'scss'),
      
      fonts: `${srcFolder}/fonts/**/*.*`,
      libs: `${srcFolder}/libs/**/*.*`, 
      other: `${srcFolder}/other/**/*.*`,
      copyImg: `${srcFolder}/img/**/*.*`,
      images: [`${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`, `!${srcFolder}/img/optimized/**/*.{jpg,jpeg,png,gif,webp}`],
      svg: [`${srcFolder}/img/**/*.svg`, `${srcFolder}/img/**/*.ico`],
   }, 

   clean: distFolder, // clear the production folder
   distFolder: distFolder, // production folder
   srcFolder: srcFolder, // source folder
   rootFolder: rootFolder, // root folder (gulp-2022)
   ftp: `test` // ftp connection
}
