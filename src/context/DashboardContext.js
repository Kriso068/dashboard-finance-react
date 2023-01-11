import React, {useState, createContext} from "react";
import fullData from "./fulldata";

export const DashboardContext = createContext()

const DashboardContextProvider = props => {

    const [dataChart, setDataChart] = useState(fullData['2020'])
    const [yearData, setYearData] = useState('2020')


    //fonction qui va changer les valeurs
    const changeYear = el => {

        //on recupère la value et ont cherche dans dataChart
        setYearData(el.target.value)

        //on recupère la value et ont cherche dans fullChart les valeur associées
        setDataChart(fullData[el.target.value])
    }


    return (

        <DashboardContext.Provider value={{changeYear, dataChart, yearData}}>
            {props.children}
        </DashboardContext.Provider>
    )
}

export default DashboardContextProvider;