import { useState } from 'react';

export default function InputEmail() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);
        try {
            const res = await fetch('http://localhost:5000/api/waitlist', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });
            const data = await res.json();
            if (res.ok) {
                setStatus({ type: 'success', message: data.message });
                setEmail('');
            } else {
                setStatus({ type: 'error', message: data.error || 'Something went wrong' });
            }
        } catch {
            setStatus({ type: 'error', message: 'Network error' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="md:w-3/3 w-full h-12 flex justify-center items-center bg-gray-200  rounded-full pl-6 pr-1 mb-3">
                <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email address"
                    className="w-full h-full outline-none"
                    required
                    disabled={loading}
                />
                <button
                    className="btn rounded-full hover:bg-gray-900 hover:text-white"
                    type="submit"

                >
                    {loading ? 'Joining...' : 'Get Notified'}
                </button>
            </form>
            {status && (
                <div style={{ color: status.type === 'error' ? 'red' : 'green', marginTop: 8 }}>
                    {status.message}
                </div>
            )}
        </>
    );
}
