import React, { Component } from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons/faArrowUp'

import { rhythm } from '../utils/typography'

const Sentinel = styled.div`
  position: absolute;
  top: ${rhythm(4)};
  left: 0;
`

const Button = styled.a`
  border-radius: ${rhythm(0.5)};
  height: ${rhythm(1)};
  min-width: ${rhythm(1)};
  transition: 0.3s;
  background-color: ${props => rgba(props.theme.blue, 0.75)};
  position: fixed;
  left: ${rhythm(0.5)};
  bottom: ${rhythm(1)};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${props => (props.visible ? 1 : 0)};
  text-decoration: none;

  :hover {
    background-color: ${props => rgba(props.theme.blue, 1)};
  }
`

class Shortcut extends Component {
  state = {
    visible: false,
  }

  sentinel = React.createRef()

  componentDidMount = async () => {
    await import('intersection-observer')
    this.observer = new IntersectionObserver(this.handleIntersect)
    if (this.sentinel.current) {
      this.observer.observe(this.sentinel.current)
    }
  }

  componentWillUnmount = () => {
    this.observer.disconnect()
  }

  handleIntersect = ([{ isIntersecting }]) => {
    const { visible } = this.state
    if (visible !== !isIntersecting) {
      this.setState({
        visible: !isIntersecting,
      })
    }
  }

  render() {
    const { visible } = this.state
    return (
      <>
        <Sentinel ref={this.sentinel} />
        <Button visible={visible} href="#blog-title" title="回到顶部">
          <FontAwesomeIcon icon={faArrowUp} />
        </Button>
      </>
    )
  }
}

export default Shortcut
