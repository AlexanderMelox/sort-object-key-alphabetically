import React, { useState, useEffect } from 'react'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import 'bulma/css/bulma.min.css'

import { Header } from './components'

function App() {
  return (
    <>
      <Global
        styles={css`
          :root {
            --color1: #d1faffff;
            --color2: #9bd1e5ff;
            --color3: #6a8eaeff;
            --color4: #57a773ff;
            --color5: #157145ff;
          }

          *,
          *::before,
          *::after {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          ::selection {
            color: white;
            background: var(--color2);
          }

          body {
            background-color: var(--color3);
            color: var(--color1);
            font-family: 'Open Sans', -apple-system, BlinkMacSystemFont,
              'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
              'Helvetica Neue', sans-serif;
            font-weight: 300;
          }
        `}
      />
      <StyledApp className="container is-fluid">
        <motion.section
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0, rotate: -2 }}
          whileHover={{ rotate: 0, scale: 1.1, color: 'white' }}
          className="section"
        >
          <Header>
            Sort my object <br /> alphabetically.
          </Header>
        </motion.section>
        <Lead
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          Paste your Javascript object below and magic will happen{' '}
          <span aria-label="magicians hat" role="img">
            🧙🏼‍♂️
          </span>
        </Lead>
        <TextareasContainer>
          <Textarea className="box"></Textarea>
          <Textarea className="box"></Textarea>
        </TextareasContainer>
      </StyledApp>
    </>
  )
}

const Textarea = styled.textarea`
  background-color: #fff;
  height: 500px;
  width: 100%;
  resize: none;
  outline: none;
  border: none;
  border-radius: 0.3rem;
  padding: 1rem;
  font: inherit;
`

const TextareasContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
`

const Lead = styled(motion.p)`
  text-align: center;
  font-size: 1.3rem;
  margin-bottom: 1rem;
`

const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
`

export default App
