import React, { useState } from "react"
import { connect, Global, css, styled, Head } from "frontity"
import Switch from "@frontity/components/switch"
import List from "./list"
import Post from "./post"
import Loading from "./loading"
import Error from "./error"
import Header from "./Header"
import Destination from "./destination"
import defaultCss from "../css/default.css"
import layoutCss from "../css/layout.css"
import Resume from "./Resume";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";

import { CacheProvider } from '@emotion/core'
import createCache from '@emotion/cache'

const Root = ({ state }) => {
    const myCache = createCache()
    myCache.compat = true

    const data = state.source.get(state.router.link)
    return (
        <div className="App">
            <Global styles={defaultCss} />
            <Global styles={layoutCss} />
            <Header />
            {/*<HeaderComponent isPostType={data.isPostType} isPage={data.isPage}/>*/}
            {/*<Main>*/}
            {/*    <Switch>*/}
            {/*        <Error when={data.isError} />*/}
            {/*        <Loading when={data.isFetching}/>*/}
            {/*        <Destination when={data.isDestinationsArchive}/>*/}
            {/*        <List when={data.isArchive} />*/}
            {/*        <Post when={data.isPost} />*/}
            {/*        <Post when={data.isPage} />*/}
            {/*        <Post when={data.isDestinations} />*/}
            {/*    </Switch>*/}
            {/*</Main>*/}
            <About />
            <Resume />
            <Contact />
            <Footer />
        </div>
    )
}

export default connect(Root)

const Main = styled.main`
    max-width: 800px;
    padding: 1em;
    margin: auto;
    
    img {
        max-width: 100%;
    }
    h2 {
        margin: 0.5em 0;
    }
    p {
        line-height: 1.25em;
        margin-bottom: 0.75em;
    }
    figcaption {
        color: #828282;
        font-size: 0.8em;
        margin-bottom: 1em;
    }
`
