const db = require('../../../models/index');
const State = db.states;
const City = db.cities;

module.exports.getStates = (req, res) => {
    State.findAll({
            attributes: ['id', 'name']
        }).then(states => {
            return res.status(200).json({
                states
            })
        })
        .catch(err => {
            return res.status(500).json({
                err: 'couldnt get states'
            })
        })
}
module.exports.getCities = (req, res) => {
    City.findAll({
            where: {
                stateId: req.body.stateId
            },
            attributes: ['id', 'name']
        }).then(cities => {
            return res.status(200).json({
                cities
            })
        })
        .catch(err => {
            return res.status(500).json({
                err: 'couldnt get cities'
            })
        })
}

module.exports.getStatesCities = (req, res) => {
    State.findAll({
            attributes: ['id', 'name'],
            include: [{
                model: City,
                attributes: ['id', 'name']
            }]
        }).then(states => {
            return res.status(200).json({
                states
            })
        })
        .catch(err => {
            return res.status(500).json({
                err: 'couldnt get states'
            })
        })
}