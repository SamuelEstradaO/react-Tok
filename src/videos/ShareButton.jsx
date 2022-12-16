import React from 'react';
import { ClearButton, SvgButton } from '../theme';

let ShareButton = ({ video }) => {
    return (
        <div>
            <ClearButton >
                <SvgButton src='/share.svg' ></SvgButton>
            </ClearButton>
        </div>
    )
}

export default ShareButton;