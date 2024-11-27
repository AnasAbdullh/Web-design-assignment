// Form validation functions
function validatePersonalInfo() {
    const fields = ['name', 'age', 'country', 'phone', 'creditCard'];
    let isValid = true;

    fields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (!field.value.trim()) {
            alert(`Please enter your ${fieldId} ✖✖✖`);
            field.focus();
            isValid = false;
        }
    });

    return isValid;
}

function validateCarInfo() {
    const fields = ['CarN', 'CarM', 'CarY', 'CarC', 'CarCO', 'CarS'];
    let isValid = true;

    fields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (!field.value.trim()) {
            alert(`Please enter the car's ${fieldId.replace('Car', '').toLowerCase()} ✖✖✖`);
            field.focus();
            isValid = false;
        }
    });

    return isValid;
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    const personalInfoForm = document.querySelector('.personal-info-form');
    const carInfoForm = document.querySelector('.car-info-form');

    personalInfoForm.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validatePersonalInfo()) {
            alert('Personal information submitted successfully!');
            this.reset();
        }
    });

    carInfoForm.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateCarInfo()) {
            alert('Car information submitted successfully!');
            this.reset();
        }
    });
});
