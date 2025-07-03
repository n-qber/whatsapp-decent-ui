interface ChatIconProps{
    id: string;
    data: {
        label: string;
        onOpenConversation: () => void;
    }
    type: string;
    positionAbsoluteX: 0,
    positionAbsoluteY: 0,
    selected: boolean,
    selectable: boolean,
    draggable:boolean,
    deletable:boolean,
    isConnectable:boolean
    dragging: boolean,
    zIndex: 0, 
    width: number;
    height: number;
}


export function ChatIcon(data: ChatIconProps){
    return <div style={{
        borderRadius: "50%", overflow: 'hidden',
        objectFit: 'cover',
        border: '6px solid black'
    }} onClick={() => {data.data.onOpenConversation()}}>
        <img src="https://avatars.pfptown.com/689/spiderman-pfp-2325.png"></img>
    </div>
}