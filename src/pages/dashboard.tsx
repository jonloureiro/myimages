export default function Deashboard ({ user }) {
  return user ? (
    <h2>private</h2>
  ) : (
    <h2>loading</h2>
  );
}
