
const btn = document.querySelector('.form__button')
let isFinandy

btn.addEventListener('click',(evt)=>{
	evt.preventDefault()
	const intervalValue = document.querySelector('#interval').value
	const rowsValue = document.querySelector('#rows').value

	alert(`interval: ${intervalValue} rows: ${rowsValue}`)
})


chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
	const tab = tabs[0];
	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		function: () => {
			const pair = document
				.body
				.querySelectorAll('.xc-selected')[1]
				.querySelectorAll('span')[1]
				.textContent
				.split('.')
				.join('')
				.toLowerCase()
			console.log(pair)
		},
	});
	const curDomain = tab.url.split('.')[0]

	if(curDomain === 'https://finandy'){
		isFinandy = true
	} else {
		isFinandy = false
	}
	return tab
})

