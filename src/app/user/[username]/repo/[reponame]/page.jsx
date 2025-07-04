export default function RepoDetailPage({ params }) {
  const { username, reponame } = params;
  return <div>Repo: {reponame} by {username}</div>;
}