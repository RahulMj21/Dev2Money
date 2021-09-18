const LandingPage = () => {
  return (
    <section className="landingPage container">
      <main className="landingPage__content">
        <h2 className="heading">
          Exploring Ideas on Web <br /> Development and Business
        </h2>
        <p className="text">Apply and increase your Productivity</p>
        <div className="subscribe">
          <input
            type="text"
            className="subscribe__input"
            placeholder="Enter your email"
          />
          <button className="subscribe__button">Subcribe</button>
        </div>
      </main>
      <div className="circle circle1" />
      <div className="circle circle2" />
    </section>
  );
};

export default LandingPage;
