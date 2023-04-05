const container = document.createElement("div")
container.classList.add('ex_container')

const data = [{
	buy:'5 000 000 000',
	sell:'6 000 000'
},
	{
		buy:'5 000 000 000',
		sell:'6 000 000'
	},
	{
		buy:'5 000 000 000',
		sell:'6 000 000'
	},
	{
		buy:'5 000 000 000',
		sell:'6 000 000'
	},
]
class table {
	constructor(data, interval, rows, containerSelector) {
		this.data = data
		this.interval = interval
		this.rows = rows
		this.container = document.querySelector(containerSelector)
	}
	getElement(el){
		const item = document.createElement('li')
		item.classList.add('ex_item')
		const itemBuy = document.createElement('span')
		itemBuy.classList.add('ex_item-text')
		item.textContent = el.buy
		const itemSold = document.createElement('span')
		itemSold.classList.add('ex_item-text')
		itemSold.textContent = el.sell
		item.prepend(itemBuy)
		item.prepend(itemSold)
		return item
	}
	addElement(el){
		this.container.prepend(el)
	}
	render(){
		this.data.forEach(item=>{
			const element = this.getElement(item)
			this.addElement(element)
		})
	}
	
}

const testClass = new table(data,30, 5, 'body')

testClass.render()

// const h1 = document.createElement("h1");
// h1.textContent = "Hello, World!";
// document.body.prepend(container);