const db = require('../../../models/index');
const User = db.users;
const Shop = db.shops;
const Post = db.shopPosts;
const Image = db.images;
const Resize = require('../image/Resize');
const path = require('path');

module.exports.addPost = (req, res) => {
    Post.findAndCountAll({}).then(count => {
            const imagePath = path.join(__dirname, '../../../public/posts');
            const ImageName = `post${(count.count)+1}.jpg`;
            const fileUpload = new Resize(imagePath, ImageName);
            let imageUrl = '/public/posts/' + ImageName
            Image.create({
                    uploaderId: req.user.id,
                    name: ImageName,
                    path: imageUrl
                }).then(async image => {
                    if (req.file) {
                        const filename = await fileUpload.save(req.file.buffer);
                    }
                    Post.create({
                            shopId: req.body.id,
                            title: req.body.title,
                            imageId: image.id,
                            content: req.body.content
                        }).then(post => {
                            return res.status(200).json({
                                post
                            })
                        })
                        .catch(err => {
                            console.log(err);
                            return res.status(500).json({
                                err: 'server error: posting ppst'
                            })
                        })
                })
                .catch(err => {
                    console.log(err);
                    return res.status(500).json({
                        err: 'server error: adding image'
                    })
                })

        })
        .catch(err => {
            console.log(err);
            return res.status(500).json({
                err: 'server error: posting postx'
            })
        })




}