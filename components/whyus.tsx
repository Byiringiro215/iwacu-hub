import React from 'react'
import { Clock5, MonitorCheck, UserRoundSearch } from 'lucide-react';
import { Card,
    CardHeader,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle
 } from './ui/card';


interface cardProps{
    icon?:React.ReactNode;
    title:string;
    description:string
}

const cards:cardProps[]=[
    {icon:<UserRoundSearch/>,title:'Smart Match',description:'Esse voluptas cumque vel exercitationem Reiciendis est hic accusamus'},
    {icon:<Clock5/>,title:'Secure Escrow',description:'Esse voluptas cumque vel exercitationem Reiciendis est hic accusamus'},
    {icon:<MonitorCheck/>,title:'Verified Badge',description:'Esse voluptas cumque vel exercitationem Reiciendis est hic accusamus'},
]

const WhyUs = () => {
  return (
    <div className='px-14 pb-20 pt-10 space-y-6 bg-[#f0f9fa]/50'>
        <h1 className='font-bold text-2xl text-center'> WHY US?</h1>
            <div className=' flex flex-col md:flex-row items-center gap-6'>
{cards.map((card,index)=>(
<Card className='flex-col items-center  px- py-10 rounded-lg bg-white border-gray-100 hover:border-2 hover:border-[#000033] hover:transition-all hover:duration-700'  key={index}>
    <CardContent>
        <div className='mx-auto  size-10 rounded-sm bg-[#000033] p-2 text-white '>
            {card.icon}
        </div>
        <p className='font-bold text-sm text-center my-3'>
            {card.title}
        </p>
        <p className='text-black/50 font-light text-xs text-center'>{card.description}</p>
    </CardContent>
</Card>
))}
            </div>
        
      
    </div>
  )
}

export default WhyUs
