import "./App.css";

function App() {
  const handlePDFClick = () => {
    const imageURL = "resume.pdf";
    window.open(imageURL, "_blank");
  };

  return (
    <div className="json-container">
      <p className="bracket">&#123;</p>

      <div className="indent-1">
        {/* Introduction */}
        <div className="flex flex-row mt-5">
          <div>
            <span className="main-title">"Hey! I'm Jason"</span>
            <span className="title-punctuation">:</span>
            <br className="md:hidden" />
            <span className="subtitle">"but you can call me JSON"</span>
            <span className="title-punctuation">,</span>
          </div>
        </div>

        {/* About */}
        <p className="section-title mt-8">"About":</p>
        <div className="string-value indent-text">
          "I love solving complex problems and building cool things with software. Lately, I’ve been focused on full-stack development, but I’m also having fun learning about functional programming and operating systems."
          <br />
          <br />
          In my free time I'm either rock climbing, running, or just learning something new."
          <span className="text-white">,</span>
        </div>

        {/* Links */}
        <p className="section-title mt-8">"Links":</p>
        <p className="bracket indent-1">&#123;</p>
        <div className="indent-2">
          <p className="mb-2">
            <span className="property-key">"LinkedIn":</span>
            <a
              target="_blank"
              href="https://linkedin.com/in/jasonrustom"
              className="json-link ml-2"
            >
              "https://linkedin.com/in/jasonrustom"
            </a>
            <span className="text-white">,</span>
          </p>

          <div className="flex flex-row items-center mb-2 mobile-link-container">
            <span className="property-key">"GitHub":</span>
            <div className="mobile-link-line">
              <a
                target="_blank"
                href="https://github.com/jrustom"
                className="json-link"
              >
                "https://github.com/jrustom"
              </a>
              <span className="text-white">,</span>
            </div>
          </div>

          <div className="flex flex-row items-center mb-2">
            <span className="property-key">"Resume":</span>
            <a
              className="json-link cursor-pointer ml-2"
              onClick={handlePDFClick}
            >
              "PDF"
            </a>
            <span className="text-white">,</span>
          </div>
        </div>
        <p className="bracket indent-1">&#125;,</p>

        {/* Education */}
        <p className="section-title mt-6">"Education":</p>
        <p className="bracket indent-1">&#123;</p>
        <div className="indent-2">
          <p className="mb-2">
            <span className="property-key">"School":</span>
            <span className="string-value ml-2">"McGill University"</span>
            <span className="text-white">,</span>
          </p>
          <p className="mb-2">
            <span className="property-key">"Degree":</span>
            <span className="string-value ml-2">
              "Software Engineering with Applied AI"
            </span>
            <span className="text-white">,</span>
          </p>
          <div className="mb-2">
            <span className="property-key">"Coursework":</span>
            <div className="indent-1">
              <p className="array-bracket indent-1">[</p>
              <div className="indent-2">
                <p className="array-item">"Algorithms and Data Structures",</p>
                <p className="array-item">"Object-Oriented Programming",</p>
                <p className="array-item">"Computer Architecture",</p>
                <p className="array-item">"Operating Systems"</p>
                {/* <p className="array-item"> */}
                {/*   "Design Patterns and Software Validation" */}
                {/* </p> */}
              </div>
              <p className="array-bracket indent-1">]</p>
            </div>
          </div>
        </div>
        <p className="bracket indent-1">&#125;,</p>

        {/* Experience */}
        <p className="section-title mt-6">"Experience":</p>
        <div className="indent-1">
          <p className="array-bracket">[</p>
          <div className="indent-2">
            <p className="bracket indent-1">&#123;</p>
            <div className="indent-2">
              <p className="mb-2">
                <span className="property-key">"Company":</span>
                <span className="string-value ml-2">"Intact"</span>
              </p>
              <p className="mb-2">
                <span className="property-key">"Position":</span>
                <span className="string-value ml-2">
                  "Software Developer Intern"
                </span>
              </p>
              <div className="mb-2">
                <span className="property-key">"Description":</span>
                <p className="description-text">
                  "Drove backend service development, implemented custom workflow automations, and delivered high-impact UX features."
                </p>
              </div>
            </div>
            <p className="bracket indent-1">&#125;,</p>

            <p className="bracket indent-1">&#123;</p>
            <div className="indent-2">
              <p className="mb-2">
                <span className="property-key">"Company":</span>
                <span className="string-value ml-2">"ParkUsher"</span>
              </p>
              <p className="mb-2">
                <span className="property-key">"Position":</span>
                <span className="string-value ml-2">
                  "Full-Stack Software Engineering Intern"
                </span>
              </p>
              <div className="mb-2">
                <span className="property-key">"Description":</span>
                <p className="description-text">
                  "Built and deployed key React Native features, upgraded backend infrastructure, and streamlined CI/CD pipelines to enhance scalability and user experience."
                </p>
              </div>
            </div>
            <p className="bracket indent-1">&#125;</p>
          </div>
          <p className="array-bracket">],</p>
        </div>

        {/* Projects */}
        <p className="section-title mt-6">"Projects":</p>
        <div className="indent-1">
          <p className="array-bracket">[</p>
          <div className="indent-2">
            <p className="bracket indent-1">&#123;</p>
            <div className="indent-2">
              <p className="mb-2">
                <span className="property-key">"Title":</span>
                <span className="string-value ml-2">"Hotspot"</span>
                <span className="text-white">,</span>
              </p>
              <div className="mb-2">
                <span className="property-key">"Links":</span>
                <div className="indent-1">
                  <p className="array-bracket indent-1">[</p>
                  <div className="indent-2">
                    <p className="mb-2">
                      <a
                        href="https://hotspotapp.vercel.app"
                        target="_blank"
                        className="json-link ml-2"
                      >
                        "https://hotspotapp.vercel.app"
                      </a>
                      <span className="text-white">,</span>
                    </p>
                    <p className="mb-2">
                      <a
                        href="https://github.com/jrustom/hotspot"
                        target="_blank"
                        className="json-link ml-2"
                      >
                        "https://github.com/jrustom/hotspot"
                      </a>
                    </p>
                  </div>
                  <p className="array-bracket indent-1">],</p>
                </div>
              </div>
              <p className="mb-2">
                <span className="property-key">"Tech Stack":</span>
                <span className="ml-2">
                  <span className="inline-array-bracket">[</span>
                  <span className="inline-array">
                    "TypeScript", "React", "Spring Boot"
                  </span>
                  <span className="inline-array-bracket">],</span>
                </span>
              </p>
              <p className="mb-2">
                <span className="property-key">"Description":</span>
                <div className="indent-1">
                  <p className="array-item">
                    "A full-stack web application that enables location-based
                    group chats through interactive map hotspots. Uses
                    WebSockets to deliver seamless real-time communication."
                  </p>
                </div>
              </p>
            </div>
            <p className="bracket indent-1">&#125;,</p>

            <p className="bracket indent-1">&#123;</p>
            <div className="indent-2">
              <p className="mb-2">
                <span className="property-key">"Title":</span>
                <span className="string-value ml-2">
                  "Montreal Junior Tennis League"
                </span>
                <span className="text-white">,</span>
              </p>
              <div className="mb-2">
                <span className="property-key">"Links":</span>
                <div className="indent-1">
                  <p className="array-bracket indent-1">[</p>
                  <div className="indent-2">
                    <p className="mb-2">
                      <a
                        href="https://mtljrinterclubtennis.com"
                        target="_blank"
                        className="json-link ml-2"
                      >
                        "https://mtljrinterclubtennis.com"
                      </a>
                    </p>
                  </div>
                  <p className="array-bracket indent-1">],</p>
                </div>
              </div>
              <p className="mb-2">
                <span className="property-key">"Tech Stack":</span>
                <span className="ml-2">
                  <span className="inline-array-bracket">[</span>
                  <span className="inline-array">"JavaScript", "React"</span>
                  <span className="inline-array-bracket">],</span>
                </span>
              </p>
              <p className="mb-2">
                <span className="property-key">"Description":</span>
                <div className="indent-1">
                  <p className="array-item">
                    "A dynamic website for a youth tennis league, providing
                    real-time schedules and updates for over 300 parents and
                    players. The site integrates the Google Sheets API for
                    automated content management and provides English and French
                    translations for a bilingual audience."
                  </p>
                </div>
              </p>
            </div>
            <p className="bracket indent-1">&#125;,</p>

            <p className="bracket indent-1">&#123;</p>
            <div className="indent-2">
              <p className="mb-2">
                <span className="property-key">"Title":</span>
                <span className="string-value ml-2">"Build-A-Book"</span>
                <span className="text-white">,</span>
              </p>
              <div className="mb-2">
                <span className="property-key">"Links":</span>
                <div className="indent-1">
                  <p className="array-bracket indent-1">[</p>
                  <div className="indent-2">
                    <p className="mb-2">
                      <a
                        href="https://github.com/jrustom/Build-a-Book"
                        target="_blank"
                        className="json-link ml-2"
                      >
                        "https://github.com/jrustom/Build-a-Book"
                      </a>
                    </p>
                  </div>
                  <p className="array-bracket indent-1">],</p>
                </div>
              </div>
              <p className="mb-2">
                <span className="property-key">"Tech Stack":</span>
                <span className="ml-2">
                  <span className="inline-array-bracket">[</span>
                  <span className="inline-array">
                    "JavaScript", "React", "Python"
                  </span>
                  <span className="inline-array-bracket">],</span>
                </span>
              </p>
              <p className="mb-2">
                <span className="property-key">"Description":</span>
                <div className="indent-1">
                  <p className="array-item">
                    "An AI-powered platform that transforms simple prompts into
                    fully illustrated children's books, making storytelling
                    accessible to educators and parents. Recognized with the
                    Best Use of AI in Education award for its innovative
                    approach to educational content creation."
                  </p>
                </div>
              </p>
            </div>
            <p className="bracket indent-1">&#125;</p>
          </div>
          <p className="array-bracket">],</p>
        </div>

        {/* Contact */}
        <p className="section-title mt-8">"Contact":</p>
        <p className="bracket indent-1">&#123;</p>
        <div className="indent-2">
          <p className="mb-2">
            <span className="property-key">"Email":</span>
            <a
              href="mailto:jason.rustom@mail.mcgill.ca"
              className="json-link ml-2"
            >
              "jason.rustom@mail.mcgill.ca"
            </a>
            <span className="text-white">,</span>
          </p>

          <div className="flex flex-row items-center mb-2">
            <span className="property-key">"Phone":</span>
            <a href="tel:+15149792004" className="json-link ml-2">
              "514-979-2004"
            </a>
            <span className="text-white">,</span>
          </div>
        </div>
        <p className="bracket indent-1">&#125;</p>
      </div >
      <p className="bracket">&#125;</p>
    </div >
  );
}

export default App;
