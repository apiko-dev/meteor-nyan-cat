Package.describe({
  name: 'jss:nyan-cat',
  version: '1.0.0',
  summary: 'Nyan cat in your console!',
  git: 'https://github.com/JSSolutions/meteor-nyan-cat',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('nyan-cat.js', 'client');
});
