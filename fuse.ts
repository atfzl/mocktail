import { FuseBox } from 'fuse-box';
import { src, task } from 'fuse-box/sparky';

const fuse = FuseBox.init({
  homeDir: '.',
  target: 'browser@es5',
  output: 'dist/$name.bundle.js',
  automaticAlias: false,
  alias: {
    '#': '~/#',
  },
});

task('copy-assets', () => {
  return src('**/**.**', { base: './#/assets' })
    .clean('./dist')
    .dest('./dist')
    .exec();
});

task('build', () => {
  fuse
    .bundle('background')
    .instructions('> #/background/index.ts')
    .watch();

  fuse
    .bundle('content')
    .instructions('> #/content/index.ts')
    .watch();

  fuse
    .bundle('inject')
    .instructions('> #/inject/index.ts')
    .watch();

  fuse
    .bundle('devtools')
    .instructions('> #/devtools/index.ts')
    .watch();

  fuse
    .bundle('panel')
    .instructions('> #/panel/index.ts')
    .watch();

  fuse
    .bundle('popup')
    .instructions('> #/popup/index.ts')
    .watch();

  return fuse.run();
});

task('default', ['copy-assets', 'build']);
