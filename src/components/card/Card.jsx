import "./Card.css"
export default function Card() {
  return (
    <div className="container">
       <div className="star">
          <img src="./images/icon-star.svg" alt="star icon" className="starImg" />
       </div>

       <div className="title">
        <p>How did we do?</p>
       </div>

       <div className="description">
       Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
       </div>

       <div className="rate">
        <div className="rate1 circle"><p>1</p></div>
        <div className="rate2 circle"><p>2</p></div>
        <div className="rate3 circle"><p>3</p></div>
        <div className="rate4 circle"><p>4</p></div>
        <div className="rate5 circle"><p>5</p></div>
       </div>


       <button className="submit">SUBMIT</button>

    </div>
   
  )
}
