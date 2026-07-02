export interface GithubUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name: string | null;
  company: string | null;
  blog: string;
  location: string | null;
  bio: string | null;
  email: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
}

export interface GithubRepo {
    id:number;
    name:string;
    html_url:string;
    description:string | null;
    stargazers_count:number;
    launguage:string | null;
    updated_at:string;
    forks_count:number;
}