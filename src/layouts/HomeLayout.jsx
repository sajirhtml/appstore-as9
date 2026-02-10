
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomeLayout = () => {
    return (
        <div className='min-h-screen flex flex-col justify-between'>
            <header>
                <Navbar></Navbar>
            </header>
            <main>this is mian</main>
            <footer><Footer></Footer></footer>
        </div>
    );
};

export default HomeLayout;