const circles = document.querySelectorAll('.circle');
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

//current value
let currentActive = 1

//add eentlistener on next button to go the next button
next.addEventListener('click', () =>{
    currentActive++;
    if(currentActive > circles.length){
        currentActive = circles.length
    }
    update()
})

//add eventlistener to go back to previous
prev.addEventListener('click', ()=>{
    currentActive--
    if(currentActive < 1){
        currentActive = 1
    }
    update()
})

function update(){
    circles.forEach((circle,idx) =>{
        if(idx < currentActive){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })
    const actives = document.querySelectorAll('.active')
    progress.style.width = (actives.length - 1 ) / (circles.length - 1)* 100 + '%'
//progressive step
    if(currentActive == 1){
        prev.disabled = true
//regressive step
    }else if(currentActive === circles.length){
        next.disabled = true
    }else{
        prev.disabled = false
        next.disabled = false
    }
}