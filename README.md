<div align="center" style="background: linear-gradient(135deg, #06233f 0%, #075c72 48%, #f0b44d 100%); border-radius: 18px; padding: 36px 24px; color: #ffffff;">

# Memorial Noronhense Digital

### Exposição digital dos memoriais de Fernando de Noronha

![React](https://img.shields.io/badge/React-Exposi%C3%A7%C3%A3o%20digital-149ECA?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Interface%20r%C3%A1pida-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-Dados%20tipados-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Acervo PDF](https://img.shields.io/badge/PDF-Acervo%20oficial-E95436?style=for-the-badge&logo=adobeacrobatreader&logoColor=white)

<p>
  <strong>Um ambiente web para apresentar, navegar e abrir os painéis memoriais de Fernando de Noronha em uma experiência visual mais cuidada que uma lista simples de links.</strong>
</p>

</div>

---

## 🏝️ Background

O projeto nasceu da necessidade de transformar a exposição dos memoriais de Fernando de Noronha em uma experiência digital mais organizada, bonita e navegável.

Antes, cada memorial era exibido em um site com título e link direto para PDF. Esta versão cria um ambiente de exposição com cards em perspectiva, navegação por painel, busca, barra lateral de informações e acesso ao PDF original.

A proposta preserva o PDF como documento oficial, mas prepara o sistema para evoluir futuramente com transcrições web, imagens editoriais, metadados revisados e uma leitura mais confortável em dispositivos móveis.

## ✨ Principais Recursos

- 🎴 Exposição em cards com aparência de painéis verticais.
- 🧭 Navegação inferior por número do painel.
- 🔎 Busca por título, número, resumo, categoria e tags.
- 📄 Abertura do PDF oficial em modal.
- 🖼️ Visualização do painel em tela dedicada.
- 📚 Manifesto centralizado de dados dos memoriais.
- 📱 Layout responsivo para desktop e mobile.
- ♿ Estrutura com botões, labels e navegação pensada para acessibilidade.

## 🧱 Stack

- ⚛️ React
- ⚡ Vite
- 🟦 TypeScript
- 🎨 CSS modularizado em `src/styles.css`
- 🧩 Lucide React para ícones
- 📁 PDFs servidos pela pasta pública do Vite

## 🗂️ Estrutura do Projeto

```txt
MemorialNoronhense/
├── public/
│   └── memoriais/
│       └── pdfs/                  # PDFs oficiais dos painéis
├── src/
│   ├── components/                # Componentes da exposição
│   ├── content/
│   │   └── memoriais/             # Base futura para transcrições web
│   ├── data/
│   │   └── memoriais.ts           # Manifesto dos painéis
│   ├── types/
│   │   └── memorial.ts            # Tipos do domínio
│   ├── App.tsx                    # Composição principal da experiência
│   └── styles.css                 # Identidade visual e responsividade
├── index.html
├── package.json
└── README.md
```

## 🧭 Experiência de Uso

O usuário entra direto na exposição digital.

1. Navega pelos cards centrais em formato de galeria.
2. Usa a busca superior para encontrar painéis por título ou assunto.
3. Seleciona um painel pela navegação inferior.
4. Consulta a barra lateral com número, título, categoria e resumo.
5. Abre o painel ou o PDF oficial pelos botões de ação.

## 📄 Organização dos Memoriais

Os PDFs ficam em:

```txt
public/memoriais/pdfs
```

O cadastro dos painéis fica em:

```txt
src/data/memoriais.ts
```

Cada memorial é tratado como um item do acervo com dados como:

- número do painel;
- título;
- slug;
- categoria;
- resumo;
- caminho do PDF;
- tags;
- status editorial.

## 🧾 Convenção dos PDFs

Os arquivos podem manter nomes descritivos, desde que sejam adicionados ao manifesto em `src/data/memoriais.ts`.

Exemplo de padrão recomendado:

```txt
Painel 01 - Espaço Cultural Américo Vespúcio - Apresentação do Memorial.pdf
Painel 02 - Mapa de localização.pdf
Painel 58 - Parque Nacional Marinho - diploma da UNESCO.pdf
```

## 🛠️ Como Rodar Localmente

Instale as dependências:

```bash
npm install
```

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

Gere a versão de produção:

```bash
npm run build
```

Visualize o build local:

```bash
npm run preview
```

Rode a checagem de lint:

```bash
npm run lint
```

## 🧪 Validação Recomendada

- Conferir se todos os PDFs listados abrem corretamente.
- Testar busca por número, título e termos do resumo.
- Navegar pelos cards usando mouse, teclado e botões laterais.
- Validar visual em telas largas e mobile.
- Rodar `npm run build` antes de publicar.

## 🚀 Publicação

Como o projeto usa Vite, o build final é gerado em:

```txt
dist/
```

Essa pasta pode ser publicada em hospedagens estáticas, como:

- Vercel;
- Netlify;
- GitHub Pages;
- servidor institucional com arquivos estáticos;
- ambiente web próprio da Prefeitura/Administração.

## 🧩 Evoluções Futuras

- Transcrição web revisada por painel.
- Capas geradas a partir da primeira página dos PDFs.
- Recortes de imagens, mapas e documentos históricos.
- Filtros por período, tema ou categoria.
- Modo tela cheia para exposição em totens.
- Painel administrativo para cadastrar memoriais sem editar código.
- Exportação de metadados do acervo em JSON.

## 📌 Observações

O PDF continua sendo a fonte oficial do memorial. Qualquer versão web transcrita deve passar por revisão de nomes próprios, datas, créditos, legendas e conteúdo histórico antes de ser publicada como texto final.

## 🤝 Manutenção

Para adicionar novos painéis:

1. Coloque o PDF em `public/memoriais/pdfs`.
2. Atualize a lista de fontes em `src/data/memoriais.ts`.
3. Rode `npm run build`.
4. Confira se o painel aparece na navegação inferior e abre corretamente.

---

<div align="center">

**Memorial Noronhense Digital**  
Preservação, memória e acesso público ao acervo histórico de Fernando de Noronha.

</div>
