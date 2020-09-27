import Link from 'next/link';

export default function Navbar () {
  return (
    <nav className='navbar'>
      <div className='container-fluid'>
        <div className='navbar-brand'>
          <a className='text-secondary h2 text-decoration-none' href=''>jonloureiro</a>
          <span className='text-secondary mx-2 h2'>/</span>
          <Link href='/'>
            <a className='h2 text-decoration-none'>myimages</a>
          </Link>
        </div>
        <button
          className='btn btn-outline-danger d-flex justify-content-center align-items-center'
          style={{ width: '2.5rem', height: '2.5rem' }}
        >
          <i className='gg-log-in' />
        </button>
      </div>
    </nav>
  );
}
