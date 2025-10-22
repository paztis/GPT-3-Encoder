const fs = require('fs');
const path = require('path');

const bpe_file = fs.readFileSync(path.join(__dirname, '../vocab.bpe'), 'utf-8');
fs.writeFileSync(path.join(__dirname, '../vocab.bpe.json'), JSON.stringify(bpe_file), 'utf-8');
