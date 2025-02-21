import { type Repository } from './types';

export const calculateMostForkedRepos = (
  repositories: Repository[]
): { repo: string; count: number }[] => {
  if (repositories.length === 0) {
    return [];
  };

  const forkedRepos = repositories
    ?.map((repo) => ({
      repo: repo.name,
      count: repo.forkCount,
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  return forkedRepos;
};

export const calculateMostStarredRepos = (
  repositories: Repository[]
): { repo: string; stars: number }[] => {
  if (repositories.length === 0) {
    return [];
  };

  const starredRepos = repositories
    ?.map((repo) => ({
      repo: repo.name, 
      stars: repo.stargazerCount, 
    }))
    .sort((a, b) => b.stars - a.stars)
    .slice(0, 5); 

  return starredRepos;
};