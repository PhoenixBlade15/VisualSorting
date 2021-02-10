function selectionSort(unsortedList) { 

    // Variables for the paragraph to put both the unsorted and sorted lists
    let unsortedListStepsParagraph = document.getElementById("unsortedListSteps");  
    let sortedListParagraph = document.getElementById("sortedList");    
    unsortedListStepsParagraph.innerHTML = "Sorted in steps: <br>";

    // Assigns list length
    let listLength = unsortedList.length;

    // Loops through list length - 1
    for (let i = 0; i < listLength-1; i++)
    {
        let jMin = i;

        // Goes through and checks for the lowest number in the unsorted portion
        for (j = i+1; j < listLength; j++)
        {
            if (unsortedList[j] < unsortedList[jMin])
            {
                jMin = j;
            }
        }
    
        // swaps the min and current spot of unsorted portion
        if (jMin != i) 
        {
            let temp = unsortedList[i];
            unsortedList[i] = unsortedList[jMin];
            unsortedList[jMin] = temp;
        }

        // Redraw Squares
        addUnsortedList(unsortedList, i, "");
    }
	sortedListParagraph.innerHTML = "Sorted List: " + unsortedList;
}