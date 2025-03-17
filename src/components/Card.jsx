
const Card = () => (
  <div className="card">
    <div className="card-header">
      <img src={"imageSrc"} alt={"altText"} />
    </div>
    <div className="card-body">
      <span className={`tag ${"tagClass"}`}>{"tagName"}</span>
      <h4>{"title"}</h4>
      <p>{"description"}</p>
      <div className="user">
        <img src={"userImage"} alt="user" />
        <div className="user-info">
          <h5>{"userName"}</h5>
          <small>{"timeAgo"}</small>
        </div>
      </div>
    </div>
  </div>
);

const App = () => {
  const cardsData = [
    {
      imageSrc: 'https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg',
      altText: 'rover',
      tagClass: 'tag-teal',
      tagName: 'Technology',
      title: 'Why is the Tesla Cybertruck designed the way it is?',
      description: "An exploration into the truck's polarising design",
      userImage: 'https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo',
      userName: 'July Dec',
      timeAgo: '2h ago',
    },
    
  ];

  return (
    <div className="container">
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default App;
