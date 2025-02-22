function parentRat1() {
    let eyeColor = Math.random() > 0.5 ? 'red' : 'black';
    let furColor = Math.random() > 0.5 ? 'gray' : 'white';
    let gender = Math.random() > 0.5 ? 'male' : 'female';

    return { eyeColor, furColor, gender }; // Return an object with properties
}

function parentRat2(parent1Gender) {
    let eyeColor = Math.random() > 0.5 ? 'red' : 'black';
    let furColor = Math.random() > 0.5 ? 'gray' : 'white';

    // Ensure parentRat2 has opposite gender of parentRat1
    let gender = parent1Gender === 'male' ? 'female' : 'male';

    return { eyeColor, furColor, gender };
}

// Create parent rats and store their data
let rat1 = parentRat1();
let rat2 = parentRat2(rat1.gender);

// Print their properties
console.log(rat1);
console.log(rat2);
