class MobileNavBar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);

          // Alterado para representar uma única classe
        
        // Para não perder a referência de this à classe
        this.handleClick = this.handleClick.bind(this);
    }
    AnimateLinks(){
        this.navLinks.forEach((links, index) => {
            links.style.animation ? 
            (links.style.animation = "") 
            : (links.style.animation = `navLinkFade 0.5s ease fowards ${(index/7)*0.7}s`);
        })
    }
    handleClick() {
        console.log(this);
        if(this.navList.classList.contains("menu-active")){
            this.navList.classList.remove("menu-active");
            this.navList.classList.add("menu");
        }
        else{
            this.navList.classList.add("menu-active");
            this.navList.classList.remove("menu");
            this.AnimateLinks()
        }
        if(this.mobileMenu.classList.contains("mobile-menu-active")){
            this.mobileMenu.classList.remove("mobile-menu-active");
            this.mobileMenu.classList.add("mobile-menu");
        }
        else{
            this.mobileMenu.classList.add("mobile-menu-active");
            this.mobileMenu.classList.remove("mobile-menu");
        }
        
    }
    
    addClick() {
        this.mobileMenu.addEventListener("click", this.handleClick);
        
    }

    init() {
        if (this.mobileMenu) {
            this.addClick();
        }
        return this;
    }
}

const mobileNavBar = new MobileNavBar(".mobile-menu", "ul.menu", "ul.menu li");
mobileNavBar.init();
