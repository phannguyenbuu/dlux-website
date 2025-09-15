import { faker } from '@faker-js/faker';

export function generateFakeProducts(num = 10) {
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const materials = ['Cotton', 'Polyester', 'Silk', 'Wool', 'Linen'];

  let products = [];

  for (let i = 0; i < num; i++) {
    const productName = faker.commerce.productName();
    const basePrice = faker.number.int({ min: 100000, max: 2000000 });
    const productMaterial = faker.helpers.arrayElement(materials);

    const sizePrice = sizes.reduce((acc, size, index) => {
      acc[size] = basePrice + index * 50000;
      return acc;
    }, {});

    const description = faker.commerce.productDescription();

    // Tạo ảnh ngẫu nhiên sản phẩm (fake)
    // faker.image.imageUrl() có thể lấy hình ảnh ngẫu nhiên, bạn có thể thay bằng domain hình thật nếu có
    const imageUrl = faker.image.urlLoremFlickr({ category: 'fashion' });

    products.push({
      id: faker.string.uuid(),
      name: productName,
      material: productMaterial,
      basePrice,
      sizePrice,
      description,
      imageUrl
    });
  }

  return products;
}


