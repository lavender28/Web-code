const app = Vue.createApp({
	data() {
		return {
			books: [{
					name: "《算法导论》",
					pubDate: "2006-9",
					price: 85.00,
					count: 1
				},
				{
					name: "《UNIX编程艺术》",
					pubDate: "2006-2",
					price: 59.00,
					count: 1
				},
				{
					name: "《编程大全》",
					pubDate: "2008-10",
					price: 39.00,
					count: 1
				},
				{
					name: "《代码大全》",
					pubDate: "2006-3",
					price: 128.00,
					count: 1
				},
			]
		}
	},
	methods: {
		increment(index) {
			this.books[index].count++
		},
		decrement(index) {
			this.books[index].count--
		},
		removeBook(index) {
			// 添加友好的提示信息
			if (confirm("确定要移除这本书吗？")) {
				this.books.splice(index, 1)
			}
		},
		formattedPrice(price) {
			return `￥${price.toFixed(2)}`; // 格式化单本书的价格
		}
	},
	computed: {
		totalPrice() {
			let totalPrice = 0
			for (let book of this.books) {
				totalPrice += book.count * book.price
			}
			return totalPrice
		}
		
		// 使用 forEach
		// totalPrice() {
		// 	let totalPrice = 0
		// 	this.books.forEach(book => {
		// 		totalPrice += book.count * book.price
		// 	})
		// 	return totalPrice
		// }

		// 使用 reduce
		// totalPrice() {
		// 	return this.books.reduce((total, book) => total + book.count * book.price, 0)
		// }
	}
})
app.mount('#app')