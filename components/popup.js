


const btn = document.querySelector('.form__button')

btn.addEventListener('click', ()=>{
	chrome.tabs.query({active: true}, (tabs) => {
	const cTab = tabs[0]
	
})
})