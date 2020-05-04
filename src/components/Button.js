import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export const Button = styled(motion.button)`
  border: none;
  outline: none;
  font: inherit;
  font-family: 'Open Sans', sans-serif;
  text-transform: lowercase;
  text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.2);
  font-weight: 600;
  border-radius: 0.3rem;
  background: var(--color4);
  padding: 0.5rem 1rem;
  letter-spacing: 2px;
  margin-top: 2rem;
  color: inherit;
  font-size: 1.3rem;
  box-shadow: 6px 6px 0px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.2s;
  cursor: pointer;

  &:hover {
    box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.2);
  }
`
