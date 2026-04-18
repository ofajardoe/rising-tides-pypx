document.addEventListener("DOMContentLoaded", () => {
    
    // Configuración del Intersection Observer para las animaciones de 'fade-in' al hacer scroll
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.15 // Se activa cuando el 15% del elemento es visible
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Añade la clase 'visible' para iniciar la animación CSS
                entry.target.classList.add('visible');
                // Deja de observar el elemento una vez animado
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Selecciona todos los elementos con la clase .fade-in
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => scrollObserver.observe(el));
    

    // Inicialización de Gráfico Chart.js basado en los datos del PDF
    const ctx = document.getElementById('displacementChart');
    if(ctx) {
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Floods (87.3%)', 'Landslides (10.7%)', 'Storms (1.1%)', 'Wildfires (0.9%)'],
                datasets: [{
                    label: '% of Internal Displacement',
                    data: [87.3, 10.7, 1.1, 0.9],
                    backgroundColor: [
                        '#175676', // Secondary Blue
                        '#4BA3E3', // Cyan
                        '#BAE8E8', // Light Cyan
                        '#0A2342'  // Primary Blue
                    ],
                    borderWidth: 2,
                    borderColor: '#ffffff',
                    hoverOffset: 10
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            font: {
                                family: "'Open Sans', sans-serif",
                                size: 14
                            },
                            color: '#2D3142',
                            padding: 20
                        }
                    },
                    title: {
                        display: true,
                        text: 'Causes of Climate Displacement',
                        font: {
                            family: "'Montserrat', sans-serif",
                            size: 16,
                            weight: 'bold'
                        },
                        color: '#0A2342',
                        padding: {
                            bottom: 20
                        }
                    }
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                }
            }
        });
    }

});
