import React from 'react';

const FormErrors = props => {
    const {errors} = props;
    return (
        <div className='errors'>
            <p>{errors.name}</p>
        </div>
    )
}

export default FormErrors