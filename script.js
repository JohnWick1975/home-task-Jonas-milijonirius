
const cars = document.querySelector('.cars');
const towns = document.querySelector('.towns');
let regNum;

if (localStorage.getItem('i') === null) {
    localStorage.setItem('i', 1);
    regNum = 1;
}else if(localStorage.getItem('i') > 4){
    alert('Data base is full');
}

document.forms.form.addEventListener('submit', e => {
    e.preventDefault();
    const car = e.target.car.value;
    const town = e.target.town.value;

    if (regNum > 4) {
        alert('Data base is full');
    } else {
        localStorage.setItem(regNum, `${car}-${town}`);
        console.log(localStorage.getItem(regNum));
        const data = localStorage.getItem(regNum).split('-');
        const divCar = document.createElement('div');
        const divTown = document.createElement('div');
        divCar.textContent = data[0];
        divTown.textContent = data[1];
        cars.append(divCar);
        towns.append(divTown);
        regNum++;
        localStorage.setItem("i", regNum);
    }
});




