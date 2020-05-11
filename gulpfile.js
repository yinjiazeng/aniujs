const { src, dest, parallel, watch } = require('gulp');
const ts = require('gulp-typescript');

const tsProject = ts.createProject('./tsconfig.json');
const pkgSrc = 'package/src/**';
const tsGlob = `${pkgSrc}/*.ts`;

function task(stream) {
  stream.pipe(dest('package/lib'));
}

function ts2js(cb) {
  task(src([tsGlob]).pipe(tsProject()));
  cb();
}

if (process.env.NODE_ENV === 'development') {
  watch([tsGlob], ts2js);
}

exports.default = parallel(ts2js);
