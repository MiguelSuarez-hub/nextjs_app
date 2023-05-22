'use client';
import { useRouter } from "next/navigation";

const Users = ({users}) => {
  const router = useRouter();

  return (
    <ul className="list-group">
        {users.map((user) => (
          <li 
            key={user.first_name + user.id}
            onClick={() => router.push(`/users/${user.id}`)}
            className="
              list-group-item
              d-flex
              justify-content-between
              align-items-center  
              list-group-item-action
              border-bottom
              border-white
              btn
            "
          >
            <div>
              <h3>{user.id} {user.first_name} {user.last_name}</h3>
              <p>{user.email}</p>
            </div>
            <img className="rounded-circle"src={user.avatar} alt={user.email} />
          </li>
        ))}
      </ul>
  )
}

export default Users;