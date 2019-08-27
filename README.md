# Video Length [![npm Package](https://img.shields.io/npm/v/video-length.svg)](https://www.npmjs.org/package/video-length)
Get video length using NodeJS and MediaInfo


## API

```javascript
await VideoLength(input[, options])
```

### input
**Type**: _String_   
Full path to video


### options.bin
**Type**: _String_  
**Default**: `MediaInfo`  
Full path to [MediaInfo](https://mediaarea.net/ru/MediaInfo) binary file  


### options.extended
**Type**: _Boolean_  
**Default**: `false`  
Return a bit more video specs   


### @return
**Type**: _Number_ | _Object_  
Depends on the `extended` option. If `extended = true`, returns an object with few more data:  
```json
{
   "duration" : 946.213,
   "width"    : 2560,
   "height"   : 1440,
   "fps"      : 30,
   "bitrate"  : 980537,
   "size"     : 6401288
}
```




## Usage
```javascript
const VideoLength = require('video-length');

let video = './videos/MONICA BELLUCCI in the Matrix Sequels (HD Movie Scenes).mp4';

VideoLength(video, { bin: './bin/MediaInfo.exe' })
.then(len => {
   // => 307.967
})
.catch(err => {
   console.log(err);
})
```



## Changelog 
#### v2.0.0 (2019-08-27):
- moved from `FFprobe` to `MediaInfo`
- no more useless `silent` mode
