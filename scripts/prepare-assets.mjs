import sharp from 'sharp';
import { readdir, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
const root=process.cwd();
const folders=['automotive','furniture','marine','Medical equipments'];
await mkdir('public/images',{recursive:true});
let index=0;const photos=[];
for(const folder of folders){
 const names=(await readdir(folder)).filter(n=>/\.(jpe?g|png|webp)$/i.test(n)).sort((a,b)=>a.localeCompare(b,'en'));
 for(const name of names){const id=index++;const source=path.join(root,folder,name);const meta=await sharp(source).metadata();
  for(const width of [480,960,1600]) await sharp(source).rotate().resize({width,withoutEnlargement:true}).webp({quality:84}).toFile(`public/images/project-${id}-${width}.webp`);
  photos.push({id,category:folder==='Medical equipments'?'Medical':folder[0].toUpperCase()+folder.slice(1),source:`${folder}/${name}`,width:meta.width,height:meta.height});
 }
}
await mkdir('src',{recursive:true});await writeFile('src/photos.json',JSON.stringify(photos,null,2));console.log(`Optimized ${photos.length} original project photos into responsive WebP assets.`);
