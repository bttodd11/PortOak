import React from "react";
import "./Title.css"
import TypeIt from "typeit-react";



const Title = () => {




  return (
    <div id="title">
      <TypeIt className = "mainText"
        options={{
          speed: 300
        }}
        getBeforeInit={ instance => {
          instance
          .type("Brian Todd")
          
          .pause(200)
          .type("<br>Austin, TX")
          .type("<br>Software")
          .delete(8)
          .type("Web")
          .delete(3)
          .type("Developer")

          return instance;
        }
      }
      />
    </div>
  )

}

export default Title;
