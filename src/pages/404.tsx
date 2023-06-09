import { Typography } from "@material-ui/core";
import { NextPage } from "next";
import Head from "next/head";


const Page404: NextPage = () => {
    return (
        <div>
            <Head>
                <title>404 - Página não encontrada</title>
            </Head>
            <Typography component="h2" variant="h2" align="center" color="textPrimary" gutterBottom>
                404 - Página não encontrada
            </Typography>
        </div>
    )
}

export default Page404;