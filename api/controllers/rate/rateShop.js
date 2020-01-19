const db = require('../../../models/index');
const User = db.users;
const Shop = db.shops;
const Shoprate = db.shoprates;

const {
    updateOrCreate
} = require('../../middlewares/updateOrCreate');


module.exports.rateShop = (req, res) => {

    if (req.body.stars == 0) {
        Shoprate.findOne({
            where: {
                userId: req.user.id,
                shopId: req.body.shopId
            }
        }).then(rated => {
            if (rated) {
                Shoprate.destroy({
                        where: {
                            userId: req.user.id,
                            shopId: req.body.shopId
                        }
                    }).then(destroyed => {
                        return res.status(200).json({
                            mes: 'rating removed'
                        })
                    })
                    .catch(err => {
                        console.log(err)
                        return res.status(500).json({
                            err: 'server error: removing rating'
                        })
                    })
            } else {
                return res.status(200).json({
                    mes: 'rating removed'
                })
            }

        })
    } else {

        updateOrCreate(
                Shoprate, {
                    userId: req.user.id,
                    shopId: req.body.shopId
                }, {
                    userId: req.user.id,
                    shopId: req.body.shopId,
                    stars: req.body.stars
                })
            .then(rated => {
                return res.status(200).json({
                    mess: 'rating complete',
                    rated
                })
            })
            .catch(err => {
                console.log(err)
                return res.status(500).json({
                    err: 'server error: adding rating'
                })
            })
    }


}

// async function updateOrCreate(model, where, newItem) {
//     // First try to find the record
//     const foundItem = await model.findOne({
//         where
//     });
//     if (!foundItem) {
//         // Item not found, create a new one
//         const item = await model.create(newItem)
//         return {
//             item,
//             created: true
//         };
//     }
//     // Found an item, update it
//     const item = await model.update(newItem, {
//         where
//     });
//     return {
//         item,
//         created: false
//     };
// }