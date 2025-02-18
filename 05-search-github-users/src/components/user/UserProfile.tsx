type UserProfileProps = {
  userName: string;
};

const UserProfile = ({ userName }: UserProfileProps) => {
  return (
    <h2 className='text-2xl font-bold'>
      {userName}
    </h2>
  );
};

export default UserProfile;