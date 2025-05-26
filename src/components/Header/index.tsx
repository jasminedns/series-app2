import '../../app/globals.scss';
import Link from 'next/link';

const Header = () => {
    return (
        <header className='header'>
            <div className="header__title">
                <h1 className='header__title--main'>GINGERS</h1>
                <h2 className='header__title--secondary'>WATCH</h2>
            </div>
            <div className="header__nav">
                <div className='header__nav--links'>
                    <Link href={"/"}>Home</Link>
                    <Link href={"/airing"}>Airing</Link>
                </div>
            </div>        
        </header>
    )
}

export default Header;