let celsiusInput=document.querySelector('#celsius > input')
let FahrenhietInput=document.querySelector('#Fahrenhiet > input')
let KelvinInput=document.querySelector('#Kelvin > input')

let btn=document.querySelector('.button button')

function roundumber(number){
    return Math.round(number*100)/100

}
celsiusInput.addEventListener('input',function(){
    let cTmp=parseFloat(celsiusInput.value)
    let fTmp=(cTmp*(9/5))+ 32
    let kTmp=cTmp+273.15

    FahrenhietInput.value=roundNumber(fTmp)
    KelvinInput.value=roundNumber(kTmp)
} )

FahrenhietInput.addEventListener('input',function(){
    let fTmp=parseFloat(FahrenhietInput.value)
    let cTmp=(fTmp-32)*(5/9)
    let kTmp=(fTmp-32)*(5/9)+273.15

    celsiusInput.value=roundNumber(cTmp)
    KelvinInput.value=roundNumber(kTmp)
} )

KelvinInput.addEventListener('input',function(){
    let kTmp=parseFloat(KelvinInput.value)
    let cTmp=kTmp-273.15
    let fTmp=(kTmp-273.15)*(9/5)+32

    celsiusInput.value=roundNumber(cTmp)
    FahrenhietInput.value=roundNumber(fTmp)
} )
btn.addEventListener('click',()=>{
    celsiusInput.value=""
    FahrenhietInput.value=""
    KelvinInput.value=""
})
