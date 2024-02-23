import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import OAuth from '../component/OAuth';

const SignUp = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({});

  function handleChange(e) {
    setFormData({...formData, [e.target.id]: e.target.value});
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      const responseData = await response.json();
      if (responseData.success === false) {
        setError(responseData.message);
        setLoading(false);
        return;
      }
      setError(null);
      setLoading(false);
      navigate('/signin');
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  return (
    <div className="max-w-lg mx-auto p-8">
    <h1 className="font-semibold text-4xl text-center">Sign Up</h1>
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 my-5">
      <input type="text" placeholder="Username" className="border rounded-lg p-2" id="username" onChange={handleChange} />
      <input type="email" placeholder="Email" className="border rounded-lg p-2" id="email" onChange={handleChange} />
      <input type="password" placeholder="Password" className="border rounded-lg p-2" id="password" onChange={handleChange} />
      <button disabled={loading} className="uppercase text-white font-semibold bg-slate-700 py-3 rounded-lg hover:bg-slate-600">{loading ? 'loading...' : 'sign up'}</button>
      <OAuth/>
    </form>
    <div className="flex gap-2">
      <p>Already have an account?</p>
      <Link className="text-blue-600" to={'/signin'}>Sign In</Link>
    </div>
    {error ? <p className="text-red-500">{error}</p> : null}
  </div>
  )
}

export default SignUp
