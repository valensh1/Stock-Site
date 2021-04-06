import React from 'react'

const SubNavBarStockNews = () => {
    let subNavBar = ['Chart','Conversations','Stats','Historical Data', 'Profile','Financials','Analysis'];
    
        {subNavBar.map((item, index) => {
            return (
                <div className="sub-navbar-stockNews">
                <h4>{item}</h4>
                
            </div>
            )
        })}
       
    
}

export default SubNavBarStockNews;
