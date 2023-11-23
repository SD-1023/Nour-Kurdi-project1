const cardsData = [
    {
        imgSrc: 'assets/imgs/html.png',
        cardDis: 'Web Development LanguagesWeb Development Languages',
        cardTitle: 'HTML',
        author: 'Author: sarah smith',
        link: 'details.html'
    },
    {
        imgSrc: 'assets/imgs/css.webp',
        cardDis: 'Web Development Languages',
        cardTitle: 'CSS',
        author: 'Author: david lee',

    },
    {
        imgSrc: 'assets/imgs/javascript.jpg',
        cardDis: 'Web Development Languages',
        cardTitle: 'JavaScript',
        author: 'Author: emily chen'

    },
    {
        imgSrc: 'assets/imgs/jquery.png',
        cardDis: 'Web Development Languages',
        cardTitle: 'jQuery',
        author: 'Author: john johnson'

    },
    {
        imgSrc: 'assets/imgs/angular.png',
        cardDis: 'Frontend Framework and Libraries',
        cardTitle: 'Angular',
        author: 'Author: jessica davis'

    },
    {
        imgSrc: 'assets/imgs/react.webp',
        cardDis: 'Frontend Framework and Libraries',
        cardTitle: 'React',
        author: 'Author: daniel brown'

    },
    {
        imgSrc: 'assets/imgs/vuejs.jpeg',
        cardDis: 'Frontend Framework and Libraries',
        cardTitle: 'Vue.js',
        author: 'Author: ava jones'

    },
    {
        imgSrc: 'assets/imgs/nodejs.webp',
        cardDis: 'Backend Frameworks and Libraries',
        cardTitle: 'Node.js',
        author: 'Author: michael kim'

    },
    {
        imgSrc: 'assets/imgs/expressjs.webp',
        cardDis: 'Backend Frameworks and Libraries',
        cardTitle: 'Express.js',
        author: 'Author: sophia rodriguez'

    },
    {
        imgSrc: 'assets/imgs/ruby.jpeg',
        cardDis: 'Backend Frameworks and Libraries',
        cardTitle: 'Ruby on Rails',
        author: 'Author: william lee'

    },
    {
        imgSrc: 'assets/imgs/django.jpeg',
        cardDis: 'Backend Frameworks and Libraries',
        cardTitle: 'Django',
        author: 'Author: olivia martinez'

    },
    {
        imgSrc: 'assets/imgs/flask.webp',
        cardDis: 'Backend Frameworks and Libraries',
        cardTitle: 'Flask',
        author: 'Author: ethan thompson'

    },
    {
        imgSrc: 'assets/imgs/sql.png',
        cardDis: 'Databases and APIs',
        cardTitle: 'SQL',
        author: 'Author: madison davis'

    },
    {
        imgSrc: 'assets/imgs/nosql.png',
        cardDis: 'Databases and APIs',
        cardTitle: 'NoSQL',
        author: 'Author: isabella wilson'

    },
    {
        imgSrc: 'assets/imgs/restapi.jpeg',
        cardDis: 'Databases and APIs',
        cardTitle: 'REST APIs',
        author: 'Author: jacob garcia'

    },
    {
        imgSrc: 'assets/imgs/graphql.png',
        cardDis: 'Databases and APIs',
        cardTitle: 'GraphQL',
        author: 'Author: mia brown'

    },
    {
        imgSrc: 'assets/imgs/oauth.png',
        cardDis: 'Web Development Consept and T...',
        cardTitle: 'OAuth',
        author: 'Author: evelyn nguyen'

    },
    {
        imgSrc: 'assets/imgs/json.png',
        cardDis: 'Web Development Consept and T...',
        cardTitle: 'JSON',
        author: 'Author: liam hernandez'

    },
    {
        imgSrc: 'assets/imgs/ajax.gif',
        cardDis: 'Web Development Consept and T...',
        cardTitle: 'AJAX',
        author: 'Author: avery perez'

    },
    {
        imgSrc: 'assets/imgs/websockets.png',
        cardDis: 'Web Development Consept and T...',
        cardTitle: 'Websockets',
        author: 'Author: victoria kim'

    },
    {
        imgSrc: 'assets/imgs/responsive.gif',
        cardDis: 'Web Development Consept and T...',
        cardTitle: 'Responsive Design',
        author: 'Author: ryan jones'

    },
    {
        imgSrc: 'assets/imgs/accessibility.png',
        cardDis: 'Web Development Consept and T...',
        cardTitle: 'Accesibility',
        author: 'Author: samantha martin'

    },
    {
        imgSrc: 'assets/imgs/ux.jpeg',
        cardDis: 'Web Development Consept and T...',
        cardTitle: 'User Experience (UX)',
        author: 'Author: luke davis'

    },
    {
        imgSrc: 'assets/imgs/ui.png',
        cardDis: 'Web Development Consept and T...',
        cardTitle: 'User Interface (UI)',
        author: 'Author: grace wilson'

    },
    {
        imgSrc: 'assets/imgs/design-systems.jpeg',
        cardDis: 'Web Development Consept and T...',
        cardTitle: 'Design Systems',
        author: 'Author: noah martinez'

    },
    {
        imgSrc: 'assets/imgs/performance.png',
        cardDis: 'Web Development Consept and T...',
        cardTitle: 'Performance Optimization',
        author: 'Author: chloe taylor'

    },
    {
        imgSrc: 'assets/imgs/cross-browser.jpeg',
        cardDis: 'Web Development Consept and T...',
        cardTitle: 'Cross-Browser Compatibility',
        author: 'Author: david lee'

    },
    {
        imgSrc: 'assets/imgs/seo.jpeg',
        cardDis: 'Web Development Consept and T...',
        cardTitle: 'Search Engine Optimization (SEO)',
        author: 'Author: emily kim'

    },
    {
        imgSrc: 'assets/imgs/web-security.jpeg',
        cardDis: 'Web Development Consept and T...',
        cardTitle: 'Web Security',
        author: 'Author: gabriel hernandez'

    },
    {
        imgSrc: 'assets/imgs/testing.jpeg',
        cardDis: 'Web Development Consept and T...',
        cardTitle: 'Testing and Debugging',
        author: 'Author: avry perez'

    },
    {
        imgSrc: 'assets/imgs/ci-cd.jpeg',
        cardDis: 'Web Development Consept and T...',
        cardTitle: 'Continuous Integration/Continuous...',
        author: 'Author: madison davis'

    },
    {
        imgSrc: 'assets/imgs/devops.png',
        cardDis: 'Web Development Consept and T...',
        cardTitle: 'DevOps',
        author: 'Author: isabella wilson'

    },
    {
        imgSrc: 'assets/imgs/cloud.jpeg',
        cardDis: 'Web Development Consept and T...',
        cardTitle: 'cloud computing',
        author: 'Author: jacod garcia'

    },
    {
        imgSrc: 'assets/imgs/docker.png',
        cardDis: 'Web Development Consept and T...',
        cardTitle: 'Docker',
        author: 'Author: mia brown'

    },
    {
        imgSrc: 'assets/imgs/microservices.png',
        cardDis: 'Web Development Consept and T...',
        cardTitle: 'Microservices',
        author: 'Author: evelyn nguyen'

    },
    {
        imgSrc: 'assets/imgs/pwa.png',
        cardDis: 'Web Development Consept and T...',
        cardTitle: 'Progressive Web Apps (PWA)',
        author: 'Author: liam hernandez'

    },
    {
        imgSrc: 'assets/imgs/wai.jpeg',
        cardDis: 'Web Development Consept and T...',
        cardTitle: 'Web Accessibility Initiative (WAI)',
        author: 'Author: avery perez'

    },
    {
        imgSrc: 'assets/imgs/cms.png',
        cardDis: 'Web Development Consept and T...',
        cardTitle: 'Content Management Systems (CMS)',
        author: 'Author: victoria kim'

    },
    {
        imgSrc: 'assets/imgs/analytics.png',
        cardDis: 'Web Development Consept and T...',
        cardTitle: 'Web Analytics',
        author: 'Author: ryan jones'

    },

];

const cardContainer = document.getElementById('cardContainer');

cardsData.forEach(card => {
    const newCard = document.createElement('div');
    newCard.classList.add('card');

    newCard.innerHTML = `
            <a href="${card.link}">
                <img src="${card.imgSrc}" alt="Card Image">
            
                <div class="card-content">
                    <div class="card-title">
                        <h5>${card.cardDis}</h5>
                       <h4>${card.cardTitle}</h4> 
                    </div>
                    <div class="bottom-half">
                        <div class="rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                    </div>
                    <div class="author">${card.author}</div>
                    </div>
                </div>
            </a>
    `;

    cardContainer.appendChild(newCard);
});
