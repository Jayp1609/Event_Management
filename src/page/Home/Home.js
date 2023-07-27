import React from "react";
import "./Home.css";
import img1 from "./Images/google.png";
import img2 from "./Images/slack.png";
import img3 from "./Images/Atlassian.png";
import img4 from "./Images/dropbox-logo.png";
import img5 from "./Images/shopify.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="back-1">
        <h1>
          One Stop Event <br />
          Planner
        </h1>
        <p>
          Yet bed any for travelling assistance induigence
          <br />
          unpleasing Not thoughts all exercise blessing
          <br />
          indulgence way everything joy alteration boisterous
          <br />
          the attachment.Party we years to order allow asked <br />
          of.
        </p>
        <p>Every event should be perfect</p>
        <form>
          <input
            type="email"
            placeholder="Your Email Address"
            name="email"
            htmlFor="email"
          />
          <Link to="signup">
            <button>Get Started</button>
          </Link>
        </form>
        <p>
          <b style={{ color: "white", paddingTop: "10px", fontSize: "15px" }}>
            1600+ people requested access a visit in last 24 hours
          </b>
        </p>
      </div>

      {/* ................................... */}
      {/* .......... background-2  .......... */}

      <div className="back-2">
        <div style={{ paddingLeft: "70px", paddingRight: "70px" }}>
          <div className="logo">
            <img src={img1} alt="#"></img>
            <img
              src={img2}
              alt="#"
              style={{ width: "60px", height: "18px" }}
            ></img>
            <img
              src={img3}
              alt="#"
              style={{ width: "70px", height: "18px" }}
            ></img>
            <img
              src={img4}
              alt="#"
              style={{ width: "30px", height: "20px" }}
            ></img>
            <img src={img5} alt="#" style={{ width: "50px" }}></img>
          </div>
        </div>

        {/* .........box......... */}

        <div className="back2-box">
          <div className="back2-box-flex">
            <div className="line-1">
              <div>
                <hr />
                <h3>
                  <br />
                  What is Harmoni <br />
                  Event
                </h3>
              </div>
              <div>
                <p>
                  <br />
                  We so opinion friends me message as delight.Whole front do of
                  plate heard oh ought.His defective nor
                  <br />
                  convinced residence own.Connection has put impossible
                  boisterous.At jointure ladyship
                  <br />
                  an insisted so humanity he.Friendly bachelor entrance to on
                  by.
                </p>
              </div>
            </div>
            <div className="line-2">
              <div>
                <h1>
                  Your Event Will be beyond your <br />
                  imagination
                </h1>
              </div>
              <div>
                <p>
                  <b>Explore the library</b>
                </p>
              </div>
            </div>
            <div className="line-3">
              <div>
                <hr />
                <h3>
                  <br />
                  Chatbots
                </h3>
                <p>
                  We so opinion friends me message as delight
                  <br />
                  Whole front do of plate heard oh ought
                </p>
              </div>
              <div>
                <hr />
                <h3>
                  <br />
                  Knowledgebase
                </h3>
                <p>
                  At jointure ladyship an insisted so humanity
                  <br />
                  he.Friendly bachelor entrance to on by. As put
                  <br />
                  impossible own apartments b
                </p>
              </div>
              <div>
                <hr />
                <h3>
                  <br />
                  Education
                </h3>
                <p>
                  At jointure ladyship an insisted so humanity
                  <br />
                  he.Friendly bachelor entrance to on by. As put
                  <br />
                  impossible own apartments b
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ...........after box.......... */}
        <div className="back2-quote">
          <div className="left">
            <h2>
              Harmony Event
              <br />
              Management Firm & <br />
              Wedding Planner is a<br />
              group of creative minds <br />
              who would like to make <br />
              weddings,birthdays &<br />
              any kind of events <br />
              courteous & a better <br />
              place for our clients to
              <br />
              celebrate important
              <br />
              moments of their <br />
              lives...
            </h2>
          </div>
          <div className="right">
            {/* .....1.... */}
            <div className="flex">
              <div>
                <hr />
                <h4>Photography</h4>
              </div>
              <div>
                <p>
                  A Team of 3 talented Photographers are ready to snap the best
                  memonts of your ceremony
                </p>
              </div>
            </div>
            {/* .....2..... */}
            <div className="flex">
              <div>
                <hr />
                <h4>Cinematography or Videography Services</h4>
              </div>
              <div>
                <p>
                  Creative full HD 1080p Video,a different scape of your
                  ceremony
                </p>
              </div>
            </div>
            {/* .......3....... */}
            <div className="flex">
              <div>
                <hr />
                <h4>Full Venue Decoration Service</h4>
              </div>
              <div>
                <p>
                  A Blend of out-of the-box ideas to decore your precious date
                </p>
              </div>
            </div>
            {/* ......4..... */}
            <div className="flex">
              <div>
                <hr />
                <h4>Home Decoration</h4>
              </div>
              <div>
                <p>Just call us and get total event solution under one roof.</p>
              </div>
            </div>
          </div>
        </div>
        {/* ..........next box......... */}
        <div className="back2-box2">
          <div className="flex">
            <div className="left">
              <p>Request early access to get started</p>
              <h3>
                Register today and start exploring the endless possibilities
              </h3>
            </div>
            <div className="right">
              <Link to="signup">
                <button>GET STARTED</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
