export default function UserCard({ username, avatarUrl, bio, isOnline }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      borderRadius: '10px',
      width: '400px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        border: isOnline ? '5px solid #4CAF50' : '5px solid transparent',
        overflow: 'hidden',
        marginBottom: '10px',
      }}>
        <img src={avatarUrl} alt={username} width="100px" style={{borderRadius: '50%'}} />
      </div>
      <h2>{username}</h2>
      <p>{bio}</p>
    </div>
  )
}
