export function createComparePopup(items, onClose) {
    // 팝업 HTML 요소 생성
    const popup = document.createElement('div');
    popup.id = 'compare-popup';
    popup.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 fade-in';
  
    // 팝업 내용 설정
    popup.innerHTML = `
      <div class="bg-white w-96 p-6 rounded shadow-md">
        <h2 class="text-lg font-bold mb-4">비교함</h2>
        <div class="border-t border-gray-200 pt-4 grid grid-cols-3 gap-2" id="compare-items">
          ${items
            .map(
              (item, index) => `
            <div class="relative">
              <div class="w-24 h-24 bg-gray-300"></div>
              <button class="absolute top-1 right-1 text-xs text-gray-500" data-index="${index}">✕</button>
            </div>`
            )
            .join('')}
          ${items.length < 3 ? `<div class="w-24 h-24 border border-gray-300"></div>` : ''}
        </div>
        <button class="mt-4 w-full bg-gray-500 text-white py-2 rounded" id="popup-close">닫기</button>
      </div>
    `;
  
    // 닫기 버튼 이벤트
    popup.querySelector('#popup-close').addEventListener('click', () => {
      popup.remove();
      if (onClose) onClose();
    });
  
    // 항목 제거 버튼 이벤트
    const itemButtons = popup.querySelectorAll('[data-index]');
    itemButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
        const index = e.target.dataset.index;
        items.splice(index, 1); // 항목 제거
        popup.remove(); // 기존 팝업 제거
        document.body.appendChild(createComparePopup(items, onClose)); // 새로 렌더링
      });
    });
  
    return popup;
  }
  