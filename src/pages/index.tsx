import style from '../styles/index.module.scss'
import { Button } from '../components/Button';
import { ButtonCourses } from '../components/ButtonCourses';
import { CardAddress } from '../components/CardAddress';
import { CardMoreInfo } from '../components/CardMoreInfo';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function Home() {
  return (
    <div className={style.wrapper}>
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.contentCourses}>
          <div className={style.logoMaior}>
            <div className={style.logoTop}>
              <h3>A EXCELÊNCIA DA</h3>
            </div>
            <div className={style.logoLeft}>
              <h1>FAE</h1>
            </div>
            <div className={style.logoRightTop}>
              <h3>AGORA EM</h3>
            </div>
            <div className={style.logoRightBottom}>
              <h3>ARAUCÁRIA</h3>
            </div>
          </div>
          
          <div className={style.coursesContainerDescription}>
            <div className={style.coursesContentDescription}>
              <p>Chegamos com uma equipe de mestres 
                experientes no mercado, programa próprio de 
                parcelamento estudantil e reconhecimento:<br/> 
                <strong> NOTA MÁXIMA NO MEC!</strong>
              </p>
            </div>
          </div>

          <div className={style.coursesContainer}>
            <div className={style.headingCourses}>
              <h3>_nossos<strong> cursos</strong></h3>
            </div>
            <ButtonCourses title="ADMINISTRAÇÃO"/>
            <ButtonCourses title="CIÊNCIAS CONTÁBEIS"/>
            <ButtonCourses title="ENGENHARIA DE PRODUÇÃO"/>
            <ButtonCourses title="ENGENHARIA ELÉTRICA"/>
            <ButtonCourses title="ENGENHARIA MÊCANICA"/>
          </div>

          <div className={style.moreCoursesContainer}>
            <p>
              Confira também os cursos ofertados nos<br/>
              campus Curitiba e São José dos Pinhais<br/>
              [ <span>ver cursos</span> ] 
            </p>
          </div>

          <div className={style.moreCoursesContainerMobile}>
            <p>
              CURSOS EM <span>OUTRAS CIDADES</span> 
            </p>
          </div>

        </div>

        <div className={style.contentCenter}>
          <div className={style.triangle}>
            <figure>
              <picture>
                <source 
                  media="(max-width: 915px)"
                  srcSet="/estudante@0,75x.png"
                />
                <img src="/estudante.png" alt="estudante" />
              </picture>
            </figure>
            
            <img className={style.imgMenor} src="/estudante@0,75x.png" alt="estudante" />
          </div>
        </div>

        <div className={style.contentInscription}>

            <div className={style.logoImg}>
              <img src="Logofae.png" alt="Logo FAE" />
            </div>
            
            <div className={style.headingInscription}>
              <h3>Estão abertas as inscrições para o <strong>vestibular 2019</strong></h3>
            </div>
            
            <div className={style.bodyInscriptionDesktop}>
              <div className={style.bodyInscription}>
                <p>Chegamos em Araucária com o <br/>
                  compromisso da excelência FAE no ensino
                  superior, equipe de mestres experientes no 
                  mercado, programa próprio de
                  parcelamento estudantil e reconhecimento<br/>
                  <strong> NOTA MÁXIMA NO MEC!</strong>
                </p>
              </div>

              <div className={style.bodyInscription}>
                <p>Para ingressar, você pode usar a sua nota do
                  Enem ou agendar a prova. As inscrições
                  são gratuitas.
                  <strong> E não perca tempo: quanto<br/>
                    antes fizer sua matrícula, maior o
                    desconto<br/> da primeira mensalidade! ;)
                  </strong>
                </p>
              </div>
              <Button />
            </div>

            <div className={style.bodyInscriptionMobile}>
              <div className={style.contentInscriptionMobile}>
                <p>Você pode usar sua nota do
                  Enem ou agendar a prova para
                  o dia que preferir. As inscrições
                  são gratuitas. E quanto antes
                  fizer sua matrícula, maior o
                  desconto na primeira
                  mensalidade! ;)
                </p>
                <Button />
              </div>
              <figure>
                <picture>
                  <img src="/estudante@0,5x.png" alt="estudante" />
                </picture>
              </figure>
            </div>

            <div className={style.triangleFooterMobile}>
              <div className={style.triangleFooter}>

              </div>
            </div>

            <div className={style.bodyInscription}>
              <p>
                Saiba mais sobre o <strong style={{textDecoration: "underline"}}>Vestibular FAE</strong>
              </p>
            </div>
        </div>
      </div>
    </div>

    <footer>
      <div className={style.footer}>
        <CardAddress 
          location="Rua São Vicente de Paulo, 1060"
          city="Centro / Araucária - PR"
        />
        <CardMoreInfo 
          whatsapp="41 99277-7200"
          email="vestibular@fae.edu"
        />
      </div>
    </footer>
    
    {/* <MapContainer 
      center={[-25.5811979,-49.3954889]}
      zoom={15}
      style={{ width: '100%', height: '100%' }}
    >
      <TileLayer 
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-25.5811979,-49.3954889]}>
      </Marker>
    </MapContainer> */}

    <div className={style.map}>
      <figure>
        <picture>
          <img src="/map.png" alt="estudante" />
        </picture>
      </figure>
    </div>

    <div className={style.logoMenorFooter}>
      <div>
        <figure>
          <picture>
            <source 
              media="(max-width: 768px)"
              srcSet="/logoFAElight.png"
            />
            <img src="LogoFooter.png" alt="LogoFAEfooter" />
          </picture>
        </figure>
      </div>
    </div>
    
    </div>
  )
}

export async function getStaticProps(){
  return{
    props: {
      data: "",
    },
    revalidate: 60 * 60 * 8,
  }
}
