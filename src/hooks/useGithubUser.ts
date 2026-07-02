import { useState } from "react";
import  type { GithubUser, GithubRepo } from "../types/github";

interface FetchState {
  user: GithubUser | null;
  repos: GithubRepo[];
  loading: boolean;
  error: string | null;
}

export function useGithubUser() {
  const [state, setState] = useState<FetchState>({
    user: null,
    repos: [],
    loading: false,
    error: null,
  });

  const fetchUser = async (username: string) => {
    if (!username.trim()) return;

    setState((prev) => ({ ...prev, loading: true, error: null }));

    try {
      // Kullanıcı bilgilerini çek
      const userRes = await fetch(
        `https://api.github.com/users/${username}`
      );

      if (!userRes.ok) {
        throw new Error("Kullanıcı bulunamadı!");
      }

      const userData: GithubUser = await userRes.json();

      // Repo bilgilerini çek (yıldıza göre sıralı, max 10)
      const repoRes = await fetch(
        `https://api.github.com/users/${username}/repos?sort=stars&per_page=10`
      );
      const repoData: GithubRepo[] = await repoRes.json();

      setState({
        user: userData,
        repos: repoData,
        loading: false,
        error: null,
      });
    } catch (err) {
      setState({
        user: null,
        repos: [],
        loading: false,
        error: err instanceof Error ? err.message : "Bir hata oluştu!",
      });
    }
  };

  return { ...state, fetchUser };
}