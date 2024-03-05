export default function ChatBubble({ message, backgroundColor, fromYourself, typing }) {

  const triangleStyle = {
    content: '""',
    position: 'absolute',
    bottom: 0,
    borderStyle: 'solid',
  };

  if (fromYourself) {
    triangleStyle.right = 0;
    triangleStyle.borderColor = `transparent ${backgroundColor} transparent transparent`;
  } else {
    triangleStyle.left = 0;
    triangleStyle.borderColor = `transparent transparent transparent ${backgroundColor}`;
  }

  return (
    <div style={{
      backgroundColor,
      padding: '10px',
      borderRadius: '10px',
      alignSelf: fromYourself ? 'flex-end' : 'flex-start',
      wordWrap: 'initial',
      position: 'relative',
      fontStyle: typing ? 'italic' : 'normal',
    }}>
      {message}
      <div style={triangleStyle}></div>
    </div>
  )
}
