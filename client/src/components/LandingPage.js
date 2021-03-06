import React from "react";
import { useHistory } from "react-router-dom";
import "./LandingPage.css";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import growth from "../assets/img/growth.svg";
import map from "../assets/img/map.svg";
import ceiling from "../assets/img/ceiling.svg";

import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles((theme) => ({
  MuiButtonContained: {
    backgroundColor: "#111B47",
    color: "#FFFFFF",
    textTransform: "capitalize",
    width: 190,
    fontSize: 16,
    fontWeight: "600",
    marginRight: 50,
    marginTop: 50,
    "&:hover": {
      backgroundColor: "#D6DCF5",
      color: "#111B47",
    },
  },
  formBtn: {
    backgroundColor: "#111B47",
    color: "#FFFFFF",
    textTransform: "capitalize",
    width: 190,
    fontSize: 16,
    fontWeight: "600",
    "&:hover": {
      backgroundColor: "#D6DCF5",
      color: "#111B47",
    },
  },
}));

const LandingPage = () => {
  const classes = useStyles();

  const history = useHistory();

  const handleLogin = () => {
    history.push("/login");
  };

  const handleSignup = () => {
    history.push("/signup");
  };

  return (
    <div>
      <div className="landingpage-container" id="home">
        <div className="landingpage-content">
          <div className="landingpage-main-heading">
            Giving a voice to the voiceless
          </div>
          <div className="landingpage-text">
            While our society condones blatant discrimination, it is a lot more
            complacent in dealing with microaggressions if not being outright
            dismissive about it. From remarks like "you run like a girl" to "get
            some rest and go do what girls do - gossip," we often find ourselves
            having to put up with this unacceptable behaviour. With amplify, we
            want to create a platform for people to share their stories and feel
            validated via the community.
            <br />
            <br />
            Read about other women’s stories or join our community now to share
            your stories!
          </div>
          <div className="landingpage-buttons">
            <Button
              variant="contained"
              className={classes.MuiButtonContained}
              onClick={handleSignup}
            >
              Sign Up
            </Button>
            <Button
              variant="contained"
              className={classes.MuiButtonContained}
              onClick={handleLogin}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
      <div className="our-mission-container" id="about">
        <div className="our-mission-content">
          <div className="our-mission-heading">Our Mission</div>
          <div className="our-mission-text">
            Amplify the stories of women and shine a light on the harassment
            they face in our communities in order to promote equity and
            diversity
          </div>

          <div className="our-mission-info">
            <div className="our-mission-blurb">
              <img src={map} />
              <div className="our-mission-subheading">Maps</div>
              <div className="our-mission-subtext">
                Share stories anonymously. From sexist encounters to
                microaggressions to workplace harassment, identify these
                hotspots and recognize that others have similar experiences.
              </div>
            </div>

            <div className="our-mission-blurb">
              <img src={ceiling} />
              <div className="our-mission-subheading">Glass Ceiling</div>
              <div className="our-mission-subtext">
                Tired of Glassdoors? Come checkout Glass Ceiling, where women share their experiences working at different companies and rate them based on their encounters
              </div>
            </div>
          </div>
        </div>
        <div className="our-mission-img">
          <img src={growth} />
        </div>
      </div>

      <div className="your-thoughts-container" id="contact">
        <br></br>
        <div className="your-thoughts-heading">Tell Us Your Thoughts</div>
        <form>
          <input
            className="your-thoughts-input"
            placeholder="First Name"
          ></input>
          <input
            className="your-thoughts-input"
            placeholder="Last Name"
          ></input>
          <input
            className="your-thoughts-input"
            placeholder="Email Address"
          ></input>
          <textarea
            className="your-thoughts-textarea"
            placeholder="What we should know"
          ></textarea>
        </form>
        <Button variant="contained" className={classes.formBtn}>
          Send
        </Button>
      </div>

      <div className="footer">
        <a href="#home">
          <FontAwesomeIcon
            icon={faChevronUp}
            style={{ marginTop: 10, marginBottom: 20 }}
          />
        </a>
        <div className="footer-heading">Amplify</div>
        <hr className="footer-linebreak" />
        <div className="footer-link-container">
          <a href="#about" className="footer-link">
            About
          </a>
          <a href="#contact" className="footer-link">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
