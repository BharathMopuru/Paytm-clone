import logo from '../../assets/logo.svg'

const DefaultHeaderComponent = () => {
    
    return (
    <div className='container flex'>
        <div className='logo'>
            <a href='#'><img src={logo} alt="logo" /></a>
        </div>
        <nav className='nav'>
            <ul className='nav-links flex'>
                <li>Paytm for Consumer</li>
                <li>Paytm for Business</li>
                <li>Investor Relations</li>
                <li>Company</li>
                <li>Career</li>
            </ul>
        </nav>
        <div className='btnSignIn flex'>
          <button >Sign In</button>
        </div>
    </div>
    )
}

export default DefaultHeaderComponent;