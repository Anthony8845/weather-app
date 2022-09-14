import React from 'react'
import styled from 'styled-components'

const Frame = styled.div`
/* margin-top: 25px; */
height: 70%;
display: flex;
align-items: center;
justify-content: center;

& iframe {
    width:100%;
    min-height:90%;
    border-radius: 5px;
    opacity: 0.8;
}
`


const IFrameMeteo = () => {
    return (
        <Frame>
            <iframe
            src="https://www.meteoblue.com/ru/%D0%BF%D0%BE%D0%B3%D0%BE%D0%B4%D0%B0/%D0%BA%D0%B0%D1%80%D1%82%D1%8B/widget/api_%d0%9d%d0%b5%d0%bf%d0%b0%d0%bb_1283728?&cloudsAndPrecipitation=1&windAnimation=0&windAnimation=0&gust=0&gust=1&satellite=0&satellite=1&cloudsAndPrecipitation=0&temperature=0&temperature=1&sunshine=0&sunshine=1&extremeForecastIndex=0&extremeForecastIndex=1&geoloc=fixed&tempunit=C&windunit=km%252Fh&lengthunit=metric&zoom=5&autowidth=auto"
            frameBorder="0"
            scrolling="NO"
            allowtransparency="true"
            sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox"
            title='1'
          ></iframe>
          <div>
            <a
              href="https://www.meteoblue.com/ru/%D0%BF%D0%BE%D0%B3%D0%BE%D0%B4%D0%B0/%D0%BA%D0%B0%D1%80%D1%82%D1%8B/api_%d0%9d%d0%b5%d0%bf%d0%b0%d0%bb_1283728?utm_source=weather_widget&utm_medium=linkus&utm_content=map&utm_campaign=Weather%2BWidget"
              target="_blank"
              rel="noreferrer"
            >
            </a>
          </div>
        </Frame>
    )
}

export default IFrameMeteo