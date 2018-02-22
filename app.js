var path = require('path');

var apos = require('apostrophe')({
  shortName: 'apos',

  // See lib/modules for basic project-level configuration of our modules
  // responsible for serving static assets, managing page templates and
  // configuring user acounts.

  // We must declare the bundle!
  bundles: [ 'ncc-ecommerce' ],
  modules: {

    // Apostrophe module configuration

    // Note: most configuration occurs in the respective
    // modules' directories. See lib/apostrophe-assets/index.js for an example.

    // However any modules that are not present by default in Apostrophe must at
    // least have a minimal configuration here: `moduleName: {}`

    // If a template is not found somewhere else, serve it from the top-level
    // `views/` folder of the project

    'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') },

    // NCC Ecommerce Modules
    'ncc-ecommerce': {},
    'ncc-ecommerce-page': {},
    'ncc-product': {},
    'ncc-category': {},
    'ncc-subcategory': {},
    'ncc-products-pages' : {},
    'ncc-cart': {},
    'ncc-payments': {}
  }
});
