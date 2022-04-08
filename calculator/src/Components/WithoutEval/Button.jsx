import "./Button.css";

const Button = ({ value, color, handleClick }) => {
    return (
        <div
            onClick={() => handleClick(value)}
            className="button-wrapper"
            style={{ backgroundColor: color }}
        >
            {value}
        </div>
    );
};

export default Button;