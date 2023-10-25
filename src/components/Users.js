import User from "./User";

const Users = ({users}) => {
    return (
        users.map((user) => {
                return (
                    <User key={user.id}  user={user} />
                );
        })
    )  
};

export default Users;