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
            points:2122 ,
        } ,
        {
            id:"#1234" ,
            userName:"santosh" , 
            points:2422 ,
        } ,
        {
            id:"#i34" ,
            userName:"tarun" , 
            points:2222 ,
        } ,
        {
            id:"#i12" ,
            userName:"amit" , 
            points:21122 ,
        } ,
    ];    

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
        <ul className="p-0 m-0 justify-content-center align-items-center text-center container">
            {
                users?.map((user , index) => {
                    return <Rank user = {user} index = {index} update = {update} key = {user.id}/>
                })
            }
        </ul>
  );
}

export default React.memo(Card);