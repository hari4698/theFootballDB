import MainNavBar from './MainNavbar'

function Layout({ children }) {
    return (
        <div>
            <MainNavBar />
            {children}
        </div>

    )
}

export default Layout