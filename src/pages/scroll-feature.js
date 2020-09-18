import React from "react"
import { Col, Row } from "react-bootstrap"

import AnimatedScroll from "./../components/AnimatedScroll"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ScrollFeature = () => (
  <Layout>
    <SEO title="Custom Scroll Test Page" />
    <AnimatedScroll />
  </Layout>
)

export default ScrollFeature