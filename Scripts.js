document.getElementById('donationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const phone = document.getElementById('phone').value;
    const amount = document.getElementById('amount').value;

    fetch('http://localhost:5000/donate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone, amount }),
    })
        .then(response => response.json())
        .then(data => {
            alert(data.message || 'Check your phone for the payment prompt!');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to initiate donation. Please try again.');
        });
});
