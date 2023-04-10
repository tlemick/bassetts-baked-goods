const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const createCategoryPages = (products, createPage) => {
    const categoriesFound = []

    products.forEach((product) => {
        const category = product?.frontmatter?.category
        if (category && !categoriesFound.includes(category)) {
            categoriesFound.push(category)
        }
    })

    categoriesFound.forEach((cat) => {
        createPage({
            path: `category/${cat.toLowerCase()}`,
            component: path.resolve(`./src/templates/category-page.js`),
            context: {
                category: cat,
            },
        })
    })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    // Define a template for product page
    const bakedGood = path.resolve(`./src/templates/baked-good.js`)

    // Get all markdown
    const result = await graphql(
        `
            {
                allMdx(filter: { frontmatter: {} }) {
                    nodes {
                        frontmatter {
                            slug
                            category
                        }
                        id
                    }
                }
            }
        `
    )

    if (result.errors) {
        reporter.panicOnBuild(
            `There was an error loading your products`,
            result.errors
        )
        return
    }

    const products = result.data.allMdx.nodes

    // Create products pages

    if (products.length > 0) {
        products.forEach((product, index) => {
            const previousPostId = index === 0 ? null : products[index - 1].id
            const nextPostId =
                index === products.length - 1 ? null : products[index + 1].id

            createPage({
                path: `${product.frontmatter.category}/${product.frontmatter.slug}`,
                component: bakedGood,
                context: {
                    id: product.id,
                    previousPostId,
                    nextPostId,
                },
            })
        })
        createCategoryPages(products, createPage)
    }
}
