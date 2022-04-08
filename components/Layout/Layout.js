import Header from '../common/Header/Header';
import Mint from "../common/Mint/Mint";
import Footer from '../common/Footer/Footer';

const Layout = ({ children }) => {
    return (
        <>
           <div >
           <Header />
           </div>
           <div >
           {children}
           </div>
            <Mint />
            <Footer />
        </>
    )
}

export default Layout