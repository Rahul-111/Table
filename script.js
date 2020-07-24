console.log("File is attached");

const table = document.getElementById('#table');
const form = document.getElementById('formValue');
const value1 = document.getElementById('data1');
const value2 = document.getElementById('data2');

let count = 0;

function addRow(){
    //to create a new row and add to the table
    let row = table.insertRow()
    //need 3 cell in each row;
    var sno  = row.insertCell(0);
    var data1  = row.insertCell(1);
    var data2  = row.insertCell(2);
    var data3  = row.insertCell(3);

    count++;

    sno.innerHTML = count;
    row.id = count;
    data1.innerHTML = value1.value;
    data2.innerHTML = value2.value;
    data3.innerHTML = parseInt(value2.value)+parseInt(value1.value);
    
    console.log("Add Clicked "+ count);
}

function removeRow(){
    //Remove only if count>=1
    if(count >=1){
        document.getElementById(count).remove();
        count--;

        console.log("Remove Clicked " + count);
    }else{
        alert('Table does not contain any row');
    }
}
