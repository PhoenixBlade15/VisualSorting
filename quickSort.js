function quickSortHelper(unsortedList) { 

	// Variables for the paragraph to put both the unsorted and sorted lists
    let unsortedListStepsParagraph = document.getElementById("unsortedListSteps");  
    let sortedListParagraph = document.getElementById("sortedList");    
	unsortedListStepsParagraph.innerHTML = "Sorted in steps: <br>";
    
    // Calls quicksort with the needed low and high
    unsortedList = quickSort(unsortedList, 0, unsortedList.length-1);

	// Redraw Squares
	addUnsortedList(unsortedList, -1, "");
	// Adds the sorted list to the page
	sortedListParagraph.innerHTML = "Sorted List: " + unsortedList;
}

function quickSort(unsortedList, low, high){

    // Makes sure that the low and high are different
    if ( low < high ){

        // Partitions the list for the quick sort calls to use
        partitioned = partition(unsortedList, low, high);

        // Quicksorts the bottom and top partitions
        quickSort(unsortedList, low, partitioned - 1);
        quickSort(unsortedList, partitioned + 1, high);
    }

    return unsortedList;
}

function partition(unsortedList, low, high){

    // Gets pivot point and the low
    pivot = unsortedList[high];
    i = low;

    // Goes through each position and organizes the current number around the pivot
    for ( j = low; j < high; j++){
        if ( unsortedList[j] < pivot){
            temp = unsortedList[i];
            unsortedList[i] = unsortedList[j];
            unsortedList[j] = temp;
            i++;
        }
    }

    // Swaps the number at the position of the i and high
    temp = unsortedList[i];
    unsortedList[i] = unsortedList[high];
    unsortedList[high] = temp;

    
	// Redraw Squares
    addUnsortedList(unsortedList, -1, "");
    
    return i;
}