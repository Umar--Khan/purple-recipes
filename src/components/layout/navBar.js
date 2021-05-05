import LOGO from '../../assets/logo-full-white.png';

export default class NavBar {
  constructor(selector) {
    selector.innerHTML = `
    <div class="container">
      <img class="logo" src="${LOGO}" alt="logo"/>
    </div>
    `;
  }
}
