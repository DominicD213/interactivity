import React from 'react'
import TabButton from '../components/TabButton'
import { EXAMPLES } from '../data';
import { useState } from 'react';
import Section from './Section';
import Tabs from '../components/tabs';

const Examples = () => {
    const [menuSelect, newmenuSelect] = useState();
    // the useSate function is a unigue funtion to react and will be used to manage the value/state
    // that will change throughout the apps life cylce
  
    function handleSelect(selectbutton) {
      newmenuSelect(selectbutton);
    }
    // when the button is selected it call upon the handles select function and pass the paremeter as a new state value
    
  return (
    <Section Title={'Examples'} id='examples'>
        <Tabs 
        ButtonsContainer= 'menu'
        buttons={
          <>
          <TabButton isSelected={menuSelect === 'components'} onClick = {() => {handleSelect('components')}}>Components</TabButton>
          <TabButton isSelected={menuSelect === 'jsx'} onClick = {() => {handleSelect('jsx')}}>JSX</TabButton>
          <TabButton isSelected={menuSelect === 'props'} onClick = {() => {handleSelect('props')}}>Props</TabButton>
          <TabButton isSelected={menuSelect === 'state'} onClick = {() => {handleSelect('state')}}>State</TabButton>
          </>
          }/>
        {!menuSelect && <p>Please Select a topic</p>}
        {menuSelect && (
        <div id="tab-content">
          <h3>{EXAMPLES[menuSelect].title}</h3>
          <p>{EXAMPLES[menuSelect].description}</p>
          <pre>
              <code>
                {EXAMPLES[menuSelect].code}
              </code>
          </pre>
        </div>
        )}
      </Section>
    
  )
}

export default Examples