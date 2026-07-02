import { useGithubUser } from "./hooks/useGithubUser";
import SearchBar from "./components/SearchBar";
import ProfileCard from "./components/ProfileCard";
import RepoList from "./components/RepoList";
import LanguageChart from "./components/LanguageChart";
import "./index.css";

function App() {
  const { user, repos, loading, error, fetchUser } = useGithubUser();

  return (
    <div className="app">
      <header className="app-header">
        <h1>🐙 DevRadar</h1>
        <p>GitHub profil analiz aracı</p>
      </header>

      <SearchBar onSearch={fetchUser} loading={loading} />

      {loading && (
        <div className="loading">
          <div className="spinner"></div>
          <p>Profil yükleniyor...</p>
        </div>
      )}

      {error && (
        <div className="error-box">
          ❌ {error}
        </div>
      )}

      {user && !loading && (
        <div className="results">
          <ProfileCard user={user} />
          <div className="charts-repos">
            <LanguageChart repos={repos} />
            <RepoList repos={repos} />
          </div>
        </div>
      )}

      {!user && !loading && !error && (
        <div className="empty-state">
          <p>🔍 Bir GitHub kullanıcı adı arayın</p>
          <p className="empty-hint">Örnek: torvalds, gaearon, yyx990803</p>
        </div>
      )}
    </div>
  );
}

export default App;