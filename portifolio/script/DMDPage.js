const DB = firebase.firestore()
let info = {
NAME11: document.getElementById("name"),
EMAIL: document.getElementById("email"),
tel: document.getElementById("tel"),
streat: document.getElementById("streat"),
complement: document.getElementById("complement"),
numberHouse: document.getElementById("number"),
CEP: document.getElementById("cep"),
district: document.getElementById("district"),
city: document.getElementById("city"),
state: document.getElementById("state"),
ENT: document.getElementById("ENT"),

finishShop2: function(){
  if(this.NAME11.value === '' || this.EMAIL.value === ''|| this.tel.value === '' || this.streat.value === ''||this.complement.value ===''|| this.numberHouse.value === ''||this.CEP.value ===''
    || this.district.value ==='' ||  this.city.value ==='' || this.state.value === ''){
      alert("prencha todos os campos!")
    }else{
    DB.collection("venda").add({
    nome: this.NAME11.value,
    email: this.EMAIL.value,
    telefone: this.tel.value,
    endereço: this.streat.value,
    complemento: this.complement.value,
    numero: this.numberHouse.value,
    cep: this.CEP.value,
    bairo: this.district.value,
    cidade: this.city.value,
    estado: this.state.value,
    pagamento: "pendente",
  },{marge: true})
  
  setTimeout( redirect=>{
  window.location.replace("https://mpago.la/1snkPSC")
}, 1000)
}},

finishShop3: function(){
  if(this.ENT.value === ''){
    alert("Coloque o seu nome")
  }else{
    DB.collection("aprov").add({
    nome: this.ENT.value,
    pagamento: "APROVADO",
  },{marge: true})
  alert("Obrigado pela compra! Estamos preparando o seu produto. Se tiver qualquer dúvida entre em contato com o vendedor! ")
  setTimeout( redirect=>{
    window.location.replace("/portifolio/")
  }, 3000)
}}
}






// DB.collection("venda").get().then((snapshot) =>{snapshot.forEach((doc)=>{
//   let id =doc.id
//   DB.collection("venda").doc(id).delete()
// })})