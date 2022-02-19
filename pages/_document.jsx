import Document, {Html, Head, Main, NextScript} from "next/document"

export default class CustomDocument extends Document {
    render(){
        return (
          <Html>
            <Head>

                {/* primary meta tags  */}

                <meta name="title" content="Crossknot Hacks" />
                <meta name="description" content="CrossKnot hacks is a 36 hours an interactive coding event to bring developers and other interested people together to improve upon or build a new software program." />
                <meta name="keywords" content="HTML, CSS, JavaScript, crossknot, crossknot, hacks, hackathon, crossknot hacks, prizes, collaboration , create, creativity, carnival, celeberation, winter, beginning of year" />
                <meta name="robots" content="index, follow" />

                
                <link rel="icon" href="/favicon.ico" />

                {/* open-graph / facebook  */}
                <meta property="og:title" content="CrossKnot Hacks" />
                <meta property="og:description" content="CrossKnot is a 36 hours an interactive coding event to bring developers and other interested people together to improve upon or build a new software program." />
                <meta property="og:type" content="hackathon site" />
                <meta property="og:url" content="https://crossknothacks.co" />
                <meta property="og:site_name" content="CROSSKNOT HACKS" />
                <meta property="og:image" content="https://media.discordapp.net/attachments/899973834491461722/944493637557977168/crossKnotHacksLogo.png" />


                 {/* twitter  */}
                <meta property="twitter:title" content="CrossKnot Hacks" />
                <meta property="twitter:image" content="https://media.discordapp.net/attachments/899973834491461722/903981269245906944/xo-color-blue.png" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:description" content="CrossKnot is a 36 hours an interactive coding event to bring developers and other interested people together to improve upon or build a new software program." />
                <meta name="twitter:image:alt" content="CrossKnot Hacks" />
                <meta name="twitter:site" content="@crossknotcomm" />
                <meta name="twitter:creator" content="@crossknotcomm" />
                <link href="http://crossknothacks.co/" rel="canonical" />
            </Head>
            
            <body>
                <Main />
            </body>

            <NextScript />
        </Html>
        )
    }
}