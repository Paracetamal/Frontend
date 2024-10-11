import './Input.css';

const Input = ({ label, id, placeholder, register, validationRules, value, onChange, type = 'text', accept, errors = {}, clearErrors }) => (
    <div className={`custom-input ${errors[id] && "input-error"}`}>
        <label htmlFor={id}>{label}</label>
        {register ? (
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                {...register(id, validationRules)}
                onChange={(event) => {
                    onChange && onChange(event);
                    if (clearErrors) {
                        clearErrors(id);
                    }
                }}
                accept={accept}
            />
        ) : (
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                accept={accept}
            />
        )}

        <p className="error-message">
            {errors[id] && errors[id].message}
        </p>
    </div>
);


export default Input;