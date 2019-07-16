# Video Length [![npm Package](https://img.shields.io/npm/v/video-length.svg)](https://www.npmjs.org/package/video-length)
Get video length using NodeJS and FFProbe


Features:
* Returns full video length in seconds
* Works even if there are unsupported chars in the file name
* Silent. Returns `0` in case of any error



## Installation
```bash
npm install video-length
```


## API

### VideoLength(file[, options])

### file
**Type**: _String_


### options.bin
**Type**: _String_  
**Default**: `ffprobe`  
Path to [ffprobe](http://ffmpeg.org/download.html) binary file  


### options.debug
**Type**: _Boolean_  
**Default**: `false`  
Enable/disable errors output  



## Usage
```javascript
const fs = require('fs');
const VideoLength = require('video-length');

let video = './videos/MONICA BELLUCCI in the Matrix Sequels (HD Movie Scenes).mp4';

VideoLength(video, { bin: './bin/ffprobe.exe' }).then(len => {
   // => 307.967
}).catch(err => {
   console.log(err);
})

```

