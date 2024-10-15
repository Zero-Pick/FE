export function createArticle(news) {
    return `
      <div class="border p-4">
        <div class="flex">
          <!-- 이미지 -->
          <div class="bg-gray-300 w-24 h-24 mr-4"></div>
          <!-- 기사 제목과 내용 -->
          <div>
            <h2 class="font-bold text-lg mb-2">${news.title}</h2>
            <p class="text-sm text-gray-600">${news.content}</p>
          </div>
        </div>
      </div>
    `;
  }
 