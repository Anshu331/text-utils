import React, { memo } from 'react'
import PropTypes from 'prop-types'

const Alert = memo(function Alert(props) {
    const capitalize = (word) => {
        if (!word) return '';
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        <div style={{ height: '50px' }}>
            {props.alert && (
                <div 
                    className={`alert alert-${props.alert.type} alert-dismissible fade show`} 
                    role="alert"
                    style={{ marginBottom: 0 }}
                >
                    <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
                </div>
            )}
        </div>
    )
});

Alert.propTypes = {
    alert: PropTypes.shape({
        msg: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired
    })
};

export default Alert
