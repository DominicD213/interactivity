import TabButton from "./TabButton"

export default function Tabs ({children, buttons, ButtonsContainer = 'menu'}) {
    //const ButtonsContainer = buttonsContainer
    // you can set a default value with a = sign after the prop ann then giving it a value
    // If you want to create your own custom dynamic component you can create another perameter
    // but you must first create a const variable to hold that component information in the child object
    return<>
        <ButtonsContainer>
            {buttons}
        </ButtonsContainer>
        {children}
    </>
}