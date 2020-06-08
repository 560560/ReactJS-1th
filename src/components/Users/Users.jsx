import React from 'react';
import s from './Users.module.css';
import ava_null from "../../assets/images/ava_null.png"

const Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    if (pages.length < 10) {
      pages.push(i)
    } else if (i === pagesCount) {
      pages.push("...")
      pages.push(i)
    }

  }


  let usersList = props.users.map(u =>
    <div className={s.usersBlock} key={u.id}>
      <div className={s.userAva_followButton}>
        <div className={s.userAva}><img src={u.photos.small === null ? props.ava_null : u.photos.small}
                                        alt=""/></div>
        <div className={s.followUnfollowButton}>{u.followed ?
          <button onClick={() => {
            props.unfollowFrom(u.id)
          }}>Unfollow</button> :
          <button onClick={() => {
            props.followTo(u.id)
          }}>Follow</button>}
        </div>
      </div>
      <div className={s.userInfo}>
        <div className={s.userName}>{u.name}</div>
        <div className={s.country}>{/*{u.location.country},*/}</div>
        <div className={s.status}>{u.status}</div>
        <div className={s.city}>{/*{u.location.city}*/}</div>
      </div>
    </div>)


  return (<div>

    {usersList}
    </div>
  )

}

export default Users;