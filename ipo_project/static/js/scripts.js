document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById("mainBoardChart");
    
    if (ctx) {
        const myChart = new Chart(ctx, {
            type: "doughnut",
            data: {
                labels: ["Upcoming", "New Listed", "Ongoing"],
                datasets: [{
                    label: "Main Board IPO",
                    data: [15, 25, 2],
                    backgroundColor: ["#4fc3f7", "#81c784", "#ff8a65"],
                    borderWidth: 1,
                }],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '60%',  // Controls the thickness of the doughnut
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            font: {
                                size: 14
                            }
                        }
                    },
                    title: {
                        display: true,
                        text: 'Main Board IPO Status',
                        font: {
                            size: 16,
                            weight: 'bold'
                        },
                        padding: {
                            top: 10,
                            bottom: 30
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const label = context.label || '';
                                const value = context.parsed || 0;
                                const total = context.dataset.data.reduce((acc, data) => acc + data, 0);
                                const percentage = ((value * 100) / total).toFixed(1);
                                return `${label}: ${value} (${percentage}%)`;
                            }
                        }
                    }
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                }
            }
        });

        // Optional: Add click event handler for segments
        ctx.onclick = function(evt) {
            const points = myChart.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true);
            if (points.length) {
                const firstPoint = points[0];
                const label = myChart.data.labels[firstPoint.index];
                const value = myChart.data.datasets[firstPoint.datasetIndex].data[firstPoint.index];
                console.log(`${label}: ${value}`);
                // You can add custom click handling here
            }
        };
    }

    // Show Password functionality
    document.getElementById('togglePassword').addEventListener('click', function (e) {
        const passwordInput = document.getElementById('floatingPassword');
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.classList.toggle('fa-eye-slash');
    });

    // reCAPTCHA functionality
    const recaptchaCallback = function() {
        console.log("reCAPTCHA loaded");
    };

    // Keep me signed in functionality
    document.getElementById('rememberMe').addEventListener('change', function (e) {
        if (this.checked) {
            console.log("Keep me signed in checked");
        } else {
            console.log("Keep me signed in unchecked");
        }
    });
});
