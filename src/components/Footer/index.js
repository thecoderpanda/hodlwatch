import React from 'react'
import { Footer, Container, Content } from 'bloomer'
import { APP_NAME } from 'appConstants'

const AppFooter = () => (
  <Footer>
    <Container>
      <Content hasTextAlign="centered">
        <p>
          <strong>{APP_NAME}</strong> Made With Love by{' '}
          <a href="https://procohat.com" target="blank">
            ProCohat
          </a>
        </p>
        
      </Content>
    </Container>
  </Footer>
)

export default AppFooter
