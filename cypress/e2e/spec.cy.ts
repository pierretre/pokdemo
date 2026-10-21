describe('testing the main UI', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon?limit=*', {
      statusCode: 200,
      body: {
        count: 3,
        results: [
          { name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/' },
          { name: 'charmeleon', url: 'https://pokeapi.co/api/v2/pokemon/5/' },
          { name: 'charizard', url: 'https://pokeapi.co/api/v2/pokemon/6/' },
        ],
      },
    }).as('getPokemons');

    cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon/*', (req) => {
      const id = Number(req.url.split('/').filter(Boolean).pop());
      req.reply({
        id,
        name: `poke-${id}`,
        height: 0,
        weight: 0,
        sprites: { front_default: null },
        types: [],
        stats: [],
      });
    });

    cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon/6', { fixture: 'charizard.json' }).as('getCharizard');

    cy.visit('/');
    cy.wait('@getPokemons');
  });

  it('checks unfiltered list of pokemons is the right length', () => {
    cy.getListPoksOptions().should('have.length', 3);
  });

  it('filters all the select options when typing in the search input', () => {
    cy.getIdField().should('be.visible')
    cy.getIdField().type('char', { force: true })
    cy.getListPoksOptions().should('have.length', 3);
  });


  it('filters some of the select options when typing in the search input', () => {
    cy.getIdField().should('be.visible')
    cy.getIdField().type('charm', { force: true })
    cy.getListPoksOptions().should('have.length', 2);
  });

  it('filters none of the select options when typing in the search input', () => {
    cy.getIdField().should('be.visible')
    cy.getIdField().type('bul', { force: true })
    cy.getListPoksOptions().should('have.length', 0);
  });

  it('filters all the select options when typing in the search input', () => {
    cy.getIdField().should('be.visible')
    cy.getIdField().type('bul', { force: true })
    cy.getListPoksOptions().should('have.length', 0);
  });

  it('get pokemon details', () => {
    cy.getIdField().type('bul', { force: true })
    cy.getListPoksOptions().should('have.length', 0);
  });

  it('displays the details of the pokemon selected in the list', () => {
    cy.getListPoks().select('6');

    cy.fixture('charizard.json').then((charizard) => {
      cy.getPokemonTitle().should('contain.text', '0006').and('contain.text', 'charizard');
      cy.getPokemonImg().should('have.attr', 'src', charizard.sprites.front_default);

      cy.getPokemonTypes().find('p').should('have.length', 2);
      cy.getPokemonTypes().should('contain.text', 'fire').and('contain.text', 'flying');

      cy.getPokemonHeight().should('contain.text', '1.7 m');
      cy.getPokemonWeight().should('contain.text', '90.5 kg');

      cy.getPokemonStats().should('have.length', charizard.stats.length);
      charizard.stats.forEach((stat: { base_stat: number; stat: { name: string } }, i: number) => {
        cy.getPokemonStats().eq(i).find('td').eq(0).should('have.text', stat.stat.name);
        cy.getPokemonStats().eq(i).find('td').eq(1).should('have.text', String(stat.base_stat));
      });
    });
  });

});
