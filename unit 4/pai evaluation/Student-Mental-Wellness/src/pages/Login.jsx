

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../services/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';


const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isSignup, setIsSignup] = useState(false);
	const [error, setError] = useState('');
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');
		try {
			let user;
			if (isSignup) {
				const res = await createUserWithEmailAndPassword(auth, email, password);
				user = res.user;
				// Create user doc in Firestore
				await setDoc(doc(db, 'users', user.uid), {
					email: user.email,
					createdAt: new Date().toISOString(),
				});
			} else {
				const res = await signInWithEmailAndPassword(auth, email, password);
				user = res.user;
			}
			navigate('/');
		} catch (err) {
			setError(err.message);
		}
	};

		return (
			<div style={{
				maxWidth: 400,
				margin: '48px auto',
				padding: 32,
				background: 'rgba(255,255,255,0.95)',
				borderRadius: 16,
				boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}>
				<h2 style={{ fontWeight: 700, marginBottom: 24 }}>{isSignup ? 'Sign Up' : 'Login'}</h2>
				<form onSubmit={handleSubmit} style={{ width: '100%' }}>
					<input
						type="email"
						placeholder="Email"
						value={email}
						onChange={e => setEmail(e.target.value)}
						required
						style={{
							display: 'block',
							marginBottom: 16,
							width: '100%',
							padding: '10px 14px',
							borderRadius: 8,
							border: '1px solid #ccc',
							fontSize: 16,
							background: '#f7f7f7',
						}}
					/>
					<input
						type="password"
						placeholder="Password"
						value={password}
						onChange={e => setPassword(e.target.value)}
						required
						style={{
							display: 'block',
							marginBottom: 16,
							width: '100%',
							padding: '10px 14px',
							borderRadius: 8,
							border: '1px solid #ccc',
							fontSize: 16,
							background: '#f7f7f7',
						}}
					/>
					<button type="submit" style={{
						width: '100%',
						padding: '12px 0',
						background: '#222',
						color: '#fff',
						border: 'none',
						borderRadius: 8,
						fontWeight: 600,
						fontSize: 18,
						boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
						cursor: 'pointer',
						marginBottom: 8,
					}}>
						{isSignup ? 'Sign Up' : 'Login'}
					</button>
				</form>
				<button onClick={() => setIsSignup(s => !s)} style={{
					width: '100%',
					padding: '10px 0',
					background: '#fff',
					color: '#222',
					border: '1px solid #222',
					borderRadius: 8,
					fontWeight: 500,
					fontSize: 16,
					cursor: 'pointer',
					marginBottom: 8,
				}}>
					{isSignup ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
				</button>
				{error && <p style={{ color: 'red', marginTop: 8 }}>{error}</p>}
			</div>
		);
};

export default Login;
