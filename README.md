# Calculadora SDS IGF-1 — versão corrigida PDF

Esta versão corrige a exportação do relatório PDF. O PDF passa a incluir:

- parâmetros introduzidos: idade, sexo, método/kit, valor original e unidade;
- valor convertido para ng/mL;
- SDS/Z-score;
- interpretação;
- intervalo de referência, média estimada e DP estimado;
- gráfico de percentis com o ponto do paciente.

## Como testar localmente

```bash
python3 -m http.server 8080
```

Abrir no browser:

```text
http://localhost:8080
```

Depois preencher a calculadora, clicar em **Calcular Score SDS** e só depois em **Descarregar PDF**.

## Como publicar no GitHub Pages

Substituir os ficheiros da raiz do repositório por estes ficheiros:

- `index.html`
- `styles.css`
- `app.js`
- `database.js`
- pasta `assets/`

Depois fazer commit no branch `main`.
