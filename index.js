const completedBtn1 = document.getElementById("ComPleted-btn1")
const completedBtn2 = document.getElementById("ComPleted-btn2")
const completedBtn3 = document.getElementById("ComPleted-btn3")
const completedBtn4 = document.getElementById("ComPleted-btn4")
const completedBtn5 = document.getElementById("ComPleted-btn5")
const completedBtn6 = document.getElementById("ComPleted-btn6")
let taskAssigend = 6
let pointVlaue = 22


completedBtn1.addEventListener('click', function () {
    const countText = document.getElementById("poyent-count");
    const pointVlaueCount = document.getElementById("poin-value")
    taskAssigend--
    pointVlaue++
    countText.textContent = taskAssigend
    completedBtn1.disabled = true
    pointVlaueCount.textContent = pointVlaue

})

completedBtn2.addEventListener('click', function () {
    const countText = document.getElementById("poyent-count");
    const pointVlaueCount = document.getElementById("poin-value")
    taskAssigend--
    pointVlaue++
    countText.textContent = taskAssigend
    completedBtn2.disabled = true
    pointVlaueCount.textContent = pointVlaue
    
})

completedBtn3.addEventListener('click', function () {
    const countText = document.getElementById("poyent-count");
    const pointVlaueCount = document.getElementById("poin-value")
    taskAssigend--
    pointVlaue++
    countText.textContent = taskAssigend
    completedBtn3.disabled = true
    pointVlaueCount.textContent = pointVlaue
    
})

completedBtn4.addEventListener('click', function () {
    const countText = document.getElementById("poyent-count");
    const pointVlaueCount = document.getElementById("poin-value")
    taskAssigend--
    pointVlaue++
    countText.textContent = taskAssigend
    completedBtn4.disabled = true
    pointVlaueCount.textContent = pointVlaue
    
})

completedBtn5.addEventListener('click', function () {
    const countText = document.getElementById("poyent-count");
    const pointVlaueCount = document.getElementById("poin-value")
    taskAssigend--
    pointVlaue++
    countText.textContent = taskAssigend
    completedBtn5.disabled = true
    pointVlaueCount.textContent = pointVlaue
    
})

completedBtn6.addEventListener('click', function () {
    const countText = document.getElementById("poyent-count");
    const pointVlaueCount = document.getElementById("poin-value")
    taskAssigend--
    pointVlaue++
    countText.textContent = taskAssigend
    completedBtn6.disabled = true
    pointVlaueCount.textContent = pointVlaue
    
})

// TODO:: baki 4 card inproggress




