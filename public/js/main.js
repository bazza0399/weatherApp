const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const list = document.querySelector('ul')
weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    
    fetch(`http://localhost:3000/forecast?location=${search.value}`).then((response)=>{
    response.json().then((data)=>{
        list.innerHTML = `<li>location : ${data.location}<li/>
        <li> temerature : ${data.temperature} <li/>
        <li>windSpeed : ${data.windSpeed} <li/>
        <li>condition : ${data.condition} <li/>
        `
    })
})
})


