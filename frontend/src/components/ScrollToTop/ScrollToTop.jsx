import { FaAnglesUp } from 'react-icons/fa6';

export default function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const strictStyle = {
    position: 'fixed',
    bottom: '50px',
    right: '20px',
    backgroundColor: '#481811',
    color: '#ffffff',
    padding: '12px',
    borderRadius: '8px',
    cursor: 'pointer',
    zIndex: 9999999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={strictStyle} onClick={scrollToTop}>
      <FaAnglesUp size={24} />
    </div>
  );
}
