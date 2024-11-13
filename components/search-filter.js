class SearchFilter extends HTMLElement {
  constructor() {
    super();
    this.activeFilters = new Set();
    this.excludedFilters = new Set();
  }

  connectedCallback() {
    this.render();
    this.addEventListeners();
  }

  render() {
    this.innerHTML = `
      <div class="flex items-center justify-between my-4 mt-10">
        <div class="flex items-center">
          <button id="zero-sugar" class="bg-gray-200 px-3 py-2 mr-3">제로슈거</button>
          <button id="zero-calories" class="bg-gray-200 px-3 py-2 mr-3">제로칼로리</button>
          <button id="blood-sugar-management" class="bg-gray-200 px-3 py-2">혈당 관리 인증</button>
        </div>
        <div class="flex items-center space-x-4">
          <div id="filter-options-toggle" class="cursor-pointer border-2 border-black p-2 flex items-center relative">
            <p>이런 상품을 찾아요</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-1">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
            <div id="filter-options" class="hidden absolute top-full mt-2 right-0 bg-white p-4 border shadow-lg w-80">
              <div class="grid grid-cols-3 gap-2 mb-4">
                <button class="filter-option bg-gray-200 px-3 py-2">달달해요</button>
                <button class="filter-option bg-gray-200 px-3 py-2">달지 않고 깔끔해요</button>
                <button class="filter-option bg-gray-200 px-3 py-2">식사 대신 든든해요</button>
                <button class="filter-option bg-gray-200 px-3 py-2">간식으로 딱 좋아요</button>
                <button class="filter-option bg-gray-200 px-3 py-2">다이어트에 딱이에요</button>
                <button class="filter-option bg-gray-200 px-3 py-2">혈당 걱정 덜어줘요</button>
                <button class="filter-option bg-gray-200 px-3 py-2">가성비가 좋아요</button>
                <button class="filter-option bg-gray-200 px-3 py-2">맛의 종류가 다양해요</button>
                <button class="filter-option bg-gray-200 px-3 py-2">휴대하기 편해요</button>
              </div>
              <div class="flex justify-end space-x-2">
                <button id="close-filter" class="text-red-500">닫기</button>
                <button id="apply-filter" class="text-white bg-red-500 px-3 py-1">적용</button>
              </div>
            </div>
          </div>
          <div id="exclude-sweetener-toggle" class="cursor-pointer border-2 border-black p-2 flex items-center relative">
            <p>제외할 대체감미료</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-1">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
            <div id="exclude-sweetener-options" class="hidden absolute top-full mt-2 right-0 bg-white p-4 border shadow-lg w-80">
              <div class="grid grid-cols-2 gap-2 mb-4">
                <button class="exclude-option bg-gray-200 px-3 py-2">감미료 A</button>
                <button class="exclude-option bg-gray-200 px-3 py-2">감미료 B</button>
                <button class="exclude-option bg-gray-200 px-3 py-2">감미료 C</button>
                <button class="exclude-option bg-gray-200 px-3 py-2">감미료 D</button>
                <button class="exclude-option bg-gray-200 px-3 py-2">감미료 E</button>
                <button class="exclude-option bg-gray-200 px-3 py-2">감미료 F</button>
              </div>
              <div class="flex justify-end space-x-2">
                <button id="close-exclude" class="text-red-500">닫기</button>
                <button id="apply-exclude" class="text-white bg-red-500 px-3 py-1">적용</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  addEventListeners() {
    const toggleButtonState = (button, filterName) => {
      if (this.activeFilters.has(filterName)) {
        this.activeFilters.delete(filterName);
        button.classList.remove('bg-gray-400');
      } else {
        this.activeFilters.add(filterName);
        button.classList.add('bg-gray-400');
      }
    };

    this.querySelector('#zero-sugar').addEventListener('click', () =>
      toggleButtonState(this.querySelector('#zero-sugar'), 'zero-sugar')
    );
    this.querySelector('#zero-calories').addEventListener('click', () =>
      toggleButtonState(this.querySelector('#zero-calories'), 'zero-calories')
    );
    this.querySelector('#blood-sugar-management').addEventListener(
      'click',
      () =>
        toggleButtonState(
          this.querySelector('#blood-sugar-management'),
          'blood-sugar-management'
        )
    );

    this.querySelector('#filter-options-toggle').addEventListener('click', () =>
      this.toggleFilterOptions()
    );
    this.querySelector('#exclude-sweetener-toggle').addEventListener(
      'click',
      () => this.toggleExcludeOptions()
    );

    this.querySelector('#filter-options #close-filter').addEventListener(
      'click',
      (e) => {
        e.stopPropagation();
        this.closeFilterOptions();
      }
    );
    this.querySelector(
      '#exclude-sweetener-options #close-exclude'
    ).addEventListener('click', (e) => {
      e.stopPropagation();
      this.closeExcludeOptions();
    });

    this.querySelectorAll('.filter-option').forEach((button) => {
      button.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleFilter(button);
      });
    });

    this.querySelectorAll('.exclude-option').forEach((button) => {
      button.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleExclude(button);
      });
    });
  }

  toggleFilterOptions() {
    const filterOptions = this.querySelector('#filter-options');
    const excludeOptions = this.querySelector('#exclude-sweetener-options');
    filterOptions.classList.toggle('hidden');
    excludeOptions.classList.add('hidden');
  }

  toggleExcludeOptions() {
    const excludeOptions = this.querySelector('#exclude-sweetener-options');
    const filterOptions = this.querySelector('#filter-options');
    excludeOptions.classList.toggle('hidden');
    filterOptions.classList.add('hidden');
  }

  closeFilterOptions() {
    this.querySelector('#filter-options').classList.add('hidden');
  }

  closeExcludeOptions() {
    this.querySelector('#exclude-sweetener-options').classList.add('hidden');
  }

  toggleFilter(button) {
    const filterText = button.innerText;
    if (this.activeFilters.has(filterText)) {
      this.activeFilters.delete(filterText);
      button.classList.remove('bg-gray-400');
    } else {
      this.activeFilters.add(filterText);
      button.classList.add('bg-gray-400');
    }
  }

  toggleExclude(button) {
    const excludeText = button.innerText;
    if (this.excludedFilters.has(excludeText)) {
      this.excludedFilters.delete(excludeText);
      button.classList.remove('bg-gray-400');
    } else {
      this.excludedFilters.add(excludeText);
      button.classList.add('bg-gray-400');
    }
  }
}

customElements.define('search-filter', SearchFilter);
