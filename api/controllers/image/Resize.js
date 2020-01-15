
const sharp = require('sharp');
const path = require('path');
class Resize {
    constructor(folder, info) {
        this.folder = folder;
        this.info = info;
        // console.log(this.info)
    }
    async save(buffer) {
        const filename = Resize.filename(this.info);
        const filepath = this.filepath(filename);

        await sharp(buffer)
            .resize(100, 100, {
                // fit: sharp.fit.inside,
                withoutEnlargement: true
            })
            .toFile(filepath);
        return filename;
    }
    static filename(info) {
        return `${info}`;
    }
    filepath(filename) {
        return path.resolve(`${this.folder}/${filename}`)
    }
}
module.exports = Resize;