document.addEventListener("DOMContentLoaded", () => {
  const hoje = new Date();
  const dia = String(hoje.getDate()).padStart(2, '0');
  const mes = String(hoje.getMonth() + 1).padStart(2, '0');
  const ano = hoje.getFullYear();
  const dataFormatada = `${ano}-${mes}-${dia}`;
  document.getElementById("data-cad").value = dataFormatada;
});