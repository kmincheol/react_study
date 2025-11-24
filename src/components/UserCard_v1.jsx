function UserCard({name, age}) {
    return (
        <div style={{border:'1px solid black', margin: '10px', padding: '10px'}}>
            <h3>{name}</h3>
            <p>나이 : {age}</p>
        </div>
    )
}

export default UserCard;