const image = document.querySelectorAll('.image')
const button = document.querySelector('.button')
const content = document.querySelector('.content')
let rating = ''
image.forEach((event)=> {
    event.addEventListener('click', (e)=> {
        removeActive()
        rating = e.target.innerText || e.target.parentNode.innerText
         e.target.classList.add('active')
         e.target.parentNode.classList.add('active')
    })
})

function removeActive(){
    image.forEach((event) => {
        event.classList.remove('active')
    } )
}
button.addEventListener('click', ()=> {
    if(rating == 'Smile'){
        content.innerHTML = ` <h3> Thank You </h3>
         <h1 class="m2">Feedback: <span class="green"> ${rating}</span></h1>
         <p class="m2">Thank You for your feedback. We will improve our 
         service from your feedback.</p>`
    }
   else if(rating == 'Angry'){
        content.innerHTML = ` <h3> Thank You </h3>
         <h1 class="m2">Feedback: <span class="red"> ${rating}</span></h1>
         <p class="m2">Thank You for your feedback. We will improve our 
         service from your feedback.</p>`
    }
   else if(rating == 'Sad'){
        content.innerHTML = ` <h3> Thank You </h3>
         <h1 class="m2">Feedback: <span class="sad"> ${rating}</span></h1>
         <p class="m2">Thank You for your feedback. We will improve our 
         service from your feedback.</p>`
    }
    else {
        alert('Please select the rating emoji')
    }
    
})
