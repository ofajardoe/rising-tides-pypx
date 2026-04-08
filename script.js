document.addEventListener('DOMContentLoaded', () => {
      const observerOptions = { threshold: 0.1 };
      const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                              if (entry.isIntersecting) {
                                                entry.target.classList.add('visible');
                              }
                });
      }, observerOptions);

                              document.querySelectorAll('.animation-fade-in').forEach(el => observer.observe(el));

                              document.querySelectorAll('.card').forEach(card => {
                                        card.addEventListener('click', () => {
                                                      card.classList.toggle('flipped');
                                        });
                              });

                              const ctx = document.getElementById('migrationChart');
      if (ctx) {
                new Chart(ctx.getContext('2d'), {
                              type: 'doughnut',
                              data: {
                                                labels: ['Floods', 'Landslides', 'Other'],
                                                datasets: [{
                                                                      data: [87.3, 10.7, 2.0],
                                                                      backgroundColor: ['#0077be', '#00e5ff', '#003366'],
                                                                      borderWidth: 0
                                                }]
                              },
                              options: {
                                                responsive: true,
                                                plugins: {
                                                                      legend: { position: 'bottom' },
                                                                      title: { display: true, text: 'Causes of Displacement' }
                                                }
                              }
                });
      }

                              document.querySelector('.donation-btn')?.addEventListener('click', () => {
                                        alert('Thank you for your interest! This is a school project (PYPX). Awareness is our goal.');
                              });
});
