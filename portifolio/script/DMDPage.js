// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPXSsZniGo_zyKa02Ao3N_GZQ_XTfvH6w",
  authDomain: "depois-da-meia-noite.firebaseapp.com",
  projectId: "depois-da-meia-noite",
  storageBucket: "depois-da-meia-noite.appspot.com",
  messagingSenderId: "550167799371",
  appId: "1:550167799371:web:4db52be045b93390d70fce",
  measurementId: "G-ZT6ZBTDM4V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const NAME11 = document.getElementById("name")
const email = document.getElementById("email")
const tel = document.getElementById("tel")
const streat = document.getElementById("streat")
const complement = document.getElementById("complement")
const numberHouse = document.getElementById("number")
const cep = document.getElementById("cep")
const district = document.getElementById("district")
const city = document.getElementById("city")
const state = document.getElementById("state")
const finish = document.getElementById("finish") 
const VENDA = "venda"
let db = firebase.firestore()


finish.addEventListner('click', finish1() )
function finish1(){
    db.collection(VENDA).add({
    nome: NAME11.value,
    email: email.value,
    telefone: tel.value,
    endereço: streat.value,
    complemento: complement.value,
    numero: numberHouse.value,
    cep: cep.value,
    bairo: district.value,
    cidade: city.value,
    estado: state.value,
  })
}