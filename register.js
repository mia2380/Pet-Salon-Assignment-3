//object literal{}
let petSalon = {
    //attributes
    name:"The Fashion Pet",
    Phone:"123-456-7890",
    Email:"john.doe@example.com",
    address:{
        country:"USA",
        city:"SoPines",
        street:"Niagara",
        number:"3650",
        zip:"12345"
    }, 
    pets:[]
}
let count = 0;
// CONSTRUCTOR
//< ------ this are the arguments (local vars) -->
function Pet(name,age,gender,breed,service,owner,phone){
    //the real attributes are the next:
    this.id=count++;
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.selService=service;
    this.ownerName=owner;
    this.contactPhone=phone;
}

//getting the values from the inputs
let inputName=document.getElementById("txtName");
let inputAge=document.getElementById("txtAge");
let inputGender=document.getElementById("txtGender");
let inputBreed=document.getElementById("txtBreed");
let selectService=document.getElementById("selService");
let inputOwner=document.getElementById("txtOwner");
let inputPhone=document.getElementById("txtPhone");

//Validation
function isValid(newPet){
    let valid=true;
    if(newPet.selService==""){
        valid=false;
    }
    return valid;
}

//register function
function register(){
    //create the object
    let thePet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,selectService.value,inputOwner.value,inputPhone.value);
    
    if(isValid(thePet)==true){
        //push the pet into the array
        petSalon.pets.push(thePet);
        displayPetsTable();
        //display the array
        clearInput();
        displayNumberOfPets();
    }else{
        alert("Please fill all the fields");
    }
}

//Search function


function clearInput() {
    inputName.value="";
    inputAge.value="";
    inputGender.value="";
    inputBreed.value="";
    selectService.value="";
    inputOwner.value="";
    inputPhone.value="";    
}

function displayNumberOfPets(){
    document.getElementById("numberOfPets").innerHTML=`We have ${petSalon.pets.length} pets registered`;
}

//Deleting a pet
function deletePet(petID){
    let deleteIndex;
    for (let i=0;i<petSalon.pets.length;i++){ //traveling the array
        let tablePet = petSalon.pets[i]; //getting the pet
        if (tablePet.id==petID){ //comparing
            deleteIndex=i;
            console.log("The deleted pet is in the poition" + deleteIndex);
        }
    
    }
    petSalon.pets.splice(deleteIndex,1);
    document.getElementById(petID).remove();
    displayNumberOfPets();
}


function init() {
    // create a pet
    let Lily = new Pet("Lily",3,"girl","GSD","grooming","Alex","123-456-7890");
    let Charlie = new Pet("Charlie",5,"girl","Husky","Nails","Brenda","777-777-7777");
    let Ricco = new Pet("Ricco",7,"boy","Dutch Shepherd","Vaccines","Hethe","987-654-3210");
    //push the pet into the array
    petSalon.pets.push(Lily,Charlie,Ricco);
    displayNumberOfPets();
    displayPetsTable();
  
}

window.onload = init;