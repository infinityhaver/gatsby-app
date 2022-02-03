const path = require(`path`)
const chunk = require(`lodash/chunk`)

const createPosts = require('./create/createPosts')
const { setOptions, createPages } = require('./create/createPages')

setOptions({
  postTypes: ['Page'],
  graphQLFieldGroupName: 'pageComponents',
  graphQLFieldName: 'pageComponents',
})

module.exports.createPages = async gatsbyUtilities => {
  await createPages(gatsbyUtilities)
  await createPosts(gatsbyUtilities)
}
