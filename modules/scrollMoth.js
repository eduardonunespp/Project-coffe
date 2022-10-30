
    export default function scrollMothActive(){

        const linksInternos = document.querySelectorAll('.links-filho a')

    console.log(linksInternos)

    function scrollMoth(event){
        event.preventDefault()
        const href = event.currentTarget.getAttribute('href')
        const section = document.querySelector(href)
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollMoth)
    })

    }

