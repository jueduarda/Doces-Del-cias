
/* =================================================
   DOCES & DELÍCIAS — FUNCIONALIDADES DO SITE

   Este arquivo controla:
   1. Configurações
   2. Produtos e cartões
   3. Home
   4. Página de produtos
   5. Filtros e pesquisa
   6. Nossa história
   7. Contato
   8. Navegação
   9. Detalhes dos produtos
   10. Carrinho
   11. Checkout
   12. Eventos
   13. Inicialização

   TODAS AS IMAGENS SÃO DEFINIDAS NO CSS.
================================================= */

(() => {
  "use strict";

  // ===============================================
  // 1. CONFIGURAÇÕES INICIAIS
  // ===============================================

  const catalogo = window.DOCES_CATALOGO;

  if (!catalogo) {
    console.error("O arquivo catalogo.js não foi carregado.");
    return;
  }

  const produtos = catalogo.products;
  const categorias = catalogo.categories;

  const $ = (selector, parent = document) =>
    parent.querySelector(selector);

  const $$ = (selector, parent = document) =>
    [...parent.querySelectorAll(selector)];

  const obterProduto = id =>
    produtos.find(produto => produto.id === id);

  const obterCategoria = id =>
    categorias.find(categoria => categoria.id === id);

  const escapar = texto =>
    String(texto ?? "").replace(
      /[&<>"']/g,
      caractere => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      })[caractere]
    );

  const moeda = valor =>
    typeof valor === "number"
      ? valor.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL"
        })
      : "Sob consulta";

  const estado = {
    carrinho: carregarCarrinho(),
    categoria: "todos",
    busca: "",
    ordenacao: "padrao",
    quantidadeDetalhe: 1
  };

  let temporizadorToast;

  // ===============================================
  // 2. SALVAMENTO DO CARRINHO
  // ===============================================

  function carregarCarrinho() {
    try {
      const dados = JSON.parse(
        localStorage.getItem("doces_delicias_cart_v1") || "{}"
      );

      if (
        dados &&
        typeof dados === "object" &&
        !Array.isArray(dados)
      ) {
        return dados;
      }
    } catch (erro) {
      console.warn("Carrinho não recuperado.", erro);
    }

    return {};
  }

  function salvarCarrinho() {
    try {
      localStorage.setItem(
        "doces_delicias_cart_v1",
        JSON.stringify(estado.carrinho)
      );
    } catch (erro) {
      console.warn("Não foi possível salvar o carrinho.");
    }

    atualizarContador();
  }

  function quantidadeCarrinho() {
    return Object.entries(estado.carrinho).reduce(
      (total, [id, quantidade]) => {
        if (!obterProduto(id)) return total;

        return total + Math.max(
          0,
          Number(quantidade) || 0
        );
      },
      0
    );
  }

  function atualizarContador() {
    const quantidade = quantidadeCarrinho();

    $("#cart-count").textContent = quantidade;

    $("#cart-heading-count").textContent =
      `(${quantidade} ${quantidade === 1 ? "item" : "itens"})`;
  }

  function subtotalCarrinho() {
    return Object.entries(estado.carrinho).reduce(
      (total, [id, quantidade]) => {
        const produto = obterProduto(id);

        if (!produto || typeof produto.price !== "number") {
          return total;
        }

        return total + produto.price * quantidade;
      },
      0
    );
  }

  function possuiPrecoPendente() {
    return Object.entries(estado.carrinho).some(
      ([id, quantidade]) => {
        const produto = obterProduto(id);

        return produto &&
          quantidade > 0 &&
          typeof produto.price !== "number";
      }
    );
  }

  // ===============================================
  // 3. NOTIFICAÇÕES
  // ===============================================

  function notificar(mensagem) {
    const elemento = $("#toast");

    elemento.textContent = mensagem;
    elemento.classList.add("show");

    clearTimeout(temporizadorToast);

    temporizadorToast = setTimeout(() => {
      elemento.classList.remove("show");
    }, 2700);
  }

  // ===============================================
  // 4. CARTÕES DOS PRODUTOS
  // ===============================================
  // As fotos são identificadas por data-photo.
  // Exemplo: data-photo="p17"
  // O CSS escolhe a fotografia.

  function card(produto) {
    const categoria = obterCategoria(produto.category);

    return `
      <article class="product-card">

        <button
          type="button"
          class="product-image photo"
          data-photo="${produto.id}"
          data-product="${produto.id}"
          aria-label="Ver detalhes de ${escapar(produto.name)}"
        ></button>

        <div class="product-info">

          <span class="catlabel">
            ${escapar(categoria?.name || "")}
          </span>

          <h3>${escapar(produto.name)}</h3>

          <p>${escapar(produto.description)}</p>

          <div class="product-card-footer">

            <span class="price-pending">
              ${moeda(produto.price)}
            </span>

            <button
              type="button"
              class="small-add"
              data-add="${produto.id}"
              aria-label="Adicionar ${escapar(produto.name)} ao carrinho"
            >
              +
            </button>

          </div>

        </div>

      </article>
    `;
  }

  // ===============================================
  // 5. HOME
  // ===============================================

  function home() {

    // AQUI VOCÊ ESCOLHE OS QUERIDINHOS.
    // Altere somente os IDs.
    const queridinhos = [
      "p02",
      "p17",
      "p26",
      "p39"
    ];

    return `
      <!-- BANNER PRINCIPAL -->

      <section class="hero">

        <div
          class="hero-photo photo"
          role="img"
          aria-label="Banner da Doces & Delícias"
        ></div>

        <a
          class="btn btn-dark hero-cta"
          href="#/produtos"
        >
          Explorar nosso cardápio →
        </a>

      </section>

      <!-- BOAS-VINDAS -->

      <section class="container home-intro">

        <span class="eyebrow">
          BEM-VINDO À DOCES & DELÍCIAS
        </span>

        <h1 class="section-title">
          Pequenos momentos,
          <em>grandes delícias.</em>
        </h1>

        <p class="section-subtitle">
          Cafés que abraçam, doces que encantam
          e aquele cheirinho de forno que faz a gente
          se sentir em casa.
        </p>

        <div class="qualities">

          <div class="quality">
            <span class="symbol">♡</span>
            <div>
              <strong>Feito com carinho</strong>
              <small>Uma experiência especial em cada detalhe.</small>
            </div>
          </div>

          <div class="quality">
            <span class="symbol">✳</span>
            <div>
              <strong>Clima de aconchego</strong>
              <small>Momentos deliciosos para desacelerar.</small>
            </div>
          </div>

          <div class="quality">
            <span class="symbol">✦</span>
            <div>
              <strong>Para compartilhar</strong>
              <small>Sabores para criar boas memórias.</small>
            </div>
          </div>

        </div>

      </section>

      <!-- UM CARDÁPIO CHEIO DE AFETO -->

      <section class="section container">

        <div class="section-head">

          <div>
            <span class="eyebrow">
              DESCUBRA SEU FAVORITO
            </span>

            <h2 class="section-title">
              Um cardápio cheio de afeto
            </h2>

            <p class="section-subtitle">
              Do primeiro café até o último docinho do dia.
            </p>
          </div>

          <a class="text-link" href="#/produtos">
            Ver todo o cardápio →
          </a>

        </div>

        <div class="category-grid">

          ${categorias.map(categoria => `
            <a
              class="category-tile"
              href="#/produtos?categoria=${categoria.id}"
            >

              <div
                class="category-photo photo"
                data-category-photo="${categoria.id}"
                role="img"
                aria-label="${escapar(categoria.name)}"
              ></div>

              <div class="tile-bottom">
                <h3>${escapar(categoria.name)}</h3>
                <span>↗</span>
              </div>

            </a>
          `).join("")}

        </div>

      </section>

      <!-- QUERIDINHOS DA NOSSA VITRINE -->

      <section class="section container">

        <div class="section-head">

          <div>
            <span class="eyebrow">
              ESCOLHAS ESPECIAIS
            </span>

            <h2 class="section-title">
              Queridinhos da nossa vitrine
            </h2>

            <p class="section-subtitle">
              Uma seleção de sabores para conhecer melhor.
            </p>
          </div>

          <a class="text-link" href="#/produtos">
            Ver todos →
          </a>

        </div>

        <div class="product-grid">

          ${queridinhos
            .map(id => obterProduto(id))
            .filter(Boolean)
            .map(card)
            .join("")}

        </div>

      </section>

      <!-- FACHADA DA LOJA -->

      <section class="container story-banner">

        <div
          class="facade-photo photo"
          role="img"
          aria-label="Fachada da Doces & Delícias"
        ></div>

        <div class="story-copy">

          <span class="eyebrow">
            NOSSO CANTINHO
          </span>

          <h2>Um lugar para voltar sempre.</h2>

          <p>
            Um espaço pensado para acolher,
            compartilhar momentos e saborear
            cada detalhe.
          </p>

          <a
            class="btn btn-primary"
            href="#/sobre"
          >
            Conheça nossa história →
          </a>

        </div>

      </section>

      <!-- DOCINHOS PARA PRESENTEAR -->

      <section class="container feature-strip">

        <div class="feature-copy">

          <span class="eyebrow light">
            MOMENTOS ESPECIAIS
          </span>

          <h2>Carinho que vira presente.</h2>

          <p>
            Pequenas delícias para agradecer,
            celebrar e surpreender.
          </p>

          <a
            class="btn btn-cream"
            href="#/produtos?categoria=artesanais"
          >
            Ver docinhos →
          </a>

        </div>

        <div
          class="gift-photo photo"
          role="img"
          aria-label="Docinhos artesanais"
        ></div>

      </section>

      <!-- ENCERRAMENTO DA HOME -->

      <section class="newsletter">

        <span class="eyebrow">
          UM CONVITE ESPECIAL
        </span>

        <h2>Que tal uma pausa doce?</h2>

        <p>
          Seu próximo momento favorito começa aqui.
        </p>

        <a
          class="btn btn-dark"
          href="#/contato"
        >
          Entre em contato →
        </a>

      </section>
    `;
  }

  // ===============================================
  // 6. PÁGINA PRODUTOS
  // ===============================================

  function paginaProdutos() {
    return `
      <section class="page-banner">

        <div class="container">

          <span class="eyebrow">
            NOSSO CARDÁPIO
          </span>

          <h1>Sabores feitos com amor</h1>

          <p>
            Explore nossos produtos e encontre
            sua próxima delícia favorita.
          </p>

        </div>

      </section>

      <div class="container catalog-layout">

        <!-- MENU DE CATEGORIAS -->

        <aside class="sidebar">

          <h3>Categorias</h3>

          <div class="category-filter">

            <button
              type="button"
              data-category="todos"
              class="${estado.categoria === "todos" ? "active" : ""}"
            >
              <span>Todos os produtos</span>
              <b>${produtos.length}</b>
            </button>

            ${categorias.map(categoria => `

              <button
                type="button"
                data-category="${categoria.id}"
                class="${
                  estado.categoria === categoria.id
                    ? "active"
                    : ""
                }"
              >

                <span>${escapar(categoria.name)}</span>

                <b>
                  ${
                    produtos.filter(
                      p => p.category === categoria.id
                    ).length
                  }
                </b>

              </button>

            `).join("")}

          </div>

        </aside>

        <!-- RESULTADOS DO CARDÁPIO -->

        <section class="catalog-main">

          <div class="catalog-toolbar">

            <div
              class="results"
              id="results-count"
            ></div>

            <div class="catalog-controls">

              <label class="search-field">
                <span aria-hidden="true">⌕</span>

                <input
                  type="search"
                  id="catalog-search"
                  placeholder="Buscar produtos..."
                  value="${escapar(estado.busca)}"
                >
              </label>

              <select
                id="catalog-sort"
                class="sort-select"
                aria-label="Ordenar produtos"
              >
                <option value="padrao">
                  Ordem do cardápio
                </option>
                <option value="az">
                  Nome: A a Z
                </option>
                <option value="za">
                  Nome: Z a A
                </option>
              </select>

            </div>

          </div>

          <div
            class="product-grid"
            id="catalog-results"
          ></div>

        </section>

      </div>
    `;
  }

  // ===============================================
  // 7. FILTROS, PESQUISA E ORDENAÇÃO
  // ===============================================

  function renderizarProdutos() {
    const area = $("#catalog-results");

    if (!area) return;

    let lista = produtos.filter(produto => {

      const categoriaCorreta =
        estado.categoria === "todos" ||
        produto.category === estado.categoria;

      const texto = [
        produto.name,
        produto.description,
        obterCategoria(produto.category)?.name || ""
      ].join(" ").toLocaleLowerCase("pt-BR");

      const buscaCorreta = texto.includes(
        estado.busca.toLocaleLowerCase("pt-BR")
      );

      return categoriaCorreta && buscaCorreta;
    });

    if (estado.ordenacao !== "padrao") {
      lista.sort((a, b) => {
        const resultado = a.name.localeCompare(
          b.name,
          "pt-BR"
        );

        return estado.ordenacao === "za"
          ? -resultado
          : resultado;
      });
    }

    $("#results-count").textContent =
      `${lista.length} ${
        lista.length === 1
          ? "produto encontrado"
          : "produtos encontrados"
      }`;

    if (lista.length === 0) {
      area.innerHTML = `
        <div class="empty-state">
          <h3>Nenhum produto encontrado</h3>
          <p>Tente outra palavra ou categoria.</p>

          <button
            class="btn btn-outline"
            data-clear-filters
          >
            Limpar filtros
          </button>
        </div>
      `;
    } else {
      area.innerHTML = lista.map(card).join("");
    }

    $("#catalog-sort").value = estado.ordenacao;
  }

  // ===============================================
  // 8. NOSSA HISTÓRIA
  // ===============================================

  function paginaSobre() {
    return `
      <section class="page-banner">

        <div class="container">
          <span class="eyebrow">
            CONFEITARIA ARTESANAL
          </span>

          <h1>Nossa história</h1>

          <p>
            Um cantinho de afeto, receitas
            e encontros especiais.
          </p>
        </div>

      </section>

      <section class="container about-layout">

        <div
          class="facade-photo photo"
          role="img"
          aria-label="Fachada da confeitaria"
        ></div>

        <div>

          <span class="eyebrow">
            DOCES & DELÍCIAS
          </span>

          <h2>
            Doce é aquilo que faz a gente
            se sentir em casa.
          </h2>

          <p>
            A Doces & Delícias é uma marca criada
            para celebrar momentos especiais,
            acompanhados de cafés, pães e doces.
          </p>

          <p>
            Nossa proposta é reunir delicadeza,
            acolhimento e sabores que tornam
            cada pausa mais gostosa.
          </p>

          <a
            class="btn btn-primary"
            href="#/contato"
          >
            Fale com a gente →
          </a>

        </div>

      </section>

      <section class="container feature-strip">

        <div class="feature-copy">

          <span class="eyebrow light">
            FEITO COM CARINHO
          </span>

          <h2>Um carinho em forma de doce.</h2>

          <p>
            Cada detalhe faz parte da experiência
            que queremos criar.
          </p>

          <a
            class="btn btn-cream"
            href="#/produtos"
          >
            Conheça o cardápio →
          </a>

        </div>

        <div
          class="cookie-photo photo"
          role="img"
          aria-label="Cookie artesanal"
        ></div>

      </section>
    `;
  }

  // ===============================================
  // 9. CONTATO E FORMULÁRIO
  // ===============================================

  function paginaContato() {
    return `
      <section class="page-banner">

        <div class="container">

          <span class="eyebrow">
            FALE COM A GENTE
          </span>

          <h1>Vamos conversar?</h1>

          <p>
            Dúvidas, sugestões e recadinhos especiais.
          </p>

        </div>

      </section>

      <section class="container contact-section">

        <div>

          <span class="eyebrow">
            SERÁ UM PRAZER
          </span>

          <h2>Um recadinho cheio de carinho.</h2>

          <p>
            Preencha nosso formulário para registrar
            uma mensagem.
          </p>

          <div class="ingredient-box">
            <b>Atendimento</b>
            <p>

Segunda-feira: Fechado  

            </p>
            <p>
            Terça a sexta-feira: 08h às 19h  
            </p>

            <p>
            Sábado: 08h às 20h  
            </p>

            <p>
            Domingo e feriados: 09h às 17h
            </p>

            <p>
            ☕ Esperamos por você para tornar seu dia mais doce!
            </p>
          </div>

          <div
            class="facade-photo photo contact-facade"
            role="img"
            aria-label="Fachada da loja"
          ></div>

        </div>

        <div class="contact-card">

          <form id="contact-form">

            <div class="form-grid">

              <div class="field">

                <label for="contact-name">
                  Seu nome *
                </label>

                <input
                  id="contact-name"
                  name="name"
                  required
                  maxlength="100"
                  placeholder="Seu nome completo"
                >

              </div>

              <div class="field">

                <label for="contact-email">
                  Seu e-mail *
                </label>

                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  required
                  placeholder="voce@exemplo.com"
                >

              </div>

            </div>

            <div class="form-grid">

              <div class="field">

                <label for="contact-phone">
                  Telefone
                </label>

                <input
                  type="tel"
                  id="contact-phone"
                  name="phone"
                  placeholder="(00) 00000-0000"
                >

              </div>

              <div class="field">

                <label for="contact-subject">
                  Assunto *
                </label>

                <select
                  id="contact-subject"
                  name="subject"
                  required
                >
                  <option value="">
                    Selecione
                  </option>
                  <option>Informações sobre produtos</option>
                  <option>Encomendas</option>
                  <option>Dúvidas gerais</option>
                  <option>Sugestões</option>
                </select>

              </div>

            </div>

            <div class="field">

              <label for="contact-message">
                Sua mensagem *
              </label>

              <textarea
                id="contact-message"
                name="message"
                required
                maxlength="2000"
                placeholder="Escreva sua mensagem..."
              ></textarea>

            </div>

            <button
              class="btn btn-primary full"
              type="submit"
            >
              Enviar mensagem →
            </button>


          </form>

        </div>

      </section>
    `;
  }

  // ===============================================
  // 10. NAVEGAÇÃO ENTRE PÁGINAS
  // ===============================================

  function paginaAtual() {
    const endereco = location.hash.slice(1) || "/";
    const caminho = endereco.split("?")[0];

    const parametros = new URLSearchParams(
      endereco.split("?")[1] || ""
    );

    if (caminho === "/produtos") {
      const categoria = parametros.get("categoria");

      estado.categoria = categorias.some(
        item => item.id === categoria
      )
        ? categoria
        : "todos";

      return "produtos";
    }

    if (caminho === "/sobre") return "sobre";
    if (caminho === "/contato") return "contato";

    return "home";
  }

  function renderizarPagina() {
    fecharTudo();

    const atual = paginaAtual();

    const paginas = {
      home: home,
      produtos: paginaProdutos,
      sobre: paginaSobre,
      contato: paginaContato
    };

    $("#app").innerHTML = paginas[atual]();

    const nomesNavegacao = {
      home: "home",
      produtos: "products",
      sobre: "about",
      contato: "contact"
    };

    $$(".nav-links a").forEach(link => {
      link.classList.toggle(
        "active",
        link.dataset.nav === nomesNavegacao[atual]
      );
    });

    $("#mobile-nav").classList.remove("open");

    $("#menu-toggle").setAttribute(
      "aria-expanded",
      "false"
    );

    if (atual === "produtos") {
      renderizarProdutos();
    }

    window.scrollTo(0, 0);
  }

  // ===============================================
  // 11. JANELAS: ABRIR E FECHAR
  // ===============================================

  function fecharTudo() {
    $("#overlay").hidden = true;

    $("#cart-drawer").classList.remove("open");
    $("#cart-drawer").setAttribute("aria-hidden", "true");

    $("#modal").classList.remove("open");
    $("#modal").setAttribute("aria-hidden", "true");

    document.body.classList.remove("locked");
  }

  function abrirJanela(tipo) {
    fecharTudo();

    $("#overlay").hidden = false;

    document.body.classList.add("locked");

    if (tipo === "carrinho") {
      renderizarCarrinho();

      $("#cart-drawer").classList.add("open");

      $("#cart-drawer").setAttribute(
        "aria-hidden",
        "false"
      );
    } else {
      $("#modal").classList.add("open");

      $("#modal").setAttribute(
        "aria-hidden",
        "false"
      );
    }
  }

  // ===============================================
  // 12. DETALHES DO PRODUTO
  // ===============================================

  function abrirDetalhes(id) {
    const produto = obterProduto(id);

    if (!produto) return;

    estado.quantidadeDetalhe = 1;

    $("#modal").innerHTML = `
      <button
        class="modal-close"
        data-close
        aria-label="Fechar detalhes"
      >
        ×
      </button>

      <div class="product-modal">

        <div
          class="detail-photo photo"
          data-photo="${produto.id}"
          role="img"
          aria-label="${escapar(produto.name)}"
        ></div>

        <div class="modal-info">

          <span class="eyebrow">
            ${escapar(
              obterCategoria(produto.category)?.name || ""
            )}
          </span>

          <h2 id="modal-title">
            ${escapar(produto.name)}
          </h2>

          <p>
            ${escapar(produto.description)}
          </p>

          <div class="ingredient-box">

            <b>Ingredientes sugeridos</b>

            <p>
              ${produto.ingredients
                .map(escapar)
                .join(" · ")}
            </p>

          </div>

         

          <p>
            <strong>Preço:</strong>
            ${moeda(produto.price)}
          </p>

          <div class="modal-actions">

            <div class="quantity">

              <button
                type="button"
                data-detail-minus
                aria-label="Diminuir quantidade"
              >
                −
              </button>

              <span id="detail-qty">1</span>

              <button
                type="button"
                data-detail-plus
                aria-label="Aumentar quantidade"
              >
                +
              </button>

            </div>

            <button
              type="button"
              class="btn btn-primary"
              data-add-detail="${produto.id}"
            >
              Adicionar ao carrinho →
            </button>

          </div>

        </div>

      </div>
    `;

    abrirJanela("modal");
  }

  // ===============================================
  // 13. ADICIONAR AO CARRINHO
  // ===============================================

  function adicionarAoCarrinho(id, quantidade = 1) {
    const produto = obterProduto(id);

    if (!produto) return;

    const quantidadeAtual =
      Number(estado.carrinho[id]) || 0;

    estado.carrinho[id] = Math.min(
      99,
      quantidadeAtual + quantidade
    );

    salvarCarrinho();

    notificar(
      `${produto.name} adicionado ao carrinho ♡`
    );
  }

  // ===============================================
  // 14. EXIBIR CARRINHO
  // ===============================================

  function renderizarCarrinho() {
    const ids = Object.keys(estado.carrinho).filter(
      id =>
        obterProduto(id) &&
        estado.carrinho[id] > 0
    );

    const area = $("#cart-items");

    if (ids.length === 0) {

      area.innerHTML = `
        <div class="cart-empty">

          <span class="empty-icon">♡</span>

          <h3>Seu carrinho está vazio.</h3>

          <p>
            Escolha uma delícia para começar.
          </p>

          <button class="btn btn-outline" data-close>
            Continuar escolhendo
          </button>

        </div>
      `;

    } else {

      area.innerHTML = ids.map(id => {
        const produto = obterProduto(id);

        return `
          <div class="cart-line">

            <div
              class="cart-photo photo"
              data-photo="${produto.id}"
              role="img"
              aria-label="${escapar(produto.name)}"
            ></div>

            <div>

              <strong>
                ${escapar(produto.name)}
              </strong>

              <small>
                ${moeda(produto.price)}
              </small>

              <div class="quantity">

                <button
                  type="button"
                  data-minus="${id}"
                  aria-label="Diminuir quantidade"
                >
                  −
                </button>

                <span>
                  ${estado.carrinho[id]}
                </span>

                <button
                  type="button"
                  data-plus="${id}"
                  aria-label="Aumentar quantidade"
                >
                  +
                </button>

              </div>

            </div>

            <button
              type="button"
              class="remove-item"
              data-remove="${id}"
            >
              Remover
            </button>

          </div>
        `;
      }).join("");
    }

    $("#checkout-start").disabled = ids.length === 0;

    $("#cart-total").textContent =
      possuiPrecoPendente()
        ? "Sob consulta"
        : moeda(subtotalCarrinho());
  }

  // ===============================================
  // 15. ALTERAR QUANTIDADE NO CARRINHO
  // ===============================================

  function alterarQuantidade(id, mudanca) {
    const atual = Number(estado.carrinho[id]) || 0;

    const nova = Math.max(
      0,
      Math.min(99, atual + mudanca)
    );

    if (nova === 0) {
      delete estado.carrinho[id];
    } else {
      estado.carrinho[id] = nova;
    }

    salvarCarrinho();
    renderizarCarrinho();
  }

  // ===============================================
  // 16. CHECKOUT DEMONSTRATIVO
  // ===============================================

  function abrirCheckout() {
    if (!quantidadeCarrinho()) return;

    $("#modal").innerHTML = `
      <button
        class="modal-close"
        data-close
        aria-label="Fechar checkout"
      >
        ×
      </button>

      <div class="checkout-modal">

        <span class="eyebrow">
          SEU PEDIDO ♡
        </span>

        <h2 id="modal-title">
          Finalizar pedido
        </h2>

        <p>
          Preencha seus dados para concluir
          sua compra.
        </p>


        <form id="checkout-form">

          <div class="form-grid">

            <div class="field">

              <label for="buyer-name">
                Nome completo *
              </label>

              <input
                id="buyer-name"
                required
                maxlength="100"
                placeholder="Seu nome"
              >

            </div>

            <div class="field">

              <label for="buyer-phone">
                Telefone *
              </label>

              <input
                id="buyer-phone"
                type="tel"
                required
                placeholder="(00) 00000-0000"
              >

            </div>

          </div>

          <div class="field">

            <label for="buyer-type">
              Como prefere receber? *
            </label>

            <select id="buyer-type" required>

              <option value="">
                Selecione
              </option>

              <option value="retirada">
                Retirada na loja
              </option>

              <option value="entrega">
                Entrega 
              </option>

            </select>

          </div>

          <div class="field">

            <label for="buyer-note">
              Observações
            </label>

            <textarea
              id="buyer-note"
              maxlength="1000"
              placeholder="Algum detalhe especial?"
            ></textarea>

          </div>

          <button
            type="submit"
            class="btn btn-primary full"
          >
            Concluir pedido →
          </button>

        </form>

      </div>
    `;

    abrirJanela("modal");
  }

  // ===============================================
  // 17. MENSAGEM DE PEDIDO CONCLUÍDO
  // ===============================================

  function concluirCheckout() {
    const quantidade = quantidadeCarrinho();

    estado.carrinho = {};
    salvarCarrinho();

    $("#modal").innerHTML = `
      <button
        class="modal-close"
        data-close
      >
        ×
      </button>

      <div class="success-modal">

        <div class="success-icon">♡</div>

        <span class="eyebrow">
          DOCES & DELÍCIAS
        </span>

        <h2 id="modal-title">
          Pedido concluído!
        </h2>

        <p>
          Sua simulação com
          <strong>${quantidade}</strong>
          ${
            quantidade === 1
              ? "produto foi concluída"
              : "produtos foi concluída"
          }
          com sucesso.

          
        </p>

        <button
          class="btn btn-primary"
          data-close
        >
          Continuar navegando →
        </button>

      </div>
    `;

    abrirJanela("modal");
  }

  // ===============================================
  // 18. CLIQUES NOS BOTÕES
  // ===============================================

  document.addEventListener("click", evento => {

    const botao = evento.target.closest(
      "button, a"
    );

    if (!botao) return;

    // Fechar janelas
    if (botao.hasAttribute("data-close")) {
      fecharTudo();
      return;
    }

    // Abrir detalhes do produto
    if (botao.dataset.product) {
      abrirDetalhes(botao.dataset.product);
      return;
    }

    // Abrir carrinho
    if (botao.id === "cart-open") {
      abrirJanela("carrinho");
      return;
    }

    // Menu mobile
    if (botao.id === "menu-toggle") {
      const menu = $("#mobile-nav");

      menu.classList.toggle("open");

      botao.setAttribute(
        "aria-expanded",
        menu.classList.contains("open")
      );

      return;
    }

    // Pesquisa do cabeçalho
    if (botao.id === "search-open") {
      location.hash = "#/produtos";

      setTimeout(() => {
        $("#catalog-search")?.focus();
      }, 80);

      return;
    }

    // Adicionar produto
    if (botao.dataset.add) {
      adicionarAoCarrinho(botao.dataset.add);
      return;
    }

    // Filtro de categoria
    if (botao.dataset.category) {
      estado.categoria = botao.dataset.category;
      estado.busca = "";

      const destino =
        estado.categoria === "todos"
          ? "#/produtos"
          : `#/produtos?categoria=${estado.categoria}`;

      if (location.hash !== destino) {
        location.hash = destino;
      } else {
        $$("[data-category]").forEach(item => {
          item.classList.toggle(
            "active",
            item.dataset.category === estado.categoria
          );
        });

        if ($("#catalog-search")) {
          $("#catalog-search").value = "";
        }

        renderizarProdutos();
      }

      return;
    }

    // Limpar filtros
    if (botao.hasAttribute("data-clear-filters")) {
      estado.busca = "";
      estado.categoria = "todos";

      if (location.hash !== "#/produtos") {
        location.hash = "#/produtos";
      } else {
        renderizarPagina();
      }

      return;
    }

    // Diminuir nos detalhes
    if (botao.hasAttribute("data-detail-minus")) {
      estado.quantidadeDetalhe = Math.max(
        1,
        estado.quantidadeDetalhe - 1
      );

      $("#detail-qty").textContent =
        estado.quantidadeDetalhe;

      return;
    }

    // Aumentar nos detalhes
    if (botao.hasAttribute("data-detail-plus")) {
      estado.quantidadeDetalhe = Math.min(
        99,
        estado.quantidadeDetalhe + 1
      );

      $("#detail-qty").textContent =
        estado.quantidadeDetalhe;

      return;
    }

    // Adicionar quantidade escolhida
    if (botao.dataset.addDetail) {
      adicionarAoCarrinho(
        botao.dataset.addDetail,
        estado.quantidadeDetalhe
      );

      fecharTudo();
      return;
    }

    // Diminuir no carrinho
    if (botao.dataset.minus) {
      alterarQuantidade(botao.dataset.minus, -1);
      return;
    }

    // Aumentar no carrinho
    if (botao.dataset.plus) {
      alterarQuantidade(botao.dataset.plus, 1);
      return;
    }

    // Remover produto
    if (botao.dataset.remove) {
      delete estado.carrinho[botao.dataset.remove];

      salvarCarrinho();
      renderizarCarrinho();
      return;
    }

    // Finalizar compra
    if (botao.id === "checkout-start") {
      abrirCheckout();
      return;
    }

  });

  // ===============================================
  // 19. PESQUISA
  // ===============================================

  document.addEventListener("input", evento => {
    if (evento.target.id === "catalog-search") {
      estado.busca = evento.target.value;
      renderizarProdutos();
    }
  });

  // ===============================================
  // 20. ORDENAÇÃO
  // ===============================================

  document.addEventListener("change", evento => {
    if (evento.target.id === "catalog-sort") {
      estado.ordenacao = evento.target.value;
      renderizarProdutos();
    }
  });

  // ===============================================
  // 21. FORMULÁRIOS
  // ===============================================

  document.addEventListener("submit", evento => {

    // Contato
    if (evento.target.id === "contact-form") {
      evento.preventDefault();

      if (!evento.target.reportValidity()) return;

      evento.target.reset();

     

      return;
    }

    // Finalização de pedido
    if (evento.target.id === "checkout-form") {
      evento.preventDefault();

      if (!evento.target.reportValidity()) return;

      concluirCheckout();
    }

  });

  // ===============================================
  // 22. FECHAR COM ESC
  // ===============================================

  document.addEventListener("keydown", evento => {
    if (evento.key === "Escape") {
      fecharTudo();
    }
  });

  // ===============================================
  // 23. INICIALIZAÇÃO
  // ===============================================

  $("#overlay").addEventListener(
    "click",
    fecharTudo
  );

  window.addEventListener(
    "hashchange",
    renderizarPagina
  );

  $("#copyright-year").textContent =
    new Date().getFullYear();

  atualizarContador();
  renderizarPagina();

})();
