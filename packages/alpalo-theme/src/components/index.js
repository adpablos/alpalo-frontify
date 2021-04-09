import React from "react"
import { connect, Global, css, styled, Head } from "frontity"
import Switch from "@frontity/components/switch"
import List from "./list"
import Post from "./post"
import Loading from "./loading"
import Error from "./error"
import HeaderComponent from "./header"
import Destination from "./destination"

const Root = ({ state }) => {
    const data = state.source.get(state.router.link)

    return (
        <>
            <Global
                styles={css`
                    * {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                    }                
                    html {
                        font-family: system-ui, Verdana, Arial, sans-serif;
                    }
                `}
            />
            <Head>
                <title>My First Frontity Theme</title>
                <meta
                    name="description"
                    content="Based on the Frontity step by step tutorial"
                />
            </Head>
            <HeaderComponent isPostType={data.isPostType} isPage={data.isPage}/>
            <Main>
                <Switch>
                    <Error when={data.isError} />
                    <Loading when={data.isFetching}/>
                    <Destination when={data.isDestinationsArchive}/>
                    <List when={data.isArchive} />
                    <Post when={data.isPost} />
                    <Post when={data.isPage} />
                    <Post when={data.isDestinations} />
                </Switch>
            </Main>
        </>
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
