import { InMemoryDbService } from '@angular-in-memory-web-api';

export class InMemoryDataBase implements InMemoryDataBase {

  createDb() {

    const categories = [
      { id: 1, name: 'Moradia', description: 'Pagamentos de Contas da Casa' },
      { id: 2, name: 'Saúde', description: 'Plano de Saúde e Remédios' },
      { id: 3, name: 'Lazer', description: 'Cinema, parque, praia, etc' },
      { id: 4, name: 'Salário', description: 'Recebimento de Salário' },
      { id: 5, name: 'Freela', description: 'Trabalhos como Freelancer' }
    ];

    return { categories }

  }
}
