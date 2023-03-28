const { runMigration } = require('contentful-migration')
const options = {
  filePath: '<migration-file-path>',
  spaceId: '<space-id>',
  accessToken: '<access-token>'
}
runMigration(options)
  .then(() => console.log('Migration Done!'))
  .catch((e) => console.error(e))