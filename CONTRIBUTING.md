# Guia de Contribuição

Obrigado por se interessar em contribuir com o [br-docs](https://github.com/terukimateus/br-docs)! Este documento descreve o fluxo recomendado para propor melhorias, corrigir bugs e manter a documentação em dia.

## 1. Antes de começar

- Leia o [`CODE_OF_CONDUCT.md`](./CODE_OF_CONDUCT.md). Ao participar, você concorda em respeitá-lo.
- Verifique se você possui **Node.js 18+** e **npm 9+** (ou **Yarn 1.x**) instalados.
- Familiarize-se com a estrutura do repositório (`src/`, `docs/`, `coverage/`, etc.) e com a [documentação publicada](https://br-docs-1.gitbook.io/br-docs/).

## 2. Configurando o ambiente local

```bash
# 1. Faça um fork do repositório no GitHub
# 2. Clone o seu fork
git clone https://github.com/<seu-usuario>/br-docs.git
cd br-docs

# 3. Adicione o repositório original como upstream (opcional, mas recomendado)
git remote add upstream https://github.com/terukimateus/br-docs.git

# 4. Instale as dependências
npm install   # ou yarn install

# 5. Execute os testes e a build para garantir que tudo está funcionando
npm test
npm run lint
npm run build
```

## 3. Fluxo de trabalho sugerido

1. **Atualize a branch principal local**: `git fetch upstream && git checkout main && git merge upstream/main`.
2. **Crie uma branch descritiva**: `git checkout -b feature/validacao-boleto` ou `fix/bug-cpf`.
3. **Implemente sua mudança** respeitando os padrões do projeto (TypeScript, ESLint, Vitest).
4. **Escreva testes** que cubram o novo comportamento ou o bug corrigido em `src/__tests__/`.
5. **Confirme as mudanças** com mensagens claras: `git commit -m "feat: adiciona validacao de boleto"`.
6. **Envie para o seu fork**: `git push origin feature/validacao-boleto`.
7. **Abra um Pull Request** apontando para `main` no repositório original.

## 4. Mantendo a documentação atualizada

- A documentação viva mora em `docs/` (incluindo `SUMMARY.md`, `docs/UTILITARIOS/` e demais seções) e também no GitBook.
- Sempre que introduzir uma nova funcionalidade, ajuste os arquivos correspondentes em `docs/docs` e atualize os índices (`docs/SUMMARY.md` e `SUMMARY.md` na raiz) para que os novos tópicos apareçam na navegação.
- Exemplos de uso devem ficar sincronizados com os utilitários implementados em `src/` e com os testes em `src/__tests__/`.
- Se a alteração impactar o site/documentação hospedada, descreva no Pull Request quais páginas foram atualizadas e inclua capturas ou passos de validação quando possível.

## 5. Testes e verificações locais

Antes de abrir o PR, execute pelo menos:

```bash
npm run lint      # analisa estilo e qualidade do código
npm test          # roda a suíte de testes com Vitest
npm run coverage  # opcional: garante cobertura mínima
npm run build     # garante que o pacote compila para dist/
```

Se alguma verificação falhar, ajuste o código até que tudo passe.

## 6. Checklist para Pull Requests

- [ ] A branch está atualizada com `main`.
- [ ] Funções, tipos ou utilitários novos têm testes cobrindo casos positivos/negativos.
- [ ] A documentação em `docs/` (e GitBook) reflete as mudanças.
- [ ] `npm run lint`, `npm test` e `npm run build` foram executados com sucesso.
- [ ] A descrição do PR explica o problema e a solução, além de listar impactos ou breaking changes.

## 7. Suporte e dúvidas

- Utilize as _issues_ do GitHub para relatar bugs ou sugerir funcionalidades.
- Para dúvidas gerais ou discussões abertas, use a aba **Discussions** (se disponível) ou abra uma issue com a tag `question`.
- Em casos sensíveis, entre em contato direto com `terukimateus@outlook.com`.

Obrigado por ajudar a tornar o br-docs melhor! 🎉
