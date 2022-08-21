import React from 'react'
import Header from '../components/Header'

import '../styles/AboutUsStyle.css'

export default function AboutUs() {
    return (
        <div>
            <Header screenTitle={'QUIENES SOMOS'}/>

            <div>
                <div className="aboutUsContainer__Image">
                    <img src={require("../assets/local_view.jpg")} alt="Local View"/>    
                </div>
            
                <div className="aboutUsContainer__Text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt ex non atque quas, corporis magni cum enim, a, maiores dicta, repellat facere laboriosam rerum iusto quaerat tenetur cupiditate nihil sequi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt ex non atque quas, corporis magni cum enim, a, maiores dicta, repellat facere laboriosam rerum iusto quaerat tenetur cupiditate nihil sequi.
                </div>
                <div className="aboutUsContainer__Text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt ex non atque quas, corporis magni cum enim, a, maiores dicta, repellat facere laboriosam rerum iusto quaerat tenetur cupiditate nihil sequi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt ex non atque quas, corporis magni cum enim, a, maiores dicta, repellat facere laboriosam rerum iusto quaerat tenetur cupiditate nihil sequi.
                </div>    
            </div>

        </div>
    )
}
