<<<<<<< HEAD
function addStudent() {

    let name = document.getElementById("studentName").value;

    if(name !== "") {

        let li = document.createElement("li");
        li.innerText = name;

        document.getElementById("studentList").appendChild(li);

        document.getElementById("studentName").value = "";
    }
}
=======
function addStudent() {

    let name = document.getElementById("studentName").value;

    if(name !== "") {

        let li = document.createElement("li");
        li.innerText = name;

        document.getElementById("studentList").appendChild(li);

        document.getElementById("studentName").value = "";
        li.innerHTML =name + ' <button onclick="this.parentElement.remove()">Delete</button>';
        document.getElementById("count").innerText =
        document.getElementById("studentList").children.length;

    }
}
>>>>>>> c0bff8502036a76fba033014b971481afdf819f2
