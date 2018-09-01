import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1><em>Hello, World!</em></h1>
    <br />
    <p>I would like to get a free ticket for <em>"The 2018 freeCodeCamp JAMstack Hackathon"</em>.<br />
    It would be my pleasure to get involved in making something great!</p>
    <p><em>Happy Coding!</em></p>
    <br />
    <p>Sincerely Yours,</p>
    <p><small><em>Dragan Ćajić</em> (cyrillic: <strong>Драган Ћајић</strong>)<br />
    » <a href="http://learn-pisio.eu5.org/" target="_blank">Learn PISIO</a>&nbsp;&nbsp;&nbsp;
    § <a href="https://www.freecodecamp.com/dragancajic" target="_blank">freeCodeCamp</a>&nbsp;&nbsp;&nbsp;
    ~ <a href="https://github.com/dragancajic" target="_blank">GitHub</a></small></p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
