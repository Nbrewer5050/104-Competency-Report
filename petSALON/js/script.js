// create an object literal for the pet salon (name, address, hours)

var salonName={
    name:`The Fashion Pet`,
    address:{
        street:`Av. university`,
        number:"215B"
    },
    hours:{
        open:"8AM",
        close:"5pm"
    },

    pets:[],
    price:{
        shower: "$45.00",
        haircut:"$20.00",
        nailTrimming: "$10.00",
        fullService: "$75.00"
    }
}

//for (var i=0;i<pets.length;i++){
    //console.log(pets[i]);
//}

//object contructor
class Pet{
    constructor(name,age,type,breed,gender,service,ownerName,contactPhone,email){
        this.name=name;
        this.age=age;
        this.type=type;
        this.breed=breed;
        this.gender=gender;
        this.service;
        this.ownerName=ownerName;
        this.contactPhone=contactPhone;
        this.email=email    
    }
}

var scooby = new Pet("scooby",50,"dog","Dane","Male","full Service","shaggy","4564564567");
var scooby = new Pet("scrappy",40,"dog","Dane","Male","full Service","shaggy","4564564567");
var scooby = new Pet("Krypto",100,"dog","retriever","Male","full Service","Superman","4564564567");
salon.pets.push(scooby);
salon.pets.push(scrappy);
salon.pets.push(krypto);

var txtName=document.getElementById(`petName`);
var txtAge=document.getElementById(`petAge`);
var txtType=document.getElementById(`petType`);
var txtBreed=document.getElementById(`petBreed`);
var txtGender=document.getElementById(`petGender`);
var txtService=document.getElementById(`petService`);
var txtOwnerName=document.getElementById(`petOwnerName`);
var txtContactPhone=document.getElementById(`petContactPhone`);
var txtEmail=document.getElementById(`email`);
// finish loading variables
function register(){
    console.log(txtName.value);
    console.log(txtAge.value);
    console.log(txtType.value);
    console.log(txtBreed.value);
    console.log(txtGender.value);
    console.log(txtService.value);
    console.log(txtOwner.value);
    console.log(txtContact);
    console.log(txtEmail);
    // finish loading variables
    var thePet=new Pet(txtName.value, txtAge.value, txtType.value, txtBreed.value, txtGender.value, txtService.value, txtOwner.value, txtContact.value, txtEmail.value);
    salon.pet.push(thePet); 
}

function clear(){
    txtName.value="";
    txtAge.value="";
    txtType.value="";
    txtBreed.value="";
    txtGender.value="";
    txtService.value="";
    txtOwner.value="";
    txtContact.value="";
    txtEmail.value="";
}
