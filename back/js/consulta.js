let root = document.getElementById('root');
let table = document.getElementById('table');
var names = document.getElementById('names');
var emails = document.getElementById('emails');
var contra = document.getElementById('contra');
var ids = document.getElementById('id');

var buton = document.getElementById('buton');
buton.onclick= crear;

var butone = document.getElementById('butone');
butone.onclick= update;


var get ={method:"GET"};
var post ={method:"POST"};
var put ={method:"PUT"};


var vacio={}

function carry(){
    fetch("https://memin.io/public/api/users")
    .then (result=>{
        return result.json();
    }).then (data=>{
        data.forEach(element => {
            let row = document.createElement("tr");
            table.appendChild(row);
            
            //col
            let col = document.createElement("td");
            
            col.innerHTML = element.id
            row.appendChild(col)
            
            let coldos = document.createElement("td");
            coldos.innerHTML = element.name
            row.appendChild(coldos)
    
            let coltres = document.createElement("td");
            coltres.innerHTML = element.email
            row.appendChild(coltres)
    
            let colfour = document.createElement("td");
            colfour.innerHTML = `<button class='btn btn-warning' type='button'onclick='editar(${element.id})' > EDIT</button> <button class='btn btn-secondary' type='button'> DETAILS</button> <button class='btn btn-danger' type='button' onclick='deletes(${element.id})'> DELETE</button>`
            row.appendChild(colfour)

            let botonEliminar = row.querySelector('.btn-danger')

            botonEliminar.addEventListener('click', function (){
                deletes(element.id);        
            });
    
    
        });
    });
}



function deletes(id){
    console.log(id);
    fetch(`https://memin.io/public/api/users/${id}`,{
        method: 'DELETE',
        headers: {
            "Content-Type":"application/json"
        }
    })
    .then(data => {return data.json})
    .then(resut=>{
            alert("El usuario ha sido eliminado");
            console.log(resut)
        }
    )
    .catch(error =>{
        console.error("error at:", error);
    }); 
};

function editar (id){
    console.log(id);
    fetch(`https://memin.io/public/api/users/${id}`)
    .then(response=>{
        return response.json()
    }).then(data=>{
        console.log(data)
        
        names.value= data.name;
        emails.value=data.email;
        contra.value= data.password;
        ids.value=data.id;
        alert("Suba al inicio de la pagina")
        console.log(data.name);
        console.log(data.email);
    })
}
function update() {
    let ids = document.getElementById("id")
    console.log(ids.value);
    let datos ={
        name: names.value,
        email : emails.value,
        password : contra.value,
    }
   

    fetch("https://memin.io/public/api/users/"+ids.value, {
        method: "PUT",
        body: JSON.stringify(datos),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(result=>result.json()).then(data=>{
        location.href = "";
    })
}
function crear() {
    let nombre = names.value;
    let correo = emails.value;
    let contrase = contra.value;

    fetch("https://memin.io/public/api/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: nombre,
            email: correo,
            password: contrase
        })
    })
    .then(response => response.json())

    .then(data => alert("Creación exitosa:", data))

    .catch(error => console.error("Error en la creación:", error));
}
function search() {
    const q = document.getElementById('search').value;
    
    fetch("https://memin.io/public/api/v2/users/search/" + q)
        .then(result => result.json())
        .then(data => {
              table.innerHTML = "";
              data.forEach(element => {
                let row = document.createElement("tr");
                table.appendChild(row);
                
                //col
                let col = document.createElement("td");
                
                col.innerHTML = element.id
                row.appendChild(col)
                
                let coldos = document.createElement("td");
                coldos.innerHTML = element.name
                row.appendChild(coldos)
        
                let coltres = document.createElement("td");
                coltres.innerHTML = element.email
                row.appendChild(coltres)
        
                let colfour = document.createElement("td");
                colfour.innerHTML = `<button class='btn btn-warning' type='button'onclick='editar(${element.id})' > EDIT</button> <button class='btn btn-secondary' type='button'> DETAILS</button> <button class='btn btn-danger' type='button' onclick='deletes(${element.id})'> DELETE</button>`
                row.appendChild(colfour)
    
                let botonEliminar = row.querySelector('.btn-danger')
    
                botonEliminar.addEventListener('click', function (){
                    deletes(element.id);        
                });
        
        
            });
        });
        
    
}


carry();
