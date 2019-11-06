import React from 'react'
import { Container, Header, Message, Icon, Grid } from 'semantic-ui-react'

function Content(props) {
  const contentStyle = {
    paddingTop: 30,
    paddingBottom: 20
  }

  return (
    <Container text style={contentStyle}>
      <Header as="h1">Tervetuloa bullshit-decryptauksen pariin!</Header>
      <p>
        Tämä sivu on ratkaisu Solidabiksen koodihaasteeseen. Tavoitteena oli
        decryptata salattuja lauseita ja suodattaa niistä suomenkieliset
        (non-bullshit), sekä esittää tulokset web-käyttöliittymässä.
      </p>
      <p>
        <Message>
          <Message.Header>Toteutus pähkinänkuoressa:</Message.Header>
          <Message.List as="ol">
            <Message.Item>
              Luodaan ngram-malli n. 2700 suomenkielisen uutisen otsikosta
            </Message.Item>
            <Message.Item>
              Iteroidaan kryptatun aineiston mahdolliset caesar-salauksen
              tulokset
            </Message.Item>
            <Message.Item>
              Scorataan tulokset mallilla ja säilytetään parhaan tuloksen
              (muistuttaa suomenkieltä) decryptattu lause
            </Message.Item>
          </Message.List>
        </Message>
      </p>
      <p>
        Non-bullshitiksi tunnistui 50 lausetta 200:sta. Klikkaamalla alla olevia
        lauseita, näet alkuperäisen bullshitin tai parhaan mahdollisen
        käännöksen, sekä mallin laskeman todennäköisyyden non-bullsihitiksi.
        Ennustavuutta on mahdollista parantaa mallin algoritmia kehittämällä tai
        training dataa lisäämällä. Nyt tavoitteena oli lauseiden kategorisointi
        bullshit/non-bullshit, johon malli on riittävä. Alle 67%
        todennäköisyyden lauseet eivät ole järkevää suomenkieltä.
      </p>
      <p>
        Toteutus on tehty JavaScriptillä ja UI Reactilla. Mallin luonti ja datan
        analysointi tapahtuu selaimessa sivun lataamisen yhteydessä.
        Todellisessa tuotannossa mallia ei olisi tarvetta luoda joka kerta
        uudestaan ja palvelimelle olisi järkevää ulkoistaa datan käsittelyä ja
        lataamista. Lähdekoodi löytyy
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/nurvel/js-language-detector"
        >
          {' '}
          GitHubista
        </a>
        .
      </p>
      <p>
        <Message positive>
          <Grid columns="equal">
            <Grid.Row>
              <Grid.Column>
                <Icon name="hand point up outline" size="big" />
              </Grid.Column>
              <Grid.Column width={14}>
                Klikkaamalla alla olevia lauseita näet niiden alkuperäisen
                muodon / parhaan suomenkieltä vastaavaan tuloksen.
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Message>
      </p>
    </Container>
  )
}

export default Content
