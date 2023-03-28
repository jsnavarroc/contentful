module.exports = function (migration) {
  const productSection = migration
    .createContentType('productSection')
    .name('Product Section')
    .description('Single product content type')
    .displayField('title');

  const internalName = productSection.createField('internalName').name('Internal Name').type('Symbol');

  const title = productSection.createField('title').name('Title').type('Symbol').required(true);

  const products = productSection
    .createField('products')
    .name('Products')
    .type('Array')
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [{ linkContentType: ['product'] }],
    });
};
// Se podría ejecutar desde la consola de la siguiente forma:
// contentful space migration --space-id <space_id> <path>
// contentful space migration --space-id <space_id> migrations/01-create-productSection-contentType.js
// O tambien se puede correr como esta en el index.js
