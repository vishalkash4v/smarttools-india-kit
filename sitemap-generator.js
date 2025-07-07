require('babel-register')();
const { Sitemap } = require('react-router-sitemap');
const router = require('./src/routes').default;

new Sitemap(router)
  .build('https://fyntools.com')
  .save('public/sitemap.xml');
