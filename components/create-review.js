class CreateReview extends HTMLElement {
  connectedCallback() {
    this.render();
    this.addEventListeners();
  }

  render() {
    this.innerHTML = `
      <div
      class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    >
      <div class="bg-white rounded-lg w-4/5 max-w-3xl p-8 shadow-lg relative">
        <!-- 닫기 버튼 -->
        <button
          id="close-button"
          class="absolute top-4 right-4 text-black focus:outline-none w-10 h-10 text-2xl flex justify-center items-center"
        >
          &times;
        </button>

        <!-- 제목 -->
        <div class="flex justify-start mb-6">
          <h1 class="text-2xl font-bold">리뷰 작성하기</h1>
          <p class="ml-3 mt-2 text-gray-600">| 라라스윗 저당 초코우유</p>
        </div>

        <!-- 별점 -->
        <div class="mb-4">
          <h2 class="text-lg font-semibold">별점</h2>
          <div class="flex items-center">
            <div id="star-rating" class="flex space-x-1"></div>
            <span id="rating-value" class="ml-2 mt-2 text-lg text-black"
              >0</span
            >
          </div>
        </div>

        <!-- 태그 선택 -->
        <div class="mb-6">
          <div class="flex justify-start">
            <h2 class="text-lg font-semibold mb-2">태그</h2>
            <p class="text-sm text-gray-600 ml-2 mt-1">
              어울리는 키워드를 골라주세요. (긍정 부정 각각 최소 1개)
            </p>
          </div>
          <div class="flex flex-wrap gap-2">
            <button
              class="tag-button bg-gray-200 px-3 py-1 rounded-md text-sm text-gray-600 hover:bg-gray-300"
            >
              달달해요
            </button>
            <button
              class="tag-button bg-gray-200 px-3 py-1 rounded-md text-sm text-gray-600 hover:bg-gray-300"
            >
              담백하고 깔끔해요
            </button>
            <button
              class="tag-button bg-gray-200 px-3 py-1 rounded-md text-sm text-gray-600 hover:bg-gray-300"
            >
              식사 대신 든든해요
            </button>
            <button
              class="tag-button bg-gray-200 px-3 py-1 rounded-md text-sm text-gray-600 hover:bg-gray-300"
            >
              간식으로 딱 좋아요
            </button>
            <button
              class="tag-button bg-gray-200 px-3 py-1 rounded-md text-sm text-gray-600 hover:bg-gray-300"
            >
              다이어트에 딱이에요
            </button>
            <!-- 추가 태그들 -->
          </div>
        </div>

        <!-- 리뷰 내용 -->
        <div class="mb-4">
          <h2 class="text-lg font-semibold mb-2">리뷰 내용</h2>
          <textarea
            class="w-full border rounded-md p-3 text-sm bg-gray-100"
            placeholder="리뷰 내용을 작성해주세요."
          ></textarea>
        </div>

        <!-- 사진 추가 -->
        <div class="mb-4">
          <h2 class="text-lg font-semibold mb-2">사진 추가</h2>
          <div class="flex space-x-2">
            <button
              id="upload-photo"
              class="w-24 h-24 border rounded-md flex justify-center items-center bg-gray-100 text-gray-600 focus:outline-none"
            >
              + 사진 추가
            </button>
            <div
              class="relative w-24 h-24 border rounded-md flex justify-center items-center bg-gray-100"
            >
              <img
                src="https://via.placeholder.com/96"
                alt="Uploaded Image 1"
                class="object-cover w-full h-full rounded-md"
              />
              <button
                class="absolute top-0 right-0 text-black w-6 h-6 flex justify-center items-center rounded-full hover:bg-gray-600 focus:outline-none"
              >
                &times;
              </button>
            </div>
            <div
              class="relative w-24 h-24 border rounded-md flex justify-center items-center bg-gray-100"
            >
              <img
                src="https://via.placeholder.com/96"
                alt="Uploaded Image 2"
                class="object-cover w-full h-full rounded-md"
              />
              <button
                class="absolute top-0 right-0 text-black w-6 h-6 flex justify-center items-center rounded-full hover:bg-gray-600 focus:outline-none"
              >
                &times;
              </button>
            </div>
          </div>
        </div>

        <!-- 구매 의사 -->
        <div class="mb-4">
          <label class="inline-flex items-center">
            <span class="text-gray-black">다음에 또 구매하고 싶어요!</span>
            <input
              type="checkbox"
              id="autologin"
              class="ml-2 w-4 h-4 appearance-none border border-main-01 rounded bg-transparent"
              onclick="if(this.checked){this.style.backgroundColor='#EE4E34';this.style.backgroundImage='url(../images/checked.png)';this.style.backgroundSize='80%';this.style.backgroundPosition='center';this.style.backgroundRepeat='no-repeat';}else{this.style.backgroundColor='transparent';this.style.backgroundImage='none';}"
            />
          </label>
        </div>

        <!-- 등록 버튼 -->
        <div class="flex justify-end">
          <button
            class="bg-main-01 text-white px-6 py-2 rounded-md focus:outline-none"
          >
            등록
          </button>
        </div>
      </div>
    </div>
    `;
  }

  addEventListeners() {
    // 닫기 버튼
    this.querySelector('#close-button').addEventListener('click', () => {
      this.remove();
    });

    // 별점 생성
    const starRatingContainer = this.querySelector('#star-rating');
    const ratingValue = this.querySelector('#rating-value');
    const stars = Array.from({ length: 5 }, (_, i) => {
      const star = document.createElement('span');
      star.className =
        'text-gray-400 cursor-pointer text-2xl hover:text-red-500';
      star.textContent = '★';
      star.dataset.star = i + 1;

      star.addEventListener('click', () => {
        const rating = parseInt(star.dataset.star, 10);
        ratingValue.textContent = rating;
        Array.from(starRatingContainer.children).forEach((child, index) => {
          child.classList.toggle('text-red-500', index < rating);
          child.classList.toggle('text-gray-400', index >= rating);
        });
      });

      return star;
    });

    starRatingContainer.append(...stars);
  }
}

customElements.define('create-review', CreateReview);