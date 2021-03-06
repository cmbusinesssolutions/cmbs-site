import React, { Component } from 'react'
import axios from 'axios'

export default {
  siteRoot: 'https://www.cmbstech.com/',
  getSiteData: () => ({
    title: 'CM Business Solutions',
    lastBuilt: Date.now()
  }),
  Document: ({ Html, Head, Body, children, siteData, renderMeta }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#022140" />
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
  getRoutes: async () => {
    const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        path: '/about',
        component: 'src/containers/About',
      },
      {
        path: '/software_dev',
        component: 'src/containers/SoftwareDev',
      },
      {
        path: '/data_services',
        component: 'src/containers/DataServices',
      },
      {
        path: '/cio',
        component: 'src/containers/CIO',
      },
      {
        path: '/contact',
        component: 'src/containers/Contact',
      },
      {
        path: '/blog',
        component: 'src/containers/Blog',
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          component: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
}
