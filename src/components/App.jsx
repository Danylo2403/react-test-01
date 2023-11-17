import { Profile } from './Profile/Profile';

const jacob = {
  id: 1,
  name: 'Jacob Mercer',
  email: 'j.mercer@mail.com',
  age: 32,
  avatar: 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
};

const olendau = {
  id: 3,
  name: 'Olendau Jackson',
  email: 'o.jaclson@mail.com',
  age: 39,
  avatar: 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
}


export const App = () => {
  return (
    <div>
      <Profile
        username={jacob.name}
        imgUrl={jacob.avatar}
        age={jacob.age}
        email={jacob.email}
      />
      
      <Profile
        username={olendau.name}
        imgUrl={olendau.avatar}
        age={olendau.age}
        email={olendau.email}
      />
      </div>
  );
};