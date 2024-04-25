import React from 'react';
import Rank from './Rank';

function Card() {
    const initialUsers = [
        {
            id:"#i1234" ,
            userName:"gaurav" , 
            points:2223 ,
        } ,
        {
            id:"#i124" ,
            userName:"kausik" , 
            points:2212 ,
        } ,
        {
            id:"#1234" ,
            userName:"santosh" , 
            points:2232 ,
        } ,
        {
            id:"#i34" ,
            userName:"tarun" , 
            points:2221 ,
        } ,
        {
            id:"#i12" ,
            userName:"amit" , 
            points:2201 ,
        } ,
    ];    

/*
//Fetching users data from api url
    React.useEffect(() => {
        fetch(process.env.API_URI)
            .then(res => res.json)
            .then(data => setUsers([...data]));
    })
*/
    const [users , setUsers] = React.useState(null);
    React.useEffect(() => {
        let sortedusers = initialUsers.sort((a , b) => b.points >= a.points ? 1 : -1);
        setUsers(sortedusers);
    }, []);
    
    const update = id => {
        let newusers = users.map(m => {
            if(m.id === id) {
                m.points++;
            }

            return m;
        })

        let sortedusers = newusers.sort((a , b) => b.points >= a.points ? 1 : -1);
        setUsers(sortedusers);
    }

  return (
        <ul className="text-center flex flex-col gap-5 xs:gap-8 items-center justify-around w-full pt-8">
            {
                users?.map((user , index) => {
                    return <Rank user = {user} index = {index} update = {update} key = {user.id}/>
                })
            }
        </ul>
  );
}

export default React.memo(Card);