class Tab {
    constructor(element) {
        this.element = element;

        this.data = this.element.dataset.tab;

        this.itemElement = document.querySelector(`.info-card[data-tab='${this.data}']`);

        this.card = new Card(this.itemElement);

        this.element.addEventListener("click", () => {
            this.select();
        });
    }
    select() {
        const links = document.querySelectorAll(".tab");

        Array.from(links).forEach(function (element) {
            element.classList.remove("tab-selected");
        });

        this.element.classList.add("tab-selected");

        this.card.select();
    }
}

class Card {
    constructor(element) {
        this.element = element;
    }
    select() {
        const items = document.querySelectorAll(".info-card");

        Array.from(items).forEach(function (element) {
            element.classList.add("card-hidden");
        });

        this.element.classList.remove("card-hidden");
    }
}



const links = document.querySelectorAll(".tab");

links.forEach(function (tab) {
    return new Tab(tab);
});
