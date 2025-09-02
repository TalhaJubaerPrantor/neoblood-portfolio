import "./App.css";

function App() {
  return (
    <div className="app">
      <header>
        <h1>NeoBlood</h1>
      </header>

      <main>
        <h2>Welcome</h2>
        <p>
          Join a community that saves lives! With NeoBlood, you can find live blood donors,
          donate, create referral circles, and contribute to making a difference.
          Track your impact, earn points, and see your efforts recognized as a top contributor
          in our life-saving community. Let’s make giving blood simple, meaningful, and rewarding!
        </p>

        {/* Image section */}
        <div className="image-row">
          {/* <img src="/images/img1.jpg" alt="Feature 1" /> */}
          <img src="home-ss.jpg" alt="Feature 2" />
          {/* <img src="/images/img3.jpg" alt="Feature 3" /> */}
        </div>

        

        <a href="/app.apk" download className="download-btn">
          Download &nbsp; v.1.0.0
        </a>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} NeoBlood</p>
      </footer>
    </div>
  );
}

export default App;
