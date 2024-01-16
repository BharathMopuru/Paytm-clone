import ButtonComponent from "./ButtonComponent";

const ButtonContainer = () => {

    const clickEventHandler = () => {
        console.log("button clicked")
    }
    return <ButtonComponent onclick = {clickEventHandler}/>
}


export default ButtonContainer;