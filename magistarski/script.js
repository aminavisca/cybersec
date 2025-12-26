

let currentStep = 0; // Trenutni prikazani korak, počinje od 0 (prvi korak)

function showNextStep() {
    const steps = document.querySelectorAll('.step'); // Svi divovi sa klasom "step"
    
    // Sakrij trenutni korak
    steps[currentStep].classList.add('hidden');

    // Povećaj trenutni korak za 1
    currentStep++;

    // Ako postoji sledeći korak, prikaži ga
    if (currentStep < steps.length) {
        steps[currentStep].classList.remove('hidden');
    }

    // Ako nema više koraka, sakrij dugme
    if (currentStep >= steps.length - 1) {
        document.getElementById('nextStepButton').style.display = 'none';
    }

    // Prikazi dugme za prethodni korak
    document.getElementById('prevStepButton').style.display = 'inline-block';
}

function showPreviousStep() {
    const steps = document.querySelectorAll('.step'); // Svi divovi sa klasom "step"
    
    // Sakrij trenutni korak
    steps[currentStep].classList.add('hidden');
    
    // Smanji trenutni korak za 1
    currentStep--;

    // Ako postoji prethodni korak, prikaži ga
    if (currentStep >= 0) {
        steps[currentStep].classList.remove('hidden');
    }

    // Ako nema više prethodnih koraka, sakrij dugme za prethodni korak
    if (currentStep === 0) {
        document.getElementById('prevStepButton').style.display = 'none';
    }

    // Uvek prikazi dugme za sledeći korak
    document.getElementById('nextStepButton').style.display = 'inline-block';
}




