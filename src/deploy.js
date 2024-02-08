const { deploy } = require('gh-pages');

deploy({
  branch: 'gh-pages',
  user: {
    name: '<akporto>',
    email: '<https://github.com/akporto>'
  },
  repo: '<AnuncioVoo>',
  dotfiles: true,
  message: 'Update deploy',
  src: 'build'
});