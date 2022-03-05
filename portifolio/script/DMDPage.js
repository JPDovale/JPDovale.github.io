
let NAME11 = document.getElementById("name")
let EMAIL = document.getElementById("email")
let tel = document.getElementById("tel")
let streat = document.getElementById("streat")
let complement = document.getElementById("complement")
let numberHouse = document.getElementById("number")
let CEP = document.getElementById("cep")
let district = document.getElementById("district")
let city = document.getElementById("city")
let state = document.getElementById("state")
const DB = firebase.firestore()


function finishShop2(){
    DB.collection("venda").add({
    nome: NAME11.value,
    email: EMAIL.value,
    telefone: tel.value,
    endereço: streat.value,
    complemento: complement.value,
    numero: numberHouse.value,
    cep: CEP.value,
    bairo: district.value,
    cidade: city.value,
    estado: state.value,
  },{marge: true})
  
  setTimeout( redirect=>{
  window.location.replace("https://mpago.la/1snkPSC")
}, 1000)
}



// DB.collection("venda").get().then((snapshot) =>{snapshot.forEach((doc)=>{
//   let id =doc.id
//   DB.collection("venda").doc(id).delete()
// })})