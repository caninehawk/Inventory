const router = require('express').Router();
const { json } = require('express');
const Category = require('../models/categories.model');

router.get('/', (req,res) => {
    Category.find()
        .then(categories => res.json(categories))
        .catch(
            err => res.status(400).json('Error: ' + err)
    );
})

router.post('/add', (req,res) => {
    const category = req.body.category;

    const newCategory = new Category({
        category: category
    });

    newCategory.save()
    .then(() => res.json('Category Added'))
    .catch(err => res.status(400)/json('Error: ' + err));
})

module.exports = router;