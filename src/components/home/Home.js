// import de react
import React from 'react';

// import css
import './Home.css';

// import components
import TotalesBox from '../totalesBox/TotalesBox';
import SecondSection from '../secondSection/SecondSection';
import ThirdSection from '../thirdSection/ThirdSection';

function Home() {
    return (
        <div id='div-home'>
            <TotalesBox />
            <SecondSection />
            <ThirdSection />
        </div>
    )
}

export default Home;