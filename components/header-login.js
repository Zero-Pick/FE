class MyLoginHeader extends HTMLElement {
  connectedCallback() {
    this.render();
    this.addEventListeners();
  }

  adoptCallback() {}

  render() {
    this.innerHTML = `
    <header>
      <nav class="flex items-center justify-between p-4 px-20 py-5 shadow-md">
        <img
          id="logo"
          src="../images/logo1.png"
          alt="zeropick logo"
          class="w-1/6 hover:cursor-pointer"
        />
        <div class="flex space-x-4 font-bold">
          <a id="login" href="../html/login.html" class="p-4">로그인</a>
          <a id="join" href="../html/signup.html" class="p-4">회원가입</a>
        </div>
      </nav>
    </header>
      `;
  }

  addEventListeners() {
    this.querySelector('#logo').addEventListener('click', () => {
      window.location.href = '../html/index.html';
    });
  }
}

customElements.define('my-login-header', MyLoginHeader);
