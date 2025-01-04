document.addEventListener('DOMContentLoaded', function() {
    const birthDate = prompt("Please enter your birthdate (YYYY-MM-DD):");
    if (birthDate) {
        const birthDateObj = new Date(birthDate);
        const today = new Date();
        let age = today.getFullYear() - birthDateObj.getFullYear(); 
        const monthDifference = today.getMonth() - birthDateObj.getMonth();

        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDateObj.getDate())) {
            age--;
        }

        if (age >= 18) {
            const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const dayOfWeek = daysOfWeek[birthDateObj.getDay()];
            alert(`You are ${age} years old. You were born on a ${dayOfWeek}.`);
        } else {
            alert("You are under 18. Parental consent is required to use this site.");
        }
    }
});