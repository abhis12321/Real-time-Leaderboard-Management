import React from "react";

function Rank({ index, user, update }) {
  return (
    <React.Fragment>
      <li className="flex flex-col xs:flex-row gap-4 items-center bg-ed-900 w-full justify-around leading-10 bg-slate-800/20 rounded-lg px-2 xs:px-1 py-2 xs:py-0">
        <div className="flex min-w-[25%] items-center justify-around">
          <div className="w-12 font-semibold text-3xl text-center">
            {index + 1}
          </div>
          <div className="min-w-[15%] w-12 bg-ed-400">
            <img
              src="https://imgs.search.brave.com/KalqOqOpDTXKJY9gcgzSRYLYhobXYo6PuXVdZxzaLQA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzY0LzU3LzAw/LzM2MF9GXzU2NDU3/MDA4OV8yb3U3UTZm/V1lrUDFvQzVFSWU3/NzBiYWVZajB2TjF4/Uy5qcGc"
              alt="profile-img"
              className="w-12 h-12 mx-auto rounded-full opacity-70"
            />
          </div>
        </div>
        <div className="flex items-center justify-around w-full sm:flex-1 bg-sky-600/60 rounded-lg font-bold">
          <div className="w-[45%]">
            {user?.userName ? user.userName : "player name"}
          </div>
          <button
            className="w-[15%] min-w-[80px] text-center bg-green-700 border-2 border-green-600 hover:bg-green-800 hover:rounded-lg hover:text-yellow-300 active:bg-violet-950 border-1 rounded"
            onClick={(e) => update(user.id)}
          >
            vote
          </button>
          <div className="w-[40%]">{user?.points ? user.points : "20101"}</div>
        </div>
      </li>
    </React.Fragment>
  );
}

export default React.memo(Rank);
