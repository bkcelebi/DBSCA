
let baseURL='https://burak.dbsprojects.ie:8080/';

let doIt=() => {
    let tab=document.getElementById("tab1");
    let rows=tab1.getElementsByTagName('tr');
    fetch(baseURL)
    .then(response => response.json())
    .then(data=>data.Results.forEach(  //.slice(0,3)
        x => {
        let newRow =rows[0].cloneNode(true);
        let divs=newRow.getElementsByTagName('td');
        divs[0].innerHTML=x['ID'];
        divs[1].innerHTML=x['Name'];
        divs[2].innerHTML=x['Email'];
        tab1.appendChild(newRow);
        }
    )
    );
}


let deleteStudent = () => {   
    let deleteEnt = document.getElementById('deleteEnt').value;   
    fetch(baseURL+'delete?id='+deleteEnt)
    .then((resp) => {
        alert("Student Deleted");
    });
}

let updateStudent = () => {
    let updateID = document.getElementById('updateID').value;
    let updateName = document.getElementById('updateName').value;
    let updateEmail = document.getElementById('updateEmail').value;
    fetch(baseURL+'update?id='+updateID+'&name='+updateName+'&email='+updateEmail)
    .then((resp) => {
        alert("Student Updated");
    });
}

let addStudent = () => {
    let studentId = document.getElementById('studentId').value;
    let studentName = document.getElementById('studentName').value;
    let studentMail = document.getElementById('studentMail').value;
    fetch(baseURL+'add?id='+studentId+'&name='+studentName+'&email='+studentMail)
    .then((resp) => {
        alert("Student Added");
    });
}