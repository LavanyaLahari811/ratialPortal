import React from "react";
import "./home.css";
import ReviewCarousel from "../../components/reviewCarousel/reviewCarousel";
import Navbar from "../../components/navbar/navbar";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="content">
        <h1>
          <span className="main-heading">Ratial Home</span>
          <br />
          <span className="sub-heading">Service company</span>
        </h1>
        <ul className="subContent">
          <li>
            <img
              src={require("../../assets/rect22.png")}
              alt="Emergency Services"
            />
            24/7 Emergency Services
          </li>
          <li>
            <img
              src={require("../../assets/rect21.png")}
              alt="On-Site Guarantee"
            />
            45 Minute On-Site Guarantee
          </li>
          <li>
            <img
              src={require("../../assets/rect20.png")}
              alt="Insurance Company"
            />
            Work Directly With Your Insurance Company
          </li>
        </ul>
        <div className="buttons">
          <button className="register-btn">Register your Service</button>
          <button className="view-btn">VIEW YOUR EXISTING SERVICE</button>
        </div>
      </div>
      <div className="background-image"></div>
      <div className="scroll-section">
        <div className="why-choose-us">
          <div className="statistics">
            <div className="eachbox">
              <img
                className="first"
                src={require("../../assets/statistics-1.png")}
                alt="1000+ Cities"
              ></img>
              <div className="statistics-text">
                1000+ Cities <span>In India</span>
              </div>
            </div>
            <div className="eachbox">
              <img
                className="second"
                src={require("../../assets/statistics-2.png")}
                alt=" 3 Lakhs+"
              ></img>
              <div className="statistics-text">
                3 Lakhs+ <span>Services</span>
              </div>
            </div>
            <div className="eachbox">
              <img
                className="th"
                src={require("../../assets/statistics-3.png")}
                alt="5.0 crore+"
              ></img>
              <div className="statistics-text">
                5.0 crore+ <span>Booked Services</span>
              </div>
            </div>
          </div>
          <h2>Why Choose Us?</h2>
          <div className="why-choose-us-cards">
            <div className="card">
              <h3>Expertise and Experience</h3>
              <p>
                With years of experience in the industry, our team of experts is
                equipped with the knowledge and skills to tackle any project,
                big or small. We pride ourselves on delivering quality
                workmanship that stands the test of time.
              </p>
            </div>
            <div className="card">
              <h3>Comprehensive Services</h3>
              <p>
                From plumbing and electrical work to remodeling and maintenance,
                we offer a wide range of services to meet all your home needs.
                Our comprehensive approach means you can rely on us as your
                one-stop shop for home improvements.
              </p>
            </div>
            <div className="card">
              <h3>Customer-Centric Approach</h3>
              <p>
                Your satisfaction is our top priority. We listen to your needs
                and work closely with you to ensure the final result exceeds
                your expectations. Our commitment to excellent customer service
                sets us apart in the industry.
              </p>
            </div>
            <div className="card">
              <h3>Affordable Pricing</h3>
              <p>
                We believe that high-quality home services should be accessible
                to everyone. That's why we offer competitive pricing without
                compromising on quality. Get the best value for your investment
                with Home Service Partners.
              </p>
            </div>
          </div>
          <h2
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: "40px",
              lineHeight: "48px",
            }}
          >
            Our Services
          </h2>

          <div class="services-section">
            <div class="services-row">
              <div class="card" style={{ backgroundColor: "#F0DDFF96" }}>
                <div class="image-container">
                  <img
                    src={require("../../assets/cleaning.png")}
                    alt="cleaning"
                    style={{ width: "70px", height: "70px" }}
                  />
                </div>
                <h3>Cleaning</h3>
                <p>
                  With years of experience in the industry, our team of experts
                  is equipped with the knowledge and skills to tackle any
                  project, big or small. We pride ourselves on delivering
                  quality workmanship that stands the test of time.
                </p>
              </div>

              <div class="card" style={{ backgroundColor: "#E5F9FF" }}>
                <div class="image-container">
                  <img
                    src={require("../../assets/repairing.png")}
                    alt="repairing"
                    style={{ width: "65px", height: "70px" }}
                  />
                </div>
                <h3>Repairing</h3>
                <p>
                  With years of experience in the industry, our team of experts
                  is equipped with the knowledge and skills to tackle any
                  project, big or small. We pride ourselves on delivering
                  quality workmanship that stands the test of time.
                </p>
              </div>

              <div class="card" style={{ backgroundColor: "#E8FFDD" }}>
                <div class="image-container">
                  <img
                    src={require("../../assets/painting.png")}
                    alt="painting"
                    style={{ width: "67px", height: "75px" }}
                  />
                </div>
                <h3>Painting</h3>
                <p>
                  With years of experience in the industry, our team of experts
                  is equipped with the knowledge and skills to tackle any
                  project, big or small. We pride ourselves on delivering
                  quality workmanship that stands the test of time.
                </p>
              </div>

              <div class="card" style={{ backgroundColor: "#FFEDDD" }}>
                <div class="image-container">
                  <img
                    src={require("../../assets/pandit.png")}
                    alt="pandit"
                    style={{ width: "65px", height: "75px" }}
                  />
                </div>
                <h3>Pandit</h3>
                <p>
                  With years of experience in the industry, our team of experts
                  is equipped with the knowledge and skills to tackle any
                  project, big or small. We pride ourselves on delivering
                  quality workmanship that stands the test of time.
                </p>
              </div>

              <div class="card" style={{ backgroundColor: "#F0DDFF96" }}>
                <div class="image-container">
                  <img
                    src={require("../../assets/cooking.png")}
                    alt="cooking"
                    style={{ width: "75px", height: "75px" }}
                  />
                </div>
                <h3>Cooking</h3>
                <p>
                  With years of experience in the industry, our team of experts
                  is equipped with the knowledge and skills to tackle any
                  project, big or small. We pride ourselves on delivering
                  quality workmanship that stands the test of time.
                </p>
              </div>

              <div class="card" style={{ backgroundColor: "#E5F9FF" }}>
                <div class="image-container">
                  <img
                    src={require("../../assets/beauty.png")}
                    alt="beauty"
                    style={{ width: "78px", height: "75px" }}
                  />
                </div>
                <h3>Beauty</h3>
                <p>
                  With years of experience in the industry, our team of experts
                  is equipped with the knowledge and skills to tackle any
                  project, big or small. We pride ourselves on delivering
                  quality workmanship that stands the test of time.
                </p>
              </div>

              <div class="card" style={{ backgroundColor: "#FFEDDD" }}>
                <div class="image-container">
                  <img
                    src={require("../../assets/shifting.png")}
                    alt="shifting"
                    style={{ width: "91px", height: "75px" }}
                  />
                </div>
                <h3>Shifting</h3>
                <p>
                  With years of experience in the industry, our team of experts
                  is equipped with the knowledge and skills to tackle any
                  project, big or small. We pride ourselves on delivering
                  quality workmanship that stands the test of time.
                </p>
              </div>

              <div class="card" style={{ backgroundColor: "#E8FFDD" }}>
                <div class="image-container">
                  <img
                    src={require("../../assets/electrician.png")}
                    alt="electrician"
                    style={{ width: "78px", height: "75px" }}
                  />
                </div>
                <h3>Electrician</h3>
                <p>
                  With years of experience in the industry, our team of experts
                  is equipped with the knowledge and skills to tackle any
                  project, big or small. We pride ourselves on delivering
                  quality workmanship that stands the test of time.
                </p>
              </div>

              <div class="card" style={{ backgroundColor: "#F0DDFF96" }}>
                <div class="image-container">
                  <img
                    src={require("../../assets/remote.png")}
                    alt="remote"
                    style={{ width: "75px", height: "75px" }}
                  />
                </div>
                <h3>Remote service</h3>
                <p>
                  With years of experience in the industry, our team of experts
                  is equipped with the knowledge and skills to tackle any
                  project, big or small. We pride ourselves on delivering
                  quality workmanship that stands the test of time.
                </p>
              </div>
            </div>

            <div class="services-row">
              <div class="card" style={{ backgroundColor: "#E8FFDD" }}>
                <div class="image-container">
                  <img
                    src={require("../../assets/laundry.png")}
                    alt="laundry"
                    style={{ width: "64px", height: "75px" }}
                  />
                </div>
                <h3>Laundry</h3>
                <p>
                  With years of experience in the industry, our team of experts
                  is equipped with the knowledge and skills to tackle any
                  project, big or small. We pride ourselves on delivering
                  quality workmanship that stands the test of time.
                </p>
              </div>

              <div class="card" style={{ backgroundColor: "#FFEDDD" }}>
                <div class="image-container">
                  <img
                    src={require("../../assets/appliance.png")}
                    alt="appliance"
                    style={{ width: "70px", height: "75px" }}
                  />
                </div>
                <h3>Appliance</h3>
                <p>
                  With years of experience in the industry, our team of experts
                  is equipped with the knowledge and skills to tackle any
                  project, big or small. We pride ourselves on delivering
                  quality workmanship that stands the test of time.
                </p>
              </div>

              <div class="card" style={{ backgroundColor: "#F0DDFF96" }}>
                <div class="image-container">
                  <img
                    src={require("../../assets/photography.png")}
                    alt="photography"
                    style={{ width: "84px", height: "75px" }}
                  />
                </div>
                <h3>Photography</h3>
                <p>
                  With years of experience in the industry, our team of experts
                  is equipped with the knowledge and skills to tackle any
                  project, big or small. We pride ourselves on delivering
                  quality workmanship that stands the test of time.
                </p>
              </div>

              <div class="card" style={{ backgroundColor: "#E5F9FF" }}>
                <div class="image-container">
                  <img
                    src={require("../../assets/tiels.png")}
                    alt="tiels"
                    style={{ width: "69px", height: "75px" }}
                  />
                </div>
                <h3>Tiels</h3>
                <p>
                  With years of experience in the industry, our team of experts
                  is equipped with the knowledge and skills to tackle any
                  project, big or small. We pride ourselves on delivering
                  quality workmanship that stands the test of time.
                </p>
              </div>

              <div class="card" style={{ backgroundColor: "#FFEDDD" }}>
                <div class="image-container">
                  <img
                    src={require("../../assets/smart home.png")}
                    alt="smart home"
                    style={{ width: "83px", height: "75px" }}
                  />
                </div>
                <h3>Smart home</h3>
                <p>
                  With years of experience in the industry, our team of experts
                  is equipped with the knowledge and skills to tackle any
                  project, big or small. We pride ourselves on delivering
                  quality workmanship that stands the test of time.
                </p>
              </div>

              <div class="card" style={{ backgroundColor: "#E8FFDD" }}>
                <div class="image-container">
                  <img
                    src={require("../../assets/plumbing.png")}
                    alt="plumbing"
                    style={{ width: "71px", height: "75px" }}
                  />
                </div>
                <h3>Plumbing</h3>
                <p>
                  With years of experience in the industry, our team of experts
                  is equipped with the knowledge and skills to tackle any
                  project, big or small. We pride ourselves on delivering
                  quality workmanship that stands the test of time.
                </p>
              </div>

              <div class="card" style={{ backgroundColor: "#F0DDFF96" }}>
                <div class="image-container">
                  <img
                    src={require("../../assets/auto.png")}
                    alt="auto service"
                    style={{ width: "163px", height: "70px" }}
                  />
                </div>
                <h3>Auto Service</h3>
                <p>
                  With years of experience in the industry, our team of experts
                  is equipped with the knowledge and skills to tackle any
                  project, big or small. We pride ourselves on delivering
                  quality workmanship that stands the test of time.
                </p>
              </div>

              <div class="card" style={{ backgroundColor: "#E5F9FF" }}>
                <div class="image-container">
                  <img
                    src={require("../../assets/pest.png")}
                    alt="pest control"
                    style={{ width: "75px", height: "75px" }}
                  />
                </div>
                <h3>Pest control</h3>
                <p>
                  With years of experience in the industry, our team of experts
                  is equipped with the knowledge and skills to tackle any
                  project, big or small. We pride ourselves on delivering
                  quality workmanship that stands the test of time.
                </p>
              </div>

              <div class="card" style={{ backgroundColor: "#FFEDDD" }}>
                <div class="image-container">
                  <img
                    src={require("../../assets/tv.png")}
                    alt="tv repair"
                    style={{ width: "75px", height: "75px" }}
                  />
                </div>
                <h3>Tv repair</h3>
                <p>
                  With years of experience in the industry, our team of experts
                  is equipped with the knowledge and skills to tackle any
                  project, big or small. We pride ourselves on delivering
                  quality workmanship that stands the test of time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="app-services-heading">Our App Services</h2>
      <div className="app-services">
        <div
          className="app-service app-service-reverse"
          style={{ marginBottom: "-120px" }}
        >
          <div
            className="service-img-container"
            style={{ position: "relative" }}
          >
            <img
              src={require("../../assets/appScreen1.png")}
              alt="Easy to Use"
              className="service-img"
            />
            <img
              src={require("../../assets/Ellipse 1.png")}
              alt="Ellipse"
              className="ellipse-img"
            />
          </div>
          <div
            className="service-description"
            style={{
              paddingLeft: "120px",
              paddingRight: "50px",
              paddingTop: "30px",
            }}
          >
            <h3>1. Easy to Use :</h3>
            <p>
              Our user-friendly interface makes it simple to book any service in
              just a few taps. Browse through a variety of services, select the
              one you need, and schedule it at your convenience.
            </p>
          </div>
        </div>

        <div className="app-service" style={{ marginBottom: "-150px" }}>
          <div className="service-img-container">
            <img
              src={require("../../assets/appScreen2.png")}
              alt="Verified Professionals"
              className="service-img"
            />
          </div>
          <div
            className="service-description"
            style={{
              height: "214px",
              paddingLeft: "60px",
              paddingRight: "100px",
            }}
          >
            <h3>2. Verified Professionals :</h3>
            <p>
              We partner with trusted and experienced professionals who undergo
              a rigorous vetting process. You can rest assured knowing that only
              the best are coming to your home.
            </p>
          </div>
        </div>

        <div
          className="app-service app-service-reverse"
          style={{ marginBottom: "-150px" }}
        >
          <div className="service-img-container">
            <img
              src={require("../../assets/appScreen3.png")}
              alt="Transparent Pricing"
              className="service-img"
            />
          </div>
          <div
            className="service-description"
            style={{
              height: "156px",
              paddingLeft: "60px",
              paddingRight: "30px",
              flex: "0.4",
              position: "relative",
              zIndex: "2",
            }}
          >
            <h3>3. Transparent Pricing</h3>
            <p>
              No more hidden fees or surprise charges. <br></br>Very fast
              service.
            </p>
          </div>
        </div>

        <div className="app-service" style={{ marginBottom: "-150px" }}>
          <div
            className="service-img-container"
            style={{ position: "relative" }}
          >
            <img
              src={require("../../assets/appScreen4.png")}
              alt="Verified Professionals"
              className="service-img"
              style={{ width: "281.25px", height: "500px" }}
            />
            <img
              src={require("../../assets/Ellipse 2.png")}
              alt="Ellipse"
              className="ellipse2-img"
            />
          </div>
          <div
            className="service-description"
            style={{
              height: "214px",
              paddingLeft: "40px",
              paddingTop: "30px",
              flex: "0.44",
            }}
          >
            <h3>Sign Up or Register</h3>
            <li>
              Create an Account: Click on the "Sign Up" or "Register" button to
              create a new account.
            </li>
          </div>
        </div>
        <div className="app-service app-service-reverse">
          <div className="service-img-container">
            <img
              src={require("../../assets/appScreen5.png")}
              alt="Verified Professionals"
              className="service-img"
              style={{ width: "281.25px", height: "500px" }}
            />
          </div>
          <div
            className="service-description"
            style={{
              height: "200px",
              paddingLeft: "60px",
              paddingRight: "30px",
              flex: "0.43",
              borderRadius: "30px",
            }}
          >
            <h3> Manage Your Jobs and Schedule</h3>
            <p>
              Accept Job Requests: Respond promptly to job requests and manage
              your schedule through the Ratial app.
            </p>
          </div>
        </div>
      </div>
      <ReviewCarousel />
      <div className="areasService">
        <img
          src={require("../../assets/map.png")}
          alt="map"
          className="map"
        ></img>
        <div className="information">
          <h3>AREAS WE SERVICE</h3>
          <p className="info">
            True North Restoration of Dallas services the entire DFW area with
            our 24/7 restoration services. No matter what city you are located
            in, we can be there on average in 45-minutes or less. The following
            are some of the top cities we perform work in:
          </p>
          <div className="places-container">
            <div className="container1">
              <div className="eachPlace">
                <img src={require("../../assets/arrows.png")} alt="arrow"></img>
                <p>Dallas, TX</p>
              </div>
              <div className="eachPlace">
                <img src={require("../../assets/arrows.png")} alt="arrow"></img>
                <p>Richardson, TX</p>
              </div>
              <div className="eachPlace">
                <img src={require("../../assets/arrows.png")} alt="arrow"></img>
                <p>Garland, TX</p>
              </div>
              <div className="eachPlace">
                <img src={require("../../assets/arrows.png")} alt="arrow"></img>
                <p>Mesquite, TX</p>
              </div>
              <div className="eachPlace">
                <img src={require("../../assets/arrows.png")} alt="arrow"></img>
                <p>Plano, TX</p>
              </div>
              <div className="eachPlace">
                <img src={require("../../assets/arrows.png")} alt="arrow"></img>
                <p>Irving, TX</p>
              </div>
            </div>
            <div className="container2">
              <div className="eachPlace">
                <img src={require("../../assets/arrows.png")} alt="arrow"></img>
                <p>Dallas, TX</p>
              </div>
              <div className="eachPlace">
                <img src={require("../../assets/arrows.png")} alt="arrow"></img>
                <p>Richardson, TX</p>
              </div>
              <div className="eachPlace">
                <img src={require("../../assets/arrows.png")} alt="arrow"></img>
                <p>Garland, TX</p>
              </div>
              <div className="eachPlace">
                <img src={require("../../assets/arrows.png")} alt="arrow"></img>
                <p>Mesquite, TX</p>
              </div>
              <div className="eachPlace">
                <img src={require("../../assets/arrows.png")} alt="arrow"></img>
                <p>Plano, TX</p>
              </div>
              <div className="eachPlace">
                <img src={require("../../assets/arrows.png")} alt="arrow"></img>
                <p>Irving, TX</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="freqAskedQuestions">
        <h1 className="freqAskedQuestions-heading">
          Frequently Asked Questions
        </h1>
      </div>
    </div>
  );
};

export default Home;
