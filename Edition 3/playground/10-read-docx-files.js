const extract = require('extract-zip')
var convert = require('xml-js');

async function main() {
    try {
        await extract(__dirname + '\\test.docx', { dir: __dirname + '\\unzipped_files' })
        console.log('Extraction complete')
    } catch (err) {
        // handle any errors
        console.log(err)
    }
}

function xmlToJson() {
    var result1 = convert.xml2json(__dirname + '\\unzipped_files\\comments.xml', { compact: true, spaces: 4 });
    // var result2 = convert.xml2json(xml, { compact: false, spaces: 4 });
    console.log(result1);
}

// main()
xmlToJson()