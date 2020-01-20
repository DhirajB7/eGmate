//--ELEMENTS--//
//scroll ui elements
var quantCurrentScoreInput = document.getElementById("quantCurrent")
var quantTargetScoreInput = document.getElementById("quantTarget")
var verbalCurrentScoreInput = document.getElementById("verbalCurrent")
var verbalTargetScoreInput = document.getElementById("verbalTarget")
var submitAndRefreshButton = document.getElementById("submitButton")

//graph UI Elements
var graphUiSection = document.getElementById("graphUi")

//Total Section
var totalScoreHolderElement = document.getElementById("totalScoreHolder")
var currentTotalScoreElement = document.querySelector("#totalCurrentScore")
var differenceTotalScoreElement = document.querySelector("#totalDifferenceScore")
var currentTotalScoreGraphElement = document.querySelector(".meter>#totalCurrentScore")
var differenceTotalScoreGraphElement = document.querySelector(".meter>#totalDifferenceScore")
var totalSectionMessageHolder = document.getElementById("totalMessage")

//Quant Section
var quantScoreHolderElement = document.getElementById("quantScoreHolder")
var currentQuantScoreElement = document.querySelector("#currentQuantScore")
var differenceQuantScoreElement = document.querySelector("#differenceQuantScore")
var currentQuantScoreGraphElement = document.querySelector(".meterQuant>#currentQuantScore")
var differenceQuantScoreGraphElement = document.querySelector(".meterQuant>#differenceQuantScore")
var quantSectionMessageHolder = document.getElementById("quantMessage")

//Verbal section
var verbalScoreHolderElement = document.getElementById("verbalScoreHolder")
var currentVerbalScoreElement = document.querySelector("#currentVerbalScore")
var differenceVerbalScoreElement = document.querySelector("#differenceVerbalScore")
var currentVerbalScoreGraphElement = document.querySelector(".meterVerbal>#currentVerbalScore")
var differenceVerbalScoreGraphElement = document.querySelector(".meterVerbal>#differenceVerbalScore")
var verbalSectionMessageHolder = document.getElementById("verbalMessage")


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
 graphTargetQuantScore=parseInt(quantTargetScoreInput.value)
 graphCurrentQuantScore=parseInt(quantCurrentScoreInput.value)
 graphCurrentVerbalScore=parseInt(verbalCurrentScoreInput.value)
 graphTargetVerbalScore=parseInt(verbalTargetScoreInput.value)
 graphTotalCurrentScore= 200 +(parseInt(graphCurrentQuantScore)+parseInt(graphCurrentVerbalScore))*5
 graphTotalTargetScore= 200 +(parseInt(graphTargetQuantScore)+parseInt(graphTargetVerbalScore))*5

 graphSection(graphTotalCurrentScore,graphTotalTargetScore,totalScoreHolderElement,currentTotalScoreElement,differenceTotalScoreElement,currentTotalScoreGraphElement,differenceTotalScoreGraphElement,totalSectionMessageHolder,"","GMAT","totalGraph")
 graphSection(graphCurrentQuantScore,graphTargetQuantScore,quantScoreHolderElement,currentQuantScoreElement,differenceQuantScoreElement,currentQuantScoreGraphElement,differenceQuantScoreGraphElement,quantSectionMessageHolder,"Q","quantitative","quantGraph")
 graphSection(graphCurrentVerbalScore,graphTargetVerbalScore,verbalScoreHolderElement,currentVerbalScoreElement,differenceVerbalScoreElement,currentVerbalScoreGraphElement,differenceVerbalScoreGraphElement,verbalSectionMessageHolder,"V","verbal","verbalGraph")

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

function graphSection(qCntScore,qTgtScore,scoreHolderElement,currentScoreElement,differenceScoreElement,currentGraphElement,differenceGraphElement,messageHolderElement,sectionIdentifier,sectionName,flag) {
   var cntScr = parseInt(qCntScore)
   var tgtScr = parseInt(qTgtScore)
   var sId = sectionIdentifier.toString()
   var sName = sectionName.toString()
   var dinominator = 1

   scoreHolderElement.innerText = sId+cntScr.toString()

   if (flag==="totalGraph"){
    dinominator = 800
   }else{
    dinominator = 60
   }

    var percentAgeValue = Math.round((cntScr/dinominator)*100)
    currentScoreElement.innerText = sId+cntScr.toString()
    currentGraphElement.style.width = percentAgeValue.toString()+"%"
    differenceScoreElement.innerText=""
    differenceGraphElement.style.width ="0%"

   if(cntScr<tgtScr){

    var percentAgeValueTarget = Math.round(((tgtScr-cntScr)/dinominator)*100)
    differenceScoreElement.innerText="+"+(tgtScr-cntScr).toString()
    differenceGraphElement.style.width = percentAgeValueTarget.toString()+"%"

    var message = "Your estimated "+sName+" score as per your performance in this mock test is "+sId+cntScr.toString()+",which is <strong>"+(tgtScr-cntScr).toString()+" points</strong> lower than your target "+sName+" score of "+sId+tgtScr.toString()+"."

   }else if(cntScr===tgtScr){

    var message = "Your estimated "+sName+" score as per your performance in this mock test is "+sId+cntScr.toString()+",which is equal to your target "+sName+" score of "+sId+tgtScr.toString()+"."

   }else{

    var message = "Your estimated "+sName+" score as per your performance in this mock test is "+sId+cntScr.toString()+",which is <strong>"+(cntScr-tgtScr).toString()+" points</strong> heigher than your target "+sName+" score of "+sId+tgtScr.toString()+"."

   }

   messageHolderElement.innerHTML = message

}

//////////////////////////////