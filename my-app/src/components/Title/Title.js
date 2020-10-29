import React from "react";
import "./Title.css"
import TypeIt from "typeit-react";



const Title = () => {




  return (
    <div id="title">
      <TypeIt class="mainText"
        options={{
          strings: ['Brian Todd', 'Test', 'Test'],
          speed: 500,
          lifeLike: true,
          html: true
        }}
      />
    </div>
  )

}

export default Title;
