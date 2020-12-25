function insertionSort(unsortedList) { 

	// Variables for the paragraph to put both the unsorted and sorted lists
    let unsortedListStepsParagraph = document.getElementById("unsortedListSteps");  
    let sortedListParagraph = document.getElementById("sortedList");    
	unsortedListStepsParagraph.innerHTML = "Sorted in steps: <br>";
	
	let i = 1;
	while (i < unsortedList.length){

		// Grabs the number at the current index
		let x = unsortedList[i];

		// Sets j to be one less than I and starts the loop, where j can not go before start or list and that j is greater than x
		let j = i-1;
		while (j >= 0 && unsortedList[j] > x){

			// Swaps the current and previous index
			unsortedList[j+1] = unsortedList[j];
			j = j-1;
		}

		// Places the number where it belongs and index one higher
		unsortedList[j+1] = x;
		i = i+1;
		
		// Redraw Squares
		addUnsortedList(unsortedList, j+1)
	}

	// Adds the sorted list to the page
	sortedListParagraph.innerHTML = "Sorted List: " + unsortedList;
}