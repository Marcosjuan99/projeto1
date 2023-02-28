
function calculate() {
    const box1 = document.getElementById('boxOne')
    const box2 = document.getElementById('boxTwo')
    const res = document.getElementById('res')
    var valueOne = Number(box1.value)
    var valueTwo = Number(box2.value)
    var end = valueOne + valueTwo
    res.innerHTML = `${end}`

}