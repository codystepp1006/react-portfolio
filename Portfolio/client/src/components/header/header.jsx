import { Link } from 'react-router-dom'


const Header = () => {


    return (
        <div id = "header">
            <Link to='/'>
                <div className='animation'>
                    <img id = "headerImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT30S9i12mi_mySah9d-JHCSmew4wJZMR2yUEq2WFtPmm8YYwxhBb7iNZMdaMqofTr87bE&usqp=CAU"></img>
                </div>
            </Link>
            <Link to='/' id='header-title'>Cody's Porftolio</Link>
            <div className='navigation'>
                <Link className='navigation' to ='/'>About Me</Link>
                <Link className='navigation' to ='/Portfolio'>Portfolio</Link>
                <Link className='navigation' to ='/Resume'>Resume</Link>
                <Link className='navigation' to ='/Contact'>Contact Me</Link>
            </div>
        </div>
    )
}

export default Header