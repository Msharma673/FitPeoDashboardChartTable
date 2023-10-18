import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsBriefcase, BsGraphUpArrow, BsTypeH3}
 from 'react-icons/bs'
 import 
 { BarChart, Pie, PieChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

 const COLORS = ["#8884d8", "#82ca9d", "#fc03df", "#df0030"];
 

function Home() {

    const data = [
        {
          name: 'Jan',
          MonthlySell: 4000,
          
          amt: 2400,
        },
        {
          name: 'Feb',
          MonthlySell: 3000,
          
          amt: 2210,
        },
        {
          name: 'Mar',
          MonthlySell: 2000,
          
          amt: 2290,
        },
        {
          name: 'Apr',
          MonthlySell: 2780,
          
          amt: 2000,
        },
        {
          name: 'May',
          MonthlySell: 1890,
          
          amt: 2181,
        },
        {
          name: 'Jun',
          MonthlySell: 2390,
          
          amt: 2500,
        },
        {
          name: 'July',
          MonthlySell: 3490,
          
          amt: 2100,
        },
        {
            name: 'Aug',
            MonthlySell: 5580,
            
            amt: 2400,
          },
          {
            name: 'Sep',
            MonthlySell: 3160,
            
            amt: 2980,
          },
          {
            name: 'Oct',
            MonthlySell: 8590,
        
            amt: 3220,
          },
          {
            name: 'Nov',
            MonthlySell: 1780,
           
            amt: 2340,
          },
          {
            name: 'Dec',
            MonthlySell: 5490,
           
            amt: 2560,
          },
      ];
     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h1>DASHBOARD</h1>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Earning</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>300</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Orders</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>12</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Balance</h3>
                    <BsBriefcase className='card_icon'/>
                </div>
                <h1>33</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Total Sales</h3>
                    <BsGraphUpArrow className='card_icon'/>
                </div>
                <h1>42</h1>
            </div>
        </div>

        <div className='charts' >
        
        
        
            <ResponsiveContainer width="100%" height="100%" name="Overview">
            <BarChart
            width={250}
            height={150}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray=" " />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                
                <Bar dataKey="MonthlySell" fill="blue" />
                </BarChart>
            </ResponsiveContainer>

          



<ResponsiveContainer width="100%" height={300}>
      <PieChart>
      <Pie data={data} dataKey="MonthlySell" nameKey="name" cx="50%" cy="50%"
       outerRadius={50} fill="lightgreen" />
      <Pie data={data} dataKey="MonthlySell" nameKey="name" cx="50%" cy="50%" 
      innerRadius={60} outerRadius={80} fill="blue" 
      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} />
      </PieChart>
    </ResponsiveContainer>



        

           

        </div>
    </main>
  )
}

export default Home