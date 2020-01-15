const db = require('../../../models/index');
const Image = db.images;

module.exports.imageInfo = (req, res) => {
    Image.findOne({
            where: {
                id: req.body.id
            },
            attributes: ['id', 'name', 'uploaderId', 'path']
        }).then(image => {
            return res.status(200).json({
                image
            })
        })
        .catch(err => {
            return res.status(500).json({
                err: 'cant find image'
            })
        })
}