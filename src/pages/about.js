import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {
    return (
        <Layout>
            <h1>Here's the about page</h1>
            <p>We learn about Bassett and his baked goods</p>
            <Link to="/">Home</Link>
        </Layout>
    )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>About Page</title>

// Step 3: Export your component
export default AboutPage
