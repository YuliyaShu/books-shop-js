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
            console.log(data);
            struct.createElement('div', 'book-set', 'book-set', document.querySelector('.book'));
            const imgV = data[`${count}`].img;
            struct.createImg(`book${count}`, `book${count}`, document.querySelectorAll('.book-set')[count], imgV);
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
            struct.createElement('button', 'add-to-bag', 'add-to-bag', document.querySelectorAll('.about-book')[count]);
            document.querySelectorAll('button')[count].innerHTML = 'Add to bag';
        });

   
    },

    createMainStructure() {
        struct.createFirstWrapper();
        struct.createElement('div', 'fix', 'fix', document.querySelector('.wrapper'));
        struct.createElement('header', 'header', 'header', document.querySelector('.fix'));
        struct.createElement('div', 'header-blocks', 'header-blocks', document.querySelector('.header'));
        struct.createElement('div', 'div-books-logo', 'div-books-logo', document.querySelector('.header-blocks'));
        struct.createImg('books-logo', 'books-logo', document.querySelector('.div-books-logo'), '../../assets/books.jpg');
        struct.createElement('div', 'books-audiobooks', 'books-audiobooks', document.querySelector('.header-blocks'));
        struct.createElement('p', 'books', 'books', document.querySelector('.books-audiobooks'));
        struct.createImg('books-img', 'books-img', document.querySelector('.books'), '../../assets/icons8-books-64.png');
        document.querySelector('.books').innerHTML += 'Books';
        struct.createElement('p', 'audiobooks', 'audiobooks', document.querySelector('.books-audiobooks'));
        struct.createImg('audiobooks-img', 'audiobooks-img', document.querySelector('.audiobooks'), '../../assets/icons8-headphones-64.png');
        document.querySelector('.audiobooks').innerHTML += 'AudioBooks';
        struct.createElement('div', 'contacts', 'contacts', document.querySelector('.header-blocks'));
        struct.createImg('bag-icon', 'bag-icon', document.querySelector('.contacts'), '../../assets/icons8-bag-100.png');
        
        struct.createImg('contacts-icon', 'contacts-icon', document.querySelector('.contacts'), '../../assets/icons8-whatsapp-50.png');
        struct.createImg('customer', 'customer', document.querySelector('.contacts'), '../../assets/icons8-customer-64.png');
        struct.createImg('settings', 'settings', document.querySelector('.contacts'), '../../assets/icons8-settings-50.png');

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
            console.log(i);
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

{/* <footer class="footer">
                <div class="footer-blocks">
                    <a href="https://dribbble.com/shots/16279204-Book-Web-Store-Concept" class="footer-links">Inspired by Nikitin's shot</a>
                    <a href="https://github.com/YuliyaShu/books-shop" class="footer-links">YuliyaShu may 2022</a>
                    <a href="https://rs.school/" class="footer-links">RSSchool</a>
                </div>
            </footer> */}
    }
   
};
struct.createMainStructure();
