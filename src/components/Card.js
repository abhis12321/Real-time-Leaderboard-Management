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



// function Rank({index, user , update}) {
//     return (
//         <React.Fragment>
//           <li className="row px-2 my-3 d-flex align-items-center">
//             {
//                 index === 0 ?
//                     <div className="col-2 text-light fs-5  m-0 p-0">               
//                         <img src="../../public/medal1.png" alt="" className="rank-logo" />
//                     </div> 
//                 :
//                 index === 1 ?
//                     <div className="col-2 text-light fs-5  m-0 p-0">
//                         <img src="medal2.png" alt="" className="rank-logo" />
//                     </div>
//                 :
//                 index === 2 ?
//                     <div className="col-2 text-light fs-5  m-0 p-0">
//                         <img src="medal3.png" alt="" className="rank-logo" />
//                     </div>
//                 :
//                     <div className="col-2 text-light fs-3 fw-bolder m-0 p-0">
//                         {index+1}
//                     </div>
                
//             }
//             <div className="col-2">
//                 <img src="profile.png" alt="" className="rank-logo-profile  bg-light " />
//             </div>
//             <div className=" bg-primary bg-opacity-100 rounded-4 d-flex justify-content-around align-items-center gap-3 fw-medium rounded px-3 text-light fs-5 fw-medium col-8 ">
//                 <div className="">
//                     {user?.userName ? user.userName : 'player name'}
//                 </div>
//                 <button className='btn bg-success bg-opacity-70 border border-danger fw-semibold fs-4 px-3 py-1' onClick={e => update(user.id)}>vote</button>
//                 <div className="">
//                     {user?.points ? user.points : '20101'}
//                 </div>
//             </div>
//           </li>
//         </React.Fragment>          
//     )
// }


export default React.memo(Card);