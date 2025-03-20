import { Product } from './product.use-case';

export class ProductDetailUseCase {
  getProductById(id: number): Product | null {
    // Simulación de obtención de un producto específico
    const products: Product[] = [
      {
        id: 1,
        name: 'Gabinete',
        description: 'Gabinete gamer con una variedad de ventiladores',
        imageUrl: 'https://patoloco.com.br/arquivos/produtos/imagens_adicionais/7704d6afc41c5bd107b0845a0f78660f9dec4592.jpeg',
      },
      {
        id: 2,
        name: 'Pantalla',
        description: 'Pantalla gamer de 240 hz, para una experiencia gamer única',
        imageUrl: 'https://www.bhphotovideo.com/images/images2500x2500/lg_49gr85dc_b_49_curved_ultragear_dqhd_1760859.jpg',
      },
      {
        id: 3,
        name: 'Teclado',
        description: 'Teclado gamer mecánico, dile  adios al input lag',
        imageUrl: 'https://www.czone.com.pk/images/products/6-czone.com.pk-1540-13755-200922081526.jpg',
      },
    ];
    return products.find(product => product.id === id) || null;
  }
}