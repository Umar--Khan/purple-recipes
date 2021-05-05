class Breadcrumbs {
  constructor(selector) {
    selector.innerHTML = `
    <ul>
        <li>Home</li>
        <span> / </span>
        <li>Primary</li>
        <span> / </span>
        <li>Tertiary</li>
    </ul>
    `;
  }
}

export default Breadcrumbs;
