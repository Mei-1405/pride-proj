// Function to simulate moving to the next step in the learning path
function moveToNextStep() {
    const steps = document.querySelectorAll('.step');
    for (let i = 0; i < steps.length; i++) {
        if (steps[i].classList.contains('active')) {
            steps[i].classList.remove('active');
            if (i + 1 < steps.length) {
                steps[i + 1].classList.add('active');
            } else {
                alert('You have completed all levels!');
            }
            break;
        }
    }
}

// Example function to handle sidebar toggle (not implemented)
document.getElementById('toggleBtn').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
});

// Initialize Chart.js
const ctx = document.getElementById('activityChart').getContext('2d');
const activityChart = new Chart(ctx, {
    type: 'line', // Change the type as needed (e.g., 'bar', 'radar', etc.)
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
            label: 'Weekly Activity',
            data: [12, 19, 3, 5, 2, 3, 8], // Sample data
            backgroundColor: 'rgba(255, 165, 0, 0.5)',
            borderColor: 'rgba(255, 165, 0, 1)',
            borderWidth: 1,
            fill: true // Fill under the line
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
