const struct = {
    createFirstWrapper() {
        const wrapper = document.createElement('div');
        document.body.prepend(wrapper);
        wrapper.classList.add('wrapper');
    },

    createElement(element, name, nameClass, where) {
        name = document.createElement(element);
        where.append(name);
        name.classList.add(nameClass);
    },

    createElementPrepend(element, name, nameClass, where) {
        name = document.createElement(element);
        where.prepend(name);
        name.classList.add(nameClass);
    },

    createImg(name, nameClass, where, src) {
        name = document.createElement('img');
        where.append(name);
        name.classList.add(nameClass);
        name.src = src;
        name.alt = nameClass;
    },

    createBookSet(count) {
        fetch('../../pages/main/books.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            struct.createElement('div', 'book-set', 'book-set', document.querySelector('.book'));
            const imgV = data[`${count}`].img;
            struct.createImg(`book${count}`, `book${count}`, document.querySelectorAll('.book-set')[count], imgV);
            document.querySelector(`.book${count}`).draggable="true";
            document.querySelector(`.book${count}`).classList.add('bookImg');
            struct.createElement('div', 'about-book', 'about-book', document.querySelectorAll('.book-set')[count]);
            struct.createElement('p', 'title', 'title', document.querySelectorAll('.about-book')[count]);
            document.querySelectorAll('.title')[count].innerHTML = data[`${count}`].title;
            if (data[`${count}`].title.length < 14) struct.createElement('br', 'br', 'br', document.querySelectorAll('.about-book')[count]);
            struct.createElement('p', 'author', 'author', document.querySelectorAll('.about-book')[count]);
            document.querySelectorAll('.author')[count].innerHTML = data[`${count}`].author;
            struct.createElement('p', 'price', 'price', document.querySelectorAll('.about-book')[count]);
            document.querySelectorAll('.price')[count].innerHTML = `$${data[`${count}`].price}`;
            struct.createElement('p', 'show-more', 'show-more', document.querySelectorAll('.about-book')[count]);
            document.querySelectorAll('.show-more')[count].innerHTML = 'Show more';
            document.querySelectorAll('.show-more')[count].addEventListener('click', () => struct.createPopUp(count));
            struct.createElement('button', 'add-to-bag', 'add-to-bag', document.querySelectorAll('.about-book')[count]);
            document.querySelectorAll('button')[count].innerHTML = 'Add to bag';
            document.querySelectorAll('button')[count].addEventListener('click', () => struct.createBookSetForBag(count));
        });
    },

    createMainStructure() {
        struct.createFirstWrapper();
        struct.createElement('div', 'fix', 'fix', document.querySelector('.wrapper'));
        struct.createElement('header', 'header', 'header', document.querySelector('.fix'));
        struct.createElement('div', 'header-blocks', 'header-blocks', document.querySelector('.header'));
        struct.createElement('div', 'div-books-logo', 'div-books-logo', document.querySelector('.header-blocks'));
        struct.createElement('a', 'aLogo', 'aLogo', document.querySelector('.div-books-logo'));
        document.querySelector('.aLogo').setAttribute('href', 'https://yuliyashu.github.io/books-shop-js/pages/main/')
        struct.createImg('books-logo', 'books-logo', document.querySelector('.aLogo'), '../../assets/books.jpg');
        struct.createElement('div', 'books-audiobooks', 'books-audiobooks', document.querySelector('.header-blocks'));
        struct.createElement('p', 'books', 'books', document.querySelector('.books-audiobooks'));
        struct.createImg('books-img', 'books-img', document.querySelector('.books'), '../../assets/icons8-books-64.png');
        document.querySelector('.books').innerHTML += 'Books';
        struct.createElement('p', 'audiobooks', 'audiobooks', document.querySelector('.books-audiobooks'));
        struct.createImg('audiobooks-img', 'audiobooks-img', document.querySelector('.audiobooks'), '../../assets/icons8-headphones-64.png');
        document.querySelector('.audiobooks').innerHTML += 'AudioBooks';
        document.querySelector('.audiobooks').setAttribute('title', 'Coming soon');
        struct.createElement('div', 'contacts', 'contacts', document.querySelector('.header-blocks'));
        struct.createElement('a', 'bag-link', 'bag-link', document.querySelector('.contacts'));
        document.querySelector('.bag-link').setAttribute('href', 'https://yuliyashu.github.io/books-shop-js/pages/order/');
        struct.createImg('bag-icon', 'bag-icon', document.querySelector('.bag-link'), '../../assets/icons8-bag-100(1).png');
        struct.createImg('contacts-icon', 'contacts-icon', document.querySelector('.contacts'), '../../assets/icons8-whatsapp-50.png');
        document.querySelector('.contacts-icon').setAttribute('title', 'Coming soon');
        struct.createImg('customer', 'customer', document.querySelector('.contacts'), '../../assets/icons8-customer-64.png');
        document.querySelector('.customer').setAttribute('title', 'Coming soon');
        struct.createImg('settings', 'settings', document.querySelector('.contacts'), '../../assets/icons8-settings-50.png');
        document.querySelector('.settings').setAttribute('title', 'Coming soon');

        struct.createElement('main', 'main', 'main', document.querySelector('.fix'));
        struct.createElement('div', 'main-blocks', 'main-blocks', document.querySelector('.main'));
        struct.createElement('div', 'shelf', 'shelf', document.querySelector('.main-blocks'));
        struct.createElement('div', 'introduction', 'introduction', document.querySelector('.shelf'));
        struct.createElement('h1', 'h1', 'h1', document.querySelector('.introduction'));
        document.querySelector('h1').innerHTML = 'Incredible Books World';
        struct.createElement('p', 'intro-text', 'intro-text', document.querySelector('.introduction'));
        document.querySelector('.intro-text').innerHTML = 'A room without books is like a body without a soul';
        struct.createElement('div', 'book', 'book', document.querySelector('.shelf'));
        for (let i = 0; i < 3; i += 1) {
            struct.createBookSet(i);
        }
        struct.createElement('div', 'space', 'space', document.querySelector('.main-blocks'));
        struct.createElement('div', 'bag', 'bag', document.querySelector('.main-blocks'));
        struct.createElement('div', 'bag-text', 'bag-text', document.querySelector('.bag'));
        document.querySelector('.bag-text').innerHTML = 'your bag is here';
        
        struct.createElement('footer', 'footer', 'footer', document.querySelector('.fix'));
        struct.createElement('div', 'footer-blocks', 'footer-blocks', document.querySelector('.footer'));
        struct.createElement('a', 'footer-links', 'footer-links', document.querySelector('.footer-blocks'));
        document.querySelectorAll('.footer-links')[0].innerHTML = 'Inspired by Nikitin\'s shot';
        document.querySelectorAll('.footer-links')[0].setAttribute('href', 'https://dribbble.com/shots/16279204-Book-Web-Store-Concept');
        
        struct.createElement('a', 'footer-links', 'footer-links', document.querySelector('.footer-blocks'));
        document.querySelectorAll('.footer-links')[1].innerHTML = 'YuliyaShu may 2022';
        document.querySelectorAll('.footer-links')[1].setAttribute('href', 'https://github.com/YuliyaShu/books-shop');
        
        struct.createElement('a', 'footer-links', 'footer-links', document.querySelector('.footer-blocks'));
        document.querySelectorAll('.footer-links')[2].innerHTML = 'RSSchool';
        document.querySelectorAll('.footer-links')[2].setAttribute('href', 'https://rs.school/" class="footer-links');
    },

    createBookSetForBag(countItem) {
        if (document.querySelectorAll('.book-set-bag').length == 5) {
            document.querySelector('.space').innerHTML = 'your bag is full';
            setTimeout(() => {
                document.querySelector('.space').innerHTML = ''},
                2000);
        } else {
            fetch('../../pages/main/books.json')
            .then(response => {
                return response.json();
            })
            .then(data => {
                struct.createElementPrepend('div', 'book-set-bag', 'book-set-bag', document.querySelector('.bag'));
                const imgV = data[`${countItem}`].img;
                struct.createImg(`book-bag-${countItem}`, `book-bag-${countItem}`, document.querySelectorAll('.book-set-bag')[0], imgV);
                struct.createElement('div', 'cross', 'cross', document.querySelectorAll('.book-set-bag')[0]);
                document.querySelectorAll('.cross')[0].innerHTML = 'x';
                struct.createElement('div', 'about-book-bag', 'about-book-bag', document.querySelectorAll('.book-set-bag')[0]);
                struct.createElement('p', 'title-bag', 'title-bag', document.querySelectorAll('.about-book-bag')[0]);
                document.querySelectorAll('.title-bag')[0].innerHTML = data[`${countItem}`].title;
                struct.createElement('p', 'author-bag', 'author-bag', document.querySelectorAll('.about-book-bag')[0]);
                document.querySelectorAll('.author-bag')[0].innerHTML = data[`${countItem}`].author;
                struct.createElement('p', 'price-bag', 'price-bag', document.querySelectorAll('.about-book-bag')[0]);
                document.querySelectorAll('.price-bag')[0].innerHTML = `$${data[`${countItem}`].price}`;

                if (!document.querySelector('.bag-text').innerHTML == '') {
                    document.querySelector('.bag-text').innerHTML = '';
                    struct.createElement('div', 'sum', 'sum', document.querySelector('.bag'));
                    struct.createElement('p', 'total', 'total', document.querySelector('.sum'));
                    struct.createElement('button', 'total-button', 'total-button', document.querySelector('.sum'));
                    struct.createElement('a', 'total-button-a', 'total-button-a', document.querySelector('.total-button'));
                    document.querySelector('.total-button-a').innerHTML = 'Confirm order';
                    document.querySelector('.total-button-a').setAttribute('href', 'https://yuliyashu.github.io/books-shop-js/pages/order/');
                }
                document.querySelector('.total').innerHTML = `Total:  $ ${struct.totalSum()}`;

                for (let i = 0; i < document.querySelectorAll('.cross').length; i += 1) {
                    document.querySelectorAll('.cross')[i].addEventListener('click', (e) => {
                        e.target.parentElement.remove();
                        document.querySelector('.total').innerHTML = `Total:  $ ${struct.totalSum()}`;
                        if (document.querySelectorAll('.book-set-bag').length == 0) {
                            document.querySelector('.sum').innerHTML = '';
                            document.querySelector('.bag-text').innerHTML = 'your bag is here';
                        }
                    })
                }
            });
        } 
    },

    totalSum() {
        let sumInBag = 0;
        const bag = document.querySelectorAll('.book-set-bag');
        for (let i = 0; i < bag.length; i += 1) {
            const x = document.querySelectorAll('.price-bag')[i].innerHTML.substring(1, document.querySelectorAll('.price-bag')[i].innerHTML.length);
            sumInBag += +x;
        }
        localStorage.setItem('sum', sumInBag);
        return sumInBag;
    },

    createPopUp(count) {
        const popup = document.createElement('div');
        document.body.prepend(popup);
        popup.classList.add('popup');

        const closeForHover = document.createElement('div');
        popup.append(closeForHover);
        closeForHover.classList.add('closeForHover');

        const emptyCell11 = document.createElement('div');
        popup.append(emptyCell11);
        emptyCell11.classList.add('emptyCell1');

        const popupItems1 = document.createElement('div');
        popup.append(popupItems1);
        popupItems1.classList.add('popup-items');

        const emptyCell22 = document.createElement('div');
        popup.append(emptyCell22);
        emptyCell22.classList.add('emptyCell2');
        
        const bodyPopup1 = document.createElement('div');
        document.body.prepend(bodyPopup1);
        bodyPopup1.classList.add('body-popup');

        const bodyPopup = document.querySelector('.body-popup');
        const popupVisible = document.querySelector('.popup');
        document.querySelector('html').classList.add('open');
        bodyPopup.classList.toggle('overlay-popup');
        popupVisible.classList.toggle('popup-visible');
        popupVisible.children[0].classList.toggle('close');
        popupVisible.children[2].classList.toggle('pop-item');


        fetch('../../pages/main/books.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            struct.createElement('div', 'book-set-up', 'book-set-up', document.querySelector('.popup-items'));
            const imgV = data[`${count}`].img;
            struct.createImg('book-up', 'book-up', document.querySelector('.book-set-up'), imgV);
            document.querySelector('.book-up').classList.add('bookImg');
            struct.createElement('div', 'about-book-up', 'about-book-up', document.querySelector('.popup-items'));
            struct.createElement('p', 'description', 'description', document.querySelector('.about-book-up'));
            document.querySelector('.description').innerHTML = data[`${count}`].description;
        });

        // hover on close, when cursor on body-overlay
        const closeHover = document.querySelector('.closeForHover');
        const emptyCell1 = document.querySelector('.emptyCell1');
        const emptyCell2 = document.querySelector('.emptyCell2');
        // OVER
        bodyPopup.onmouseover = function() {
        closeHover.classList.toggle('hover');
        }
        emptyCell1.onmouseover = function() {
        closeHover.classList.toggle('hover');
        }
        emptyCell2.onmouseover = function() {
        closeHover.classList.toggle('hover');
        }
        // OUT
        bodyPopup.onmouseout = function() {
        closeHover.classList.toggle('hover');
        }
        emptyCell1.onmouseout = function() {
        closeHover.classList.toggle('hover');
        }
        emptyCell2.onmouseout = function() {
        closeHover.classList.toggle('hover');
        }

        // hide popup, when click on body-overlay
        function bodyPopupOverlayHide() {
        document.querySelector('html').classList.remove('open');
        bodyPopup.classList.toggle('overlay-popup');
        popupVisible.classList.toggle('popup-visible');
        popupVisible.children[0].classList.toggle('close');
        popupVisible.children[2].classList.toggle('pop-item');
        popupVisible.children[0].innerHTML = '';
        popupVisible.children[2].innerHTML = '';
        }
        bodyPopup.addEventListener('click', bodyPopupOverlayHide);
        emptyCell1.addEventListener('click', bodyPopupOverlayHide);
        emptyCell2.addEventListener('click', bodyPopupOverlayHide);
        closeHover.addEventListener('click', bodyPopupOverlayHide);
    },
};
struct.createMainStructure();



// DRAG AND DROP
let draggedBook;
document.addEventListener("drag", function( event ) {
    draggedBook = event.target.alt[event.target.alt.length - 1];
}, false);

document.addEventListener("dragstart", function( event ) {
    event.target.style.cursor = 'grabbing';
}, false);

document.addEventListener("dragend", function( event ) {
    event.target.style.opacity = "";
}, false);

document.addEventListener("dragenter", function( event ) {
    if ( event.target.className == "bag" ) {
        event.target.style.background = "#f3e5d0";
    }
}, false);

document.addEventListener("dragleave", function( event ) {
    if ( event.target.className == "bag" ) {
        event.target.style.background = "none";
    }
}, false);

document.addEventListener("dragover", function( event ) {
    event.preventDefault();
}, false);

document.addEventListener("drop", function( event ) {
    if ( event.target.className == "bag") {
            event.target.style.background = "none";
            struct.createBookSetForBag(draggedBook);
    }
}, false);