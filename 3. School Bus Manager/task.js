let totalSeats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let bookedSeats = []

let options = prompt("Choose one of the following options:\n1. Book Seat\n2. Cancel Booking\n3. Show Available Seats").toLowerCase()

if (options == "book seat" || options == "1") {
    let bookingSeatNumber = +prompt("Enter the seat number you want to book:")

    if (totalSeats.includes(bookingSeatNumber)) {
        alert("Seat Booked Successfully.")

        let index = totalSeats.indexOf(bookingSeatNumber)
        totalSeats.splice(index, 1)
        bookedSeats.push(bookingSeatNumber)

    } else {
        alert("Seat Already Booked.")
    }

} else if (options == "cancel booking" || options == "2") {

    let cancelBookingSeatNumber = +prompt("Enter the seat number you want to cancel:")

    if (bookedSeats.includes(cancelBookingSeatNumber)) {

        let index = bookedSeats.indexOf(cancelBookingSeatNumber)
        bookedSeats.splice(index, 1)
        totalSeats.push(cancelBookingSeatNumber)

        alert("Booking Cancelled Successfully.\n\nAvailable Seats: " + totalSeats + "\nBooked Seats: " + bookedSeats)

    } else {
        alert("Seat is not booked.")
    }

} else if (options == "show available seats" || options == "3") {

    alert("Available Seats:\n" + totalSeats)

} else {

    alert("Invalid Option.")

}