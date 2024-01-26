import StarbucksLogo from '../assets/sblogo.jpeg';
import { MapPin, Menu, X} from 'lucide-react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function RightNav() {
    return (
        <div className='flex items-center gap-4 max-lg:hidden'>
            <a className='flex gap-2 font-bold hover:text-Starbucks' href="#"> <MapPin></MapPin> Find a Store</a>
            <div className='flex gap-4 ml-6'>
                <button className='border-2 px-[20px] py-[5px] rounded-[20px] border-black font-medium'>Sign in</button>
                <button className='border-2 bg-black border-black font-medium text-white px-[20px] py-[5px] rounded-[20px]'>Join now</button>
            </div>
        </div>
    );
}

function LeftNav() {

    return (
        <div className='flex items-center gap-4'>
            <img className='w-[51px] max-md:w-[40px] mr-6' src={StarbucksLogo} alt={StarbucksLogo} />
            <ul className='flex items-center gap-6 max-lg:hidden'>
                <li className='font-bold uppercase hover:text-Starbucks'><a href="/menu">Menu</a></li>
                <li className='font-bold uppercase hover:text-Starbucks'><a href="/merchandise">Merchandise</a></li>
                <li className='font-bold uppercase hover:text-Starbucks border-b-4 border-Starbucks '><a href="index">Rewards</a></li>
            </ul>
            
            <BrowserRouter>
                <Routes>
                    <Route path="/menu" element=""></Route>
                    <Route path="/merchandise" element=""></Route>
                    <Route index element=""></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );

}

function NavContainer() {

    const [menuClicked, setMenuClicked] = useState(false);
    const toggleMenu = () => {
        setMenuClicked(!menuClicked);
    }

    return (
        <>
            <nav className='w-full px-14 py-8 flex justify-between items-center max-md:px-10'>
                <LeftNav/>
                <RightNav />
                {menuClicked ? <X onClick={toggleMenu} className='text-gray-600 hidden max-lg:block cursor-pointer'></X>  : <Menu onClick={toggleMenu} className='text-gray-600 hidden max-lg:block cursor-pointer'></Menu>}
            </nav>

            <nav className={`fixed top-0 pt-10 z-20 h-[100vh] w-[40%] max-md:w-[50%] max-sm:w-[60%] pl-10 lg:hidden max-lg:text-[15px] bg-white transition-all duration-100 ease-in  ${menuClicked ? 'translate-x-p ' : 'translate-x-[-500px]'}`}>
                    <img className='w-[51px] max-md:w-[40px] mb-20 mr-6' src={StarbucksLogo} alt={StarbucksLogo} />
                     <ul className='flex flex-col items-start gap-6 mb-8'>
                        <li className='font-bold uppercase text-[20px]  hover:text-Starbucks'><a href="/menu">Menu</a></li>
                        <li className='font-bold uppercase text-[20px]  hover:text-Starbucks'><a href="/merchandise">Merchandise</a></li>
                        <li className='font-bold uppercase text-[20px]  hover:text-Starbucks'><a href="index">Rewards</a></li>
                    </ul>
                    <hr className='border-1 w-[80%]'/>
                    <div className='flex flex-col items-start gap-4 mt-8'>
                        <a className='flex gap-2 font-bold text-[20px] items-center  hover:text-Starbucks' href="#"> <MapPin className='text-[20px]'></MapPin> Find a Store</a>
                        <div className='flex flex-col gap-4 mt-4'>
                            <button className='border-2 px-[20px] py-[5px] rounded-[20px] border-black font-medium'>Sign in</button>
                            <button className='border-2 bg-black border-black font-medium text-white px-[20px] py-[5px] rounded-[20px]'>Join now</button>
                        </div>
                    </div>
            </nav>
        </>
    );
}

function NavBar() {
    return (
        <>
            <NavContainer/>
            <div className='sticky top-0 z-200 w-full p-4 pl-14 max-lg:pl-10 bg-HouseGreen max-md:text-[15px] flex justify-between items-center'>
                <h1 className='text-white font-black '>STARBUCKS® REWARDS</h1>
                <button className='text-white font-medium border-2 border-white px-[15px] py-[5px] rounded-[20px] mr-[10px] hidden max-lg:block'>Join in the app</button>
            </div>
        </>
    );
}

export default NavBar;
