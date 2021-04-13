import React from 'react'

const Design1 = () => (
    <section>
        
        <section>
            <div class = "parent">
                <image id="back"></image>
                <image id="pants"></image>
            </div>
            <div id="dTitle1" class="dTitle">DESIGN</div>
            <div id="dTitle2" class="dTitle">DESIGN</div>
            <div id="dTitle3" class="dTitle">DESIGN</div>

            <div>
              <div id="dTeamFill"></div>
              <image id="dTeam"></image>
              <div id="dTeam_label"></div>
              <div id="dTeamText">
                <h1>1 Director of Design</h1>
                <h1>1 Associate Director of Design</h1>
                <h1>13 Product Designers</h1>
              </div>
              <p id = "dTeamName"><b>"The Design Team"</b>, 2021 Oil on Canvas</p>
            </div>

            <div>
              <div id="dToolkit_fill"></div>
              <image id="dToolkit"></image>
              <div id = "dToolkit_label"></div>
              <p id = "painting_name_bottom">"The Designer's Toolkit"</p>
              <p id = "painting_desc_bottom">2021<br/>Oil on Canvas</p>
              <image id = "slacklogo"></image>
              <image id = "figmalogo"></image>
              <image id = "discordlogo"></image>
              <image id = "notionlogo"></image>
            </div>

            <div>
                <div id="designer_fill"></div>
                <image id="designer"></image>
                <div id = "designer_text">
                    <h1> Our designers are the visionaries and user advocates behind our non-profit products, bridging the client vision with tangible interfaces</h1>
                </div>
                <div id = "designer_label"></div>
                <p id = "painting_name_middle"><b>"The Designer"</b>, 2021 Oil on Canvas</p>
            </div>
            
        </section>


        {/* <section>
          <div id = "designworkhop">
            <image id = "back2"></image>
            <image id = "designers_duties"></image>
            <image id = "user_research"></image>
          </div>
        </section> */}
    </section>
)




export default Design1