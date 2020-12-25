function selectionSort(unsortedList) { 

    // Variables for the paragraph to put both the unsorted and sorted lists
    let unsortedListStepsParagraph = document.getElementById("unsortedListSteps");  
    let sortedListParagraph = document.getElementById("sortedList");    
    unsortedListStepsParagraph.innerHTML = "Sorted in steps: <br>";

    let listLength = unsortedList.length;

    for (let i = 0; i < listLength-1; i++)
    {
        let jMin = i;

        for (j = i+1; j < listLength; j++)
        {
            if (unsortedList[j] < unsortedList[jMin])
            {
                jMin = j;
            }
        }
    
        if (jMin != i) 
        {
            let temp = unsortedList[i];
            unsortedList[i] = unsortedList[jMin];
            unsortedList[jMin] = temp;
        }

        // Redraw Squares
        addUnsortedList(unsortedList, i)
    }
	sortedListParagraph.innerHTML = "Sorted List: " + unsortedList;
}