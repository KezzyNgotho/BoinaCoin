const webpack = require('webpack');

module.exports = function override(config, env) {
  config.node = {
    process: 'mock/process/browser',
    Buffer: 'buffer',
  };
  config.plugins.push(
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    })
  );
  return config;
};
