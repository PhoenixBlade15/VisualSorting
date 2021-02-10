function bubbleSort(unsortedList) { 

    // Variables for the paragraph to put both the unsorted and sorted lists
    let unsortedListStepsParagraph = document.getElementById("unsortedListSteps");  
    let sortedListParagraph = document.getElementById("sortedList");    
    unsortedListStepsParagraph.innerHTML = "Sorted in steps: <br>";

    let listLength = unsortedList.length;
    let swapped = true;
    let temp = -1;

    while (swapped){
        swapped = false;
        for (let i = 1; i < listLength; i++){
            if(unsortedList[i-1] > unsortedList[i]){
                temp = unsortedList[i-1];
                unsortedList[i-1] = unsortedList[i];
                unsortedList[i] = temp;
                swapped = true;
                    
                // Redraw Squares
                addUnsortedList(unsortedList, i, "");
            }
        }
        
    }
    
	sortedListParagraph.innerHTML = "Sorted List: " + unsortedList;
}