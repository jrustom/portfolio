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
              "Software Engineering Co-op with Applied AI"
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
                <p className="array-item">"Algorithm Design",</p>
                <p className="array-item">
                  "Design Patterns and Software Validation"
                </p>
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
                <div className="indent-1">
                  <p className="array-bracket indent-1">[</p>
                  <div className="indent-2">
                    <p className="array-item">
                      "Delivered multiple high-impact A/B tests that optimized
                      user experience and generated millions in additional
                      revenue",
                    </p>
                    <p className="array-item">
                      "Created an automation script that eliminated repetitive
                      development tasks, increasing development productivity by
                      80%",
                    </p>
                    <p className="array-item">
                      "Onboarded and mentored a new team member, providing
                      comprehensive knowledge of systems and processes to ensure
                      rapid productivity in their first weeks",
                    </p>
                    <p className="array-item">
                      "Contributed to architecture discussions and independently
                      developed a new Spring Boot service with potential to
                      secure 50,000+ new customer contracts and substantial
                      future revenue growth"
                    </p>
                  </div>
                  <p className="array-bracket indent-1">]</p>
                </div>
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
                <div className="indent-1">
                  <p className="array-bracket indent-1">[</p>
                  <div className="indent-2">
                    <p className="array-item">
                      "Developed and deployed more than 5 key features using
                      React Native and TypeScript, boosting company revenue
                      potential by 400% while improving user experience for over
                      15,000 users",
                    </p>
                    <p className="array-item">
                      "Upgraded back-end infrastructure to support multi-city
                      operations, driving a 200% increase in user reach",
                    </p>
                    <p className="array-item">
                      "Streamlined CI/CD pipelines using GitHub Actions and
                      Python, reducing manual intervention by 70% and
                      accelerating deployment cycles"
                    </p>
                  </div>
                  <p className="array-bracket indent-1">]</p>
                </div>
              </div>
            </div>
            <p className="bracket indent-1">&#125;</p>
          </div>
          <p className="array-bracket">],</p>
        </div>

        {/* Projects */}
        <p className="section-title mt-6">"Projects":</p>
        <p className="bracket indent-1">&#123;</p>
        <div className="indent-2">
          <p className="mb-2">
            <span className="property-key">"Title":</span>
            <span className="string-value ml-2">"Build-A-Book"</span>
            <span className="text-white">,</span>
          </p>
          <p className="mb-2">
            <span className="property-key">"Github":</span>
            <a
              href="https://github.com/jrustom/Build-a-Book"
              target="_blank"
              className="json-link ml-2"
            >
              "https://github.com/jrustom/Build-a-Book"
            </a>
            <span className="text-white">,</span>
          </p>
          <p className="mb-2">
            <span className="property-key">"Tech Stack":</span>
            <span className="ml-2">
              <span className="inline-array-bracket">[</span>
              <span className="inline-array">
                "TypeScript", "React", "Python"
              </span>
              <span className="inline-array-bracket">]</span>
            </span>
            <span className="text-white">,</span>
          </p>
          <p className="mb-2">
            <span className="property-key">"Description":</span>
            <div className="indent-1">
              <p className="array-item">
                "An AI-powered platform that transforms simple prompts into
                fully illustrated children's books, making storytelling
                accessible to educators and parents. Recognized with the Best
                Use of AI in Education award for its innovative approach to
                educational content creation."
              </p>
            </div>
          </p>
        </div>
        <p className="bracket indent-1">&#125;</p>
      </div>

      <p className="bracket">&#125;</p>
    </div>
  );
}

export default App;
