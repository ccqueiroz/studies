# Internet Brasil | Documentação Testes

# Comandos
- `npm run test:watch`: abre o test runner no modo watch, observando os novos testes realizados. Sendo necessário passar a flag `p` e o path do arquivo que deseja Testar.

1. Ordem de recomendação de buscas nas queries de testes:
<ul>
  <li>ByRole - Acessibilidade</li>
  <li>ByText - Semântica</li>
  <li>ByTestId - Id de testes implementado em um ponto da árvore de componentes</li>
</ul>

# Obs
1.1. As queries que iniciam com getBy e queryBy, possuem processo síncrono, sendo que a diferença entre eles está no getBy ao possuir 0 matches retorna throw error, enquanto que a queryBy retorna null.
1.2. A query findBy é executada em um processo assíncrono, retornando um throw error quando não for identificado matches.

# Os testes devem levar em conta a usuabilidade do sistema. Evitando assim, realizar testes de implementações diretas.

### O ideal é que sejam testados os casos de uso ao qual um componente | função pode ser submetido.
<p>
  Como exemplo, Um componente recebe parâmetros (a, b) e em sua lógica é analisado os valores de a e b, onde cada parâmetro terá um retorno de um texto dentro de um input.
  Com isso, o teste do componente deve cobrir a entrada dos parâmetros (tipos), e retorno do texto no input. Testando os diferentes casos que possam existir.
</p>
<a href="./src/components/Teste/Teste.spec.jsx">Modelo</a>
