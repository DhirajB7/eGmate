//--ELEMENTS--//
var quantCurrentScoreInput = document.getElementById("quantCurrent")
var quantTargetScoreInput = document.getElementById("quantTarget")
var verbalCurrentScoreInput = document.getElementById("verbalCurrent")
var verbalTargetScoreInput = document.getElementById("verbalTarget")
var submitAndRefreshButton = document.getElementById("submitButton")
var graphUiSection = document.getElementById("graphUi")

//////////////

//--DECLARATIONS--//
var graphTargetQuantScore=0
var graphCurrentQuantScore=0
var graphTargetVerbalScore=0
var graphCurrentVerbalScore=0
var graphTotalCurrentScore=0
var graphTotalTargetScore=0

//////////////////

//--FUNCTIONS--SCROLL SCETION//
function checkNumberGreaterThenOneButLessThenFifty(numb){
    var num = parseInt(numb)
    if(num>0 && num<61){
        return true
    }else{
        return false
    }
}

function resetScore() {
    quantCurrentScoreInput.value=0
    quantTargetScoreInput.value=0
    verbalCurrentScoreInput.value=0
    verbalTargetScoreInput.value=0
}

function displayGraph(text){
    graphUiSection.style.display=text
}

function scoreCalculator() {
 graphTargetQuantScore=quantTargetScoreInput.value
 graphCurrentQuantScore=quantCurrentScoreInput.value
 graphTargetVerbalScore=verbalCurrentScoreInput.value
 graphCurrentVerbalScore=verbalTargetScoreInput.value
 graphTotalCurrentScore= 200 +(graphCurrentQuantScore+graphCurrentVerbalScore)*5
 graphTotalTargetScore= 200 +(graphTargetQuantScore+graphTargetVerbalScore)*5
}
////////////////

//--EVENTS--SCROLL SCETION//
window.addEventListener("load",()=>{
    displayGraph("none")
    resetScore()
})

submitAndRefreshButton.addEventListener("click",()=>{
    var flag = checkNumberGreaterThenOneButLessThenFifty(quantCurrentScoreInput.value)&&checkNumberGreaterThenOneButLessThenFifty(quantTargetScoreInput.value)&&checkNumberGreaterThenOneButLessThenFifty(verbalCurrentScoreInput.value)&&checkNumberGreaterThenOneButLessThenFifty(verbalTargetScoreInput.value)
    if(flag){
        displayGraph("block")
        scoreCalculator()
        resetScore()
    }else{
        alert("Current and Target value must be greater then 0 and less then 61")
    }   
})
////////////////
//--FUNCTION--GRAPH SECTION--//

//////////////////////////////