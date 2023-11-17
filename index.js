const Notification = (props) => {
  //  Write your code here.
  const { classs, text, img } = props;
  return (
    <p className={`p ${classs}`}>
      <img src={img} />
      {text}
    </p>
  );
};

const element = (
  //  Write your code here.
  <div className="bg">
    <h1 className="h">Notifications</h1>
    <div className="con">
      <Notification
        classs="b"
        img="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        text="Information Message"
      />
      <Notification
        classs="g"
        img="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        text="Success Message"
      />
      <Notification
        classs="y"
        img="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        text="Warning Message"
      />
      <Notification
        classs="r"
        img="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        text="Error Message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
