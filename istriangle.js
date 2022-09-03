const input = document.querySelectorAll('.angle-input');
const isTriangleBtn = document.querySelector('#is-triangle-btn');
const outputEl = document.querySelector('#output');

function calculateSumOfAngles(angle1, angle2,angle3){
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}
function isTriangle(){
    const sumOfAngles = calculateSumOfAngles(Number(input[0].value),Number(input[1].value),Number(input[2].value));
    if(sumOfAngles === 180){
        outputEl.innerText = "Yes! The angles form a Triangle"
    }else{
        outputEl.innerText = "Sorry! The angles Don't form a Triangle" 
    }
}

isTriangleBtn.addEventListener("click", isTriangle)