/**
 * Очищение папки src/optimized при каждом обновлении изображений
 */
import del from "del";

export const cleanImg = () => {
   return del(app.path.dist.copyImg);
}