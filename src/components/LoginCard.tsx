export default function LoginCard () {
  return (
    <div className='container flex-grow-1 d-flex justify-content-center align-items-center'>
      <div className='card bg-transparent border-secondary' style={{ width: '20rem' }}>
        <div className='card-body'>
          <h4 className='card-title text-center'>Welcome</h4>
          <p className='card-text text-center'>log in to <span className='font-weight-bold'>myimages</span> to continue</p>
          <button type='button' className='btn btn-secondary btn-block'>sign with github</button>
        </div>
      </div>
    </div>
  );
}
