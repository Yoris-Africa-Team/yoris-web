{
  /* 2nd row */
}
<div
  style={{
    background: "#0E0F0E",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }}
>
  <img
    style={{}}
    height="50%"
    width="100%"
    src={require("../assets/2441.png")}
  />
  <div style={{ color: "white" }}>
    <p>
      Connect with your <br />
      favorite <strong>brands</strong> like <br />
      never before on our <br />
      <strong>social platform.</strong>
    </p>
  </div>
</div>;
{
  /* 3rd row */
}
<div
  style={{
    background: "#0E0F0E",
    height: "70%",
    display: "flex",
    alignItems: "center",
  }}
>
  <div>
    <img width="60%" height="70%" src={require("../assets/65968b.png")} />
  </div>
  <div style={{ color: "white", width: "100%" }}>
    <p>
      Top-notch <strong>logistics</strong>
      <br />
      <strong>services</strong> at the swipe
      <br />
      of a finger.
    </p>
  </div>
</div>;
{
  /* 4th row */
}
<div style={{ background: "#0E0F0E", display: "flex" }}>
  <img width="100%" height="70%" src={require("../assets/2441b.png")} />
  <div style={{ position: "absolute", color: "white" }}>
    <p>
      Experience an
      <br />
      <strong>e-commerce</strong> platform
      <br />
      housing only <strong>expert</strong>
      <br />
      <strong>curated brands,</strong> goods <br />
      and services.
    </p>
  </div>
  <div></div>
</div>;
{
  /* 5th row */
}
<div
  style={{
    display: "flex",
    width: "100%",
    marginBottom: 20,
    background: "#0E0F0E",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  <div style={{ color: "white" }}>
    <p>
      <strong>Fintech</strong> and lots <br />
      more to come.
    </p>
  </div>
  <div
    style={{
      position: "relative",
    }}
  >
    <img
      style={{
        position: "absolute",
        zIndex: 1,
        bottom: "15%",
        left: "30%",
        objectFit: "contain",
      }}
      height={"93%"}
      width={"100%"}
      src={require("../assets/1576.png")}
    />
    <img
      style={{
        objectFit: "contain",
        position: "relative",
        marginBottom: "40%",
        zIndex: 3,
      }}
      height={"120%"}
      width={"70%"}
      src={require("../assets/1576b.png")}
    />
  </div>
</div>;
{
  /* 6th */
}
<div style={{ margin: "auto", textAlign: "center" }}>
  <div style={{ color: "#CAB466" }}>
    <h4>JOIN OUR WAITLIST</h4>
  </div>
  <div style={{ width: "80%", margin: "auto" }} id="waitingList">
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginTop: 10,
        justifyContent: "space-evenly",
      }}
    >
      <input
        value={firstName}
        onChange={handleChange("firstName")}
        style={{
          borderRadius: 5,
          backgroundColor: "#C4C4C4",
          border: "none",
          padding: 10,
        }}
        placeholder="First name"
      />
      <input
        value={surname}
        onChange={handleChange("surname")}
        style={{
          borderRadius: 5,
          backgroundColor: "#C4C4C4",
          border: "none",
          padding: 10,
        }}
        placeholder="Surname"
      />
    </div>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginTop: 10,
        justifyContent: "space-evenly",
      }}
    >
      <input
        value={phone}
        onChange={handleChange("phone")}
        placeholder="Phone number"
        style={{
          borderRadius: 5,
          backgroundColor: "#C4C4C4",
          border: "none",
          padding: 10,
        }}
      />
      <input
        value={email}
        onChange={handleChange("email")}
        placeholder="email"
        style={{
          borderRadius: 5,
          backgroundColor: "#C4C4C4",
          border: "none",
          padding: 10,
        }}
      />
    </div>
    <div
      style={{
        display: "flex",
        marginBottom: 20,
        alignItems: "center",
        width: "100%",
        marginTop: 10,
        justifyContent: "space-evenly",
      }}
    >
      <input
        style={{
          borderRadius: 5,
          backgroundColor: "#C4C4C4",
          border: "none",
          padding: 10,
        }}
        value={source}
        onChange={handleChange("source")}
        placeholder="How did you hear about us?"
      />
      <div style={{ background: "#CAB466", marginLeft: 20, padding: "10" }}>
        {/* <img src={require('../assets/Arrow 1.png')}  width="5%" height="2%" /> */}
        <button
          onClick={joinList}
          style={{ background: "#CAB466", border: "none", color: "white" }}
        >
          Arrow
        </button>
      </div>
    </div>
  </div>
</div>;
