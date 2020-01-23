# Enzyme e Jest Para Testes Unitários com React

### Tópicos

- `test`, `it`, `beforeEach`, `describe` para Jest.
- `shallow`, `render`, `mount` rendering functions.
- utilizando o find do enzyme.
- importância das snapshots para css.
- Mock de Propriedades.
- Mock de Módulos/Dependências.
- como fazer mock de modulos.
- Enzyme com Hooks.
- Enzyme com Classes.
- Enzyme com MobX.

###### Diferenças entre `test`, `it` e `describe`

No jest todos podem funcionar juntos. O teste que será rodado será o que estiver dentro do callback do `test` ou do `it`. A grande única diferença entre eles é que com o `test` podemos ter cenários de testes isolados sem a necessidade de se utilizar os demais facilitadores, como o `describe`, `beforeEach`, `afterEach`;

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
