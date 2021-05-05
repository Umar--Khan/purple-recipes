class Navigation {
  constructor(selector) {
    selector.innerHTML = `
            <button class="next-btn">Next</button>
            <button class="prev-btn">Previous</button>
        `;
  }
}

export default Navigation;
