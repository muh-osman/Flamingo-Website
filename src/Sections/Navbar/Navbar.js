import './Navbar.css'
import { useState, useEffect, useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { NavbarCategoryLink, Button, RentAnchor } from '../../Components'
import IconsData from '../../Assets/Icons/IconsData'


const Navbar = () => {


  // Get URL then split it ex: (http://localhost:3000/phones/apple/2)
  let url = useLocation().pathname.split("/"); // ['...', 'phones', 'apple', '2']
  let [, category] = [...url];

    // Hide "More" Button & add Accessories Components
    const [isMore, setIsMore] = useState(false)
    // Show Accessories category button in Navbar (for users who coming to accessories category useing direct link)
    useLayoutEffect(() => {
        if (category === "accessories") {
            setIsMore(true)
        }
    }, [])
  


    // Hide Notifiction Dot onClick
    const [isDot, setIsDot] = useState(true)

    useEffect(() => {
        isDot ? (
            document.getElementById('root').classList.remove('notif-dot')
        ) : (
            document.getElementById('root').classList.add('notif-dot')
        )
    }, [isDot])


    return (

        <nav>
            <div className="nav-box">

                {/* <!-- Min Navbar Icon --> */}
                <div className="mini-nav">

                    <Button className={'four-mini-nav'} accessibility={"Search"} title={IconsData[0].svg} />
                    <Button className={'four-mini-nav'} accessibility={"User"} title={IconsData[1].svg} />
                    <Button className={'four-mini-nav'} accessibility={"Loved"} title={IconsData[2].svg} />
                    <Button className={'four-mini-nav not-dot'} accessibility={"Notification"} title={IconsData[3].svg}
                        onClick={() => { setIsDot(false) }}
                    />



                    {/* Three dots icon (appears only in screen under 13 inch) */}
                    <div className="nine-dots-box">

                        <Button className={'nine-dots'} accessibility={"More"} title={IconsData[4].svg} />

                        {/* <!-- Search icon in drop list --> */}
                        <div className="drop-list">
                            <Button accessibility={"Search"} title={IconsData[0].svg} id={'search-icon-drop-nav'} />
                            <Button accessibility={"User"} title={IconsData[1].svg} />
                            <Button accessibility={"Loved"} title={IconsData[2].svg} />
                            <Button className={'not-dot'} accessibility={"Notification"} title={IconsData[3].svg}
                                onClick={() => { setIsDot(false) }}
                            />
                        </div>

                    </div>

                </div>


                {/* <!-- Start Nav Categories --> */}
                <div className="categories-box">

                    <NavbarCategoryLink to={'/'} title={'Home'} cat={"home"} svg={IconsData[5].svg} />
                    <NavbarCategoryLink to={'/phones'} title={'Phones'} cat={"phones"} svg={IconsData[6].svg} />
                    <NavbarCategoryLink to={'/gaming'} title={'Gaming'} cat={"gaming"} svg={IconsData[7].svg} />
                    <NavbarCategoryLink to={'/watches'} title={'Watches'} cat={"watches"} svg={IconsData[8].svg} />
                    <NavbarCategoryLink to={'/cameras'} title={'Cameras'} cat={"cameras"} svg={IconsData[9].svg} />
                    <NavbarCategoryLink to={'/computers'} title={'Computers'} cat={"computers"} svg={IconsData[10].svg} />
                    <NavbarCategoryLink to={'/tablets'} title={'Tablets'} cat={"tablets"} svg={IconsData[11].svg} />
                    <NavbarCategoryLink to={'/tvs'} title={'TVs'} cat={"tvs"} svg={IconsData[12].svg} />


                    {/* Hide "More" Button & add Components */}

                    {
                        isMore ? (
                            <NavbarCategoryLink to={'/accessories'} title={'Accessories'} cat={"accessories"} svg={IconsData[13].svg} />
                        ) : (
                            // More Button in Nav
                            < Button onClick={() => setIsMore(true)} className='more-btn-nav-box' title='More' />
                        )
                    }


                    {/* Rent Button */}
                    <RentAnchor />

                </div>

            </div>
        </nav >
    )
}

export default Navbar