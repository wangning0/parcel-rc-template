const process_modules = process.env.BABEL_MODULES;
const process_target = process.env.BABEL_TARGET;

const modules = !process_modules || process_target === 'rollup'  ? false : process_modules;
const target = process_target ? process_target : '';

const options = {
  presets: [['@babel/preset-env', { loose: true, modules }], '@babel/preset-react', '@babel/preset-stage-0'],
  plugins: [],
}

if(target === 'rollup') {
  options.plugins.push('@babel/plugin-external-helpers');
} else if(target === 'examples') {
  options.plugins.push(['transform-react-remove-prop-types', { removeImport: true }]);
} else {
  options.plugins.push(['transform-react-remove-prop-types', { mode: 'wrap' }]);
}

module.exports = options;