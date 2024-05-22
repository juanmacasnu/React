export function MouseClicker(){
    function buttonClick (event) {
        console.log(event.target.name, event.target);
    }

    return (
        <div>
            <button name ="buttonToClick" onClick={buttonClick}>
                <img src="" alt="" width={30} height={30} />
                Click me
            </button>
        </div>
    )
}