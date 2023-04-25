import React from 'react'
import ReactCardSlider from 'react-card-slider-component';

function Review() {
    const slides = [
        {image:"https://c8.alamy.com/comp/WTCG0R/young-african-american-man-eating-chocolate-bar-with-a-happy-face-standing-and-smiling-with-a-confident-smile-showing-teeth-WTCG0R.jpg",title:"This is a title",description:"This is a description"},
        {image:"https://img.freepik.com/free-photo/young-couple-eating-chocolate-forest_329181-10927.jpg?w=2000",title:"This is a second title",description:"This is a second description"},
        {image:"https://www.hopkinsmedicine.org/-/media/images/health/3_-wellness/womans-health/chocolatecandycontent.ashx",title:"This is a third title",description:"This is a third description"},
        {image:"https://media.istockphoto.com/id/157286693/photo/cake-time.jpg?s=612x612&w=0&k=20&c=6GSvnBP6QKfhqf0lRTNR75J3Avlz5zSzoCdiJEHEOgE=",title:"This is a fourth title",description:"This is a fourth description"},
        {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgE28sXBe0W_9MrRkDX9xq4t5p3W3chtsmLg&usqp=CAU",title:"This is a fifth title",description:"This is a fifth description"},
        {image:"https://i0.wp.com/post.healthline.com/wp-content/uploads/2023/01/child-chocolate-1296x728-header-1296x729.jpg?w=1155&h=2268",title:"This is a sixth title",description:"This is a sixth description"},
        {image:"https://previews.123rf.com/images/libertos/libertos1510/libertos151000079/46910533-joyful-girl-eating-chocolate-in-the-park.jpg",title:"This is a seventh title",description:"This is a seventh description"},
      ]
  return (
    <div>   <div className="b1">
    <ReactCardSlider slides={slides}/>
  </div></div>
  )
}

export default Review