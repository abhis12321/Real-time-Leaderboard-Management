import React from "react"

function Row({index, user , update}) {
    return (
        <React.Fragment>
          <li className="row px-2 my-3 d-flex align-items-center">
            {
                index > 2 ?
                    <div className="col-2 text-light fs-3 fw-bolder m-0 p-0">{index+1}</div>
                :
                index === 0 ?
                <div className="col-2 text-light fs-5  m-0 p-0">               
                    <img src="medal1.png" alt="" className="rank-logo" />
                </div> 
                :
                    <div className="col-2 text-light fs-5  m-0 p-0">
                        <img src="medal2.png" alt="" className="rank-logo" />
                    </div>
            }
            <div className="col-2">
                <img src="profile.png" alt="" className="rank-logo-profile  bg-light " />
            </div>
            <div className=" bg-primary bg-opacity-100 rounded-4 d-flex justify-content-around align-items-center gap-3 fw-medium rounded px-3 text-light fs-5 fw-medium col-8 ">
                <div className="">{user?.userName ? user.userName : 'player name'}</div>
                <button className='btn bg-success bg-opacity-70 border border-danger fw-semibold fs-4 px-3 py-1' onClick={e => update(user.id)}>vote</button>
                <div className="">
                    {user?.points ? user.points : '20101'}
                </div>
            </div>
          </li>
        </React.Fragment>          
    )
}


export default React.memo(Row);