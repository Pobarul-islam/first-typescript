import React from 'react';

type buttonStyleProps = {
    btnStyle: React.CSSProperties
}
const ButtonStyls = (props: buttonStyleProps) => {
    return (
        <div>
            <h4 style={props.btnStyle}>Button Style</h4>
        </div>
    );
};

export default ButtonStyls;