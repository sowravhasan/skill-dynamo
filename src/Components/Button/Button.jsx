import './Button.css'

const Button = ({children}) => {
    return (
        <button className="button flex justify-center items-center">
            {children}
        </button>
    );
};

export default Button;