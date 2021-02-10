function shellSort(unsortedList) { 

	// Variables for the paragraph to put both the unsorted and sorted lists
    let unsortedListStepsParagraph = document.getElementById("unsortedListSteps");  
    let sortedListParagraph = document.getElementById("sortedList");    
    unsortedListStepsParagraph.innerHTML = "Sorted in steps: <br>";
    
    // Gets list length
    let listLength = unsortedList.length;

    // Creates a large gap and then halfs it each loop
    for(let gap = Math.floor(listLength/2); gap > 0; gap = Math.floor(gap/2)){

        insertionSort(unsortedList, gap);

        // Redraw Squares
        addUnsortedList(unsortedList, -1, "Gap = " + gap + ": ")
    }

	// Adds the sorted list to the page
	sortedListParagraph.innerHTML = "Sorted List: " + unsortedList;
}
