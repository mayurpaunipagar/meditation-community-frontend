export default function ChatBox(){
    return <>
    <div className="chatbox-container">
        <div className="cb-messages"></div>
        <div className="cb-input-container myRowCenter">
            <input className="cb-input" type="text"/>
            

            <button className="cb-btn">SEND</button>
            
        </div>

    </div>
    </>;
}