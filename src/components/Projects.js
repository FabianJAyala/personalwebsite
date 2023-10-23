import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Adri-Magic-Planner.jpg";
import projImg2 from "../assets/img/UNeedWeDo-Website.jpg";
import projImg3 from "../assets/img/Cache-Logistica-Website.jpg";
import projImg4 from "../assets/img/Little-Lemon-Front-End-Capstone.png";
import projImg5 from "../assets/img/Little-Lemon-DRF-Project.png";
import projImg6 from "../assets/img/Little-Lemon-Back-End-Capstone.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Adri Magic Planner Website",
      description: "First Project as a Full Stack Developer, website developed with React for a Disney and Universal Agency.",
      imgUrl: projImg1,
      link: "https://adrimagicplanner.com/",
    },
    {
      title: "UNeedWeDo Website",
      description: "Fully implemented multi-language ecommerce site on WordPress, made for a digital solutions company.",
      imgUrl: projImg2,
      link: "https://uneedwedo.com/",
    },
    {
      title: "Caché Logística Website",
      description: "Website made for a logistics company in La Paz - Bolivia.",
      imgUrl: projImg3,
      link: "https://cache.uneedwedo.com/cache-servicios-logisticos/",
    },
    {
      title: "Little Lemon: React Font-End Project Capstone",
      description: "Front-End Developer Project Capstone for the Little Lemon Restaurant.",
      imgUrl: projImg4,
      link: "https://github.com/FabianJAyala/project_capstone",
    },
    {
      title: "Little Lemon: DRF Restaurant API",
      description: "API developed for the Little Lemon Restaurant using Django REST Framework.",
      imgUrl: projImg5,
      link: "https://github.com/FabianJAyala/LittleLemonAPI",
    },
    {
      title: "Little Lemon: Django Back-End Project Capstone",
      description: "Back-End Developer Project Capstone for the Little Lemon Restaurant.",
      imgUrl: projImg6,
      link: "https://github.com/FabianJAyala/LittleLemonBackEndCapstone",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Professional Career</h2>
                <p>Since 2017, I have been actively engaged in entrepreneurial ventures, applying my expertise as an industrial engineer. In 2020, I also added web design to my skill set. This year I became a Full-Stack developer.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Resume</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second" align="center">
                      <h3>Co-Owner at Caché - Last Mile Logistics (Entrepreneurship)</h3>
                      <h4>From June, 2022 to April, 2023</h4>
                      <p>Established a picking and delivery business to make theecommerce viable in La Paz. Developed the entity relationshipdiagram from order request to delivery. Utilized VRP technologyfor delivery routes. Integrated CRM into the prospect and salesprocess. Also, developed a SEO-optimized website and managed the digital marketing campaigns.</p>
                      <h3>Co-Owner at UNeedWeDo - Digital Solutions (Entrepreneurship)</h3>
                      <h4>From April, 2020 to May, 2022</h4>
                      <p>Developed a multi-lingual website, integrating WooCommerceand diverse payment channels. Optimized the site with SEO.Managed advertising campaigns on Google Ads. Additionally, handled social media accounts, creating engagingposts and reels, while also writing and publishing blog articles.</p>
                      <h3>Warehouse Manager at ZTE Bolivia (Telecommunications)</h3>
                      <h4>From October, 2019 to March, 2020</h4>
                      <p>Proficiently managed a 1000m2 warehouse, optimizing storageefficiency, coordinating logistics, managing the WMS, andsupervising a team of 5. Additionally, prepared all documentationfor an International ZTE Company audit, and successfully led a 15-member team during the warehouse relocation process.</p>
                      <h3>Owner at Gingies (Entrepreneurship)</h3>
                      <h4>From February, 2017 to September, 2019</h4>
                      <p>Established a business based on my degree project: 'Productionof Hard Candies with Antibacterial Properties, made with Gingerand Honey.' FDA-approved. The candies were sold effectively atfairs, kiosks, and pharmacies. Managed the marketing strategies.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background"></img>
    </section>
  )
}