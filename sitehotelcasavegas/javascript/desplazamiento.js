document.addEventListener("DOMContentLoaded", () => {
  const tarjetas = document.querySelectorAll('.tarjeta-info');
  
  tarjetas.forEach((tarjeta, i) => {
    setTimeout(() => {
      tarjeta.classList.add('aparecer');
    }, i * 200); // 200ms de diferencia entre cada tarjeta
  });
});
