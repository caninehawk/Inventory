const router = require('express').Router();
const { json } = require('express');
const Item = require('../models/item.model');

router.get('/', (req,res) => {
    Item.find()
        .then(items => res.json(items))
        .catch(
            err => res.status(400).json('Error: ' + err)
    );
})

router.post('/add', (req,res) => {
    const title = req.body.title;
    const description = req.body.description;
    const imageUrl = req.body.imageUrl;
    const category = req.body.category;

    const newItem = new Item({
        title: title,
        description: description,
        imageUrl: imageUrl,
        category: category
    });

    newItem.save()
    .then(() => res.json('Item Added'))
    .catch(err => res.status(400)/json('Error: ' + err));
})

module.exports = router;