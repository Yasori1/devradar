import type { GithubRepo } from "../types/github";

interface Props {
  repos: GithubRepo[];
}

export default function RepoList({ repos }: Props) {
  if (repos.length === 0) return null;

  return (
    <div className="repo-section">
      <h3 className="section-title">⭐ En Popüler Repolar</h3>
      <div className="repo-list">
        {repos.map((repo) => (
          <a key={repo.id} href={repo.html_url} target="_blank" rel="noreferrer" className="repo-card">
            <div className="repo-top">
              <span className="repo-name">📦 {repo.name}</span>
              <div className="repo-stats">
                <span>⭐ {repo.stargazers_count}</span>
                <span>🍴 {repo.forks_count}</span>
              </div>
            </div>
            {repo.description && (
              <p className="repo-desc">{repo.description}</p>
            )}
            <div className="repo-bottom">
              {repo.language && (
                <span className="repo-lang">{repo.language}</span>
              )}
              <span className="repo-date">
                🕒 {new Date(repo.updated_at).toLocaleDateString("tr-TR")}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}