const friends = [
  {
    name: "Aaron C",
    softSkills: "Html,Css,Js",
    job: "IT",
    resume: "./AARON NEW JOB RESUME.pdf",
    profileCard: "https://aaron-profile-card.netlify.app/",
    link: "True",
  },
  {
    name: "Harish R",
    softSkills: "Html,Css,Js,Java",
    job: "IT",
    resume: "./HarishResume.pdf",
    link: "False",
  },
  {
    name: "Ezhilarasi S",
    softSkills: "Html,Css,Js,Java,Python",
    job: "Govt",
    resume: "False",
    link: "False",
  },
  {
    name: "Prakash A",
    softSkills: "Html,Css,Js,Java,C++",
    job: "IT",
    resume: "False",
    link: "False",
  },
  {
    name: "Gokulavasan K",
    softSkills: "Html,Css,Js,Java,DIP",
    job: "IT",
    resume: "False",
    link: "False",
  },
];
export default function Working() {
  return (
    <div>
      <Header />
      <Section />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div
      className="header"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src="./people.jpg" alt="people img" height="60" />
      <h1>Colleague Status!</h1>
    </div>
  );
}

function Section() {
  return (
    <div>
      <p style={{ color: "red", fontFamily: "cursive" }}>
        Welcome to an Colleague Status Page!
      </p>
      <div>
        <Photos />
      </div>
    </div>
  );
}

function Photos() {
  return (
    <div className="grid">
      <table>
        <thead style={{ background: "#FFF", color: "#000" }}>
          <th>Name</th>
          <th>Skills</th>
          <th>Job</th>
          <th>Resume</th>
          <th>Link</th>
        </thead>
        {friends.map((friends) => (
          <TableBody friendsObj={friends} />
        ))}
      </table>
    </div>
  );
}

function TableBody(props) {
  return (
    <tbody>
      <td>{props.friendsObj.name}</td>
      <td>{props.friendsObj.softSkills}</td>
      <td>{props.friendsObj.job}</td>
      <td>
        {props.friendsObj.resume === "False" ? (
          "No Resume"
        ) : (
          <a
            href={props.friendsObj.resume}
            target="_blank"
            rel="noreferrer noopener"
          >
            Resume
          </a>
        )}
      </td>
      <td>
        {props.friendsObj.link === "True" ? (
          <a
            href={props.friendsObj.profileCard}
            target="_blank"
            rel="noreferrer noopener"
          >
            Link
          </a>
        ) : (
          "No Link"
        )}
      </td>
    </tbody>
  );
}

function Footer() {
  return (
    <footer>
      Build with{" "}
      <span>
        <img src="./favicon.ico" alt="react icon" height="20px" />
      </span>{" "}
      React JS
    </footer>
  );
}
