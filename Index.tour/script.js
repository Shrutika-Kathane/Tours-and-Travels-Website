// document.getElementById('booking-type').addEventListener('change', function() {
//     var bookingType = this.value;
//     var bookingDetails = document.getElementById('booking-details');

    
//     bookingDetails.innerHTML = '';

//     if (bookingType === 'hotel') {
//         bookingDetails.innerHTML = `
//             <input type="text" placeholder="Hotel Name" required>
//             <input type="date" placeholder="Check-in Date">
//             <input type="date" placeholder="Check-out Date">
//             <input type="number" placeholder="Number of Guests">
//         `;
//     } else if (bookingType === 'flight') {
//         bookingDetails.innerHTML = `
//             <input type="text" placeholder="Departure City">
//             <input type="text" placeholder="Destination City">
//             <input type="date" placeholder="Departure Date">
//             <input type="number" placeholder="Number of Passengers">
//         `;
//     } else if (bookingType === 'cruise') {
//         bookingDetails.innerHTML = `
//             <input type="text" placeholder="Cruise Name" required>
//             <input type="date" placeholder="Departure Date">
//             <input type="number" placeholder="Number of Guests">
//         `;
//     }
// });

// document.getElementById('book-btn').addEventListener('click', function() {
//     alert('Booking confirmed!');
    
// });




document.getElementById('booking-type').addEventListener('change', function() {
    var bookingType = this.value;
    var bookingDetails = document.getElementById('booking-details');

    bookingDetails.innerHTML = '';

    if (bookingType === 'hotel') {
        bookingDetails.innerHTML = `
            <input type="text" id="hotel-name" placeholder="Hotel Name" required>
            <input type="date" id="check-in-date" placeholder="Check-in Date" required>
            <input type="date" id="check-out-date" placeholder="Check-out Date" required>
            <input type="number" id="num-guests" placeholder="Number of Guests" required>
        `;
    } else if (bookingType === 'flight') {
        bookingDetails.innerHTML = `
            <input type="text" id="departure-city" placeholder="Departure City" required>
            <input type="text" id="destination-city" placeholder="Destination City"required>
            <input type="date" id="departure-date" placeholder="Departure Date" required>
            <input type="number" id="num-passengers" placeholder="Number of Passengers" required>
        `;
    } else if (bookingType === 'cruise') {
        bookingDetails.innerHTML = `
            <input type="text" id="cruise-name" placeholder="Cruise Name" required>
            <input type="date" id="departure-date" placeholder="Departure Date" required>
            <input type="number" id="num-guests" placeholder="Number of Guests" required>
        `;
    }
});

document.getElementById('book-btn').addEventListener('click', function() {
    
    var isValid = true;
    var bookingType = document.getElementById('booking-type').value;

    if (bookingType === 'hotel') {
        if (!document.getElementById('hotel-name').value.trim() ||
            !document.getElementById('num-guests').value.trim()) {
            isValid = false;
        }
    } else if (bookingType === 'flight') {
        if (!document.getElementById('num-passengers').value.trim()) {
            isValid = false;
        }
    } else if (bookingType === 'cruise') {
        if (!document.getElementById('cruise-name').value.trim() ||
            !document.getElementById('num-guests').value.trim()) {
            isValid = false;
        }
    }

    if (isValid) {
        alert('Booking confirmed! We will contact you shortly.');
    } else {
        alert('Please fill out all required fields.');
    }
});


