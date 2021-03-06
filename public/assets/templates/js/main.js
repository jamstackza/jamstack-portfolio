/*------------------------------------------------------------------

    01. Custom cursor
    02. Reveal animations
    03. Menu
    04. Sliders
    05. Header reveal
    06. AJAX contact form
    07. Charts
    08. Video
    09. AJAX page transition

-------------------------------------------------------------------*/

/*--------------------------------------------------
	01. Custom cursor
---------------------------------------------------*/

function cursorInit() {
    let clientX = -100;
    let clientY = -100;

    const innerCursor = document.querySelector(".cursor");
    const itemCursor = document.querySelector(".cursor-item");

    var cw = innerCursor.offsetWidth  / 2;
    var ch = innerCursor.offsetHeight / 2;

    const initCursor = () => {
        document.addEventListener("mousemove", e => {
            clientX = e.clientX;
            clientY = e.clientY;
        });

        const render = () => {
            innerCursor.style.transform =
                `translate(${clientX - cw}px, ${clientY - ch}px)`;

            requestAnimationFrame(render);
        };

        requestAnimationFrame(render);
    };

    initCursor();


    var button = document.querySelectorAll([
        'button',
        'a',
        '.click-target'
    ]);

    for (let i = 0; i < button.length; i++) {
        const el = button[i];
        
        el.addEventListener('mouseenter', e => {
            itemCursor.classList.add('cursor-big');
        })
        el.addEventListener('mouseleave', e => {
            itemCursor.classList.remove('cursor-big');
        })
    }

    var cursorColor = document.querySelectorAll('.cursor-color');

    for (let i = 0; i < cursorColor.length; i++) {
        const el = cursorColor[i];
        
        el.addEventListener('mouseenter', e => {
            itemCursor.classList.add('cursor-alt');
        })
        el.addEventListener('mouseleave', e => {
            itemCursor.classList.remove('cursor-alt');
        })
    }
}

/*--------------------------------------------------
	02. Reveal animations
---------------------------------------------------*/

var controller = new ScrollMagic.Controller();


function containerAnimation() {
    var animationContainer = document.querySelectorAll(
        '[data-animation-container]'
    );
    
    for (let i = 0; i < animationContainer.length; i++) {
        const el = animationContainer[i];
    
        new ScrollMagic.Scene({
            offset: '-100px',
            triggerElement: el,
            triggerHook: "onCenter",
        })
        .addTo(controller)
        .on('enter', function (event) {
            var animChilds = el.querySelectorAll('[data-animation-child]');
    
            el.classList.add('animated');
    
            for (let i = 0; i < animChilds.length; i++) {
                const el = animChilds[i];
    
                if (el.getAttribute('data-animation') == 'cover-down') {
                    el.classList.add('cover-down-anim');
                    continue;
                }
                else if (el.getAttribute('data-animation') == 'cover-right') {
                    el.classList.add('cover-right-anim');
                    continue;
                }
                else if (el.getAttribute('data-animation') == 'slide-down') {
                    el.classList.add('slide-anim');
                    continue;
                }
                else if (el.getAttribute('data-animation') == 'slide-left') {
                    el.classList.add('slide-anim');
                    continue;
                }
                else if (el.getAttribute('data-animation') == 'slide-up') {
                    el.classList.add('slide-anim');
                    continue;
                }
                else if (el.getAttribute('data-animation') == 'slide-right') {
                    el.classList.add('slide-anim');
                    continue;
                }
            }
    
        })
    }
}


function singleAnimation() {
    var animationTarget = document.querySelectorAll(
        '[data-animation]:not([data-animation-child])'
    );
    
    for (let i = 0; i < animationTarget.length; i++) {
        const el = animationTarget[i];
    
        new ScrollMagic.Scene({
            offset: '-100px',
            triggerElement: el,
            triggerHook: "onCenter",
        })
        .addTo(controller)
        .on('enter', function (event) {
    
            if (el.getAttribute('data-animation') == 'cover-down') {
                el.classList.add('cover-down-anim');
            }
            else if (el.getAttribute('data-animation') == 'cover-right') {
                el.classList.add('cover-right-anim');
            }
            else if (el.getAttribute('data-animation') == 'slide-down') {
                el.classList.add('slide-anim');
            }
            else if (el.getAttribute('data-animation') == 'slide-left') {
                el.classList.add('slide-anim');
            }
            else if (el.getAttribute('data-animation') == 'slide-up') {
                el.classList.add('slide-anim');
            }
            else if (el.getAttribute('data-animation') == 'slide-right') {
                el.classList.add('slide-anim');
            }
    
        })
    }
}
/*--------------------------------------------------
	03. Menu
---------------------------------------------------*/

function headerScrollReveal() {
    var firstSection = document.querySelector('#firstSection');
    var header = document.querySelector('.header');
    var timeout;
    
    new ScrollMagic.Scene({
        duration: firstSection.offsetHeight,
        triggerElement: firstSection,
        triggerHook: 'onLeave',
    })
    .addTo(controller)
    .on('enter', function (event) {
        header.classList.remove('header-background');
        header.classList.add('header-to-top');
        timeout = setTimeout(() => {
            header.classList.remove('header-fixed');
        }, 400);
    })
    .on('leave', function (event) {
        clearTimeout(timeout);
        header.classList.remove('header-to-top');
        header.classList.add('header-background');
        header.classList.add('header-fixed');
    });
}


function menuBackgroundToggle() {
    var menu_button  = document.querySelector('.menu');
    var menu_overlay = document.querySelector('.menu-overlay');
    var body         = document.body;
    var header       = document.querySelector('.header');

    menu_button.addEventListener('click', (e) => {
        body.classList.toggle('is-menu-open');
        body.classList.toggle('over-hidden');
    })

    menu_overlay.addEventListener('click', (e) => {
        body.classList.toggle('is-menu-open');
        body.classList.toggle('over-hidden');
    })
}


function menuLinksToggle() {
    var navItems = document.querySelectorAll('.navigation .navigation-item');
    var navList = document.querySelector('.navigation-list');
    var navItemsSubnav = [];


    for (let i = 0; i < navItems.length; i++) {
        const el = navItems[i];
        var elLink = el.querySelector('.nav-link');

        if (el.querySelector('.subnav')) {
            elLink.removeAttribute('href');
            navItemsSubnav.push(el);
        }
    }


    navItemsSubnav.forEach(el => {
        var elLink   = el.querySelector('.nav-link');
        var elSubnav = el.querySelector('.subnav');
        var elSubnavTitle = el.querySelector('.subnav-title');


        elLink.addEventListener('click', () => {
            navList.classList.toggle('nav-list-hidden');
            elSubnav.classList.toggle('subnav-active');
        });

        elSubnavTitle.addEventListener('click', () => {
            navList.classList.toggle('nav-list-hidden');
            elSubnav.classList.toggle('subnav-active');
        });
    });
}

/*--------------------------------------------------
	04. Sliders
---------------------------------------------------*/

function mainSliderInit() {
    var sliderMain = new Swiper ('.slider-main', {
        spaceBetween: 0,
        speed: 1300,
        effect: 'coverflow',
        parallax: true,
        autoplay: {
            delay: 9000
        },
    
        coverflowEffect: {
            rotate: 30,
            slideShadows: false,
        },
    
        pagination: {
            el: '.pagination',
            bulletClass: 'bullet',
            bulletActiveClass: 'bullet-active',
            clickable: true
        },
    
        navigation: {
            nextEl: '.btn-next',
            prevEl: '.btn-prev',
        },
    });


    var sliderMainItem = document.querySelector('.slider-main');
    var slides = sliderMainItem.querySelectorAll('.swiper-slide');
    var current = 0;


    sliderMain.on('transitionEnd', function() {
        if (sliderMain.activeIndex > current) {
            var content = slides[current].querySelector('.slide-content');
            content.classList.remove('content-visible');

            current = sliderMain.activeIndex;

            var content = slides[current].querySelector('.slide-content');
            content.classList.add('content-visible');

            var content = slides[0].querySelector('.slide-content');
            content.classList.remove('slide-content-intro');
            content.classList.add('slide-content-second');
        }

        if (sliderMain.activeIndex < current) {
            var content = slides[current].querySelector('.slide-content');
            content.classList.remove('content-visible');

            current = sliderMain.activeIndex;

            var content = slides[current].querySelector('.slide-content');
            content.classList.add('content-visible');
        }
    });
}


function mainSliderReveal() {
    var mainSlider = document.querySelector('.slider-main-reveal');
    mainSlider.classList.add('slider-main-reveal-animated');

    setTimeout(() => {
        if (document.querySelector('.slide-content-intro')) {
            var content = document.querySelector('.slide-content-intro');
            content.classList.add('content-visible');
        }
    
        if (document.querySelector('.slider-nav-intro')) {
            var sliderNav = document.querySelector('.slider-nav-intro');
            sliderNav.classList.add('slider-nav-visible');
        }
    }, 500);
}


function testimonialsSliderInit() {
    new Swiper ('.testimonials-slider', {
        speed: 1200,
        autoHeight: true,
        spaceBetween: 30,
        loop: true,

        pagination: {
            el: '.testimonials-pagination',
            bulletClass: 'bullet',
            bulletActiveClass: 'bullet-active',
            clickable: true,
        },
    })
}

/*--------------------------------------------------
	05. Header reveal
---------------------------------------------------*/

function headerReveal() {
    
    // Along with changing these variables, you need to change the values in CSS
    var preLoaderDuration = 900;
    var preLoaderDelay    = 0;

    var pageHeaderDuration = 900;
    var pageHeaderDelay    = 0;

    const baseDelay = 1150;

    var pageHeader = document.querySelector('.page-header');
    var slideOver = pageHeader.querySelectorAll('.slide-over');

    setTimeout(() => {
        for (let i = 0; i < slideOver.length; i++) {
            slideOver[i].classList.add('slide-over-animated');
        }

        document.body.classList.add('header-reveal');
    }, preLoaderDuration + preLoaderDelay + pageHeaderDuration + pageHeaderDelay - baseDelay);
}


function workHeaderReveal() {
    var workHeader = document.querySelector('.work-header-reveal');
    var sliderOver = workHeader.querySelectorAll('.slide-over');

    workHeader.classList.add('work-header-animated');

    setTimeout(() => {
        for (let i = 0; i < sliderOver.length; i++) {
            sliderOver[i].classList.add('slide-over-animated');
        }

        document.body.classList.add('header-reveal');
    }, 500);
}

/*--------------------------------------------------
	06. AJAX contact form
---------------------------------------------------*/

function contactForm() {
    var mainForm = document.getElementById('form');

    var outputField = document.querySelector('.output-message');
    var outputClass;
    var outputMessage;

    mainForm.addEventListener('submit', (e) => {
        e.preventDefault();

        var name    = document.getElementById('username').value;
        var email   = document.getElementById('email').value;
        var message = document.getElementById('message').value;


        outputField.classList.remove('alert-danger');
        outputField.classList.remove('alert-success');
        outputField.innerHTML = null;


        if (name == '' || email == '' || message == '') {
            outputClass = 'alert-danger';
            outputMessage = 'Fill in all fields!';

        } else if (!/^[a-zA-Z ]+$/.test(name)) {
            outputClass = 'alert-danger';
            outputMessage = 'Name field must contain only letters!';

        }  else {
            outputClass = 'alert-success';
            outputMessage = 'Email sent!';

            var request = new XMLHttpRequest();
            var requestData = `name=${name}&email=${email}&message=${message}`;

            request.open('POST', 'contact.php', true);
            request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            request.send(requestData);
        }

        outputField.classList.add(outputClass);
        outputField.innerHTML = outputMessage;
    })
}

/*--------------------------------------------------
	07. Charts
---------------------------------------------------*/

function chartsInit() {
    var chartArr = [];
    var charts = document.querySelectorAll('.skills-chart');

    for (let i = 0; i < charts.length; i++) {
        const el = charts[i];

        var progressBar = new ProgressBar.Circle(el, {
            color: '#FF003C',
            trailColor: '#828282',
            strokeWidth: 1.5,
            trailWidth: 1.5,
            duration: 2200,
            easing: 'easeInOutQuart',
            autoStyleContainer: false,
            text: {
                className: 'skills-percent',
            },
            step: (state, bar) => {
                bar.setText(Math.round(bar.value() * 100) + ' %');
            }
        });

        chartArr.push(progressBar);
    }

    for (let i = 0; i < chartArr.length; i++) {
        const el = chartArr[i];
        
        new ScrollMagic.Scene({
            offset: "-100px",
            triggerElement: charts[i],
            triggerHook: "onCenter",
        })
        .addTo(controller)
        .on("enter", (e) => {
                
            setTimeout(() => {
                var value = charts[i].getAttribute('data-value') / 100;
                el.animate(value);
            }, 300);

        });
    }
}

/*--------------------------------------------------
	08. Video
---------------------------------------------------*/

function videoInit() {
    var videos = document.querySelectorAll('.video');

    for (let i = 0; i < videos.length; i++) {
        const el = videos[i];
        
        var videoLink  = el.querySelector('.video-link');
        var videoInner = el.querySelector('.video-inner');
        var iframe     = videoInner.querySelector('iframe');

        videoLink.addEventListener('click', (e) => {
            e.preventDefault();
            document.body.classList.add('over-hidden');

            videoInner.classList.add('visible');
            videoInner.classList.add('video-anim');
        })

        videoInner.addEventListener('click', (e) => {
            document.body.classList.remove('over-hidden');

            var iframeSrc = iframe.getAttribute('src');
            iframe.setAttribute('src', iframeSrc);

            videoInner.classList.remove('video-anim');
            setTimeout(() => {
                videoInner.classList.remove('visible');
            }, 520);
        })

    }
}

/*--------------------------------------------------
	09. AJAX page transition
---------------------------------------------------*/

// Page transition animation

const jsOptions = [
    {
        from: '(.*)',
        to: '(.*)',
        out: (next) => {
            
            var preloader = document.querySelector('.preloader');
            preloader.classList.remove('preloader-out');
            preloader.classList.remove('preloader-hidden');

            preloader.classList.add('preloader-visible');

            document.body.classList.add('over-hidden');
            document.documentElement.classList.remove('smooth-scroll');

            setTimeout(() => {
                document.body.classList.remove('header-reveal');

                var header = document.querySelector('.header');
                header.classList.add('header-hidden');

                next();
            }, 900);
            
        },
        in: function(next) {

            var preloader = document.querySelector('.preloader');
            var header = document.querySelector('.page-header');
            var main = document.querySelector('.page-main');

            var menuHeader = document.querySelector('.header');
            menuHeader.classList.add('header-hidden');


            setTimeout(() => {
                menuHeader.classList.remove('header-hidden');
            }, 1600);


            if (document.querySelector('.page-header')) {
                header.classList.add('page-header-to-bot');

                setTimeout(() => {
                    var header = document.querySelector('.page-header');
                    header.classList.remove('page-header-to-bot');
                }, 150);
            }


            if (document.querySelector('.page-main')) {
                main.classList.add('page-main-to-bot');

                setTimeout(() => {
                    var main = document.querySelector('.page-main');
                    main.classList.remove('page-main-to-bot');
                }, 200);
            }


            document.body.classList.remove('over-hidden');
            
            preloader.classList.remove('preloader-visible');
            preloader.classList.add('preloader-out');
            next();

        },
    }
];


// Swup plugin Init

if (document.getElementById('swup')) {
    var swupScroll = new SwupScrollPlugin({
        doScrollingRightAway: false,
        animateScroll: false,
    });
    
    const options = {
        linkSelector: 'a[data-swup]',
        cache: true,
        plugins: [
            swupScroll,
            new SwupJsPlugin(jsOptions),
        ],
    };

    const swup = new Swup(options);
    
    swup.on('contentReplaced', init);

    swup.on('clickLink', () => {
        document.body.classList.remove('is-menu-open');
        document.getElementById('cursor').classList.remove('cursor-big');
    });
}


// This function reloads all scripts when navigating through pages

function init() {
    if (document.querySelector('.navigation')) {
        menuBackgroundToggle();
        menuLinksToggle();
    }

    
    if (document.querySelector('.header')) {
        headerScrollReveal();
    }


    if (document.querySelector('.cursor')) {
        cursorInit();
    }


    if (document.querySelector('.to-top-button')) {
        setTimeout(() => {
            var firstSection = document.querySelector('#firstSection');
            var toTopButton  = document.querySelector('.to-top-button');
            var header = document.querySelector('.header');
            var timeout;

        
            toTopButton.addEventListener('click', () => {
                document.documentElement.classList.add('smooth-scroll');
                firstSection.scrollIntoView();
                setTimeout(() => {
                    document.documentElement.classList.remove('smooth-scroll');
                }, 600);


                header.classList.remove('header-background');
                header.classList.add('header-to-top');
                timeout = setTimeout(() => {
                    header.classList.remove('header-fixed');
                }, 400);
            })
        
            new ScrollMagic.Scene({
                duration: firstSection.offsetHeight,
                triggerElement: firstSection,
                triggerHook: 'onCenter',
            })
            .addTo(controller)
            .on('enter', function (event) {
                toTopButton.classList.remove('visible');
            })
            .on('leave', function (event) {
                toTopButton.classList.add('visible');
            })
        }, 400);
    }


    if (document.querySelector('.slider-main')) {
        mainSliderInit();
    }


    if (document.querySelector('.slider-main-reveal')) {
        document.body.classList.add('over-hidden');

        window.addEventListener('load', () => {
            var number = document.querySelector('.preloader-num');
            var count = 0;
            
            var counter = setInterval(() => {
                if (count < 101) {
                    number.innerHTML = count;
                    count++;
                } else {
                    clearInterval(counter);


                    setTimeout(() => {
                        number.classList.add('preloader-num-out');
                    }, 200);

                    setTimeout(() => {
                        var preloader = document.querySelector('.preloader');
                        preloader.classList.add('preloader-hidden');

                        document.body.classList.remove('over-hidden');
                    }, 200 + 400);

                    setTimeout(() => {
                        mainSliderReveal();
    
                        setTimeout(() => {
                            document.body.classList.add('header-reveal');
                        }, 1400);
                    }, 200 + 400 + 200);

                }
            }, 20);
        })
    }

    
    if (document.readyState === 'complete' &&
        document.querySelector('.slider-main-reveal')) {
        mainSliderReveal();

        setTimeout(() => {
            document.body.classList.add('header-reveal');
        }, 1400);
    }


    if (document.querySelector('.page-header')) {
        var preloader = document.querySelector('.preloader');
        preloader.classList.remove('preloader-visible');
        headerReveal();
    }


    if (document.querySelector('.work-header')) {
        var preloader = document.querySelector('.preloader');
        preloader.classList.remove('preloader-visible');
        workHeaderReveal();
    }


    if (document.querySelector('.testimonials-slider')) {
        testimonialsSliderInit();
    }



    if (!document.querySelector('.page-header') &&
        !document.querySelector('.slider-main') &&
        !document.querySelector('.video-main') &&
        !document.querySelector('.work-header')) {
        document.body.classList.add('header-reveal');
    }


    if (document.querySelector('[data-animation-container]')) {
        containerAnimation();
    }

    if (document.querySelector('[data-animation]:not([data-animation-child])')) {
        singleAnimation();
    }


    if (document.getElementById('form')) {
        contactForm();
    }


    new LazyLoad({
        elements_selector: ".lazy",
    });


    chartsInit();
    videoInit();
}


// Init all functions on start

init();

