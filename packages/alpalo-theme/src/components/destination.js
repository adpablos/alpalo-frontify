import React from "react"
import { connect, styled } from "frontity"

const Destination = ({ state }) => {
    const data = state.source.get(state.router.link)
    const regions = state.source.regions

    return (
        <Items>
            {   Object.keys(regions).map(function(key, index) {
                    return(
                        <div key={regions[key].id}>
                            <h4>Region: { regions[key].name } </h4>
                            {data.items.map((item) => {
                                const post = state.source[item.type][item.id]
                                const img = state.source.attachment[post.featured_media]
                                return (
                                    <div key={item.id}>
                                        {post.regions[0] == regions[key].id &&
                                            <>
                                                <h5>{post.title.rendered}</h5>
                                                { img && <img src={img.source_url} alt={img.alt_text} /> }
                                                <br />
                                                {post.excerpt.rendered}
                                            </> }
                                    </div>
                                )
                            })}
                        </div>
                    )
            })}
        </Items>
    )
}

export default connect(Destination)

const Items = styled.div`
  & > a {
    display: block;
    margin: 6px 0;
    font-size: 1.2em;
    color: 'lightsteelblue';
    text-decoration: none;
  }
`