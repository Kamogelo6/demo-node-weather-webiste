console.log('Client js file is loaded!')

fetch('http://puzzle.mead.io/puzzle').then((response)=> {
    response.json().then((data)=>{
        console.log(data)
    })
})


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')

weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    const location = search.value
    messageOne.textContent = (location)
})