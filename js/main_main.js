/*
    Name:         Wyatt Kirschner
    Student ID:   200407722
    Course:       COMP1073
    Date:         July 1st, 2020
    Task:         Course Project - Phase 1
*/

let fillList = document.getElementById('add'); // Passing over the button to be listened to
let addContent = new Array(); // This will be used to fill in the array of items
let validate;
let windowChoice = document.getElementById('delete'); // For popping up the alert window

fillList.addEventListener('click', validateArray); // When the button is clicked, validation check occurs.




function validateArray() { // This function will check to see if there is anything entered for the list
    validate = document.getElementById('addValue').value;

    console.log(addContent.length);

    if (validate.length != 0) {
        console.log('Valid Item Entered'); // Means we can proceed based on input length


        if (addContent.length == 0) { // We are also validating if this is the first entry into the array
            console.log(addContent.length); // If so, we will insert a table into the HTML file... 
            console.log('First Item, Generate Table Headers');

            let navTable = document.getElementById('toDoTable');
            declareTable = document.createElement('table');

            navTable.appendChild(declareTable); // Inserting the table

            let tableHeader = declareTable.createTHead();
            tableBody = document.createElement('tbody');
            declareTable.appendChild(tableBody);

            console.log(tableHeader);
            let headingRow = tableHeader.insertRow(); // Generating the Headers
            let headingCellCheck = headingRow.insertCell(0);
            let headingCellValue = headingRow.insertCell(1);
            let headingCellDelete = headingRow.insertCell(2);
            let headingCellEdit = headingRow.insertCell(3);
            headingCellCheck.textContent = 'test';

            headingCellCheck.innerHTML = '<h2> Check Box </h2>';
            headingCellValue.innerHTML = '<h2> To - Do - Item </h2>';
            headingCellDelete.innerHTML = '<h2> Delete Item </h2>';
            headingCellEdit.innerHTML = '<h2> Edit Item </h2>'




            addItem(declareTable); // Passing in the New Table


            //headingCellCheck.textContent = 'test';

            //headingRow2.textContent = 'TEST';

            //headingCellCheck.textContent = addContent;

        } else {
            console.log('Table Header Already Created');
            addItem();
        }

    } else {
        console.log('Fail');
    }



}


function addItem() {
    let n = addContent.length;

    addContent[n] = document.getElementById('addValue').value; // We can store the inputed values here
    console.log(addContent.length);
    console.log('Adding Item');
    console.log('This is the contents of :' + n + ' and it has ' + addContent[n]);

    let r = addContent.length;

    let insertRow = new Array();
    let deleteArray = new Array(); // Generating Arrays so I can manipulate which cells to use
    let checkBoxArray = new Array();
    let editArray = new Array();
    let inputArray = new Array();
    tableBody.style.textAlign = 'center';
    insertRow[n] = tableBody.insertRow();

    let checkBoxCell = insertRow[n].insertCell(0);

    checkBoxCell.innerHTML = "<input type='checkbox' id='check' value='unchecked'>";

    checkBoxArray[n] = checkBoxCell;

    let toDoCell = insertRow[n].insertCell(1); // Generating the rest of the table, including the new input

    toDoCell.textContent = addContent[n];
    inputArray[n] = toDoCell;

    let deleteCell = insertRow[n].insertCell(2);

    deleteCell.innerHTML = "<button id='delete'> Delete </button>";

    deleteArray[n] = deleteCell;

    let editCell = insertRow[n].insertCell(3);

    editCell.innerHTML = "<button id='Edit'> Edit </button>"
    editArray[n] = editCell;

    editArray[n].addEventListener('click', editItem); // Listening for one of the following changes...       

    deleteArray[n].addEventListener('click', deleteItem);

    checkBoxArray[n].addEventListener('change', moveItem);

    /*
        The issue with moving the item was knowning how to place it at the end and then keep track
        When manipulating the DOM. I could have just equaled the current value of n into an equally
        valuable array, then move the item. When the item is unchecked, then I would fetch the array
        of the same n from before, move the rows using the DOM and inserted the value and rebuilt the row.
    */

    function moveItem() {
        console.log(toDoTable);
        if (confirm("Item complete?")) {
            window.alert("Moved!");
            console.log(checkBoxArray[r]);
            //let move = insertRow[n].value;

            //console.log(move.textContent);


            //For Loop

            if (r = addContent.length) {
                console.log('Ended ' + n + ' ' + r);

            } else {

                console.log('Proceed ' + n);

            }

        }
    }

    // By prompting the user for their information, I can use this to rebuild the cell.

    function editItem() { 

        console.log(addContent[n]);

        if (confirm("Edit item?")) {
            var replace = prompt("You are editing the " + addContent[n] + " item. What would you like instead?");
            addContent[n] = replace;
            insertRow[n].deleteCell(1);
            toDoCell = insertRow[n].insertCell(1);
            toDoCell.textContent = addContent[n];
        } else {

            window.alert("No changes!");

        }

    }

    /*
        Originally I had issues with the table, and the problem that occured involved inserting rows into the header
        and not the body. I fixed this, as the first starting row would always equal 0.
        I know it's sloppy, but I need to really improve on this for Part 2.
        I'm pretty disapointed in the results of my project.
    */

    function deleteItem(declareTable) {

        if (confirm("Delete item?")) {
            window.alert("Deleted!");
            let m = r - 1;
            insertRow[m].remove();
            console.log(insertRow[r]);
            insertRow.splice(r, 1);
            console.log(addContent[m]);
            addContent.splice(r - 1, 1);
            console.log(addContent[m]);
            console.log(addContent.length);

            if (addContent.length == 0) {

                navTable = document.querySelector('table');
                navTable.remove();
                delete addContent.remove;
                delete insertRow;

            }

        } else {

        }
    }

}