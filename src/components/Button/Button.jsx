import "./AnimatedButton.css";

const AnimatedButton = ({ text = "Contact", onClick }) => {
    return (
        <button onClick={onClick} className="animated-btn">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="text">{text}</span>
        </button>
    );
};

export default AnimatedButton;
