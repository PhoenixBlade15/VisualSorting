var sortButton = document.getElementById('sortButton');
sortButton.onclick = function makeUnsortedNumberList() {
    let selectedOption = document.getElementById("sorts").value;
    let listSize = document.getElementById("listSize").value;
    let unsortedNumbers = []; 
    let unsortedNumbersParagraph = document.getElementById("unsortedList");    
    
    // Creates a list of unsorted numbers
    unsortedNumbersParagraph.innerHTML = "";
    for (let i = 0; i < listSize; i++){
        let randomNumber = Math.floor(Math.random() * 100);
        unsortedNumbers.push( randomNumber );
    }
    unsortedNumbersParagraph.innerHTML = "Unsorted List: " + unsortedNumbers;

    // Calls the corresponding sort based on switch input
    switch(selectedOption){
        case "insertionSort":
            insertionSortHelper(unsortedNumbers);
            break;
        case "selectionSort":
            selectionSort(unsortedNumbers);
            break;
        case "mergeSort":
            mergeSortHelper(unsortedNumbers);
            break;
        case "quickSort":
            quickSortHelper(unsortedNumbers);
            break;
        case "shellSort":
            shellSort(unsortedNumbers);
            break;
        case "bubbleSort":
            bubbleSort(unsortedNumbers);
            break;
        default:
            document.write("Error occured try again!");
            break;
    }
}

function addUnsortedList(unsortedList, numberOn, identifierString){
    let unsortedListStepsParagraph = document.getElementById("unsortedListSteps");
	let unsortedListString = "";

	for (let i = 0; i < unsortedList.length; i++){
		
		if ( i != numberOn ){
			unsortedListString += unsortedList[i] + ", ";
		} else if ( i == numberOn ){
			unsortedListString += "<b style='color:yellow;'>" + unsortedList[i] + "</b>, ";
		}
    }
	unsortedListString = "<b style='color:yellow;'>" + identifierString + "</b> " + unsortedListString.substring(0, (unsortedListString.length)-2);
    unsortedListStepsParagraph.innerHTML += unsortedListString + "<br>";
}