class MyHeader extends HTMLElement {
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
          <a id="lately" href="" class="p-4">최근 본 상품</a>
          <a id="mypage" href="../html/mypage.html" class="p-4">마이페이지</a>
          <a id="login" href="../html/login.html" class="p-4">로그인</a>
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

customElements.define('my-header', MyHeader);
