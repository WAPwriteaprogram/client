const classrooms = [
{
    name: 'Introduction to Computer Science',
    color : 'purple',
    link: 'ICT'
        
},

{
    name: 'Data Structures',
    color : 'red',
    link: 'DS'
},

{
    name: 'Machine Learning',
    color : 'green',
    link: 'ML'
},

{
    name: 'Object Oriented Programming',
    color : 'purple',
    link: 'OOP'
},

{
    name: 'Data Structures',
    color : 'purple',
    link: 'DS'
}

];
window.onload = function () {
  

    document.getElementById("courses").innerHTML = `
    <h1 class="title">Courses (${ classrooms.length })</h1>
    ${classrooms.map(function(classroom){
        return `
        <div class="class" id="box">
        <h2><a href="#">${classroom.name}</a></h2>
        </div>
        `
    }).join("")}
    `;

}
