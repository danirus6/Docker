const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema(
	{
		name: String,
		price: Number,
	},
	{ timestamps: true }
)

ProductSchema.index({
	name: 'text',
})

const Product = mongoose.model('User', ProductSchema)

module.exports = Product
