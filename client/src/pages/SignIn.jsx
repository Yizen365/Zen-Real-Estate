import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signinStart, signinSuccess, signinFail } from '../redux/user/userSlice';
import OAuth from '../component/OAuth';

const SignIn = () => {
  const {error, loading} = useSelector((state)=> state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({});

  function handleChange(e) {
    setFormData({...formData, [e.target.id]: e.target.value});
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      dispatch(signinStart());
      const response = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const responseData = await response.json();
      if (responseData.success === false) {
        dispatch(signinFail(responseData.message));
        return;
      }
      dispatch(signinSuccess(responseData));
      navigate('/');
    } catch (error) {
      dispatch(signinFail);
    }
  }
 
  return (
    <div className="max-w-lg mx-auto p-8">
      <h1 className="font-semibold text-4xl text-center">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 my-5">
        <input type="text" placeholder="Email" className="border rounded-lg p-2" id="email" onChange={handleChange} />
        <input type="password" placeholder="Password" className="border rounded-lg p-2" id="password" onChange={handleChange} />
        <button disabled={loading} className="uppercase text-white font-semibold bg-slate-700 py-3 rounded-lg hover:bg-slate-600">{loading ? 'loading...' : 'sign in'}</button>
        <OAuth/>
      </form>
      <div className="flex gap-2">
        <p>Don't have an account?</p>
        <Link className="text-blue-600" to={'/signup'}>Sign Up</Link>
      </div>
      {error ? <p className="text-red-500">{error}</p> : null}
    </div>
  )
}

export default SignIn
