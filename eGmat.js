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
var totalIndicatorTargetMove = document.getElementById("totalIndicatorTarget")
var totalIndicatorTargetMoveBottom = document.getElementById("totalIndicatorTargetBottom")
var totalTargetArrowHasValue = document.getElementById("totalTargetScoreAboveArrow")
var totalTargetArrowHasValueBottom = document.getElementById("totalTargetScoreAboveArrowBottom")
var totalTargetArrowElement = document.getElementById("totalTargetScoreArrow")
var totalTargetArrowElementBottom = document.getElementById("totalTargetScoreArrowBottom")
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
var quantTargetScoreArrowMoveBottom = document.getElementById("quantIndicatorTargetBottom")
var quantTargetArrowHasValue = document.getElementById("quantTargetScoreAboveArrow")
var quantTargetArrowHasValueBottom = document.getElementById("quantTargetScoreAboveArrowBottom")
var quantTargetArrowElement = document.getElementById("quantTargetScoreArrow")
var quantTargetArrowElementBottom = document.getElementById("quantTargetScoreArrowBottom")
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
var verbalTargetScoreArrowMoveBottom = document.getElementById("verbalIndicatorTargetBottom")
var verbalTargetArrowHasValue = document.getElementById("verbalTargetScoreAboveArrow")
var verbalTargetArrowHasValueBottom = document.getElementById("verbalTargetScoreAboveArrowBottom")
var verbalTargetArrowElement = document.getElementById("verbalTargetScoreArrow")
var verbalTargetArrowElementBottom = document.getElementById("verbalTargetScoreArrowBottom")
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

 graphSection(graphTotalCurrentScore,graphTotalTargetScore,totalScoreHolderElement,totalCurrentScoreArrowMove,totalCurrentArrowHasValue,totalCurrentArrowElement,totalIndicatorTargetMove,totalIndicatorTargetMoveBottom,totalTargetArrowHasValue,totalTargetArrowHasValueBottom,totalTargetArrowElement,totalTargetArrowElementBottom,totalCurrentScoreGraphElement,totalDifferenceScoreGraphElement,differenceTotalScoreElement,totalSectionMessageHolder,"","GMAT","totalGraph")
 graphSection(graphCurrentQuantScore,graphTargetQuantScore,quantScoreHolderElement,quantCurrentScoreArrowMove,quantCurrentArrowHasValue,quantCurrentArrowElement,quantTargetScoreArrowMove,quantTargetScoreArrowMoveBottom,quantTargetArrowHasValue,quantTargetArrowHasValueBottom,quantTargetArrowElement,quantTargetArrowElementBottom,quantCurrentScoreGraphElement,quantDifferenceScoreGraphElement,differenceQuantScoreElement,quantSectionMessageHolder,"Q","quantitative","quantGraph")
 graphSection(graphCurrentVerbalScore,graphTargetVerbalScore,verbalScoreHolderElement,verbalCurrentScoreArrowMove,verbalCurrentArrowHasValue,verbalCurrentArrowElement,verbalTargetScoreArrowMove,verbalTargetScoreArrowMoveBottom,verbalTargetArrowHasValue,verbalTargetArrowHasValueBottom,verbalTargetArrowElement,verbalTargetArrowElementBottom,verbalCurrentScoreGraphElement,verbalDifferenceScoreGraphElement,differenceVerbalScoreElement,verbalSectionMessageHolder,"V","verbal","verbalGraph")

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

function graphSection(qCntScore,qTgtScore,scoreHolderElement,currentScoreArrow,currentScoreArrowValue,currentArrow,targetScoreArrow,targetScoreArrowBottom,targetScoreArrowValue,targetScoreArrowValueBottom,targetArrow,targetArrowBottom,currentGraphElement,differenceGraphElement,differenceScoreElement,messageHolderElement,sectionIdentifier,sectionName,flag) {
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
    targetScoreArrowBottom.style.width = (Math.round((tgtScr/dinominator)*100)).toString()+"%"
    targetScoreArrowValueBottom.innerText=sId+tgtScr.toString()

    if(parseInt(tgtScr)-parseInt(cntScr)<=10){
        targetScoreArrow.style.visibility="hidden"

    }else{
        targetScoreArrowBottom.style.visibility="hidden"

    }

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
    targetScoreArrowBottom.style.width=percentAgeValue.toString()+"%"
    targetScoreArrowValueBottom.innerText=sId+tgtScr.toString()
    targetScoreArrow.style.visibility="hidden"


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
    targetScoreArrowBottom.style.width = (percentAgeValue-percentAgeValueTarget).toString()+"%"
    targetScoreArrowValueBottom.innerText=sId+cntScr.toString()
    targetArrowBottom.style.color="#0fa2eb"

    currentScoreArrow.style.width = percentAgeValueTarget.toString()+"%"
    currentScoreArrowValue.innerText = sId+tgtScr.toString()
    currentArrow.style.color="#ffe28a"

    targetScoreArrowBottom.style.visibility="hidden"

    var message = "Your estimated "+sName+" score as per your performance in this mock test is "+sId+cntScr.toString()+",which is <strong>"+(cntScr-tgtScr).toString()+" points</strong> heigher than your target "+sName+" score of "+sId+tgtScr.toString()+"."

   }

   messageHolderElement.innerHTML = message

}

function undoChanges() {
    totalIndicatorTargetMove.style.visibility="visible"
    totalIndicatorTargetMoveBottom.style.visibility="visible"
    quantTargetScoreArrowMove.style.visibility="visible"
    quantTargetScoreArrowMoveBottom.style.visibility="visible"
    verbalTargetScoreArrowMove.style.visibility="visible"
    verbalTargetScoreArrowMoveBottom.style.visibility="visible"
}

//////////////////////////////
