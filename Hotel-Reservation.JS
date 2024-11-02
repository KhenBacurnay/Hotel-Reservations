function reserveRoom() {
    const roomType = document.getElementById("room-type").value;
    const roomsDiv = document.getElementById("rooms");
    roomsDiv.innerHTML = ""; // Clear previous room selections

    const availableRooms = [
        { number: 101, type: "Single", price: 100 },
        { number: 102, type: "Double", price: 150 },
        { number: 103, type: "Suite", price: 200 },
    ];

    availableRooms.forEach(room => {
        if (roomType === "Select" || room.type === roomType) {
            const roomDiv = document.createElement("div");
            roomDiv.innerHTML = `Room ${room.number} - $${room.price} (${room.type}) 
                <button onclick="confirmBooking(${room.number}, ${room.price})">Select</button>`;
            roomsDiv.appendChild(roomDiv);
        }
    });

    showRoomSelection();
}

function showRoomSelection() {
    document.getElementById("login-page").style.display = "none";
    document.getElementById("signup-page").style.display = "none";
    document.getElementById("room-selection").style.display = "block";
    document.getElementById("confirmation-page").style.display = "none";
}

function showSignUp() {
    document.getElementById("login-page").style.display = "none";
    document.getElementById("signup-page").style.display = "block";
    document.getElementById("room-selection").style.display = "none";
    document.getElementById("confirmation-page").style.display = "none";
}

function createAccount() {
    alert("Account created! Now you can log in.");
    showLogin();
}

function confirmBooking(roomNumber, roomPrice) {
    const confirmationDetails = document.getElementById("confirmation-details");
    confirmationDetails.innerHTML = `Booking confirmed for Room ${roomNumber} at $${roomPrice}.`;
    showConfirmationPage();
}

function showConfirmationPage() {
    document.getElementById("login-page").style.display = "none";
    document.getElementById("signup-page").style.display = "none";
    document.getElementById("room-selection").style.display = "none";
    document.getElementById("confirmation-page").style.display = "block";
}

function showLogin() {
    document.getElementById("login-page").style.display = "block";
    document.getElementById("signup-page").style.display = "none";
    document.getElementById("room-selection").style.display = "none";
    document.getElementById("confirmation-page").style.display = "none";
}

function printConfirmation() {
    window.print(); 
}
