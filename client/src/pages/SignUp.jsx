import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className="max-w-lg mx-auto p-8">
    <h1 className="font-semibold text-4xl text-center">Sign Up</h1>
    <form className="flex flex-col gap-4 my-5">
      <input type="text" placeholder="Username" className="border rounded-lg p-2" id="username"  />
      <input type="email" placeholder="Email" className="border rounded-lg p-2" id="email"  />
      <input type="password" placeholder="Password" className="border rounded-lg p-2" id="password"  />
      <button className="uppercase text-white font-semibold bg-slate-700 py-3 rounded-lg hover:bg-slate-600">sign up</button>
    </form>
    <div className="flex gap-2">
      <p>Already have an account?</p>
      <Link className="text-blue-600" to={'/signin'}>Sign In</Link>
    </div>
    {/* {error ? <p className="text-red-500">{error}</p> : null} */}
  </div>
  )
}

export default SignUp