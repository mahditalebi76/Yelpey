const db = require('../../models/index');
const Gis = db.testGIS
const {
    Op
} = require('sequelize')
const sequelize = require('../../database-connection');

module.exports.addCordinate = (req, res) => {
    const point = {
        type: 'Point',
        coordinates: [34.6961, 55.4231],
    };

    Gis.create({
        geo: point
    }).then(added => {
        return res.status(200).json({
            done: 'true',
            added
        })

    }).catch(err => {
        return res.status(500).json({
            err
        })
    })
}

module.exports.getAroundShops = (req, res) => {

    lat = req.body.lat;
    lng = req.body.lng
    query =
        `SELECT * FROM "shops" WHERE "addressId" IN 
        (
        SELECT
            "id"
        FROM
            "addresses"
        WHERE
        ST_Distance(ST_MakePoint(:latitude, :longtitude), "location") < 1000000000
        )`

    Gis.sequelize.query(query, {
            replacements: {
                latitude: lat,
                longitude: lng,
                maxDistance: 10 * 1000000
            },
            type: sequelize.QueryTypes.SELECT
        })
        .then(found => {
            return res.status(200).json(found)
        })
        .catch(err => {
            console.log(err)
            return res.status(500).json(err)
        })

}