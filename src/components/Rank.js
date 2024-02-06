import React from "react";

function Rank({index, user , update}) {
    return (
        <React.Fragment>
          <li className="row px-2 my-3 d-flex align-items-center">
            {   //--Rank
                index === 0 ?
                <div className="rank col-2 text-light fs-5  m-0 p-0">               
                    <img src="medal1.png" alt="" className="rank-logo" />
                </div> 
                :
                index === 1 ?
                    <div className="rank col-2 text-light fs-5  m-0 p-0">
                        <img src="medal2.png" alt="" className="rank-logo" />
                    </div>
                :
                index === 2 ?
                    <div className="rank col-2 text-light fs-5  m-0 p-0">
                        <img src="medal3.png" alt="" className="rank-logo" />
                    </div>
                :
                    <div className="rank col-2 text-light fs-3 fw-bolder m-0 p-0" id="num">
                        {index+1}
                    </div>
            }
            <div className="col-2 profile-img"> 
                <img src="profile.png" alt="" className="rank-logo-profile  bg-light" />
            </div>
            <div className=" bg-primary rounded-3 d-flex justify-content-around align-items-center text-center text-light fs-5 fw-medium col-8 row" id="info">
                <div className="col-4">
                    {user?.userName ? user.userName : 'player name'}
                </div>
                <button className='btn bg-success bg-opacity-70 border border-danger fw-semibold py-0 fs-4 col-3' onClick={e => update(user.id)}>vote</button>
                <div className="col-4">
                    {user?.points ? user.points : '20101'}
                </div>
            </div>
          </li>
        </React.Fragment>          
    )
}


export default React.memo(Rank);