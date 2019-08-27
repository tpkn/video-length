/*!
 * Video Length, http://tpkn.me/
 */
const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function VideoLength(file, options = {}){
   let result;
   let { bin = 'MediaInfo', extended = false } = options;

   let { stdout } = await exec(`"${bin}" --full --output=JSON "${file}"`);
   if(stdout){

      let specs = JSON.parse(stdout);
      let { track } = specs.media;
      if(!track){
         throw new TypeError('Can\'t extract video specs');
      }

      // General info
      let general_specs = track.find(i => i['@type'] == 'General');
      if(!general_specs){
         throw new TypeError('Can\'t find overall specs');
      }

      // Video track specs
      let video_specs = track.find(i => i['@type'] == 'Video');
      if(!video_specs){
         throw new TypeError('Can\'t find video track');
      }

      let { Duration, FrameRate, OverallBitRate, FileSize } = general_specs;
      let { Width, Height } = video_specs;

      if(extended){
         result = {
            duration : parseFloat(Duration),
            width    : parseFloat(Width),
            height   : parseFloat(Height),
            fps      : parseFloat(FrameRate),
            bitrate  : parseFloat(OverallBitRate),
            size     : parseFloat(FileSize),
         }
      }else{
         result = parseFloat(Duration);
      }
      
   }

   return result
}

module.exports = VideoLength;
