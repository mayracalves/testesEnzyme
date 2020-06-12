# Enzyme e Jest Para Testes Unitários com React

### Tópicos

- `test`, `it`, `beforeEach`, `describe` para Jest.
- `shallow`, `mount` rendering functions.
- utilizando o find do enzyme.
- Mock de Propriedades.
- Mock de Módulos/Dependências.
- Enzyme com Classes.
- Enzyme com MobX.

###### Diferenças entre `test`, `it` e `describe`

No jest todos podem funcionar juntos. O teste que será rodado será o que estiver dentro do callback do `test` ou do `it`. Tentao `test` quanto `it` podem ser executados sem o uso de um `describe`; 

A grande vantagem de se utilizar o `describe` é a possilidade de poder fazer aninhamento entre vários outros `describe`.

Um erro comum é considerar que cada `beforeEach` irá executar para cada `describe`, a lógica de execução deve ser pensada do ponto de vista do `it` ou do `test`, sendo assim, para cada `ir` ou `test` será executado um `beforeEach` utilizando a ordem de nestagem. 

```typescript jsx
describe('APP', () => {
  beforeEach(() => {
    console.log('primeiro beforeEach' + new Date().getMilliseconds());
  });

  describe('quando inicializa', () => {
    beforeEach(() => {
      console.log('segundo beforeEach' + new Date().getMilliseconds());
    });

    test('a', () => {
      expect(true).toEqual(true);
    });

    it('b', () => {
      expect(true).toEqual(true);
    });
  });
});
```

No exemplo superior para o test 'a', será executado o primeiro `beforeEach` e depois o segundo `beforeEach`, para o test 'b', novamente, o primeiro `beforeEach` e após o segundo `beforeEach`;

###### Diferenças Entre `shallow`, `mount` e `render`

###### Com Classes

Quando utilizamos o `shallow` num component de classe, podemos tirar proveito do live cycles. 

Porém, quando não quisermos utilizar os live cycles, podemos desabilitar a execução deles através de uma config: `disableLifecycleMethods`

Além disso, outra funcionalidade que o enzyme nos disponibiliza é poder acessar os métodos da classe para poder testá-los de forma isolada. Para acessar os métodos basta utilziar o `.instance()`.

###### Com Hooks

No hooks samos mais limitados quando queremos testar nosso component. Se formos utilizar o `shallow`, não podemos utilizar o `useEffects`, e não teremos como acessar funções internas do component. A manipulação das variáveis internas através do `useState` funciona normalmente. Caso for utilizado o `mount` invés do `shallow`, ganhamos a execução do `useEffect`, porém o acessos a "métodos" internos do component não é possível.

###### Roteiro

- Em `Label` exemplificar a diferença entre `shallow` e `mount`, dentro do cenário do `styled-components`. Mostrar interoperabilidade entre `it` e `test`; Mostrar método `prop`. 

- Em `Select` demonstrar como o `length` pode ser usado. Usar o exemplo com `data-testid`, que irá possuir mais de dois valores por conta do `styled-components`. Introduzir o mock de dependências. Demonstrar `at` e `first`. Comentar sobre o `attrs` do `styled-components` presente no `Titulo.tsx`.

- Em `store`, demonstrar a possilbidade de realizar os testes de forma isalada, através do objeto criado pelo mobx. Exemplificar como que é possível fazer o mock de dependências. 

- Em `Home.class`, demonstrar a possibilidade de criação de testes unitários e de integração sem muitas alterações. Falar sobre o `setState` e o `instance`. Além de falar sobre o `disableLifecycleMethods`. Comentar sobre a possilibidade do assincronismo `setState`.

- Em `Home.mobx` comentar sobre a simelhança do teste de integração com os testes de integração do `Home.class`. 

- Em `Home.hooks`, demostrar a impossilibidade de realizar testes de elementos internos, apenas testes que podem acessar o "html" gerado. Comentar sobre o `act` para use de `useEffects` assíncronos.
