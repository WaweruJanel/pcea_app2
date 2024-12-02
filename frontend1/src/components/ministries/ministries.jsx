const ministries = [
    {
        name: 'Men\'s Ministry',
        img: ''
    },
    {
        name: 'Women\'s Ministry',
        img: ''
    },
    {
        name: 'Youth Ministry',
        img: ''
    }
];


const Ministries = () => {
  return (
    <div className="ministries">
        <h1>Our Ministries</h1>
        <p>We have the perfect ministry for you</p>
        <div className="ministries__container">
            {ministries.map((ministry, index) => (
                <div className="ministry" key={index}>
                    <h2>{ministry.name}</h2>
                    <img src={ministry.img} alt={ministry.name} />
                </div>
            ),)}
        </div>
    </div>
  )
}

export default Ministries


