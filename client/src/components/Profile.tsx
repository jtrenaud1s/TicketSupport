import React from "react";
import avatar from "../../assets/img/avatar.jpg";
import { IUser } from "../interfaces/IUser";

interface IProps {
  user: IUser;
  size?: string;
}

const Profile: React.FC<IProps> = ({ user, size = "64px" }: IProps) => {
  const role = user.role;

  if (role === null) throw new Error("Role doesnt exist!");

  return (
    <div className="text-center p-2">
      {/* <img
        src={user.profilePicture || avatar}
        className="img-fluid rounded-circle mb-2"
        alt={`${user.firstName} ${user.lastName}`}
        width={size}
        height={size}
      /> */}
      <div className="fw-bold">{`${user.firstName} ${user.lastName}`}</div>
      <small>{role}</small>
    </div>
  );
};

export default Profile;
