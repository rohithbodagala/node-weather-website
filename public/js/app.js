

const weatherForm=document.querySelector('form')
const searchElement=document.querySelector('input')
const messageOne=document.getElementById('message-1')
const messageTwo=document.getElementById('message-2')

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()

    const location=searchElement.value
    messageOne.textContent='Loading...'
    messageTwo.textContent=''

    fetch('/weather?address='+location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent=data.error
            } else {
                messageOne.textContent=data.location
                messageTwo.textContent=data.forecast
            }
        })
    })

})