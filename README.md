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
<pre>
import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import BoxInputAlterationLimit from '../../../submodules/BenefitAnalyzeMain/fragments/BenefitTabAnalyze/fragments/BoxInputAlterationLimit';
import BenefitAnalyzeModule from '../../../lang/ptBr';
import '@testing-library/jest-dom/extend-expect';
import {AppTest} from 'index.toTest';
import {generalUseCase} from 'services/providers/general';

jest.spyOn(console, 'error'); //Mock console
/*
* Forma de realizar mock em objetos instanciados por useCase
* jest.spyOn(object, método)
*/
const handleGetParameters = jest.spyOn(generalUseCase, 'handleGetParameters');

/*
* Após ter realizado o mock do método desejado, deve-se dar escorpo para que assim,
* se comporte da forma desejada.
*/
const mockHandleGetParameters = ({success, value}) => {
  handleGetParameters.mockImplementationOnce(() =>
    Promise.resolve({success, data: [{value}]}),
  );
};

describe('BenefitAnalyzeAlterationLimit', () => {
  afterEach(() => {
    /** É recomendável sempre limpar ou restaurar os mocks após cada teste. **/
    handleGetParameters.mockClear();
  });

  it('renders without crashing', () => {
    render(
      <AppTest>
        <BoxInputAlterationLimit />
      </AppTest>,
    );
    const component = screen.getByTestId('box-input-alteration-limit');
    expect(component).toBeInTheDocument();
  });

  it('test if box title is "Parâmetro para limite de alteração definido"', () => {
    render(
      <AppTest>
        <BoxInputAlterationLimit />
      </AppTest>,
    );
    const langTitle =
      BenefitAnalyzeModule.BENEFIT_ANALYZE_LIST.BOX_TITLE_ALTERATION_LIMIT;
    const boxTitle = screen.getByText(langTitle);
    expect(boxTitle).toBeInTheDocument();
  });

  it('test if input is readOnly and disabled', async () => {
    mockHandleGetParameters({success: true, value: 5});

    const {rerender} = render(
      <AppTest>
        <BoxInputAlterationLimit />
      </AppTest>,
    );

    await waitFor(() => {
      rerender(
        <AppTest>
          <BoxInputAlterationLimit />
        </AppTest>,
      );
    });
    const component = screen.getByTestId('box-input-alteration-limit');
    const input = component.querySelector('input');

    expect(input.readOnly).toBeTruthy();
    expect(input).toBeDisabled();
  });

  it('test if input value is 5%', async () => {
    /* Mock das funções aos quais não é possível acessá-las de forma externa. */
    mockHandleGetParameters({success: true, value: 5});

    /* Renderização do componente */
    const {rerender} = render(
      <AppTest>
        <BoxInputAlterationLimit />
      </AppTest>,
    );

    /**
     * Devido ao componente possuir um elemento interno que força uma renderização trazendo valores
     * externos e alimentando componentes internos com novos valores, é necessário aguardar esta rerenderização
     */
    await waitFor(() => {
      rerender(
        <AppTest>
          <BoxInputAlterationLimit />
        </AppTest>,
      );
    });
    const component = screen.getByTestId('box-input-alteration-limit');
    const input = component.querySelector('input');

    /* asserções */
    expect(input.value).toBe('5%');
  });

  it('test if error occurs with handleGetParameters', async () => {
    mockHandleGetParameters({success: false, value: 5});

    const {rerender} = render(
      <AppTest>
        <BoxInputAlterationLimit />
      </AppTest>,
    );

    await waitFor(() => {
      rerender(
        <AppTest>
          <BoxInputAlterationLimit />
        </AppTest>,
      );
    });
    const langTitleError =
      BenefitAnalyzeModule.BENEFIT_ANALYZE_LIST
        .BOX_TITLE_ALTERATION_LIMIT_LOAD_ERROR;
    const textError = screen.queryByText(langTitleError);
    const input = screen.queryByTestId('box-input-alteration-limit-input');

    expect(textError).toBeInTheDocument();
    expect(input).not.toBeInTheDocument();
  });

  it('should be create snapshot', async () => {
    mockHandleGetParameters({success: true, value: 5});

    let containerComponent;
    await waitFor(() => {
      const {container} = render(
        <AppTest>
          <BoxInputAlterationLimit />
        </AppTest>,
      );
      containerComponent = container;
    });
    /* Criação do Snapshot. Caso o componente seja pequeno e não queira
     * criar uma pasta para Snapshot, pode-se usar o método .toMatchInlineSnapshot()
     */
    expect(containerComponent).toMatchSnapshot();
  });
});

</pre>
