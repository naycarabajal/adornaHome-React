const Button = (func, label) => {
    return (
        <button onclick={() => func()}>{label}</button>
    )
}

export default Button
