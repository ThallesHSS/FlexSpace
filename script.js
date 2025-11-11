// URL do backend — copia o link que o StackBlitz mostrar na aba “Preview”
const API_URL = "https://teu-backend.stackblitz.io"; // substitui esse pelo teu link real

async function carregarEspacos() {
  const resposta = await fetch(`${API_URL}/espacos`);
  const dados = await resposta.json();
  console.log("Espaços disponíveis:", dados);

  // Exemplo: mostrar na tela
  const lista = document.getElementById("listaEspacos");
  lista.innerHTML = "";
  dados.forEach(e => {
    const item = document.createElement("li");
    item.textContent = `${e.nome} — ${e.tipo} — ${e.disponivel ? "Disponível" : "Ocupado"}`;
    lista.appendChild(item);
  });
}

// Chama a função assim que a página carregar
window.onload = carregarEspacos;
