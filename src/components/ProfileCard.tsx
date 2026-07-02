import type { GithubUser } from "../types/github";
import StatCounter from "./StatCounter";

interface Props {
  user: GithubUser;
}

export default function ProfileCard({ user }: Props) {
  const joinYear = new Date(user.created_at).getFullYear();

  return (
    <div className="profile-card">
      <div className="profile-top">
        <img src={user.avatar_url} alt={user.login} className="avatar" />
        <div className="profile-info">
          <h2 className="profile-name">{user.name ?? user.login}</h2>
          <a href={user.html_url} target="_blank" rel="noreferrer" className="profile-username">
            @{user.login}
          </a>
          {user.bio && <p className="profile-bio">{user.bio}</p>}
          {user.email && <p className="profile-email">✉️ {user.email}</p>}
          <div className="profile-meta">
            {user.location && <span>📍 {user.location}</span>}
            {user.company && <span>🏢 {user.company}</span>}
            {user.blog && <a href={user.blog} target="_blank" rel="noreferrer">🔗 {user.blog}</a>}
            <span>📅 {joinYear}'den beri</span>
          </div>
        </div>
      </div>
      <div className="stats-grid">
        <StatCounter label="Takipçi" value={user.followers} icon="👥" />
        <StatCounter label="Takip" value={user.following} icon="➕" />
        <StatCounter label="Repo" value={user.public_repos} icon="📦" />
        <StatCounter label="Gist" value={user.public_gists} icon="📝" />
      </div>
    </div>
  );
}