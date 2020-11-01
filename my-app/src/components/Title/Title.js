import React from "react";
import "./Title.css"
import TypeIt from "typeit-react";



const Title = () => {

  return (
    <div id="title">
      <TypeIt className = "mainText"
        options={{
          speed: 100
        }}
        getBeforeInit={ instance => {
          instance
          .type("B.Todd", {delay: 400})
          .delete(6)
          .type("Brian Todd")
          .pause(200)
          .type("<br>South")
          .delete(5)
          .type("Austin, TX")
          .type("<br>Software Developer")
          return instance;
        }
      }
      />
    </div>
  )

}

export default Title;
