require("dotenv").config();
const path = require('path');
const { runMigration } = require('contentful-migration')
const migrationFilePath = path.join(__dirname, 'migrations', '01-create-productSection-contentType.js');
const configMigration = {
    filePath: migrationFilePath,
    spaceId: process.env.SPACE_ID,
}

runMigration(configMigration)
.then(() => console.log('Migration Done!'))
.catch((e) => console.error(e))