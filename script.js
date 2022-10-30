import scrollMothActive from './modules/scrollMoth.js';
import sectionAnimation from './modules/sectionAnimation.js';


scrollMothActive();
sectionAnimation();




    const search = document.querySelector('.fa-magnifying-glass')
    const pesquisa = document.querySelector('.pesquisa')
    const cart = document.querySelector('.fa-cart-shopping')
    const market = document.querySelector('.market')
    const login = document.querySelector('.fa-right-to-bracket')
    const backModal = document.querySelector('.backModal')
    const barMenu = document.querySelector('.fa-bars')
    const menuMobileH = document.querySelector('header .links-header')
    const closeMenu = document.querySelector('header .fa-xmark')


    const btnCloseModal = document.querySelector('.fa-xmark')

    console.log(search)

    function pesquisaPlay(){
        pesquisa.classList.toggle('active')
        if(pesquisa.classList.contains('active')){
            market.classList.remove('active_market')
            menuMobileH.classList.remove('menuMobileActive')
            barMenu.classList.remove('barRotate')
            
        }
    }

    function marketPlay(){
        market.classList.toggle('active_market')
        if(market.classList.contains('active_market')){
            pesquisa.classList.remove('active')
            menuMobileH.classList.remove('menuMobileActive')
            barMenu.classList.remove('barRotate')
        }
    }

    function loginPlay(){
        backModal.classList.toggle('active_modal')
    }

    function closeModal(){
        backModal.classList.remove('active_modal')
    }

    function menuMobileShow(event){
        menuMobileH.classList.toggle('menuMobileActive')
        barMenu.classList.toggle('barRotate')
        if(menuMobileH.classList.contains('menuMobileActive')){
            pesquisa.classList.remove('active')
            market.classList.remove('active_market')
            
        }
    }

    function closeMenuShow(event){
        menuMobileH.classList.remove('menuMobileActive')
        barMenu.classList.remove('barRotate')
    }


    barMenu.addEventListener('click', menuMobileShow)
    closeMenu.addEventListener('click', closeMenuShow)
    search.addEventListener('click', pesquisaPlay)
    cart.addEventListener('click', marketPlay)
    login.addEventListener('click', loginPlay)
    btnCloseModal.addEventListener('click', closeModal)

//modalSuave 

    const linksInternos = document.querySelectorAll('.links-filho a')

    console.log(linksInternos)


    function scrollMoth(event){
        event.preventDefault()
        const href = event.currentTarget.getAttribute('href')
        const section = document.querySelector(href)
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'end'
        })
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollMoth)
    })

    
  











