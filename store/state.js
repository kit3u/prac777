// store/state.js
var products = [
  { id: 1,  name: 'Квіткова сукня',    price: '1299 грн', desc: 'Елегантна сукня з квітковим принтом. Ідеально для особливих подій.',               img: '10.png', images: ['10.png'] },
  { id: 2,  name: 'Джинсові шорти',    price: '899 грн',  desc: 'Стильні широкі джинсові шорти світлого кольору. Комфорт та стиль.',                img: '1.png',  images: ['1.png']  },
  { id: 3,  name: 'Рожевий топ',       price: '749 грн',  desc: 'Ніжний рожевий топ з рюшами та квітковим принтом.',                                img: '2.png',  images: ['2.png']  },
  { id: 4,  name: 'Жилет класичний',   price: '1099 грн', desc: 'Чорний класичний жилет. Підходить для офісу та вечірніх виходів.',                  img: '3.png',  images: ['3.png']  },
  { id: 5,  name: 'Піджак оверсайз',   price: '2199 грн', desc: 'Чорний піджак вільного крою. Базова річ для будь-якого гардеробу.',                  img: '4.png',  images: ['4.png']  },
  { id: 6,  name: 'Широкі штани',      price: '1399 грн', desc: 'Чорні широкі штани з високою посадкою. Зручні та стильні.',                         img: '5.png',  images: ['5.png']  },
  { id: 7,  name: 'Сукня максі',       price: '1799 грн', desc: 'Молочна сукня максі з драпіруванням. Витончений та сучасний образ.',                 img: '6.png',  images: ['6.png']  },
  { id: 8,  name: 'Коричнева спідниця',price: '999 грн',  desc: "Шоколадна спідниця з зав'язкою. М'який матеріал, вільний крій.",                    img: '7.png',  images: ['7.png']  },
  { id: 9,  name: 'Джинсова сорочка',  price: '1199 грн', desc: "Блакитна джинсова сорочка з зав'язкою. Легка та стильна.",                           img: '8.png',  images: ['8.png']  },
  { id: 10, name: 'Широкі джинси',     price: '1599 грн', desc: 'Світлі широкі джинси з високою посадкою. Трендовий та зручний фасон.',               img: '9.png',  images: ['9.png']  }
];

var state = {
  currentPage: 'home',
  currentProduct: null,
  sliderIndex: 0,
  formData: { name: '', email: '', message: '' }
};

function setState(partial) {
  Object.assign(state, partial);
}

function getProductById(id) {
  return products.find(function(p) { return p.id === id; });
}

function getSimilarProducts(excludeId, limit) {
  limit = limit || 4;
  return products.filter(function(p) { return p.id !== excludeId; }).slice(0, limit);
}

function setCurrentProduct(id) {
  var product = getProductById(id);
  if (!product) return null;
  state.currentProduct = product;
  state.sliderIndex = 0;
  return product;
}

function nextSlide() {
  if (!state.currentProduct) return;
  state.sliderIndex = (state.sliderIndex + 1) % state.currentProduct.images.length;
}

function prevSlide() {
  if (!state.currentProduct) return;
  var len = state.currentProduct.images.length;
  state.sliderIndex = (state.sliderIndex - 1 + len) % len;
}
