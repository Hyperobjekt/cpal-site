import React, { useState } from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import { Col, Row, Collapse } from "react-bootstrap"
import SEO from "../components/seo"
import { Link } from "react-scroll"
import CustomLink from "../components/link"
import Hero from "../components/hero"

import minus from "../images/minus.svg"
import plus from "../images/plus.svg"

const how = {
  id: 'how',
  title: ['How we', 'made it'], // break between lines
  questions: [
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
  ]
}
const purpose = {
  id: 'purpose',
  title: ['Purpose'],
  questions: how.questions
}
const methods = {
  id: 'methods',
  title: ['Methods'],
  questions: how.questions
}
const lorem1 = {
  id: 'lorem1',
  title: ['Lorem'],
  questions: how.questions
}
const lorem2 = {
  id: 'lorem2',
  title: ['Lorem'],
  questions: how.questions
}
const sections = [how, purpose, methods, lorem1, lorem2]

const Faqs = () => {
  const [expandedMap, setState] = useState({})

  const toggleExpansion = (uid, expand) => {
    setState({
      ...expandedMap,
      [uid]: expand
    })
  }

  return (
    <Layout pageInfo={{ pageName: "faqs" }} id="faqs-page">
      <SEO title="FAQs" />

      <Hero>
        <div className="page-title-section">
          <div className="title">Frequently Asked Questions</div>
          <div className="subtitle">Have questions about our data or the explorer?</div>
        </div>
      </Hero>

      <div className="side-menu">
        <span className="jump">Jump to</span>
        <br/ >
        {sections.map(s => (
          <>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              to={s.id+'-title'}
              offset={0}
              // containerId="faqs-page"
              className="menu-title"
            >
                {s.title.join(' ')}
            </Link>
            <br/>
          </>
        ))}
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            to="methods"
            offset={0}
            // containerId="faqs-page"
            className="menu-title"
          >
            Methods Paper
          </Link>
      </div>

      
      {sections.map((s, idx) => {
        let classes = `faq-section ${s.id}-section`
        if (idx % 2) { // even in *human* counting, odd in JS zero-based numbering
          classes += ' even'
        }
        if (idx === 0) {
          classes += ' first'
        }
        if (idx === sections.length-1) {
          classes += ' last'
        }
        return (
          <Row noGutters 
            className={classes}
            key={s.id}
          >

            <Col
              className="questions"
              id={`${s.id}-title`}
              xs={{span: 10, offset: 1}}
              md={{span: 6, offset: 5}}
              xl={{span: 4, offset: 5}}
            >

                {s.questions.map((q, idx) => {
                  const uid = `${s.id}-${idx}`
                  const expanded = expandedMap[uid]
                  let classes = 'question'
                  classes += expanded ? ' expanded' : ''
                  const icon = expanded ? minus : plus
                  return (
                    <div className={classes} id={uid} key={uid}>
                      <div
                        className="question-text"
                        onClick={toggleExpansion.bind(this, uid, !expanded)}
                        // aria-controls="example-collapse-text"
                        // aria-expanded={expanded}
                      >
                        <span className="text">
                          {q.text}
                          <img src={icon} className="svg-base expander-icon" />
                        </span>
                      </div>
                      <Collapse in={expanded}>
                        <div className="question-body">
                          {q.body}
                        </div>
                      </Collapse>
                    </div>
                  )
                })}
              
            </Col>
          </Row>
        )
      })}

      <Row noGutters className="methods-paper-section">
        <Col xs={{ offset: 2, span: 10}} className="methods-paper" id="methods">
          <Row noGutters>
            <Col xs={{ offset: 1, span: 4}} className="title">
              <div>Methods</div>
              <div>Paper</div>
            </Col>
            <Col xs={5} className="description">
              <div className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </div>
              <CustomLink>Download paper</CustomLink>
            </Col>
          </Row>
        </Col>
      </Row>
      {/* <Link to="/">Go back to the homepage</Link> */}

    </Layout>
  )
}

export default Faqs