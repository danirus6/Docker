const User = require('../models/User')

const UserController = {
	async create(req, res) {
		try {
			const product = await User.create(req.body)
			res.status(201).send(product)
		} catch (error) {
			console.error(error)
			res
				.status(500)
				.send({ message: 'Ha habido un problema al crear el User' })
		}
	},
	async getAll(req, res) {
		try {
			const users = await Product.find()
			res.status(200).send(users)
		} catch (error) {
			console.error(error)
			res.status(500).send(error)
		}
	},
	async getById(req, res) {
		try {
			const users = await User.findById(req.params._id)
			res.status(200).send(users)
		} catch (error) {
			res.status(500).send(error)
		}
	},
	async getUsersByName(req, res) {
		try {
			// if (req.params.name.length > 20) {
			// 	return res.status(400).send('Búsqueda demasiado larga')
			// }

			// const name = new RegExp(req.params.name, 'i')
			// const products = await Product.find({ name })
			const users = await Product.find({
				$text: {
					$search: req.params.name,
				},
			})

			res.send(users)
		} catch (error) {
			console.log(error)
		}
	},
	async delete(req, res) {
		try {
			const users = await User.findByIdAndDelete(req.params._id)
			res.send({ users, message: 'user deleted' })
		} catch (error) {
			console.error(error)
			res.status(500).send({
				message: 'there was a problem trying to remove the publication',
			})
		}
	},
	async update(req, res) {
		try {
			const users = await User.findByIdAndUpdate(
				req.params._id,
				req.body,
				{ new: true }
			)
			res.status(201).send(users)
		} catch (error) {
			res.status(500).send(error)
		}
	},
}
module.exports = UserController
