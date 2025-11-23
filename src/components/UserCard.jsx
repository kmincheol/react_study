function UserCard(props) {
    return(
        <>
            <p>{props.name}님은 {props.age}세 입니다.</p>
        </>
    );
}

export default UserCard;