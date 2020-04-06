class UserCard extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<h3>John Doe</h3>`;
    this.innerHTML = `<h3>${this.getAttribute("name")}</h3>`;
  }
}
window.customElements.define("user-card", UserCard);
