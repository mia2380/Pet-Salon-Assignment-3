function displayPetCards(){
    //get the HTML element where we display the pets
    let petsDiv = document.getElementById("pets");
    let tmp="";
    //travel the pets array
    for(let i=0;i<petSalon.pets.length;i++){
       //getting the pet
       let aPet = petSalon.pets[i];
       //create the template (card)
       tmp+=`
            <div id="${aPet.id}" class="pet">
                <p>Name: ${aPet.name} </p>
                <p>Age: ${aPet.age} </p>
                <p>Gender: ${aPet.gender} </p>
                <p>Breed: ${aPet.breed} </p>
                <p>Service: ${aPet.selService} </p>
                <p>Owner's Info: ${aPet.ownerName} </p>
                <p>Contact Info: ${aPet.contactPhone} </p>  
            </div>
    `;
    }
        //insert the card into the HTML element
    petsDiv.innerHTML=tmp;
}

function displayPetsTable(){
    //get the  HTML element where we display the table
    let petsTable = document.getElementById("tbody");
    let table="";
    //travel the array
    for(let i=0;i<petSalon.pets.length;i++){
        //getting the pets
        let tablePet = petSalon.pets[i];
        //create the template (table)
        table+=`
            <tr id="${tablePet.id}">
                <td scope="row">${tablePet.id+1}</td>
                <td> ${tablePet.name} </td>
                <td> ${tablePet.age} </td>
                <td> ${tablePet.gender} </td>
                <td> ${tablePet.breed} </td>
                <td> ${tablePet.selService} </td>
                <td> ${tablePet.ownerName} </td>
                <td> ${tablePet.contactPhone} </td>
                <td><button class="btn btn-danger" onclick="deletePet(${tablePet.id})">Delete</button></td>
            </tr>

        `;
    
    }


    //insert the card into the HTML element
    petsTable.innerHTML = table;

}