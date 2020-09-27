import Link from 'next/link';

export default function Home () {
  return (
    <>
      <h2>Home</h2>
      <Link href='/dashboard'>
        <a>dashboard</a>
      </Link>
    </>
  );
}
