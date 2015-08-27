
requirejs.config({
  baseUrl: 'js',
  paths: {
    jquery: 'vendor/jquery-2.1.4.min',
    ractive: 'vendor/ractive-0.7.3.min',
    reflux: 'vendor/reflux-0.2.7.min',
    rvc: "vendor/rvc-0.3.1",
    semantic: "vendor/semantic-1.12.2.min",
  },
  shim: {
    semantic: {
      deps: ['jquery'],
    }
  }
});


requirejs([
  "jquery",
  "rvc",
  "semantic",
  "vendor/modernizr-2.8.3.min",
]);


requirejs([
  'jquery',
  'ractive',
  'rvc!components/users-badges-list',
],
  function($, Ractive, UsersBadgesList) {
    new UsersBadgesList({
      append: true,
      el: '#content',
      data: {},
    })
})
