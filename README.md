## Convert JS to coffee.

## Usage

```javascript
var coffee = require('gulp-js2coffee');

gulp.task('js2coffee', function() {
  gulp.src('./src/*.js')
    .pipe(js2coffee().on('error', gutil.log))
    .pipe(gulp.dest('./public/'))
});
```
