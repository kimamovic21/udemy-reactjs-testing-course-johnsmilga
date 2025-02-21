import { type Repository } from '@/types';
import { calculateMostStarredRepos } from '@/utils';

const PopularRepos = ({ repositories }: { repositories: Repository[] }) => {
  const popularRepos = calculateMostStarredRepos(repositories);
  console.log(popularRepos);

  return (
    <div>PopularRepos</div>
  );
};

export default PopularRepos;