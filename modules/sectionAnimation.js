
export default function sectionAnimation(){
    const sections = document.querySelectorAll('[data-set="animation"]')
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll(){
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionVisible = (sectionTop - windowMetade) < 0;
            if(sectionVisible){
                section.classList.add('section_anima')
            }
            else{
                section.classList.remove('section_anima')
            }
        })
    }

    
    window.addEventListener('scroll', animaScroll)
}
