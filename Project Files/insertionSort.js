function insertionSort(unsortedList) { 
    let unsortedListStepsParagraph = document.getElementById("unsortedListSteps");  
    let sortedListParagraph = document.getElementById("sortedList");    
	unsortedListStepsParagraph.innerHTML = "Sorted in steps: <br>";
	
	let i = 1;
	while (i < unsortedList.length){
		let x = unsortedList[i];
		let j = i-1;
		while (j >= 0 && unsortedList[j] > x){
			unsortedList[j+1] = unsortedList[j];
			j = j-1;
		}
		unsortedList[j+1] = x;
		i = i+1;
		addUnsortedList(unsortedList, j+1)
	}
	sortedListParagraph.innerHTML = "Sorted List: " + unsortedList;
}