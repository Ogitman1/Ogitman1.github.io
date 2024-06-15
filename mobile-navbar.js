class MobileNavBar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);

        this.activeClass = "menu-active"; // Alterado para representar uma única classe
        this.activeMenu = "mobile-menu-active"
        // Para não perder a referência de this à classe
        this.handleClick = this.handleClick.bind(this);
    }
    AnimateLinks(){
        this.navLinks.forEach((links) => {
            links.style.animation ? 
            (links.style.animation = " ") 
            : (links.style.animation = ` navLinkFade 0.5s ease fowards 0.3s `)
        })
    }
    handleClick() {
        console.log(this);
        if(this.navList.classList.contains(this.activeClass)){
            this.navList.classList.remove(this.activeClass);
            this.navList.classList.add("menu");
        }
        else{
            this.navList.classList.add(this.activeClass);
            this.navList.classList.remove("menu");
        }
        if(this.mobileMenu.classList.contains(this.activeMenu)){
            this.mobileMenu.classList.remove(this.activeMenu);
            this.mobileMenu.classList.add("mobile-menu");
        }
        else{
            this.mobileMenu.classList.add(this.activeMenu);
            this.mobileMenu.classList.remove("mobile-menu");
        }
        this.AnimateLinks()
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

const mobileNavBar = new MobileNavBar(".mobile-menu", ".menu", ".menu li");
mobileNavBar.init();
