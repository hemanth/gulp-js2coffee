var es = require('event-stream');
var js2coffee = require('js2coffee');
var gutil = require('gulp-util');
var Buffer = require('buffer').Buffer;

module.exports = function(opt){
  function modifyFile(file){
    if (file.isNull()){
      return this.emit('data', file); // pass along
    } 
    if (file.isStream()){
      return this.emit('error', new Error("gulp-js2coffee: Streaming not supported"));
    } 

    var str = file.contents.toString('utf8');

    file.contents = new Buffer(js2coffee.build(str,opt));
    file.path = gutil.replaceExtension(file.path, ".coffee");
    this.emit('data', file);
  }

  return es.through(modifyFile);
};
