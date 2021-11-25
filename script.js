// var displayValue=(num)=>result.value+=num
function displayValue(num){
    let res=document.querySelector("#txtinput")
    res.value+=num
}
// var clearBox=()=>result.value=""
function clearBox(){
    document.querySelector("#txtinput").value=""
}
// var evaluateExp=()=>result.value=eval(result.value)
function evaluateExp(){
    let res=document.querySelector("#txtinput")
    let cur_value=res.value
    let result=eval(cur_value)
    res.value=result
}
function backspace(){
    let res=document.querySelector("#txtinput")
    let cur_value=res.value
    res.value=cur_value.slice(0,-1)

}