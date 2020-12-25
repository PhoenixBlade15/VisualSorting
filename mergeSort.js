function mergeSortHelper(unsortedList){
    // Variables for the paragraph to put both the unsorted and sorted lists
    let unsortedListStepsParagraph = document.getElementById("unsortedListSteps");  
    unsortedListStepsParagraph.innerHTML = "Sorted in steps: <br>";

    let sortedListParagraph = document.getElementById("sortedList");    
    unsortedList = mergeSort(unsortedList);
	sortedListParagraph.innerHTML = "Sorted List: " + unsortedList;
}

function mergeSort(unsortedList) { 

    // Assigns list length
    let listLength = unsortedList.length;

    // Checks if unsorted list is just 1 or no numbers
    if (listLength <= 1){
        return unsortedList;
    }

    // Seperate the list into two smaller equal size lists
    let leftList = [], rightList = [];
    for (let i = 0; i < listLength; i++){
        if(i < (listLength)/2){
            leftList.push(unsortedList[i]);
        } else {
            rightList.push(unsortedList[i]);
        }
    }

    // Redraw Squares
    addUnsortedList(leftList, -1, "Left List:");
    addUnsortedList(rightList, -1, "Right List:");

    // Merge sorts the halfs of the list
    leftList = mergeSort(leftList);
    rightList = mergeSort(rightList);

    // Return the merged lists
    return merge(leftList, rightList);

}

// Function to merge two lists together 
function merge(leftList, rightList){
    let mergedList = [];
    let leftIndex = 0, rightIndex = 0; 

    // Goes through index's of each list until one is out of numbers
    while ( leftIndex < leftList.length  && rightIndex < rightList.length ){
        
        // Places the smaller number of the two into the mergedlist
        if (leftList[leftIndex] < rightList[rightIndex]){
            mergedList.push(leftList[leftIndex]);
            leftIndex++;
        } else {
            mergedList.push(rightList[rightIndex]);
            rightIndex++;
        }
    }

    // Runs through the remaining list and adds those numbers into the merged list
    while ( leftIndex < leftList.length ){
        mergedList.push(leftList[leftIndex]);
        leftIndex++;
    }
    while ( rightIndex < rightList.length ){
        mergedList.push(rightList[rightIndex]);
        rightIndex++;
    }
    
    // Redraw Squares
    addUnsortedList(mergedList, -1, "Merged List: ");

    return mergedList;
}