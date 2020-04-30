const User = require('../models/User');
const bcrypt = require('bcryptjs')
const UserController = {
    getAll(req, res) {
        User.find()
            .then(users => res.send(users))
            .catch(error => {
                console.error(error);
                res.status(500).send(error)
            })
    },
    async register(req, res) {
        try {
            const hash = await bcrypt.hash(req.body.password, 9)
            req.body.password = hash;
            const user = await User.create(req.body)
            res.status(201).send(user);
        } catch (error) {
            console.error(error);
            res.status(500).send(error)
        }
    },
    async update(req, res) {
        try {
            if (req.body.password) {
                const hash = await bcrypt.hash(req.body.password, 9)
                req.body.password = hash;
            }
            const user = await User.findByIdAndUpdate(req.params.id, req.body, {
                new: true
            })
            res.send(user)
        } catch (error) {
            console.error(error);
            res.status(500).send(error)
        }
    },
    async delete(req, res) {
        try {
            const user = await User.findByIdAndDelete(req.params.id)
            res.send(user)
        } catch (error) {
            console.error(error);
            res.status(500).send(error)
        }
    }
}

module.exports = UserController;