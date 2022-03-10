import styled from 'styled-components'
import { Paragraph, H5, ParagraphBold } from './Typography'
import { devices } from '../utils/devices'
import WWF from '../public/icons/wwf.svg'
import ClimateView from '../public/icons/climateview.svg'
import VBK from '../public/icons/vbk.svg'
import WeDontHaveTime from '../public/icons/we-dont-have-time.svg'
import Klimatklubben from '../public/icons/klimatklubben.svg'
import Argand from '../public/icons/argand.svg'
import StormGeo from '../public/icons/stormgeo.svg'
import NewsletterSubscribe from './NewsletterSubscribe'
import Emoji from './Emoji'
import ArrowDown from '../public/icons/arrow-down-round.svg'
import ArrowUp from '../public/icons/arrow-up-green.svg'
import { useState, useEffect } from 'react'
import PageWrapper from './PageWrapper'

const Foot = styled.footer`
  width: 100%;
  display: flex;

  @media only screen and (${devices.tablet}) {
    justify-content: center;
  }
`

const ContentWrapper = styled.div`
  width: 840px;
`

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;

  & .arrow {
    display: block;

    @media only screen and (${devices.tablet}) {
      display: none;
    }
  }
`

const ToggleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  .mobile {
    background: black;
  }

  .desktop {
    background: yellow;
  }
`

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 40px;
  max-width: 750px;
`

const FlexSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: center;
  align-items: center;

  @media only screen and (${devices.tablet}) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0 60px;
    justify-content: center;
    width: 90%;
  }
`

const IconSection = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 15px;
  margin-bottom: 60px;
  width: 350px;

  @media only screen and (${devices.tablet}) {
    height: 200px;
    width: 300px;
  }
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (${devices.tablet}) {
    margin-top: 5px;
    height: 80px;
  }
`

const Footer = () => {
  const [toggleFirst, setToggleFirst] = useState(false)
  const [toggleSecond, setToggleSecond] = useState(false)
  const [toggleThird, setToggleThird] = useState(false)

  const resizeHandler = () => {
    if (window.innerWidth >= 768) {
      setToggleFirst(true)
      setToggleSecond(true)
      setToggleThird(true)
    }
  }

  useEffect(() => {
    window.onresize = resizeHandler
    resizeHandler()
  }, [])

  return (
    <PageWrapper backgroundColor="dark">
      <Foot>
        <ContentWrapper>
          <TextSection>
            <HeaderSection>
              <H5>Om Klimatkollen</H5>
              {toggleFirst ? (
                <ArrowUp className="arrow" onClick={() => setToggleFirst(!toggleFirst)} />
              ) : (
                <ArrowDown
                  className="arrow"
                  onClick={() => setToggleFirst(!toggleFirst)}
                />
              )}
            </HeaderSection>
            {toggleFirst && (
              <ToggleSection>
                <Paragraph>
                Klimatkollen visar enkel fakta om klimatomställningen, anpassad för att delas i sociala kanaler och läsas i mobilen. Här kan du se hur det går med koldioxidutsläppen för Sverige som helhet och för enskilda kommuner. Du kan också se den mängd koldioxid vi har kvar att släppa ut enligt Parisavtalet och hur stort glappet är mellan målet och hur det faktiskt går. Du kan också se de största utsläppskällorna i din kommun och hur mycket (eller lite) utsläppen i din kommun minskar jämfört med andra. 
                </Paragraph>
                <Paragraph>
                  Vi utvecklar Klimatkollen kontinuerligt. Skriv upp dig{' '}
                  <a href="#signup">här</a> så berättar vi när vi släpper något nytt.
                </Paragraph>
                <Paragraph>
                <b>Stötta oss!</b> Skicka ett mejl till <a href="mailto:hej@klimatkollen.se">hej@klimatkollen.se</a> så berättar vi hur du kan bidra. 
                </Paragraph>
                <ParagraphBold>Hur ska jag använda Klimatkollen?</ParagraphBold>
                <Paragraph>
                Använd Klimatkollen för ta reda på hur din kommuns koldioxidutsläpp ser ut, dela fakta med andra och kräva svar på hur vi ska minska glappet mellan mål och verklighet. Hur vill partierna minska utsläppen? Vilka lösningar finns? Klimatkollen hjälper dig att ställa rätt frågor.               </Paragraph>
                <Paragraph>
                  All fakta på Klimatkollen kommer från offentliga källor. Vi redovisar
                  alla källor tydligt så att du enkelt kan kolla upp och läsa mer. Om
                  något blivit fel, mejla gärna oss på{' '}
                  <a href="mailto:hej@klimatkollen.se">hej@klimatkollen.se</a> så att vi
                  kan ändra.
                </Paragraph>
                <Paragraph>
                  Klimatkollen är utvecklad av Klimatbyrån ideell förening med hjälp av{' '}
                  <a href="https://iteam.se/" target="_blank" rel="noreferrer">
                    Iteam
                  </a>. Vi tror på kraften i att visualisera fakta på ett enkelt och
                  tilltalande sätt. På det sättet vill vi bidra till en mer faktabaserad
                  klimatdebatt och åtgärder som minskar utsläppen i linje med
                  Parisavtalet.
                </Paragraph>
              </ToggleSection>
            )}
          </TextSection>
          <TextSection>
            <HeaderSection>
              <H5>
                We <Emoji symbol="❤️" label="heart" /> Parisavtalet
              </H5>
              {toggleSecond ? (
                <ArrowUp
                  className="arrow"
                  onClick={() => setToggleSecond(!toggleSecond)}
                />
              ) : (
                <ArrowDown
                  className="arrow"
                  onClick={() => setToggleSecond(!toggleSecond)}
                />
              )}
            </HeaderSection>
            {toggleSecond && (
              <ToggleSection>
                <Paragraph>
                  Parisavtalet är ett juridiskt bindande avtal mellan världens länder om
                  att begränsa den globala uppvärmningen till väl under två grader med
                  sikte på 1,5 grader.
                </Paragraph>
                <Paragraph>
                  För att nå målet måste världen som helhet halvera växthusgasutsläppen
                  till 2030 och nå nära noll utsläpp senast 2050.
                </Paragraph>
                <Paragraph>
                  Enligt Parisavtalet ska rika länder, som historiskt sett släppt ut
                  mycket växthusgaser, ta ett större ansvar för att genomföra
                  klimatomställningen. Där ingår Sverige, som både ska gå före när det
                  gäller få ner utsläppen, men också hjälpa mer sårbara länder att ställa
                  om. I Sverige stöds Parisavtalet av alla partier i riksdagen.
                </Paragraph>
                <Paragraph>
                  Läs mer om Parisavtalet hos vår samarbetspartner{' '}
                  <a href="https://wwf.se/klimat" target="_blank" rel="noreferrer">
                    WWF
                  </a>.
                </Paragraph>
              </ToggleSection>
            )}
          </TextSection>
          <TextSection>
            <HeaderSection>
              <H5>Om koldioxidbudgetar</H5>
              {toggleThird ? (
                <ArrowUp className="arrow" onClick={() => setToggleThird(!toggleThird)} />
              ) : (
                <ArrowDown
                  className="arrow"
                  onClick={() => setToggleThird(!toggleThird)}
                />
              )}
            </HeaderSection>
            {toggleThird && (
              <ToggleSection>
                <Paragraph>
                  En koldioxidbudget är den mängd koldioxid vi har kvar att släppa ut innan vi riskerar att öka temperaturen så mycket att det bryter mot Parisavtalet. Det är ett sätt att åskådliggöra utsläppsutrymmet som finns kvar om vi ska hålla uppvärmningen under 1,5 grader. FN:s klimatpanel, IPCC har tagit fram koldioxidbudgetar för vilken mängd klimatutsläpp som motsvarar vilka temperaturökningar, med olika nivåer av sannolikhet. Klimatkollen visar hur en sådan budget kan fördelas för Sverige och våra kommuner.
                </Paragraph>
                <Paragraph>
                  Vi har valt att visa en koldioxidbudget för utsläpp inom Sveriges gränser, för att det är så världens länder rapporterar inom klimatkonventionen. Sverige har även hög klimatbelastning från de varor som vi importerar från andra länder och bidrar därför till utsläpp i andra delar av världen. Dessa konsumtionsbaserade utsläpp är inte medräknade i Klimatkollens koldioxidbudget. 
                </Paragraph>
                <Paragraph>
                  Läs mer om hur koldioxidbudgetarna är beräknade hos vår samarbetspartner <a href="https://www.climateview.global/" target="_blank" rel="noreferrer">ClimateView</a>. 
                  Läs mer om konsumtionsbaserade utsläpp hos vår samarbetspartner <a href="https://wwf.se/" target="_blank" rel="noreferrer">Världsnaturfonden WWF</a>. 
                </Paragraph>
                <ParagraphBold>Så beräknas koldioxidbudgetarna</ParagraphBold>
                <Paragraph>
                  Först väljs en global koldioxidbudget baserat på IPCC:s olika scenarier. Dessa scenarier baseras på vilken mängd koldioxidutsläpp som förväntas leda till vilka temperaturhöjningar, och med vilken sannolikhet. Klimatkollen har valt 1,5℃ och 50% sannolikhet, vilket ger en global koldioxidbudget på 500 Gigaton (Gt).
                </Paragraph>
                <Paragraph>
                  Sedan görs avdrag från den globala koldioxidbudgeten. En viss del av budgeten öronmärks för en viss typ av utsläpp, som bedöms nödvändiga under omställningen. Klimatkollen följer praxis och gör avdrag för mark- och skogsanvändning samt cementproduktion. Då återstår X Gt.
                </Paragraph>
                <Paragraph>
                  Därefter tillämpas Parisavtalets rättviseprincip om att utvecklade länder med större historiska utsläpp ska ta ett större ansvar än utvecklingsländer, som behöver längre tid på sig att ställa om. Fördelningen vi valt att visa är att 65% av den återstående globala koldioxidbudgeten tilldelas utvecklingsländerna medan 35% går till utvecklade länder, däribland Sverige. Då återstår X Gt.
                </Paragraph>
                <Paragraph>
                  Till sist räknas Sveriges och kommunernas andelar av den globala koldioxidbudgeten fram. Ett avdrag görs för internationellt flyg och sjöfart. Klimatkollen följer sedan standard och använder den så kallade &#8220;grandfathering-principen&#8221;, vilket innebär att fördelningen baseras på historiska utsläpp. De som har släppt ut mer får en större del av budgeten än de som släppt ut mindre. Då återstår X Gt för Sverige som helhet.
                </Paragraph>
              </ToggleSection>
            )}
          </TextSection>
          <TextSection id="signup">
            <ParagraphBold>Vill du få nyheter om Klimatkollen?</ParagraphBold>
            <NewsletterSubscribe />
          </TextSection>
          <TextSection>
            <H5>Våra samarbetspartners</H5>
          </TextSection>
          <FlexSection>
            <IconSection>
              <IconWrapper>
                <a href="https://www.wwf.se/" target="_blank" rel="noreferrer">
                  <WWF />
                </a>
              </IconWrapper>
              <Paragraph>
                Global miljöorganisation med 200 000 svenska supportrar.
              </Paragraph>
            </IconSection>
            <IconSection>
              <IconWrapper>
                <a
                  href="https://www.climateview.global/"
                  target="_blank"
                  rel="noreferrer">
                  <ClimateView />
                </a>
              </IconWrapper>
              <Paragraph>
                Hjälper kommuner och städer att planera och analysera klimatarbetet.
              </Paragraph>
            </IconSection>
            <IconSection>
              <IconWrapper>
                <a href="https://varabarnsklimat.se/" target="_blank" rel="noreferrer">
                  <VBK />
                </a>
              </IconWrapper>
              <Paragraph>
                En ideell påverkansorganisation som tar fajten för barns rättigheter i klimatomställningen.
              </Paragraph>
            </IconSection>
            <IconSection>
              <IconWrapper>
                <a href="https://www.klimatklubben.se/" target="_blank" rel="noreferrer">
                  <Klimatklubben />
                </a>
              </IconWrapper>
              <Paragraph>
                Samlar människor för att skapa opinion och klimatengagemang. 
              </Paragraph>
            </IconSection>
            <IconSection>
              <IconWrapper>
                <a
                  href="https://www.wedonthavetime.org/"
                  target="_blank"
                  rel="noreferrer">
                  <WeDontHaveTime />
                </a>
              </IconWrapper>
              <Paragraph>
                Världens största sociala nätverk för klimataktion. Skapa din egen kampanj
                {' '}
                <a
                  href="https://www.wedonthavetime.org/"
                  target="_blank"
                  rel="noreferrer">
                  här
                </a>.
              </Paragraph>
            </IconSection>
            <IconSection>
              <IconWrapper>
                <a href="https://argandpartners.com/" target="_blank" rel="noreferrer">
                  <Argand />
                </a>
              </IconWrapper>
              <Paragraph>
                Investerar i klimatlösningar.
                </Paragraph>
            </IconSection>
            <IconSection>
              <IconWrapper>
                <a href="https://www.stormgeo.com/" target="_blank" rel="noreferrer">
                  <StormGeo />
                </a>
              </IconWrapper>
              <Paragraph>
                Skandinaviens första privata väderföretag, en global leverantör av vädertjänster. 
              </Paragraph>
            </IconSection>
          </FlexSection>
        </ContentWrapper>
      </Foot>
    </PageWrapper>
  )
}

export default Footer