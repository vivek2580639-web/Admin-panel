 js/main.jsimport { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const panelsDiv = document.getElementById("panels");

const snap = await getDocs(collection(db, "panels"));

snap.forEach(doc => {
  const p = doc.data();
  panelsDiv.innerHTML += `
    <div class="panel">
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <button onclick="location.href='buy.html?panel=${doc.id}'">Buy</button>
    </div>
  `;
});
