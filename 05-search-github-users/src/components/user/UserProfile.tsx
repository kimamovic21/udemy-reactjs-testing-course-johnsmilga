import { useQuery } from '@apollo/client';
import { type UserData } from '@/types';
import { GET_USER } from '@/queries';

type UserProfileProps = {
  userName: string;
};

const UserProfile = ({ userName }: UserProfileProps) => {
  const { loading, error, data } = useQuery<UserData>(GET_USER, {
    variables: { login: userName },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <h2 className='text-xl'>{error.message}</h2>;
  if (!data) return <h2 className='text-xl'>User Not Found.</h2>;
  console.log(data);
  
  const {
    avatarUrl,
    name,
    bio,
    url,
    repositories,
    followers,
    following,
    gists,
  } = data.user;

  return (
    <div>
      <h2 className='text-2xl font-bold'>
        {name}
      </h2>
      <h3>
        {bio}
      </h3>
    </div>
  );
};

export default UserProfile;