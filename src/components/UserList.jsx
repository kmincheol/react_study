import UserCard from './UserCard_v1';

function UserList() {
    const users = [
        { id: 1, name: '홍길동', age : 25},
        { id: 2, name: '홍길당', age : 27},
    ];

    return (
        <div>
            {users.map((user) => (
                <UserCard key={user.id} name={user.name} age={user.age} />  
            ))}
        </div>
    )
}

export default UserList;