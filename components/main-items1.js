export function createMainItems1(product) {
    return `
      <div class="bg-white p-4">
        <!-- 이미지 -->
        <div>
          <div class="bg-gray-300 h-40 mb-4"></div> 
        </div>
        <!-- 상품 정보 -->
        <div id="zero" class="bg-black text-white text-xs w-1/3">${product.sugarType}</div> 
        <div class="flex justify-between mt-2">
          <h2 class="font-bold mb-2">${product.name}</h2>
          <button class="flex items-center bg-purple-100 text-purple-700 px-2 py-1 rounded">찜버튼</button>
        </div>
        <!-- 평점 가격 정보 -->
        <div class="flex justify-between mt-2">
          <span class="text-sm text-yellow-500">★ ${product.rating} (${product.reviewsCount})</span>
          <span class="text-sm text-gray-500">${product.price}</span>
        </div>
        <div id="review">
          <div class="bg-gray-100 p-4 flex items-center space-x-4">
            <!-- 프로필  -->
            <div class="w-10 h-10 bg-gray-300 rounded-full"></div>
            <!-- 사용자 정보 및 별점 -->
            <div class="flex-1">
              <div class="flex justify-between items-center">
                <span class="font-semibold">${product.reviewer}</span>
                <span class="text-yellow-500">★★★★★</span>
              </div>
              <p class="text-gray-600 text-sm mt-1">${product.reviewText}</p>
            </div>
          </div>
        </div>
      </div>
    `;
}
