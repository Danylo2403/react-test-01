import { HiMail } from "react-icons/hi";
import { CardWrapper } from "./Profile.styled";
import { Text } from "./Profile.styled"; 
import { Accent } from "./Profile.styled";

export const Profile = ({ pilot: { avatar, name, email, age } }) => {
  return (
    <CardWrapper>
        <img src={avatar} alt={name} width="120" height="120" />
        <Text>
          <Accent>Username:</Accent> {name}
        </Text>
        <Text>
          <Accent>Email: <HiMail /> </Accent> {email}
        </Text>
        <Text>
          <Accent>Age:</Accent> {age}
        </Text>
      </CardWrapper>
  );
}