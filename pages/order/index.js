const obj = {
    todayIs() {
        let date =new Date;
        let month;
        if (date.getMonth() + 1 < 10) {
            month = `0${date.getMonth() + 1}`;
        } else {
            month = date.getMonth() + 1;
        }
        return `${date.getFullYear()}-${month}-${date.getDate() + 1}`;
    },

    totalSum() {
        return localStorage.getItem('sum');
    },

    validity() {
        const fname = document.getElementById("fname");
        const lname = document.getElementById("lname");
        const date = document.getElementById("date");
        const street = document.getElementById("street");
        const house = document.getElementById("house");
        const flat = document.getElementById("flat");
        const Card = document.getElementById("Card");
        const Cash = document.getElementById("Cash");
        document.querySelector('.fname').innerHTML = fname.validationMessage;
        document.querySelector('.lname').innerHTML = lname.validationMessage;
        document.querySelector('.date').innerHTML = date.validationMessage;
        document.querySelector('.street').innerHTML = street.validationMessage;
        document.querySelector('.house').innerHTML = house.validationMessage;
        document.querySelector('.flat').innerHTML = flat.validationMessage;
        document.querySelector('.card-cash').innerHTML = Card.validationMessage;
        if (fname.validity.valid &&
            lname.validity.valid &&
            date.validity.valid &&
            street.validity.valid &&
            house.validity.valid &&
            flat.validity.valid &&
            fname.validity.valid &&
            (Card.validity.valid || Cash.validity.valid)) {
                document.getElementById("submit").disabled = false;
            } else {
                document.getElementById("submit").disabled = true;
            }
        
    }
}
document.getElementById('date').min = obj.todayIs();
document.getElementById('submit').value = `Total: $ ${obj.totalSum()}     Complete order`;
document.body.addEventListener('mousemove', obj.validity) 

