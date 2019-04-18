class Tab {
    constructor(element) {
      // Assign this.element to the passed in DOM element
      this.element = element;
  
      // Get the custom data attribute on the Link
      this.data = this.element.dataset.tab;
  
      // Using the custom data attribute get the associated Item element
      this.itemElement = document.querySelector(`.info-card[data-tab='${this.data}']`);
      
      // Using the Item element, create a new instance of the Card class
      this.card = new Card(this.itemElement);
      
      // Add a click event listener on this instance, calling the select method on click
      this.element.addEventListener("click", () => { 
        this.select()
       });
  
    }
    select() {
      // Get all of the elements with the tab class
      const links = document.querySelectorAll(".tab");
  
      // Using a loop or the forEach method remove the 'tab-selected' class from all of the links
        // links.forEach(function(element) {
        Array.from(links).forEach(function(element) {
        element.classList.remove("tab-selected");
      });
  
      // Add a class named "tabs-selected" to this link
      this.element.classList.add("tab-selected");
      
      // Call the select method on the item associated with this link
      this.card.select();
    }
  }
  
  class Card {
    constructor(element) {
      // Assign this.element to the passed in element
      this.element = element;
    }
  
    select() {
      // Select all ".card" elements from the DOM
      const items = document.querySelectorAll(".info-card");
      // Remove the class "card-selected" from each element
      // items.forEach(function(element) {
      Array.from(items).forEach(function(element) {
        //   element.style.display = "none";
        element.classList.add("card-hidden");
      });
      // Add a class named "card-selected" to this element
        // this.element.style.display = "flex";
      this.element.classList.remove("card-hidden");
    }
  }
  
  /* START HERE: 
  
  - Select all classes named ".tab" and assign that value to the links variable
  
  - With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList
  
  - In your .forEach() method's callback function, return a new instance of Tab and pass in each link as a parameter
  
  */
  
  const links = document.querySelectorAll(".tab");
  
  links.forEach(function (tab) {
    return new Tab (tab);
  });