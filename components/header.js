class MyHeader extends HTMLElement {
  connectedCallback() {
    this.render();
    this.addEventListeners();
  }

  render() {
    this.innerHTML = `
    <header>
      <nav class="flex items-center justify-between p-4 px-20 py-5 shadow-md relative">
        <img
          id="logo"
          src="../images/logo1.png"
          alt="zeropick logo"
          class="w-1/6 hover:cursor-pointer"
        />
        <div class="flex space-x-4 font-bold relative">
          <a id="lately" href="#" class="p-4">찜한 상품</a>
          <a id="mypage" href="#" class="p-4 relative">마이페이지</a>
          <a id="login" href="../html/login.html" class="p-4">로그인</a>
        </div>
      </nav>
      <!-- 드롭다운 박스 -->
      <div id="dropdown" class="hidden absolute right-20 mt-4 w-80 bg-white shadow-lg rounded-lg p-4 z-10">
        <!-- 상단 정보 -->
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center">
            <img src="../images/logo2.png" alt="logo" class="h-6 mr-2" />
            <p class="font-semibold text-lg">
              닉네임님, <span class="text-main-01 font-bold">건강</span>하세요!
            </p>
          </div>
          <!-- 내 정보 버튼 -->
          <button
            id="myInfoBtn"
            class="text-gray-600 border border-gray-300 px-2 py-1 rounded hover:bg-gray-100"
          >
            내 정보
          </button>
        </div>
        <!-- 숫자 정보 -->
        <div class="flex justify-between text-center border-t border-b py-4">
          <button id="likedProducts" class="w-1/2 border-r hover:bg-gray-100 p-2">
            <p class="text-gray-500 text-sm">찜한 제품</p>
            <p class="text-red-500 font-bold text-2xl">13</p>
          </button>
          <button id="myReviews" class="w-1/2 hover:bg-gray-100 p-2">
            <p class="text-gray-500 text-sm">내가 쓴 리뷰</p>
            <p class="text-red-500 font-bold text-2xl">2</p>
          </button>
        </div>
        <!-- 메뉴 항목 -->
        <button id="productStatus" class="w-full flex justify-between items-center py-2 px-2 hover:bg-gray-100 rounded-lg">
          <span class="text-gray-700 text-left">제품 등록 현황</span>
          <span class="text-gray-400">&gt;</span>
        </button>
        <button id="modifyInfo" class="w-full flex justify-between items-center py-2 px-2 hover:bg-gray-100 rounded-lg">
          <span class="text-gray-700 text-left">정보 수정 요청 현황</span>
          <span class="text-gray-400">&gt;</span>
        </button>
        <!-- 로그아웃 -->
        <div class="text-center text-gray-400 mt-4 hover:text-black cursor-pointer">
          로그아웃
        </div>
      </div>
    </header>
    `;
  }

  addEventListeners() {
    // 로고 클릭 이벤트
    this.querySelector('#logo').addEventListener('click', () => {
      window.location.href = '../html/index.html';
    });

    // 마이페이지 버튼 클릭 시 드롭다운 토글
    const mypageButton = this.querySelector('#mypage');
    const dropdown = this.querySelector('#dropdown');

    mypageButton.addEventListener('click', (e) => {
      e.preventDefault(); // 기본 링크 동작 방지
      dropdown.classList.toggle('hidden');
    });

    // 내 정보 버튼 클릭 이벤트
    this.querySelector('#myInfoBtn').addEventListener('click', () => {
      window.location.href = '../html/mypage-profile-1.html';
    });

    // 찜한 제품 클릭 이벤트
    this.querySelector('#likedProducts').addEventListener('click', () => {
      window.location.href = '../html/mypage-liked.html';
    });

    // 내가 쓴 리뷰 클릭 이벤트
    this.querySelector('#myReviews').addEventListener('click', () => {
      window.location.href = '../html/mypage-review.html';
    });

    // 제품 등록 현황 클릭 이벤트
    this.querySelector('#productStatus').addEventListener('click', () => {
      window.location.href = '../html/mypage-product.html';
    });

    // 정보 수정 요청 현황 클릭 이벤트
    this.querySelector('#modifyInfo').addEventListener('click', () => {
      window.location.href = '../html/mypage-modify-information.html';
    });

    // 다른 곳 클릭 시 드롭다운 닫기
    document.addEventListener('click', (e) => {
      if (!e.target.closest('#mypage') && !e.target.closest('#dropdown')) {
        dropdown.classList.add('hidden');
      }
    });
  }
}

customElements.define('my-header', MyHeader);
