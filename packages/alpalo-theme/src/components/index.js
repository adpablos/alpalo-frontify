// File: /packages/alpalo-theme/src/components/index.js

import React from "react"
import { connect } from "frontity"

const Root = ({ state }) => {
    return (
        <>
            <h1>Hey there! I am Alex!</h1>
            <p>Current URL from state: {state.router.link}</p>
        </>
    )
}

export default connect(Root)