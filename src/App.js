import React, { useState } from 'react'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import AceEditor from 'react-ace'
import alphabetize from 'alphabetize-object-keys'
import autoParse from 'auto-parse'
import beautify from 'js-beautify'
import 'bulma/css/bulma.min.css'

import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/theme-github'

import { Header, Button } from './components'

function App() {
  const [value, setValue] = useState(`{
  name: 'Cloud Strife',
  birthPlace: 'Nibelheim',
  age: 21,
  height: '5 feet 7 inches'
}
  `)

  const onEditorChange = (val) => {
    console.log(typeof val)
    setValue(val)
  }

  const alphabetizeThatShit = () => {
    try {
      const beautified = beautify(value)

      JSON.parse(`{ "name": "Alex" }`, (key, value) => {
        console.log({ key, value })
      })
    } catch (error) {
      console.log(error)
    }
  }

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
          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.6 } }}
            whileHover={{
              scale: 1.02,
            }}
          >
            <Editor
              width="1000px"
              height="500px"
              mode="javascript"
              theme="github"
              value={value}
              onChange={onEditorChange}
              name="sort-object-editor"
              editorProps={{ $blockScrolling: true }}
              className="box"
            />
          </motion.div>
          <Button
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 1 } }}
            whileHover={{ y: -3, x: -3, scale: 1.01 }}
            onClick={alphabetizeThatShit}
          >
            Alphabetize
          </Button>
        </TextareasContainer>
      </StyledApp>
    </>
  )
}

const Editor = styled(AceEditor)`
  background-color: #fff;
  resize: none;
  outline: none;
  border: none;
  border-radius: 0.3rem;
  padding: 1rem;
  font: inherit;
  font-family: 'Source Code Pro', monospace;
  box-shadow: 6px 6px 0px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 12px 12px 10px rgba(0, 0, 0, 0.2);
  }
`

const TextareasContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const Lead = styled(motion.p)`
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  margin-top: -1.5rem;
  font-weight: bold;
  color: #fff;
  text-shadow: 3px 3px 0px rgba(0, 0, 0, 0.2);
`

const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
`

export default App

// {
//   amountOfItemsToShow: PropTypes.number,
//   bodyRow: PropTypes.arrayOf(
//     PropTypes.shape({
//       clusters: PropTypes.number.isRequired,
//       created: PropTypes.string.isRequired,
//       region: PropTypes.string.isRequired,
//       storage: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   className: PropTypes.string,
//   headerRow: PropTypes.arrayOf(
//     PropTypes.shape({
//       key: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
// }
