
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
const ctx2 = document.getElementById('dificultadChart');
new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ['1991 - Luis B. Chicaiza', '2004 - Julián García', '2008 - Yuri Niño'],
    datasets: [{
      label: 'Nivel de dificultad percibido (1=bajo, 5=alto)',
      data: [5, 3, 4],
      backgroundColor: ['#dc3545', '#ffc107', '#0d6efd']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Dificultades iniciales enfrentadas por entrevistados'
      }
    },
    scales: {
      y: {
        min: 1,
        max: 5,
        ticks: {
          stepSize: 1,
          callback: function(value) {
            return ['Bajo', '', 'Medio', '', 'Alto'][value - 1];
          }
        }
      }
    }
  }
});
