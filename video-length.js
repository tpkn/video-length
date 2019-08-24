/*!
 * Video Length, http://tpkn.me/
 */
const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function VideoLength(file, options = {}){
   let len = 0;
   let { bin = 'ffprobe', silent = true } = options;

   try {

      let data = await exec(`${bin} -i "${file}" -show_entries format=duration -v quiet -of csv="p=0"`);
      if(typeof data.stdout !== 'undefined'){
         data = data.stdout;
      }

      len = parseFloat(data);

   }catch(err){
   	if(!silent){
   		throw err
   	}
   }

   return len;
}

module.exports = VideoLength;
