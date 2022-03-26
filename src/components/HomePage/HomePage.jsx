import React from "react";
import { BackContainer, BackImg, Heading } from "../../Styles/appStyles";
import Background from "../../assests/icons/background.jpg";
import { Data1, Heading1, Heading2, InfoHeading, Data2, FoodWaste, Background2, Data3 } from "./HomePageStyles";
import FoodWastes from "../../assests/icons/WasteFood.png"
import TopBar from "../TopBar/TopBAr";
import Footer from "../Footer/Footer";

export default function HomePage() {
    return (
        <>
        <TopBar />
            <BackContainer>
                <BackImg src={Background} />
            </BackContainer>
            <Background2>
                <Heading>
                    Every Dish Deserves a Plate.
                </Heading>
                <Heading1>
                    START SAVING DELICIOUS SURPLUS FOOD
                </Heading1>
                <Heading2>
                    AT GREAT PRICES!
                </Heading2>

                <Data1>
                    We dream of a planet with no food waste, and every day we’re working on making that a reality. Our app is the most direct way for you to get involved - just download, log on, and get saving perfectly good, surplus food from your local stores. It’s always a surprise and an instant good deed for the planet. Get started now.
                </Data1>
                <FoodWaste src={FoodWastes} />
                <Data3>
                    MORE THAN 1/3 OF ALL FOOD IS WASTED
                </Data3>
                <Data2>
                    40 % food produced in india is wasted
                    Despite adequate food production, the UN has reported that about 190 million Indians remain undernourished. It is further estimated that the  value of food wastage in India is around ₹92,000 crores per annum.
                    On an average, 18.7 kgs of food was disposed off by one Safal outlet daily. This suggests that an estimated 7.5 tonnes of food is discarded
                    daily across the 400 Safal outlets in Delhi.
                    over 7000 indians die of hunger every day
                    over 25 lakh indians die of hunger every year
                </Data2>
            </Background2>
            <Footer />
        </>
    )
}