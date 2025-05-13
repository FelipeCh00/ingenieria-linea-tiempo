
AOS.init();

// Buscador
document.getElementById('searchInput').addEventListener('input', function () {
  const query = this.value.toLowerCase();
  document.querySelectorAll('.timeline-item').forEach(item => {
    item.style.display = item.textContent.toLowerCase().includes(query) ? 'block' : 'none';
  });
});

// Chart.js
const ctx = document.getElementById('techChart');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['1991', '2004', '2008'],
    datasets: [{
      label: 'Número de tecnologías mencionadas',
      data: [6, 3, 4],
      backgroundColor: ['#0d6efd', '#6c757d', '#198754']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Cantidad de tecnologías por año'
      }
    }
  }
});
