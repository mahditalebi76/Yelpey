const db = require('../../../models/index');
const Category = db.categories;
const Image = db.images

module.exports.getCategory = (req, res) => {

    Category.findAll({
            include: [{
                model: Image,
                as: 'image'
            }]
        })
        .then(categories => {
            return res.status(200).json({
                categories
            })
        })
        .catch(err => {
            console.log(err);
            return res.status(500).json({
                err: 'server error: finding categories'
            })
        })
}