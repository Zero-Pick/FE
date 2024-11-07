// displayItems.js
import { createMainItems2 } from '../components/main-items2.js';

// 샘플 상품 데이터
const products = [
  {
    name: '상품명1',
    sugarType: '제로슈거',
    rating: '4.22',
    reviewsCount: 14,
    price: '2,000원',
    reviewer: 'Emily',
    reviewText: 'The ZeroCal Energy Drink is...',
  },
  {
    name: '상품명2',
    sugarType: '제로슈거',
    rating: '4.5',
    reviewsCount: 18,
    price: '2,500원',
    reviewer: 'John',
    reviewText: 'Great zero-sugar alternative...',
  },
  {
    name: '상품명3',
    sugarType: '제로슈거',
    rating: '4.8',
    reviewsCount: 21,
    price: '3,000원',
    reviewer: 'Jane',
    reviewText: 'The best energy drink...',
  },
  {
    name: '상품명4',
    sugarType: '제로슈거',
    rating: '4.7',
    reviewsCount: 20,
    price: '3,500원',
    reviewer: 'Chris',
    reviewText: 'Perfect zero-calorie option...',
  },
];

export function displayItems() {
  const container = document.getElementById('products');

  products.forEach((product) => {
    container.innerHTML += createMainItems2(product);
  });
  container.appendChild(itemElement);
}
