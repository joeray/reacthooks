import React from 'react'

export default function Button({ legend, action: parentAction }) {
    return (
        <button data-testid="action-button" type="submit" onClick={parentAction}>
            {legend}
        </button>
    )
}
