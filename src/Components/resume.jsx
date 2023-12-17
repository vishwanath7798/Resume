import React from "react";
import "./style.css"; // Import your CSS file
import Button from "./Button/button.jsx";
import Image from "./Button/Meeeee.jpg";
const Resume = () => {
  return (
    <div>
      <main className="main-content" contentEditable="false">
        <section className="left-section">
          <div className="left-content">
            <div className="profile-details">
              <div className="profile">
                <img className="profile-image" src={Image} alt="img" />
              </div>
              <h1 className="name">Vishwanath Patil</h1>
              <p className="designation">Web Developer</p>
            </div>

            <div className="personal-details">
              <h3>Details</h3>
              <h4>Address:</h4>
              <li>Athani, belagavi, Karnataka</li>
              <h4>Phone:</h4>
              <li>+91-9945775836</li>
              <h4>Email:</h4>
              <li>vishwanathspatil07@gmail.com</li>
            </div>

            <div className="social-media">
              <div>
                <h3>Links:</h3>
              </div>
              <div>
                <li className="icon">
                  <a href="https://www.linkedin.com/in/vishwanath-patil-802872222/?originalSubdomain=in">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="currentColor"
                      class="mercado-match"
                      width="32"
                      height="32"
                      focusable="false"
                    >
                      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                    </svg>
                  </a>
                  Linkdin
                </li>
                <li className="icon">
                  <a href="https://github.com/vishwanath7798">
                    <svg
                      height="32"
                      aria-hidden="true"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="32"
                      data-view-component="true"
                      class="octicon octicon-mark-github v-align-middle color-fg-default"
                    >
                      <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                    </svg>
                  </a>
                  GitHub
                </li>
                <li className="icon">
                  <a href="https://leetcode.com/vishwanathspatil07/">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 95 111"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-full w-auto max-w-none"
                    >
                      <path
                        d="M68.0063 83.0664C70.5 80.5764 74.5366 80.5829 77.0223 83.0809C79.508 85.579 79.5015 89.6226 77.0078 92.1127L65.9346 103.17C55.7187 113.371 39.06 113.519 28.6718 103.513C28.6117 103.456 23.9861 98.9201 8.72653 83.957C-1.42528 74.0029 -2.43665 58.0749 7.11648 47.8464L24.9282 28.7745C34.4095 18.6219 51.887 17.5122 62.7275 26.2789L78.9048 39.362C81.6444 41.5776 82.0723 45.5985 79.8606 48.3429C77.6488 51.0873 73.635 51.5159 70.8954 49.3003L54.7182 36.2173C49.0488 31.6325 39.1314 32.2622 34.2394 37.5006L16.4274 56.5727C11.7767 61.5522 12.2861 69.574 17.6456 74.8292C28.851 85.8169 37.4869 94.2846 37.4969 94.2942C42.8977 99.496 51.6304 99.4184 56.9331 94.1234L68.0063 83.0664Z"
                        fill="#FFA116"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M41.1067 72.0014C37.5858 72.0014 34.7314 69.1421 34.7314 65.615C34.7314 62.0879 37.5858 59.2286 41.1067 59.2286H88.1245C91.6454 59.2286 94.4997 62.0879 94.4997 65.615C94.4997 69.1421 91.6454 72.0014 88.1245 72.0014H41.1067Z"
                        fill="#B3B3B3"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M49.9118 2.02335C52.3173 -0.55232 56.3517 -0.686894 58.9228 1.72277C61.494 4.13244 61.6284 8.17385 59.2229 10.7495L16.4276 56.5729C11.7768 61.552 12.2861 69.5738 17.6453 74.8292L37.4088 94.2091C39.9249 96.6764 39.968 100.72 37.505 103.24C35.042 105.761 31.0056 105.804 28.4895 103.337L8.72593 83.9567C-1.42529 74.0021 -2.43665 58.0741 7.1169 47.8463L49.9118 2.02335Z"
                        fill="black"
                      ></path>
                    </svg>
                  </a>
                  LeetCode
                </li>
              </div>
            </div>

            <div className="skills">
              <h3>Skills</h3>
              <div className="skill-item">
                <div className="skill-name">
                  <h4>HTML</h4>
                </div>
                <div className="skill-progress">
                  <div className="progress-bar" style={{ width: "90%" }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-name">
                  <h4>CSS</h4>
                </div>
                <div className="skill-progress">
                  <div className="progress-bar" style={{ width: "80%" }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-name">
                  <h4>Java Script</h4>
                </div>
                <div className="skill-progress">
                  <div className="progress-bar" style={{ width: "75%" }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-name">
                  <h4>JAVA</h4>
                </div>
                <div className="skill-progress">
                  <div className="progress-bar" style={{ width: "90%" }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-name">
                  <h4>REACT</h4>
                </div>
                <div className="skill-progress">
                  <div className="progress-bar" style={{ width: "95%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="right-section">
          <div className="right-main-content">
            <section className="about-sect">
              <h2 className="right-title">Profile</h2>
              <p className="summary">
                Detail-oriented Technical Writer with 7+ years of experience in
                writing end-user documentation, specializing in user help
                guides. Excellent writing, analytical thinking, research, and
                time management skills. Rewrote over 80% of user help guides for
                30+ products at Company X, resulting in a 42% decrease in
                product-related customer support calls.
              </p>
            </section>

            <div className="experience">
              <div>
                <h2>Experience</h2>
              </div>
              <div className="company">
                <h4>Uber</h4>
                <div>
                  <b className="role">Web Developer</b>
                  <div>
                    <p>Dec 2022-present</p>
                    <ul className="role-details">
                      <li>Fetching right API's</li>
                      <li>Debugging the flickring issue</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="company">
                <h4>IFTTT</h4>
                <div>
                  <b className="role">Web Developer</b>
                  <div>
                    <p>2022-Dec-2022</p>
                    <ul className="role-details">
                      <li>Managing the database</li>
                      <li>Modifying the UI/UX</li>
                      <li>Creating the designs</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="company">
                <h4>Facebook</h4>
                <div>
                  <b className="role">Web Developer</b>
                  <div>
                    <p>March 2021-2022</p>
                    <ul className="role-details">
                      <li>Managing the UI/UX of the design</li>
                      <li>Creating the designs</li>
                      <li>Managing the database</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="company">
                <h4>Myntra</h4>
                <div>
                  <b className="role">Web Developer</b>
                  <div>
                    <p>March 2020-2021</p>
                    <ul className="role-details">
                      <li>Managing the UI/UX of the design</li>
                      <li>Fetching right API's</li>
                      <li>Debugging the flickring issue</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="education">
              <h2>Education</h2>
              <h5>Reva University</h5>
              <p>2016 to 2020</p>
            </div>
            <div className="language">
              <h2>Language</h2>
              <p>Kannada</p>
              <p>English</p>
              <p>Hindi</p>
            </div>
          </div>
        </section>
      </main>
      <Button />
    </div>
  );
};

export default Resume;
