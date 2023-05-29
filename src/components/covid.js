import React, { useEffect,useState} from 'react'
import './covid.css'
const Covid = () => {
    const [data,setData]=useState([]);
    const getCovidData=async()=>{
        try {
            const data=await fetch('https://data.covid19india.org/v4/min/data.min.json')
            const realData=await data.json();
            console.log(realData.GJ.total);
            setData(realData.GJ.total);

        } catch (error) {
            console.log(error)
        }
            
    };

    useEffect(() => {
    getCovidData();
    }, [])
    
  return (
    <>
   <section>

    <h1 className='live'>💥 LIVE </h1>
        <h2 className='covid'> Covid-19 VIRUS TRACKER</h2>
       <div className='container'>
        <ul className='card-container'>
            <li className='card'>
             <div className='card__main'>
             <div className='card__inner'>
                <p className='card__name'><span>STATE</span></p>
                <p className='card__total card__small'>
                    Gujarat 
                </p>
             </div>
             </div>

            </li>
            <li className='card'>
             <div className='card__main'>
             <div className='card__inner'>
                <p className='card__name'><span>total</span>confirmed</p>
                <p className='card__total card__small'>
                    {data.confirmed} 
                </p>
             </div>
             </div>

            </li>
            <li className='card'>
             <div className='card__main'>
             <div className='card__inner'>
                <p className='card__name'><span>total</span>deceased</p>
                <p className='card__total card__small'>
                {data.deceased}  
                </p>
             </div>
             </div>

            </li>
            <li className='card'>
             <div className='card__main'>
             <div className='card__inner'>
                <p className='card__name'><span>total</span>recovered</p>
                <p className='card__total card__small'>
                {data.recovered}  
                </p>
             </div>
             </div>

            </li>
            <li className='card'>
             <div className='card__main'>
             <div className='card__inner'>
                <p className='card__name'><span>total</span>vaccinated of Dose-1</p>
                <p className='card__total card__small'>
                {data.vaccinated1}  
                </p>
             </div>
             </div>

            </li>
            <li className='card'>
             <div className='card__main'>
             <div className='card__inner'>
                <p className='card__name'><span>total</span>vaccinated of Dose-2</p>
                <p className='card__total card__small'>
                {data.vaccinated2}   
                </p>
             </div>
             </div>

            </li>
           
        </ul>
        </div>
 </section>
       
    </>
  )
}

export default Covid