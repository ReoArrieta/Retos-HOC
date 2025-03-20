export class ProductUseCase {
  getProducts(): Product[] {
    // Aquí puedes simular la obtención de productos de una API o base de datos
    return [
      {
        id: 1,
        name: 'Gabinete',
        description: 'Gabinete gamer...',
        imageUrl: 'https://patoloco.com.br/arquivos/produtos/imagens_adicionais/7704d6afc41c5bd107b0845a0f78660f9dec4592.jpeg',
      },
      {
        id: 2,
        name: 'Pantalla',
        description: 'Pantalla gamer...',
        imageUrl: 'https://www.bhphotovideo.com/images/images2500x2500/lg_49gr85dc_b_49_curved_ultragear_dqhd_1760859.jpg',
      },
      {
        id: 3,
        name: 'Teclado',
        description: 'Teclado gamer...',
        imageUrl: 'https://www.czone.com.pk/images/products/6-czone.com.pk-1540-13755-200922081526.jpg',
      },
    ];
  }
}

export interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}
