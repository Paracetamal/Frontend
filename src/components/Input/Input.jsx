import './Input.css';

const Input = ({ label, id, placeholder, value, onChange, type = 'text', accept }) => (
    <div className="custom-input">
        <label htmlFor={id}>{label}</label>
        <input
            type={type}
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            accept={accept}
        />
    </div>
);

export default Input;
