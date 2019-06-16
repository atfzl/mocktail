import { FuseBox } from 'fuse-box';
import { TypeChecker } from 'fuse-box-typechecker';
import { src, task } from 'fuse-box/sparky';

const isProd = process.env.NODE_ENV === 'production';

if (!isProd) {
  const typechecker = TypeChecker({
    tsConfig: './tsconfig.json',
    basePath: '.',
  });

  typechecker.runWatch('./#');
}

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
    .instructions('> #/entry/background/index.ts')
    .watch('#/**/*.*');

  fuse
    .bundle('content')
    .instructions('> #/entry/content/index.ts')
    .watch('#/**/*.*');

  fuse
    .bundle('inject')
    .instructions('> #/entry/inject/index.ts')
    .watch('#/**/*.*');

  fuse
    .bundle('devtools')
    .instructions('> #/entry/devtools/index.ts')
    .watch('#/**/*.*');

  fuse
    .bundle('panel')
    .instructions('> #/entry/panel/index.tsx')
    .watch('#/**/*.*');

  fuse
    .bundle('popup')
    .instructions('> #/entry/popup/index.ts')
    .watch('#/**/*.*');

  return fuse.run();
});

task('default', ['copy-assets', 'build']);
