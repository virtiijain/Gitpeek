export default function ProfilePage({ params }) {
  const { username } = params;
  return <div>Profile for {username}</div>;
}
