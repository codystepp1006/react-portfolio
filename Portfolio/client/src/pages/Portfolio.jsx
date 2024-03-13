import Header from "../components/header/header"
import '../pagescss/portfolio.css'


const Portfolio = () => {

  return (
    <div>
        <Header></Header>
        <div>
            <h1>Portfolio</h1>
            <br></br>
            </div>
            <div className = "repoImages">
            <a  target="_blank" href ="https://github.com/codystepp1006/Backend-Ecommerce-Sequelize"><img id = "image" src = "https://github.com/codystepp1006/Backend-Ecommerce-Sequelize/raw/main/Develop/Screenshot%202024-03-04%20172214.png"/></a>
            <a id = "image" target="_blank" href ="https://github.com/codystepp1006/ls-todo-list"><img id = "image"src = "https://github.com/codystepp1006/ls-todo-list/blob/main/Screenshot%202023-10-23%20230557.png?raw=true"/></a>
            <a id = "image" target="_blank" href ="https://github.com/codystepp1006/note-taker-express.js"><img id = "image"src = "https://github.com/codystepp1006/note-taker-express.js/raw/main/other/Screenshot%202024-02-19%20171558.png"/></a>
        </div>
        {/* <a href = "https://github.com/dashboard">Github</a> */}
    </div>
  )
}

export default Portfolio