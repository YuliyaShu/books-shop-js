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
        const pack =document.getElementById("pack");
        const postcard = document.getElementById("postcard");
        const discount = document.getElementById("discount");
        const pen = document.getElementById("pen")
        if (pack.checked && postcard.checked) {
            discount.disabled = true;
            pen.disabled = true;
        }
        if (pack.checked && discount.checked) {
            postcard.disabled = true;
            pen.disabled = true;
        }
        if (pack.checked && pen.checked) {
            discount.disabled = true;
            postcard.disabled = true;
        }
        if (discount.checked && postcard.checked) {
            pack.disabled = true;
            pen.disabled = true;
        }
        if (discount.checked && pen.checked) {
            pack.disabled = true;
            postcard.disabled = true;
        }
        if (pen.checked && postcard.checked) {
            pack.disabled = true;
            discount.disabled = true;
        }
        if (pack.checked && !postcard.checked && !discount.checked && !pen.checked) {
            postcard.disabled = false;
            discount.disabled = false;
            pen.disabled = false;
        }
        if (!pack.checked && postcard.checked && !discount.checked && !pen.checked) {
            pack.disabled = false;
            discount.disabled = false;
            pen.disabled = false;
        }
        if (!pack.checked && !postcard.checked && discount.checked && !pen.checked) {
            postcard.disabled = false;
            pack.disabled = false;
            pen.disabled = false;
        }
        if (!pack.checked && !postcard.checked && !discount.checked && pen.checked) {
            postcard.disabled = false;
            discount.disabled = false;
            pack.disabled = false;
        }
    },

    summarize() {
        localStorage.setItem('fname', document.getElementById("fname").value);
        localStorage.setItem('lname', document.getElementById("lname").value);
        localStorage.setItem('date', document.getElementById("date").value);
        localStorage.setItem('street', document.getElementById("street").value);
        localStorage.setItem('house', document.getElementById("house").value);
        localStorage.setItem('flat', document.getElementById("flat").value);
        localStorage.setItem('payment', document.getElementById("Card").checked);
        localStorage.setItem('pack', document.getElementById("pack").checked);
        localStorage.setItem('postcard', document.getElementById("postcard").checked);
        localStorage.setItem('discount', document.getElementById("discount").checked);
        localStorage.setItem('pen', document.getElementById("pen").checked);

        document.body.removeEventListener('mousemove', obj.validity);
        const shelf = document.querySelector('.shelf');
        shelf.innerHTML = '';

        const p = document.createElement('p');
        shelf.append(p);
        p.classList.add('finalTextH1');
        p.innerHTML = 'Your order is accepted!';

        const pMain = document.createElement('p');
        const main = document.querySelector('.main');
        main.classList.add('main-sum');
        shelf.append(pMain);
        shelf.classList.add('shelf-sum');
        pMain.classList.add('finalText');
        const pay = () => {
            return localStorage.getItem('payment') == 'true' ? 'card' : 'cash';
        }
        const gifts = () => {
            let result = '';
            if (localStorage.getItem('pack') == 'true') result += 'pack, ';
            if (localStorage.getItem('postcard') == 'true') result += 'postcard, ';
            if (localStorage.getItem('discount') == 'true') result += 'discount, ';
            if (localStorage.getItem('pen') == 'true') result += 'pen or pencil, ';
            return result.substring(0, result.length - 2);
        }
        pMain.innerHTML = `Name: ${localStorage.getItem("fname")}<br>
        Surname: ${localStorage.getItem("lname")}<br>
        Delivery date: ${localStorage.getItem("date")}<br>
        Delivery address: ${localStorage.getItem("street")} street, house ${localStorage.getItem("house")}, flat ${localStorage.getItem("flat")}<br>
        Payment type: ${pay()}<br>
        Gifts: ${gifts()}<br>
        Total: $${localStorage.getItem("sum")}`;

        const aReturn = document.createElement('a');
        shelf.append(aReturn);
        aReturn.classList.add('linkReturn');
        aReturn.setAttribute('href', 'https://yuliyashu.github.io/books-shop-js/pages/main/');
        aReturn.innerHTML = 'Return to the main page';
    }
}
document.getElementById('date').min = obj.todayIs();
document.getElementById('submit').value = `Total: $ ${obj.totalSum()}     Complete order`;
document.body.addEventListener('mousemove', obj.validity);
document.getElementById('submit').addEventListener('click', obj.summarize);



