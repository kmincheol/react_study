import UserCard from './components/UserCard';
import LikeButton from './components/LikeButton';
import InputExample from './components/InputExample';
import GreetingForm from './components/GreetingForm';
import FormPractice from './components/FormPractice';
import TaskList from './components/TaskList';
import UserList from './components/UserList';

function App() {
    const isLoggedIn = true;
    const hasNewMessage = false;

    let content;

    if (isLoggedIn) {
        content = <p>환영합니다</p>;
    } else {
        content = <p>로그인해주세요</p>;
    }

    const list = ['사과', '바나나', '포도'];
    const taskList = ['운동하기', '공부하기', '요리하기'];

    return (
        <div>
            <UserCard name="김민철" age="33" />
            <LikeButton />
            <InputExample />
            <GreetingForm />
            <FormPractice />


            <p>{isLoggedIn ? '환영합니다' : '로그인해주세요'}</p>
            <p>{hasNewMessage && 'test'}</p>

            {content}

            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <TaskList tasks={taskList} />

            <UserList />
        </div>
    );
}

export default App