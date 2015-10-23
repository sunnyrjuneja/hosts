var fs = require('fs');

HOST_PATH = '/etc/hosts'
HOST_REPO = __dirname + '/hosts_files'
BACKUP_FILE = HOST_REPO + '/backup'

function backup () {
  fs.createReadStream(HOST_PATH).pipe(fs.createWriteStream(BACKUP_FILE))
}

function restore () {
  fs.createReadStream(BACKUP_FILE).pipe(fs.createWriteStream(HOST_PATH))
}
