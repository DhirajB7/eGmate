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
var totalCurrentScoreArrowMove = document.getElementById("totalIndicatorCurrent")
var totalCurrentArrowHasValue = document.getElementById("totalCurrentScoreAboveArrow")
var totalCurrentArrowElement = document.getElementById("totalCurrentScoreArrow")
var totalTargetScoreArrowMove = document.getElementById("totalIndicatorTarget")
var totalTargetArrowHasValue = document.getElementById("totalTargetScoreAboveArrow")
var totalTargetArrowElement = document.getElementById("totalTargetScoreArrow")
var totalCurrentScoreGraphElement = document.querySelector(".meter>#totalCurrentScore")
var totalDifferenceScoreGraphElement = document.querySelector(".meter>#totalDifferenceScore")
var differenceTotalScoreElement = document.querySelector("#totalDifferenceScore")
var totalSectionMessageHolder = document.getElementById("totalMessage")

//Quant Section
var quantScoreHolderElement = document.getElementById("quantScoreHolder")
var quantCurrentScoreArrowMove = document.getElementById("quantIndicatorCurrent")
var quantCurrentArrowHasValue = document.getElementById("quantCurrentScoreAboveArrow")
var quantCurrentArrowElement = document.getElementById("quantCurrentScoreArrow")
var quantTargetScoreArrowMove = document.getElementById("quantIndicatorTarget")
var quantTargetArrowHasValue = document.getElementById("quantTargetScoreAboveArrow")
var quantTargetArrowElement = document.getElementById("quantTargetScoreArrow")
var quantCurrentScoreGraphElement = document.querySelector(".meterQuant>#currentQuantScore")
var quantDifferenceScoreGraphElement = document.querySelector(".meterQuant>#differenceQuantScore")
var differenceQuantScoreElement = document.querySelector("#differenceQuantScore")
var quantSectionMessageHolder = document.getElementById("quantMessage")

//Verbal Section
var verbalScoreHolderElement = document.getElementById("verbalScoreHolder")
var verbalCurrentScoreArrowMove = document.getElementById("verbalIndicatorCurrent")
var verbalCurrentArrowHasValue = document.getElementById("verbalCurrentScoreAboveArrow")
var verbalCurrentArrowElement = document.getElementById("verbalCurrentScoreArrow")
var verbalTargetScoreArrowMove = document.getElementById("verbalIndicatorTarget")
var verbalTargetArrowHasValue = document.getElementById("verbalTargetScoreAboveArrow")
var verbalTargetArrowElement = document.getElementById("verbalTargetScoreArrow")
var verbalCurrentScoreGraphElement = document.querySelector(".meterVerbal>#currentVerbalScore")
var verbalDifferenceScoreGraphElement = document.querySelector(".meterVerbal>#differenceVerbalScore")
var differenceVerbalScoreElement = document.querySelector("#differenceVerbalScore")
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

 graphSection(graphTotalCurrentScore,graphTotalTargetScore,totalScoreHolderElement,totalCurrentScoreArrowMove,totalCurrentArrowHasValue,totalCurrentArrowElement,totalTargetScoreArrowMove,totalTargetArrowHasValue,totalTargetArrowElement,totalCurrentScoreGraphElement,totalDifferenceScoreGraphElement,differenceTotalScoreElement,totalSectionMessageHolder,"","GMAT","totalGraph")
 graphSection(graphCurrentQuantScore,graphTargetQuantScore,quantScoreHolderElement,quantCurrentScoreArrowMove,quantCurrentArrowHasValue,quantCurrentArrowElement,quantTargetScoreArrowMove,quantTargetArrowHasValue,quantTargetArrowElement,quantCurrentScoreGraphElement,quantDifferenceScoreGraphElement,differenceQuantScoreElement,quantSectionMessageHolder,"Q","quantitative","quantGraph")
 graphSection(graphCurrentVerbalScore,graphTargetVerbalScore,verbalScoreHolderElement,verbalCurrentScoreArrowMove,verbalCurrentArrowHasValue,verbalCurrentArrowElement,verbalTargetScoreArrowMove,verbalTargetArrowHasValue,verbalTargetArrowElement,verbalCurrentScoreGraphElement,verbalDifferenceScoreGraphElement,differenceVerbalScoreElement,verbalSectionMessageHolder,"V","verbal","verbalGraph")

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
        undoChanges()
        displayGraph("block")
        scoreCalculator()
        resetScore()
    }else{
        alert("Current and Target value must be greater then 0 and less then 61")
    }   
})
////////////////
//--FUNCTION--GRAPH SECTION--//

function graphSection(qCntScore,qTgtScore,scoreHolderElement,currentScoreArrow,currentScoreArrowValue,currentArrow,targetScoreArrow,targetScoreArrowValue,targetArrow,currentGraphElement,differenceGraphElement,differenceScoreElement,messageHolderElement,sectionIdentifier,sectionName,flag) {
   var cntScr = parseInt(qCntScore)
   var tgtScr = parseInt(qTgtScore)
   var sId = sectionIdentifier.toString()
   var sName = sectionName.toString()
   var dinominator = 1
   var hideColor=""

   scoreHolderElement.innerText = sId+cntScr.toString()

   if (flag==="totalGraph"){
    dinominator = 800
    hideColor="#e6e6fa"
   }else{
    dinominator = 60
    hideColor="white"
   }

   if(cntScr<tgtScr){

    var percentAgeValue = Math.round((cntScr/dinominator)*100)
    currentScoreArrow.style.width = percentAgeValue.toString()+"%"
    currentScoreArrowValue.innerText = sId+cntScr.toString()
    currentGraphElement.style.width = percentAgeValue.toString()+"%"

    var percentAgeValueTarget = Math.round(((tgtScr-cntScr)/dinominator)*100)
    differenceScoreElement.innerText="+"+(tgtScr-cntScr).toString()
    differenceGraphElement.style.width = percentAgeValueTarget.toString()+"%"
    targetScoreArrow.style.width = percentAgeValueTarget.toString()+"%"
    targetScoreArrowValue.innerText=sId+tgtScr.toString()

    var message = "Your estimated "+sName+" score as per your performance in this mock test is "+sId+cntScr.toString()+",which is <strong>"+(tgtScr-cntScr).toString()+" points</strong> lower than your target "+sName+" score of "+sId+tgtScr.toString()+"."

   }else if(cntScr===tgtScr){
    var percentAgeValue = Math.round((cntScr/dinominator)*100)
    currentScoreArrow.style.width = percentAgeValue.toString()+"%"
    currentScoreArrowValue.innerText = sId+cntScr.toString()
    currentGraphElement.style.width = percentAgeValue.toString()+"%"
    differenceScoreElement.innerText=""
    differenceGraphElement.style.width="0%"
    targetScoreArrow.style.width="0%"
    targetScoreArrowValue.innerText=""
    targetArrow.style.color=hideColor

    var message = "Your estimated "+sName+" score as per your performance in this mock test is "+sId+cntScr.toString()+",which is equal to your target "+sName+" score of "+sId+tgtScr.toString()+"."

   }else{

    var percentAgeValue = Math.round((cntScr/dinominator)*100)
    
    currentGraphElement.style.width = percentAgeValue.toString()+"%"
    differenceScoreElement.innerText=""
    differenceGraphElement.style.width="0%"

    var percentAgeValueTarget = Math.round(((tgtScr)/dinominator)*100)

    targetScoreArrow.style.width = (percentAgeValue-percentAgeValueTarget).toString()+"%"
    targetScoreArrowValue.innerText=sId+cntScr.toString()
    targetArrow.style.color="#0fa2eb"

    currentScoreArrow.style.width = percentAgeValueTarget.toString()+"%"
    currentScoreArrowValue.innerText = sId+tgtScr.toString()
    currentArrow.style.color="#ffe28a"

    var message = "Your estimated "+sName+" score as per your performance in this mock test is "+sId+cntScr.toString()+",which is <strong>"+(cntScr-tgtScr).toString()+" points</strong> heigher than your target "+sName+" score of "+sId+tgtScr.toString()+"."

   }

   messageHolderElement.innerHTML = message

}

function undoChanges() {
    totalCurrentArrowElement.style.color="#0fa2eb"
    totalTargetArrowElement.style.color="#ffe28a"
    quantCurrentArrowElement.style.color="#0fa2eb"
    quantTargetArrowElement.style.color="#ffe28a"
    verbalCurrentArrowElement.style.color="#0fa2eb"
    verbalTargetArrowElement.style.color="#ffe28a"
}

//////////////////////////////