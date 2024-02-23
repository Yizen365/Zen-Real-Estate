import { FaGoogle } from 'react-icons/fa';
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth';
import { app } from '../firebase.js';
import { useDispatch } from 'react-redux';
import { signinSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';

const OAuth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    async function handleGoogleClick() {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);

            const result = await signInWithPopup(auth, provider);

            const response = await fetch('/api/auth/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({username: result.user.displayName, email: result.user.email, photo: result.user.photoURL}),
            });
            const responseData = await response.json();
            dispatch(signinSuccess(responseData));
            navigate('/');
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    }

    return (
        <button onClick={handleGoogleClick} type='button' className="bg-white py-3 rounded-lg uppercase font-semibold flex items-center justify-center gap-2">
            <FaGoogle className='text-xl' />continue with google
        </button>
    )
}

export default OAuth;